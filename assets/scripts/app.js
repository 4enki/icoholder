'use strict';

$(document).ready(function () {

  $('.form-control').keyup(function () {

    if ($(this).val().length !== 0) {
      $(this).prev('.form-label').addClass('show');
    } else {
      $(this).prev('.form-label').removeClass('show');
    }
  });
});
$(document).ready(function () {
  var scrollerStart = false;
  var header = $('.header');
  var headerHeight = header.outerHeight();

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight * 2) {
      $('#scroller').fadeIn();
    } else {
      $('#scroller').fadeOut();
    }
  });

  $('#scroller').click(function () {
    scrollerStart = true;
    $('body,html').animate({ scrollTop: 0 }, 700, function () {
      scrollerStart = false;
    });
    return false;
  });
});
// помогаем ссылкам с якорями плавно скролиться
$('._go-to').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1500);
});
// /помогаем ссылкам с якорями плавно скролиться
// = modules/spyscrollmenu
$(function () {

  var typed = new Typed('._text-mutation', {
    strings: ['ICO campaign', 'bounty campaign', 'telegram support', 'advisors team'],
    typeSpeed: 242,
    startDelay: 3605,
    backSpeed: 175,
    backDelay: 3605,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "."
  });
});
$(document).ready(function () {
  var topMenuWrap = $('.top-menu');
  var topMenuWrapHeight = topMenuWrap.outerHeight();

  // console.log('topMenuWrapHeight', topMenuWrapHeight);

  var menuWrap = $('.header-nav');

  $(window).scroll(function () {

    if ($(window).scrollTop() > topMenuWrapHeight) {
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