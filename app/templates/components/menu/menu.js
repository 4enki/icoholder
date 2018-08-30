$(document).ready(function() {
  var topMenu        = $('.top-menu');
  var topMenuHeight  = topMenu.outerHeight();

  var menuWrap = $('.header-nav');

  $(window).scroll(function() {

    if( $(window).scrollTop() > topMenuHeight ) {
      topMenu.addClass('is-scroll');
    } else {
      topMenu.removeClass('is-scroll');
    }

    return false;
  }).scroll();

  $('.menu_link-arrow').click(function (e) {
    e.preventDefault();

    $(this).toggleClass('is-open');
    $(this).next('.menu-nested').toggleClass('show');

    return false;
  });
});
