<?php print render($title_prefix); ?>
<div class="row">
    <div class="sixteen columns">
        <div class="info_block animationStart">
            <?php if($header): ?>
            <?php print $header; ?>
            <?php endif; ?>
            <div class="carousel_section">
                <?php if($rows): ?>
                <ul class="portfolio_carousel_block">
                    <?php print $rows; ?>
                </ul>
                <?php endif; ?>
            </div>
        </div>
        <div class="h20 clear"></div>
    </div>
</div>