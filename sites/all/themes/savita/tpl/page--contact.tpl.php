<?php require_once(drupal_get_path('theme','savita').'/tpl/header.tpl.php'); ?>
<div class="content_bgr">
	<?php if($page['section']): ?>
		<?php print render($page['section']); ?>
	<?php endif; ?>
	<div class="container animationStart startNow">
		<div class="row padded_block">
			<div class="two-thirds column">
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
			<div class="one-third column">
				<?php if($page['sidebar_second']): ?>
					<?php print render($page['sidebar_second']); ?>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>
<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>