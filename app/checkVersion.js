'use strict';

(function () {
  const version = "1.0 beta";
  document.querySelector('.version').textContent = version;
    
  var http = new XMLHttpRequest();
  http.open('GET', 'https://dmitry-407.github.io/Betatest-ivi-Redmine/version.txt');
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (version != this.responseText) {
        $('.description').after('<div class="renewal"><h3>Доступно обновление</h3><a target="_blank" href="https://dmitry-407.github.io/Betatest-ivi-Redmine/releases/tag/' + this.responseText + '">Подробнее</a></div>');
      }
    }
  }
  http.send(null);
})();