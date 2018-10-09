$(document).ready(function(){

  setRandomClass();

  setInterval(function () {
    setRandomClass();
  }, 1000);

  function setRandomClass() {
    let ul     = $("svg#dotmap-points");
    let items  = ul.find("ellipse");
    let number = items.length;
    let random = Math.floor( (Math.random() * number) );
    items.removeClass("banaan");
    items.eq(random).addClass("banaan");
  }

});
