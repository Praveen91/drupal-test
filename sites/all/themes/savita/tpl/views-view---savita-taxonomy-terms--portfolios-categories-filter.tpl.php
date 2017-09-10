<?php if($rows): ?>
<div class="sixteen columns">
    <div id="portfolio_filter"> <span id="current_filter"><?php print t('All'); ?></span>
        <ul id="filter_list" data-option-key="filter">
            <?php print $rows; ?>
            <li>
                <div data-option-value="*"><?php print t('All'); ?></div>
            </li>
        </ul>
    </div>
    <div class="portfolio_filter_showing_text"><?php print t('Filter:'); ?></div>
</div>
<?php endif; ?>