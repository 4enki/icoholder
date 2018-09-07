$(document).ready(function(){

  let owl = $('.services_list');

  owl.owlCarousel({
    items: 1,
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
