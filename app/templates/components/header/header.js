$(function() {
  var typed = new Typed("._text-mutation", {
    strings: ["ICO campaign", "bounty campaign", "telegram support", "advisors team"],
    typeSpeed: 150,    // Скорость печати текста
    startDelay: 1000,   // Задержка перед началом печати текста
    shuffle: true,
    backSpeed: 150,    // Скорость стирания текста
    backDelay: 1500,   // Задержка перед стиранием текста
    loop: true,        // Зациклить
    showCursor: true,  // Показать курсор
    cursorChar: "."    // Символ курсора
  });
});
