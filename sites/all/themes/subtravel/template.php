<?php

//subtravel
// Include drupal theme and helper functions.
require_once dirname(__FILE__) . '/inc/menu.inc';

function subtravel_preprocess_page(&$vars) {

  $menu_tree = menu_tree_all_data('main-menu');
  $tree_output_prepare = menu_tree_output($menu_tree);
  $vars['primary_navigation'] = drupal_render($tree_output_prepare);

$menu_tree = menu_tree_all_data('main-menu');
    $variables['main_menu'] = menu_tree_output($menu_tree);

}


