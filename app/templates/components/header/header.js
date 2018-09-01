$(function() {
  if (typeof typed === "function"){
    $('._text-mutation').html('sdfsdfsdf');
  }

  $('._text-mutation').typed({
    strings: [                   // Список фраз для вывода
      "ICO campaign",
      "bounty campaign",
      "telegram support",
      "advisors team"
    ],
    shuffle: true,
    typeSpeed: 0,      // Скорость печати текста
    startDelay: 1500,     // Задержка перед началом печати текста
    backSpeed: 100,      // Скорость стирания текста
    backDelay: 1000,    // Задержка перед стиранием текста
    loop: false,       // Зациклить
    loopCount: false,  // Количество повторений, false — бесконечно
    showCursor: true,  // Показать курсор
    cursorChar: "."    // Символ курсора
  });
});
