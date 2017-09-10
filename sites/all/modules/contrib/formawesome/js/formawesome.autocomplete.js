/**
 * @file
 * Replace drupal autocomplete behavior with jQuery select2.
 */

(function(Drupal, $){
  var core_autocomplete = Drupal.behaviors.autocomplete;
  /**
   * Explode a string of given tags into an array.
   */
  function explode_tags(str) {
    // This regexp allows the following types of user input:
    // this, "somecompany, llc", "and ""this"" w,o.rks", foo bar
    var matches = str.match(/(?:^|, *)("([^"]*)(""[^"]* )*"|(?:[^",]*))/ig);
    var starts = [', "', ',"', '"', ','];
    $.each(matches, function (i) {
      $.each(starts, function (j) {
        if (typeof(matches[i]) == 'string' && matches[i].indexOf(starts[j]) == 0) {
          matches[i] = matches[i].substr(starts[j].length).trim();
        }
      });
      if (typeof(matches[i]) == 'string' && matches[i].indexOf('"') == (matches[i].length - 1)) {
        matches[i] = matches[i].substr(0, matches[i].length - 1);
      }
    });
    return matches;
  }

  /**
   * Explode a drupal tags and replace turn it into a select2 compatible string.
   */
  function drupal_to_select2(str) {
    var tags = [];
    $.each(explode_tags(str), function (key, tag) {
      tags.push((tag.indexOf(',') > -1) ? '"' + tag + '"' : tag);
    });
    return tags.join(';');
  }

  /**
   * Explode select2 string and turn it into the drupal version.
   */
  function select2_to_drupal(str) {
    return str.split(';').join(',');
  }

  /**
   * Attaches the autocomplete behavior to all required fields.
   */
  Drupal.behaviors.autocomplete = {
    attach: function(context, settings) {
      var excludes = (settings.formawesome && settings.formawesome.excludes) ? settings.formawesome.excludes.join(',') : 'undefined';
      excludes = excludes === "" ? 'unknown' : excludes;
      $('input.form-autocomplete.formawesome-enhanced', context).filter(':not(' + excludes + ')').once('autocomplete', function(){
        // create fake input element to use with select2
        var $real_input = $(this);

        // Read options from elements.
        var url = $real_input.parent().find('input.autocomplete').val();
        var max_values = parseInt($real_input.attr('data-max-values')) || 1;
        var allow_unknown = $real_input.data('allow-unknown');

        var $input = $real_input.clone();
        $input.removeAttr('name');
        $input.insertAfter($real_input);
        $input.val(drupal_to_select2($real_input.val()));
        $input.change(function() {
          $real_input.val(select2_to_drupal($(this).val()));
        });

        // wrap real input in container that hides it visually
        // display: none will block form value submission
        $real_input.wrap('<div style="position: absolute; width: 0; height: 0; overflow: hidden;"></div>');

        var options = {};
        // TODO: Fix with base stylesheet for seven.
        options.width = '100%';
        options.minimumInputLength = $real_input.attr('data-min-length') || 0;
        options.placeholder = $(this).attr('placeholder');
        options.tokenSeparators = [';'];
        options.separator = ';';

        // Set the max value and multiple values accordingly.
        if (max_values !== 1) {
          if (max_values > -1) {
            options.maximumSelectionSize = max_values;
          }
          options.multiple = true;
        }

        // Attach a "createSearchChoice" function to allow options from outside
        // the autocomplete callback. Used for "tagging" behavior.
        if (allow_unknown) {
          options.createSearchChoice = function (term) {
            return {id: term, text: term};
          };
        }

        // Prefill multi value fields with existing data.
        options.initSelection = function ($element, callback) {
          var data = null;
          if (options.multiple) {
            data = [];
            $($element.val().split(";")).each(function () {
              data.push({id: this, text: this});
            });
          }
          else {
            data = { id: $input.val(), text: $input.val() };
          }
          callback(data);
        };

        // remove quotes
        options.escapeMarkup = function (text) {
          return text.replace(/^"/, '').replace(/"$/, '');
        };

        options.query = function(query) {
          $.ajax({
            type: 'GET',
            url: url + '/' + Drupal.encodePath(query.term),
            dataType: 'json',
            success: function (matches) {
              if (typeof matches.status == 'undefined' || matches.status != 0) {
                var data = {results: []};
                $.each(matches, function(text, label){
                  data.results.push({id: text, text: label});
                });
                query.callback(data);
              }
            },
            error: function (xmlhttp) {
              // Do not thrown an error to the user, just leave the suggestions
              // empty and show the user input.
              query.callback({results: []});
            }
          });
        };
        $input.select2(options);
      });

      // Apply core autocomplete to the remaining elements.
      core_autocomplete.attach(context, settings);
    }
  };
}(Drupal, jQuery));
