(function ($) {
  Drupal.behaviors.FlexboxBreakpoint = {
    attach: function (context, settings) {

      $('div[id^=block-views-portfolio-titles-block]').each(function () {
        var block = $(this);
        // var maxWidth = block.find('.content').first().width() - 200;
        var maxWidth = 500;
        var counter = 0;
        var row = 0;
        var lines = 1;

        block.find('.view-content').children().each(function () {
          row++;
          var rowWidth = $(this).width();
          counter = counter + rowWidth;

          if (counter > maxWidth) {
            counter = 0;
            console.log(row);
            lines++;
            block.find('.views-row-' + row).after('<br>');
            block.find('.views-row-' + row).addClass('breakpoint')
          }

        });

      });

    }
  };
}) (jQuery);