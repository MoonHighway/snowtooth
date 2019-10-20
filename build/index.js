(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/lifts.json":
/*!*****************************!*\
  !*** ./src/data/lifts.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Astra Express\",\"capacity\":3,\"status\":\"OPEN\",\"night\":false,\"elevationGain\":899,\"time\":\"8 minutes\",\"trails\":[\"blue-bird\",\"blackhawk\",\"ducks-revenge\",\"ice-streak\",\"parachute\",\"goosebumps\"],\"id\":\"astra-express\"},{\"name\":\"Jazz Cat\",\"capacity\":2,\"status\":\"OPEN\",\"night\":false,\"elevationGain\":1230,\"trails\":[\"goosebumps\",\"river-run\",\"ducks-revenge\",\"cape-cod\",\"grandma\",\"wild-child\",\"old-witch\"],\"id\":\"jazz-cat\"},{\"name\":\"Jolly Roger\",\"capacity\":6,\"status\":\"OPEN\",\"night\":true,\"elevationGain\":1350,\"trails\":[\"dance-fight\",\"sneaky-pete\",\"bear-cave\",\"humpty-dumpty\",\"meatball\",\"early-riser\",\"sunset\"],\"id\":\"jolly-roger\"},{\"name\":\"Neptune Rope\",\"capacity\":1,\"status\":\"OPEN\",\"night\":false,\"elevationGain\":50,\"trails\":[\"home-run\",\"crosscut\"],\"id\":\"neptune-rope\"},{\"name\":\"Panorama\",\"capacity\":8,\"status\":\"HOLD\",\"night\":false,\"elevationGain\":2800,\"trails\":[\"ocean-breeze\",\"songstress\",\"mountain-run\",\"summit-saunter\",\"hemmed-slacks\",\"davids-dive\",\"quarry-chute\",\"sunset\",\"blackhawk\"],\"id\":\"panorama\"},{\"name\":\"Prickly Peak\",\"capacity\":3,\"status\":\"OPEN\",\"night\":false,\"elevationGain\":1700,\"trails\":[\"crooked-chute\",\"marks-chute\",\"the-terrible-chute\",\"magma-chute\",\"saddleback-chute\",\"omega-chute\",\"adirondack-chute\",\"chicken-out-traverse\"],\"id\":\"prickly-peak\"},{\"name\":\"Snowtooth Express\",\"capacity\":6,\"status\":\"OPEN\",\"night\":false,\"elevationGain\":1480,\"trails\":[\"blue-streak\",\"hoya-saxa\",\"michigan-ave\",\"parker-downhill\",\"wiggle-waggle\",\"meow-face\",\"golden-ticket\"],\"id\":\"snowtooth-express\"},{\"name\":\"Summit\",\"capacity\":6,\"status\":\"CLOSED\",\"night\":false,\"elevationGain\":1480,\"trails\":[\"golden-ticket\",\"summit-bowl\",\"hangar-bowl\",\"big-gully\",\"bigger-gully\",\"broadway-bowl\",\"fish-bowl\"],\"id\":\"summit\"},{\"name\":\"Wally's\",\"capacity\":2,\"status\":\"HOLD\",\"night\":false,\"elevationGain\":820,\"trails\":[\"buford\",\"slippy-stream\",\"peacock\",\"fun-run\",\"sweet-treat\",\"stump-alley\"],\"id\":\"wallys\"},{\"name\":\"Western States\",\"capacity\":6,\"status\":\"CLOSED\",\"night\":false,\"elevationGain\":1330,\"trails\":[\"centennial\",\"biennial\",\"millenial\",\"searcher\",\"white-lightning\",\"richards-return\",\"head-chutes-gate-a\",\"head-chutes-gate-b\",\"head-chutes-gate-c\"],\"id\":\"western-states\"},{\"name\":\"Whirlybird\",\"capacity\":2,\"status\":\"HOLD\",\"night\":false,\"elevationGain\":1003,\"trails\":[\"bird-glade\",\"big-bird\",\"roller-park\",\"owl-glade\",\"whippersnapper-ridge\",\"drop-in\",\"mosh-pit\",\"richards-return\"],\"id\":\"whirlybird\"}]");

/***/ }),

