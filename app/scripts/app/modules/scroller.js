$(document).ready(function () {
  let scrollerStart  = false;
  let header        = $('.header');
  let headerHeight  = header.outerHeight();

  $(window).scroll(function () {
    if ( $(this).scrollTop() > headerHeight * .31 ) {
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
