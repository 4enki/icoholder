setRandomClass();
setInterval(function () {
    setRandomClass();
}, 1000);//number of milliseconds (2000 = 2 seconds)

function setRandomClass() {
    var ul = $("svg#dotmap-points");
    var items = ul.find("ellipse");
    var number = items.length;
    var random = Math.floor((Math.random() * number));
    items.removeClass("banaan");
    items.eq(random).addClass("banaan");
}
