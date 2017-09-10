<?php

/**
 * @file
 * A taxonomy specific coder based on path aliases of terms.
 *
 * This handler reuses the path aliases of terms and hence avoids term ids in
 * the facet URLs.
 *
 * It supports two different modes:
 *   - 'default'
 *     The facet alias is constructed by [facet:alias]/[term:name] and requires
 *     default pathauto pattern for taxonomy terms to be set to
 *     [term:vocabulary]/[term:name]
 *
 *   - 'single term alias mode'
 *     The facet alias is just constructed by [term:name]. This requires the
 *     default pattern to be set to taxonomy/[term:name].
 */

/**
 * Taxonomy pathauto specific implementation of FacetApiPrettyPathsCoder.
 */
class FacetApiPrettyPathsCoderTaxonomyPathauto extends FacetApiPrettyPathsCoderDefault {

  /**
   * Determines whether we should use the single term alias mode.
   */
  private function singleTermAliasMode() {
    static $singleTermAliasMode;

    if (!isset($singleTermAliasMode)) {
      $singleTermAliasMode = FALSE;
      // We ignore per bundle settings here as we do not know the corresponding
      // vocabulary at this stage.
      $general_pattern = pathauto_pattern_load_by_entity('taxonomy_term');
      if ($general_pattern == 'taxonomy/[term:name]') {
        $singleTermAliasMode = TRUE;
      }
    }
    return $singleTermAliasMode;
  }


  /**
   * Taxonomy pathauto special case: <facet alias>/<term-name alias> (default)
   * or <term-name alias> (single term alias mode)
   *
   * @see FacetApiPrettyPathsCoderDefault::encodePathSegment()
   */
  public function encodePathSegment(array $args) {
    $voc_alias = $this->getVocabularyPathAlias($args['facet'], $args['adapter']);
    if ($voc_alias) {
      if ($term = taxonomy_term_load($args['segment']['value'])) {
        // Get the alias ([term:vocabulary]/[term:name]) for this term and
        // extract the term:name part.
        $alias = drupal_lookup_path('alias', 'taxonomy/term/' . $term->tid);
        if ($alias) {
          $parts = explode('/', $alias);
          if (count($parts) == 2) {
            $args['segment']['value'] = $parts[1];
          }
        }
      }
    }

    // Unset the alias for this facet if we are in the single term alias mode.
    if ($this->singleTermAliasMode()) {
      $args['segment']['alias'] = NULL;
    }
    return parent::encodePathSegment($args);
  }

  /**
   * Taxonomy pathauto special case: <facet alias>/<term-name alias> (default)
   * or <term-name alias> (single term alias mode)
   *
   * @see FacetApiPrettyPathsCoderDefault::decodePathSegmentValue()
   */
  public function decodePathSegmentValue(array $args) {
    // Directly take the term name if single mode is on.
    if ($this->singleTermAliasMode()) {
      $term_id = $this->resolveSingleTermAliasModePath($args['value']);
      if ($term_id) {
        $args['value'] = $term_id;
        return parent::decodePathSegmentValue($args);
      }
    }

    // Else reconstruct the term with the vocabulary name and the term name.
    $voc_alias = $this->getVocabularyPathAlias($args['facet'], $args['adapter']);
    if ($voc_alias) {
      // Rebuild the term alias, get the source (taxonomy/term/[term:tid]) and
      // extract the term id.
      $source = drupal_lookup_path('source', $voc_alias . '/' . $args['value']);
      if ($source) {
        $exploded = explode('/', $source);
        if (count($exploded) == 3) {
          $args['value'] = $exploded[2];
        }
      }
      else {
        // If term doesn't exist, just make the value 0. This can help avoid
        // errors down the line if searches are expecting integer values
        $args['value'] = 0;
      }
    }
    return parent::decodePathSegmentValue($args);
  }

  /**
   * Resolves the facet for a single URL value if the single term alias mode is
   * on.
   *
   * @see FacetApiPrettyPathsCoderDefault::resolveFacetByValue()
   */
  public function resolveFacetByValue($args) {
    if (!$this->singleTermAliasMode()) {
      return FALSE;
    }

    $value = $args['value'];
    $adapter = $args['adapter'];

    $term_id = $this->resolveSingleTermAliasModePath($value);
    if ($term_id) {
      $term = taxonomy_term_load($term_id);
      if ($term) {
        $facets = $this->getFacetsByVoc($adapter);
        if (isset($facets[$term->vocabulary_machine_name])) {
          return $facets[$term->vocabulary_machine_name];
        }
      }
    }
    return FALSE;
  }

  /**
   * Helper function that tries to load the term id for a given term name in
   * case the 'single term alias' mode is used.
   *
   * @param $term_name
   *   The escaped term name
   *
   * @return The term id if found, else FALSE.
   */
  private function resolveSingleTermAliasModePath($term_name) {
    // Try to resolve the term id by checking the path alias at
    // taxonomy/[term:name].
    $source = drupal_lookup_path('source', 'taxonomy/' . $term_name);
    if ($source) {
      // The source path consists of three parts: taxonomy/term/[term:tid].
      $exploded = explode('/', $source);
      if (count($exploded) == 3) {
        $term_id = $exploded[2];
        return $term_id;
      }
    }
    return FALSE;
  }

  /**
   * Helper function that returns an array of facets, keyed by the vocabulary
   * machine name.
   */
  private function getFacetsByVoc($adapter) {
    static $facets;
    $adapter_id = $adapter->getId();

    if (!isset($facets[$adapter_id])) {
      $facets[$adapter_id] = array();
      foreach ($adapter->getEnabledFacets() as $facet) {
        $facet_settings = $adapter->getFacetSettingsGlobal($facet);
        if (!empty($facet_settings->settings['pretty_paths_taxonomy_pathauto_vocabulary'])) {
          $facets[$adapter_id][$facet_settings->settings['pretty_paths_taxonomy_pathauto_vocabulary']] = $facet;
        }
      }
    }
    return $facets[$adapter_id];
  }

  /**
   * Helper function that returns the path alias for a vocabulary.
   */
  private function getVocabularyPathAlias($facet_info, $adapter) {
    static $aliases = array();
    if (!isset($aliases[$facet_info['name']])) {
      $aliases[$facet_info['name']] = FALSE;
      $facet_settings = $adapter->getFacetSettingsGlobal($facet_info);
      $voc = taxonomy_vocabulary_machine_name_load($facet_settings->settings['pretty_paths_taxonomy_pathauto_vocabulary']);
      if ($voc && module_exists('pathauto')) {
        // Needed, as of http://drupal.org/node/907578#comment-5564008
        require_once drupal_get_path('module', 'pathauto') . '/pathauto.inc';
        $aliases[$facet_info['name']] = pathauto_cleanstring($voc->name);
      }
    }
    return $aliases[$facet_info['name']];
  }
}
