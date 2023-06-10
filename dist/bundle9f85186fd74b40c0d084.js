/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rendercontact: () => (/* binding */ rendercontact)
/* harmony export */ });
function rendercontact() {
  var contentdiv = document.getElementById("content");
  var contacthtml = "\n    <div class=\"contacthead\">\n      <h1>Contact Us</h1>\n    </div>\n\n    <div class=\"contactcontent\">\n      <p><ion-icon name=\"map\"></ion-icon>1024 Obud Aval San Diego, CA 2334</p>\n      <p><ion-icon name=\"call-sharp\"></ion-icon>: 55545-8894</p>\n      <h2>Send Us A Message</h2>\n      <div class=\"container\">\n        <form action=\"/action_page.php\">\n          <label for=\"fname\">Name</label>\n          <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n\n          <label for=\"email\">Email</label>\n          <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Email\">\n\n          <label for=\"subject\">Message</label>\n          <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:200px\"></textarea>\n\n          <input type=\"submit\" value=\"Submit\">\n        </form>\n      </div>\n    </div>\n  ";
  contentdiv.innerHTML = contacthtml;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderhome: () => (/* binding */ renderhome)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");


function renderhome() {
  var contentdiv = document.getElementById('content');
  var htmlhome = "\n    <div class=\"containerhome\">\n      <div class=\"textmain\">\n        <h1>Join us and experience mouthwatering <p>dishes at affordable prices!</p></h1>\n        <button id=\"orderButton\">Order Now</button>\n      </div>\n    </div>\n  ";
  contentdiv.innerHTML = htmlhome;
  var orderButton = document.getElementById('orderButton');
  orderButton.addEventListener('click', menuClickHandler);
}

function menuClickHandler() {
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.rendermenu)();
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rendermenu: () => (/* binding */ rendermenu)
/* harmony export */ });
function rendermenu() {
  var contentdiv = document.getElementById("content");
  var menuhtml = "\n    \n    \n\n\n  <div class=\"project\">\n  <h2>Menu</h2>\n  <div class=\"row\">\n  <div class=\"column\">\n    <div class=\"card\">\n      <h3>Bugger</h3>\n      <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>\n     \n      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>\n     \n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <h3>Fries</h3>\n      <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>\n      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>\n     \n    </div>\n  </div>\n\n\n\n\n\n\n  <div class=\"column\">\n    <div class=\"card\">\n      <h3>Pizza</h3>\n      <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>\n      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>\n    \n    \n    </div>\n  </div>\n<br>\n  <div class=\"column\">\n    <div class=\"card\">\n      <h3>Fries</h3>\n      <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>\n      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>\n     \n    </div>\n  </div>\n\n\n\n\n\n</div>\n    \n    \n    \n    ";
  contentdiv.innerHTML = menuhtml;
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.headerContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid green;\n  background-color: green;\n}\n\nnav {\n  color: white;\n}\n\nul {\n  display: flex;\n  justify-content: space-evenly;\n  list-style-type: none;\n  padding-left: 0;\n}\n\nnav a:hover {\n  background-color: #000;\n}\n\nnav a {\n  color: white;\n  text-decoration: none;\n  font-size: 17px;\n  padding: 10px;\n}\n\n.textmain h1 {\n  margin-bottom: 40px;\n  text-align: center;\n  font-size: 50px;\n  background: linear-gradient(to right, #1bed65, #4ae971, #cf23cf, #eedd44);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.textmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20vh;\n}\n\nbutton {\n  background-color: green;\n  padding: 16px;\n  width: 12%;\n  color: white;\n  border-radius: 10px;\n}\n\n/*    contact css */\n.contacthead {\n  color: white;\n  text-align: center;\n}\n\n.contactcontent p {\n  font-size: medium;\n  font-weight: bold;\n}\n\n.contactcontent {\n  background: linear-gradient(90deg, #020024 0%, #197909 39%, white 89%);\n  width: 700px;\n  border: 15px solid green;\n  padding: 50px;\n  margin: 100px;\n  border-radius: 30px;\n  color: white;\n  position: absolute;\n  top: 80%;\n  left: 40%;\n  transform: translate(-50%, -50%);\n}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: #f7f7f7;\n  padding: 20px;\n  color: black;\n}\n\n/* MENU CSS*/\n.project h2 {\n  text-align: center;\n  color: white;\n}\n\n/* Float four columns side by side */\n.column {\n  float: left;\n  width: 25%;\n  padding: 0 10px;\n  margin: auto;\n  flex: auto;\n}\n\n/* Remove extra left and right margins, due to padding */\n.row {\n  margin: 0 -5px;\n  border: 2px solid green;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive columns */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n/* Style the counter cards */\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #f1f1f1;\n  border-radius: 10px;\n}\n\n.box {\n  background-color: #f1f1f1;\n  border: 1px solid #ede9e9;\n  padding: 10px;\n  width: 230px;\n  color: black;\n  border-radius: 15px;\n}\n\n.row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.card h3 {\n  font-size: medium;\n  font-weight: bold;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAKA;EACE,sBAAA;AAHF;;AAOA;EACE,SAAA;EACA,UAAA;AAJF;;AAOA;EACE,yDAAA;AAJF;;AAOA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACD,8BAAA;EACA,uBAAA;AAJD;;AASA;EAEE,YAAA;AAPF;;AAWA;EACE,aAAA;EACA,6BAAA;EACA,qBAAA;EACA,eAAA;AARF;;AAWA;EACE,sBAAA;AARF;;AAUA;EACE,YAAA;EACA,qBAAA;EACA,eAAA;EACA,aAAA;AAPF;;AAUA;EACE,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,yEAAA;EAED,6BAAA;EACA,oCAAA;AARD;;AAaA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AAVF;;AAeA;EACE,uBAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;AAZF;;AAgBA,mBAAA;AAGA;EACE,YAAA;EACD,kBAAA;AAfD;;AAqBA;EACE,iBAAA;EACA,iBAAA;AAlBF;;AAqBA;EACE,sEAAA;EACA,YAAA;EACA,wBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACQ,QAAA;EACA,SAAA;EACA,gCAAA;AAlBV;;AAuBA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;AApBF;;AAuBA;EACE,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AApBF;;AAuBA;EACE,yBAAA;AApBF;;AAuBA;EACE,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,YAAA;AApBF;;AA+BA,YAAA;AAEA;EACE,kBAAA;EACA,YAAA;AA7BF;;AAmCA,oCAAA;AACA;EACE,WAAA;EACA,UAAA;EACA,eAAA;EACA,YAAA;EACA,UAAA;AAhCF;;AAmCA,wDAAA;AACA;EAAM,cAAA;EACN,uBAAA;AA/BA;;AAoCA,mCAAA;AACA;EACE,WAAA;EACA,cAAA;EACA,WAAA;AAjCF;;AAoCA,uBAAA;AACA;EACE;IACE,WAAA;IACA,cAAA;IACA,mBAAA;EAjCF;AACF;AAqCA,4BAAA;AACA;EACE,0CAAA;EACA,aAAA;EAEA,kBAAA;EACA,yBAAA;EACA,mBAAA;AApCF;;AA0CA;EACE,yBAAA;EACA,yBAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AAvCF;;AA4CA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;AAzCF;;AA4CA;EACE,iBAAA;EACA,iBAAA;EACA,6EAAA;AAzCF","sourcesContent":["@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');\n\n\n\n\n* {\n  box-sizing: border-box;\n}\n\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody{\n  background-image: url(\"../assets/background.jpg\");\n}\n\n.headerContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n border-bottom: 1px solid green;\n background-color : green;\n\n}\n\n\nnav {\n\n  color: white;\n  \n}\n\nul {\n  display: flex;\n  justify-content: space-evenly;\n  list-style-type: none;\n  padding-left:0;\n}\n\nnav a:hover {\n  background-color: #000;\n}\nnav a{\n  color: white;\n  text-decoration: none;\n  font-size: 17px;\n  padding:10px;\n}\n\n.textmain h1{\n  margin-bottom: 40px;\n  text-align: center;\n  font-size: 50px;\n  background: linear-gradient(to right, #1bed65,\n #4ae971, #cf23cf, #eedd44);\n -webkit-background-clip: text;\n -webkit-text-fill-color: transparent;\n\n\n}\n\n.textmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20vh;\n}\n\n\n\nbutton{\n  background-color: green;\n  padding: 16px;\n  width: 12%;\n  color:white;\n  border-radius: 10px;\n \n}\n\n/*    contact css */ \n\n\n.contacthead{\n  color :white;\n text-align: center;\n\n\n\n}\n\n.contactcontent p{\n  font-size: medium;\n  font-weight: bold;\n}\n\n.contactcontent {\n  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(25,121,9,1) 39%, rgba(255,255,255,1) 89%);\n  width: 700px;\n  border: 15px solid green;\n  padding: 50px;\n  margin: 100px;\n  border-radius: 30px;\n  color:white;\n  position: absolute;\n          top: 80%;\n          left: 40%;\n          transform: translate(-50%, -50%);\n\n}\n\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: #f7f7f7;\n  padding: 20px;\n  color:black;\n}\n\n\n\n\n\n\n\n\n\n/* MENU CSS*/\n\n.project h2{\n  text-align: center;\n  color:white;\n}\n\n\n\n\n/* Float four columns side by side */\n.column {\n  float: left;\n  width: 25%;\n  padding: 0 10px;\n  margin:auto;\n  flex: auto;\n}\n\n/* Remove extra left and right margins, due to padding */\n.row {margin: 0 -5px;\nborder: 2px solid green;\n\n}\n\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive columns */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n\n  }\n}\n\n/* Style the counter cards */\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n \n  text-align: center;\n  background-color: #f1f1f1;\n  border-radius: 10px;\n\n}\n\n\n\n.box {\n  background-color: #f1f1f1;\n  border: 1px solid #ede9e9;\n  padding: 10px;\n  width: 230px;\n  color: black;\n  border-radius: 15px;\n}\n\n\n\n.row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.card h3{\n  font-size: medium;\n  font-weight: bold;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n} \n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/background.jpg";

/***/ }),

/***/ "./src/assets/laughing.svg":
/*!*********************************!*\
  !*** ./src/assets/laughing.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/laughing.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_laughing_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/laughing.svg */ "./src/assets/laughing.svg");
// DEMO JOKE APP




 // Get the tab elements

var homeTab = document.getElementById('homeTab');
var menuTab = document.getElementById('menuTab');
var contactTab = document.getElementById('contactTab'); // Add event listeners to the tab elements

homeTab.addEventListener('click', function () {
  return openTab('home');
});
menuTab.addEventListener('click', function () {
  return openTab('menu');
});
contactTab.addEventListener('click', function () {
  return openTab('contact');
}); // Render the home page initially

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderhome)(); // Function to handle tab clicks

function openTab(tabName) {
  switch (tabName) {
    case 'home':
      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderhome)();
      break;

    case 'menu':
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.rendermenu)();
      break;

    case 'contact':
      (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.rendercontact)();
      break;

    default:
      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderhome)();
      break;
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle9f85186fd74b40c0d084.js.map