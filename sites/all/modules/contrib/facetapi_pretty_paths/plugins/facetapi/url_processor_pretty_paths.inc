<?php

/**
 * @file
 * A custom URL processor for pretty paths.
 */

/**
 * Extension of FacetapiUrlProcessor.
 */
class FacetapiUrlProcessorPrettyPaths extends FacetapiUrlProcessorStandard {

  /**
   * An array of filter params.
   *
   * @var array.
   */
  protected $filterParams = array();

  /**
   * An array of pretty path segments.
   *
   * @var array.
   */
  protected $pathSegments = array();

  /**
   * The adapter that uses this FacetapiUrlProcessor.
   *
   * @var FacetapiAdapter
   */
  protected $adapter = array();

  /**
   * Options that apply for this FacetapiUrlProcessor.
   */
  protected $options = array();

  /**
   * The full path string, as we override $_GET['q].
   */
  protected $fullPath = NULL;

  /**
   * The base path for constructing pretty facet paths.
   */
  protected $basePath = NULL;

  /**
   * Constructor, sets adapter.
   *
   * @param FacetapiAdapter $adapter
   *   The adapter that uses this FacetapiUrlProcessor.
   */
  function __construct(FacetapiAdapter $adapter) {
    $this->adapter = $adapter;
    $this->options = variable_get('facetapi_pretty_paths_searcher_' . $this->adapter->getSearcher() . '_options');
  }

  /**
   * Pulls facet params from the $_GET variable.
   *
   * Overrides FacetapiUrlProcessorStandard::fetchParams().
   */
  public function fetchParams() {
    // Skip pretty paths logic for admin pages, as
    // for pretty paths, we have to manipulate $_GET['q].
    // @todo: Fix this workaround?
    if (strpos($_GET['q'], 'admin/') === 0) {
      return $_GET;
    }

    $this->fullPath = $_GET['q'];

    $this->filterParams = array();
    $facets = $this->adapter->getEnabledFacets();

    // @todo temp fix.
    $view = views_get_current_view();
    if ($view) {
      $this->basePath = $view->get_path();
    }

    $path = str_replace($this->basePath, '', $this->fullPath);
    $args = explode('/', $path);

    // Traverse all segments from right to left (array_pop).
    while (($value = array_pop($args)) !== NULL) {
      // First of all try to resolve the facet by a single URL argument. If not
      // possible take the "<alias>/<value>" pair.
      $facet = $this->resolveFacetByValue($value, $this->adapter);
      if ($facet) {
        $this->addFacetParams($value, $facet);
      }
      else {
        if (!($alias = array_pop($args))) {
          // Restore last url part, if this was an incomplete segment.
          array_push($args, $value);
          break;
        }
        $found = FALSE;
        $alias = $this->decodePathSegmentAlias($alias);

        // Look for matching facet.
        foreach ($facets as $facet_alias => $facet) {
          $pretty_paths_alias = $this->getFacetPrettyPathsAlias($facet);

          // Add to params if alias from url matches alias from facet settings.
          if ($pretty_paths_alias == $alias) {
            $found = TRUE;
            $this->addFacetParams($value, $facet);
          }
        }
        // When no more facet path segments have been found,
        // we assume the rest of the url as the search basePath.
        if (!$found) {
          array_push($args, $alias, $value);
          break;
        }
      }
    }

    $remaining_path = implode('/', $args);
    // Set the rest of the url as the search basePath.
    if (empty($this->basePath)) {
      $this->basePath = $remaining_path;
    }
    elseif (!empty($remaining_path) && strpos(current_path(), $this->basePath) === 0) {
      // In case we have unresolved arguments left, and we are currently on the
      // search page, return a page not found and exit.
      drupal_not_found();
      drupal_exit();
    }

    // Since we traversed all segments from right to left we need to reverse
    // them here. Reason is because the order matters for some facets.
    $this->pathSegments = array_reverse($this->pathSegments);
    $this->filterParams = array_reverse($this->filterParams);

    // Return params as expected.
    $params = $_GET;
    $params['q'] = $this->basePath;
    $params[$this->filterKey] = $this->filterParams;
    return $params;
  }

