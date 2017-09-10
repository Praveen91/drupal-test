<?php print render($title_prefix); ?>
<div class="container animationStart">
    <div class="row dark_container_white_text">
        <div class="sixteen columns">
        <?php if($header): ?>
            <?php print $header; ?>
        <?php endif; ?>
            <div class="numbers_holder animationBegin centered_digits">
                <?php if($rows): ?>
                <?php print $rows; ?>
                <?php endif; ?>
                <br class="h10 clear"/>
            </div>
        </div>
    </div>
</div>