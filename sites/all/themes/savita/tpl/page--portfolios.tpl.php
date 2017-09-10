<?php require_once(drupal_get_path('theme','savita').'/tpl/header.tpl.php'); ?>
<div class="content_bgr">
<?php if($breadcrumb):  ?>
	<div class="full_container_page_title">
		<div class="container animationStart">
			<div class="row no_bm">
				<div class="sixteen columns">
					<div id="breadcrumbs" class="breadcrumb"><?php print $breadcrumb; ?></div>
					<div class="page_heading">
						<h1><?php print $title; ?></h1>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>
	<div class="container">
		<div class="row portfolio_page">
		<?php if($page['content']):?>
		<?php
			if (!empty($tabs['#primary']) || !empty($tabs['#secondary'])):
				print render($tabs);
			endif;
			print $messages;
		?>
		<?php print render($page['content']); ?>
		<?php endif; ?>
		<?php if($page['section']): ?>
			<?php print render($page['section']); ?>
		<?php endif; ?>
		</div>	
	</div>
</div>
<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>