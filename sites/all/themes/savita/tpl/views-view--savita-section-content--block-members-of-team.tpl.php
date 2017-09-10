<?php print render($title_prefix); ?>
<?php if($rows): ?>
<div class="row">
	<div class="sixteen columns person-shortcode-elements">
		<?php print $rows; ?>
	</div>
</div>
<?php endif; ?>