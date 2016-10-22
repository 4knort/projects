(function() {
  var inputContainer = document.querySelector('.product-form__count');
  var input = inputContainer.querySelector('input');
  var login = document.querySelector('.user-menu__login');
  var modalLogin = document.querySelector('.modal-login');

  inputContainer.addEventListener('click', function(event){
    event.preventDefault();
    if (event.target.classList.contains('product-form__count-btn--plus')) {
      if (parseInt(input.value) < 50) {
        input.value = parseInt(input.value) + 1;
      }
    }
    else if (event.target.classList.contains('product-form__count-btn--minus')) {
      if (parseInt(input.value) -1 >= 0) {
        input.value = parseInt(input.value) - 1;
      }
    }
  })

  login.addEventListener('click', function(event) {
    event.preventDefault();
    modalLogin.classList.toggle('hide');
  })
})();