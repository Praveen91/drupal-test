<?php
/**
 * @file
 * Library plugin for Visualization implementing support for Highcharts.
 */

class HighchartsHandler implements VisualizationHandlerInterface {

  protected $addedJavascript = FALSE;
  protected $available = FALSE;

  /**
   * Constructor for the Highcharts plugin.
   */
  public function __construct() {
    if (module_exists('libraries')) {
      module_load_include('module', 'libraries', 'libraries');
      $path = libraries_get_path('highcharts');

      $this->available = is_dir('./' . $path);
    }
  }

  /**
   * Renders a chart using Highcharts.
   */
  public function render($chart_id, $data, $options) {
    // Default options.
    $chart_options = array(
      'chart' => array(
        'plotBackgroundColor' => NULL,
        'plotBorderWidth' => NULL,
        'plotShadow' => FALSE,
      ),
      'plotOptions' => array(
        'pie' => array(
          'allowPointSelect' => TRUE,
          'cursor' => 'pointer',
          'dataLabels' => array(
            'enabled' => TRUE,
          ),
          'showInLegend' => TRUE,
        ),
        'bar' => array(
          'dataLabels' => array(
            'enabled' => TRUE,
          ),
        ),
      ),
      'credits' => array(
        'enabled' => FALSE,
      ),
    );

    // Allow override of defaults.
    if (isset($options['chart_options'])) {
      $chart_options = drupal_array_merge_deep($chart_options, $options['chart_options']);
    }

    // Set title.
    $chart_options['title']['text'] = $options['title'];

    // Axis settings.
    $x_axis = array();
    if (!empty($options['xAxis']['labelField'])) {
      foreach ($data as $row) {
        $x_axis[] = check_plain(strip_tags((string) $row[$options['xAxis']['labelField']]));
      }
    }
    if (!empty($x_axis)) {
      $chart_options['xAxis']['categories'] = $x_axis;
    }
    if (!empty($options['yAxis']['title'])) {
      $chart_options['yAxis']['title']['text'] = $options['yAxis']['title'];
    }

    // Series settings.
    $chart_options['series'] = array();
    foreach ($options['fields'] as $name => $column) {
      if (!empty($column['enabled'])) {
        $serie = array(
          'name' => $column['label'],
          'type' => $options['type'],
          'data' => array(),
        );

        foreach ($data as $row) {
          $value = (int) $row[$name];

          if (!empty($column['enabled'])) {
            $serie['data'][] = array(
              'name' => check_plain(strip_tags($row[$options['xAxis']['labelField']])),
              'y' => $value,
            );
          }
          else {
            $serie['data'][] = $value;
          }
        }

        $chart_options['series'][] = $serie;
      }
    }

    // Color settings.
    if (!empty($options['colors'])) {
      $chart_options['colors'] = $options['colors'];
    }

    // This can't be overridden.
    $chart_options['chart']['renderTo'] = $chart_id;

    // Add Drupal.settings for this chart.
    $information = array(
      'library' => 'highcharts',
      'options' => $chart_options,
    );
    // This will run through json_enconde() so will be converted to objects.
    drupal_add_js(array('visualization' => array($chart_id => $information)), array('type' => 'setting'));
  }

  /**
   * Includes global Javascript required by Highcharts.
   */
  public function postRender() {
    if (!$this->addedJavascript) {
      module_load_include('module', 'libraries', 'libraries');
      $path = libraries_get_path('highcharts');
      drupal_add_js($path . '/js/highcharts.js');

      drupal_add_js(drupal_get_path('module', 'visualization') . '/js/highcharts.js', array('scope' => 'footer'));

      $this->addedJavascript = TRUE;
    }
  }

  /**
   * Whether or not the plugin is avialable.
   */
  public function available() {
    return $this->available;
  }

  /**
   * Returns an array with supported chart types.
   */
  public function supportedTypes() {
    return array('line', 'column', 'pie', 'bar');
  }

}

$plugin = array(
  'name' => 'highcharts',
  'label' => t('Highcharts'),
  'handler' => new HighchartsHandler(),
);
