'use strict';

(function () {
  const head = $('head');
  const contentElement = $('#content');
  const ENTER_KEY = 'Enter';
  const url = window.location.href.replace('https://betatest.ivi.ru/','').split('?')[0];

  const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const arrayAccounts = ['user_custom_field_values_13', 'user_custom_field_values_14', 'user_custom_field_values_15', 'user_custom_field_values_16', 'user_custom_field_values_17', 'user_custom_field_values_27', 'user_custom_field_values_28', 'user_custom_field_values_29', 'user_custom_field_values_18', 'user_custom_field_values_30'];

  /*
  * Подгрузка стилей
  */

  head.append('<link rel="stylesheet" media="all" href="https://dmitry-407.github.io/Betatest-ivi-Redmine/style.css?v=2.0"> importance="high"');

  /*
  * Иконки для проектов
  */

  const iconProject = {
    'ios': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.4408 512" height="512" width="430.4408"><metadata id="metadata5097"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>logo_apple</dc:title></cc:Work></rdf:RDF></metadata><!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --><title id="title5076">logo_apple</title><desc id="desc5078">Created with Sketch.</desc><defs id="defs5081"><rect height="48" width="22" y="0" x="0" id="path-1"/></defs><g style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" transform="matrix(20.357162,0,0,20.357162,0,-203.57162)" id="home_devices"><g id="logo_apple"><mask fill="white" id="mask-2"><use height="100%" width="100%" y="0" x="0" id="use5083" xlink:href="#path-1"/></mask><g id="Rectangle-46-Copy-4"/><g style="fill:currentColor" mask="url(#mask-2)" id="Group-74"><g id="Combined-Shape" transform="translate(0,10)"><path d="m 10.753591,7.2168813 c 0.876626,0 2.503539,-1.1687409 4.621858,-1.1687409 3.646021,0 5.079937,2.5156115 5.079937,2.5156115 0,0 -2.805049,1.3904635 -2.805049,4.7651561 0,3.806863 3.494103,5.118409 3.494103,5.118409 0,0 -2.442307,6.666708 -5.741862,6.666708 -1.5153,0 -2.693436,-0.990611 -4.290121,-0.990611 -1.6269123,0 -3.2421987,1.02744 -4.29322,1.02744 C 3.8064643,25.151606 0,18.826876 0,13.743792 0,8.7418816 3.2220468,6.1180394 6.2433455,6.1180394 c 1.9648518,0 3.4894527,1.0988419 4.5102455,1.0988419 z M 11.666646,2.1886647 C 13.371068,0.01052243 15.740517,0 15.740517,0 c 0,0 0.352665,2.0481152 -1.340905,4.0203185 -1.807509,2.1067401 -3.862271,1.7617548 -3.862271,1.7617548 0,0 -0.385994,-1.6565305 1.129305,-3.5934086 z" id="path5087"/></g></g></g></g></svg>',
    'ios-kids': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.4408 512" height="512" width="430.4408"><metadata id="metadata5097"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>logo_apple</dc:title></cc:Work></rdf:RDF></metadata><!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --><title id="title5076">logo_apple</title><desc id="desc5078">Created with Sketch.</desc><defs id="defs5081"><rect height="48" width="22" y="0" x="0" id="path-1"/></defs><g style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" transform="matrix(20.357162,0,0,20.357162,0,-203.57162)" id="home_devices"><g id="logo_apple"><mask fill="white" id="mask-2"><use height="100%" width="100%" y="0" x="0" id="use5083" xlink:href="#path-1"/></mask><g id="Rectangle-46-Copy-4"/><g style="fill:currentColor" mask="url(#mask-2)" id="Group-74"><g id="Combined-Shape" transform="translate(0,10)"><path d="m 10.753591,7.2168813 c 0.876626,0 2.503539,-1.1687409 4.621858,-1.1687409 3.646021,0 5.079937,2.5156115 5.079937,2.5156115 0,0 -2.805049,1.3904635 -2.805049,4.7651561 0,3.806863 3.494103,5.118409 3.494103,5.118409 0,0 -2.442307,6.666708 -5.741862,6.666708 -1.5153,0 -2.693436,-0.990611 -4.290121,-0.990611 -1.6269123,0 -3.2421987,1.02744 -4.29322,1.02744 C 3.8064643,25.151606 0,18.826876 0,13.743792 0,8.7418816 3.2220468,6.1180394 6.2433455,6.1180394 c 1.9648518,0 3.4894527,1.0988419 4.5102455,1.0988419 z M 11.666646,2.1886647 C 13.371068,0.01052243 15.740517,0 15.740517,0 c 0,0 0.352665,2.0481152 -1.340905,4.0203185 -1.807509,2.1067401 -3.862271,1.7617548 -3.862271,1.7617548 0,0 -0.385994,-1.6565305 1.129305,-3.5934086 z" id="path5087"/></g></g></g></g></svg>',
    'android': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.46949 512" height="512" width="440.46948" sodipodi:docname="android.svg" inkscape:version="0.92.1 r15371"><sodipodi:namedview pagecolor="currentColor" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1017" id="namedview4507" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="29.57937" inkscape:cx="12.36078" inkscape:cy="14.368128" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg42"/><metadata id="metadata46"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>logo_android</dc:title></cc:Work></rdf:RDF></metadata><!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --><title id="title10">logo_android</title><desc id="desc12">Created with Sketch.</desc><defs id="defs15"><rect height="48" width="26" y="0" x="0" id="path-1"/></defs><g transform="matrix(17.817221,0,0,17.817221,-17.06904,-164.14253)" style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" id="home_devices"><g id="logo_android"><mask fill="white" id="mask-2"><use height="100%" width="100%" y="0" x="0" id="use17" xlink:href="#path-1"/></mask><g style="opacity:0.3" id="Rectangle-46-Copy-3"/><g mask="url(#mask-2)" id="Group-77"><g id="Group-71" transform="translate(0,9)"><g id="g36" transform="translate(0.958008,0.135417)"><path style="fill:currentColor;fill-rule:nonzero" id="Combined-Shape" d="M 7.2780841,0.14673545 C 7.545738,-0.00162752 7.8829863,0.09507687 8.0313492,0.36273075 L 11.048326,5.8055008 c 0.148363,0.2676538 0.05166,0.6049021 -0.215995,0.7532651 -0.267654,0.148363 -0.604902,0.051659 -0.753265,-0.2159953 L 7.0620888,0.90000057 C 6.9137259,0.63234669 7.0104302,0.29509841 7.2780841,0.14673545 Z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" transform="matrix(-1,0,0,1,45.521768,0)" id="path22" d="m 22.760884,9.2066498 c 1.082851,0 1.960676,0.9159902 1.960676,2.0459222 v 7.245974 c 0,1.129932 -0.877825,2.045922 -1.960676,2.045922 -1.082851,0 -1.960675,-0.91599 -1.960675,-2.045922 v -7.245974 c 0,-1.129932 0.877824,-2.0459222 1.960675,-2.0459222 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" transform="matrix(-1,0,0,1,30.518338,0)" id="path24" d="m 15.25917,17.475585 c 1.129931,0 2.045922,0.915991 2.045922,2.045922 v 7.245975 c 0,1.129931 -0.915991,2.045922 -2.045922,2.045922 -1.129932,0 -2.045923,-0.915991 -2.045923,-2.045922 v -7.245975 c 0,-1.129931 0.915991,-2.045922 2.045923,-2.045922 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path26" d="m 17.443475,0.14673545 c 0.267654,0.14836296 0.364359,0.48561124 0.215996,0.75326512 L 14.642494,6.3427706 C 14.494131,6.6104245 14.156883,6.7071289 13.889229,6.5587659 13.621575,6.4104029 13.524871,6.0731546 13.673234,5.8055008 L 16.69021,0.36273075 c 0.148363,-0.26765388 0.485612,-0.36435827 0.753265,-0.2159953 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path28" d="m 1.9606754,9.2066498 c 1.0828511,0 1.9606754,0.9159902 1.9606754,2.0459222 v 7.245974 c 0,1.129932 -0.8778243,2.045922 -1.9606754,2.045922 C 0.87782428,20.544468 0,19.628478 0,18.498546 V 11.252572 C 0,10.12264 0.87782428,9.2066498 1.9606754,9.2066498 Z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path30" d="m 9.46239,17.475585 c 1.129932,0 2.045922,0.915991 2.045922,2.045922 v 7.245975 c 0,1.129931 -0.91599,2.045922 -2.045922,2.045922 -1.1299316,0 -2.0459222,-0.915991 -2.0459222,-2.045922 v -7.245975 c 0,-1.129931 0.9159906,-2.045922 2.0459222,-2.045922 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path32" d="m 4.6033302,9.1981251 c 0.00499,-3.950842 3.4762043,-7.1522029 7.7574498,-7.1522029 4.281245,0 7.752462,3.2013609 7.757449,7.1522029 z M 8.780416,6.3594081 c 0.3578116,0 0.6478753,-0.2900637 0.6478753,-0.6478754 0,-0.3578117 -0.2900637,-0.6478753 -0.6478753,-0.6478753 -0.3578117,0 -0.6478754,0.2900636 -0.6478754,0.6478753 0,0.3578117 0.2900637,0.6478754 0.6478754,0.6478754 z m 7.160728,0 c 0.357811,0 0.647875,-0.2900637 0.647875,-0.6478754 0,-0.3578117 -0.290064,-0.6478753 -0.647875,-0.6478753 -0.357812,0 -0.647876,0.2900636 -0.647876,0.6478753 0,0.3578117 0.290064,0.6478754 0.647876,0.6478754 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path34" d="M 20.118235,9.8119017 V 21.055949 c 0,1.035771 -0.839658,1.875429 -1.875429,1.875429 H 6.4787535 c -1.0357706,0 -1.8754286,-0.839658 -1.8754286,-1.875429 V 9.8119017 Z" inkscape:connector-curvature="0"/></g></g></g></g></g></svg>',
    'android-kids': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.46949 512" height="512" width="440.46948" sodipodi:docname="android.svg" inkscape:version="0.92.1 r15371"><sodipodi:namedview pagecolor="currentColor" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1017" id="namedview4507" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="29.57937" inkscape:cx="12.36078" inkscape:cy="14.368128" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg42"/><metadata id="metadata46"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>logo_android</dc:title></cc:Work></rdf:RDF></metadata><!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --><title id="title10">logo_android</title><desc id="desc12">Created with Sketch.</desc><defs id="defs15"><rect height="48" width="26" y="0" x="0" id="path-1"/></defs><g transform="matrix(17.817221,0,0,17.817221,-17.06904,-164.14253)" style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" id="home_devices"><g id="logo_android"><mask fill="white" id="mask-2"><use height="100%" width="100%" y="0" x="0" id="use17" xlink:href="#path-1"/></mask><g style="opacity:0.3" id="Rectangle-46-Copy-3"/><g mask="url(#mask-2)" id="Group-77"><g id="Group-71" transform="translate(0,9)"><g id="g36" transform="translate(0.958008,0.135417)"><path style="fill:currentColor;fill-rule:nonzero" id="Combined-Shape" d="M 7.2780841,0.14673545 C 7.545738,-0.00162752 7.8829863,0.09507687 8.0313492,0.36273075 L 11.048326,5.8055008 c 0.148363,0.2676538 0.05166,0.6049021 -0.215995,0.7532651 -0.267654,0.148363 -0.604902,0.051659 -0.753265,-0.2159953 L 7.0620888,0.90000057 C 6.9137259,0.63234669 7.0104302,0.29509841 7.2780841,0.14673545 Z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" transform="matrix(-1,0,0,1,45.521768,0)" id="path22" d="m 22.760884,9.2066498 c 1.082851,0 1.960676,0.9159902 1.960676,2.0459222 v 7.245974 c 0,1.129932 -0.877825,2.045922 -1.960676,2.045922 -1.082851,0 -1.960675,-0.91599 -1.960675,-2.045922 v -7.245974 c 0,-1.129932 0.877824,-2.0459222 1.960675,-2.0459222 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" transform="matrix(-1,0,0,1,30.518338,0)" id="path24" d="m 15.25917,17.475585 c 1.129931,0 2.045922,0.915991 2.045922,2.045922 v 7.245975 c 0,1.129931 -0.915991,2.045922 -2.045922,2.045922 -1.129932,0 -2.045923,-0.915991 -2.045923,-2.045922 v -7.245975 c 0,-1.129931 0.915991,-2.045922 2.045923,-2.045922 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path26" d="m 17.443475,0.14673545 c 0.267654,0.14836296 0.364359,0.48561124 0.215996,0.75326512 L 14.642494,6.3427706 C 14.494131,6.6104245 14.156883,6.7071289 13.889229,6.5587659 13.621575,6.4104029 13.524871,6.0731546 13.673234,5.8055008 L 16.69021,0.36273075 c 0.148363,-0.26765388 0.485612,-0.36435827 0.753265,-0.2159953 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path28" d="m 1.9606754,9.2066498 c 1.0828511,0 1.9606754,0.9159902 1.9606754,2.0459222 v 7.245974 c 0,1.129932 -0.8778243,2.045922 -1.9606754,2.045922 C 0.87782428,20.544468 0,19.628478 0,18.498546 V 11.252572 C 0,10.12264 0.87782428,9.2066498 1.9606754,9.2066498 Z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path30" d="m 9.46239,17.475585 c 1.129932,0 2.045922,0.915991 2.045922,2.045922 v 7.245975 c 0,1.129931 -0.91599,2.045922 -2.045922,2.045922 -1.1299316,0 -2.0459222,-0.915991 -2.0459222,-2.045922 v -7.245975 c 0,-1.129931 0.9159906,-2.045922 2.0459222,-2.045922 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path32" d="m 4.6033302,9.1981251 c 0.00499,-3.950842 3.4762043,-7.1522029 7.7574498,-7.1522029 4.281245,0 7.752462,3.2013609 7.757449,7.1522029 z M 8.780416,6.3594081 c 0.3578116,0 0.6478753,-0.2900637 0.6478753,-0.6478754 0,-0.3578117 -0.2900637,-0.6478753 -0.6478753,-0.6478753 -0.3578117,0 -0.6478754,0.2900636 -0.6478754,0.6478753 0,0.3578117 0.2900637,0.6478754 0.6478754,0.6478754 z m 7.160728,0 c 0.357811,0 0.647875,-0.2900637 0.647875,-0.6478754 0,-0.3578117 -0.290064,-0.6478753 -0.647875,-0.6478753 -0.357812,0 -0.647876,0.2900636 -0.647876,0.6478753 0,0.3578117 0.290064,0.6478754 0.647876,0.6478754 z" inkscape:connector-curvature="0"/><path style="fill:currentColor;fill-rule:nonzero" id="path34" d="M 20.118235,9.8119017 V 21.055949 c 0,1.035771 -0.839658,1.875429 -1.875429,1.875429 H 6.4787535 c -1.0357706,0 -1.8754286,-0.839658 -1.8754286,-1.875429 V 9.8119017 Z" inkscape:connector-curvature="0"/></g></g></g></g></g></svg>',
    'android-tv': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" id="svg4527" viewBox="0 0 2967.0374 512" height="512" width="2967.0374"><metadata id="metadata4531"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>logo_androidtv</dc:title></cc:Work></rdf:RDF></metadata><!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --><title id="title4509">logo_androidtv</title><desc id="desc4511">Created with Sketch.</desc><defs id="defs4514"><rect height="48" width="108" y="0" x="0" id="path-1"/></defs><g style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" transform="matrix(27.840602,0,0,27.840602,0,-417.60903)" id="home_devices"><g id="logo_androidtv"><g style="opacity:0.3" id="Rectangle-46"/><g style="fill:currentColor;fill-rule:nonzero" id="Group-46"><g id="g4522" transform="translate(0,15)"><path transform="matrix(1,0,0,-1,0,18.18372)" id="path33676" d="m 6.8921161,3.1246871 c -1.9958827,0 -3.6107495,1.6682802 -3.6107495,3.7425027 0,2.0350527 1.6148668,3.7282592 3.6107495,3.7282592 1.3264342,0 2.6528683,-0.6178156 3.2172709,-1.74662 0.03917,-0.07834 0.0908,-0.1833862 0.0908,-0.3151394 V 5.2256163 c 0,-0.065877 -0.03917,-0.2100929 -0.06588,-0.2492628 C 9.5182777,3.8475492 8.2577201,3.1246871 6.8921161,3.1246871 Z M 13.444167,0.27596952 V 13.404997 H 10.200189 V 12.302899 C 9.2939411,13.182441 8.0600903,13.666723 6.5378069,13.666723 2.8220109,13.666723 0,10.647082 0,6.8671898 0,3.0712737 2.8220109,0.01246314 6.5378069,0.01246314 c 1.5222834,0 2.7561342,0.51276917 3.6623821,1.39231076 V 0.27596952 Z m 14.086908,0 V 7.3781786 c 0,3.4932404 -2.716964,6.2885444 -6.183498,6.2885444 -3.478996,0 -6.183497,-2.795304 -6.183497,-6.2885444 V 0.27596952 h 3.242196 V 7.3781786 c 0,1.7199132 1.208925,3.0338844 2.941301,3.0338844 1.719914,0 2.941301,-1.3139712 2.941301,-3.0338844 V 0.27596952 Z m 8.245257,2.84871758 c -1.995883,0 -3.61075,1.6682802 -3.61075,3.7425027 0,2.0350527 1.614867,3.7282592 3.61075,3.7282592 1.326434,0 2.586992,-0.6569855 3.217271,-1.74662 0.03917,-0.07834 0.0908,-0.1833862 0.0908,-0.3151394 V 5.2113727 c 0,-0.065877 -0.03917,-0.1958493 -0.0641,-0.2350192 C 38.402494,3.8475492 37.141936,3.1246871 35.776332,3.1246871 Z m 6.55205,-2.84871758 V 17.343349 h -3.243977 v -5.04045 c -0.904468,0.879542 -2.140099,1.404774 -3.662382,1.404774 -3.715796,0 -6.537807,-3.060591 -6.537807,-6.8404832 0,-3.7959161 2.822011,-6.85472666 6.537807,-6.85472666 1.522283,0 2.757914,0.51276917 3.662382,1.39231076 V 0.27596952 Z m 4.96211,0 V 7.2873757 c 0,2.0742225 1.089635,3.1763203 3.163857,3.1763203 v 3.203027 c -4.175151,0 -6.406053,-2.218439 -6.406053,-6.3793473 V 0.27596952 Z M 57.544095,3.2813666 c -1.969176,0 -3.569799,1.6024036 -3.569799,3.5858232 0,1.9691761 1.600623,3.5697992 3.569799,3.5697992 1.995883,0 3.585824,-1.6006231 3.585824,-3.5697992 0,-1.9834196 -1.589941,-3.5858232 -3.585824,-3.5858232 z m 0,-3.26890346 c 3.795917,0 6.86719,3.05881056 6.86719,6.85472666 0,3.7798922 -3.071273,6.7995332 -6.86719,6.7995332 -3.779892,0 -6.852946,-3.019641 -6.852946,-6.7995332 0,-3.7959161 3.073054,-6.85472666 6.852946,-6.85472666 z M 67.509266,14.402048 c 1.038001,0 1.878373,0.854615 1.878373,1.890836 0,1.050465 -0.840372,1.890836 -1.878373,1.890836 -1.036222,0 -1.876593,-0.840371 -1.876593,-1.890836 0,-1.036221 0.840371,-1.890836 1.876593,-1.890836 z m 1.614866,-0.997051 H 65.880155 V 0.27596952 h 3.243977 z M 77.488679,3.1246871 c -1.995882,0 -3.610749,1.6682802 -3.610749,3.7425027 0,2.0350527 1.614867,3.7282592 3.610749,3.7282592 1.326434,0 2.585212,-0.6569855 3.21549,-1.74662 0.04095,-0.07834 0.09258,-0.1833862 0.09258,-0.3151394 v -3.33478 c 0,-0.065877 -0.03917,-0.1833862 -0.06588,-0.2225561 -0.616028,-1.1288043 -1.876586,-1.8516664 -3.24219,-1.8516664 z m 6.55027,-2.84871758 V 17.343349 h -3.242196 v -5.04045 c -0.906249,0.879542 -2.140099,1.363824 -3.662383,1.363824 -3.715796,0 -6.539587,-3.019641 -6.539587,-6.7995332 C 70.594783,3.0712737 73.418574,0 77.13437,0 c 1.522284,0 2.756134,0.52523231 3.662383,1.4047739 V 0.27596952 Z"/><path transform="matrix(1,0,0,-1,0,19.93599)" id="path33680" d="m 101.24164,1.7022628 5.33067,13.1432712 h -2.6778 L 99.534193,3.4488827 h 0.906247 L 96.06944,14.83129 H 93.311525 L 98.642188,1.7022628 Z m -8.572857,-0.1566795 0.01246,2.3359484 H 92.39281 c -1.9033,0 -3.243977,1.1430479 -3.243977,3.0730541 V 12.664484 H 92.5762 v 2.166806 h -3.427363 v 3.559116 H 86.773718 V 6.9545858 c 0,-3.4006566 2.205976,-5.4090025 5.619096,-5.4090025 z"/></g></g></g></g></svg>',
    'beta_aktivity': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="currentColor" d="M28 35c8.797 0 16-7.128 16-16S36.797 3 28 3s-16 7.128-16 16 7.203 16 16 16zm0 3C17.507 38 9 29.493 9 19S17.507 0 28 0s19 8.507 19 19-8.507 19-19 19zM4.928 54.178a1.5 1.5 0 1 1-1.856-2.356C10.11 46.276 18.439 43.5 28 43.5s17.89 2.776 24.928 8.322a1.5 1.5 0 1 1-1.856 2.356C44.572 49.058 36.9 46.5 28 46.5c-8.9 0-16.572 2.558-23.072 7.678z"/><path fill="currentColor" d="M19.44 26.23c1.283 2.3 4.394 4.27 8.56 4.27s7.277-1.97 8.56-4.27a1.5 1.5 0 0 0-2.62-1.46c-.252.452-.85 1.08-1.653 1.588-1.14.721-2.563 1.142-4.287 1.142-1.724 0-3.146-.42-4.287-1.142-.803-.509-1.4-1.136-1.653-1.589a1.5 1.5 0 0 0-2.62 1.462z"/></svg>',
    'adv': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path fill="currentColor" d="M2 6h52a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm1 35h50V9H3v32zm16.5 6h17a1.5 1.5 0 0 1 0 3h-17a1.5 1.5 0 0 1 0-3z"/><path fill="currentColor" d="M34.73 24.143a2.5 2.5 0 0 1-.928 3.411l-9.06 4.615A2.5 2.5 0 0 1 21 30v-9.998a2.5 2.5 0 0 1 3.889-2.079l9.06 5.384a2.5 2.5 0 0 1 .78.837zM24 20.936v8.201l7.61-3.785L24 20.936z"/></svg>',
    'special': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0)"><path d="M20.0894 6.97842L21.1255 5.60122C21.4571 5.16038 22.0833 5.07186 22.5242 5.40352C22.965 5.73519 23.0535 6.36143 22.7219 6.80227L21.7487 8.0958L23.0914 8.99993C23.549 9.30807 23.6701 9.92882 23.362 10.3864C23.0539 10.844 22.4332 10.9652 21.9756 10.6571L20.5461 9.69444L19.51 11.0716C19.1783 11.5125 18.5521 11.601 18.1113 11.2693C17.6705 10.9377 17.5819 10.3114 17.9136 9.87059L18.8867 8.57705L17.5441 7.67293C17.0865 7.36479 16.9653 6.74404 17.2735 6.28644C17.5816 5.82884 18.2023 5.70768 18.6599 6.01581L20.0894 6.97842ZM0.000976562 4.37532C1.82934 4.39831 4.20968 4.23418 7.14202 3.88293C11.5405 3.35605 16.3439 1.21212 20.0671 0.62239C22.5493 0.22924 25.0686 0.02178 27.6248 0C27.7148 2.31935 27.949 4.66043 28.3274 7.02324C28.8949 10.5675 30.5131 14.81 31.2702 19.0571C31.7749 21.8885 32.0182 24.7444 32 27.6247C29.1723 27.8086 26.1136 28.161 22.8238 28.6821C17.8892 29.4637 17.2421 30.4739 12.9561 31.1528C10.0988 31.6053 7.23885 31.8878 4.37617 32C4.37617 29.5026 4.12965 26.6148 3.63661 23.3366C2.89705 18.4192 1.23069 15.9032 0.663107 12.3195C0.284727 9.93044 0.0640166 7.28237 0.000976563 4.37532H0.000976562ZM2.63624 12.007C2.77559 12.8868 2.99489 13.74 3.34122 14.8116C3.50003 15.3029 4.13065 17.1369 4.12614 17.1235C4.85543 19.2834 5.30025 20.9658 5.61212 23.0394C5.98751 25.5355 6.22466 27.82 6.32246 29.8951C8.43069 29.7516 10.5377 29.5131 12.6436 29.1796C14.1852 28.9354 15.1086 28.6914 16.6978 28.1658C16.9563 28.0801 17.1004 28.0324 17.2232 27.9919C17.4298 27.9239 17.606 27.8667 17.7798 27.8116C19.2771 27.336 20.6453 27.0045 22.5113 26.7089C25.1408 26.2924 27.6291 25.9813 29.9768 25.7759C29.9038 23.6389 29.6794 21.5164 29.3035 19.4077C29.0267 17.8553 28.657 16.3701 27.9736 13.9215C26.8385 9.85465 26.6254 9.0291 26.3548 7.33915C26.0707 5.56522 25.8652 3.80211 25.7384 2.04994C23.9319 2.13395 22.1458 2.31585 20.3797 2.59558C19.0249 2.81017 18.1577 3.05198 14.5729 4.14674C13.1764 4.57322 12.2587 4.84043 11.3027 5.08912C9.86585 5.46288 8.5909 5.72144 7.37961 5.86654C5.36533 6.10782 3.59673 6.26369 2.06932 6.33325C2.1714 8.37536 2.36064 10.2668 2.63624 12.007ZM11.0062 24.99C9.90287 24.99 9.00846 24.0956 9.00846 22.9923C9.00846 21.8889 9.90287 20.9945 11.0062 20.9945C12.1095 20.9945 13.0039 21.8889 13.0039 22.9923C13.0039 24.0956 12.1095 24.99 11.0062 24.99Z" fill="currentColor"/><path d="M15.6104 7.79414C16.1574 7.87044 16.539 8.37571 16.4627 8.9227C16.3864 9.46969 15.8811 9.85126 15.3341 9.77497C14.2745 9.62718 13.3587 9.6005 12.5897 9.69043C12.0412 9.75459 11.5445 9.36191 11.4803 8.81337C11.4161 8.26482 11.8088 7.76813 12.3574 7.70397C13.309 7.59268 14.3923 7.62423 15.6104 7.79414ZM9.0226 9.12639C9.4213 8.74422 10.0543 8.75762 10.4365 9.15632C10.8187 9.55502 10.8053 10.1881 10.4066 10.5702C10.0044 10.9557 9.7328 11.481 9.59717 12.1569C9.55058 12.4134 9.53514 12.5606 9.53466 12.7061C9.53285 13.2584 9.08367 13.7046 8.53139 13.7028C7.97911 13.701 7.53286 13.2518 7.53467 12.6996C7.53557 12.4265 7.56304 12.1647 7.63277 11.7817C7.84903 10.7025 8.31165 9.80787 9.0226 9.12639ZM9.42622 16.0851C8.96211 15.7857 8.82857 15.1668 9.12794 14.7027C9.42731 14.2386 10.0462 14.105 10.5103 14.4044C11.0801 14.772 11.8895 15.0174 12.9257 15.1022C13.4762 15.1472 13.8859 15.63 13.8408 16.1804C13.7958 16.7309 13.313 17.1406 12.7626 17.0955C11.4174 16.9854 10.2938 16.6447 9.42622 16.0851ZM15.97 16.9776C15.4226 17.0511 14.9193 16.6669 14.8459 16.1195C14.7724 15.5721 15.1566 15.0688 15.704 14.9954C15.9403 14.9636 16.1821 14.9265 16.429 14.8838C17.2806 14.7365 18.0684 14.6551 18.8003 14.6373C19.3524 14.6239 19.8109 15.0606 19.8243 15.6127C19.8378 16.1648 19.4011 16.6233 18.849 16.6367C18.2187 16.6521 17.5281 16.7234 16.7696 16.8546C16.4979 16.9015 16.2314 16.9425 15.97 16.9776ZM21.427 17C20.9119 16.8006 20.656 16.2215 20.8554 15.7064C21.0548 15.1914 21.634 14.9355 22.149 15.1349C23.525 15.6676 24.4675 16.616 24.8846 17.8359C25.0632 18.3585 24.7844 18.927 24.2618 19.1056C23.7392 19.2843 23.1707 19.0054 22.9921 18.4828C22.7703 17.834 22.2632 17.3237 21.427 17ZM22.8233 20.6423C23.0555 20.1412 23.65 19.9233 24.1511 20.1556C24.6521 20.3878 24.8701 20.9823 24.6378 21.4834C24.1052 22.6325 23.1662 23.4765 21.872 23.9963C21.3595 24.2021 20.7772 23.9535 20.5714 23.441C20.3655 22.9285 20.6141 22.3462 21.1266 22.1404C21.9649 21.8037 22.5135 21.3106 22.8233 20.6423ZM18.4679 22.6293C19.0198 22.607 19.4852 23.0362 19.5075 23.588C19.5298 24.1399 19.1006 24.6053 18.5488 24.6276C17.6027 24.6659 16.554 24.6209 15.4014 24.4936C14.8524 24.433 14.4565 23.9389 14.5171 23.39C14.5777 22.841 15.0718 22.4451 15.6208 22.5057C16.6785 22.6225 17.6281 22.6633 18.4679 22.6293Z" fill="currentColor"/></g><defs><clipPath id="clip0"><rect x="0.000976562" width="32" height="32" fill="white"/></clipPath></defs></svg>',
    'playstation': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 663.3725 512" height="512" width="663.3725"><g style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" transform="matrix(20.860551,0,0,20.860551,6.1636141e-8,-229.46606)" id="home_devices"><g id="logo_playstation"><g id="Rectangle-46-Copy-12"/><g style="fill:currentColor" id="PlayStation_logo-Copy"><g id="g5085" transform="translate(0,11)"><path d="m 31.517526,18.784994 c -0.621182,0.783701 -2.143079,1.342766 -2.143079,1.342766 0,0 -11.321415,4.066578 -11.321415,4.066578 0,0 0,-2.999011 0,-2.999011 0,0 8.331792,-2.968675 8.331792,-2.968675 0.945498,-0.33876 1.090681,-0.817649 0.322148,-1.069012 -0.767088,-0.252085 -2.15608,-0.179853 -3.1023,0.160353 0,0 -5.55164,1.95528 -5.55164,1.95528 0,0 0,-3.112414 0,-3.112414 0,0 0.319982,-0.108346 0.319982,-0.108346 0,0 1.60424,-0.567732 3.86,-0.817649 2.25576,-0.248473 5.017853,0.03395 7.186215,0.855932 2.443559,0.772144 2.718757,1.910498 2.098297,2.694198 z M 19.130713,13.678296 c 0,0 0,-7.6694379 0,-7.6694379 0,-0.9007144 -0.166131,-1.729921 -1.011228,-1.9646704 -0.647185,-0.2073019 -1.048788,0.393656 -1.048788,1.2936482 0,0 0,19.2060991 0,19.2060991 0,0 -5.17965,-1.643967 -5.17965,-1.643967 0,0 0,-22.899968 0,-22.899968 2.202308,0.40882542 5.410787,1.3752697 7.135653,1.9567259 4.386561,1.5060056 5.873787,3.3803887 5.873787,7.6037077 0,4.1164174 -2.54107,5.6765974 -5.769774,4.1178624 z m -16.74376,7.203551 c -2.50856636,-0.706414 -2.92605883,-2.178473 -1.78264953,-3.026459 1.05673283,-0.782979 2.85382833,-1.37238 2.85382833,-1.37238 0,0 7.4267432,-2.640749 7.4267432,-2.640749 0,0 0,3.010569 0,3.010569 0,0 -5.344337,1.912665 -5.344337,1.912665 -0.944053,0.33876 -1.0892365,0.818372 -0.3221482,1.069734 0.7678106,0.251361 2.1575262,0.179853 3.1030238,-0.15963 0,0 2.5634614,-0.93033 2.5634614,-0.93033 0,0 0,2.693477 0,2.693477 -0.162518,0.02889 -0.343817,0.05778 -0.511392,0.08595 -2.5641839,0.418938 -5.2952204,0.24414 -7.98653,-0.642851 z" id="path5083"/></g></g></g></g></svg>',
    'apple-tvos': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1109.8783 512.00006" height="512.00006" width="1109.8783"><metadata id="metadata5666"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>logo_appletv</dc:title></cc:Work></rdf:RDF></metadata><!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --><title id="title5643">logo_appletv</title><desc id="desc5645">Created with Sketch.</desc><defs id="defs5648"><polygon points="51,0 51,48 0,48 0,0 " id="path-1"/></defs><g style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" transform="matrix(21.9902,0,0,21.9902,0,-263.8824)" id="home_devices"><g id="logo_appletv"><g style="opacity:0.3" id="Rectangle-46"/><g id="Group-49"><g id="Group-47" transform="translate(0,12)"><g id="g5656"><path d="m 29.204703,1.8938738 v 3.8044461 h 4.91064 v 1.3637005 h -4.91064 V 18.294459 c 0,1.148709 0.190413,2.027461 0.57267,2.637648 0.381541,0.610186 1.039395,0.914931 1.975709,0.914931 0.443103,0 0.824644,-0.02366 1.144623,-0.07166 0.319979,-0.04731 0.590565,-0.107844 0.812474,-0.179508 l 0.184686,1.292037 c -0.590565,0.262999 -1.378701,0.395195 -2.362977,0.395195 -0.812474,0 -1.483213,-0.132196 -2.012216,-0.395195 -0.52972,-0.263 -0.947768,-0.627581 -1.255578,-1.09444 -0.30781,-0.466858 -0.523276,-1.028341 -0.6464,-1.686535 -0.12384,-0.657499 -0.184686,-1.369267 -0.184686,-2.135305 V 7.0620204 H 24.515973 V 5.6983199 h 2.917035 V 2.5395443 Z m 7.753943,3.8037503 4.061657,10.6946119 c 0.344318,0.837702 0.652127,1.627396 0.922714,2.368386 0.270586,0.741687 0.529003,1.471545 0.775251,2.188879 h 0.07373 c 0.245532,-0.693678 0.510392,-1.41797 0.793863,-2.171484 0.282755,-0.753515 0.597008,-1.548774 0.941325,-2.386476 L 48.625352,5.6969284 h 1.846142 L 43.419072,22.922692 H 41.905077 L 35.112503,5.6976241 Z M 9.9547092,6.6807409 c 0.8115018,0 2.3175518,-1.0819155 4.2785018,-1.0819155 3.375158,0 4.702549,2.3287273 4.702549,2.3287273 0,0 -2.596663,1.2871663 -2.596663,4.4111533 0,3.524053 3.234527,4.738164 3.234527,4.738164 0,0 -2.260868,6.17144 -5.315301,6.17144 -1.402728,0 -2.493341,-0.917019 -3.971408,-0.917019 -1.5060493,0 -3.0013364,0.951112 -3.9742776,0.951112 C 3.5236829,23.283099 0,17.428231 0,12.722769 0,8.0924492 2.9826817,5.6635316 5.7795288,5.6635316 c 1.8188833,0 3.230222,1.0172093 4.1751804,1.0172093 z M 10.799934,2.0260693 C 12.377735,0.00974072 14.571157,0 14.571157,0 c 0,0 0.326466,1.8959611 -1.241289,3.72165 -1.673229,1.9502308 -3.5753436,1.6308744 -3.5753436,1.6308744 0,0 -0.3573191,-1.5334673 1.0454096,-3.3264551 z" style="fill:currentColor;fill-rule:nonzero" id="Shape"/></g></g></g></g></g></svg>',
    'win10': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510.42793 512.00001" height="512" width="510.42792"><metadata id="metadata7936"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>logo_windows</dc:title></cc:Work></rdf:RDF></metadata><!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --><title id="title7915">logo_windows</title><desc id="desc7917">Created with Sketch.</desc><defs id="defs7920"><rect height="48" width="25" y="0" x="0" id="path-1"/></defs><g transform="matrix(20.757981,0,0,20.757981,0,-249.09577)" style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1" id="home_devices"><g id="logo_windows"><g style="opacity:0.3" id="Rectangle-46-Copy-2"/><g style="fill:currentColor;fill-rule:nonzero" id="Windows_logo_2012-Black"><g id="path13" transform="translate(0,12)"><path d="m 0,3.4921521 10.048979,-1.3685611 0.0044,9.692882 -10.04401961,0.0572 z m 10.044192,9.4412339 0.0078,9.70149 L 0.00793503,21.253962 0.00737186,12.868481 Z M 11.262342,1.9446023 24.586366,0 V 11.693323 L 11.262342,11.7991 Z m 13.327136,11.0799657 -0.0031,11.640644 -13.324021,-1.880522 -0.01867,-9.781815 z" id="path7926"/></g></g></g></g></svg>',
    'smart-tv': '<svg class="icon--card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M8,56 L4,56 C1.790861,56 0,54.209139 0,52 L0,4 C0,1.790861 1.790861,0 4,0 L68,0 C70.209139,0 72,1.790861 72,4 L72,52 C72,54.209139 70.209139,56 68,56 L43.9999999,56 C43.9817788,56 43.8013255,56.0382961 43.5684345,56.1196313 C43.2582333,56.2279664 42.9271618,56.3847212 42.6377072,56.5637218 C42.3553787,56.7383156 42.1379321,56.9185327 42.0167515,57.0664437 C42.0112092,57.0732086 42.0056254,58.0236716 42,59.9178327 C42.1379321,60.0814673 42.3553787,60.2616844 42.6377072,60.4362782 C42.9271618,60.6152788 43.2582333,60.7720336 43.5684345,60.8803687 C43.8013255,60.9617039 43.9817788,61 44,61 L66,61 C67.1045695,61 68,61.8954305 68,63 C68,64.1045695 67.1045695,65 66,65 L24,65 L24,69 C24,70.6568542 22.6568542,72 21,72 L11,72 C9.34314575,72 8,70.6568542 8,69 L8,65 L6,65 C4.8954305,65 4,64.1045695 4,63 C4,61.8954305 4.8954305,61 6,61 L8,61 L8,56 Z M24,56 L24,61 L28.0000005,61 C28.0182212,61 28.1986745,60.9617039 28.4315655,60.8803687 C28.7417667,60.7720336 29.0728382,60.6152788 29.3622928,60.4362782 C29.6446213,60.2616844 29.8620679,60.0814673 29.9832485,59.9335563 C29.9887908,59.9267914 29.9943746,58.9763284 30,57.0821673 C29.8620679,56.9185327 29.6446213,56.7383156 29.3622928,56.5637218 C29.0728382,56.3847212 28.7417667,56.2279664 28.4315655,56.1196313 C28.1986745,56.0382961 28.0182212,56 28,56 L24,56 Z M20,68 L20,42.0731707 L12,42.0731707 L12,68 L20,68 Z M38.1400199,56 L33.8599801,56 C33.9507974,56.3056837 34,56.6217278 34,56.9454545 L34,60.0545455 C34,60.3782722 33.9507974,60.6943163 33.8599801,61 L38.1400199,61 C38.0492026,60.6943163 38,60.3782722 38,60.0545455 L38,56.9454545 C38,56.6217278 38.0492026,56.3056837 38.1400199,56 Z M24,52 L68,52 L68,4 L4,4 L4,52 L8,52 L8,41.0731707 C8,39.4163165 9.34314575,38.0731707 11,38.0731707 L21,38.0731707 C22.6568542,38.0731707 24,39.4163165 24,41.0731707 L24,52 Z"/><path fill="currentColor" fill-rule="nonzero" d="M46.674278,27.3777272 C47.5702345,28.7714374 47.1667255,30.6275789 45.7730153,31.5235354 L36.1630304,37.7013829 C35.517841,38.1161475 34.7670065,38.336669 34,38.336669 C31.790861,38.336669 30,36.545808 30,34.336669 L30,23.663331 C30,22.8963245 30.2205215,22.14549 30.6352861,21.5003006 C31.8298948,19.6420205 34.3047502,19.1040084 36.1630304,20.2986171 L45.7730153,26.4764646 C46.1345233,26.7088625 46.44188,27.0162193 46.674278,27.3777272 Z M34,23.663331 L34,34.336669 L42.3014851,29 L34,23.663331 Z M16,45 L16,45 L16,45 C17.1045695,45 18,45.8954305 18,47 C18,48.1045695 17.1045695,49 16,49 L16,49 C14.8954305,49 14,48.1045695 14,47 L14,47 C14,45.8954305 14.8954305,45 16,45 L16,45 Z"/></g></svg>',
  }

  /*
  * Константы с адресами страниц
  */

  const projects = 'projects';
  const account = 'my/account';

  /*
  * Общие функции
  */

  /**
   * Приведствие в зависимости от времени
   */

  function helloStingTime() {
    const date = new Date;
    const hours = date.getHours();

    if (hours >= 6 && hours < 12) {
      return 'Доброе утро';
    }else if (hours >= 12 && hours < 18) {
      return 'Добрый день';
    }else if (hours >= 18) {
      return 'Добрый вечер';
    }

    return 'Доброй ночи';
  }

  /**
   * Форматирование даты
   */

  function formatDate(date) {
    const dd = date.getDate();
    const mm = month[date.getMonth()];
    const yyyyy = date.getFullYear() % 10000;

    return dd + ' ' + mm + ' ' + yyyyy;
  }

  /**
   * Обработка ввода в поле для ввода
   */

  const eventInput = function () {
    const value = this.value;
    const container = this.parentNode.parentNode;

    const isFilled = !!value.length;

    if (!container.classList.contains('nbl-input_state_disabled')) {
      container.classList[isFilled ? 'add' : 'remove']('nbl-input_state_filled');
      container.classList.remove('nbl-input_state_error');

      if (this.dataset.required === "true") {
        container.classList[!isFilled ? 'add' : 'remove']('nbl-input_state_error');
      }
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

  const eventFocus = function () {
    const container = this.parentNode.parentNode;

    if (!container.classList.contains('nbl-input_state_disabled')) {
      container.classList.add('nbl-input_state_focused');
      container.classList.remove('nbl-input_state_error');
    }
  };

  const eventBlur = function () {
    const value = this.value;
    const container = this.parentNode.parentNode;

    const isFilled = !!value.length;

    if (!container.classList.contains('nbl-input_state_disabled')) {
      container.classList.remove('nbl-input_state_focused');
    }

    if (this.dataset.required === "true" && !isFilled) {
      container.classList.add('nbl-input_state_error');
    }
  };

  const onEventInput = function (element) {
    element.find('input').bind('input', eventInput);
    element.find('input').bind('focus', eventFocus);
    element.find('input').bind('blur', eventBlur);
  };

  const editOptionSelector = function () {
    const parent = $(this).parent().parent().parent();
    const value = $(this).attr('data-value');
    const selectBlock = $(this).parent();
    const select = parent.find('select');
    const valueActive = parent.attr('data-value');
    const required = parent.attr('data-required') == 'true';

    if (!required && value == valueActive) {
      parent.attr('data-value', '');
      select.val('');
      selectBlock.find('.active').removeClass('active');

      return;
    }

    parent.attr('data-value', value);
    select.val(value);
    selectBlock.find('.active').removeClass('active');
    $(this).addClass('active');
  }

  const onEventOption = function (element) {
    element.find('.nbl-optionSelector_optionWrapper').bind('click', editOptionSelector);
  }

  const onEventTabsIVI = function (element) {
    element.find('.tabs--ivi_option').bind('click', editOptionSelector);
  }

  const headerElement = $('#header');
  const topMenuElement = $('#top-menu');
  const miniMenyElement = $('#main-menu');
  const loginFormElement = $('#login-form');

  const lastHeader = headerElement;

  /*
  * Изменение шапки
  */

  const emailUser = topMenuElement.find('.user.active').text();
  const urlProfileUser =  topMenuElement.find('.user.active').attr('href');

  const titleProject = lastHeader.find('.current-project');

  headerElement.html("<div class='header_warp--block'><h1>Redmine</h1></div>");
  const headerWarpBlockElement = headerElement.find('.header_warp--block');

  headerWarpBlockElement.find('h1').wrap("<a class='home--button' href='/my/page'></a>");

  if (topMenuElement) {
    if (miniMenyElement.length) {
      const urlNewTask = miniMenyElement.find('ul.menu-children > li:nth-child(1) a');

      console.log(miniMenyElement, urlNewTask.hasClass('new-issue-sub'));

      if (urlNewTask.hasClass('new-issue-sub')) {
        headerElement.after('<div class="headerBar__tabsWrapper"><a class="nbl-tabsItem new-issue" href="' + urlNewTask.attr('href') + '">Новая задача</a></div>');
      }else {
        headerElement.after('<div class="headerBar__tabsWrapper"></div>');
      }

      const headerBar_TabsWrapper_Element = $('.headerBar__tabsWrapper');

      miniMenyElement.find('ul:not(.menu-children) > li:not(:nth-child(1))').each(function () {
        const linkElement = $(this).find('> a');
        let lintText = linkElement.text();
        const linkHref = linkElement.attr('href');
        const linkClass = linkElement.attr('class');

        lintText += linkElement.is('.selected') ? '<div class="nbl-tabsItem__stripe"></div>' : '';

        headerBar_TabsWrapper_Element.append('<a class="nbl-tabsItem ' + linkClass + '" href="' + linkHref + '">' + lintText + '</a>');
      });

      headerBar_TabsWrapper_Element.append('<div class="nbl-tabs__gutter"></div>');
    }

    // miniMenyElement.remove();

    if (titleProject.length) {
      headerElement.after('<h1 class="title--page">' + titleProject.text() + '</h1>');
    }
  }

  if (topMenuElement.find('#account ul li').length == 1) {
    topMenuElement.remove();
  }

  if (emailUser) {
    const navigationTopMenu = topMenuElement.find('ul:nth-child(3) li');
    topMenuElement.remove();

    headerWarpBlockElement.append('<nav></nav>');
    const navHeaderElement = headerWarpBlockElement.find('nav');

    navigationTopMenu.each(function () {
      const navigationElement = $(this).find('a');

      if (navigationElement.attr('href') === '/my/page') return;

      navHeaderElement.append(navigationElement);
    });

    headerWarpBlockElement.append('<div class="header_right--block"></div>');
    const headerRightBlockElement = headerElement.find('.header_right--block');

    headerRightBlockElement.append('<a class="search" href="/search">Поиск</a>');

    headerRightBlockElement.append('<a class="photo_user" href="' + urlProfileUser + '" title="Профиль" data-popup="true" data-popup-name="popup_active_profile" data-popup-mouse="right"><p class="text">' + emailUser[0] + '</p></a>');

    setTimeout(() => {
      $('body').append('<div class="popap--block" id="popup_active_profile"><div class="hello--block"><p class="time">' + helloStingTime() + ',</p><p class="gray--text">' + emailUser + '</p></div><div class="button--block"><a href="/my/account"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z"></path><path d="M15.148 2.04c.428.07.832.233 1.195.523.595.476.878 1.076 1.097 1.952.056.224.153.486.275.74.278.117.55.249.815.393.262-.065.513-.15.714-.244 1.412-.658 2.597-.623 3.567.423.082.089.131.148.238.28l.629.776c.17.21.241.305.348.482.692 1.152.422 2.224-.452 3.386a4.112 4.112 0 00-.417.71c.078.283.143.57.195.86.222.178.46.334.668.441.804.41 1.325.821 1.655 1.508.202.42.27.85.24 1.282a3.48 3.48 0 01-.106.64l-.225.975c-.065.285-.099.41-.185.622a2.515 2.515 0 01-.778 1.047c-.598.473-1.246.614-2.148.63-.229.004-.502.04-.773.1-.177.243-.364.478-.563.704.003.275.03.544.077.764.187.884.196 1.547-.13 2.236-.2.42-.491.744-.845.993a3.48 3.48 0 01-.565.32l-.899.44a3.48 3.48 0 01-.6.247c-.414.126-.85.156-1.303.054-.744-.167-1.261-.582-1.842-1.273a4.103 4.103 0 00-.591-.561 9.627 9.627 0 01-.878 0c-.228.18-.437.378-.591.56-.58.692-1.098 1.107-1.842 1.274a2.515 2.515 0 01-1.303-.054 3.48 3.48 0 01-.6-.248l-.899-.438a7.152 7.152 0 01-.185-.093c-1.312-.683-1.696-1.847-1.355-3.457.047-.22.074-.49.077-.764a9.535 9.535 0 01-.563-.705 4.066 4.066 0 00-.773-.099c-.902-.016-1.55-.157-2.148-.63a2.515 2.515 0 01-.778-1.047 3.48 3.48 0 01-.185-.622l-.225-.974a3.381 3.381 0 01-.109-.681 2.509 2.509 0 01.296-1.346c.339-.629.84-1.015 1.602-1.404a4.09 4.09 0 00.668-.441c.052-.29.117-.577.195-.86a4.112 4.112 0 00-.417-.71c-.874-1.162-1.144-2.234-.452-3.386.107-.177.179-.273.348-.482l.63-.777c.106-.131.155-.19.237-.279.97-1.046 2.155-1.08 3.567-.423.201.093.452.18.714.244.265-.144.537-.276.815-.394.122-.253.219-.515.275-.74.219-.875.502-1.475 1.097-1.95.363-.291.767-.455 1.195-.523.18-.03.3-.038.49-.04L14.5 2c.292 0 .422.005.648.04zM14.586 4H13.5c-.5 0-.75 0-1 1a6.347 6.347 0 01-.836 1.87 7.47 7.47 0 00-1.8.872 6.35 6.35 0 01-1.952-.525c-.934-.435-1.092-.24-1.406.148l-.63.777c-.314.389-.472.583.148 1.406.35.464.721 1.15.937 1.857a7.458 7.458 0 00-.429 1.894 6.345 6.345 0 01-1.643 1.245c-.918.468-.862.712-.75 1.199l.225.974c.113.487.169.731 1.2.75.57.01 1.323.135 2.003.39.345.575.765 1.1 1.247 1.56a6.35 6.35 0 01-.072 2.032c-.213 1.008.011 1.118.46 1.337l.9.439c.449.219.674.328 1.337-.46a6.343 6.343 0 011.59-1.327 7.571 7.571 0 001.942 0 6.343 6.343 0 011.59 1.326c.663.79.888.68 1.337.46l.9-.438c.449-.219.673-.329.46-1.337a6.35 6.35 0 01-.072-2.031 7.533 7.533 0 001.247-1.56 6.348 6.348 0 012.003-.391c1.031-.019 1.087-.263 1.2-.75l.225-.974c.112-.487.168-.73-.75-1.2a6.345 6.345 0 01-1.643-1.244 7.458 7.458 0 00-.43-1.894 6.342 6.342 0 01.938-1.857c.62-.823.462-1.017.148-1.406l-.63-.777c-.314-.389-.472-.583-1.406-.148a6.35 6.35 0 01-1.952.525 7.47 7.47 0 00-1.8-.871A6.347 6.347 0 0115.5 5c-.235-.941-.47-.997-.914-1zM14 9.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="currentColor"></path></g></svg><span class="text">Настройки</span></a><a rel="nofollow" data-method="post" href="/logout"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="door_arrow_right_outline_28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.357 3H13a1 1 0 110 2h-2.6c-1.137 0-1.929 0-2.546.051-.605.05-.953.142-1.216.276a3 3 0 00-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v7.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 001.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051H13a1 1 0 110 2h-2.643c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 01-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 19.6 3 18.727 3 17.643v-7.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 015.73 3.544c.592-.302 1.233-.428 1.961-.487C8.4 3 9.273 3 10.357 3zm8.936 6.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L21.586 15H12a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" fill="currentColor"></path></svg><span class="text">Выход</span></a></div></div>');

      const quickAccessSettingsGuide = window.localStorage.getItem('quick_access_settings');

      if (quickAccessSettingsGuide !== 'true') {
        const top = $('.photo_user').position().top + $('.photo_user')[0].offsetHeight + 15;
        const left = $('.photo_user').position().left - 464 + $('.photo_user')[0].offsetWidth * 2.5 + 20;

        headerRightBlockElement.find('.photo_user').on('contextmenu', function (event) {
          window.localStorage.setItem('quick_access_settings', 'true');

          $('#popup_active_profile_guide').remove();
        });

        $('#wrapper').append('<div class="tip--guide" id="popup_active_profile_guide" style="top: ' + top + 'px;left: ' + left + 'px;"><h2>Быстрый доступ к настройкам</h2><p class="text">Вы можете быстро открыть настройки или выйти из учетной записи, для этого нажмите правой кнопкой по аватарке</p></div>');
      }
    }, 500);
  }

  /*
    "Сжатие" main
  */

  if (url != 'my/page' && url.indexOf('users') === -1) {
    $('#main').addClass('maxContent');
  }

  /*
  * Изменение выпадающих меню
  */

  /**
   * Скрытие выпадабщего меню
   */

  const hideMenuChildren = function () {
    const element = $(this).find('.menu-children');

    element.css('height', 0);
  }

  /**
   * Отображение выпадающего меню
   */

  const showMenuChildren = function () {
    const element = $(this).find('.menu-children');
    const height = element.attr('data-height');

    element.css('height', height);
  }

  const miniMenyMenyChildrenElement = $('#main-menu .menu-children');

  miniMenyMenyChildrenElement.each(function () {
    const element = $(this);
    const parent = element.parent();
    const height = $(this).height() + 8;

    element.attr('data-height', height);
    element.css('height', 0);

    parent.mouseover(showMenuChildren);
    parent.mouseout(hideMenuChildren);
  });

  /*
  * Авторизация
  */

  let statysNextBlockFormLoginEvent = true;
  let activeBlockFormLoginLeval = 1;

  /**
   * Переход к следующему уровню авторизации
   */

  const nextBlockForm = function () {
    if (activeBlockFormLoginLeval == 1) {
      const emailElement = $('.messages ~ form #username');
      const email = emailElement.val();

      if (email.length == 0) {
        emailElement.addClass('nbl-input_state_error');

        return;
      }

      activeBlockFormLoginLeval++;

      $('.messages').append('<div class="message my"><div class="message--content"><h3>У меня нет учетной записи</h3></div></div><div class="message"><div class="message--content"><h3>Введите пароль, чтобы войти</h3></div></div>');

      const messageElement = $('.messages .message:nth-last-child(2)');

      messageElement.find('h3').text(email);
      $('.messages ~ form').append('<input  type="hidden" name="username" id="username" value="' + email + '">');
      $('.messages ~ form .input--block').html('<div class="nbl-input"><div class="nbl-input__body"><input type="password" name="password" id="password" autocomplete="on" tabindex="2" class="nbl-input__editbox"><div class="nbl-input__overlays"><div class="nbl-input__placeholder">Пароль</div><div class="nbl-input__stripe"></div></div></div><p class="next--block__button disabled">Войти</p><p class="box--shadow--button">Не помню пароль</p></div>');
      statysNextBlockFormLoginEvent = true;

      $('.messages ~ form input').bind('input', inputBlockFormButton);
      $('.messages ~ form .box--shadow--button').bind('click', forgotPassword);

      onEventInput($('.messages ~ form'));
      setTimeout(function() { messageElement.addClass('active'); }, 100);
      setTimeout(function() { $('.messages .message:last-child').addClass('active'); }, 300);
      setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 500);
      setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 700);
      setTimeout(function() { $('.messages ~ form .box--shadow--button').addClass('active'); }, 900);
    }else if (activeBlockFormLoginLeval == 2) {
      const passwordElement = $('.messages ~ form #password');
      const lengthPasswordUser = passwordElement.val().length;

      if (lengthPasswordUser == 0) {
        passwordElement.addClass('nbl-input_state_error');

        return;
      }

      $('.input--block').hide();

      const messageElement = $('.messages').append('<div class="message my"><div class="message--content"><h3></h3></div></div>').find('.message:last-child');

      let message = '';

      for (let i = 0; i <= lengthPasswordUser; i++) {
        message += '● ';
      }

      messageElement.find('h3').text(message);

      setTimeout(function() {
        messageElement.addClass('active');
        $('.messages ~ form').submit();
      }, 100);
    }
  }

  /**
   * Отображение информации на случай если нет учетной записи
   */

  const noAccount = function () {
    $('.input--block').remove();

    $('.messages').append('<div class="message my"><div class="message--content"><h3>У меня нет учетной записи</h3></div></div><div class="message"><div class="message--content"><h3>Если у вас нет учетной записи</h3><p class="text">и вы состоите в программе бета-тестирования, обратитесь к менеджеру программы бета-тестирования, он создаст вам учетную запись и вы сможете пользоваться баг-трекером</p></div></div>');

    setTimeout(function() { $('.messages .message:nth-last-child(2)').addClass('active'); }, 100);
    setTimeout(function() { $('.messages .message:last-child').addClass('active'); }, 300);
  }

  /**
   * Отображение информации на случай если не помнешь пароль
   */

  const forgotPassword = function () {
    $('.input--block').remove();

    $('.messages').append('<div class="message my"><div class="message--content"><h3>Я не помню пароль</h3></div></div><div class="message"><div class="message--content"><h3>Если вы забыли пароль</h3><p class="text">обратитесь к менеджеру программы бета-тестирования</p></div></div>');

    setTimeout(function() { $('.messages .message:nth-last-child(2)').addClass('active'); }, 100);
    setTimeout(function() { $('.messages .message:last-child').addClass('active'); }, 300);
  }

  const inputBlockFormButton = function () {
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

  const keyButtonFormLogin = function (evt) {
    const code = evt.code;

    if (code == ENTER_KEY) {
      evt.preventDefault();

      nextBlockForm();
    }
  }

  if (loginFormElement.length > 0) {
    document.addEventListener('keydown', keyButtonFormLogin);

    headerWarpBlockElement.css('border-bottom', 0);

    const errorElement = $('#flash_error');
    let messageStart = '<div class="message"><div class="message--content"><h3>Войдите</h3><p class="text">чтобы пользоваться баг-трекером</p></div></div>';
    const emailUser = loginFormElement.find('#username').val();

    if (errorElement.length > 0) {
      messageStart = emailUser.length > 0 ? '<div class="message my"><div class="message--content"><h3>' + emailUser + '</h3></div></div>' : '';
      messageStart += '<div class="message error"><div class="message--content"><h3>Ошибка</h3><p class="text">' + errorElement.text() + '</p></div></div><div class="message"><div class="message--content"><h3>Попробуйте ещё раз</h3><p class="text">чтобы пользоваться баг-трекером</p></div></div>';
      errorElement.remove();
    }

    const toket = loginFormElement.find('input[name="authenticity_token"]').val();
    loginFormElement.after('<div class="messages">' + messageStart + '</div><form onsubmit="return keepAnchorOnSignIn(this);" action="/login" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="' + toket + '"><div class="input--block"><div class="nbl-input nbl-input_iconType_icon"><div class="nbl-input__body"><div class="nbl-input__icon"><div class="nbl-icon nbl-icon_avatar_16 nbl-input__nbl-icon"></div></div><input type="text" name="username" id="username" autofocus autocomplete="on" tabindex="1" class="nbl-input__editbox"><div class="nbl-input__overlays"><div class="nbl-input__placeholder">Логин</div><div class="nbl-input__stripe"></div></div></div></div><p class="next--block__button disabled">Продолжить</p><p class="box--shadow--button">У меня нет учетной записи</p></div></form>');
    onEventInput($('.messages ~ form'));
    $('.messages ~ form input').bind('input', inputBlockFormButton);
    $('.messages ~ form .box--shadow--button').bind('click', noAccount);
    loginFormElement.remove();

    setTimeout(function() { $('.messages .message:nth-child(1)').addClass('active'); }, 100);

    if (errorElement.length > 0) {
      if (emailUser.length > 0) {
        setTimeout(function() { $('.messages .message:nth-child(2)').addClass('active'); }, 300);
        setTimeout(function() { $('.messages .message:nth-child(3)').addClass('active'); }, 500);
        setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 700);
        setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 900);
        setTimeout(function() { $('.messages ~ form .box--shadow--button').addClass('active'); }, 1100);
      }else {
        setTimeout(function() { $('.messages .message:nth-child(2)').addClass('active'); }, 300);
        setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 500);
        setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 700);
        setTimeout(function() { $('.messages ~ form .box--shadow--button').addClass('active'); }, 900);
      }
    }else {
      setTimeout(function() { $('.messages ~ form .nbl-input').addClass('active'); }, 300);
      setTimeout(function() { $('.messages ~ form .next--block__button').addClass('active'); }, 500);
      setTimeout(function() { $('.messages ~ form .box--shadow--button').addClass('active'); }, 700);
    }
  }

  /*
  * Изменение wiki-страниц
  */

  const wiki = $('.wiki');

  if (wiki.length) {
    wiki.parent().addClass('all');

    wiki.find('h1 a.wiki-anchor, h2 a.wiki-anchor, h3 a.wiki-anchor, h4 a.wiki-anchor, h5 a.wiki-anchor, h6 a.wiki-anchor').html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linked_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 010-7.07l3.54-3.54a5.003 5.003 0 017.07 0 5.003 5.003 0 010 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 000-4.24 2.982 2.982 0 00-4.24 0l-3.53 3.53a2.982 2.982 0 000 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 010 7.07l-3.54 3.54a5.003 5.003 0 01-7.07 0 5.003 5.003 0 010-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 000 4.24 2.982 2.982 0 004.24 0l3.53-3.53a2.982 2.982 0 000-4.24.973.973 0 010-1.42z" fill="currentColor" fill-rule="nonzero"></path></g></svg>');
  }

  /*
  * Изменение страницы создания новой задачи
  */

  if (url.indexOf('issues/new') !== -1) {
    $('.headerBar__tabsWrapper .nbl-tabsItem__stripe').remove();
    $('.headerBar__tabsWrapper .nbl-tabsItem').removeClass('selected');

    $('.headerBar__tabsWrapper .nbl-tabsItem.new-issue').addClass('selected');
    $('.headerBar__tabsWrapper .nbl-tabsItem.new-issue').append('<div class="nbl-tabsItem__stripe"></div>');

    const issueForm = contentElement.find('#issue-form');

    const titlePage = contentElement.find('h2');
    const boxForm = issueForm.find('.box');

    contentElement.addClass('new--issues');
    titlePage.remove();

    boxForm.addClass('no--border');

    let formRemoveInputElement =  issueForm.find('#issue_assigned_to_id');
    formRemoveInputElement.parent().remove();

    formRemoveInputElement =  issueForm.find('#issue_parent_issue_id');
    formRemoveInputElement.parent().remove();

    formRemoveInputElement =  issueForm.find('#issue_custom_field_values_6');
    formRemoveInputElement.parent().remove();

    const inputParentElements = issueForm.find('input[type="text"]').parent();

    inputParentElements.each(function () {
      const labelElement = $(this).find('label');
      let labelText = labelElement.text();
      const inputElement = $(this).find('input');
      const filled = !!inputElement.val() ? ' nbl-input_state_filled' : '';

      labelElement.remove();

      labelText = arrayAccounts.indexOf(inputElement.attr('id')) === -1 ? labelText : labelText.replace(/[акунт,Модель]/g, '');

      $(this).addClass('no--padding');

      inputElement.wrap('<div class="nbl-input' + filled + '"><div class="nbl-input__body"></div></div>');
      inputElement.after('<div class="nbl-input__overlays"><div class="nbl-input__placeholder">' + labelText.replace(/[*]/g, '') + '</div><div class="nbl-input__stripe"></div></div>');
      inputElement.addClass('nbl-input__editbox');

      const inputBodyElement = $(this).find('.nbl-input__body');

      if (labelText.indexOf('*') === -1) {
        inputBodyElement.after('<div class="nbl--organism--input__caption">необязательно</div>');
      }else {
        inputElement.attr('data-required', true);
      }

      if (arrayAccounts.indexOf(inputElement.attr('id')) !== -1) {
        fieldsetAccount_gridBlock.append($(this));
      }

      onEventInput($(this));
    });

    let formRemoveSelectElement =  issueForm.find('#issue_status_id');
    formRemoveSelectElement.parent().remove();

    const plarformSelectElement = issueForm.find('select#issue_custom_field_values_9');

    if (plarformSelectElement.length) {
      const nameProject = url.replace("projects/", '').replace("/issues/new", '').replace("-", ' ');

      console.log(nameProject);
    }

    let selectParentElements = issueForm.find('select').parent();

    selectParentElements.each(function () {
      const labelElement = $(this).find('label');
      let labelText = labelElement.text();
      const selectElement = $(this).find('select');
      const filled = !!selectElement.val() ? ' nbl-input_state_filled' : '';

      labelElement.remove();

      $(this).addClass('no--padding');

      selectElement.hide();

      selectElement.wrap('<div class="nbl-select' + filled + '" data-value="' + selectElement.val() + '"><div class="nbl-select__body"></div></div>');
      selectElement.before('<div class="nbl-select__overlays"><div class="nbl-select__placeholder">' + labelText.replace(/[*]/g, '') + '</div></div>');
      selectElement.after('<div class="nbl-optionSelector"></div>');

      const selectBodyElement = $(this).find('.nbl-select__body');
      const optionSelectorElement = selectBodyElement.find('.nbl-optionSelector');

      const optionSelector = selectElement.find('option');

      optionSelector.each(function () {
        const textOption = $(this).text();
        const valueOption = $(this).val();
        const selected = $(this).attr('selected') === "selected";

        if (!valueOption.length) {
          return;
        }

        optionSelectorElement.append('<div class="nbl-optionSelector_optionWrapper" data-value="' + valueOption + '" title="' + textOption + '">' + textOption + '</div>');

        if (selected) {
          optionSelectorElement.find('.nbl-optionSelector_optionWrapper:last-child').addClass('active');
        }


      });

      if (labelText.indexOf('*') === -1) {
        selectBodyElement.after('<div class="nbl--organism--select__caption">необязательно</div>');
      }else {
        $(this).find('.nbl-select').attr('data-required', true);
      }

      if (selectElement.attr('id') === 'issue_tracker_id') {
        selectBodyElement.addClass('half--width')
      }

      onEventOption($(this));
    });
  }

  /*
  * Изменение страницы с проектами
  */

  if (url == projects) {
    const projectsList = $('#projects-index');
    const titlePate = $('#content > h2');

    headerElement.after('<h1 class="title--page">' + titlePate.text() + '</h1>');
    titlePate.remove();

    $('.headerBar__tabsWrapper').remove();

    $('#content > .contextual').css('float', 'none');

    projectsList.find('.projects').addClass('card--blocks')

    projectsList.find('.project').each(function () {
      const name = $(this).text();
      const url = $(this).attr('href').replace('/' + projects + '/','');
      const icon = iconProject[url] ? iconProject[url] : '';
      const isMyProjects = $(this).hasClass('my-project') ? '<p class="text">Мой проект</p>' : '';

      $(this).removeClass('leaf');
      $(this).removeClass('icon');
      $(this).removeClass('icon-fav');
      $(this).removeClass('my-project');
      $(this).addClass('card--block');
      $(this).addClass('no--box--shadow');
      $(this).addClass('card--block--padding--right');

      $(this).html(icon + '<h2></h2>' + isMyProjects);

      $(this).find('h2').text(name);
    });
  }

  /*
  * Изменение страницы настроек учетной записи
  */

  if (url == account) {
    const titlePage = contentElement.find('h2');

    contentElement.addClass('background--title two--line--title');
    titlePage.html('Моя учётная<br>запись');

    titlePage.after('<h3 class="svg--icon--title"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill="#645ba3" fill-rule="nonzero" d="M12.736 6.544a1 1 0 0 1 .654 1.89 8.019 8.019 0 0 0-4.927 4.879 1 1 0 0 1-1.884-.67 10.019 10.019 0 0 1 6.157-6.1zm6.566 18.936a1 1 0 0 1-.653-1.89 8.019 8.019 0 0 0 4.927-4.88 1 1 0 0 1 1.884.67 10.019 10.019 0 0 1-6.158 6.1z"/><path fill="#ec174f" d="M24.736 5.055c.76.606 1.446 1.284 2.054 2.02l.074-.032a2.5 2.5 0 0 1 3.278 1.325l1.172 2.761a2.5 2.5 0 0 1-1.324 3.278l-.075.032c.108.948.118 1.912.026 2.88l.074.03a2.5 2.5 0 0 1 1.382 3.254l-1.124 2.781a2.5 2.5 0 0 1-3.254 1.382l-.074-.03a13.913 13.913 0 0 1-2.02 2.054l.032.074a2.5 2.5 0 0 1-1.325 3.278l-2.761 1.172a2.5 2.5 0 0 1-3.278-1.324l-.032-.075c-.948.108-1.912.118-2.88.026l-.03.074a2.5 2.5 0 0 1-3.254 1.382l-2.781-1.124a2.5 2.5 0 0 1-1.382-3.254l.03-.074a13.913 13.913 0 0 1-2.054-2.02l-.074.032a2.5 2.5 0 0 1-3.278-1.325L.686 20.871a2.5 2.5 0 0 1 1.324-3.278l.075-.032a13.913 13.913 0 0 1-.026-2.88l-.074-.03a2.5 2.5 0 0 1-1.382-3.254l1.124-2.781a2.5 2.5 0 0 1 3.254-1.382l.074.03a13.913 13.913 0 0 1 2.02-2.054l-.032-.074a2.5 2.5 0 0 1 1.325-3.278L11.129.686a2.5 2.5 0 0 1 3.278 1.324l.032.075a13.913 13.913 0 0 1 2.88-.026l.03-.074A2.5 2.5 0 0 1 20.602.603l2.781 1.124a2.5 2.5 0 0 1 1.382 3.254l-.03.074zm-2.449.722l.625-1.545a.5.5 0 0 0-.277-.65l-2.781-1.124a.5.5 0 0 0-.651.276l-.624 1.544a11.936 11.936 0 0 0-5.362.048l-.65-1.534a.5.5 0 0 0-.656-.265L9.149 3.699a.5.5 0 0 0-.265.656l.651 1.534a11.936 11.936 0 0 0-3.758 3.824l-1.545-.625a.5.5 0 0 0-.65.277l-1.124 2.781a.5.5 0 0 0 .276.651l1.544.624c-.399 1.805-.365 3.635.048 5.362l-1.534.65a.5.5 0 0 0-.265.656l1.172 2.762a.5.5 0 0 0 .656.265l1.534-.651a11.936 11.936 0 0 0 3.824 3.758l-.625 1.545a.5.5 0 0 0 .277.65l2.781 1.124a.5.5 0 0 0 .651-.276l.624-1.544c1.805.399 3.635.365 5.362-.048l.65 1.534a.5.5 0 0 0 .656.265l2.762-1.172a.5.5 0 0 0 .265-.656l-.651-1.534a11.936 11.936 0 0 0 3.758-3.824l1.545.625a.5.5 0 0 0 .65-.277l1.124-2.781a.5.5 0 0 0-.276-.651l-1.544-.624c.399-1.805.365-3.635-.048-5.362l1.534-.65a.5.5 0 0 0 .265-.656l-1.172-2.762a.5.5 0 0 0-.656-.265l-1.534.651a11.936 11.936 0 0 0-3.824-3.758zM16 22a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></g></svg>Настройки</h3>');

    const inputParentElements = contentElement.find('form input[type="text"]').parent();

    const splitcontentleftElement = contentElement.find('.splitcontentleft');
    const splitcontentrightElement = contentElement.find('.splitcontentright');

    $('#my_account_form').before('<div class="messages my_account_form_message"><div class="message error"><div class="message--content"><h3>Некоторый функционал недоступен</h3><p class="text">так, как плагин, изменяющий цветовую схему не поддерживает поля для изменения языка, города, временной зоны и стиля шрифта</p></div></div></div>');

    setTimeout(function() { $('.my_account_form_message .message:nth-child(1)').addClass('active'); }, 100);

    const button = splitcontentleftElement.find('.mobile-hide');
    splitcontentrightElement.after('<fieldset class="box box--two--column"><legend>Аккаунты</legend><div class="grid--block"></div></fieldset>');

    const fieldsetAccount = splitcontentrightElement.find('~ fieldset');
    const fieldsetAccount_gridBlock = fieldsetAccount.find('.grid--block');

    fieldsetAccount.after(button);

    inputParentElements.each(function () {
      const labelElement = $(this).find('label');
      let labelText = labelElement.text();
      const inputElement = $(this).find('input');
      const filled = !!inputElement.val() ? ' nbl-input_state_filled' : '';

      labelElement.remove();

      labelText = arrayAccounts.indexOf(inputElement.attr('id')) !== -1 ? labelText.replace(/[ аккаунт, Модель ]/g, '') : labelText;

      $(this).addClass('no--padding');

      inputElement.wrap('<div class="nbl-input' + filled + '"><div class="nbl-input__body"></div></div>');
      inputElement.after('<div class="nbl-input__overlays"><div class="nbl-input__placeholder">' + labelText.replace(/[*]/g, '') + '</div><div class="nbl-input__stripe"></div></div>');
      inputElement.addClass('nbl-input__editbox');

      const inputBodyElement = $(this).find('.nbl-input__body');

      if (labelText.indexOf('*') === -1) {
        inputBodyElement.after('<div class="nbl--organism--input__caption">необязательно</div>');
      }else {
        inputElement.attr('data-required', true);
      }

      if (arrayAccounts.indexOf(inputElement.attr('id')) !== -1) {
        fieldsetAccount_gridBlock.append($(this));
      }

      onEventInput($(this));
    });

    let formRemoveSelectElement;

    formRemoveSelectElement =  contentElement.find('form #user_language');
    formRemoveSelectElement.parent().remove();

    formRemoveSelectElement =  contentElement.find('form #pref_textarea_font');
    formRemoveSelectElement.parent().remove();

    formRemoveSelectElement =  contentElement.find('form #user_custom_field_values_35');
    formRemoveSelectElement.parent().remove();

    formRemoveSelectElement =  contentElement.find('form #pref_time_zone');
    formRemoveSelectElement.parent().remove();

    const selectParentElements = contentElement.find('select:not(#user_mail_notification)').parent();

    selectParentElements.each(function () {
      const labelElement = $(this).find('label');
      let labelText = labelElement.text();
      const selectElement = $(this).find('select');
      const filled = !!selectElement.val() ? ' nbl-input_state_filled' : '';

      labelElement.remove();

      $(this).addClass('no--padding');

      selectElement.hide();

      selectElement.wrap('<div class="nbl-select' + filled + '" data-value="' + selectElement.val() + '"><div class="nbl-select__body"></div></div>');
      selectElement.before('<div class="nbl-select__overlays"><div class="nbl-select__placeholder">' + labelText.replace(/[*]/g, '') + '</div></div>');
      selectElement.after('<div class="nbl-optionSelector"></div>');

      const selectBodyElement = $(this).find('.nbl-select__body');
      const optionSelectorElement = selectBodyElement.find('.nbl-optionSelector');

      const optionSelector = selectElement.find('option');

      optionSelector.each(function () {
        const textOption = $(this).text();
        const valueOption = $(this).val();
        const selected = $(this).attr('selected') == "selected";

        if (!valueOption.length) {
          return;
        }

        optionSelectorElement.append('<div class="nbl-optionSelector_optionWrapper" data-value="' + valueOption + '">' + textOption + '</div>');

        if (selected) {
          optionSelectorElement.find('.nbl-optionSelector_optionWrapper:last-child').addClass('active');
        }
      });

      if (labelText.indexOf('*') === -1) {
        selectBodyElement.after('<div class="nbl--organism--select__caption">необязательно</div>');
      }else {
        $(this).find('.nbl-select').attr('data-required', true);
      }

      onEventOption($(this));
    });

    const mailNotificationSelectElement = contentElement.find('#user_mail_notification');
    const mailNotificationElement = mailNotificationSelectElement.parent();

    mailNotificationSelectElement.hide();
    mailNotificationElement.addClass('no--padding');

    mailNotificationElement.append('<div class="tabs--ivi"></div>');

    const tabsMailNotificationElement = mailNotificationElement.find('.tabs--ivi');

    const optionSelectorMailNotificationElement = mailNotificationSelectElement.find('option');

    optionSelectorMailNotificationElement.each(function () {
      const textOption = $(this).text();
      const valueOption = $(this).val();
      const selected = $(this).attr('selected') == "selected";

      if (!valueOption.length) {
        return;
      }

      tabsMailNotificationElement.append('<div class="tabs--ivi_option" data-value="' + valueOption + '">' + textOption + '</div>');

      if (selected) {
        tabsMailNotificationElement.find('.tabs--ivi_option:last-child').addClass('active');
      }
    });

    onEventTabsIVI(tabsMailNotificationElement);

    const checkboxParentElements = contentElement.find('input[type="checkbox"]').parent();

    checkboxParentElements.each(function () {
      if ($(this).context.tagName === 'LABEL') {
        return;
      }

      const label = $(this).find('label');
      const labelText = label.text();
      const checkbox = $(this).find('input[type="checkbox"]');

      $(this).addClass('no--padding checkbox--p');

      label.addClass('label--checkbox');
      label.html('<span class="text">' + labelText + '</span><span class="checkbox"></span>');

      $(this).append(label);
    });
  }

  /*
  * Изменение карточки пользователя
  */

  if (url.indexOf('users/') !== -1) {
    $('#main').addClass('no--padding');

    const nameUserElement = contentElement.find('h2');

    nameUserElement.wrap('<div class="info--user--flex--block maxContent"><div class="info--user--flex--block__left"></div></div>');
    nameUserElement.addClass('big--name--user');
    nameUserElement.after('<div class="info--user--block"><p class="ivi--id"></p><p class="email"></p></div>');

    nameUserElement.text(nameUserElement.text().replace(/[0-9,.,]/g, ''));

    const infoUserBlockElement = contentElement.find('h2 ~ .info--user--block');

    const splitcontentleftElement = contentElement.find('.splitcontentleft');
    const splitcontentrightElement = contentElement.find('.splitcontentright');
    const infoUserFlexBlockElement = contentElement.find('.info--user--flex--block');

    splitcontentleftElement.addClass('all user--info');
    splitcontentrightElement.addClass('all user--info');

    splitcontentrightElement.find('h3').before('<h2>Активность</h2>');
    splitcontentrightElement.find('h3 a').text('Действия пользователя');

    const email = splitcontentleftElement.find('ul:nth-child(1) > li:nth-child(1)').text().replace(/Email: /g,'');

    let numberElement = email.indexOf('@') == -1 ? 1 : 2;

    const iviID = splitcontentleftElement.find('ul:nth-child(1) > li:nth-child(' + numberElement + ')').text().replace(/[\s.,.,ivi ID:]/g, '');
    numberElement++;

    numberElement++;
    let lastOnlintTime = splitcontentleftElement.find('ul:nth-child(1) > li:nth-child(' + numberElement + ')').text().replace(/Последнее подключение: /g,'').split(".");
    lastOnlintTime = formatDate(new Date(lastOnlintTime[2], lastOnlintTime[1] - 1, lastOnlintTime[0]));

    const todayDate = formatDate(new Date());
    const yesterdayDate = formatDate(new Date(Date.now()-86400000));

    lastOnlintTime = todayDate == lastOnlintTime ? 'сегодня' : lastOnlintTime;
    lastOnlintTime = yesterdayDate == lastOnlintTime ? 'вчера' : lastOnlintTime;

    if (iviID.length > 0 && iviID > 0) {
      infoUserBlockElement.find('.ivi--id').text(iviID);
    }else {
      infoUserBlockElement.find('.ivi--id').remove();
    }

    if (email.length > 0 && email.indexOf('@') !== -1) {
      infoUserBlockElement.find('.email').text(email);

      if (email.indexOf('@ivi.ru') !== -1) {
        nameUserElement.append('<span class="text--badge">Сотрудник ivi</span>');
      }
    }else {
      infoUserBlockElement.find('.email').remove();
    }

    if (iviID.length == 0 && email.length == 0) {
      infoUserBlockElement.remove();
    }

    infoUserBlockElement.find('.ivi--id').text(iviID);

    infoUserFlexBlockElement.append('<div class="info--user--flex--block__right"><p class="last--online--time"></p></div>').find('.last--online--time').text('Был(а) в сети ' + lastOnlintTime);

    splitcontentleftElement.find('ul:nth-child(1)').remove();

    // Создание контейнеров для карточек

    const titleCard = splitcontentleftElement.find('h3');

    titleCard.wrap('<div class="block--user--cards"></div>');

    // Добавление карточек с задачами

    const issuesBlockUserCardsElement = $(splitcontentleftElement.find('.block--user--cards')[0]);
    const infoIssues = $(issuesBlockUserCardsElement.find('~ ul')[0]);

    issuesBlockUserCardsElement.append('<ul class="card--blocks"></ul>');

    const cardBlocksIssues = issuesBlockUserCardsElement.find('.card--blocks');

    infoIssues.find('li').each(function () {
      const titleCard = $(this).find('a').text().replace(/:\s*$/, "");
      const textCard = $(this).text().replace(titleCard + ':', "");
      const urlCard = $(this).find('a').attr('href');

      cardBlocksIssues.append('<li class="root"><a href="' + urlCard + '" class="card--block no--box--shadow card--block--padding--right"><p class="text--card"></p><h2></h2></a></li>');

      const cardBlock = cardBlocksIssues.find('li:last-child');

      cardBlock.find('.text--card').text(textCard);
      cardBlock.find('h2').text(titleCard);
    });

    infoIssues.hide();

    // Добавление карточек с проектами в которых участвует пользователь

    const projectBlockUserCardsElement = $(splitcontentleftElement.find('.block--user--cards')[1]);
    const infoProject = $(projectBlockUserCardsElement.find('~ ul')[0]);

    projectBlockUserCardsElement.append('<ul class="card--blocks"></ul>');

    const cardBlocksProject = projectBlockUserCardsElement.find('.card--blocks');

    infoProject.find('li').each(function () {
      const cardBlock = cardBlocksProject.find('li:last-child');

      const urlHref = $(this).find('a').attr('href');
      const url = urlHref.replace('/' + projects + '/','');

      const icon = iconProject[url] ? iconProject[url] : '';

      const name = $(this).find('a').text();
      const roles = $(this).text().replace(name, "").replace('(', '').replace(')', '').split(",");

      let rolePrint = '';

      roles.forEach(function (role, index) {
        let roleText = role;

        if (index + 1 == roles.length) {
          roleText = role.split(".");
          roleText = formatDate(new Date(roleText[2], roleText[1] - 1, roleText[0]));

          rolePrint += '<p class="text text--bottom">' + roleText + '</p>';
        }else {
          rolePrint += '<p class="text">' + roleText + '</p>';
        }
      });

      cardBlocksProject.append('<li class="root"><a href="' + urlHref + '" class="card--block no--box--shadow card--block--padding--right">' + icon + '<h2>' + name + '</h2>' + rolePrint + '</a></li>');
    });

    infoProject.hide();
  }

  /*
  * Обработка сообщений об ошибках
  */

  const errorExplanationElement = $('#errorExplanation');

  if (errorExplanationElement.length) {
    const titleError = $('#content h2');
    const titleErrorText = titleError.text();
    const textError = errorExplanationElement.text().replace(/.\s*$/, "");

    $('#content').html('<div class="messages"><div class="message error"><div class="message--content"><h3>Ошибка ' + titleErrorText + '</h3><p class="text">' + textError + '</p></div></div><div class="message"><div class="message--content"><h3>Если так быть не должно</h3><p class="text">попробуйте связаться с менеджером программы бета-тестирования</p></div></div></div><div class="input--block"><p onclick="history.back();" class="next--block__button">Вернуться назад</p></div>');
    onEventInput($('.messages ~ form'));
    $('.messages ~ form input').bind('input', inputBlockFormButton);
    loginFormElement.remove();

    setTimeout(function() { $('.messages .message:nth-child(1)').addClass('active'); }, 100);
    setTimeout(function() { $('.messages .message:nth-child(2)').addClass('active'); }, 300);
    setTimeout(function() { $('.messages ~ .input--block .next--block__button').addClass('active'); }, 500);
    setTimeout(function() { $('.messages ~ .input--block .box--shadow--button').addClass('active'); }, 700);
  }

  /*
  * Изменение списка участников проектов
  */

  const members = $('.members');

  if (members.length) {
    let membersLabels = $('.members p span.label');

    for (let i = 0; i < membersLabels.length; i++) {
      let memberLabel = $(membersLabels[i]);
      let textMemverLavel = memberLabel.text().replace(/.\s*$/, "");

      memberLabel.text(textMemverLavel);
    }
  }

  /*
  * Удаление элемента выпадающего списка с файлами, если нет файлов
  */

  let legendsElement = $('fieldset legend');

  if (legendsElement.text() == 'Файлы (0)') {
    legendsElement.parent().remove();
  }

  /*
  * Удаление пагинации, если страниц 0 из 0 или 1 из 1
  */

  const itemsElement =  $('.pagination .items');

  if (itemsElement.text() == '(0-0/0)' || itemsElement.text() == '(1-1/1)') {
    itemsElement.parent().parent().remove();
  }

  $('div#activity dt.me').parent().addClass('me');

  /*
  * Замена текста в вверхнем меню в кнопках на иконки
  */

  const myAccountElement = topMenuElement.find('.my-account');

  myAccountElement.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z"></path><path d="M15.148 2.04c.428.07.832.233 1.195.523.595.476.878 1.076 1.097 1.952.056.224.153.486.275.74.278.117.55.249.815.393.262-.065.513-.15.714-.244 1.412-.658 2.597-.623 3.567.423.082.089.131.148.238.28l.629.776c.17.21.241.305.348.482.692 1.152.422 2.224-.452 3.386a4.112 4.112 0 00-.417.71c.078.283.143.57.195.86.222.178.46.334.668.441.804.41 1.325.821 1.655 1.508.202.42.27.85.24 1.282a3.48 3.48 0 01-.106.64l-.225.975c-.065.285-.099.41-.185.622a2.515 2.515 0 01-.778 1.047c-.598.473-1.246.614-2.148.63-.229.004-.502.04-.773.1-.177.243-.364.478-.563.704.003.275.03.544.077.764.187.884.196 1.547-.13 2.236-.2.42-.491.744-.845.993a3.48 3.48 0 01-.565.32l-.899.44a3.48 3.48 0 01-.6.247c-.414.126-.85.156-1.303.054-.744-.167-1.261-.582-1.842-1.273a4.103 4.103 0 00-.591-.561 9.627 9.627 0 01-.878 0c-.228.18-.437.378-.591.56-.58.692-1.098 1.107-1.842 1.274a2.515 2.515 0 01-1.303-.054 3.48 3.48 0 01-.6-.248l-.899-.438a7.152 7.152 0 01-.185-.093c-1.312-.683-1.696-1.847-1.355-3.457.047-.22.074-.49.077-.764a9.535 9.535 0 01-.563-.705 4.066 4.066 0 00-.773-.099c-.902-.016-1.55-.157-2.148-.63a2.515 2.515 0 01-.778-1.047 3.48 3.48 0 01-.185-.622l-.225-.974a3.381 3.381 0 01-.109-.681 2.509 2.509 0 01.296-1.346c.339-.629.84-1.015 1.602-1.404a4.09 4.09 0 00.668-.441c.052-.29.117-.577.195-.86a4.112 4.112 0 00-.417-.71c-.874-1.162-1.144-2.234-.452-3.386.107-.177.179-.273.348-.482l.63-.777c.106-.131.155-.19.237-.279.97-1.046 2.155-1.08 3.567-.423.201.093.452.18.714.244.265-.144.537-.276.815-.394.122-.253.219-.515.275-.74.219-.875.502-1.475 1.097-1.95.363-.291.767-.455 1.195-.523.18-.03.3-.038.49-.04L14.5 2c.292 0 .422.005.648.04zM14.586 4H13.5c-.5 0-.75 0-1 1a6.347 6.347 0 01-.836 1.87 7.47 7.47 0 00-1.8.872 6.35 6.35 0 01-1.952-.525c-.934-.435-1.092-.24-1.406.148l-.63.777c-.314.389-.472.583.148 1.406.35.464.721 1.15.937 1.857a7.458 7.458 0 00-.429 1.894 6.345 6.345 0 01-1.643 1.245c-.918.468-.862.712-.75 1.199l.225.974c.113.487.169.731 1.2.75.57.01 1.323.135 2.003.39.345.575.765 1.1 1.247 1.56a6.35 6.35 0 01-.072 2.032c-.213 1.008.011 1.118.46 1.337l.9.439c.449.219.674.328 1.337-.46a6.343 6.343 0 011.59-1.327 7.571 7.571 0 001.942 0 6.343 6.343 0 011.59 1.326c.663.79.888.68 1.337.46l.9-.438c.449-.219.673-.329.46-1.337a6.35 6.35 0 01-.072-2.031 7.533 7.533 0 001.247-1.56 6.348 6.348 0 012.003-.391c1.031-.019 1.087-.263 1.2-.75l.225-.974c.112-.487.168-.73-.75-1.2a6.345 6.345 0 01-1.643-1.244 7.458 7.458 0 00-.43-1.894 6.342 6.342 0 01.938-1.857c.62-.823.462-1.017.148-1.406l-.63-.777c-.314-.389-.472-.583-1.406-.148a6.35 6.35 0 01-1.952.525 7.47 7.47 0 00-1.8-.871A6.347 6.347 0 0115.5 5c-.235-.941-.47-.997-.914-1zM14 9.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="currentColor"></path></g></svg>');

  const logoutElement = topMenuElement.find('.logout');

  logoutElement.html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="door_arrow_right_outline_28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.357 3H13a1 1 0 110 2h-2.6c-1.137 0-1.929 0-2.546.051-.605.05-.953.142-1.216.276a3 3 0 00-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v7.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 001.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051H13a1 1 0 110 2h-2.643c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 01-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 19.6 3 18.727 3 17.643v-7.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 015.73 3.544c.592-.302 1.233-.428 1.961-.487C8.4 3 9.273 3 10.357 3zm8.936 6.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L21.586 15H12a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" fill="currentColor"></path></svg>');

  /**
   * Отображение всплывающего окна
   */

  const showPopup = function (buttonElement, selectorName) {
    const selector = '#' + selectorName;

    const windowWhite = $(window).width();
    const whiteElement = $(selector)[0].offsetHeight;

    const whidthButton = buttonElement[0].offsetWidth;
    const heightButton = buttonElement[0].offsetHeight;
    const top = buttonElement.position().top + heightButton + 10;
    const left = buttonElement.position().left + whidthButton * 2.5 + whiteElement / 2 - 50;

    $(selector).css('top', top);
    left > windowWhite ?  $(selector).css('left', buttonElement.position().left - whiteElement + whidthButton) : $(selector).css('left', left);
    $(selector).addClass('active');

    $(document).off('mouseup');
    setTimeout(() => {
      $(document).mouseup(function (evt) {
        const container = $(selector);

        if (container.has(evt.target).length === 0) {
          hidePopup(container);
        }
      });
    }, 500);
  };

  /**
   * Скрытие всплывающего окна
   */

  const hidePopup = function (element) {
    element.removeClass('active');
  };

  /*
  * Добавление собыйтий кнопкам для вызова всплывающего окна
  */

  const buttonPopupElements = $('*[data-popup="true"]');

  buttonPopupElements.each(function () {
    const buttonElement = $(this);
    const selectorName = buttonElement.attr('data-popup-name');
    const typeClickMouse = buttonElement.attr('data-popup-mouse');

    switch (typeClickMouse) {
      case 'right':
        buttonElement.on('contextmenu', function (event) {
          event.preventDefault ? event.preventDefault() : event.returnValue = false;
          showPopup(buttonElement, selectorName);
        });

        break;
    }
  });
})();
