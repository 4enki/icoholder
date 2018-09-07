$(document).ready(function(){

  var owl = $('.services_list');

  owl.owlCarousel({
    items: 1,
    startPosition: 0,
    nav: false,
    loop: true,
    URLhashListener: true,
    startPosition: 'URLHash'
  });

  $(".services_nav-left").click(function(){
    owl.trigger('prev.owl.carousel');
  });
  $(".services_nav-right").click(function(){
    owl.trigger('next.owl.carousel');
  });

});
