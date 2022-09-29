/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --aqua: #00B3BB;\r\n    --light-aqua: #00E6AA;\r\n    --dark-aqua: #0E9AA1;\r\n    --grey: #E6E6E6;\r\n    --light-grey: #F7F7F7;\r\n    --dark-grey: #757575;\r\n    --white: #FFFFFF;\r\n    --green: #61B874;\r\n    --yellow: #E6DB7B;\r\n    --red: #E67B7B;\r\n    --dark-red: #C46161;\r\n  }\r\n  \r\n*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.header {\r\n    background-color: var(--light-aqua);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    grid-area: header;\r\n}\r\n.main{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 0.7fr 3fr;\r\n    grid-template-rows: 0.2fr 1.5fr;\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"sidebar display\"\r\n}\r\n#display{\r\n    grid-area:display;\r\n    background-color: var(--white);\r\n}\r\n#projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 20px;\r\n    grid-area: sidebar;\r\n    background-color: var(--light-grey);\r\n\r\n}\r\n.project-item{\r\n    background-color: var(--white);\r\n    font-size: 2rem;\r\n    width: 200px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n.task-title{\r\n    font-size: 2rem;\r\n}\r\n\r\n.add-task{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.done{\r\n    text-decoration: line-through\r\n}\r\n/* .task{\r\n    \r\n} */\r\ntextarea{\r\n    height: 132px;\r\n    width: 247px;\r\n}\r\n.hidden{\r\n    display: none;\r\n}\r\n#add-project{\r\n    background-color: var(--white);\r\n    font-size: 2rem;\r\n    width: 200px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n.selected {\r\n    background-color: var(--dark-grey);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,mBAAmB;EACrB;;AAEF;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,mCAAmC;IACnC,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,aAAa;IACb,gCAAgC;IAChC,+BAA+B;IAC/B;;;AAGJ;AACA;IACI,iBAAiB;IACjB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,mCAAmC;;AAEvC;AACA;IACI,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI;AACJ;AACA;;GAEG;AACH;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kCAAkC;AACtC","sourcesContent":[":root {\r\n    --aqua: #00B3BB;\r\n    --light-aqua: #00E6AA;\r\n    --dark-aqua: #0E9AA1;\r\n    --grey: #E6E6E6;\r\n    --light-grey: #F7F7F7;\r\n    --dark-grey: #757575;\r\n    --white: #FFFFFF;\r\n    --green: #61B874;\r\n    --yellow: #E6DB7B;\r\n    --red: #E67B7B;\r\n    --dark-red: #C46161;\r\n  }\r\n  \r\n*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.header {\r\n    background-color: var(--light-aqua);\r\n    font-size: 3rem;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    grid-area: header;\r\n}\r\n.main{\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 0.7fr 3fr;\r\n    grid-template-rows: 0.2fr 1.5fr;\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"sidebar display\"\r\n}\r\n#display{\r\n    grid-area:display;\r\n    background-color: var(--white);\r\n}\r\n#projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 20px;\r\n    grid-area: sidebar;\r\n    background-color: var(--light-grey);\r\n\r\n}\r\n.project-item{\r\n    background-color: var(--white);\r\n    font-size: 2rem;\r\n    width: 200px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n.task-title{\r\n    font-size: 2rem;\r\n}\r\n\r\n.add-task{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.done{\r\n    text-decoration: line-through\r\n}\r\n/* .task{\r\n    \r\n} */\r\ntextarea{\r\n    height: 132px;\r\n    width: 247px;\r\n}\r\n.hidden{\r\n    display: none;\r\n}\r\n#add-project{\r\n    background-color: var(--white);\r\n    font-size: 2rem;\r\n    width: 200px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n.selected {\r\n    background-color: var(--dark-grey);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEventListeners": () => (/* binding */ CreateEventListeners),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plus.svg */ "./src/plus.svg");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectHandler.js */ "./src/projectHandler.js");
// put the tasks into display




