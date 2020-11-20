'use strict';

(function () {
  const ENTER_KEY = 'Enter';
    
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
      container.classList.remove('error');
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
    
  var legendsElement = $('fieldset legend');
  
  if (legendsElement.text() == 'Файлы (0)') {
    legendsElement.parent().remove();
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
      const email = $('.messages ~ form #username').val();
      
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
      messageStart += '<div class="message error"><div class="message--content"><h3>Ошибка</h3><p class="text">' + errorElement.text() + '</p></div></div><div class="message"><div class="message--content"><h3>Попробуйте еще</h3><p class="text">чтобы пользоваться баг-трекером</p></div></div>';
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
  * Обработка ошибок
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
    
    console.log(membersLabels);
    
    for (var i = 0; i < membersLabels.length; i++) {
      var memberLabel = $(membersLabels[i]);
      var textMemverLavel = memberLabel.text().replace(/.\s*$/, "");
      
      memberLabel.text(textMemverLavel);
    }
  }
  
  /*
  * Скрытие пагинтации если страниц 0 из 0
  */
  
  const itemsElement =  $('.pagination .items');
  
  if (itemsElement.text() == '(0-0/0)') {
    itemsElement.parent().parent().remove();
  }
  
  $('div#activity dt.me').parent().addClass('me');
})();