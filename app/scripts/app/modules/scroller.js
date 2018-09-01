$(document).ready(function () {
  var scrollerStart  = false;
  var header        = $('.header');
  var headerHeight  = header.outerHeight();

  $(window).scroll(function () {
    if ( $(this).scrollTop() > headerHeight * 2 ) {
      $('#scroller').fadeIn();
    } else {
      $('#scroller').fadeOut();
    }
  });

  $('#scroller').click(function () {
    scrollerStart = true;
    $('body,html').animate({scrollTop: 0}, 700, function () {
      scrollerStart = false;
    });
    return false;
  });
});
