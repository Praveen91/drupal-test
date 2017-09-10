<?php print render($title_suffix); ?>
<?php if($header): ?>
	<?php print $header; ?>
<?php endif; ?>
<div class="six columns  omega">
	<div class="testimonials">
	    <ul class="testimonials_carousel auto_scroll">
	    	<?php if($rows): ?>
	    		<?php print $rows; ?>
	    	<?php endif; ?>
	    </ul>
	</div>
</div>
<br class="h10 clear"/>
<p>&nbsp;<br />
&nbsp;</p>