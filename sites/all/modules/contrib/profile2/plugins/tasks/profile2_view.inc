<?php

/**
 * @file
 * Handle the 'profile2 view' override task.
 *
 * This plugin overrides %profile2_type/%profile2 and reroutes it to the page manager, where
 * a list of tasks can be used to service this request based upon criteria
 * supplied by access plugins.
 */

/**
 * Specialized implementation of hook_page_manager_task_tasks(). See api-task.html for
 * more information.
 */
function profile2_profile2_view_page_manager_tasks() {
  return array(
    // This is a 'page' task and will fall under the page admin UI
    'task type' => 'page',

    'title' => t('Profile2 template'),

    'admin title' => t('Profile2 template'),
    'admin description' => t('When enabled, this overrides the default behavior for displaying profiles at <em>%profile-type/%profile2_by_uid</em>. If you add variants, you may use selection criteria such as profile type or language or user access to provide different views of profiles. If no variant is selected, the default Profile2 view will be used.'),
    'admin path' => '%profile-type/%profile2_by_uid',

    // Menu hooks so that we can alter the %profile_type/%profile2_by_uid menu entry to point to us.
    'hook menu alter' => 'profile2_profile2_view_menu_alter',

    // This is task uses 'context' handlers and must implement these to give the
    // handler data it needs.
    'handler type' => 'context',
    'get arguments' => 'profile2_profile2_view_get_arguments',
    'get context placeholders' => 'profile2_profile2_view_get_contexts',

    // Allow this to be enabled or disabled:
    'disabled' => variable_get('profile2_profile2_view_disabled', TRUE),
    'enable callback' => 'profile2_profile2_view_enable',
    'access callback' => 'profile2_profile2_view_access_check',
  );
}

/**
 * Callback defined by profile2_profile2_view_page_manager_tasks().
 */
function profile2_profile2_view_menu_alter(&$items, $task) {
  if (variable_get('profile2_profile2_view_disabled', TRUE)) {
    return;
  }

  $profile_types = profile2_get_types();

  // Override the profile2 view handler for our purpose.
  foreach (profile2_get_types() as $type_name => $type) {
    if (!empty($type->data['use_page'])) {
      $path = profile2_page_get_base_path($type);

      $callback = $items[$path . '/%profile2_by_uid']['page callback'];
      if ($callback == 'profile2_page_view' || variable_get('page_manager_override_anyway', FALSE)) {
        $items[$path . '/%profile2_by_uid']['page callback'] = 'profile2_profile2_view_page';
        $items[$path . '/%profile2_by_uid']['file path'] = $task['path'];
        $items[$path . '/%profile2_by_uid']['file'] = $task['file'];
      }
    }
  }
}

/**
 * Entry point for our overridden profile view.
 *
 * This function asks its assigned handlers who, if anyone, would like
 * to run with it. If no one does, it passes through profile2 view,
 * which is profile2_page_view().
 */
function profile2_profile2_view_page($profile2) {
  // Load my task plugin
  $task = page_manager_get_task('profile2_view');

  // Load the profile into a context.
  ctools_include('context');
  ctools_include('context-task-handler');

  $contexts = ctools_context_handler_get_task_contexts($task, '', array($profile2));

  $output = ctools_context_handler_render($task, '', $contexts, array($profile2->pid));
  if ($output != FALSE) {
    return $output;
  }

  $function = 'profile2_page_view';
  foreach (module_implements('page_manager_override') as $module) {
    $call = $module . '_page_manager_override';
    if (($rc = $call('profile2_page_view')) && function_exists($rc)) {
      $function = $rc;
      break;
    }
  }

  // Otherwise, fall back.
  module_load_include('inc', 'profile2_page');
  return $function($profile2);
}

/**
 * Callback to get arguments provided by this task handler.
 *
 * Since this is the profile view and there is no UI on the arguments, we
 * create dummy arguments that contain the needed data.
 */
function profile2_profile2_view_get_arguments($task, $subtask_id) {
  return array(
    array(
      'keyword' => 'profile2',
      'identifier' => t('Profile2 being viewed'),
      'id' => 1,
      'name' => 'entity_id:profile2',
      'settings' => array(),
    ),
  );
}

/**
 * Callback to get context placeholders provided by this handler.
 */
function profile2_profile2_view_get_contexts($task, $subtask_id) {
  return ctools_context_get_placeholders_from_argument(profile2_profile2_view_get_arguments($task, $subtask_id));
}

/**
 * Callback to enable/disable the page from the UI.
 */
function profile2_profile2_view_enable($cache, $status) {
  variable_set('profile2_profile2_view_disabled', $status);

  // Set a global flag so that the menu routine knows it needs
  // to set a message if enabling cannot be done.
  if (!$status) {
    $GLOBALS['page_manager_enabling_profile2_view'] = TRUE;
  }
}

/**
 * Callback to determine if a page is accessible.
 *
 * @param $task
 *   The task plugin.
 * @param $subtask_id
 *   The subtask id
 * @param $contexts
 *   The contexts loaded for the task.
 * @return
 *   TRUE if the current user can access the page.
 */
function profile2_profile2_view_access_check($task, $subtask_id, $contexts) {
  $context = reset($contexts);
  return profile2_access('view', $context->data);
}
