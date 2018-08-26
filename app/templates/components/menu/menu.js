$(document).ready(function() {
  var topMenu        = $('.top-menu');
  var topMenuHeight  = topMenu.outerHeight();

  console.log('topMenuHeight', topMenuHeight);

  var menuWrap = $('.header-nav');

  $(window).scroll(function() {

    if( $(window).scrollTop() > topMenuHeight ) {
      topMenu.addClass('is-scroll');
    } else {
      topMenu.removeClass('is-scroll');
    }
  });
});
