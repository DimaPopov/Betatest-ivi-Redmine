'use strict';

(function () {
  const version = "1.1";
  document.querySelector('.version').textContent = version;
  
  var http = new XMLHttpRequest();
  http.open('GET', 'https://dmitry-407.github.io/Betatest-ivi-Redmine/version.txt');
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(version, this.responseText);
      if (version != this.responseText) {
        var textInfo = document.querySelector('.text--info');
        
        var renewal = document.createElement("div");
        renewal.innerHTML = '<h3>Доступно обновление</h3><a target="_blank" href="https://github.com/Dmitry-407/Betatest-ivi-Redmine/releases/tag/' + this.responseText + '">Подробнее</a>';
        renewal.classList.add('renewal');
        
        textInfo.parentNode.insertBefore(renewal, textInfo);
      }
    }
  }
  http.send(null);
})();