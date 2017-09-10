<?php
/**
 * @file
 * Library plugin for Visualization implementing support for
 * Google Visualization API.
 */

class GoogleVisualizationAPIHandler implements VisualizationHandlerInterface {

  protected $addedJavascript = FALSE;

  /**
   * Renders a chart using the Google Visualization API.
   */
  public function render($chart_id, $data, $options) {
    // Default options.
    $chart_options = array(
      'width' => '100%',
      'height' => '100%',
    );

    // Allow override of defaults.
    if (isset($options['chart_options'])) {
      $chart_options = drupal_array_merge_deep($chart_options, $options['chart_options']);
    }

    // Set title.
    $chart_options['title'] = $options['title'];

    switch ($options['type']) {
      case 'map':
        $chart_options['dataMode'] = !empty($options['dataMode']) ? $options['dataMode'] : 'regions';
        break;

      case 'line':
        // If there is only one entry in a line chart we make a nicely visible
        // point.
        if (count($data) == 1) {
          $chart_options['pointSize'] = 5;
        }
        break;
    }

    // Prepare the table array with the data.
    $table_data = array();

    // Add header row first.
    $header = array();

    if (!empty($options['xAxis']['labelField'])) {
      $header[] = $options['fields'][$options['xAxis']['labelField']]['label'];
    }

    foreach ($options['fields'] as $name => $column) {
      if (!empty($column['enabled'])) {
        $header[] = $column['label'];
      }
    }

    $table_data[] = $header;

    // Then add data, row per row.
    foreach ($data as $row) {
      $table_row = array();

      if (!empty($options['xAxis']['labelField'])) {
        $table_row[] = check_plain(strip_tags((string) $row[$options['xAxis']['labelField']]));
      }

      foreach ($options['fields'] as $name => $column) {
        if (!empty($column['enabled'])) {
          $value = (int) $row[$name];

          $table_row[] = $value;
        }
      }

      $table_data[] = $table_row;
    }

    // Support a maximum number of labels on the X-Axis to un-clutter it.
    if (!empty($options['xAxis']['numberLabels'])) {
      $row_count = count($data);
      if ($row_count > $options['xAxis']['numberLabels']) {
        $chart_options['hAxis']['showTextEvery'] = ceil($row_count / $options['xAxis']['numberLabels']);
      }
    }

    $information = array(
      'library' => 'google_visualization',
      'type' => $options['type'],
      'options' => $chart_options,
      'dataArray' => $table_data,
      'chart_id' => $chart_id,
    );

    // Add Drupal.settings for this chart.
    drupal_add_js(array('visualization' => array($chart_id => $information)), array('type' => 'setting'));
  }

  /**
   * Loads the global Javascript required by the Google Visualization API.
   */
  public function postRender() {
    if (!$this->addedJavascript) {
      drupal_add_js('https://www.google.com/jsapi', 'external');
      drupal_add_js('google.load("visualization", "1", {packages:["corechart", "geomap"]});', array('type' => 'inline'));

      drupal_add_js(drupal_get_path('module', 'visualization') . '/js/gva.js', array('scope' => 'footer'));

      $this->addedJavascript = TRUE;
    }
  }

  /**
   * Returns whether or not the plugin is available.
   */
  public function available() {
    return TRUE;
  }

  /**
   * Returns an array of supported chart types.
   */
  public function supportedTypes() {
    return array('line', 'column', 'pie', 'map');
  }

}

$plugin = array(
  'name' => 'gva',
  'label' => t('Google Visualization API'),
  'handler' => new GoogleVisualizationAPIHandler(),
);
