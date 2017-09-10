<?php 
	$social_network = theme_get_setting('footer_social_network', 'savita'); 
	$footer_copyright_message = theme_get_setting('footer_copyright_message', 'savita');
?>
<!-- Footer -->
<div id="footer">
	<div class="container">
		<div class="row">
		<?php if($page['footer']): ?>
			<?php print render($page['footer']); ?>
		<?php endif; ?>	
		</div>
		<div class="clear"></div>
	</div>
	<div class="footer_btm">
		<div class="container">
			<div class="row">
				<div class="sixteen columns">
					<div class="footer_btm_inner"><?php if($social_network) print $social_network;?>
						<?php if($footer_copyright_message): ?>
						<div id="powered"><?php print $footer_copyright_message; ?></div>
						<?php endif; ?>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Footer::END -->