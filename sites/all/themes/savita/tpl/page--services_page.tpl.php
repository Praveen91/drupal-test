<?php require_once(drupal_get_path('theme','savita').'/tpl/header.tpl.php'); ?>
<?php
	if(!empty($node->field_breadcrumbs)){
		$brc_en = $node->field_breadcrumbs['und'][0]['value'];
	}else{
		$brc_en = 'no';
	}
?>
<div class="content_bgr">
<?php if($brc_en == 'yes'){ ?>
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
<?php } ?>
	<div class="page type-page status-publish hentry">
	<?php if($brc_en != 'yes'){ ?>
		<?php if($page['slider']): ?>
			<?php print render($page['slider']); ?>
		<?php endif; ?>
	<?php } ?>
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