/***/ "./src/data/trails.json":
/*!******************************!*\
  !*** ./src/data/trails.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Blue Bird\",\"lift\":[\"astra-express\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"blue-bird\"},{\"name\":\"Blackhawk\",\"lift\":[\"astra-express\",\"panorama\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"blackhawk\"},{\"name\":\"Duck's Revenge\",\"lift\":[\"astra-express\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"ducks-revenge\"},{\"name\":\"Ice Streak\",\"lift\":[\"astra-express\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"ice-streak\"},{\"name\":\"Parachute\",\"lift\":[\"astra-express\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"parachute\"},{\"name\":\"Goosebumps\",\"lift\":[\"astra-express\",\"jazz-cat\"],\"difficulty\":\"advanced\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"goosebumps\"},{\"name\":\"River Run\",\"lift\":[\"jazz-cat\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"river-run\"},{\"name\":\"Cape Cod\",\"lift\":[\"jazz-cat\"],\"difficulty\":\"intermediate\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"cape-cod\"},{\"name\":\"Grandma\",\"lift\":[\"jazz-cat\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"grandma\"},{\"name\":\"Wild Child\",\"lift\":[\"jazz-cat\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"wild-child\"},{\"name\":\"Old Witch\",\"lift\":[\"jazz-cat\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"old-witch\"},{\"name\":\"Dance Fight\",\"lift\":[\"jolly-roger\"],\"difficulty\":\"beginner\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"dance-fight\"},{\"name\":\"Sneaky Pete\",\"lift\":[\"jolly-roger\"],\"difficulty\":\"beginner\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"sneaky-pete\"},{\"name\":\"Bear Cave\",\"lift\":[\"jolly-roger\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"bear-cave\"},{\"name\":\"Humpty Dumpty\",\"lift\":[\"jolly-roger\"],\"difficulty\":\"intermediate\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"humpty-dumpty\"},{\"name\":\"Meatball\",\"lift\":[\"jolly-roger\"],\"difficulty\":\"beginner\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"meatball\"},{\"name\":\"Early Riser\",\"lift\":[\"jolly-roger\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"early-riser\"},{\"name\":\"Sunset\",\"lift\":[\"jolly-roger\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"sunset\"},{\"name\":\"Home Run\",\"lift\":[\"neptune-rope\"],\"difficulty\":\"beginner\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"home-run\"},{\"name\":\"Crosscut\",\"lift\":[\"neptune-rope\"],\"difficulty\":\"beginner\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"crosscut\"},{\"name\":\"Ocean Breeze\",\"lift\":[\"panorama\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":true,\"id\":\"ocean-breeze\"},{\"name\":\"Songstress\",\"lift\":[\"panorama\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"songstress\"},{\"name\":\"Mountain Run\",\"lift\":[\"panorama\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":true,\"id\":\"mountain-run\"},{\"name\":\"Summit Saunter\",\"lift\":[\"panorama\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":true,\"id\":\"summit-saunter\"},{\"name\":\"Hemmed Slacks\",\"lift\":[\"panorama\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"hemmed-slacks\"},{\"name\":\"David's Dive\",\"lift\":[\"panorama\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"davids-dive\"},{\"name\":\"Quarry Chute\",\"lift\":[\"panorama\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"quarry-chute\"},{\"name\":\"Crooked Chute\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"crooked-chute\"},{\"name\":\"Mark's Chute\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"marks-chute\"},{\"name\":\"The Terrible Chute\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"the-terrible-chute\"},{\"name\":\"Magma Chute\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"magma-chute\"},{\"name\":\"Saddleback Chute\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"saddleback-chute\"},{\"name\":\"Omega Chute\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"omega-chute\"},{\"name\":\"Adirondack Chute\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"adirondack-chute\"},{\"name\":\"Chicken Out Traverse\",\"lift\":[\"prickly-peak\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"chicken-out-traverse\"},{\"name\":\"Blue Streak\",\"lift\":[\"snowtooth-express\"],\"difficulty\":\"advanced\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"blue-streak\"},{\"name\":\"Hoya Saxa\",\"lift\":[\"snowtooth-express\"],\"difficulty\":\"advanced\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"hoya-saxa\"},{\"name\":\"Michigan Ave\",\"lift\":[\"snowtooth-express\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"michigan-ave\"},{\"name\":\"Parker Downhill\",\"lift\":[\"snowtooth-express\"],\"difficulty\":\"advanced\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"parker-downhill\"},{\"name\":\"Wiggle Waggle\",\"lift\":[\"snowtooth-express\"],\"difficulty\":\"beginner\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"wiggle-waggle\"},{\"name\":\"Meow Face\",\"lift\":[\"snowtooth-express\"],\"difficulty\":\"intermediate\",\"status\":\"OPEN\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"meow-face\"},{\"name\":\"Golden Ticket\",\"lift\":[\"snowtooth-express\",\"summit\"],\"difficulty\":\"expert\",\"status\":\"OPEN\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"golden-ticket\"},{\"name\":\"Summit Bowl\",\"lift\":[\"snowtooth-express\",\"summit\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"summit-bowl\"},{\"name\":\"Hangar Bowl\",\"lift\":[\"summit\"],\"difficulty\":\"intermediate\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"hangar-bowl\"},{\"name\":\"Big Gully\",\"lift\":[\"summit\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"big-gully\"},{\"name\":\"Bigger Gully\",\"lift\":[\"summit\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"bigger-gully\"},{\"name\":\"Broadway Bowl\",\"lift\":[\"summit\"],\"difficulty\":\"intermediate\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"broadway-bowl\"},{\"name\":\"Fish Bowl\",\"lift\":[\"summit\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"fish-bowl\"},{\"name\":\"Way Out\",\"lift\":[\"summit\"],\"difficulty\":\"beginner\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":false,\"id\":\"way-out\"},{\"name\":\"Buford\",\"lift\":[\"wallys\"],\"difficulty\":\"beginner\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":true,\"id\":\"buford\"},{\"name\":\"Slippy Stream\",\"lift\":[\"wallys\"],\"difficulty\":\"beginner\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":false,\"trees\":false,\"night\":true,\"id\":\"slippy-stream\"},{\"name\":\"Peacock\",\"lift\":[\"wallys\"],\"difficulty\":\"beginner\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"peacock\"},{\"name\":\"Fun Run\",\"lift\":[\"wallys\"],\"difficulty\":\"beginner\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"fun-run\"},{\"name\":\"Sweet Treat\",\"lift\":[\"wallys\"],\"difficulty\":\"beginner\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":true,\"trees\":false,\"night\":true,\"id\":\"sweet-treat\"},{\"name\":\"Stump Alley\",\"lift\":[\"wallys\"],\"difficulty\":\"intermediate\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":true,\"trees\":true,\"night\":true,\"id\":\"stump-alley\"},{\"name\":\"Centennial\",\"lift\":[\"western-states\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":true,\"trees\":true,\"night\":false,\"id\":\"centennial\"},{\"name\":\"Biennial\",\"lift\":[\"western-states\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":true,\"trees\":true,\"night\":false,\"id\":\"biennial\"},{\"name\":\"Millenial\",\"lift\":[\"western-states\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":true,\"trees\":true,\"night\":false,\"id\":\"millenial\"},{\"name\":\"Searcher\",\"lift\":[\"western-states\"],\"difficulty\":\"intermediate\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":true,\"trees\":true,\"night\":false,\"id\":\"searcher\"},{\"name\":\"White Lightning\",\"lift\":[\"western-states\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":true,\"trees\":true,\"night\":false,\"id\":\"white-lightning\"},{\"name\":\"Richard's Return\",\"lift\":[\"western-states\",\"whirlybird\"],\"difficulty\":\"beginner\",\"status\":\"CLOSED\",\"groomed\":true,\"snowmaking\":true,\"trees\":true,\"night\":false,\"id\":\"richards-return\"},{\"name\":\"Head Chutes Gate A\",\"lift\":[\"western-states\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"head-chutes-gate-a\"},{\"name\":\"Head Chutes Gate B\",\"lift\":[\"western-states\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"head-chutes-gate-b\"},{\"name\":\"Head Chutes Gate C\",\"lift\":[\"western-states\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"head-chutes-gate-c\"},{\"name\":\"Bird Glade\",\"lift\":[\"whirlybird\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"bird-glade\"},{\"name\":\"Big Bird\",\"lift\":[\"whirlybird\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"big-bird\"},{\"name\":\"Roller Park\",\"lift\":[\"whirlybird\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"roller-park\"},{\"name\":\"Owl Glade\",\"lift\":[\"whirlybird\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"owl-glade\"},{\"name\":\"Whippersnapper Ridge\",\"lift\":[\"whirlybird\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"whippersnapper-ridge\"},{\"name\":\"Drop In\",\"lift\":[\"whirlybird\"],\"difficulty\":\"expert\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"drop-in\"},{\"name\":\"Mosh Pit\",\"lift\":[\"whirlybird\"],\"difficulty\":\"advanced\",\"status\":\"CLOSED\",\"groomed\":false,\"snowmaking\":false,\"trees\":true,\"night\":false,\"id\":\"mosh-pit\"}]");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_lifts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/lifts */ "./src/data/lifts.json");
