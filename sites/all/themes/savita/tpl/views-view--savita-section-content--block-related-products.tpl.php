<?php print render($title_prefix); ?>
<?php if($header): ?>
    <?php print $header; ?>
<?php endif; ?>
<ul class="products">
    <?php if($rows): ?>
        <?php print $rows; ?>
    <?php endif; ?>
</ul>
