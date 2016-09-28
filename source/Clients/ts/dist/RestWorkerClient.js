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

	import { RestClient } from './RestClient';
	let uniqueRequestId = 1;
	let worker;
	export class RestWorkerClient extends RestClient {
	    constructor(...args) {
	        super(...args);
	        this.promiseMap = new Map();
	        this.handleResponse = (ev) => {
	            const r = JSON.parse(ev.data);
	            if (r.id && this.promiseMap.has(r.id)) {
	                const handlers = this.promiseMap.get(r.id);
	                this.promiseMap.delete(r.id);
	                if (r.success) {
	                    handlers.resolve(r.response);
	                }
	                else {
	                    handlers.reject(r.response);
	                }
	            }
	        };
	    }
	    construstor() {
	        if (!worker) {
	            worker = new Worker('RestClientWorker.js');
	        }
	        worker.addEventListener('response', this.handleResponse);
	    }
	    get(action) {
	        return new Promise((_resolve, _reject) => {
	            const id = ++uniqueRequestId;
	            this.promiseMap.set(id, {
	                resolve: _resolve,
	                reject: _reject
	            });
	            const message = {
	                id,
	                method: 'get',
	                action,
	            };
	            worker.postMessage(JSON.stringify(message));
	        });
	    }
	}
	export default RestWorkerClient;


/***/ }
/******/ ]);