var _data_lifts__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/lifts */ "./src/data/lifts.json", 1);
/* harmony import */ var _data_trails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/trails */ "./src/data/trails.json");
var _data_trails__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/trails */ "./src/data/trails.json", 1);






__webpack_require__(/*! dotenv */ "dotenv").config();

var typeDefs = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, "./typeDefs.graphql"), "UTF-8");

var resolvers = __webpack_require__(/*! ./resolvers */ "./src/resolvers/index.js");

var pubsub = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["PubSub"]();
var context = {
  lifts: _data_lifts__WEBPACK_IMPORTED_MODULE_3__,
  trails: _data_trails__WEBPACK_IMPORTED_MODULE_4__,
  pubsub: pubsub
};
var PORT = process.env.PORT || 4000;
var server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: context
});
server.listen({
  port: PORT
}).then(function (_ref) {
  var port = _ref.port;
  return console.log("GraphQL Server is running at localhost:".concat(port));
});

if (false) {}

/***/ }),

/***/ "./src/resolvers/Lift.js":
/*!*******************************!*\
  !*** ./src/resolvers/Lift.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  trailAccess: function trailAccess(root, args, _ref) {
    var trails = _ref.trails;
    return root.trails.map(function (id) {
      return trails.find(function (t) {
        return id === t.id;
      });
    }).filter(function (x) {
      return x;
    });
  }
};

/***/ }),

