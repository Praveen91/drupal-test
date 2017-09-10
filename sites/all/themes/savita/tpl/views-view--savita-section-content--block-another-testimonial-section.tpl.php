<?php print render($title_prefix); ?>
<div class="row">
    <div id="testimonials" class="sixteen columns">
        <?php if($header): ?>
        	<?php print $header; ?>
        <?php endif; ?>
        <div class="image_featured_text_holder">
        <?php if($rows): ?>
        	<?php print $rows; ?>
        <?php endif; ?>
        </div>
    </div>
</div>