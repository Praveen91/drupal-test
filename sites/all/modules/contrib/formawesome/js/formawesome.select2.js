/**
 * @file
 * Formawesome Select2 behavior for select and multiselect elements.
 */
(function($, Drupal){
  var query_narrow = 'all and (min-width: 801px)';

  /**
   * Initialize empty theme function registry.
   */
  Drupal.formawesome = {
    theme: {}
  };

  Drupal.formawesome_select2 = {
    formatSearching: function () {}
  };

  /**
   * Enhance select-elements with select2.
   */
  Drupal.behaviors.formawesome_select2 = {
    // Translations functions.
    formatMatches: function (matches) {
      if (matches === 1) {
        return Drupal.t("One result is available, press enter to select it.");
      }
      return matches + Drupal.t(" results are available, use up and down arrow keys to navigate.");
    },
    formatNoMatches: function () {
      return Drupal.t("No matches found");
    },
    formatInputTooShort: function (input, min) {
      var n = min - input.length;
      return Drupal.t("Please enter @count or more characters");

    },
    formatInputTooLong: function (input, max) {
      var n = input.length - max;
      return Drupal.formatPlural(n, "Please delete one character", "Please delete @count characters");
    },
    formatSelectionTooBig: function (limit) {
      return Drupal.formatPlural(n, "You can only select one item", "You can only select @count items");
    },
    formatLoadMore: function (pageNumber) {
      return Drupal.t("Loading more results…");
    },
    formatSearching: function () {
      return Drupal.t("Searching…");
    },

    attach: function (context, settings) {
      if (window.matchMedia(query_narrow).matches) {
        var excludes = (settings.formawesome && settings.formawesome.excludes) ? settings.formawesome.excludes.join(',') : 'undefined';
        excludes = excludes === "" ? 'unknown' : excludes;
        $('select.formawesome-enhanced', context).filter(':not(' + excludes + ')').once(function () {
          var options = {
            placeholder: $(this).attr('placeholder'),
            adaptContainerCssClass: function (c) {
              return null;
            },
            adaptDropdownCssClass: function (c) {
              return null;
            },
            minimumResultsForSearch: ($(this).parents('.form-type-date-select').length > 0) ? -1 : 8,
            formatMatches: Drupal.behaviors.formawesome_select2.formatMatches,
            formatNoMatches: Drupal.behaviors.formawesome_select2.formatNoMatches,
            formatInputTooShort: Drupal.behaviors.formawesome_select2.formatInputTooShort,
            formatInputTooLong: Drupal.behaviors.formawesome_select2.formatInputTooLong,
            formatSelectionTooBig: Drupal.behaviors.formawesome_select2.formatSelectionTooBig,
            formatLoadMore: Drupal.behaviors.formawesome_select2.formatLoadMore,
            formatSearching: Drupal.behaviors.formawesome_select2.formatSearching
          };

          if ($(this).data('theme') && Drupal.formawesome.theme[$(this).data('theme')]) {
            var theme = Drupal.formawesome.theme[$(this).data('theme')];
            options.formatResult = theme;
            options.formatSelection = theme;
          }

          $(this).select2(options);
        });
      }
    }
  };
}(jQuery, Drupal));
