<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<div class="column two-thirds alpha">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<div class="carousel_section carousel_section_fdb2bcc7ab3948a1d5c6e171d4eb2b6c section_featured_posts">
				<?php if($rows): ?>
				<ul id="posts_carousel_fdb2bcc7ab3948a1d5c6e171d4eb2b6c">
					<?php print $rows; ?>
				</ul>
				<?php endif; ?>
			</div>
		</div>
		<div id="specialties-hp-3" class="column one-third omega">
		<?php if($attachment_after): ?>
			<?php print $attachment_after; ?>
		<?php endif; ?>
		</div>
		<br class="h10 clear"/>
	</div>
</div>