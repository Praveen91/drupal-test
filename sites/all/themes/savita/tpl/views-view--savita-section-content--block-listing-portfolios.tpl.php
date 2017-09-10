<?php print render($title_prefix); ?>
<div class="row portfolio_section">
	<?php if($header): ?>
		<?php print $header; ?>
	<?php endif; ?>
	<?php if($rows): ?>
	<div id="portfolio_items" class="clearfix animationStart">
		<?php print $rows; ?>
	</div>
	<?php endif; ?>
</div>
<div class="h20"></div>