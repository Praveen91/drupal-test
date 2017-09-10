<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<div class="column one-third alpha">
		<?php if($attachment_before): ?>
			<?php print $attachment_before; ?>
		<?php endif; ?>
		</div>
		<div class="column one-third">
			<div class="margined20" id="specialties-hp-2">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<?php if($rows): ?>
				<?php print $rows; ?>
			<?php endif; ?>
			</div>
		</div>
		<div class="column one-third omega">
		<?php if($attachment_after): ?>
			<?php print $attachment_after; ?>
		<?php endif; ?>
		</div>
		<br class="h10 clear"/>
	</div>
</div>
