$(document).ready(function(){

  setDotMap();

  setInterval(function () {
    setDotMap();
  }, 2600);

  function setDotMap() {
    let ul     = $("svg#dotmap-points");
    let items  = ul.find("ellipse");
    let number = items.length;
    let random = Math.floor( (Math.random() * number) );
    items.removeClass("banaan");
    items.eq(random).addClass("banaan");
  }

});
