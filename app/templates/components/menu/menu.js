$(document).ready(function() {
  var topMenu        = $('.top-menu');
  var topMenuHeight  = topMenu.outerHeight();
  console.log('topMenuHeight', topMenuHeight);
  var menuWrap = $('.header-nav');

  $(window).scroll(function() {

    if( $(window).scrollTop() > mainHeader ) {
      menuWrap.css({position: 'fixed'});
      menuWrap.addClass('is-fixed');
    } else {
      menuWrap.css({position: 'relative'});
      menuWrap.removeClass('is-fixed');
    }
  });
});
