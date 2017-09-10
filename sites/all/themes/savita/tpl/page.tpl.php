<?php
if(isset($node->field_sidebar['und'][0]['value'])){
	$sidebar = $node->field_sidebar['und'][0]['value'];
}else $sidebar = 'none';
?>
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
	<?php if($sidebar != 'right'){ ?>
	<div class="page type-page status-publish hentry"> 
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
		<?php if($page['section']): ?>
			<?php print render($page['section']); ?>
		<?php endif; ?>
		</div>
	</div>
	<?php }else{ ?>
	<div class="container animationStart startNow">
	    <div class="row page_sidebar">
	        <!-- Post -->
	        <div class="page type-page status-publish hentry" >
	            <div class="twelve columns">
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
	            <!-- Sidebar -->
	            <div id="sidebar" class="four columns sidebar">
	            <?php if($page['sidebar_second']): ?>
	            	<?php print render($page['sidebar_second']); ?>
	            <?php endif; ?>
	            </div>
	            <!-- Sidebar :: END -->
	        </div>
	        <!-- Post :: END -->
	    </div>
	</div>
	<?php } ?>
</div>

<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>