$( document ).ready(function() {
  $.fn.isInView = function ($el, offset=200){
    var elementTop = $el.offset().top;
    var elementBottom = elementTop + $el.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if($el.data("animation-offset") != undefined){
      offset = parseInt($el.data("animation-offset"));
    }

    return elementBottom > viewportTop && elementTop < viewportBottom-offset;
  };

});
