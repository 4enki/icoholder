$(document).ready(function() {

  $('.form-control').keyup(function() {
    // var placeholder = $(this).attr('placeholder');
    // $(this).prev('.form-label').html(placeholder);

    if ( $(this).val().length !== 0 ) {
      $(this).prev('.form-label').addClass('show');
    } else {
      $(this).prev('.form-label').removeClass('show');
    }
  });

});
