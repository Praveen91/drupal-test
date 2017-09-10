<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" lang="en-US">
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" lang="en-US">
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html lang="<?php print $language->language; ?>">
<!--<![endif]-->
<head>
<title><?php print $head_title; ?></title>

<?php print $styles; print $head; ?>
<?php
	//Tracking code
	$tracking_code = theme_get_setting('general_setting_tracking_code', 'savita');
	print $tracking_code;
	//Custom css
	$custom_css = theme_get_setting('custom_css', 'savita');
	if(!empty($custom_css)){
?>
	<style type="text/css" media="all">
	<?php print $custom_css;?>
	</style>
<?php }?>
</head>
<body class="<?php print $classes;?>" <?php print $attributes;?>>
	<div id="skip-link">
        <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div>
	<div id="wrapper" class="full_wrapper page_title_bgr bgr_style1 responsive">
		<?php print $page_top; ?><?php print $page; ?><?php print $page_bottom; ?>
        <?php print $scripts; ?>     
	</div>
</body>
</html>