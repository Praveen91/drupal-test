<?php print render($title_prefix); ?>
<div class="info_block animationStart">
	<div class="h10 clear"></div>
    <?php if($header): ?>
    	<?php print $header; ?>
    <?php endif; ?>
    <div class="clear h20"></div>
    <div class="carousel_section">
        <div class="carousel_arrows_bgr"></div>
        <?php if($rows): ?>
        <ul id="portfolio_carousel_single">
        	<?php print $rows; ?>
        </ul>
    	<?php endif; ?>
    </div>
</div>

