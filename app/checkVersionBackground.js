'use strict';

(function () {
  const version = "1.0 beta";
    
  var http = new XMLHttpRequest();
  http.open('GET', 'https://dmitry-407.github.io/Betatest-ivi-Redmine/version.txt');
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (version != this.responseText) {
          chrome.browserAction.setBadgeText({text: '!'});
          chrome.browserAction.setBadgeBackgroundColor({color: '#ff0000'});
      }else {
        chrome.browserAction.setBadgeText({text: ''});
      }
    }
  }
  http.send(null);
})();