<?php
    if(!empty($node->field_image)){
        $imageone = $node->field_image['und'][0]['uri'];
        $uri =$node->field_image['und'][0]['uri'];
        $url_image = file_create_url($uri);
        $ni = count($node->field_image['und']);
    }else{
        $imageone = '';
        $ni = 0;
    }
    $blog_format = $node->field_blog_format['und'][0]['value'];
    if(!empty($node->field_tags)){
        $tags = render($content['field_tags']);
    }else{
        $tags = '';
    }
?>
<?php if($page){?>
<?php if($blog_format != 'video' && $blog_format != 'gallery'){ ?>
<div class="post-page post type-post status-publish format-standard has-post-thumbnail hentry" >
    <!-- Post Begin -->
    <div class="clearfix">
        <div class="pic"> <a href="<?php print $url_image; ?>" rel="prettyPhoto" title="<?php print $title; ?>"> <img src="<?php print $url_image; ?>" alt="<?php print $title; ?>"/>
            <div class="img_overlay_zoom"><span class="icon_zoom"></span></div>
        </a> </div>
        <div class="h20"></div>
        <p class="post_meta"> <span class="calendar_date"><?php print format_date($node->created, 'custom', 'F d, Y');?></span> <span class="author"><?php print t('By'); ?>&nbsp;<?php print $name; ?></a></span> <span class="comments "><a href="<?php print $node_url; ?>/#comments" class="comments-link" ><?php if($comment_count == '0'){?><?php print t('No comments yet'); ?> <?php }else{ ?><?php print $comment_count.' comments'; ?><?php } ?></a></span><?php if($tags): ?><span class="tags"><?php print strip_tags($tags,'<a>'); ?></span><?php endif; ?></p>
        <div class="post_description clearfix">
        <?php
            hide($content['links']);
            hide($content['field_tags']);
            hide($content['field_video_embed']);
            hide($content['field_blog_format']);
            hide($content['comments']);
            hide($content['field_blog_categories']);
            hide($content['field_image']);
            print render($content);
        ?>
            <p>&nbsp;</p>        
            <?php if($region['bottom_blog']): ?>
                <?php print render($region['bottom_blog']); ?>
            <?php endif; ?>
        </div>
    </div>
    <!-- Post End -->
</div>
<?php print render($content['comments']); ?>
<?php }elseif($blog_format == 'gallery'){ ?>
<div class="post-page post type-post status-publish format-gallery has-post-thumbnail hentry">

    <!-- Post Begin -->
    <div class="clearfix">
        <div class="flexslider">
            <ul class="slides">
                <?php
                    foreach($node->field_image['und'] as $key => $value){
                        $image_uri_gallery  = $node->field_image['und'][$key]['uri'];
                        $url_image_gallery = file_create_url($image_uri_gallery);
                        print '<li class="pic"> <a href="'.$url_image_gallery.'" rel="prettyPhoto[gallery]" title="'.$title.'">'.theme('image_style', array('path' => $image_uri_gallery, 'style_name' => 'image_870x555', 'attributes'=>array('alt'=>$title))).'<div class="img_overlay_zoom"></div></a></li>';
                    }
                ?>
            </ul>
        </div>
        <div class="h20"></div>
        <p class="post_meta"> <span class="calendar_date"><?php print format_date($node->created, 'custom', 'F d, Y');?></span> <span class="author"><?php print t('By'); ?>&nbsp;<?php print $name; ?></a></span> <span class="comments "><a href="<?php print $node_url; ?>/#comments" class="comments-link" ><?php if($comment_count == '0'){?><?php print t('No comments yet'); ?> <?php }else{ ?><?php print $comment_count.' comments'; ?><?php } ?></a></span><?php if($tags): ?><span class="tags"><?php print strip_tags($tags,'<a>'); ?></span><?php endif; ?></p>
        <div class="post_description clearfix">
        <?php
            hide($content['links']);
            hide($content['field_tags']);
            hide($content['field_video_embed']);
            hide($content['field_blog_format']);
            hide($content['comments']);
            hide($content['field_blog_categories']);
            hide($content['field_image']);
            print render($content);
        ?>
        </div>
    </div>
    <!-- Post End -->

</div>
<?php print render($content['comments']); ?>
<?php }else{ ?>
<div class="post-page post type-post status-publish format-video has-post-thumbnail hentry">

    <!-- Post Begin -->
    <div class="clearfix">
        <div class='video_max_scale'>
            <?php print render($content['field_video_embed']); ?>
        </div>
        <div class="h20"></div>
        <p class="post_meta"> <span class="calendar_date"><?php print format_date($node->created, 'custom', 'F d, Y');?></span> <span class="author"><?php print t('By'); ?>&nbsp;<?php print $name; ?></a></span> <span class="comments "><a href="<?php print $node_url; ?>/#comments" class="comments-link" ><?php if($comment_count == '0'){?><?php print t('No comments yet'); ?> <?php }else{ ?><?php print $comment_count.' comments'; ?><?php } ?></a></span><?php if($tags): ?><span class="tags"><?php print strip_tags($tags,'<a>'); ?></span><?php endif; ?></p>
        <div class="post_description clearfix">
        <?php
            hide($content['links']);
            hide($content['field_tags']);
            hide($content['field_video_embed']);
            hide($content['field_blog_format']);
            hide($content['comments']);
            hide($content['field_blog_categories']);
            hide($content['field_image']);
            print render($content);
        ?>
            <p>&nbsp;</p>
            <?php if($region['bottom_blog']): ?>
                <?php print render($region['bottom_blog']); ?>
            <?php endif; ?>

        </div>
    </div>
    <!-- Post End -->

</div>
<?php print render($content['comments']); ?>
<?php } ?>
<?php }else{?>
<?php if($blog_format == 'gallery'){ ?>
<div class="post_item clearfix">
    <div class="flexslider">
        <ul class="slides">
           <?php
                foreach($node->field_image['und'] as $key => $value){
                    $image_uri_gallery  = $node->field_image['und'][$key]['uri'];
                    $url_image_gallery = file_create_url($image_uri_gallery);
                    print '<li class="pic"> <a href="'.$node_url.'" title="'.$title.'" >'.theme('image_style', array('path' => $image_uri_gallery, 'style_name' => 'image_870x426', 'attributes'=>array('alt'=>$title))).'<div class="img_overlay_zoom"><span class="icon_plus"></span></div></a></li>';
                }
            ?>
        </ul>
    </div>
    <div class="post_list_left">
        <div class="day"><?php print format_date($node->created, 'custom', 'd');?></div>
        <div class="month"><?php print format_date($node->created, 'custom', 'M');?></div>
    </div>
    <div class="post_list_right">
        <h3 class="post_title"><a href="<?php print $node_url; ?>" title="Permalink <?php print $title; ?>"><?php print $title;  ?></a></h3>
        <p class="post_meta"> <span class="author"><?php print t('By'); ?>&nbsp;<?php print strip_tags($name); ?></span> <span class="comments"><a href="<?php print $node_url; ?>/#comments" class="comments-link" ><?php if($comment_count == '0'){?><?php print t('No comments yet'); ?> <?php }else{ ?><?php print $comment_count.' comments'; ?><?php } ?></a></span><?php if($tags): ?><span class="tags"><?php print strip_tags($tags,'<a>'); ?></span><?php endif; ?></p>
        <div class="post_description clearfix">
        <?php
            hide($content['links']);
            hide($content['field_tags']);
            hide($content['field_video_embed']);
            hide($content['field_blog_format']);
            hide($content['comments']);
            hide($content['field_blog_categories']);
            hide($content['field_image']);
            print render($content);
        ?>
            <p><a href="<?php print $node_url; ?>" class="more-link"><?php print t('Read more'); ?></a></p>
        </div>
    </div>
</div>
<?php }elseif($blog_format == 'video'){ ?>
<div class="post_item clearfix">
    <div class="video_max_scale">
        <?php print render($content['field_video_embed']);  ?>
    </div>
    <div class="post_list_left">
        <div class="day"><?php print format_date($node->created, 'custom', 'd');?></div>
        <div class="month"><?php print format_date($node->created, 'custom', 'M');?></div>
    </div>
    <div class="post_list_right">
        <h3 class="post_title"><a href="<?php print $node_url; ?>" title="Permalink to <?php print $title; ?>"><?php print $title; ?></a></h3>
        <p class="post_meta"> <span class="author"><?php print t('By'); ?>&nbsp;<?php print $name; ?></span> <span class="comments "><a href="<?php print $node_url; ?>/#comments" class="comments-link" ><?php if($comment_count == '0'){?><?php print t('No comments yet'); ?> <?php }else{ ?><?php print $comment_count.' comments'; ?><?php } ?></a></span><?php if($tags): ?><span class="tags"><?php print strip_tags($tags,'<a>'); ?></span><?php endif; ?></p>
        <div class="post_description clearfix">
        <?php
            hide($content['links']);
            hide($content['field_tags']);
            hide($content['field_video_embed']);
            hide($content['field_blog_format']);
            hide($content['comments']);
            hide($content['field_blog_categories']);
            hide($content['field_image']);
            print render($content);
        ?>
            <p><a href="<?php print $node_url; ?>" class="more-link"><?php print t('Read more'); ?></a></p>
        </div>
    </div>
</div>
<?php }else{ ?>
<div class="post_item clearfix">
    <div class="pic"><a href="<?php print $node_url; ?>" title="<?php print $title; ?>"> <img src="<?php print $url_image; ?>" alt="<?php print $title; ?>"/>
        <div class="img_overlay_zoom"><span class="icon_plus"></span></div>
    </a> </div>
    <div class="post_list_left">
        <div class="day"><?php print format_date($node->created, 'custom', 'd');?></div>
        <div class="month"><?php print format_date($node->created, 'custom', 'M');?></div>
    </div>
    <div class="post_list_right">
        <h3 class="post_title"><a href="<?php print $node_url; ?>" title="Permalink to <?php print $title; ?>"><?php print $title; ?></a></h3>
        <p class="post_meta"> <span class="author"><?php print t('By'); ?>&nbsp;<?php print strip_tags($name); ?></span> <span class="comments"><a href="<?php print $node_url; ?>" class="comments-link" ><?php if($comment_count == '0'){?><?php print t('No comments yet'); ?> <?php }else{ ?><?php print $comment_count.' comments'; ?><?php } ?></a></span><?php if($tags): ?><span class="tags"><?php print strip_tags($tags,'<a>'); ?></span><?php endif; ?></p>
        <div class="post_description clearfix">
        <?php
            hide($content['links']);
            hide($content['field_tags']);
            hide($content['field_video_embed']);
            hide($content['field_blog_format']);
            hide($content['comments']);
            hide($content['field_blog_categories']);
            hide($content['field_image']);
            print render($content);
        ?>
            <p><a href="<?php print $node_url; ?>" class="more-link"><?php print t('Read more'); ?></a></p>
        </div>
    </div>
</div>
<?php } ?>
<?php } ?>