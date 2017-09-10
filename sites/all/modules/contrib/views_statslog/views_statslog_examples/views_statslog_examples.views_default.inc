<?php
/**
 * @file
 * views_statslog_examples.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function views_statslog_examples_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'statslog_nodes';
  $view->description = 'Statslog example view, collecting data about nodes.';
  $view->tag = 'statslog, statslog-daily';
  $view->base_table = 'node';
  $view->human_name = 'Statslog: Nodes';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['group_by'] = TRUE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'nid' => 'nid',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'nid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Field: COUNT(number_of_nodes) */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['group_type'] = 'count';
  $handler->display->display_options['fields']['nid']['ui_name'] = 'number_of_nodes';
  $handler->display->display_options['fields']['nid']['label'] = 'Number of nodes';
  $handler->display->display_options['fields']['nid']['separator'] = '';

  /* Display: All nodes */
  $handler = $view->new_display('block', 'All nodes', 'all_nodes');

  /* Display: Nodes by type */
  $handler = $view->new_display('attachment', 'Nodes by type', 'by_type');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: node_type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'node';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  $handler->display->display_options['fields']['type']['ui_name'] = 'node_type';
  /* Field: COUNT(number_of_nodes) */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['group_type'] = 'count';
  $handler->display->display_options['fields']['nid']['ui_name'] = 'number_of_nodes';
  $handler->display->display_options['fields']['nid']['label'] = 'Number of nodes';
  $handler->display->display_options['fields']['nid']['separator'] = '';
  $handler->display->display_options['displays'] = array(
    'all_nodes' => 'all_nodes',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';

  /* Display: Node by author */
  $handler = $view->new_display('attachment', 'Node by author', 'by_author');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Content: Author */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'node';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: author_name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'users';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['relationship'] = 'uid';
  $handler->display->display_options['fields']['name']['ui_name'] = 'author_name';
  $handler->display->display_options['fields']['name']['label'] = 'Author';
  /* Field: COUNT(number_of_nodes) */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['group_type'] = 'count';
  $handler->display->display_options['fields']['nid']['ui_name'] = 'number_of_nodes';
  $handler->display->display_options['fields']['nid']['label'] = 'Number of nodes';
  $handler->display->display_options['fields']['nid']['separator'] = '';
  $handler->display->display_options['displays'] = array(
    'all_nodes' => 'all_nodes',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';

  /* Display: Nodes by status */
  $handler = $view->new_display('attachment', 'Nodes by status', 'by_status');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: COUNT(number_of_nodes) */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['group_type'] = 'count';
  $handler->display->display_options['fields']['nid']['ui_name'] = 'number_of_nodes';
  $handler->display->display_options['fields']['nid']['label'] = 'Number of nodes';
  $handler->display->display_options['fields']['nid']['separator'] = '';
  /* Field: node_status */
  $handler->display->display_options['fields']['status']['id'] = 'status';
  $handler->display->display_options['fields']['status']['table'] = 'node';
  $handler->display->display_options['fields']['status']['field'] = 'status';
  $handler->display->display_options['fields']['status']['ui_name'] = 'node_status';
  $handler->display->display_options['fields']['status']['label'] = 'Node status';
  $handler->display->display_options['fields']['status']['type'] = 'published-notpublished';
  $handler->display->display_options['fields']['status']['not'] = 0;
  $handler->display->display_options['displays'] = array(
    'all_nodes' => 'all_nodes',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $translatables['statslog_nodes'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Number of nodes'),
    t('All nodes'),
    t('Nodes by type'),
    t('Type'),
    t('Node by author'),
    t('author'),
    t('Author'),
    t('Nodes by status'),
    t('Node status'),
  );
  $export['statslog_nodes'] = $view;

  $view = new view();
  $view->name = 'statslog_users';
  $view->description = 'Statslog view example, collecting data about users.';
  $view->tag = 'statslog, statslog-daily';
  $view->base_table = 'users';
  $view->human_name = 'Statslog: Users';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['group_by'] = TRUE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'uid' => 'uid',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'uid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Field: COUNT(number_of_users) */
  $handler->display->display_options['fields']['uid']['id'] = 'uid';
  $handler->display->display_options['fields']['uid']['table'] = 'users';
  $handler->display->display_options['fields']['uid']['field'] = 'uid';
  $handler->display->display_options['fields']['uid']['group_type'] = 'count';
  $handler->display->display_options['fields']['uid']['ui_name'] = 'number_of_users';
  $handler->display->display_options['fields']['uid']['label'] = 'Number of users';
  $handler->display->display_options['fields']['uid']['separator'] = '';

  /* Display: All users */
  $handler = $view->new_display('block', 'All users', 'all_users');

  /* Display: Users by status */
  $handler = $view->new_display('attachment', 'Users by status', 'by_status');
  $handler->display->display_options['display_description'] = 'Logs the amount of active and blocked users.';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: account_status */
  $handler->display->display_options['fields']['status']['id'] = 'status';
  $handler->display->display_options['fields']['status']['table'] = 'users';
  $handler->display->display_options['fields']['status']['field'] = 'status';
  $handler->display->display_options['fields']['status']['ui_name'] = 'account_status';
  $handler->display->display_options['fields']['status']['label'] = 'Account Status';
  $handler->display->display_options['fields']['status']['type'] = 'active-blocked';
  $handler->display->display_options['fields']['status']['not'] = 0;
  /* Field: COUNT(number_of_users) */
  $handler->display->display_options['fields']['uid']['id'] = 'uid';
  $handler->display->display_options['fields']['uid']['table'] = 'users';
  $handler->display->display_options['fields']['uid']['field'] = 'uid';
  $handler->display->display_options['fields']['uid']['group_type'] = 'count';
  $handler->display->display_options['fields']['uid']['ui_name'] = 'number_of_users';
  $handler->display->display_options['fields']['uid']['label'] = 'Number of users';
  $handler->display->display_options['fields']['uid']['separator'] = '';
  $handler->display->display_options['displays'] = array(
    'all_users' => 'all_users',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';

  /* Display: Active Users */
  $handler = $view->new_display('attachment', 'Active Users', 'active_users');
  $handler->display->display_options['display_description'] = 'Logs the number of users that logged in within 24 hours.';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: COUNT(number_of_users) */
  $handler->display->display_options['fields']['uid']['id'] = 'uid';
  $handler->display->display_options['fields']['uid']['table'] = 'users';
  $handler->display->display_options['fields']['uid']['field'] = 'uid';
  $handler->display->display_options['fields']['uid']['group_type'] = 'count';
  $handler->display->display_options['fields']['uid']['ui_name'] = 'number_of_users';
  $handler->display->display_options['fields']['uid']['label'] = 'Number of active users';
  $handler->display->display_options['fields']['uid']['separator'] = '';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: User: Last access */
  $handler->display->display_options['filters']['access']['id'] = 'access';
  $handler->display->display_options['filters']['access']['table'] = 'users';
  $handler->display->display_options['filters']['access']['field'] = 'access';
  $handler->display->display_options['filters']['access']['operator'] = '>=';
  $handler->display->display_options['filters']['access']['value']['value'] = '-1 day';
  $handler->display->display_options['filters']['access']['value']['type'] = 'offset';
  $handler->display->display_options['displays'] = array(
    'all_users' => 'all_users',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $translatables['statslog_users'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Number of users'),
    t('All users'),
    t('Users by status'),
    t('Logs the amount of active and blocked users.'),
    t('Account Status'),
    t('Active Users'),
    t('Logs the number of users that logged in within 24 hours.'),
    t('Number of active users'),
  );
  $export['statslog_users'] = $view;

  return $export;
}
