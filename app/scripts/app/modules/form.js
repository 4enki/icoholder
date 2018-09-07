$(document).ready(function() {

  $('.form-control').keyup(function() {

    if ( $(this).val().length !== 0 ) {
      $(this).prev('.form-label').addClass('show');
    } else {
      $(this).prev('.form-label').removeClass('show');
    }

  });

  $('._contact-form').submit(function(e) {
    console.log('submit form ._contact-form');

    e.preventDefault();
    let form           = $(this);
    let formInput      = form.find('.form-control');
    let formOkMessage  = form.find('._form-actions-status');

    function clear_form() {
      formInput.val('');
    }

    let name      = form.find('input[name="name"]').val();
    let email     = form.find('input[name="email"]').val();
    let phone     = form.find('input[name="phone"]').val();
    let messenger = form.find('input[name="messenger"]').val();
    let message   = form.find('textarea[name="message"]').val();

    if (formInput.val().length > 0) {

      $.ajax({
        type: "POST",
        data: {
          'name':      name,
          'email':     email,
          'phone':     phone,
          'messenger': messenger,
          'message':   message
        },
        success: function() {
          console.log('form ._contact-form status: success');

          clear_form();
          formInput.closest('.form-group').removeClass('is-invalid');
          formOkMessage.addClass('is-show');
        },
        error: function() {
          console.log('form ._contact-form status: error');

        }
      });
    } else {

      formInput.each(function() {

        if ($(this).val().length > 0) {

          $(this).closest('.form-group').removeClass('is-invalid ui-shake');
          $(this).closest('.form-group').addClass('is-valid');
        } else {
          $(this).closest('.form-group').removeClass('is-valid');
          $(this).closest('.form-group').addClass('is-invalid ui-shake');
        }

      });

    }

    return false;
  });

});


