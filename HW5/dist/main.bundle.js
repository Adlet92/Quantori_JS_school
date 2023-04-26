/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Nunito';\\r\\n}\\r\\nbody{\\r\\n    height: 100vh;\\r\\n}\\r\\n.container {\\r\\n    width: 100%;\\r\\n    min-height: 100vh;\\r\\n    padding: 10px;\\r\\n}\\r\\n.todo-app {\\r\\n    width: 71.6%;\\r\\n    background: #fff;\\r\\n    margin: 44px 164px 278px 165px;\\r\\n    padding: 0px 0px 0px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.todo-app h2 {\\r\\n    color: #1D1D1D;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-bottom: 44px;\\r\\n    font-size: 32px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n.header-elements {\\r\\n    display: inline-flex;\\r\\n}\\r\\n.temp {\\r\\n    font-size: 18px;\\r\\n    font-weight: 700;\\r\\n    margin-left: 23.15px;\\r\\n    margin-top: 9.75px;\\r\\n    width: 63.95px;\\r\\n    height: 19.5px;\\r\\n}\\r\\n.weather-icon {\\r\\n    width: 57px;\\r\\n    height: 44px;\\r\\n    margin-left: 471px;\\r\\n}\\r\\n.city-name {\\r\\n    font-weight: 500;\\r\\n    font-size: 18px;\\r\\n    color: #838383;\\r\\n    margin-left: 83.75px;\\r\\n    margin-top: 9.75px;\\r\\n}\\r\\n.search-wrapper{\\r\\n    display: flex;\\r\\n    height: 52px;\\r\\n    width: 100%;\\r\\n    margin: 42px 0;\\r\\n}\\r\\n.search-wrapper input {\\r\\n    width: 79%;\\r\\n    height: 100%;\\r\\n    border: 1px solid #D2D2D2;\\r\\n    background: #F5F5F5;\\r\\n    font-size: 16px;\\r\\n    font-weight: 500;\\r\\n    border-radius: 12px;\\r\\n    padding: 16px 21px;\\r\\n    gap: 10px;\\r\\n}\\r\\n.search-wrapper button {\\r\\n    width: 16.7%;\\r\\n    height: 100%;\\r\\n    border: none;\\r\\n    background: rgba(60, 134, 244, 0.15);\\r\\n    color: rgba(0, 83, 207, 1);\\r\\n    font-size: 16px;\\r\\n    font-weight: 800;\\r\\n    cursor: pointer;\\r\\n    border-radius: 12px;\\r\\n    margin-left: 39.9px;\\r\\n}\\r\\nh3 {\\r\\n    font-size: 24px;\\r\\n    font-weight: 700;\\r\\n    line-height: 32.74px;\\r\\n    color: #000000;\\r\\n    margin-bottom: 24px;\\r\\n}\\r\\n.Completed h3{\\r\\n    margin-top: 40px;\\r\\n}\\r\\nol {\\r\\n    list-style: none;\\r\\n}\\r\\nol li {\\r\\n    width: 50.7%;\\r\\n    padding: 8px 12px;\\r\\n    font-size: 18px;\\r\\n    font-weight: 400;\\r\\n}\\r\\ninput[type=\\\"checkbox\\\"]{\\r\\n    height: 21px;\\r\\n    width: 21px;\\r\\n    margin-right: 20px;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n.Completed .compl{\\r\\n    color: #D3D3D3;\\r\\n}\\r\\n.deleteIcon {\\r\\n    float: right;\\r\\n    color: #000000;\\r\\n    cursor: pointer;\\r\\n    background-color: #fff;\\r\\n    border-color: transparent;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n    position: fixed;\\r\\n    z-index: 1;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    overflow: auto;\\r\\n    background-color: rgb(0,0,0);\\r\\n    background-color: rgba(0,0,0, 0.4);\\r\\n}\\r\\n.close {\\r\\n    width: 49.5%;\\r\\n    height: 52px;\\r\\n    color: #0053CF;\\r\\n    background: transparent;\\r\\n    border: transparent;\\r\\n    cursor: pointer;\\r\\n    font-size: 16px;\\r\\n    font-weight: 800;\\r\\n    margin-left: auto;\\r\\n    padding: 16px 32px;\\r\\n}\\r\\n.addTask2 {\\r\\n    width: 49.5%;\\r\\n    height: 52px;\\r\\n    cursor: pointer;\\r\\n    color: #ffffff;\\r\\n    background-color: #D3D3D3;\\r\\n    border: transparent;\\r\\n    font-size: 16px;\\r\\n    font-weight: 800;\\r\\n    margin-left: auto;\\r\\n    padding: 16px 32px;\\r\\n    border-radius: 12px;\\r\\n}\\r\\n.popup-header {\\r\\n    background-color: #fff;\\r\\n    color: #000000;\\r\\n    display: flex;\\r\\n    padding: 2px 16px;\\r\\n}\\r\\n.popup-header h2{\\r\\n    margin: auto;\\r\\n    margin-top: 24px;\\r\\n}\\r\\n.popup-body {\\r\\n    /* display: flex; */\\r\\n    justify-content: center;\\r\\n    padding: 16px 21px;\\r\\n    padding-right: 27px;\\r\\n    padding-left: 32px;\\r\\n    margin-bottom: 150px;\\r\\n    margin-top: 38px;\\r\\n}\\r\\n.container-date-options {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    margin-top: 18px;\\r\\n  }\\r\\n  .option{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n  .health,\\r\\n  .work,\\r\\n  .home,\\r\\n  .other {\\r\\n    font-family: \\\"Inter\\\";\\r\\n    font-weight: 500;\\r\\n    font-size: 12px;\\r\\n    line-height: 15px;\\r\\n    border-radius: 6px;\\r\\n    margin-right: 12px;\\r\\n    padding: 2px 8px;\\r\\n    text-align: center;\\r\\n    width: 52px;\\r\\n    height: 19px;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  .health {\\r\\n    background-color: rgba(60, 134, 244, 0.31);\\r\\n    color: #0053CF;\\r\\n  }\\r\\n  .work {\\r\\n    background-color: #E8D7FF;\\r\\n    color: #9747FF;\\r\\n  }\\r\\n  .home {\\r\\n    background-color: #E2F7E2;\\r\\n    color: #639462;\\r\\n  }\\r\\n  .other {\\r\\n    background-color: #FFECC7;\\r\\n    color: #EA8C00;\\r\\n  }\\r\\n  .calendar {\\r\\n    width: 117px;\\r\\n    height: 40px;\\r\\n    font-weight: 500;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n    background: #ffffff;\\r\\n    border: 2px solid rgba(60, 134, 244, 0.6);\\r\\n    border-radius: 12px;\\r\\n    padding: 10px 16px;\\r\\n  }\\r\\n/* .popup-body .date{\\r\\n    height: 40px;\\r\\n    width: 117px;\\r\\n    margin-top: 18px;\\r\\n    margin-left: 348px;\\r\\n} */\\r\\n/* .popup-body .calendar{\\r\\n    font-size: 15px;\\r\\n    font-weight: 500;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    border: 2px solid rgba(60, 134, 244, 0.6);\\r\\n    background: #FFFFFF;\\r\\n    border-radius: 12px;\\r\\n    padding: 10px 16px;\\r\\n} */\\r\\n\\r\\n.popup-body .title-task {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    border: 1px solid #D2D2D2;\\r\\n    background: #F5F5F5;\\r\\n    font-size: 17px;\\r\\n    border-radius: 12px;\\r\\n    padding: 16px 21px;\\r\\n    gap: 10px;\\r\\n}\\r\\n.popup-footer {\\r\\n    color: white;\\r\\n    padding-right: 27px;\\r\\n    padding-left: 32px;\\r\\n}\\r\\n.popup-content{\\r\\n    position: relative;\\r\\n    background-color: #fefefe;\\r\\n    margin: 100px auto 20px;\\r\\n    padding: 24px 30px 22px;\\r\\n    border-radius: 24px;\\r\\n    width: 43.3%;\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n    animation-name: animatetop;\\r\\n    animation-duration: 0.4s;\\r\\n}\\r\\n@keyframes animatetop {\\r\\n    from {\\r\\n        top: -300px;\\r\\n        opacity: 0;\\r\\n    }\\r\\n    to {\\r\\n        top: 0;\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\\r\\n/* The Modal (background) */\\r\\n.modal {\\r\\n    display: none; \\r\\n    position: fixed;\\r\\n    z-index: 1;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    overflow: auto;\\r\\n    background-color: rgb(0,0,0);\\r\\n    background-color: rgba(0,0,0, 0.4);\\r\\n  }\\r\\n  \\r\\n  .closeModal {\\r\\n    background: #3C86F4;\\r\\n    border-color: transparent;\\r\\n    font-style: normal;\\r\\n    font-weight: 800;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n    color: #FFFFFF;\\r\\n}\\r\\n.modal-header {\\r\\n    background-color: #fff;\\r\\n    color: #000000;\\r\\n    display: flex;\\r\\n    padding: 2px 16px;\\r\\n    margin-top: 24px;\\r\\n}\\r\\n.modal-header h2{\\r\\n    margin: auto;\\r\\n    font-style: normal;\\r\\n    font-weight: 700;\\r\\n    font-size: 24px;\\r\\n    line-height: 33px;\\r\\n}\\r\\n.modal-body {\\r\\n    /* display: flex; */\\r\\n    justify-content: center;\\r\\n    padding: 16px 21px;\\r\\n    padding-right: 27px;\\r\\n    padding-left: 32px;\\r\\n    margin-bottom: 97px;\\r\\n    margin-top: 15px;\\r\\n}\\r\\n.modal-body h3{\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n    padding-left: 32px;\\r\\n    margin-bottom: 9px;\\r\\n}\\r\\n.modal-body ul{\\r\\n    height: 130px;\\r\\n    overflow: auto;\\r\\n}\\r\\n.modal-body li{\\r\\n    font-style: normal;\\r\\n    font-weight: 400;\\r\\n    font-size: 16px;\\r\\n    line-height: 22px;\\r\\n    list-style: none;\\r\\n    padding-left: 56px;\\r\\n}\\r\\n.modal-footer {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: flex-end;\\r\\n    padding: 16px 32px;\\r\\n    gap: 10px;\\r\\n\\r\\n    width: 465px;\\r\\n    height: 52px;\\r\\n\\r\\n    background: #3C86F4;\\r\\n    border-radius: 12px;\\r\\n    flex: none;\\r\\n    order: 0;\\r\\n    flex-grow: 1;\\r\\n}\\r\\n.modal-content{\\r\\n    position: relative;\\r\\n    min-height: 350px;\\r\\n    max-height: 500px;\\r\\n    background-color: #fefefe;\\r\\n    margin: 100px auto 20px;\\r\\n    padding: 24px 30px 22px;\\r\\n    border-radius: 24px;\\r\\n    width: 39.4%;\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n    animation-name: animatetop;\\r\\n    animation-duration: 0.4s;\\r\\n}\\r\\n/* @media (min-height: 350px) and (max-height: 500px) {\\r\\n    .modal-content {\\r\\n      font-size: 20px;\\r\\n    }\\r\\n  } */\\r\\n  \", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hw5/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hw5/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hw5/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/Shape.svg":
/*!***************************!*\
  !*** ./src/img/Shape.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"830d58476c6d764578f17b0031b4fb29.svg\");\n\n//# sourceURL=webpack://hw5/./src/img/Shape.svg?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hw5/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hw5/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hw5/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hw5/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hw5/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hw5/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hw5/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _img_Shape_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Shape.svg */ \"./src/img/Shape.svg\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newTask */ \"./src/newTask.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst newTaskButton = document.getElementById('myBtn');\r\n\r\nnewTaskButton.addEventListener(\"click\", function(){\r\n  (0,_newTask__WEBPACK_IMPORTED_MODULE_3__.createAddTaskWindow)();\r\n});\r\n\r\n  async function deleteTodo(id) {\r\n    await fetch(`http://localhost:3000/tasks/${id}`, {\r\n    method: 'DELETE'\r\n    });\r\n\r\n    state.todos = state.todos.filter((todo) => todo.id !== id);\r\n    state.completed = state.completed.filter((todo) => todo.id !== id);\r\n    renderTasks();\r\n  }\r\n\r\n  async function toggleCompletedTodo(id, title, completed, dateValue) {\r\n    const todo = { id, title, completed, dateValue };\r\n    await fetch(`http://localhost:3000/tasks/${id}`, {\r\n      method: 'PUT',\r\n      body: JSON.stringify(todo),\r\n      headers: {\r\n        'Content-Type': 'application/json'\r\n      }\r\n    });\r\n    state.todos = state.todos.filter((t) => t.id !== id);\r\n    state.completed = state.completed.filter((t) => t.id !== id);\r\n\r\n    if (completed) {\r\n      state.completed.push(todo);\r\n    } else {\r\n      state.todos.push(todo);\r\n    }\r\n    renderTasks();\r\n  }\r\n\r\n  const state = {\r\n    todos: [],\r\n    completed: [],\r\n    searchQuery: ''\r\n  };\r\n\r\n  function renderTasks() {\r\n    const todoList = document.getElementById('ntc');\r\n    const completedList = document.getElementById('cmplt');\r\n    \r\n    todoList.innerHTML = '';\r\n    completedList.innerHTML = '';\r\n  \r\n    state.todos.forEach(({ id, title, completed, dateValue}) => {\r\n      if (title.includes(state.searchQuery)) {\r\n\r\n        const li = document.createElement('li');\r\n\r\n        const checkbox = document.createElement('input');\r\n        checkbox.setAttribute('id', `check-${id}`);\r\n        checkbox.setAttribute('type', 'checkbox');\r\n        checkbox.checked = completed;\r\n        checkbox.addEventListener('click', () => {\r\n          toggleCompletedTodo(id, title, !completed, dateValue);\r\n        });\r\n        li.appendChild(checkbox);\r\n\r\n        const label = document.createElement('label');\r\n        label.setAttribute('id', `label-title-${id}`);\r\n        label.classList.add(completed ? 'completed' : '');\r\n        label.textContent = title;\r\n        li.appendChild(label);\r\n\r\n        const button = document.createElement('button');\r\n        button.setAttribute('id', `delete-${id}`);\r\n        button.classList.add('deleteIcon');\r\n        button.addEventListener('click', () => {\r\n          deleteTodo(id);\r\n        });\r\n        const img = document.createElement('img');\r\n        img.setAttribute('src', _img_Shape_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n        button.appendChild(img);\r\n        li.appendChild(button);\r\n\r\n        todoList.appendChild(li);\r\n       \r\n      }\r\n    });\r\n    state.completed.forEach(({ title }) => {\r\n      if (title.includes(state.searchQuery)) {\r\n        const li = document.createElement('li');\r\n\r\n        const checkbox = document.createElement('input');\r\n        checkbox.setAttribute('type', 'checkbox');\r\n        checkbox.checked = true;\r\n        checkbox.disabled = true;\r\n        li.appendChild(checkbox);\r\n\r\n        const label = document.createElement('label');\r\n        label.classList.add('compl');\r\n        label.textContent = title;\r\n        li.appendChild(label);\r\n\r\n        completedList.appendChild(li);\r\n      }\r\n    });\r\n  }\r\n  \r\n  async function getAllTodos() {\r\n    const res = await fetch('http://localhost:3000/tasks', {\r\n    method: 'GET'\r\n    });\r\n    const todos = await res.json();\r\n    todos.forEach((todo) => {\r\n      if (todo.completed) {\r\n        state.completed.push(todo);\r\n      } else {\r\n        state.todos.push(todo);\r\n      }\r\n    });\r\n    renderTasks();\r\n  }\r\n  \r\n  window.addEventListener('DOMContentLoaded', () => {\r\n    getAllTodos();\r\n    (0,_search__WEBPACK_IMPORTED_MODULE_2__.setupSearchBox)(); \r\n  });\r\n  \n\n//# sourceURL=webpack://hw5/./src/index.js?");

