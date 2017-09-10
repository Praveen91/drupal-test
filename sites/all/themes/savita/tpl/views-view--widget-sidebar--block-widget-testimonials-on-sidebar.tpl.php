<?php print render($title_prefix); ?>
 <div class="textwidget">
	 <?php if($header): ?>
	 	<?php print $header; ?>
	 <?php endif; ?>
	 <div class="testimonials">
	 	<?php if($rows): ?>
	    <ul class="testimonials_carousel auto_scroll">
	    	<?php print $rows; ?>
	    </ul>
		<?php endif; ?>
	</div>
 </div>