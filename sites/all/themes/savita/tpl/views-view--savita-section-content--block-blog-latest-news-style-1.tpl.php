<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<?php if($header): ?>
			<?php print $header; ?>
		<?php endif;?>
		<div class="clear h20"></div>
		<div class="carousel_section carousel_section_2caf24b0fd3beec885a518a2505cca04 section_featured_posts">
			<?php if($rows): ?>
			<ul class="posts_carousel">
				<?php print $rows; ?>
			</ul>
			<?php endif; ?>
		</div>
	</div>
</div>