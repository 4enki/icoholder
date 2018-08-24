'use strict';

$(document).ready(function () {
  $('input[type="text"]').click(function () {
    var sd = $(this).attr('placeholder');
    $('label[for^="' + sd + '"]').fadeIn();
  });
});
'use strict';

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