/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAddTaskWindow\": () => (/* binding */ createAddTaskWindow)\n/* harmony export */ });\n\r\n  function createAddTaskWindow(){\r\n    const modal = document.createElement('div');\r\n    modal.id = 'add-task-window';\r\n    modal.classList.add('popup');\r\n\r\n    const modalContent = document.createElement('div');\r\n    modalContent.classList.add('popup-content');\r\n\r\n    const modalHeader = document.createElement('div');\r\n    modalHeader.classList.add('popup-header');\r\n\r\n    const headerTitle = document.createElement('h2');\r\n    headerTitle.textContent = 'Add New Task';\r\n\r\n    modalHeader.appendChild(headerTitle);\r\n\r\n    const modalBody = document.createElement('div');\r\n    modalBody.classList.add('popup-body');\r\n\r\n    const taskTitleInput = document.createElement('input');\r\n    taskTitleInput.id = 'task-title';\r\n    taskTitleInput.classList.add('title-task');\r\n    taskTitleInput.type = 'text';\r\n    taskTitleInput.placeholder = 'Task title';\r\n    taskTitleInput.addEventListener('keyup', changeTheColorOfButton);\r\n\r\n    const containerDateOptions = document.createElement('div');\r\n    containerDateOptions.classList.add('container-date-options');\r\n\r\n    const option = document.createElement('div');\r\n    option.classList.add('option');\r\n\r\n    const healthOption = document.createElement('div');\r\n    healthOption.classList.add('option', 'health');\r\n    healthOption.textContent = 'health';\r\n\r\n    const workOption = document.createElement('div');\r\n    workOption.classList.add('option', 'work');\r\n    workOption.textContent = 'work';\r\n\r\n    const homeOption = document.createElement('div');\r\n    homeOption.classList.add('option', 'home');\r\n    homeOption.textContent = 'home';\r\n\r\n    const otherOption = document.createElement('div');\r\n    otherOption.classList.add('option', 'other');\r\n    otherOption.textContent = 'other';\r\n\r\n    option.appendChild(healthOption);\r\n    option.appendChild(workOption);\r\n    option.appendChild(homeOption);\r\n    option.appendChild(otherOption);\r\n\r\n    const dateChooseInput = document.createElement('input');\r\n    dateChooseInput.id = 'date-choose';\r\n    dateChooseInput.classList.add('calendar');\r\n    dateChooseInput.type = 'date';\r\n    const today = new Date().toISOString().split('T')[0];\r\n    dateChooseInput.setAttribute('min', today);\r\n\r\n    containerDateOptions.appendChild(option);\r\n    containerDateOptions.appendChild(dateChooseInput);\r\n\r\n    modalBody.appendChild(taskTitleInput);\r\n    modalBody.appendChild(containerDateOptions);\r\n\r\n    const modalFooter = document.createElement('div');\r\n    modalFooter.classList.add('popup-footer');\r\n\r\n    const closeButton = document.createElement('button');\r\n    closeButton.classList.add('close');\r\n    closeButton.textContent = 'Close';\r\n    closeButton.addEventListener('click', closeAddTaskWindow);\r\n\r\n    const addButton = document.createElement('button');\r\n    addButton.classList.add('addTask2');\r\n    addButton.id = 'task-button';\r\n    addButton.textContent = 'Add Task';\r\n    addButton.addEventListener('click', addItem);\r\n\r\n    modalFooter.appendChild(closeButton);\r\n    modalFooter.appendChild(addButton);\r\n\r\n    modalContent.appendChild(modalHeader);\r\n    modalContent.appendChild(modalBody);\r\n    modalContent.appendChild(modalFooter);\r\n\r\n    modal.appendChild(modalContent);\r\n  \r\n    const existingAddTaskWindow = document.getElementById('add-task-window');\r\n    if (existingAddTaskWindow) {\r\n      existingAddTaskWindow.remove();\r\n    }\r\n    // document.body.insertAdjacentHTML('beforebegin', modalHtml);\r\n    document.body.insertBefore(modal, document.body.firstChild);\r\n\r\n  }\r\n\r\n\r\n  function changeTheColorOfButton() {\r\n    if (document.getElementById(\"task-title\").value !== \"\") {\r\n       document.getElementById(\"task-button\").style.background = \"#3C86F4\";\r\n    } else {\r\n      document.getElementById(\"task-button\").style.background = \"#D3D3D3\";\r\n   }\r\n  }\r\n  function closeAddTaskWindow(){\r\n      const popup = document.getElementById('add-task-window');\r\n      popup.style.display=\"none\";\r\n  }\r\n  async function addItem() {\r\n      const input = document.getElementById('task-title');\r\n      const title = input.value;\r\n      const dateElement = document.getElementById('date-choose');\r\n      const dateValue = dateElement.value;\r\n    \r\n      if (title && dateValue) {\r\n        const todo = {\r\n          title,\r\n          dateValue,\r\n          completed: false\r\n        };\r\n\r\n        const res = await fetch('http://localhost:3000/tasks', {\r\n          method: 'POST',\r\n          // body: JSON.stringify(todo),\r\n          headers: {\r\n            'Content-Type': 'application/json'\r\n          },\r\n          body: JSON.stringify(todo)\r\n        });\r\n        \r\n        const createdTodo = await res.json();\r\n        state.todos.push(createdTodo);\r\n        // state.todos.push(todo);\r\n    \r\n        input.value = '';\r\n        closeAddTaskWindow();\r\n        renderTasks();\r\n      }\r\n    }\r\n  \n\n//# sourceURL=webpack://hw5/./src/newTask.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupSearchBox\": () => (/* binding */ setupSearchBox)\n/* harmony export */ });\nfunction setupSearchBox() {\r\n    const searchTextBox = document.getElementById(\"find\");\r\n  \r\n    searchTextBox.addEventListener(\"input\", function(){\r\n      const trlist = document.querySelectorAll(\"li\");\r\n      Array.from(trlist).forEach(function(item){\r\n        const searchedText = item.innerText;\r\n        const searchTextBoxVal = searchTextBox.value;\r\n        const re = new RegExp(searchTextBoxVal, 'gi');\r\n        if (searchedText.match(re)){\r\n          item.style.display=\"block\";\r\n        }\r\n        else {\r\n          item.style.display=\"none\";\r\n        }\r\n      })\r\n    });\r\n  }\r\n  \n\n//# sourceURL=webpack://hw5/./src/search.js?");

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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;