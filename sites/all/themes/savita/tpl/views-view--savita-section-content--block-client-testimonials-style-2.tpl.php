<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<?php if($footer): ?>
		<div class="column two-thirds alpha">
			<?php print $footer; ?>
		</div>
		<?php endif; ?>
		<div class="column one-third omega">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<div class="testimonials">
				<ul class="testimonials_carousel auto_scroll">
				<?php if($rows): ?>
					<?php print $rows; ?>
				<?php endif; ?>
				</ul>
			</div>
		</div>
		<br class="h10 clear"/>
	</div>
</div>