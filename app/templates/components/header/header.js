$(function() {

  if (typeof typed !== 'undefined' && $.isFunction(typed)) {
    console.log('Nothing');
  } else {

    var typed = new Typed("._text-mutation", {
      strings: [
        "ICO campaign",
        "bounty campaign",
        "telegram support",
        "advisors team",
      ],
      typeSpeed: 150,    // Скорость печати текста
      startDelay: 50,    // Задержка перед началом печати текста
      backSpeed: 150,    // Скорость стирания текста
      backDelay: 1500,   // Задержка перед стиранием текста
      loop: false,       // Зациклить
      loopCount: false,  // Количество повторений, false — бесконечно
      showCursor: true,  // Показать курсор
      cursorChar: "."    // Символ курсора
    });
  }
});
