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
	<?php if($page['content']){ ?>
    <div class="container animationStart startNow">
        <div class="row blog_list_page">
            <div class="twelve columns">
            <?php
				if (!empty($tabs['#primary']) || !empty($tabs['#secondary'])):
					print render($tabs);
				endif;
				print $messages;
				print render($page['content']);
			?>
            </div>
            <!-- Sidebar -->
            <?php  ?>
            <div id="sidebar" class="four columns sidebar">
            	<?php if($page['sidebar_second']): ?>
               		<?php print render($page['sidebar_second']); ?>
               	<?php endif; ?>
                <!-- Sidebar :: END -->
            </div>
        </div>
    </div>
    <?php } ?>
</div>
 
<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>