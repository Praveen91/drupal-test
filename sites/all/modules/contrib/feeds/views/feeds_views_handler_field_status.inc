<?php

/**
 * @file
 * Views handler for showing the import status.
 */

class feeds_views_handler_field_status extends views_handler_field {

  function query() {
    $this->ensure_my_table();
    // Add the primary key of the feeds_source table to the query, so that we
    // can load the Feeds source object when rendering.
    $this->id_alias = $this->query->add_field($this->table_alias, 'id', '');
    $this->feed_nid_alias = $this->query->add_field($this->table_alias, 'feed_nid', '');

    $this->add_additional_fields();
  }

  function render($values) {
    // We need to load the Feeds source object in order to retrieve the status
    // information.
    $source = feeds_source($values->{$this->id_alias}, $values->{$this->feed_nid_alias});
    require_once dirname(__FILE__) . '/../feeds.pages.inc';
    return feeds_source_status($source);
  }

}
