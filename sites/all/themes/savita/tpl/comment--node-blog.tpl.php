<?php $no_avatar = base_path().path_to_theme().'/images/unknown-avatar.png'; ?>
<li class="comment">
    <div class="single_comment">
        <div class="comment_avatar">
            <div class="avatar"> <?php if(!$picture){ ?><img alt="no-avatar" src="<?php print $no_avatar; ?>" class="avatar avatar-50 photo" height="50" width="50" /><?php }else{ print $picture; }?></div>
        </div>
        <div class="comment_content">
            <div class="comment-author meta">
                <div class="comment_name"><?php print strip_tags($author); ?><span>-</span><?php print render($content['links']); ?></div>
                <div class="comment_desc"><?php print format_date($comment->created, 'custom', 'F d, Y').' at '; ?><?php print format_date($comment->created, 'custom', 'h:i a'); ?></div>
            </div>
            <div class="comment_text">
                <?php hide($content['links']); print render($content); ?>
            </div>
        </div>
    </div>
</li>