//populates the #display 
function createDisplay(currentProject){
    const display = document.getElementById("display")
    display.appendChild(createTitle(currentProject))
    display.appendChild(createAddTask())
    display.appendChild(createTasks(currentProject))
    taskListener(currentProject)
    listenForDone(currentProject)

    


}
//create div with title of projects name
function createTitle(currentProject){
    let title = document.createElement("div")
    title.classList.add("task-title")
    title.innerText = currentProject.name
    return title
}
//creates a div with the current project Todos in display
function createTasks(currentProject){
    let tasks = document.createElement("div")
    tasks.setAttribute("id","tasks")
    for (let i = 0; i < currentProject.project.length; i++) {
        let label = document.createElement("label")
        let text = document.createTextNode(`${currentProject.project[i].title} due date:${currentProject.project[i].dueDate}`)
        let input = document.createElement("input")
        input.type="checkbox"
        label.appendChild(input)
        label.appendChild(text)
        input.setAttribute("data",i)
        label.setAttribute("data",i)
        tasks.appendChild(label)
        tasks.appendChild(document.createElement("br"));
        if(currentProject.project[i].isDone){
            label.classList.add("done")
            input.checked=true
        }
    }
    return tasks
}
//set event listener for a task to check if its been marked as done, and if so it changes the task to be linethrough 
function listenForDone(currentTaskList){
    const tasks = document.querySelectorAll("input[type='checkbox']");
    const labels = document.querySelectorAll("label")
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("change",function(e){
            let index = tasks[i].getAttribute("data")
            if (e.target.checked){
                currentTaskList.project[index].isDone = true
                labels[index].classList.toggle("done")

            }else{
                currentTaskList.project[index].isDone = false
                labels[index].classList.toggle("done")
            }
        })
        
    }

}
//creates the div with add new task button
function createAddTask(){
    let div = document.createElement("div")
    let plusImg = document.createElement("img")
    plusImg.src=_plus_svg__WEBPACK_IMPORTED_MODULE_0__
    plusImg.setAttribute("id","add-button")
    div.appendChild(plusImg)
    let text = document.createTextNode("add a new task")
    div.classList.add("add-task")
    div.appendChild(text)
    return div
}
// loads the projects in a side bar
function loadProjects(projects){
    const div = document.getElementById("projects")

    for (let i = 0; i < projects.length; i++) {
        let element = document.createElement("div")
        element.classList.add("project-item")
        element.innerText = projects[i].name
        element.setAttribute("data",i)
        div.appendChild(element)

        
    }
    div.appendChild(createAddProject())
    newProjectListener()
}
//clear an element
function clear(elementName){
    const content = document.getElementById(elementName)
     while(content.firstChild){
        content.removeChild(content.firstChild);
}
}
//when a project is clicked it changes the project in display
function CreateEventListeners(projects){
    let projectItems = document.getElementsByClassName("project-item")
    for (let i = 0; i < projectItems.length; i++) {
        projectItems[i].addEventListener("click",function(e){
            e.stopPropagation()
            let index = projectItems[i].getAttribute("data")
            toogleOld()
            projectItems[i].classList.toggle("selected")
            clear("display")
            createDisplay(projects[index])
            
            

        })
        
        
    }

}
//remove marked from the oldest one(project)
function toogleOld(){
    const items = document.getElementsByClassName("project-item")
    const addProjectDiv = document.getElementById("add-project")
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("selected")){
            items[i].classList.toggle("selected")
            return
        }
        
    }
    if(addProjectDiv.classList.contains("selected")){
        addProjectDiv.classList.toggle("selected")
        const element = document.getElementById("expand")
        element.classList.toggle("hidden")
        addProjectDiv.style.background = "#FFFFFF"
    }
}
//listens for a add task click, calls the form and create new task
function taskListener(project){
    const button = document.getElementById("add-button")
    const display = document.getElementById("display")
    button.addEventListener("click",function(e){
        e.stopPropagation()
        display.appendChild(createForm())
        createNewTask(project)
    })
}
//turns data from the form into a new todo object
function createNewTask(project){
    const button = document.getElementById("submit")
    const form = document.getElementById("add-task-form")
    button.addEventListener("click",(e) => {
        e.preventDefault()
        const formData = new FormData(form)
        let newToDo = (0,_toDo__WEBPACK_IMPORTED_MODULE_1__.createToDo)(formData.get("title"),formData.get("description"),formData.get("dueDate"),formData.get("priority")) 
        project.add(newToDo)
        if(project.name !== "inbox"){
            _index_js__WEBPACK_IMPORTED_MODULE_2__.projects[0].add(newToDo)
        }
        form.reset()
        clear("display")
        createDisplay(project)
    })

    
}
//create the form to get tittle,description,duedate and priority
function createForm(){
    const form = document.createElement("form")
    form.setAttribute("id","add-task-form")
    let title = document.createElement("input")
    title.setAttribute("type", "text")
    title.setAttribute("name", "title")
    title.required= true
    form.appendChild(createLabel("Title:",title))
    form.appendChild(document.createElement("br"))

    //create and add description input
    let description = document.createElement("TEXTAREA")
    description.setAttribute("type", "text")
    description.setAttribute("name", "description")
    form.appendChild(createLabel("Description:",description,true))
    form.appendChild(document.createElement("br"))
    //create and add due date input
    let dueDate = document.createElement("input")
    dueDate.setAttribute("type", "date")
    dueDate.setAttribute("name", "dueDate")
    dueDate.required = true
    form.appendChild(createLabel("Due date:",dueDate))
    form.appendChild(document.createElement("br"))
    //creates select element for priority
    let priority = document.createElement("select")
    priority.setAttribute("id","priority")
    priority.setAttribute("name", "priority")
    let low = new Option('low','low')
    let medium = new Option('medium','medium')
    let high = new Option("high","high")
    priority.add(low,undefined)
    priority.add(medium)
    priority.add(high)
    form.appendChild(createLabel("Priority:",priority))
    let button = document.createElement("button")
    button.type = "submit"
    button.id = "submit"
    button.innerText= "submit"
    form.appendChild(document.createElement("br"))
    form.appendChild(button)
    return form

}
//creates a label 
function createLabel(text,input,lineBreak = false){
    let label = document.createElement("label")
    let labelText = document.createTextNode(text)
    label.appendChild(labelText)
    if(lineBreak){
        label.appendChild(document.createElement("br"))
    }
    label.appendChild(input)
    return label
}
//creates the div with add project function
function createAddProject(){
    
    let div = document.createElement("div")
    div.innerText= "add project +"
    div.id = "add-project"
    div.appendChild(expandAdd())
    return div
}

