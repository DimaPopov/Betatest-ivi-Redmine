'use strict';

(function () {
  var script = document.createElement("script");
  
  script.src = chrome.extension.getURL("script.js");
  script.async = false;
  
  document.documentElement.appendChild(script);
})();