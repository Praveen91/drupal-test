<?php

/**
 * Implements hook_field_views_data().
 *
 * Views integration for term_level fields. Adds a term relationship to the default
 * field data.
 *
 * @see field_views_field_default_views_data()
 */
function term_level_field_views_data($field) {
  $data = field_views_field_default_views_data($field);
  foreach ($data as $table_name => $table_data) {
    foreach ($table_data as $field_name => $field_data) {
      if (isset($field_data['filter']) && $field_name != 'delta') {
        $data[$table_name][$field_name]['filter']['handler'] = 'views_handler_filter_term_node_tid';
      }
    }

    // Add the relationship only on the tid field.
    $data[$table_name][$field['field_name'] . '_tid']['relationship'] = array(
      'handler' => 'views_handler_relationship',
      'base' => 'taxonomy_term_data',
      'base field' => 'tid',
      'label' => t('term from !field_name', array('!field_name' => $field['field_name'])),
    );

  }

  return $data;
}

/**
 * Implements hook_field_views_data_views_data_alter().
 *
 * Views integration to provide reverse relationships on term references.
 */
function term_level_field_views_data_views_data_alter(&$data, $field) {
  foreach ($field['bundles'] as $entity_type => $bundles) {
    $entity_info = entity_get_info($entity_type);
    $pseudo_field_name = 'reverse_' . $field['field_name'] . '_' . $entity_type;

    list($label, $all_labels) = field_views_field_label($field['field_name']);
    $entity = $entity_info['label'];
    if ($entity == t('Node')) {
      $entity = t('Content');
    }

    $data['taxonomy_term_data'][$pseudo_field_name]['relationship'] = array(
      'title' => t('@entity using @field', array('@entity' => $entity, '@field' => $label)),
      'help' => t('Relate each @entity with a @field set to the term.', array('@entity' => $entity, '@field' => $label)),
      'handler' => 'views_handler_relationship_entity_reverse',
      'field_name' => $field['field_name'],
      'field table' => _field_sql_storage_tablename($field),
      'field field' => $field['field_name'] . '_tid',
      'base' => $entity_info['base table'],
      'base field' => $entity_info['entity keys']['id'],
      'label' => t('!field_name', array('!field_name' => $field['field_name'])),
      'join_extra' => array(
        0 => array(
          'field' => 'entity_type',
          'value' => $entity_type,
        ),
        1 => array(
          'field' => 'deleted',
          'value' => 0,
          'numeric' => TRUE,
        ),
      ),
    );
  }
}
