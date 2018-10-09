$(document).ready(function(){

  setRandomClass1();

  setInterval(function () {
    setRandomClass1();
  }, 3000);

  function setRandomClass1() {
    let ul     = $("svg#globe-ways");
    let items  = ul.find("path");
    let number = items.length;
    let random = Math.floor( (Math.random() * number) );
    items.removeClass("dash");
    items.eq(random).addClass("dash");
  }

});


