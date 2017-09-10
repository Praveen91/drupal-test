/**
 * Select2 <Language> translation.
 *
 * Author: Your Name <your@email>
 */
(function ($) {
  "use strict";

  $.fn.select2.locales['en'] = {
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
      return Drupal.t("Please enter @count or more characters", {'@count': n});
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
  };

  $.extend($.fn.select2.defaults, $.fn.select2.locales['en']);
})(jQuery);
