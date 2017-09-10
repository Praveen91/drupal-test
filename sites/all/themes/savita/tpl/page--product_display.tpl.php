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
	<?php if(arg(0) == 'node'){ ?>
	<?php if($page['content']){ ?>
    <div class="container animationStart startNow">
        <div class="row">
            <div class="sixteen columns col_16 woo_content">
            	<div class="boc_single_product">
            		<div class="product type-product status-publish has-post-thumbnail product_cat-accessories product_cat-electronics product_cat-home-furniture product_cat-houseware product_tag-gadgets featured shipping-taxable purchasable product-type-simple product-cat-accessories product-cat-electronics product-cat-home-furniture product-cat-houseware product-tag-gadgets instock">
		            <?php
						if (!empty($tabs['#primary']) || !empty($tabs['#secondary'])):
							print render($tabs);
						endif;
						print $messages;
						print render($page['content']);
					?>
					</div>
				</div>
            </div>
            <!-- Sidebar -->
        </div>
    </div>
    <?php } ?>
    <?php } ?>
</div>
 
<?php require_once(drupal_get_path('theme','savita').'/tpl/footer.tpl.php'); ?>