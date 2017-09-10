
<?php if ($content['#node']->comment and !($content['#node']->comment == 1 and $content['#node']->comment_count)) { ?>
<div id="reviews">
	<div id="comments">
	    <ol class="commentlist">
	        <?php print render($content['comments']); ?>
		</ol>
	</div>
	<div id="review_form_wrapper">
	    <div id="review_form">
	        <div id="respond" class="comment-respond">
	            <h3 id="reply-title" class="comment-reply-title"><?php print t('Add a new comment '); ?></h3>
	            <?php print str_replace('resizable', '', render($content['comment_form'])); ?>
	        </div>
	        <!-- #respond -->
	    </div>
	</div>
</div>
<?php } ?>