/***/ "./src/resolvers/Mutation.js":
/*!***********************************!*\
  !*** ./src/resolvers/Mutation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs */ "fs");

var path = __webpack_require__(/*! path */ "path");

var filePath = function filePath(fileName) {
  return path.join(__dirname, '..', 'data', fileName);
};

var save = function save(data, fileName) {
  fs.writeFileSync(filePath(fileName), JSON.stringify(data, null, 2));
};

module.exports = {
  setLiftStatus: function setLiftStatus(root, _ref, _ref2) {
    var id = _ref.id,
        status = _ref.status;
    var lifts = _ref2.lifts,
        pubsub = _ref2.pubsub;
    var updatedLift = lifts.find(function (lift) {
      return id === lift.id;
    });
    updatedLift.status = status;
    pubsub.publish('lift-status-change', {
      liftStatusChange: updatedLift
    });
    return updatedLift;
  },
  setTrailStatus: function setTrailStatus(root, _ref3, _ref4) {
    var id = _ref3.id,
        status = _ref3.status;
    var trails = _ref4.trails,
        pubsub = _ref4.pubsub;
    var updatedTrail = trails.find(function (trail) {
      return id === trail.id;
    });
    updatedTrail.status = status;
    pubsub.publish('trail-status-change', {
      trailStatusChange: updatedTrail
    });
    return updatedTrail;
  }
};

