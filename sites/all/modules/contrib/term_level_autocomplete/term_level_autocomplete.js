(function(Drupal, $) {
  Drupal.theme.prototype.tlaTable = function() {
    return '<div><div class="tla-table"></div></div>';
  };


  Drupal.theme.prototype.tlaTableRow = function(term, hint) {
    return '<div data-term="' + term + '" class="tla-row"><span>' + term + '</span><span class="tla-rating"></span><span class="tla-actions"></span></div>';
  };

  Drupal.theme.prototype.tlaDeleteButton = function(term) {
    return '<div><button class="tla-delete" data-term="' + term + '"><i class="tla-delete-icon"></i><span class="tla-delete-label">' + Drupal.t('Remove') + '</span></button></div>';
  };

  Drupal.theme.prototype.tlaStar = function(label) {
    return '<button class="tla-star"><i class="tla-star-icon"></i><span class="tla-star-label">' + label + '</span></button>';
  };

  Drupal.behaviors.term_level_autocomplete = {
    attach: function (context, settings) {
      $('.term-level-autocomplete', context).once('tla', function() {
        // Get references to all UI elements.
        var $widget = $(this);
        var $textarea = $('textarea', $widget);
        var levels = $textarea.data('term-levels');
        var hint = $textarea.data('rating-hint');
        if ($.isArray(levels) && levels.length == 1) {
          levels = {0: levels[0]}
        }
        var l = [];
        $.each(levels, function(k, v) {
          l.push(parseInt(k));
        });
        var min_level = Math.min.apply(Math, l) || 0;
        var $input = $('input[type="text"].form-autocomplete', $widget);
        var $empty = $('.term-level-autocomplete-empty', $widget);
        var $button = $('input[type="submit"]', $widget);
        var $table = $(Drupal.theme('tlaTable'));
        $('.term-level-autocomplete-table', $widget).append($table);

        // Parse existing data or start with empty dictionary.
        var data = $.parseJSON($textarea.val()) || {};
        if ($.isArray(data)) { data = {}; }

        var serialize = function () {
          $textarea.val(JSON.stringify(data));
        };

        var addTerm = function (term, level, added) {
          data[term] = level;
          serialize();
          addRow(term, level, added);
        };

        var addRow = function (term, level, added) {
          $empty.hide();
          if ($('[data-term="' + term + '"]', $table).length > 0) return;

          // create a new row
          var $row = $(Drupal.theme('tlaTableRow', term, hint));
          if (added) {
            $row.addClass('new');
          }
          $row.appendTo($table.find('.tla-table'));

          // add rating as radio buttons
          if (levels !== null) {
            var $rating = $('<select name="' + term + '"></select>');
            $.each(levels, function(l, t) {
              var $option = $('<option value="' + l + '">' + t + '</option>');
              if (level == l) {
                $option.attr('selected', 'selected');
                data[term] = l;
              }
              $option.appendTo($rating);
            });
            $rating.change(function(event) {
              event.preventDefault();
              data[term] = $(this).val();
              $row.removeClass('new');
              serialize();
            });
            $rating.appendTo($row.find('.tla-rating'));
          }

          // add delete action button
          var $delete = $(Drupal.theme('tlaDeleteButton', term));
          $delete.find('[data-term]').click(function(event) {
            event.preventDefault();
            removeRow($(this).data('term'));
          });

          $delete.appendTo($row.find('.tla-actions'));
          render_stars($row);
          if (added) {
            $row.hide();
            $row.fadeIn();
          }
        };

        var removeRow = function (term) {
          delete data[term];
          var $row = $('.tla-row[data-term="' + term + '"]', $table);
          $row.fadeOut(function() {
            $row.remove();
            if ($('.tla-row', $table).length == 0) {
              $empty.show();
            }
          });
          serialize();
        };

        function selectSkill(event) {
          event.preventDefault();
          if ($input.val().trim() != '') {
            addTerm($input.val(), min_level, true);
            $input.val('');
            if ($input.hasClass('formawesome-enhanced')) {
              $input.select2('val', '', true);
            }
          }
        }

        $button.click(selectSkill);

        if ($input.hasClass('formawesome-enhanced')) {
          $input.on('change', selectSkill);
        }

        $('.term-level-autocomplete-suggestions li', this).once(function() {
          var $trigger = $('<a href="#">' + $(this).text() + '</a>');
          $(this).text('');
          $(this).append($trigger);
          $trigger.click(function (event) {
            event.preventDefault();
            addTerm($(this).text(), min_level, true);
            $(this).parent().fadeOut();
          });
        });

        $.each(data, addRow);
      });
    }
  };

  function render_stars(context, settings) {
    $('.tla-rating', context).once(function() {
      var $stars = $('<div class="tla-stars"></div>');
      var $input = $('select', this);
      $('option', $input).each(function() {
        var level = $(this).attr('value');
        var label = $(this).text();
        if ( level === '0') return;
        var $star = $(Drupal.theme('tlaStar', label));
        $star.attr('title', label);
        $star.data('level', level);
        $star.tipTip({defaultPosition: 'top', delay: 50});

        if ($(this).attr('value') === $input.val()) {
          $star.addClass('selected');
        }
        $stars.prepend($star);
      });
      $stars.appendTo(this);
      $stars.find('button').click(function(event) {
        event.preventDefault();
        $(this).parent().find('button').removeClass('selected');
        $(this).addClass('selected');
        $input.val($(this).data('level'));
        $input.change();
      });
    });
  }

}(Drupal, jQuery));
