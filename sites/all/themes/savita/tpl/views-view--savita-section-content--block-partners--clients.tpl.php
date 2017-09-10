<?php print render($title_prefix); ?>
<div class="row">
    <div class="sixteen columns">
        <div class="clients_section">
        	<?php if($header): ?>
        		<?php print $header; ?>
        	<?php endif; ?>
        	<?php if($rows): ?>
            <div class="ten columns client_info_holder animationStart omega">
            	<?php print $rows; ?>
            </div>
        	<?php endif; ?>
            <div class="clear"></div>
        </div>
    </div>
</div>