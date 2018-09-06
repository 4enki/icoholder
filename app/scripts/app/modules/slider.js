$(document).ready(function(){

  var owl = $('.services_list');

  owl.owlCarousel({
    items: 1,
    nav: false,
    loop: true
  });

  $(".services_nav-left").click(function(){
    owl.trigger('prev.owl.carousel');
  });
  $(".services_nav-right").click(function(){
    owl.trigger('next.owl.carousel');
  });

});
