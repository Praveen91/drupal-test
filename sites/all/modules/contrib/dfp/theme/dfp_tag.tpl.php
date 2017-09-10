<?php
  /**
   * @file
   * Default template for dfp tags.
   */
?>

<div <?php print drupal_attributes($placeholder_attributes) ?>>
  <?php if (isset($slug)):
    print drupal_render($slug);
  endif; ?>
  <script type="text/javascript">
    <?php if ($async_rendering): ?>
    googletag.cmd.push(function() {
    <?php endif; ?>
      googletag.display("<?php print $tag->placeholder_id ?>");
    <?php if ($async_rendering): ?>
    });
    <?php endif; ?>
  </script>
</div>
