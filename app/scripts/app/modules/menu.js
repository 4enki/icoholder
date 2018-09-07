$(document).ready(function() {
  var topMenuWrap        = $('.top-menu');
  var topMenuWrapHeight  = topMenuWrap.outerHeight();

  // console.log('topMenuWrapHeight', topMenuWrapHeight);

  var menuWrap = $('.header-nav');

  $(window).scroll(function() {

    if( $(window).scrollTop() > topMenuWrapHeight ) {
      topMenuWrap.addClass('is-scroll');
    } else {
      topMenuWrap.removeClass('is-scroll');
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
