$(document).ready(function() {

  $('.form-control').keyup(function() {

    if ( $(this).val().length !== 0 ) {
      $(this).prev('.form-label').addClass('show');
    } else {
      $(this).prev('.form-label').removeClass('show');
    }

  });

});
