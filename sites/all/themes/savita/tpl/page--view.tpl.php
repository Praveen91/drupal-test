<?php require_once(drupal_get_path('theme','savita').'/tpl/header.tpl.php'); ?>
<div class="content_bgr">
	<?php if($page['slider']): ?>
        <?php print render($page['slider']); ?>
    <?php endif; ?>
    <div class="container">
        <div class="row">
            <div class="twelve columns col_12 woo_content shop-catalog">
            <?php
            	if($page['content']){
					if (!empty($tabs['#primary']) || !empty($tabs['#secondary'])):
						print render($tabs);
					endif;
					print $messages;
					print render($page['content']);
				}
			?>
			<?php if($page['section']): ?>
				<?php print render($page['section']); ?>
			<?php endif; ?>
            </div>
            <!-- Sidebar -->
            <div id="sidebar" class="four columns sidebar shop-catalog">
            	<?php if($page['sidebar_second']): ?>
               		<?php print render($page['sidebar_second']); ?>
               	<?php endif; ?>
                <!-- Sidebar :: END -->
            </div>
        </div>
    </div>
</div>
 
<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>