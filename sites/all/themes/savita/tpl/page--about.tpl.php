<?php require_once(drupal_get_path('theme','savita').'/tpl/header.tpl.php'); ?>
<div class="content_bgr">
	<div class="page type-page status-publish hentry">
		<?php if($page['slider']): ?>
		<div class="container animationStart">
			<?php print render($page['slider']); ?>
		</div>
		<?php endif; ?>
		<div class="container">
			<?php if($page['content']):?>
			<?php
				if (!empty($tabs['#primary']) || !empty($tabs['#secondary'])):
					print render($tabs);
				endif;
				print $messages;
			?>
			<?php print render($page['content']); ?>
			<?php endif; ?>
		</div>
		<?php if($page['section']): ?>
			<?php print render($page['section']); ?>
		<?php endif; ?>
	</div>
</div>
<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>