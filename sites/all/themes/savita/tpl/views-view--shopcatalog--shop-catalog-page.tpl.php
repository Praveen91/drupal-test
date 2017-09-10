<?php print render($title_prefix); ?>
<?php if($header): ?>
	<?php print $header; ?>
<?php endif; ?>
<?php if($rows): ?>
<?php if($exposed): ?>
	<?php print $exposed; ?>
<?php endif; ?>
<ul id="shop-catalog" class="products">
	<?php print $rows; ?>
</ul>
<?php if($pager): ?>
	<?php print $pager; ?>
<?php endif; ?>
<?php endif; ?>