/***/ }),

/***/ "./src/resolvers/Query.js":
/*!********************************!*\
  !*** ./src/resolvers/Query.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  allLifts: function allLifts(root, _ref, _ref2) {
    var status = _ref.status;
    var lifts = _ref2.lifts;

    if (!status) {
      return lifts;
    } else {
      var filteredLifts = lifts.filter(function (lift) {
        return lift.status === status;
      });
      return filteredLifts;
    }
  },
  allTrails: function allTrails(root, _ref3, _ref4) {
    var status = _ref3.status;
    var trails = _ref4.trails;

    if (!status) {
      return trails;
    } else {
      var filteredTrails = trails.filter(function (trail) {
        return trail.status === status;
      });
      return filteredTrails;
    }
  },
  Lift: function Lift(root, _ref5, _ref6) {
    var id = _ref5.id;
    var lifts = _ref6.lifts;
    var selectedLift = lifts.filter(function (lift) {
      return id === lift.id;
    });
    return selectedLift[0];
  },
  Trail: function Trail(root, _ref7, _ref8) {
    var id = _ref7.id;
    var trails = _ref8.trails;
    var selectedTrail = trails.filter(function (trail) {
      return id === trail.id;
    });
    return selectedTrail[0];
  },
  liftCount: function liftCount(root, _ref9, _ref10) {
    var status = _ref9.status;
    var lifts = _ref10.lifts;
    var i = 0;
    lifts.map(function (lift) {
      lift.status === status ? i++ : null;
    });
    return i;
  },
  trailCount: function trailCount(root, _ref11, _ref12) {
    var status = _ref11.status;
    var trails = _ref12.trails;
    var i = 0;
    trails.map(function (trail) {
      trail.status === status ? i++ : null;
    });
    return i;
  }
};

/***/ }),

/***/ "./src/resolvers/Subscription.js":
/*!***************************************!*\
  !*** ./src/resolvers/Subscription.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  liftStatusChange: {
    subscribe: function subscribe(root, data, _ref) {
      var pubsub = _ref.pubsub;
      return pubsub.asyncIterator('lift-status-change');
    }
  },
  trailStatusChange: {
    subscribe: function subscribe(root, data, _ref2) {
      var pubsub = _ref2.pubsub;
      return pubsub.asyncIterator('trail-status-change');
    }
  }
};

/***/ }),

/***/ "./src/resolvers/Trail.js":
/*!********************************!*\
  !*** ./src/resolvers/Trail.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  accessedByLifts: function accessedByLifts(root, args, _ref) {
    var lifts = _ref.lifts;
    return root.lift.map(function (id) {
      return lifts.find(function (l) {
        return id === l.id;
      });
    }).filter(function (x) {
      return x;
    });
  }
};

/***/ }),

/***/ "./src/resolvers/index.js":
/*!********************************!*\
  !*** ./src/resolvers/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Query = __webpack_require__(/*! ./Query */ "./src/resolvers/Query.js");

var Mutation = __webpack_require__(/*! ./Mutation */ "./src/resolvers/Mutation.js");

var Subscription = __webpack_require__(/*! ./Subscription */ "./src/resolvers/Subscription.js");

var Lift = __webpack_require__(/*! ./Lift */ "./src/resolvers/Lift.js");

var Trail = __webpack_require__(/*! ./Trail */ "./src/resolvers/Trail.js");

module.exports = {
  Query: Query,
  Mutation: Mutation,
  Subscription: Subscription,
  Lift: Lift,
  Trail: Trail
};

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map