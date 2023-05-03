/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ (() => {

eval("// import './components/Weather/weather.css';\r\n\r\nif (navigator.geolocation){\r\n    navigator.geolocation.getCurrentPosition(showPosition);\r\n  } \r\n  function showPosition(positions){\r\n    var lat = positions.coords.latitude;\r\n    var long = positions.coords.longitude;\r\n    weather.fetchWeather(lat + \" \" + long);\r\n  }\r\n  \r\n  let weather = {\r\n      apiKey : \"8fea051a312349ab8b7174641231504\",\r\n      fetchWeather: function(city){\r\n          fetch(\r\n              \"http://api.weatherapi.com/v1/current.json?key=\"+ this.apiKey + \"&q=\"+ city +\"&aqi=no\"\r\n          )\r\n          .then((response) => response.json())\r\n          .then((data) => this.displayWeather(data));\r\n      },\r\n      displayWeather: function(data){\r\n          const {name} = data.location;\r\n          const {temp_c} = data.current;\r\n          const {icon} = data.current.condition;\r\n          document.getElementById(\"city-name\").innerText = name;\r\n          document.getElementById(\"temp\").innerText = temp_c + \"°\";\r\n          document.getElementById(\"weather-icon\").src = icon;\r\n      }\r\n  }\r\n  weather.fetchWeather(\"Tbilisi\");\n\n//# sourceURL=webpack://hw5/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/weather.js"]();
/******/ 	
/******/ })()
;