'use strict';

$(document).ready(function () {
  $('input[type="text"]').click(function () {
    var sd = $(this).attr('placeholder');
    $('label[for^="' + sd + '"]').fadeIn();
  });
});
// подсвечиваем ссылки с одинаковым адресом
if ($) $(function () {

  $('a').hover(function () {
    if ($(this).attr('href') != '' && $(this).attr('href') != '#') {
      $('a[href="' + $(this).attr('href') + '"]').addClass('hover');
    }
  }, function () {
    $('a').removeClass('hover');
  });
});
// /подсвечиваем ссылки с одинаковым адресом
$(document).ready(function () {
  var scrollerStart = false;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#scroller').fadeIn();
    } else {
      $('#scroller').fadeOut();
    }
  });

  $('#scroller').click(function () {
    scrollerStart = true;
    $('body,html').animate({ scrollTop: 0 }, 400, function () {
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

  var menuWrap = $('.header-nav');

  $(window).scroll(function () {

    if ($(window).scrollTop() > topMenuHeight) {
      topMenu.addClass('is-scroll');
    } else {
      topMenu.removeClass('is-scroll');
    }

    return false;
  });

  $('.menu_link-arrow').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    $(this).next('.menu-nested').toggleClass('show');
    return false;
  });
});