<?php print render($title_prefix); ?>
<?php if($header): ?>
	<?php print $header; ?>
<?php endif; ?>
<?php if($rows): ?>
<ul>
	<?php print $rows; ?>
</ul>
<?php endif; ?>