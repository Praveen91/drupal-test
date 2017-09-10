<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<?php if($attachment_before):?>
		<div class="column two-thirds alpha">
			<?php print $attachment_before; ?>
		</div>
		<?php endif; ?>
		<div class="column one-third omega">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<?php if($rows): ?>
			<div class="testimonials">
				<ul class="testimonials_carousel auto_scroll">
					<?php print $rows; ?>
				</ul>
			</div>
			<?php endif; ?>
		</div>
		<br class="h10 clear"/>
	</div>
</div>
