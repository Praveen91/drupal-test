<?php print render($title_prefix); ?>
<?php if($header): ?>
	<?php print $header; ?>
<?php endif; ?>
<div class="carousel_section carousel_section_7d4ea2809aa21cc304dfaa7725f61d9b section_featured_posts" >
	<?php if($rows): ?>
    <ul id="posts_carousel_7d4ea2809aa21cc304dfaa7725f61d9b">
    	<?php print $rows; ?>
    </ul>
	<?php endif; ?>
</div>