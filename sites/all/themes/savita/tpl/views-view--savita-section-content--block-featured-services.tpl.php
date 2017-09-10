<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
	<?php if($header):  ?>
		<?php print $header; ?>
	<?php endif; ?>
	<?php if($rows): ?>
		<?php print $rows; ?>
	<?php endif; ?>
	<br class="h10 clear"/>
	</div>
</div>