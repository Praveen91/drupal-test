<?php print render($title_prefix); ?>
<div class="row">
	<div class="sixteen columns">
		<div class="info_block animationStart">
			<?php if($header): ?>
				<?php print $header; ?>
			<?php endif; ?>
			<div class="carousel_section">
				<?php if($rows): ?>
				<ul id="portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963">
					<?php print $rows; ?>
				</ul>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>