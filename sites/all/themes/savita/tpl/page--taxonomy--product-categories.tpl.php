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
        <div class="row">
            <div class="twelve columns col_12 woo_content shop-catalog">
                <?php 
                    if (!empty($tabs['#primary']) || !empty($tabs['#secondary'])):
                        print render($tabs);
                    endif;
                    print $messages;
                ?>
                <ul id="shop-catalog" class="products">
                <?php
                	if($page['content']){  					
    					print render($page['content']);
    				}
    			?>
                </ul>
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