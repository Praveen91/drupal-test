<?php print render($title_prefix); ?>
<div class="container animationStart">

	<div class="row">

	    <div class="sixteen columns">

			<?php if($header): ?>

				<?php print $header; ?>

			<?php endif; ?>

			<div class="image_featured_text_holder">

			    <div class="image_featured_text_holder_row">

			    	<?php if($rows): ?>

			    		<?php print $rows; ?>

			    	<?php endif; ?>

			    </div>

			    <div class="image_featured_text_holder_row">

			    	<?php if($attachment_after): ?>

			    		<?php print $attachment_after; ?>

			    	<?php endif; ?>

			    </div>

			</div>

		</div>

	</div>

</div>