//sets a event listener for the submit button and creates a new project/ reloads projects sidebar
function addProject(){
    const btn = document.getElementById("add-project-btn")
    btn.addEventListener("click", (e) =>{
        e.preventDefault()
        const name = document.getElementById("project-name").value
        _index_js__WEBPACK_IMPORTED_MODULE_2__.projects.push((0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_3__.createProject)(name))  
        clear("projects")
        loadProjects(_index_js__WEBPACK_IMPORTED_MODULE_2__.projects)
        CreateEventListeners(_index_js__WEBPACK_IMPORTED_MODULE_2__.projects)
    })
}
//returns a div with a form to grab a new project name
function expandAdd(){
    let input = document.createElement("input")
    let btn = document.createElement("button")
    let div = document.createElement("div")
    btn.type="submit"
    btn.innerText = "add"
    btn.id = "add-project-btn"
    input.setAttribute("type", "text")
    input.setAttribute("name", "projectName")
    input.id = "project-name"
    div.appendChild(createLabel("name",input,true))
    div.appendChild(btn)
    div.id = "expand"
    div.classList.add("hidden")
    return div
}
function newProjectListener(){
    const btn = document.getElementById("add-project")

    btn.addEventListener("click",(e) => {
        e.stopPropagation()
        toogleOld()
        clear("display")
        btn.classList.toggle("selected")
        btn.style.background = "#757575"
        const aux = document.getElementById("expand")
        aux.classList.toggle("hidden")
        addProject()  
        
    })
    
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo.js */ "./src/toDo.js");
/* harmony import */ var _domHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler.js */ "./src/domHandler.js");
/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectHandler.js */ "./src/projectHandler.js");




let inbox = (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_3__.createProject)("inbox")
let week = (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_3__.createProject)("week")
let code = (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_3__.createProject)("code")
let projects = [inbox,week,code]
let novaTarefa = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("programar","resolver os exercicios do odin project","25/09/2022","high")
let novaTarefa2 = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("cortar cabelo","ir ate o batata e cortar o cabelo","25/10/2022","low")
let novaTarefa3 = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_1__.createToDo)("lavar louca","lavar as loucas depois da janta ","29/10/2022","medium")




week.add(novaTarefa2)
code.add(novaTarefa)
projects[1].add(novaTarefa3)


;(0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_3__.grabInbox)(projects)
;(0,_domHandler_js__WEBPACK_IMPORTED_MODULE_2__.loadProjects)(projects)
;(0,_domHandler_js__WEBPACK_IMPORTED_MODULE_2__.CreateEventListeners)(projects)



