<?php print render($title_prefix); ?>
<div class="container animationStart ">
    <div class="row">
        <div class="sixteen columns">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<div class="carousel_section carousel_section_11bd78ad20b9c797cde1684d907f90ff section_featured_posts">
				<?php if($rows): ?>
				<ul id="posts_carousel_11bd78ad20b9c797cde1684d907f90ff">
					<?php print $rows; ?>
				</ul>
				<?php endif; ?>
			</div>
			<p>&nbsp;</p>
		</div>
	</div>
</div>