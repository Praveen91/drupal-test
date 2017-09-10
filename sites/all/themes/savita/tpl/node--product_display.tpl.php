
<?php
    if(!empty($node->field_tags)){
        $tags = render($content['product:field_tags']);
    }else{
        $tags = '';
    }
    if(!empty($content['product:field_image'])){
    	$imageone = $content['product:field_image']['#items'][0]['uri'];
    	$imageone_url = file_create_url($imageone);
    }else{
    	$imageone_url ='';
    }
    $sale =  trim(strip_tags(render($content['product:field_commerce_saleprice_on_sale'])));
	$price =  trim(strip_tags(render($content['product:commerce_price'])));
	$saleprice = trim(strip_tags(render($content['product:field_commerce_saleprice'])));
	$short_description = render($content['product:field_short_description']);
    
?>
<?php if(!$page){?>
<li class="product has-post-thumbnail"><a href="<?php print $node_url; ?>"><?php if($sale == '1'){ ?><span class="onsale"><?php print t('Sale!'); ?></span><?php } ?><?php print theme('image_style', array('path' => $imageone, 'style_name' => 'image_300x300' , 'attributes'=>array('alt'=>$title))) ?><a href="<?php print $node_url; ?>">
    <h3><?php print $title; ?></h3>
    <?php print render($content['product:field_product_rating']); ?>
<span class="price"><?php if($sale == '1'){ ?><del><span class="amount"><?php print $price; ?></span></del><ins><span class="amount"><?php print $saleprice; ?></span></ins><?php }else{ ?><span class="amount"><?php print $price; ?></span><?php } ?></span></a></a>
	<?php
        hide($content['product:field_product_rating']);
    	hide($content['product:field_image']);
    	hide($content['product:commerce_price']);
    	hide($content['field_product_categories']);
        hide($content['field_tags']);
    	hide($content['product:field_commerce_saleprice']);
        hide($content['product:field_short_description']);
        hide($content['product:field_product_description']);
        hide($content['product:field_commerce_saleprice_on_sale']);
        hide($content['product:links']);
        hide($content['product:sku']);
        hide($content['comments']);
        hide($content['links']);
        hide($content['product:field_additional_information']);
        unset($content['links']['node']['#links']['node-readmore']);
    	print render($content);
    ?>
</li>
<?php }else{ ?>
<div class='five columns alpha single_product_left'>
    <div class="images">
    	<a href="<?php print $imageone_url; ?>" itemprop="image" class="woocommerce-main-image zoom" title="<?php print $title; ?>" data-rel="prettyPhoto[product-gallery]"><img width="480" height="480" src="<?php print $imageone_url; ?>" alt="<?php print $title; ?>" title="<?php print $title; ?>" /></a>
    	<div class="thumbnails columns-3">
		<?php
        	foreach($content['product:field_image']['#items'] as $key => $value){
            $image_uri_multi  = $content['product:field_image']['#items'][$key]['uri'];
            $url_image_multi = file_create_url($image_uri_multi);
            print '<a href="'.$url_image_multi.'" class="zoom" title="'.$title.'" data-rel="prettyPhoto[product-gallery]">'.theme('image_style', array('path' => $image_uri_multi, 'style_name' => 'image_150x150' , 'attributes'=>array('alt'=>$title))).'</a>';
        } ?>
        </div>

    </div>
</div>
<div class='seven columns single_product_right omega'>
    <div class="summary entry-summary">
        <h1 itemprop="name" class="product_title entry-title"><?php print $title; ?></h1>
        <div class="woocommerce-product-rating">
            <?php print render($content['product:field_product_rating']); ?>
        </div>
        <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
            <p class="price"><span class="amount"><?php print $price;?></span></p>
        </div>
        <?php if(!empty($short_description)): ?>
        <div itemprop="description">
            <?php print $short_description; ?>
        </div>
    	<?php endif; ?>
		<?php
            hide($content['product:field_product_rating']);
        	hide($content['product:field_image']);
        	hide($content['product:commerce_price']);
        	hide($content['field_product_categories']);
            hide($content['field_tags']);
        	hide($content['product:field_commerce_saleprice']);
            hide($content['product:field_short_description']);
            hide($content['product:field_product_description']);
            hide($content['product:field_commerce_saleprice_on_sale']);
            hide($content['product:links']);
            hide($content['product:sku']);
            hide($content['comments']);
            hide($content['links']);
            hide($content['product:field_additional_information']);
            unset($content['links']['node']['#links']['node-readmore']);
        	print render($content);
        ?>
        <div class="product_meta"> <span class="posted_in"><?php print t('Categories'); ?>:&nbsp;<?php print strip_tags(render($content['field_product_categories']),'<a>'); ?>.</span><?php if(!empty($node->field_tags)){ ?><span class="tagged_as"><?php print t('Tag'); ?>:&nbsp;<?php print strip_tags(render($content['field_tags']),'<a>'); }?></span> </div>
    </div>
    <!-- .summary -->

    <div class="woocommerce-tabs">
        <ul class="tabs">
            <li class="description_tab"> <a rel="tab-description" href="#tab-description"><?php print t('Description'); ?></a></li>
            <li class="additional_information_tab"> <a rel="tab-additional_information" href="#tab-additional_information"><?php print t('Additional Information'); ?></a> </li>
            <li class="reviews_tab"> <a href="#tab-comments" rel="tab-comments"><?php print t('Comments'); ?></a></li>
        </ul>
        <div class="panel entry-content" id="tab-description">
        <?php
        	print render($content['product:field_product_description']);
        ?>
        </div>
        <div class="panel entry-content" id="tab-additional_information">
            <?php print render($content['product:field_additional_information']); ?>
        </div>
        <div class="panel entry-content" id="tab-comments">
           	<?php print render($content['comments']); ?>
            <div class="clear"></div>
        </div>
    </div>
</div>
<?php if($region['bottom_product']): ?>
	<?php print render($region['bottom_product']); ?>
<?php endif; ?>
<?php } ?>