<?php print render($title_prefix); ?>
<div class="row">
    <div class="sixteen columns">
        <?php if($attachment_before): ?>
        <div class="eight columns  alpha">
            <?php print $attachment_before; ?>
        </div>
        <?php endif; ?>
        <div class="eight columns  omega">
            <?php if($header): ?>
                <?php print $header; ?>
            <?php endif; ?>
            <?php if($rows): ?>
                <?php print $rows; ?>
            <?php endif; ?>
            <p>&nbsp;</p>
        <?php if($footer) print $footer; ?></div>
        <br class="h10 clear"/>
    </div>
</div>