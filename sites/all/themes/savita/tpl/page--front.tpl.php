<?php require_once(drupal_get_path('theme','savita').'/tpl/header.tpl.php'); ?>
<div class="content_bgr">
	<div class="page type-page status-publish hentry">
		<?php if($page['slider']): ?>
			<?php print render($page['slider']); ?>
		<?php endif; ?>
		<?php if($page['section']): ?>
			<?php print render($page['section']); ?>
		<?php endif; ?>
	</div>
</div>
<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>
