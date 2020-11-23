'use strict';

(function () {
  const head = $('head');
  const ENTER_KEY = 'Enter';
    
  /*
  * Подгрузка стилей
  */
  
  head.append('<link rel="stylesheet" media="all" href="https://dmitry-407.github.io/Betatest-ivi-Redmine/style.css">');
  
  /*
  * Общие функции
  */
  
  var eventInput = function () {
    const value = this.value;
    const container = this.parentNode.parentNode;

    const isFilled = !!value.length;
    const isError = (value.toLowerCase() === 'error');
    
    if (!container.classList.contains('nbl-input_state_disabled')) {
      container.classList[isFilled ? 'add' : 'remove']('nbl-input_state_filled');
      container.classList.remove('error');
    }
    
    if (this.classList.contains('textarea--text')) {
      const fakeEditbox = container.querySelector('.text--textarea');
      const editboxStartHeight = 200;
      const editboxPadDelta = 8;

      fakeEditbox.textContent = value;
      const fakeEditboxHeight = fakeEditbox.offsetHeight;

      if (fakeEditboxHeight > editboxStartHeight) {
        this.style.height = fakeEditboxHeight + editboxPadDelta + 'px';
      } else if (fakeEditboxHeight === editboxStartHeight) {
        this.style.height = editboxStartHeight + 'px';
      }
    }
  };
  
  var eventFocus = function () {
    const container = this.parentNode.parentNode;
    
    if (!container.classList.contains('nbl-input_state_disabled')) {
      container.classList.add('nbl-input_state_focused');
      container.classList.remove('nbl-input_state_error');
    }
  };

  var eventBlur = function () {
    const container = this.parentNode.parentNode;
        
    if (!container.classList.contains('nbl-input_state_disabled')) {
      container.classList.remove('nbl-input_state_focused');
    }
  };
  
  var onEventInput = function (element) {
    element.find('input').bind('input', eventInput);
    element.find('input').bind('focus', eventFocus);
    element.find('input').bind('blur', eventBlur);
  };  
  
  var headerElement = $('#header');
  var topMenuElement = $('#top-menu');
  var miniMenyElement = $('#main-menu');
  var loginFormElement = $('#login-form');
  
  topMenuElement.remove();
  headerElement.after(topMenuElement);
  
  if (topMenuElement) {
    topMenuElement = $('#top-menu');
    miniMenyElement.remove();
    topMenuElement.after(miniMenyElement);
  }
  
  if (topMenuElement.find('#account ul li').length == 1) {
    topMenuElement.remove();
  }
  
  /*
  * Авторизация
  */
  
  var statysNextBlockFormLoginEvent = true;
  var activeBlockFormLoginLeval = 1;
  
  var nextBlockForm = function () {
    if (activeBlockFormLoginLeval == 1) {
      const emailElement = $('.messages ~ form #username');
      const email = emailElement.val();
      
      if (email.length == 0) {
        emailElement.addClass('nbl-input_state_error');
        
        return;
      }
      
      activeBlockFormLoginLeval++;
      
      var messageElement = $('.messages').append('<div class="message my"><div class="message--content"><h3></h3></div></div>').find('.message:last-child');
      
      messageElement.find('h3').text(email);
      $('.messages ~ form').append('<input  type="hidden" name="username" id="username" value="' + email + '">');
      $('.messages ~ form .input--block').html('<div class="nbl-input"><div class="nbl-input__body"><input type="password" name="password" id="password" autocomplete="on" tabindex="2" class="nbl-input__editbox"><div class="nbl-input__overlays"><div class="nbl-input__placeholder">Пароль</div><div class="nbl-input__stripe"></div></div></div><p class="next--block__button disabled">Войти</p></div>');
      statysNextBlockFormLoginEvent = true;
      $('.messages ~ form input').bind('input', inputBlockFormButton);
      onEventInput($('.messages ~ form'));
      setTimeout(function() { messageElement.addClass('active'); }, 100);
      setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 300);
      setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 500);
    }else if (activeBlockFormLoginLeval == 2) {
      $('.messages ~ form').submit();
    }
  }
  
  var inputBlockFormButton = function () {
    const value = this.value;
    const button = this.parentNode.parentNode.parentNode.querySelector('.next--block__button');
    
    button.classList[value.length == 0 ? 'add' : 'remove']('disabled');
    
    if (statysNextBlockFormLoginEvent && value.length > 0) {
      $(button).bind('click', nextBlockForm);
      statysNextBlockFormLoginEvent = false;
    }else if (value.length == 0) {
      $(button).unbind('click', nextBlockForm);
      statysNextBlockFormLoginEvent = true;
    }
  }
  
  var keyButtonFormLogin = function (evt) { 
    var code = evt.code;
    
    if (code == ENTER_KEY) {
      evt.preventDefault();
      
      nextBlockForm();
    }
  }
  
  if (loginFormElement.length > 0) {    
    document.addEventListener('keydown', keyButtonFormLogin);
    
    var errorElement = $('#flash_error');
    var messageStart = '<div class="message"><div class="message--content"><h3>Войдите</h3><p class="text">чтобы пользоваться баг-трекером</p></div></div>';
    const emailUser = loginFormElement.find('#username').val();
    
    if (errorElement.length > 0) {
      messageStart = emailUser.length > 0 ? '<div class="message my"><div class="message--content"><h3>' + emailUser + '</h3></div></div>' : '';
      messageStart += '<div class="message error"><div class="message--content"><h3>Ошибка</h3><p class="text">' + errorElement.text() + '</p></div></div><div class="message"><div class="message--content"><h3>Попробуйте ещё раз</h3><p class="text">чтобы пользоваться баг-трекером</p></div></div>';
      errorElement.remove();
    }
    
    var toket = loginFormElement.find('input[name="authenticity_token"]').val();
    loginFormElement.after('<div class="messages">' + messageStart + '</div><form onsubmit="return keepAnchorOnSignIn(this);" action="/login" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="' + toket + '"><div class="input--block"><div class="nbl-input nbl-input_iconType_icon"><div class="nbl-input__body"><div class="nbl-input__icon"><div class="nbl-icon nbl-icon_avatar_16 nbl-input__nbl-icon"></div></div><input name="username" id="username" autocomplete="on" tabindex="1" class="nbl-input__editbox"><div class="nbl-input__overlays"><div class="nbl-input__placeholder">Логин</div><div class="nbl-input__stripe"></div></div></div></div><p class="next--block__button disabled">Продолжить</p></div></form>');
    onEventInput($('.messages ~ form'));
    $('.messages ~ form input').bind('input', inputBlockFormButton);
    loginFormElement.remove();
    
    setTimeout(function() { $('.messages .message:nth-child(1)').addClass('active'); }, 100);
    
    if (errorElement.length > 0) {
      if (emailUser.length > 0) {
        setTimeout(function() { $('.messages .message:nth-child(2)').addClass('active'); }, 300);
        setTimeout(function() { $('.messages .message:nth-child(3)').addClass('active'); }, 500);
        setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 700);
        setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 900);
      }else {
        setTimeout(function() { $('.messages .message:nth-child(2)').addClass('active'); }, 300);
        setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 500);
        setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 700);
      }
    }else {
      setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 300);
      setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 500);
    }
  }
  
  $('.wiki').parent().addClass('all');
  
  /*
  * Обработка сообщений об ошибках
  */
  
  const errorExplanationElement = $('#errorExplanation');
  
  if (errorExplanationElement.length) {
    const titleError = $('#content h2');
    const titleErrorText = titleError.text();
    const textError = errorExplanationElement.text().replace(/.\s*$/, ""); ;
    
    $('#content').html('<div class="messages"><div class="message error"><div class="message--content"><h3>Ошибка ' + titleErrorText + '</h3><p class="text">' + textError + '</p></div></div><div class="message"><div class="message--content"><h3>Если так быть не должно</h3><p class="text">попробуйте связаться с менеджером программы бета-тестирования</p></div></div></div><div class="input--block"><p onclick="javascripty:history.back();" class="next--block__button">Вернуться назад</p></div>');
    onEventInput($('.messages ~ form'));
    $('.messages ~ form input').bind('input', inputBlockFormButton);
    loginFormElement.remove();
    
    setTimeout(function() { $('.messages .message:nth-child(1)').addClass('active'); }, 100);
    setTimeout(function() { $('.messages .message:nth-child(2)').addClass('active'); }, 300);
    setTimeout(function() { $('.messages ~ .input--block .next--block__button').addClass('active'); }, 500);
  }
  
  const members = $('.members');
  
  if (members.length) {
    var membersLabels = $('.members p span.label');
        
    for (var i = 0; i < membersLabels.length; i++) {
      var memberLabel = $(membersLabels[i]);
      var textMemverLavel = memberLabel.text().replace(/.\s*$/, "");
      
      memberLabel.text(textMemverLavel);
    }
  }
  
  /*
  * Удаление элемента выпадающего списка с файлами, если нет файлов
  */
  
  var legendsElement = $('fieldset legend');
  
  if (legendsElement.text() == 'Файлы (0)') {
    legendsElement.parent().remove();
  }
  
  /*
  * Удаление пагинации, если страниц 0 из 0
  */
  
  const itemsElement =  $('.pagination .items');
  
  if (itemsElement.text() == '(0-0/0)') {
    itemsElement.parent().parent().remove();
  }
  
  $('div#activity dt.me').parent().addClass('me');
  
  /*
  * Замена текста в вверхнем меню в кнопках на иконки
  */
  
  const myAccountElement = topMenuElement.find('.my-account');
  
  myAccountElement.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="user_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M17.5 8.5C17.5 6.566 15.934 5 14 5a3.499 3.499 0 00-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5zm2 0c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 01-5.5-5.5C8.5 5.461 10.961 3 14 3s5.5 2.461 5.5 5.5zM7 20.643c0 .943-.08.857.456.857h13.588c.536 0 .456.086.456-.857 0-2.288-3.304-3.643-7.25-3.643S7 18.355 7 20.643zm-2 0C5 16.763 9.299 15 14.25 15s9.25 1.763 9.25 5.643c0 2.016-.781 2.857-2.456 2.857H7.456C5.78 23.5 5 22.66 5 20.643z" fill="currentColor" fill-rule="nonzero"></path></g></svg>');
  
  const logoutElement = topMenuElement.find('.logout');
  
  logoutElement.html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="door_arrow_right_outline_28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.357 3H13a1 1 0 110 2h-2.6c-1.137 0-1.929 0-2.546.051-.605.05-.953.142-1.216.276a3 3 0 00-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v7.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 001.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051H13a1 1 0 110 2h-2.643c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 01-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 19.6 3 18.727 3 17.643v-7.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 015.73 3.544c.592-.302 1.233-.428 1.961-.487C8.4 3 9.273 3 10.357 3zm8.936 6.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L21.586 15H12a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" fill="currentColor"></path></svg>');
})();
