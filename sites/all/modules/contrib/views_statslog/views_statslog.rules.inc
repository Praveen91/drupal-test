<?php
/**
 * Rules integration for views statslog.
 */

/**
 * Implements hook_rules_action_info().
 */
function views_statslog_rules_action_info() {
  $actions = array();

  $actions['views_statslog_rules_scan_action'] = array(
    'label' => t('List statslog views by tag'),
    'group' => t('Views statslog'),
    'parameter' => array(
      'tag' => array(
        'type' => 'text',
        'label' => t('Tag'),
      ),
    ),
    'provides' => array(
      'views' => array(
        'type' => 'list<text>',
        'label' => t('Views'),
      ),
    ),
  );

  $actions['views_statslog_rules_collect_action'] = array(
    'label' => t('Collect statslog data'),
    'group' => t('Views statslog'),
    'parameter' => array(
      'views' => array(
        'type' => 'text',
        'label' => t('Views'),
      ),
    ),
  );

  $actions['views_statslog_rules_log_action'] = array(
    'label' => t('Log data object'),
    'group' => t('Views statslog'),
    'parameter' => array(
      'message' => array(
        'type' => 'text',
        'label' => t('Data'),
        'optional' => TRUE,
        'description' => t('Enter key value pairs that will be processed by <a href="http://php.net/manual/en/function.parse-ini-string.php">parse_ini_string()</a>.'),
        'sanitize' => TRUE,
      ),
      'actor' => array(
        'type' => 'user',
        'label' => t('Actor'),
        'optional' => TRUE,
        'description' => t('The user originating this event.'),
      ),
      'owners' => array(
        'type' => 'list<user>',
        'label' => t('Owners'),
        'optional' => TRUE,
        'description' => t('Users that are allowed to access this events data.'),
      ),
    ),
  );
  return $actions;
}

/**
 * Execution callback.
 */
function views_statslog_rules_collect_action($views, $state, $action, $hook) {
  global $base_url, $base_root, $user;
  foreach (views_statslog_events(array($views)) as $event) {
    $message = strtr(variable_get('syslog_format', '!base_url|!timestamp|!type|!ip|!request_uri|!referer|!uid|!link|!message'), array(
      '!base_url'    => $base_url,
      '!timestamp'   => time(),
      '!type'        => 'views_statslog',
      '!ip'          => ip_address(),
      '!request_uri' => $base_root . request_uri(),
      '!referer'     => isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '',
      '!uid'         => $user->uid,
      '!link'        => NULL,
      '!message'     => json_encode($event),
    ));
    openlog('drupal', LOG_NDELAY, LOG_LOCAL3);
    syslog(LOG_NOTICE, $message);
  }
}

/**
 * Execution callback.
 */
function views_statslog_rules_log_action($message, $actor, $owners, $settings, $state, $action) {
  $data = parse_ini_string($message);
  $data['statslog_index'] = 'event-' . preg_replace('/^(.*?statslog_)/', '', $action->root()->name);
  $data['statslog_access'] = array('users' => array());

  if ($owners) {
    foreach ($owners as $owner) {
      $data['statslog_access']['users'][] = $owner->uid;
    }
  }

  if ($actor && $actor->uid > 0) {
    $data['statslog_event_actor'] = $actor->uid;
  }

  drupal_alter('views_statslog_access', $data['statslog_access'], $account);

  global $base_url, $base_root, $user;
  $message = strtr(variable_get('syslog_format', '!base_url|!timestamp|!type|!ip|!request_uri|!referer|!uid|!link|!message'), array(
    '!base_url'    => $base_url,
    '!timestamp'   => time(),
    '!type'        => 'views_statslog',
    '!ip'          => ip_address(),
    '!request_uri' => $base_root . request_uri(),
    '!referer'     => isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '',
    '!uid'         => $user->uid,
    '!link'        => NULL,
    '!message'     => json_encode($data),
  ));
  openlog('drupal', LOG_NDELAY, LOG_LOCAL3);
  syslog(LOG_NOTICE, $message);
}

function views_statslog_rules_scan_action($tag) {
  $options = array();
  foreach (views_get_all_views() as $vid => $view) {
    $tags = array_map('trim', explode(',', $view->tag));
    if (!in_array($tag, $tags)) {
      continue;
    }
    foreach ($view->display as $did => $display) {
      // Don't use the default view if there are multiple displays.
      if ($did == 'default' && count($view->display) > 1) {
        continue;
      }
      // If display doesn't use aggregation, skip it.
      $aggregation = 0;
      if (isset($view->display['default']->display_options['group_by'])) {
        $aggregation = $view->display['default']->display_options['group_by'];
      }
      if (isset($display->display_options['group_by'])) {
        $aggregation = $display->display_options['group_by'];
      }
      if (!$aggregation) {
        continue;
      }
      $options[] = $vid . ':' . $did;
    }
  }
  return array('views' => $options);
}
