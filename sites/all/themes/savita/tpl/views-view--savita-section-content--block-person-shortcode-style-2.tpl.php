<?php print render($title_prefix); ?>
<?php if($rows): ?>
<div class="row">
    <div class="sixteen columns person-shortcode-elements">
    <?php if($header): ?>
    	<?php print $header; ?>
    <?php endif; ?>
    	<?php print $rows; ?>
    	<br class="h10 clear"/>
    </div>
</div>
<?php endif; ?>