/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "grabInbox": () => (/* binding */ grabInbox)
/* harmony export */ });
// sets a object with the projects name and an array for the todo objects
function createProject(name){
    let project = []
    return {name,
        project,
        add(todo){
            project.push(todo)
        },
        remove(todo){
            let index = project.indexOf(todo)
            if(index > -1 ){
                project.splice(index,1)
            }
        }
    }
}
// gets all tasks and put in a single list/project
function grabInbox(projects){
    for (let i = 1; i < projects.length; i++) {
        for (let j = 0; j < projects[i].project.length; j++) {
            projects[0].add(projects[i].project[j])    
        }
        
        
    }
}

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDo": () => (/* binding */ createToDo)
/* harmony export */ });
const createToDo = (title,description,dueDate,priority) =>{
    
    return{title,
        description,
        dueDate,
        priority,
        isDone:false,
        toogle(){
            this.isDone = !this.isDone
        },
        setPriority(newPriority){
            this.priority =newPriority
        }
    }

}

/***/ }),

/***/ "./src/plus.svg":
/*!**********************!*\
  !*** ./src/plus.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acd706bb7996e978e38f.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1hcXVhOiAjMDBCM0JCO1xcclxcbiAgICAtLWxpZ2h0LWFxdWE6ICMwMEU2QUE7XFxyXFxuICAgIC0tZGFyay1hcXVhOiAjMEU5QUExO1xcclxcbiAgICAtLWdyZXk6ICNFNkU2RTY7XFxyXFxuICAgIC0tbGlnaHQtZ3JleTogI0Y3RjdGNztcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxyXFxuICAgIC0tZ3JlZW46ICM2MUI4NzQ7XFxyXFxuICAgIC0teWVsbG93OiAjRTZEQjdCO1xcclxcbiAgICAtLXJlZDogI0U2N0I3QjtcXHJcXG4gICAgLS1kYXJrLXJlZDogI0M0NjE2MTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFxdWEpO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG4ubWFpbntcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMS41ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGRpc3BsYXlcXFwiXFxyXFxufVxcclxcbiNkaXNwbGF5e1xcclxcbiAgICBncmlkLWFyZWE6ZGlzcGxheTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG4jcHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXHJcXG5cXHJcXG59XFxyXFxuLnByb2plY3QtaXRlbXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi50YXNrLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFza3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRvbmV7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXFxyXFxufVxcclxcbi8qIC50YXNre1xcclxcbiAgICBcXHJcXG59ICovXFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIGhlaWdodDogMTMycHg7XFxyXFxuICAgIHdpZHRoOiAyNDdweDtcXHJcXG59XFxyXFxuLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuI2FkZC1wcm9qZWN0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0FBRUY7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQjs7O0FBR0o7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQzs7QUFFdkM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWFxdWE6ICMwMEIzQkI7XFxyXFxuICAgIC0tbGlnaHQtYXF1YTogIzAwRTZBQTtcXHJcXG4gICAgLS1kYXJrLWFxdWE6ICMwRTlBQTE7XFxyXFxuICAgIC0tZ3JleTogI0U2RTZFNjtcXHJcXG4gICAgLS1saWdodC1ncmV5OiAjRjdGN0Y3O1xcclxcbiAgICAtLWRhcmstZ3JleTogIzc1NzU3NTtcXHJcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXHJcXG4gICAgLS1ncmVlbjogIzYxQjg3NDtcXHJcXG4gICAgLS15ZWxsb3c6ICNFNkRCN0I7XFxyXFxuICAgIC0tcmVkOiAjRTY3QjdCO1xcclxcbiAgICAtLWRhcmstcmVkOiAjQzQ2MTYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYXF1YSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcbi5tYWlue1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAxLjVmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcInNpZGViYXIgZGlzcGxheVxcXCJcXHJcXG59XFxyXFxuI2Rpc3BsYXl7XFxyXFxuICAgIGdyaWQtYXJlYTpkaXNwbGF5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcbiNwcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcclxcblxcclxcbn1cXHJcXG4ucHJvamVjdC1pdGVte1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLnRhc2stdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNre1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZG9uZXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2hcXHJcXG59XFxyXFxuLyogLnRhc2t7XFxyXFxuICAgIFxcclxcbn0gKi9cXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgaGVpZ2h0OiAxMzJweDtcXHJcXG4gICAgd2lkdGg6IDI0N3B4O1xcclxcbn1cXHJcXG4uaGlkZGVue1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4jYWRkLXByb2plY3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHB1dCB0aGUgdGFza3MgaW50byBkaXNwbGF5XHJcbmltcG9ydCBwbHVzIGZyb20gXCIuL3BsdXMuc3ZnXCJcclxuaW1wb3J0IHsgY3JlYXRlVG9EbyB9IGZyb20gXCIuL3RvRG9cIlxyXG5pbXBvcnQgeyBwcm9qZWN0cyBhcyBhcnJheU9mUHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0SGFuZGxlci5qc1wiXHJcbi8vcG9wdWxhdGVzIHRoZSAjZGlzcGxheSBcclxuZnVuY3Rpb24gY3JlYXRlRGlzcGxheShjdXJyZW50UHJvamVjdCl7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpXHJcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKGN1cnJlbnRQcm9qZWN0KSlcclxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVGFzaygpKVxyXG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrcyhjdXJyZW50UHJvamVjdCkpXHJcbiAgICB0YXNrTGlzdGVuZXIoY3VycmVudFByb2plY3QpXHJcbiAgICBsaXN0ZW5Gb3JEb25lKGN1cnJlbnRQcm9qZWN0KVxyXG5cclxuICAgIFxyXG5cclxuXHJcbn1cclxuLy9jcmVhdGUgZGl2IHdpdGggdGl0bGUgb2YgcHJvamVjdHMgbmFtZVxyXG5mdW5jdGlvbiBjcmVhdGVUaXRsZShjdXJyZW50UHJvamVjdCl7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKVxyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3QubmFtZVxyXG4gICAgcmV0dXJuIHRpdGxlXHJcbn1cclxuLy9jcmVhdGVzIGEgZGl2IHdpdGggdGhlIGN1cnJlbnQgcHJvamVjdCBUb2RvcyBpbiBkaXNwbGF5XHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzKGN1cnJlbnRQcm9qZWN0KXtcclxuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0YXNrc1wiKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC5wcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtjdXJyZW50UHJvamVjdC5wcm9qZWN0W2ldLnRpdGxlfSBkdWUgZGF0ZToke2N1cnJlbnRQcm9qZWN0LnByb2plY3RbaV0uZHVlRGF0ZX1gKVxyXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgIGlucHV0LnR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dClcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsaSlcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsaSlcclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChsYWJlbClcclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIGlmKGN1cnJlbnRQcm9qZWN0LnByb2plY3RbaV0uaXNEb25lKXtcclxuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImRvbmVcIilcclxuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZD10cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhc2tzXHJcbn1cclxuLy9zZXQgZXZlbnQgbGlzdGVuZXIgZm9yIGEgdGFzayB0byBjaGVjayBpZiBpdHMgYmVlbiBtYXJrZWQgYXMgZG9uZSwgYW5kIGlmIHNvIGl0IGNoYW5nZXMgdGhlIHRhc2sgdG8gYmUgbGluZXRocm91Z2ggXHJcbmZ1bmN0aW9uIGxpc3RlbkZvckRvbmUoY3VycmVudFRhc2tMaXN0KXtcclxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XHJcbiAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIilcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YXNrc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tzW2ldLmdldEF0dHJpYnV0ZShcImRhdGFcIilcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tMaXN0LnByb2plY3RbaW5kZXhdLmlzRG9uZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZShcImRvbmVcIilcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tMaXN0LnByb2plY3RbaW5kZXhdLmlzRG9uZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoXCJkb25lXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4vL2NyZWF0ZXMgdGhlIGRpdiB3aXRoIGFkZCBuZXcgdGFzayBidXR0b25cclxuZnVuY3Rpb24gY3JlYXRlQWRkVGFzaygpe1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBwbHVzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgcGx1c0ltZy5zcmM9cGx1c1xyXG4gICAgcGx1c0ltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWRkLWJ1dHRvblwiKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHBsdXNJbWcpXHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiYWRkIGEgbmV3IHRhc2tcIilcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIilcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KVxyXG4gICAgcmV0dXJuIGRpdlxyXG59XHJcbi8vIGxvYWRzIHRoZSBwcm9qZWN0cyBpbiBhIHNpZGUgYmFyXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMocHJvamVjdHMpe1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIilcclxuICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3RzW2ldLm5hbWVcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGFcIixpKVxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qZWN0KCkpXHJcbiAgICBuZXdQcm9qZWN0TGlzdGVuZXIoKVxyXG59XHJcbi8vY2xlYXIgYW4gZWxlbWVudFxyXG5mdW5jdGlvbiBjbGVhcihlbGVtZW50TmFtZSl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudE5hbWUpXHJcbiAgICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKXtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbn1cclxufVxyXG4vL3doZW4gYSBwcm9qZWN0IGlzIGNsaWNrZWQgaXQgY2hhbmdlcyB0aGUgcHJvamVjdCBpbiBkaXNwbGF5XHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFdmVudExpc3RlbmVycyhwcm9qZWN0cyl7XHJcbiAgICBsZXQgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtaXRlbVwiKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwcm9qZWN0SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdEl0ZW1zW2ldLmdldEF0dHJpYnV0ZShcImRhdGFcIilcclxuICAgICAgICAgICAgdG9vZ2xlT2xkKClcclxuICAgICAgICAgICAgcHJvamVjdEl0ZW1zW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKVxyXG4gICAgICAgICAgICBjbGVhcihcImRpc3BsYXlcIilcclxuICAgICAgICAgICAgY3JlYXRlRGlzcGxheShwcm9qZWN0c1tpbmRleF0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuLy9yZW1vdmUgbWFya2VkIGZyb20gdGhlIG9sZGVzdCBvbmUocHJvamVjdClcclxuZnVuY3Rpb24gdG9vZ2xlT2xkKCl7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWl0ZW1cIilcclxuICAgIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1zW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKXtcclxuICAgICAgICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGlmKGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpe1xyXG4gICAgICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwYW5kXCIpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXHJcbiAgICAgICAgYWRkUHJvamVjdERpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjRkZGRkZGXCJcclxuICAgIH1cclxufVxyXG4vL2xpc3RlbnMgZm9yIGEgYWRkIHRhc2sgY2xpY2ssIGNhbGxzIHRoZSBmb3JtIGFuZCBjcmVhdGUgbmV3IHRhc2tcclxuZnVuY3Rpb24gdGFza0xpc3RlbmVyKHByb2plY3Qpe1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtYnV0dG9uXCIpXHJcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKVxyXG4gICAgICAgIGNyZWF0ZU5ld1Rhc2socHJvamVjdClcclxuICAgIH0pXHJcbn1cclxuLy90dXJucyBkYXRhIGZyb20gdGhlIGZvcm0gaW50byBhIG5ldyB0b2RvIG9iamVjdFxyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKHByb2plY3Qpe1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIilcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWZvcm1cIilcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSBjcmVhdGVUb0RvKGZvcm1EYXRhLmdldChcInRpdGxlXCIpLGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLGZvcm1EYXRhLmdldChcImR1ZURhdGVcIiksZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikpIFxyXG4gICAgICAgIHByb2plY3QuYWRkKG5ld1RvRG8pXHJcbiAgICAgICAgaWYocHJvamVjdC5uYW1lICE9PSBcImluYm94XCIpe1xyXG4gICAgICAgICAgICBhcnJheU9mUHJvamVjdHNbMF0uYWRkKG5ld1RvRG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ucmVzZXQoKVxyXG4gICAgICAgIGNsZWFyKFwiZGlzcGxheVwiKVxyXG4gICAgICAgIGNyZWF0ZURpc3BsYXkocHJvamVjdClcclxuICAgIH0pXHJcblxyXG4gICAgXHJcbn1cclxuLy9jcmVhdGUgdGhlIGZvcm0gdG8gZ2V0IHRpdHRsZSxkZXNjcmlwdGlvbixkdWVkYXRlIGFuZCBwcmlvcml0eVxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCl7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIixcImFkZC10YXNrLWZvcm1cIilcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKVxyXG4gICAgdGl0bGUucmVxdWlyZWQ9IHRydWVcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoXCJUaXRsZTpcIix0aXRsZSkpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcclxuXHJcbiAgICAvL2NyZWF0ZSBhbmQgYWRkIGRlc2NyaXB0aW9uIGlucHV0XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEVYVEFSRUFcIilcclxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIilcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoXCJEZXNjcmlwdGlvbjpcIixkZXNjcmlwdGlvbix0cnVlKSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKVxyXG4gICAgLy9jcmVhdGUgYW5kIGFkZCBkdWUgZGF0ZSBpbnB1dFxyXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcclxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIilcclxuICAgIGR1ZURhdGUucmVxdWlyZWQgPSB0cnVlXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKFwiRHVlIGRhdGU6XCIsZHVlRGF0ZSkpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcclxuICAgIC8vY3JlYXRlcyBzZWxlY3QgZWxlbWVudCBmb3IgcHJpb3JpdHlcclxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcmlvcml0eVwiKVxyXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgICBsZXQgbG93ID0gbmV3IE9wdGlvbignbG93JywnbG93JylcclxuICAgIGxldCBtZWRpdW0gPSBuZXcgT3B0aW9uKCdtZWRpdW0nLCdtZWRpdW0nKVxyXG4gICAgbGV0IGhpZ2ggPSBuZXcgT3B0aW9uKFwiaGlnaFwiLFwiaGlnaFwiKVxyXG4gICAgcHJpb3JpdHkuYWRkKGxvdyx1bmRlZmluZWQpXHJcbiAgICBwcmlvcml0eS5hZGQobWVkaXVtKVxyXG4gICAgcHJpb3JpdHkuYWRkKGhpZ2gpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKFwiUHJpb3JpdHk6XCIscHJpb3JpdHkpKVxyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIlxyXG4gICAgYnV0dG9uLmlkID0gXCJzdWJtaXRcIlxyXG4gICAgYnV0dG9uLmlubmVyVGV4dD0gXCJzdWJtaXRcIlxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIHJldHVybiBmb3JtXHJcblxyXG59XHJcbi8vY3JlYXRlcyBhIGxhYmVsIFxyXG5mdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0LGlucHV0LGxpbmVCcmVhayA9IGZhbHNlKXtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGV0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXHJcbiAgICBpZihsaW5lQnJlYWspe1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcclxuICAgIH1cclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxyXG4gICAgcmV0dXJuIGxhYmVsXHJcbn1cclxuLy9jcmVhdGVzIHRoZSBkaXYgd2l0aCBhZGQgcHJvamVjdCBmdW5jdGlvblxyXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0KCl7XHJcbiAgICBcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBkaXYuaW5uZXJUZXh0PSBcImFkZCBwcm9qZWN0ICtcIlxyXG4gICAgZGl2LmlkID0gXCJhZGQtcHJvamVjdFwiXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kQWRkKCkpXHJcbiAgICByZXR1cm4gZGl2XHJcbn1cclxuXHJcbi8vc2V0cyBhIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3VibWl0IGJ1dHRvbiBhbmQgY3JlYXRlcyBhIG5ldyBwcm9qZWN0LyByZWxvYWRzIHByb2plY3RzIHNpZGViYXJcclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIilcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZVxyXG4gICAgICAgIGFycmF5T2ZQcm9qZWN0cy5wdXNoKGNyZWF0ZVByb2plY3QobmFtZSkpICBcclxuICAgICAgICBjbGVhcihcInByb2plY3RzXCIpXHJcbiAgICAgICAgbG9hZFByb2plY3RzKGFycmF5T2ZQcm9qZWN0cylcclxuICAgICAgICBDcmVhdGVFdmVudExpc3RlbmVycyhhcnJheU9mUHJvamVjdHMpXHJcbiAgICB9KVxyXG59XHJcbi8vcmV0dXJucyBhIGRpdiB3aXRoIGEgZm9ybSB0byBncmFiIGEgbmV3IHByb2plY3QgbmFtZVxyXG5mdW5jdGlvbiBleHBhbmRBZGQoKXtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBidG4udHlwZT1cInN1Ym1pdFwiXHJcbiAgICBidG4uaW5uZXJUZXh0ID0gXCJhZGRcIlxyXG4gICAgYnRuLmlkID0gXCJhZGQtcHJvamVjdC1idG5cIlxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0TmFtZVwiKVxyXG4gICAgaW5wdXQuaWQgPSBcInByb2plY3QtbmFtZVwiXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoXCJuYW1lXCIsaW5wdXQsdHJ1ZSkpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgZGl2LmlkID0gXCJleHBhbmRcIlxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgIHJldHVybiBkaXZcclxufVxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0TGlzdGVuZXIoKXtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIilcclxuXHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgdG9vZ2xlT2xkKClcclxuICAgICAgICBjbGVhcihcImRpc3BsYXlcIilcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpXHJcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiM3NTc1NzVcIlxyXG4gICAgICAgIGNvbnN0IGF1eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwYW5kXCIpXHJcbiAgICAgICAgYXV4LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcclxuICAgICAgICBhZGRQcm9qZWN0KCkgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG59XHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IHtjcmVhdGVUb0RvfSBmcm9tXCIuL3RvRG8uanNcIlxyXG5pbXBvcnQge2xvYWRQcm9qZWN0cywgQ3JlYXRlRXZlbnRMaXN0ZW5lcnN9IGZyb20gXCIuL2RvbUhhbmRsZXIuanNcIlxyXG5pbXBvcnQge2NyZWF0ZVByb2plY3QsIGdyYWJJbmJveH0gZnJvbSBcIi4vcHJvamVjdEhhbmRsZXIuanNcIlxyXG5sZXQgaW5ib3ggPSBjcmVhdGVQcm9qZWN0KFwiaW5ib3hcIilcclxubGV0IHdlZWsgPSBjcmVhdGVQcm9qZWN0KFwid2Vla1wiKVxyXG5sZXQgY29kZSA9IGNyZWF0ZVByb2plY3QoXCJjb2RlXCIpXHJcbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbaW5ib3gsd2Vlayxjb2RlXVxyXG5sZXQgbm92YVRhcmVmYSA9IGNyZWF0ZVRvRG8oXCJwcm9ncmFtYXJcIixcInJlc29sdmVyIG9zIGV4ZXJjaWNpb3MgZG8gb2RpbiBwcm9qZWN0XCIsXCIyNS8wOS8yMDIyXCIsXCJoaWdoXCIpXHJcbmxldCBub3ZhVGFyZWZhMiA9IGNyZWF0ZVRvRG8oXCJjb3J0YXIgY2FiZWxvXCIsXCJpciBhdGUgbyBiYXRhdGEgZSBjb3J0YXIgbyBjYWJlbG9cIixcIjI1LzEwLzIwMjJcIixcImxvd1wiKVxyXG5sZXQgbm92YVRhcmVmYTMgPSBjcmVhdGVUb0RvKFwibGF2YXIgbG91Y2FcIixcImxhdmFyIGFzIGxvdWNhcyBkZXBvaXMgZGEgamFudGEgXCIsXCIyOS8xMC8yMDIyXCIsXCJtZWRpdW1cIilcclxuXHJcblxyXG5cclxuXHJcbndlZWsuYWRkKG5vdmFUYXJlZmEyKVxyXG5jb2RlLmFkZChub3ZhVGFyZWZhKVxyXG5wcm9qZWN0c1sxXS5hZGQobm92YVRhcmVmYTMpXHJcblxyXG5cclxuZ3JhYkluYm94KHByb2plY3RzKVxyXG5sb2FkUHJvamVjdHMocHJvamVjdHMpXHJcbkNyZWF0ZUV2ZW50TGlzdGVuZXJzKHByb2plY3RzKVxyXG5cclxuIiwiLy8gc2V0cyBhIG9iamVjdCB3aXRoIHRoZSBwcm9qZWN0cyBuYW1lIGFuZCBhbiBhcnJheSBmb3IgdGhlIHRvZG8gb2JqZWN0c1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKXtcclxuICAgIGxldCBwcm9qZWN0ID0gW11cclxuICAgIHJldHVybiB7bmFtZSxcclxuICAgICAgICBwcm9qZWN0LFxyXG4gICAgICAgIGFkZCh0b2RvKXtcclxuICAgICAgICAgICAgcHJvamVjdC5wdXNoKHRvZG8pXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmUodG9kbyl7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHByb2plY3QuaW5kZXhPZih0b2RvKVxyXG4gICAgICAgICAgICBpZihpbmRleCA+IC0xICl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGdldHMgYWxsIHRhc2tzIGFuZCBwdXQgaW4gYSBzaW5nbGUgbGlzdC9wcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBncmFiSW5ib3gocHJvamVjdHMpe1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbaV0ucHJvamVjdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBwcm9qZWN0c1swXS5hZGQocHJvamVjdHNbaV0ucHJvamVjdFtqXSkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRvRG8gPSAodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSkgPT57XHJcbiAgICBcclxuICAgIHJldHVybnt0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGlzRG9uZTpmYWxzZSxcclxuICAgICAgICB0b29nbGUoKXtcclxuICAgICAgICAgICAgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KXtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9bmV3UHJpb3JpdHlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9