<?php $no_avatar = base_path().path_to_theme().'/images/unknown-avatar.png'; ?>
<li itemprop="review" itemscope itemtype="http://schema.org/Review" class="comment">
<div class="comment_container">
    <div class="comment_avatar">
      <div class="avatar"> <?php if(!$picture){ ?><img alt="no-avatar" src="<?php print $no_avatar; ?>" class="avatar avatar-50 photo" height="100" width="100" /><?php }else{ print $picture; }?></div>
    </div>
    <div class="comment-text">
        <p class="meta"> <strong itemprop="author"><?php print strip_tags($author); ?></strong> &ndash;
    <time itemprop="datePublished"><?php print format_date($comment->created, 'custom', 'F d, Y'); ?></time>:</p>
    <div itemprop="description" class="description">
        <?php hide($content['links']); print render($content); ?>
        <div class="portfolio-comment-link"><?php print render($content['links']); ?></div>
    </div>
</div>
</div>
</li>