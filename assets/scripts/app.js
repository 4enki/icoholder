'use strict';

$(document).ready(function () {
  $('input[type="text"]').click(function () {
    var sd = $(this).attr('placeholder');
    $('label[for^="' + sd + '"]').fadeIn();
  });
});
$(document).ready(function () {
  var scrollerStart = false;
  var header = $('.header');
  var headerHeight = header.outerHeight();

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
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
$(document).ready(function () {
  var topMenu = $('.top-menu');
  var topMenuHeight = topMenu.outerHeight();

  // console.log('topMenuHeight', topMenuHeight);

  var menuWrap = $('.header-nav');

  $(window).scroll(function () {

    if ($(window).scrollTop() > topMenuHeight) {
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