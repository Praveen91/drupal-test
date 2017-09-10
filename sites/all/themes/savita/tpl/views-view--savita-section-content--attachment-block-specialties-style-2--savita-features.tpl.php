<?php if($header): ?>
	<?php print $header; ?>
<?php endif; ?>
<div class="flexslider" rel="fade" rel-speed="6000">
	<?php if($rows): ?>
	<ul class="slides">
		<?php print $rows; ?>
	</ul>
	<?php endif; ?>
</div>