<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<?php if($header): ?>
			<?php print $header; ?>
		<?php endif; ?>
		<div class="carousel_section carousel_section_2c8deb82fb444d0da39f7ca6b09c4270 section_featured_posts">
			<?php if($rows): ?>
			<ul id="posts_carousel_2c8deb82fb444d0da39f7ca6b09c4270">
				<?php print $rows; ?>
			</ul>
			<?php endif; ?>
		</div>
	</div>
</div>