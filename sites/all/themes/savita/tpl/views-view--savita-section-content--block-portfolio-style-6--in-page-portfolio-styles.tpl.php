<?php print render($title_prefix); ?>
<div class="row">
    <div class="sixteen columns">
        <div class="info_block animationStart">
            <?php if($header): ?>
            	<?php print $header; ?>
            <?php endif; ?>
            <div class="carousel_section">
            	<?php if($rows): ?>
                <ul id="portfolio_carousel_acea55634e1197e27f1e38ff6a89826e">
                	<?php print $rows; ?>
                </ul>
            	<?php endif; ?>
            </div>
        </div>
   	</div>
</div>