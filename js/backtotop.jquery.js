(function($) {
  $.fn.backtotop = function(options) {
    var this_ = this;
    var settings = $.extend({
      'position': 1000,
      'speed'   : 500
    }, options);
    var position = settings.position;
    var speed = settings.speed;

    this_.css({
      'right' : $(document).width() / 8 - this_.width() / 2
    });

    $(document).scroll(function() {
      var scroll_pos = $(window).scrollTop();
      if(scroll_pos >= position) {
        this_.fadeIn(speed);
      } else {
        this_.fadeOut(speed);
      }
    });

    this_.click(function() {
      $('html,body').animate({scrollTop: 0}, 500);
    });
  }
})(jQuery)