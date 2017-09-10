<?php print render($title_prefix); ?>
<div class="row">
    <div class="sixteen columns">
        <div class="eight columns alpha"> &nbsp;<br />
            <?php if($header): ?>
                <?php print $header; ?>
            <?php endif; ?>
            <?php if($rows): ?>
                <?php print $rows; ?>
            <?php endif; ?>
            <p>&nbsp;</p>
        <?php if($footer){print $footer;} ?> </div>
        <div class="eight columns  omega">
            <p style="text-align: center;"><?php if($attachment_after){print $attachment_after;} ?></p>
        </div>
        <br class="h10 clear"/>
    </div>
</div>
