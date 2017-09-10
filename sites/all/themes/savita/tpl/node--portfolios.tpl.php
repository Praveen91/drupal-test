<?php
    $gallery_style = 'full';
    if(isset($_GET['style'])){
        if($_GET['style'] =='full' || $_GET['style'] == 'slider' || $_GET['style'] == 'list'){
            $gallery_style = $_GET['style'];
        }
    }else{
    	$gallery_style = theme_get_setting('gallery_style', 'savita');
    }
	$format = $node->field_portfolio_format['und'][0]['value'];
  	if(!empty($node->field_image)){
	    $imageone = $node->field_image['und'][0]['uri'];
	    $uri =$node->field_image['und'][0]['uri'];
	    $url_image = file_create_url($uri);
	    $ni = count($node->field_image['und']);
  	}else{
    	$imageone = '';
    	$ni = 0;
  	}
  	if(!empty($node->field_link_project['und'][0]['value'])){
  		$link = $node->field_link_project['und'][0]['value'];
  	}

?>

<?php if($format == 'icon_camera'){ ?>
<div class="portfolio_media ten columns omega">
	<div class="pic animationStart"> <a href="<?php print $url_image; ?>" rel="prettyPhoto" title=""> <img src="<?php print $url_image; ?>" alt="<?php print $title; ?>"/>
		<div class="img_overlay_zoom"><span class="icon_zoom"></span></div>
		</a> </div>
	<div class="h40"></div>
</div>
<div class="one columns alpha omega">&nbsp;</div>
<div class="five columns alpha portfolio_description omega">
	<div class="portfolio_description_scrolling" style="width: inherit;">
		<h4><?php print t('Project Description'); ?></h4>
		<?php
	        hide($content['field_video_embed']);
	        hide($content['field_portfolio_format']);
	        hide($content['comments']);
	        hide($content['field_categories']);
	        hide($content['field_image']);
	        hide($content['field_link_project']);
	        hide($content['field_rating']);
	        hide($content['links']);
	        print render($content);
        ?>
        <?php if(!empty($link)){ ?>
		<a href="<?php print $link; ?>" class="button button_hilite tiny_button" target='_blank'>
		<div class="shortcode_icon shortcode_icon_simple"><i class="icon forward"></i></div>
		<?php print t('Visit Project'); ?></a>
		<?php } ?>
	</div>
</div>
<?php }elseif($format == 'icon_video'){ ?>
<div class="portfolio_media ten columns omega">
    <div class='pic'>
        <div class='video_max_scale'>
        	<?php print render($content['field_video_embed']) ?>
        </div>
    </div>
    <div class="h40"></div>
</div>
<div class="one columns alpha omega">&nbsp;</div>
<div class="five columns alpha portfolio_description omega">
    <div class="portfolio_description_scrolling" style="width: inherit;">
        <h4><?php print t('Project Description'); ?></h4>
        <?php
	        hide($content['field_video_embed']);
	        hide($content['field_portfolio_format']);
	        hide($content['comments']);
	        hide($content['field_categories']);
	        hide($content['field_image']);
	        hide($content['field_link_project']);
	        hide($content['links']);
	        hide($content['field_rating']);
	        print render($content);
        ?>
    <?php if(!empty($link)){ ?>
    <a href="<?php print $link; ?>" class="button button_hilite tiny_button"  target='_blank'><?php print t('Visit Project'); ?></a> 
    <?php } ?>
    </div>
</div>
<?php }elseif($format == 'icon_gallery' && $gallery_style == 'full'){ ?>
<div class="container">
    <div class="row portfolio_page">
        <div class="portfolio type-portfolio status-publish format-gallery has-post-thumbnail hentry portfolio_category-graphic-design portfolio_category-web-design portfolio_category-web-development">
            <div class="flexslider portfolio_media sixteen columns">
                <ul class="slides">
                 	<?php
						foreach($node->field_image['und'] as $key => $value){
							$image_uri_gallery  = $node->field_image['und'][$key]['uri'];
							$url_image_gallery = file_create_url($image_uri_gallery);
							print '<li class="pic"> <a href="'.$url_image_gallery.'" rel="prettyPhoto[\'portfolio\']" title="'.$title.'"> <img src="'.$url_image_gallery.'" alt="'.$title.'" /><div class="img_overlay_zoom"><span class="icon_zoom"></span></div></a></li>';
          				}
          			?>
                </ul>
            </div>
            <div class="h20 clear"></div>
        </div>
    </div>
</div>

<!-- Container Row -->
<div class="container animationStart ">
    <div class="row   ">
        <div class="sixteen columns">
            <div class="eleven columns  alpha"> &nbsp;

                <!--New Tabs-->
                <div class="newtabs horizontal">
                    <ul class="resp-tabs-list ">
                    </ul>
                    <div class="resp-tabs-container">
                        <div class="single_tab_div" rel-title="Project Description" rel-icon="user">
                        <?php
					        hide($content['field_video_embed']);
					        hide($content['field_portfolio_format']);
					        hide($content['comments']);
					        hide($content['field_categories']);
					        hide($content['field_image']);
					        hide($content['field_link_project']);
					        hide($content['links']);
					        hide($content['field_rating']);
					        print render($content);
				        ?>
                        </div>
                        <div class="single_tab_div" rel-title="Rating" rel-icon="star">
                            <?php print render($content['field_rating']); ?>
                        </div>
                        <div class="single_tab_div" rel-title="Comment" rel-icon="comment">
                            <?php print render($content['comments']); ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="one columns"> </div>
            <div class="four columns omega">              
                <div class='h20'></div>
                &nbsp; <?php if(!empty($link)){ ?><a href="<?php print $link; ?>" class="button button_pale regular_text tiny_button"  target='_blank'>
                <div class="shortcode_icon shortcode_icon_simple"><i class="icon forward"></i></div>
            <?php print t('Visit Project'); ?></a><?php } ?>
            </div>
            <br class="h10 clear"/>
        </div>
    </div>
</div>
<?php }elseif($format == 'icon_gallery' && $gallery_style == 'list'){ ?>
<div class="container">
    <div class="row portfolio_page portfolio_page_custom">
        <div class="portfolio_media ten columns omega">
             <?php
                foreach($node->field_image['und'] as $key => $value){
                    $image_uri_gallery  = $node->field_image['und'][$key]['uri'];
                    $url_image_gallery = file_create_url($image_uri_gallery);
                    print '<div class="pic animationStart"> <a href="'.$url_image_gallery.'" rel="prettyPhoto[\'gal\']" title="'.$title.'"><img src="'.$url_image_gallery.'" alt="'.$title.'"/><div class="img_overlay_zoom"><span class="icon_zoom"></span></div></a></div>
                    <div class="h40"></div>';
                }
            ?>
            
           
        </div>
        <div class="one columns alpha omega">&nbsp;</div>
        <div class="five columns alpha portfolio_description omega">
            <div class="portfolio_description_scrolling" style="width: inherit;">
                <h4><?php print t('Project Description'); ?></h4>
                <?php
                    hide($content['field_video_embed']);
                    hide($content['field_portfolio_format']);
                    hide($content['comments']);
                    hide($content['field_categories']);
                    hide($content['field_image']);
                    hide($content['field_link_project']);
                    hide($content['links']);
                    hide($content['field_rating']);
                    print render($content);
                ?>
                <?php if(!empty($link)){ ?>
                <a href="<?php print $link; ?>" class="button button_hilite tiny_button"  target='_blank'>
                <div class="shortcode_icon   shortcode_icon_simple"><i class="icon forward"></i></div>
            <?php print t('Visit Project'); ?></a><?php } ?></div>
        </div>
    </div>
</div>
<?php }elseif($format == 'icon_gallery' && $gallery_style == 'slider'){ ?>
<div class="portfolio_media">
    <div class="portfolio type-portfolio status-publish format-gallery has-post-thumbnail hentry portfolio_category-web-development portfolio_category-Drupal-themes">
        <div class="flexslider ten columns omega">
            <ul class="slides">
                <?php
                    foreach($node->field_image['und'] as $key => $value){
                        $image_uri_gallery  = $node->field_image['und'][$key]['uri'];
                        $url_image_gallery = file_create_url($image_uri_gallery);
                        print '<li class="pic"> <a href="'.$url_image_gallery.'" rel="prettyPhoto[\'portfolio\']" title="'.$title.'">'.theme('image_style', array('path' => $image_uri_gallery, 'style_name' => 'image_720x468', 'attributes'=>array('alt'=>$title))).'<div class="img_overlay_zoom"><span class="icon_zoom"></span></div></a> </li>';
                    }
                ?>
            </ul>
        </div>
        <div class="one columns alpha omega">&nbsp;</div>
        <div class="five columns alpha portfolio_description omega">
            <h4><?php print t('Project Description'); ?></h4>
            <?php
                hide($content['field_video_embed']);
                hide($content['field_portfolio_format']);
                hide($content['comments']);
                hide($content['field_categories']);
                hide($content['field_image']);
                hide($content['field_link_project']);
                hide($content['links']);
                hide($content['field_rating']);
                print render($content);
            ?>
            <?php if(!empty($link)){ ?><a href="<?php print $link; ?>" class="button button_hilite tiny_button"  target='_blank'>
            <div class="shortcode_icon shortcode_icon_simple"><i class="icon forward"></i></div>
        <?php print t('Visit Project'); ?></a><?php } ?></div>
    </div>
</div>
<?php } ?>