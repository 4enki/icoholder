$(document).ready(function(){

  setGlobeWays();

  setInterval(function () {
    setGlobeWays();
  }, 1500);

  function setGlobeWays() {
    let ul     = $("svg#globe-ways");
    let items  = ul.find("path[stroke]");
    let number = items.length;
    let random = Math.floor( (Math.random() * number) );
    items.removeClass("dash");
    items.eq(random).addClass("dash");
  }

});
