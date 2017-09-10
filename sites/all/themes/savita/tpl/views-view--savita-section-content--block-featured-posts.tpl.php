<?php print render($title_prefix); ?>
<div class="row">
    <div class="sixteen columns">
		<div class="four columns alpha">
		<?php if($footer): ?>
			<?php print $footer; ?>
		<?php endif; ?>
		</div>
		<div class="twelve columns omega">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<div class="carousel_section carousel_section_3547d26787c91e402ffbc6829c105e3c section_featured_posts">
				<?php if($rows): ?>
			    <ul id="posts_carousel_3547d26787c91e402ffbc6829c105e3c">
			    	<?php print $rows; ?>
			    </ul>
				<?php endif; ?>
			</div>
		</div>
		<br class="h10 clear"/>
	</div>
</div>