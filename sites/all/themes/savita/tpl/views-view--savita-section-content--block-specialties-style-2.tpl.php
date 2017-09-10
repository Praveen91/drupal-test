<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<div class="column one-third alpha">
			<?php if($attachment_before): ?>
				<?php print $attachment_before; ?>
			<?php endif; ?>
		</div>
		<div class="column one-third">
			<div class="margined20">
				<?php if($header): ?>
					<?php print $header; ?>
				<?php endif; ?>
				<?php if($rows): ?>
				<ul class="bar_graph">
					<?php print $rows; ?>
				</ul>
				<?php endif; ?>
			</div>
		</div>
		<div class="column one-third omega">
			<?php if($attachment_after): ?>
				<?php print $attachment_after; ?>
			<?php endif; ?>
		</div>
	</div>
</div>