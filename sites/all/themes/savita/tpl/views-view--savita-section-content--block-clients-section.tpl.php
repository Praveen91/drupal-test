<?php print render($title_prefix); ?>
<div class="row">
    <div class="sixteen columns">
        <div class="clients_section">
            <div class="five columns client_info_intro alpha">
            <?php if($header): ?>
                <?php print $header; ?>
            <?php endif; ?>
            </div>
            <div class="ten columns client_info_holder animationStart omega">
            <?php if($rows): ?>
                <?php print $rows; ?>
            <?php endif; ?>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
