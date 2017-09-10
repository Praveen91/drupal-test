<?php if ($content['#node']->comment and !($content['#node']->comment == 1 and $content['#node']->comment_count)) { ?>
<div class="comment_list" id="comments">
    <h3 class="left_title"><?php print $content['#node']->comment_count.' Comment'; ?></h3>

    <!-- Comment list -->
    <ol>
    <?php print render($content['comments']); ?>
        <!-- #comment-## -->
    </ol>
    <!-- Comment list::END -->

    <div class="clearfix">
        <div style="float: left;"></div>
        <div style="float: right;"></div>
    </div>
</div>

<!-- Comment Section -->

<div id="respond" class="comment-respond">
    <h3 id="reply-title" class="comment-reply-title"><span><?php print t('Leave A Comment'); ?></span></h3>
   	<?php print str_replace('resizable', '', render($content['comment_form'])); ?>
</div>
<?php } ?>