  /**
   * Helper function that adds a filter value for a facet to the facetParams.
   */
  private function addFacetParams($value, $facet) {
    $value = $this->decodePathSegmentValue($value, $facet);
    $this->filterParams[] = rawurlencode($facet['field']) . ':' . $value;
    // "Copy" to prevent $segment['facet'] from being overridden.
    $my_facet = $facet;
    $segment = $this->getPathSegment($my_facet, $value);
    $this->pathSegments[$segment['key']] = $segment;
  }

  /**
   *  Remove the filter query part from params and return it.
   *
   *  Overrides FacetapiUrlProcessorStandard::getQueryString().
   */
  public function getQueryString(array $facet, array $values, $active) {
    $params = $this->params;
    unset($params[$this->filterKey]);
    return $params;
  }

  /**
   *  Pretty paths will be generated as "search/url/segment1/segment2/".
   *
   *  By default, a segment will look like:
   *    "<alias>/<value>".
   *
   *  Overrides FacetapiUrlProcessorStandard::getFacetPath().
   */
  public function getFacetPath(array $facet, array $values, $active) {
    $segments = $this->pathSegments;
    $active_items = $this->adapter->getActiveItems($facet);

    // Adds to segments if inactive, removes if active.
    foreach ($values as $value) {
      $segment = $this->getPathSegment($facet, $value);
      if ($active && isset($active_items[$value])) {
        unset($segments[$segment['key']]);
      }
      elseif (!$active) {
        $segments[$segment['key']] = $segment;
      }
    }

    // Remove currently active item from the segment path if the facet selection
    // should be limited to one item.
    // @todo Write patch for FAPIPP based on #1393928.
    if ($this->limitActiveItems($facet)) {
      foreach ($segments as $key => $segment) {
        if (isset($active_items[$segment['value']]) && $active_items[$segment['value']]['field alias'] == $segment['facet']['field alias']) {
          unset($segments[$key]);
        }
      }
    }

    $path = $this->constructPath($segments);
    return $path;
  }

  /* ### Generic helpers ### */

  /**
   * Construct a path from for a given array of filter segments.
   *
   * @param array $segments
   * @return string
   */
  public function constructPath(array $segments) {
    if (!empty($this->options['sort_path_segments'])) {
      // Sort to avoid multiple urls with duplicate content.
      uksort($segments, 'strnatcmp');
    }
    $path = $this->getBasePath();
    // Add all path segments.
    foreach ($segments as $key => $segment) {
      $this->encodePathSegment($segment, $segment['facet']);
      if (!empty($segment['alias'])) {
        $path .=  '/' . $segment['alias'] . '/' . $segment['value'];
      }
      else {
        $path .=  '/' . $segment['value'];
      }
    }
    return $path;
  }

  /**
   * Generate a path segment for a given facet + value.
   */
  protected function getPathSegment(&$facet, $value) {
    $pretty_paths_alias = $this->getFacetPrettyPathsAlias($facet);
    return array(
      'alias' => $pretty_paths_alias,
      'value' => $value,
      'facet' => $facet,
      'key' => $pretty_paths_alias . "_" . $value,
    );
  }

  protected function encodePathSegment(array &$segment, array $facet) {
    facetapi_pretty_paths_coder_callback('encodePathSegment',
      array(
        'segment' => &$segment,
        'facet' => $facet,
        'adapter' => $this->adapter,
      )
    );
  }

  protected function decodePathSegmentAlias($alias) {
    return facetapi_pretty_paths_coder_callback('decodePathSegmentAlias',
      array(
        'alias' => $alias
      )
    );
  }

  /**
   * Tries to resolve the facet by a single value in the URL (e.g. a special
   * mapping between term names and vocabularies/facets might be used).
   *
   * For this purpose the method 'resolveFacetByValue' is invoked in all
   * facetapi pretty paths coders.
   *
   * @param $value
   *   The URL value.
   * @param $adapter
   *   The Facet API adapter.
   *
   * @return A facet object if it can be resolved by the value, else FALSE.
   */
  protected function resolveFacetByValue($value, $adapter) {
    $args = array(
      'value' => $value,
      'adapter' => $adapter,
    );

    $coders = facetapi_pretty_paths_facetapi_pretty_paths_coders();
    foreach ($coders as $id => $coder) {
      if ($class = ctools_plugin_load_class('facetapi_pretty_paths', 'coders', $id, 'handler')) {
        $instance = new $class();
        $facet = call_user_func_array(array($instance, 'resolveFacetByValue'), array($args));
        if ($facet) {
          return $facet;
        }
      }
    }
    return FALSE;
  }

