<?php

function savita_form_system_theme_settings_alter(&$form, $form_state) {

  $theme_path = drupal_get_path('theme', 'savita');
  $form['settings'] = array(
      '#type' => 'vertical_tabs',
      '#title' => t('Theme settings'),
      '#weight' => 2,
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );

  $form['settings']['general_setting'] = array(
      '#type' => 'fieldset',
      '#title' => t('General Settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );

  $form['settings']['general_setting']['general_setting_tracking_code'] = array(
      '#type' => 'textarea',
      '#title' => t('Tracking Code'),
      '#default_value' => theme_get_setting('general_setting_tracking_code', 'savita'),
  );
  $form['settings']['portfolio'] = array(
      '#type' => 'fieldset',
      '#title' => t('Portfolio'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );
  $form['settings']['portfolio']['gallery_style'] = array(
      '#type' => 'select',
      '#title' => t('Gallery views item style'),
      '#options' => array(
        'full' => t('Full'),
        'list' => t('List'),
        'slider' => t('Slider'),
        ),
      '#default_value' => theme_get_setting('gallery_style', 'savita'),
  );


  $form['settings']['header'] = array(
      '#type' => 'fieldset',
      '#title' => t('Header settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );

  $form['settings']['header']['email'] = array(
      '#type' => 'textfield',
      '#title' => t('Email'),
      '#default_value' => theme_get_setting('email', 'savita'),
  );
  $form['settings']['header']['phone'] = array(
      '#type' => 'textfield',
      '#title' => t('Phone'),
      '#default_value' => theme_get_setting('phone', 'savita'),
  );

  $form['settings']['header']['social_network'] = array(
      '#type' => 'textarea',
      '#title' => t('Social network'),
      '#default_value' => theme_get_setting('social_network', 'savita'),
  );
 
  $form['settings']['footer'] = array(
      '#type' => 'fieldset',
      '#title' => t('Footer settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );


  $form['settings']['footer']['footer_copyright_message'] = array(
      '#type' => 'textarea',
      '#title' => t('Footer copyright message'),
      '#default_value' => theme_get_setting('footer_copyright_message', 'savita'),
  );
   $form['settings']['footer']['footer_social_network'] = array(
      '#type' => 'textarea',
      '#title' => t('Footer social network'),
      '#default_value' => theme_get_setting('footer_social_network', 'savita'),
  );

	$form['settings']['custom_css'] = array(
		  '#type' => 'fieldset',
		  '#title' => t('Custom CSS'),
		  '#collapsible' => TRUE,
		  '#collapsed' => FALSE,
	  );

	$form['settings']['custom_css']['custom_css'] = array(
		  '#type' => 'textarea',
		  '#title' => t('Custom CSS'),
		  '#default_value' => theme_get_setting('custom_css', 'savita'),
		  '#description'  => t('<strong>Example:</strong><br/>h1 { font-family: \'Metrophobic\', Arial, serif; font-weight: 400; }')
	  );

}