/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	export class RestClient {
	    constructor(options) {
	        this.endpoint = options.endpoint;
	    }
	    setAuthorization(auth) {
	        this.authentication = auth;
	    }
	    get(action) {
	        return new Promise((_resolve, _reject) => {
	            fetch(`${this.endpoint}${action}`, {
	                method: 'GET',
	                headers: this.getHeaders(),
	            }).then(response => {
	                response.json().then(_resolve).catch(_reject);
	            }).catch(_reject);
	        });
	    }
	    put(action, data) {
	        return new Promise((_resolve, _reject) => {
	            fetch(`${this.endpoint}${action}`, {
	                method: 'PUT',
	                headers: this.getHeaders(),
	            }).then(response => {
	                response.json().then(_resolve).catch(_reject);
	            }).catch(_reject);
	        });
	    }
	    post(action, data) {
	        return new Promise((_resolve, _reject) => {
	            fetch(`${this.endpoint}${action}`, {
	                method: 'POST',
	                headers: this.getHeaders(),
	                body: data
	            }).then(response => {
	                response.json().then(_resolve).catch(_reject);
	            }).catch(_reject);
	        });
	    }
	    delete(action) {
	        return new Promise((_resolve, _reject) => {
	            fetch(`${this.endpoint}${action}`, {
	                method: 'DELETE',
	                headers: this.getHeaders(),
	            }).then(response => {
	                response.json().then(_resolve).catch(_reject);
	            }).catch(_reject);
	        });
	    }
	    getHeaders() {
	        let h = new Headers();
	        if (this.authentication) {
	            h.append('Authorization', this.authentication);
	        }
	        h.append('Content-Type', 'text/json');
	        return h;
	    }
	}


/***/ }
/******/ ]);