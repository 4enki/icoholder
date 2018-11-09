'use strict';

$(document).ready(function () {

  $('.form-control').keyup(function () {

    if ($(this).val().length !== 0) {
      $(this).prev('.form-label').addClass('show');
    } else {
      $(this).prev('.form-label').removeClass('show');
    }
  });

  $('._contact-form').submit(function (e) {
    console.log('submit form ._contact-form');

    e.preventDefault();
    var form = $(this);
    var formInput = form.find('.form-control');
    var formOkMessage = form.find('._form-actions-status');

    function clear_form() {
      formInput.val('');
    }

    var name = form.find('input[name="name"]').val();
    var email = form.find('input[name="email"]').val();
    var phone = form.find('input[name="phone"]').val();
    var messenger = form.find('input[name="messenger"]').val();
    var message = form.find('textarea[name="message"]').val();

    if (formInput.val().length > 0) {

      $.ajax({
        type: "POST",
        data: {
          'name': name,
          'email': email,
          'phone': phone,
          'messenger': messenger,
          'message': message
        },
        success: function success() {
          console.log('form ._contact-form status: success');

          clear_form();
          formInput.closest('.form-group').removeClass('is-invalid');
          formOkMessage.addClass('is-show');
        },
        error: function error() {
          console.log('form ._contact-form status: error');
        }
      });
    } else {

      formInput.each(function () {

        if ($(this).val().length > 0) {

          $(this).closest('.form-group').removeClass('is-invalid ui-shake');
          $(this).closest('.form-group').addClass('is-valid');
        } else {
          $(this).closest('.form-group').removeClass('is-valid');
          $(this).closest('.form-group').addClass('is-invalid ui-shake');
        }
      });
    }

    return false;
  });
});
$(document).ready(function () {
  var scrollerStart = false;
  var header = $('.header');
  var headerHeight = header.outerHeight();

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight * .31) {
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

  var owl = $('.services_list');

  owl.owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: false,
    autoplayTimeout: 1000,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: '#Trackers',
    dotsContainer: '#services_menu'
  });

  $(".services_nav-left").click(function () {
    owl.trigger('prev.owl.carousel');
  });
  $(".services_nav-right").click(function () {
    owl.trigger('next.owl.carousel');
  });
});
$(function () {

  if ($('._text-mutation').length) {

    var typed = new Typed('._text-mutation', {
      strings: ['ICO campaign', 'bounty campaign', 'telegram support', 'advisors team'],
      typeSpeed: 87,
      startDelay: 58,
      backSpeed: 101,
      backDelay: 903,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: "."
    });
  }
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
$(document).ready(function () {

  $('#plans').easytabs({
    tabActiveClass: 'active',
    tabs: '> .plans_menu > ul > li'
  });
});
$(document).ready(function () {

  setDotMap();

  setInterval(function () {
    setDotMap();
  }, 2000);

  function setDotMap() {
    var ul = $("svg#dotmap-points");
    var items = ul.find("ellipse");
    var number = items.length;
    var random = Math.floor(Math.random() * number);
    items.removeClass("banaan");
    items.eq(random).addClass("banaan");
  }
});
$(document).ready(function () {

  setGlobeWays();

  setInterval(function () {
    setGlobeWays();
  }, 1500);

  function setGlobeWays() {
    var ul = $("svg#globe-ways");
    var items = ul.find("path[stroke]");
    var number = items.length;
    var random = Math.floor(Math.random() * number);
    items.removeClass("dash");
    items.eq(random).addClass("dash");
  }
});