  protected function decodePathSegmentValue($value, array $facet) {
    return facetapi_pretty_paths_coder_callback('decodePathSegmentValue',
      array(
        'facet' => $facet,
        'adapter' => $this->adapter,
        'value' => $value,
      )
    );
  }

  /**
   * Returns the pretty_paths_alias for a given facet.
   *
   * If there is no custom pretty_paths_alias settings, in will default
   * to rawurlencode($facet['field alias']).
   */
  public function getFacetPrettyPathsAlias(array $facet) {
    $facet_settings = $this->adapter->getFacetSettingsGlobal($facet);
    // Path alias defaults to facet_name.
    return !empty($facet_settings->settings['pretty_paths_alias']) ?
      $facet_settings->settings['pretty_paths_alias'] : $facet['field alias'];
  }

  /**
   * Implements FacetapiUrlProcessorPrettyPaths::setBreadcrumb().
   */
  public function setBreadcrumb() {
    $breadcrumb = drupal_get_breadcrumb();

    // $facets to use later to get the segment
    $facets = $this->adapter->getEnabledFacets();

    // Gets search keys and active items form the adapter.
    $keys = $this->adapter->getSearchKeys();
    $active_items = $this->adapter->getAllActiveItems();

    $item = menu_get_item();
    $last_load_func = is_array($item['load_functions']) ? end($item['load_functions']) : NULL;
    if (!empty($item['title']) && ((!$keys && $active_items) || ($keys && $last_load_func != 'menu_tail_load'))) {
      $last = end($breadcrumb);
      $this_page = l($item['title'], $item['href'], $item['localized_options']);
      if ($last != $this_page) {
        $breadcrumb[] = $this_page;
      }
    }

    // Initializes base breadcrumb query.
    $query = $this->params;
    unset($query[$this->filterKey]);

    // Adds the current search to the query.
    if ($keys) {
      // The last item should be text, not a link.
      $breadcrumb[] = $active_items ? l($keys, $this->getBasePath(), array('query' => $query)) : check_plain($keys);
    }

    // Use this to track the active facet trail.
    $segments = array();

    // Keep track of what the last item is.
    $last = end($active_items);

    foreach ($active_items as $item) {
      // Add this breadcrumb segment to the complete segments list.
      // Do not use aliases, use the real facet
      $segments[] = $this->getPathSegment($facets[$item['facets'][0]], $item['value']);

      // Replaces with the mapped value.
      $value = $this->adapter->getMappedValue($item['facets'][0], $item['value']);

      // The last item should be text, not a link.
      if ($last == $item) {
        $breadcrumb[] = !empty($value['#html']) ? $value['#markup'] : check_plain($value['#markup']);
      }
      else {
        $base = $this->adapter->getSearchPath();
        $path = $this->constructPath($segments);
        $breadcrumb[] = l($value['#markup'], $path, array('html' => !empty($value['#html'])));
      }
    }

    // Sets the breadcrumb trail with h keys and filters.
    drupal_set_breadcrumb($breadcrumb);
  }

  public function getFullPath() {
    return $this->fullPath;
  }

  public function getBasePath() {
    $basePath = $this->basePath;
    // Mimic search api base path logic which allows to set a custom base path.
    // @see SearchApiFacetapiAdapter::getSearchPath().
    if (module_exists('search_api_facetapi') && $this->adapter instanceof SearchApiFacetapiAdapter) {
      $search = $this->adapter->getCurrentSearch();
      if ($search && $search[0]->getOption('search_api_base_path')) {
        $basePath = $search[0]->getOption('search_api_base_path');
      }
    }
    return $basePath;
  }

}
