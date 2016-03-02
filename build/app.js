/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _app = __webpack_require__(5);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tabs = __webpack_require__(6);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _loadArticles = __webpack_require__(7);

	var _loadArticles2 = _interopRequireDefault(_loadArticles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	function onTabClick(event) {
	    event.preventDefault();
	    var actives = document.querySelectorAll('.active');
	
	    // for all items that have an active class, remove it
	    for (var i = 0; i < actives.length; i++) {
	        actives[i].className = actives[i].className.replace('active', '');
	    }
	
	    // actives.forEach( (active) =>
	    //     console.log(active)
	    // )
	
	    event.target.parentElement.className += ' active';
	
	    // Find the href attr and split on hash to get an id
	    document.getElementById(event.target.href.split('#')[1]).className += ' active';
	}
	
	var el = document.getElementById('nav-tab');
	el.addEventListener('click', onTabClick, false);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(8);
	
	var constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var today = new Date();
	var previousWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
	var day = previousWeek.getDate();
	var month = previousWeek.getMonth();
	var year = previousWeek.getFullYear();
	var formattedDate = year + '-' + month + '-' + day;
	
	var loadArticles = function loadArticles(query) {
	    var xhr = new XMLHttpRequest();
	    var url = constants.apiURL + query + '?q=&show-fields=trail-text&from-date=' + formattedDate + '&api-key=' + constants.apiKey;
	
	    // start get request
	    xhr.open('GET', encodeURI(url));
	
	    xhr.onload = function () {
	        if (xhr.status === 200) {
	            var data = JSON.parse(xhr.responseText);
	            var results = data.response.results;
	
	            // Create an empty list
	            var list = '';
	
	            // for each of the ajax respsonses loop over and create a list item
	            // add that item to the list variable
	            results.map(function (result) {
	                return list += '<li class="tab__content--item"> <a href=' + result.webUrl + '>' + result.webTitle + '</a> <p>' + result.fields.trailText + '</p> </li>';
	            });
	
	            // Set the HTML
	            document.getElementById(query).innerHTML = '<ol>' + list + '</ol>';
	        } else {
	            console.log('Request failed.  Returned status of ' + xhr.status);
	        }
	    };
	    xhr.send();
	};
	
	loadArticles('football');
	loadArticles('news');
	loadArticles('culture');

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var apiKey = exports.apiKey = '9wur7sdh84azzazdt3ye54k4';
	var apiURL = exports.apiURL = 'http://content.guardianapis.com/';

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map