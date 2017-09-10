<?php print render($title_prefix); ?>
<div class="container animationStart ">
	<div class="row">
		<div class="sixteen columns">
			<div class="seven columns alpha">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<?php if($rows): ?>
				<?php print $rows; ?>
			<?php endif; ?>
			<?php if($footer): ?>
				<?php print $footer; ?>
			<?php endif; ?>
			</div>
			<?php if($attachment_after): ?>
				<?php print $attachment_after; ?>
			<?php endif; ?>
			<br class="h10 clear"/>
		</div>
	</div>
</div>