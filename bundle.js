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
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var forms = __webpack_require__(157);
	__webpack_require__(249);

	var FormularNewforms = forms.Form.extend({
		nume: forms.CharField(),
		email: forms.EmailField(),
		parola: forms.CharField({
			widget: forms.PasswordInput
		})
	});

	var Formular = React.createClass({displayName: "Formular",
		renderModularForm: function(){
			var divFirstDay = [];
			var divSecondDay = [];
			var divThirdDay = [];
			var divPass = [];

			for(var i = 1; i<= this.props.properties.firstDayNum; i++){
				divFirstDay.push(React.createElement("div", null, 
							React.createElement("h2", null, "Formular pentru bilet pentru prima zi, numarul: ", i), 
							React.createElement(forms.RenderForm, {form: FormularNewforms})			
						));
			}

			for(var i = 1; i<= this.props.properties.secondDayNum; i++){
				divSecondDay.push(React.createElement("div", null, 
							React.createElement("h2", null, "Formular pentru bilet pentru a doua zi, numarul: ", i), 
							React.createElement(forms.RenderForm, {form: FormularNewforms})			
						));
			}

			for(var i = 1; i<= this.props.properties.thirdDayNum; i++){
				divThirdDay.push(React.createElement("div", null, 
							React.createElement("h2", null, "Formular pentru bilet pentru a treia zi, numarul: ", i), 
							React.createElement(forms.RenderForm, {form: FormularNewforms})			
						));
			}

			for(var i = 1; i<= this.props.properties.passNum; i++){
				divPass.push(React.createElement("div", null, 
							React.createElement("h2", null, "Formular pentru bilet three-day-pass, numarul: ", i), 
							React.createElement(forms.RenderForm, {form: FormularNewforms})			
						));
			}

			var allForms = [divFirstDay, divSecondDay, divThirdDay, divPass];
			return allForms;						

		},
		render: function(){
			return React.createElement("form", {method: "POST"}, 
					React.createElement("div", null, this.renderModularForm()), 
					React.createElement("input", {type: "submit", value: "Trimiteti"})
				   )
		}
	});

	var Table = React.createClass({displayName: "Table",
		getInitialState: function(){
			return {
				firstDayNum: 0,
				secondDayNum: 0,
				thirdDayNum: 0,
				passNum: 0
			}
		},
		handleChange: function(){
			this.setState({
				firstDayNum: React.findDOMNode(this.refs.firstDayNum).value,
				secondDayNum: React.findDOMNode(this.refs.secondDayNum).value,
				thirdDayNum: React.findDOMNode(this.refs.thirdDayNum).value,
				passNum: React.findDOMNode(this.refs.passNum).value
			});
		},
		handleClick: function(e){
			e.preventDefault();
			console.log("Number of first day tickets: " + this.state.firstDayNum + "\nNumber of second day tickets: " + this.state.secondDayNum + "\nNumber of third day tickets: " + this.state.thirdDayNum + "\nNumber of three day passes: " + this.state.passNum + "\n============================================");
			renderNext({"firstDayNum": this.state.firstDayNum,
						"secondDayNum": this.state.secondDayNum,
						"thirdDayNum": this.state.thirdDayNum,
						"passNum": this.state.passNum
			});
		},
		render: function(){
			return React.createElement("form", {method: "POST"}, 
					React.createElement("table", null, 
					  React.createElement("thead", null, 
					    React.createElement("tr", null, 
					      React.createElement("th", null, "Tip bilet"), 
					      React.createElement("th", null, "Numar bilete")
					    )
					  ), 
					  React.createElement("tbody", null, 
					    React.createElement("tr", null, 
					      React.createElement("td", null, "First day"), 
					      React.createElement("td", null, 
					        React.createElement("select", {name: "firstDayNum", ref: "firstDayNum", onChange: this.handleChange}, 
					          React.createElement("option", {value: "0"}, "Alegeti un numar de bilete"), 
					          React.createElement("option", {value: "1"}, "1"), 
					          React.createElement("option", {value: "2"}, "2"), 
					          React.createElement("option", {value: "3"}, "3"), 
					          React.createElement("option", {value: "4"}, "4"), 
					          React.createElement("option", {value: "5"}, "5"), 
					          React.createElement("option", {value: "6"}, "6"), 
					          React.createElement("option", {value: "7"}, "7"), 
					          React.createElement("option", {value: "8"}, "8"), 
					          React.createElement("option", {value: "9"}, "9"), 
					          React.createElement("option", {value: "10"}, "10")				          
					        )
					      )
					    ), 
					    React.createElement("tr", null, 
					      React.createElement("td", null, "Second day"), 
					      React.createElement("td", null, 
					        React.createElement("select", {name: "secondDayNum", ref: "secondDayNum", onChange: this.handleChange}, 
					          React.createElement("option", {value: "0"}, "Alegeti un numar de bilete"), 
					          React.createElement("option", {value: "1"}, "1"), 
					          React.createElement("option", {value: "2"}, "2"), 
					          React.createElement("option", {value: "3"}, "3"), 
					          React.createElement("option", {value: "4"}, "4"), 
					          React.createElement("option", {value: "5"}, "5"), 
					          React.createElement("option", {value: "6"}, "6"), 
					          React.createElement("option", {value: "7"}, "7"), 
					          React.createElement("option", {value: "8"}, "8"), 
					          React.createElement("option", {value: "9"}, "9"), 
					          React.createElement("option", {value: "10"}, "10")				          
					        )
					      )
					    ), 
					    React.createElement("tr", null, 
					      React.createElement("td", null, "Third day"), 
					      React.createElement("td", null, 
					        React.createElement("select", {name: "thirdDayNum", ref: "thirdDayNum", onChange: this.handleChange}, 
					          React.createElement("option", {value: "0"}, "Alegeti un numar de bilete"), 
					          React.createElement("option", {value: "1"}, "1"), 
					          React.createElement("option", {value: "2"}, "2"), 
					          React.createElement("option", {value: "3"}, "3"), 
					          React.createElement("option", {value: "4"}, "4"), 
					          React.createElement("option", {value: "5"}, "5"), 
					          React.createElement("option", {value: "6"}, "6"), 
					          React.createElement("option", {value: "7"}, "7"), 
					          React.createElement("option", {value: "8"}, "8"), 
					          React.createElement("option", {value: "9"}, "9"), 
					          React.createElement("option", {value: "10"}, "10")				          
					        )
					      )
					    ), 
					    React.createElement("tr", null, 
					      React.createElement("td", null, "Three day pass"), 
					      React.createElement("td", null, 
					        React.createElement("select", {name: "passNum", ref: "passNum", onChange: this.handleChange}, 
					          React.createElement("option", {value: "0"}, "Alegeti un numar de bilete"), 
					          React.createElement("option", {value: "1"}, "1"), 
					          React.createElement("option", {value: "2"}, "2"), 
					          React.createElement("option", {value: "3"}, "3"), 
					          React.createElement("option", {value: "4"}, "4"), 
					          React.createElement("option", {value: "5"}, "5"), 
					          React.createElement("option", {value: "6"}, "6"), 
					          React.createElement("option", {value: "7"}, "7"), 
					          React.createElement("option", {value: "8"}, "8"), 
					          React.createElement("option", {value: "9"}, "9"), 
					          React.createElement("option", {value: "10"}, "10")				          
					        )
					      )
					    )				    
					  )
					), 
					React.createElement("input", {type: "submit", value: "Trimiteti", onClick: this.handleClick})
				   )
		}
	});

	function renderNext(prop){
		React.render(React.createElement(Formular, {properties: prop}), document.getElementById("aplicatie"));
	}

	React.render(React.createElement(Table, null), document.getElementById("aplicatie"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

	'use strict';

	var EventPluginUtils = __webpack_require__(4);
	var ReactChildren = __webpack_require__(8);
	var ReactComponent = __webpack_require__(22);
	var ReactClass = __webpack_require__(37);
	var ReactContext = __webpack_require__(12);
	var ReactCurrentOwner = __webpack_require__(17);
	var ReactElement = __webpack_require__(11);
	var ReactElementValidator = __webpack_require__(32);
	var ReactDOM = __webpack_require__(40);
	var ReactDOMTextComponent = __webpack_require__(42);
	var ReactDefaultInjection = __webpack_require__(91);
	var ReactInstanceHandles = __webpack_require__(19);
	var ReactMount = __webpack_require__(67);
	var ReactPerf = __webpack_require__(28);
	var ReactPropTypes = __webpack_require__(122);
	var ReactReconciler = __webpack_require__(29);
	var ReactServerRendering = __webpack_require__(154);

	var assign = __webpack_require__(13);
	var findDOMNode = __webpack_require__(111);
	var onlyChild = __webpack_require__(156);

	ReactDefaultInjection.inject();

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if ("production" !== process.env.NODE_ENV) {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var render = ReactPerf.measure('React', 'render', ReactMount.render);

	var React = {
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    only: onlyChild
	  },
	  Component: ReactComponent,
	  DOM: ReactDOM,
	  PropTypes: ReactPropTypes,
	  initializeTouchEvents: function(shouldUseTouch) {
	    EventPluginUtils.useTouchEvents = shouldUseTouch;
	  },
	  createClass: ReactClass.createClass,
	  createElement: createElement,
	  cloneElement: cloneElement,
	  createFactory: createFactory,
	  createMixin: function(mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },
	  constructAndRenderComponent: ReactMount.constructAndRenderComponent,
	  constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
	  findDOMNode: findDOMNode,
	  render: render,
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  isValidElement: ReactElement.isValidElement,
	  withContext: ReactContext.withContext,

	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign
	};

	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    CurrentOwner: ReactCurrentOwner,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    Reconciler: ReactReconciler,
	    TextComponent: ReactDOMTextComponent
	  });
	}

	if ("production" !== process.env.NODE_ENV) {
	  var ExecutionEnvironment = __webpack_require__(51);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

	    // If we're in Chrome, look for the devtools marker and provide a download
	    // link if not installed.
	    if (navigator.userAgent.indexOf('Chrome') > -1) {
	      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	        console.debug(
	          'Download the React DevTools for a better development experience: ' +
	          'https://fb.me/react-devtools'
	        );
	      }
	    }

	    var expectedFeatures = [
	      // shims
	      Array.isArray,
	      Array.prototype.every,
	      Array.prototype.forEach,
	      Array.prototype.indexOf,
	      Array.prototype.map,
	      Date.now,
	      Function.prototype.bind,
	      Object.keys,
	      String.prototype.split,
	      String.prototype.trim,

	      // shams
	      Object.create,
	      Object.freeze
	    ];

	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error(
	          'One or more ES5 shim/shams expected by React are not available: ' +
	          'https://fb.me/react-warning-polyfills'
	        );
	        break;
	      }
	    }
	  }
	}

	React.version = '0.13.3';

	module.exports = React;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);

	var invariant = __webpack_require__(7);

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function(InjectedMount) {
	    injection.Mount = InjectedMount;
	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        InjectedMount && InjectedMount.getNode,
	        'EventPluginUtils.injection.injectMount(...): Injected Mount module ' +
	        'is missing getNode.'
	      ) : invariant(InjectedMount && InjectedMount.getNode));
	    }
	  }
	};

	var topLevelTypes = EventConstants.topLevelTypes;

	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp ||
	         topLevelType === topLevelTypes.topTouchEnd ||
	         topLevelType === topLevelTypes.topTouchCancel;
	}

	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove ||
	         topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown ||
	         topLevelType === topLevelTypes.topTouchStart;
	}


	var validateEventDispatches;
	if ("production" !== process.env.NODE_ENV) {
	  validateEventDispatches = function(event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ?
	      dispatchListeners.length :
	      dispatchListeners ? 1 : 0;

	    ("production" !== process.env.NODE_ENV ? invariant(
	      idsIsArr === listenersIsArr && IDsLen === listenersLen,
	      'EventPluginUtils: Invalid `event`.'
	    ) : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
	  };
	}

	/**
	 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
	 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
	 * kept separate to conserve memory.
	 */
	function forEachEventDispatch(event, cb) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== process.env.NODE_ENV) {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      cb(event, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    cb(event, dispatchListeners, dispatchIDs);
	  }
	}

	/**
	 * Default implementation of PluginModule.executeDispatch().
	 * @param {SyntheticEvent} SyntheticEvent to handle
	 * @param {function} Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, listener, domID) {
	  event.currentTarget = injection.Mount.getNode(domID);
	  var returnValue = listener(event, domID);
	  event.currentTarget = null;
	  return returnValue;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, cb) {
	  forEachEventDispatch(event, cb);
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return id of the first dispatch execution who's listener returns true, or
	 * null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== process.env.NODE_ENV) {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if ("production" !== process.env.NODE_ENV) {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !Array.isArray(dispatchListener),
	    'executeDirectDispatch(...): Invalid `event`.'
	  ) : invariant(!Array.isArray(dispatchListener)));
	  var res = dispatchListener ?
	    dispatchListener(event, dispatchID) :
	    null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {bool} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatch: executeDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,
	  injection: injection,
	  useTouchEvents: false
	};

	module.exports = EventPluginUtils;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */

	'use strict';

	var keyMirror = __webpack_require__(6);

	var PropagationPhases = keyMirror({bubbled: null, captured: null});

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topBlur: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topReset: null,
	  topScroll: null,
	  topSelectionChange: null,
	  topSubmit: null,
	  topTextInput: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topWheel: null
	});

	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};

	module.exports = EventConstants;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    obj instanceof Object && !Array.isArray(obj),
	    'keyMirror(...): Argument must be an object.'
	  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(9);
	var ReactFragment = __webpack_require__(10);

	var traverseAllChildren = __webpack_require__(18);
	var warning = __webpack_require__(15);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var threeArgumentPooler = PooledClass.threeArgumentPooler;

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.forEachFunction = forEachFunction;
	  this.forEachContext = forEachContext;
	}
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(traverseContext, child, name, i) {
	  var forEachBookKeeping = traverseContext;
	  forEachBookKeeping.forEachFunction.call(
	    forEachBookKeeping.forEachContext, child, i);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc.
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }

	  var traverseContext =
	    ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, mapFunction, mapContext) {
	  this.mapResult = mapResult;
	  this.mapFunction = mapFunction;
	  this.mapContext = mapContext;
	}
	PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);

	function mapSingleChildIntoContext(traverseContext, child, name, i) {
	  var mapBookKeeping = traverseContext;
	  var mapResult = mapBookKeeping.mapResult;

	  var keyUnique = !mapResult.hasOwnProperty(name);
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      keyUnique,
	      'ReactChildren.map(...): Encountered two children with the same key, ' +
	      '`%s`. Child keys must be unique; when two children share a key, only ' +
	      'the first child will be used.',
	      name
	    ) : null);
	  }

	  if (keyUnique) {
	    var mappedChild =
	      mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
	    mapResult[name] = mappedChild;
	  }
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * TODO: This may likely break any calls to `ReactChildren.map` that were
	 * previously relying on the fact that we guarded against null children.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} mapFunction.
	 * @param {*} mapContext Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }

	  var mapResult = {};
	  var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	  return ReactFragment.create(mapResult);
	}

	function forEachSingleChildDummy(traverseContext, child, name, i) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  count: countChildren
	};

	module.exports = ReactChildren;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function(instance) {
	  var Klass = this;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    instance instanceof Klass,
	    'Trying to release an instance into a pool of a different type.'
	  ) : invariant(instance instanceof Klass));
	  if (instance.destructor) {
	    instance.destructor();
	  }
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactFragment
	*/

	'use strict';

	var ReactElement = __webpack_require__(11);

	var warning = __webpack_require__(15);

	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is opaque, for now.
	 */

	if ("production" !== process.env.NODE_ENV) {
	  var fragmentKey = '_reactFragment';
	  var didWarnKey = '_reactDidWarn';
	  var canWarnForReactFragment = false;

	  try {
	    // Feature test. Don't even try to issue this warning if we can't use
	    // enumerable: false.

	    var dummy = function() {
	      return 1;
	    };

	    Object.defineProperty(
	      {},
	      fragmentKey,
	      {enumerable: false, value: true}
	    );

	    Object.defineProperty(
	      {},
	      'key',
	      {enumerable: true, get: dummy}
	    );

	    canWarnForReactFragment = true;
	  } catch (x) { }

	  var proxyPropertyAccessWithWarning = function(obj, key) {
	    Object.defineProperty(obj, key, {
	      enumerable: true,
	      get: function() {
	        ("production" !== process.env.NODE_ENV ? warning(
	          this[didWarnKey],
	          'A ReactFragment is an opaque type. Accessing any of its ' +
	          'properties is deprecated. Pass it to one of the React.Children ' +
	          'helpers.'
	        ) : null);
	        this[didWarnKey] = true;
	        return this[fragmentKey][key];
	      },
	      set: function(value) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          this[didWarnKey],
	          'A ReactFragment is an immutable opaque type. Mutating its ' +
	          'properties is deprecated.'
	        ) : null);
	        this[didWarnKey] = true;
	        this[fragmentKey][key] = value;
	      }
	    });
	  };

	  var issuedWarnings = {};

	  var didWarnForFragment = function(fragment) {
	    // We use the keys and the type of the value as a heuristic to dedupe the
	    // warning to avoid spamming too much.
	    var fragmentCacheKey = '';
	    for (var key in fragment) {
	      fragmentCacheKey += key + ':' + (typeof fragment[key]) + ',';
	    }
	    var alreadyWarnedOnce = !!issuedWarnings[fragmentCacheKey];
	    issuedWarnings[fragmentCacheKey] = true;
	    return alreadyWarnedOnce;
	  };
	}

	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function(object) {
	    if ("production" !== process.env.NODE_ENV) {
	      if (typeof object !== 'object' || !object || Array.isArray(object)) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          false,
	          'React.addons.createFragment only accepts a single object.',
	          object
	        ) : null);
	        return object;
	      }
	      if (ReactElement.isValidElement(object)) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          false,
	          'React.addons.createFragment does not accept a ReactElement ' +
	          'without a wrapper object.'
	        ) : null);
	        return object;
	      }
	      if (canWarnForReactFragment) {
	        var proxy = {};
	        Object.defineProperty(proxy, fragmentKey, {
	          enumerable: false,
	          value: object
	        });
	        Object.defineProperty(proxy, didWarnKey, {
	          writable: true,
	          enumerable: false,
	          value: false
	        });
	        for (var key in object) {
	          proxyPropertyAccessWithWarning(proxy, key);
	        }
	        Object.preventExtensions(proxy);
	        return proxy;
	      }
	    }
	    return object;
	  },
	  // Extract the original keyed object from the fragment opaque type. Warn if
	  // a plain object is passed here.
	  extract: function(fragment) {
	    if ("production" !== process.env.NODE_ENV) {
	      if (canWarnForReactFragment) {
	        if (!fragment[fragmentKey]) {
	          ("production" !== process.env.NODE_ENV ? warning(
	            didWarnForFragment(fragment),
	            'Any use of a keyed object should be wrapped in ' +
	            'React.addons.createFragment(object) before being passed as a ' +
	            'child.'
	          ) : null);
	          return fragment;
	        }
	        return fragment[fragmentKey];
	      }
	    }
	    return fragment;
	  },
	  // Check if this is a fragment and if so, extract the keyed object. If it
	  // is a fragment-like object, warn that it should be wrapped. Ignore if we
	  // can't determine what kind of object this is.
	  extractIfFragment: function(fragment) {
	    if ("production" !== process.env.NODE_ENV) {
	      if (canWarnForReactFragment) {
	        // If it is the opaque type, return the keyed object.
	        if (fragment[fragmentKey]) {
	          return fragment[fragmentKey];
	        }
	        // Otherwise, check each property if it has an element, if it does
	        // it is probably meant as a fragment, so we can warn early. Defer,
	        // the warning to extract.
	        for (var key in fragment) {
	          if (fragment.hasOwnProperty(key) &&
	              ReactElement.isValidElement(fragment[key])) {
	            // This looks like a fragment object, we should provide an
	            // early warning.
	            return ReactFragment.extract(fragment);
	          }
	        }
	      }
	    }
	    return fragment;
	  }
	};

	module.exports = ReactFragment;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var ReactContext = __webpack_require__(12);
	var ReactCurrentOwner = __webpack_require__(17);

	var assign = __webpack_require__(13);
	var warning = __webpack_require__(15);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true
	};

	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} object
	 * @param {string} key
	 */
	function defineWarningProperty(object, key) {
	  Object.defineProperty(object, key, {

	    configurable: false,
	    enumerable: true,

	    get: function() {
	      if (!this._store) {
	        return null;
	      }
	      return this._store[key];
	    },

	    set: function(value) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        false,
	        'Don\'t set the %s property of the React element. Instead, ' +
	        'specify the correct value when initially creating the element.',
	        key
	      ) : null);
	      this._store[key] = value;
	    }

	  });
	}

	/**
	 * This is updated to true if the membrane is successfully created.
	 */
	var useMutationMembrane = false;

	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} element
	 */
	function defineMutationMembrane(prototype) {
	  try {
	    var pseudoFrozenProperties = {
	      props: true
	    };
	    for (var key in pseudoFrozenProperties) {
	      defineWarningProperty(prototype, key);
	    }
	    useMutationMembrane = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {string|object} ref
	 * @param {*} key
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function(type, key, ref, owner, context, props) {
	  // Built-in properties that belong on the element
	  this.type = type;
	  this.key = key;
	  this.ref = ref;

	  // Record the component responsible for creating this element.
	  this._owner = owner;

	  // TODO: Deprecate withContext, and then the context becomes accessible
	  // through the owner.
	  this._context = context;

	  if ("production" !== process.env.NODE_ENV) {
	    // The validation flag and props are currently mutative. We put them on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    this._store = {props: props, originalProps: assign({}, props)};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    try {
	      Object.defineProperty(this._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true
	      });
	    } catch (x) {
	    }
	    this._store.validated = false;

	    // We're not allowed to set props directly on the object so we early
	    // return and rely on the prototype membrane to forward to the backing
	    // store.
	    if (useMutationMembrane) {
	      Object.freeze(this);
	      return;
	    }
	  }

	  this.props = props;
	};

	// We intentionally don't expose the function on the constructor property.
	// ReactElement should be indistinguishable from a plain object.
	ReactElement.prototype = {
	  _isReactElement: true
	};

	if ("production" !== process.env.NODE_ENV) {
	  defineMutationMembrane(ReactElement.prototype);
	}

	ReactElement.createElement = function(type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : '' + config.key;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) &&
	          !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  return new ReactElement(
	    type,
	    key,
	    ref,
	    ReactCurrentOwner.current,
	    ReactContext.current,
	    props
	  );
	};

	ReactElement.createFactory = function(type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. <Foo />.type === Foo.type.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
	  var newElement = new ReactElement(
	    oldElement.type,
	    oldElement.key,
	    oldElement.ref,
	    oldElement._owner,
	    oldElement._context,
	    newProps
	  );

	  if ("production" !== process.env.NODE_ENV) {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }
	  return newElement;
	};

	ReactElement.cloneElement = function(element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) &&
	          !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return new ReactElement(
	    element.type,
	    key,
	    ref,
	    owner,
	    element._context,
	    props
	  );
	};

	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function(object) {
	  // ReactTestUtils is often used outside of beforeEach where as React is
	  // within it. This leads to two different instances of React on the same
	  // page. To identify a element from a different React instance we use
	  // a flag instead of an instanceof check.
	  var isElement = !!(object && object._isReactElement);
	  // if (isElement && !(object instanceof ReactElement)) {
	  // This is an indicator that you're using multiple versions of React at the
	  // same time. This will screw with ownership and stuff. Fix it, please.
	  // TODO: We could possibly warn here.
	  // }
	  return isElement;
	};

	module.exports = ReactElement;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactContext
	 */

	'use strict';

	var assign = __webpack_require__(13);
	var emptyObject = __webpack_require__(14);
	var warning = __webpack_require__(15);

	var didWarn = false;

	/**
	 * Keeps track of the current context.
	 *
	 * The context is automatically passed down the component ownership hierarchy
	 * and is accessible via `this.context` on ReactCompositeComponents.
	 */
	var ReactContext = {

	  /**
	   * @internal
	   * @type {object}
	   */
	  current: emptyObject,

	  /**
	   * Temporarily extends the current context while executing scopedCallback.
	   *
	   * A typical use case might look like
	   *
	   *  render: function() {
	   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
	   *
	   *    ));
	   *    return <div>{children}</div>;
	   *  }
	   *
	   * @param {object} newContext New context to merge into the existing context
	   * @param {function} scopedCallback Callback to run with the new context
	   * @return {ReactComponent|array<ReactComponent>}
	   */
	  withContext: function(newContext, scopedCallback) {
	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        didWarn,
	        'withContext is deprecated and will be removed in a future version. ' +
	        'Use a wrapper component with getChildContext instead.'
	      ) : null);

	      didWarn = true;
	    }

	    var result;
	    var previousContext = ReactContext.current;
	    ReactContext.current = assign({}, previousContext, newContext);
	    try {
	      result = scopedCallback();
	    } finally {
	      ReactContext.current = previousContext;
	    }
	    return result;
	  }

	};

	module.exports = ReactContext;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */

	"use strict";

	var emptyObject = {};

	if ("production" !== process.env.NODE_ENV) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	"use strict";

	var emptyFunction = __webpack_require__(16);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ("production" !== process.env.NODE_ENV) {
	  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
	      console.warn(message);
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };

	module.exports = emptyFunction;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 *
	 * The depth indicate how many composite components are above this render level.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var ReactElement = __webpack_require__(11);
	var ReactFragment = __webpack_require__(10);
	var ReactInstanceHandles = __webpack_require__(19);

	var getIteratorFn = __webpack_require__(21);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(15);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};

	var userProvidedKeyEscapeRegex = /[=.:]/g;

	var didWarnAboutMaps = false;

	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} key Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(
	    userProvidedKeyEscapeRegex,
	    userProvidedKeyEscaper
	  );
	}

	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!number} indexSoFar Number of children encountered until this point.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(
	  children,
	  nameSoFar,
	  indexSoFar,
	  callback,
	  traverseContext
	) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null ||
	      type === 'string' ||
	      type === 'number' ||
	      ReactElement.isValidElement(children)) {
	    callback(
	      traverseContext,
	      children,
	      // If it's the only child, treat the name as if it was wrapped in an array
	      // so that it's consistent if the number of children grows.
	      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar,
	      indexSoFar
	    );
	    return 1;
	  }

	  var child, nextName, nextIndex;
	  var subtreeCount = 0; // Count of children found in the current subtree.

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = (
	        (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	        getComponentKey(child, i)
	      );
	      nextIndex = indexSoFar + subtreeCount;
	      subtreeCount += traverseAllChildrenImpl(
	        child,
	        nextName,
	        nextIndex,
	        callback,
	        traverseContext
	      );
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = (
	            (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	            getComponentKey(child, ii++)
	          );
	          nextIndex = indexSoFar + subtreeCount;
	          subtreeCount += traverseAllChildrenImpl(
	            child,
	            nextName,
	            nextIndex,
	            callback,
	            traverseContext
	          );
	        }
	      } else {
	        if ("production" !== process.env.NODE_ENV) {
	          ("production" !== process.env.NODE_ENV ? warning(
	            didWarnAboutMaps,
	            'Using Maps as children is not yet fully supported. It is an ' +
	            'experimental feature that might be removed. Convert it to a ' +
	            'sequence / iterable of keyed ReactElements instead.'
	          ) : null);
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = (
	              (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	              wrapUserProvidedKey(entry[0]) + SUBSEPARATOR +
	              getComponentKey(child, 0)
	            );
	            nextIndex = indexSoFar + subtreeCount;
	            subtreeCount += traverseAllChildrenImpl(
	              child,
	              nextName,
	              nextIndex,
	              callback,
	              traverseContext
	            );
	          }
	        }
	      }
	    } else if (type === 'object') {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        children.nodeType !== 1,
	        'traverseAllChildren(...): Encountered an invalid child; DOM ' +
	        'elements are not valid children of React components.'
	      ) : invariant(children.nodeType !== 1));
	      var fragment = ReactFragment.extract(children);
	      for (var key in fragment) {
	        if (fragment.hasOwnProperty(key)) {
	          child = fragment[key];
	          nextName = (
	            (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	            wrapUserProvidedKey(key) + SUBSEPARATOR +
	            getComponentKey(child, 0)
	          );
	          nextIndex = indexSoFar + subtreeCount;
	          subtreeCount += traverseAllChildrenImpl(
	            child,
	            nextName,
	            nextIndex,
	            callback,
	            traverseContext
	          );
	        }
	      }
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
	}

	module.exports = traverseAllChildren;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */

	'use strict';

	var ReactRootIndex = __webpack_require__(20);

	var invariant = __webpack_require__(7);

	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;

	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 100;

	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}

	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}

	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || (
	    id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR
	  );
	}

	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return (
	    descendantID.indexOf(ancestorID) === 0 &&
	    isBoundary(descendantID, ancestorID.length)
	  );
	}

	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}

	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    isValidID(ancestorID) && isValidID(destinationID),
	    'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
	    ancestorID,
	    destinationID
	  ) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
	  ("production" !== process.env.NODE_ENV ? invariant(
	    isAncestorIDOf(ancestorID, destinationID),
	    'getNextDescendantID(...): React has made an invalid assumption about ' +
	    'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
	    ancestorID,
	    destinationID
	  ) : invariant(isAncestorIDOf(ancestorID, destinationID)));
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  var i;
	  for (i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}

	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    isValidID(longestCommonID),
	    'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
	    oneID,
	    twoID,
	    longestCommonID
	  ) : invariant(isValidID(longestCommonID)));
	  return longestCommonID;
	}

	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  ("production" !== process.env.NODE_ENV ? invariant(
	    start !== stop,
	    'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',
	    start
	  ) : invariant(start !== stop));
	  var traverseUp = isAncestorIDOf(stop, start);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    traverseUp || isAncestorIDOf(start, stop),
	    'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' +
	    'not have a parent path.',
	    start,
	    stop
	  ) : invariant(traverseUp || isAncestorIDOf(start, stop)));
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start; /* until break */; id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      depth++ < MAX_TREE_DEPTH,
	      'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' +
	      'traversing the React DOM ID tree. This may be due to malformed IDs: %s',
	      start, stop
	    ) : invariant(depth++ < MAX_TREE_DEPTH));
	  }
	}

	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {

	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function() {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },

	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function(rootID, name) {
	    return rootID + name;
	  },

	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function(id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },

	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },

	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function(targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },

	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function(targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getFirstCommonAncestorID: getFirstCommonAncestorID,

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,

	  isAncestorIDOf: isAncestorIDOf,

	  SEPARATOR: SEPARATOR

	};

	module.exports = ReactInstanceHandles;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function(_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};

	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};

	module.exports = ReactRootIndex;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * @typechecks static-only
	 */

	'use strict';

	/* global Symbol */
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (
	    (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL])
	  );
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var ReactUpdateQueue = __webpack_require__(23);

	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(15);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context) {
	  this.props = props;
	  this.context = context;
	}

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function(partialState, callback) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof partialState === 'object' ||
	    typeof partialState === 'function' ||
	    partialState == null,
	    'setState(...): takes an object of state variables to update or a ' +
	    'function which returns an object of state variables.'
	  ) : invariant(typeof partialState === 'object' ||
	  typeof partialState === 'function' ||
	  partialState == null));
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      partialState != null,
	      'setState(...): You passed an undefined or null state object; ' +
	      'instead, use forceUpdate().'
	    ) : null);
	  }
	  ReactUpdateQueue.enqueueSetState(this, partialState);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function(callback) {
	  ReactUpdateQueue.enqueueForceUpdate(this);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if ("production" !== process.env.NODE_ENV) {
	  var deprecatedAPIs = {
	    getDOMNode: [
	      'getDOMNode',
	      'Use React.findDOMNode(component) instead.'
	    ],
	    isMounted: [
	      'isMounted',
	      'Instead, make sure to clean up subscriptions and pending requests in ' +
	      'componentWillUnmount to prevent memory leaks.'
	    ],
	    replaceProps: [
	      'replaceProps',
	      'Instead, call React.render again at the top level.'
	    ],
	    replaceState: [
	      'replaceState',
	      'Refactor your code to use setState instead (see ' +
	      'https://github.com/facebook/react/issues/3236).'
	    ],
	    setProps: [
	      'setProps',
	      'Instead, call React.render again at the top level.'
	    ]
	  };
	  var defineDeprecationWarning = function(methodName, info) {
	    try {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function() {
	          ("production" !== process.env.NODE_ENV ? warning(
	            false,
	            '%s(...) is deprecated in plain JavaScript React classes. %s',
	            info[0],
	            info[1]
	          ) : null);
	          return undefined;
	        }
	      });
	    } catch (x) {
	      // IE will fail on defineProperty (es5-shim/sham too)
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdateQueue
	 */

	'use strict';

	var ReactLifeCycle = __webpack_require__(24);
	var ReactCurrentOwner = __webpack_require__(17);
	var ReactElement = __webpack_require__(11);
	var ReactInstanceMap = __webpack_require__(25);
	var ReactUpdates = __webpack_require__(26);

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(15);

	function enqueueUpdate(internalInstance) {
	  if (internalInstance !== ReactLifeCycle.currentlyMountingInstance) {
	    // If we're in a componentWillMount handler, don't enqueue a rerender
	    // because ReactUpdates assumes we're in a browser context (which is
	    // wrong for server rendering) and we're about to do a render anyway.
	    // See bug in #1740.
	    ReactUpdates.enqueueUpdate(internalInstance);
	  }
	}

	function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactCurrentOwner.current == null,
	    '%s(...): Cannot update during an existing state transition ' +
	    '(such as within `render`). Render methods should be a pure function ' +
	    'of props and state.',
	    callerName
	  ) : invariant(ReactCurrentOwner.current == null));

	  var internalInstance = ReactInstanceMap.get(publicInstance);
	  if (!internalInstance) {
	    if ("production" !== process.env.NODE_ENV) {
	      // Only warn when we have a callerName. Otherwise we should be silent.
	      // We're probably calling from enqueueCallback. We don't want to warn
	      // there because we already warned for the corresponding lifecycle method.
	      ("production" !== process.env.NODE_ENV ? warning(
	        !callerName,
	        '%s(...): Can only update a mounted or mounting component. ' +
	        'This usually means you called %s() on an unmounted ' +
	        'component. This is a no-op.',
	        callerName,
	        callerName
	      ) : null);
	    }
	    return null;
	  }

	  if (internalInstance === ReactLifeCycle.currentlyUnmountingInstance) {
	    return null;
	  }

	  return internalInstance;
	}

	/**
	 * ReactUpdateQueue allows for state updates to be scheduled into a later
	 * reconciliation step.
	 */
	var ReactUpdateQueue = {

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function(publicInstance, callback) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof callback === 'function',
	      'enqueueCallback(...): You called `setProps`, `replaceProps`, ' +
	      '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
	      'isn\'t callable.'
	    ) : invariant(typeof callback === 'function'));
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

	    // Previously we would throw an error if we didn't have an internal
	    // instance. Since we want to make it a no-op instead, we mirror the same
	    // behavior we have in other enqueue* methods.
	    // We also need to ignore callbacks in componentWillMount. See
	    // enqueueUpdates.
	    if (!internalInstance ||
	        internalInstance === ReactLifeCycle.currentlyMountingInstance) {
	      return null;
	    }

	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    // TODO: The callback here is ignored when setState is called from
	    // componentWillMount. Either fix it or disallow doing so completely in
	    // favor of getInitialState. Alternatively, we can disallow
	    // componentWillMount during server-side rendering.
	    enqueueUpdate(internalInstance);
	  },

	  enqueueCallbackInternal: function(internalInstance, callback) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof callback === 'function',
	      'enqueueCallback(...): You called `setProps`, `replaceProps`, ' +
	      '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
	      'isn\'t callable.'
	    ) : invariant(typeof callback === 'function'));
	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldUpdateComponent`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function(publicInstance) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'forceUpdate'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingForceUpdate = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function(publicInstance, completeState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'replaceState'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingStateQueue = [completeState];
	    internalInstance._pendingReplaceState = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function(publicInstance, partialState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'setState'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    var queue =
	      internalInstance._pendingStateQueue ||
	      (internalInstance._pendingStateQueue = []);
	    queue.push(partialState);

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function(publicInstance, partialProps) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'setProps'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    ("production" !== process.env.NODE_ENV ? invariant(
	      internalInstance._isTopLevel,
	      'setProps(...): You called `setProps` on a ' +
	      'component with a parent. This is an anti-pattern since props will ' +
	      'get reactively updated when rendered. Instead, change the owner\'s ' +
	      '`render` method to pass the correct value as props to the component ' +
	      'where it is created.'
	    ) : invariant(internalInstance._isTopLevel));

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var element = internalInstance._pendingElement ||
	                  internalInstance._currentElement;
	    var props = assign({}, element.props, partialProps);
	    internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(
	      element,
	      props
	    );

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function(publicInstance, props) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'replaceProps'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    ("production" !== process.env.NODE_ENV ? invariant(
	      internalInstance._isTopLevel,
	      'replaceProps(...): You called `replaceProps` on a ' +
	      'component with a parent. This is an anti-pattern since props will ' +
	      'get reactively updated when rendered. Instead, change the owner\'s ' +
	      '`render` method to pass the correct value as props to the component ' +
	      'where it is created.'
	    ) : invariant(internalInstance._isTopLevel));

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var element = internalInstance._pendingElement ||
	                  internalInstance._currentElement;
	    internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(
	      element,
	      props
	    );

	    enqueueUpdate(internalInstance);
	  },

	  enqueueElementInternal: function(internalInstance, newElement) {
	    internalInstance._pendingElement = newElement;
	    enqueueUpdate(internalInstance);
	  }

	};

	module.exports = ReactUpdateQueue;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLifeCycle
	 */

	'use strict';

	/**
	 * This module manages the bookkeeping when a component is in the process
	 * of being mounted or being unmounted. This is used as a way to enforce
	 * invariants (or warnings) when it is not recommended to call
	 * setState/forceUpdate.
	 *
	 * currentlyMountingInstance: During the construction phase, it is not possible
	 * to trigger an update since the instance is not fully mounted yet. However, we
	 * currently allow this as a convenience for mutating the initial state.
	 *
	 * currentlyUnmountingInstance: During the unmounting phase, the instance is
	 * still mounted and can therefore schedule an update. However, this is not
	 * recommended and probably an error since it's about to be unmounted.
	 * Therefore we still want to trigger in an error for that case.
	 */

	var ReactLifeCycle = {
	  currentlyMountingInstance: null,
	  currentlyUnmountingInstance: null
	};

	module.exports = ReactLifeCycle;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */

	'use strict';

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */

	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
	var ReactInstanceMap = {

	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function(key) {
	    key._reactInternalInstance = undefined;
	  },

	  get: function(key) {
	    return key._reactInternalInstance;
	  },

	  has: function(key) {
	    return key._reactInternalInstance !== undefined;
	  },

	  set: function(key, value) {
	    key._reactInternalInstance = value;
	  }

	};

	module.exports = ReactInstanceMap;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(27);
	var PooledClass = __webpack_require__(9);
	var ReactCurrentOwner = __webpack_require__(17);
	var ReactPerf = __webpack_require__(28);
	var ReactReconciler = __webpack_require__(29);
	var Transaction = __webpack_require__(36);

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(15);

	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;

	var batchingStrategy = null;

	function ensureInjected() {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactUpdates.ReactReconcileTransaction && batchingStrategy,
	    'ReactUpdates: must inject a reconcile transaction class and batching ' +
	    'strategy'
	  ) : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
	}

	var NESTED_UPDATES = {
	  initialize: function() {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function() {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};

	var UPDATE_QUEUEING = {
	  initialize: function() {
	    this.callbackQueue.reset();
	  },
	  close: function() {
	    this.callbackQueue.notifyAll();
	  }
	};

	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction =
	    ReactUpdates.ReactReconcileTransaction.getPooled();
	}

	assign(
	  ReactUpdatesFlushTransaction.prototype,
	  Transaction.Mixin, {
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  destructor: function() {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },

	  perform: function(method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(
	      this,
	      this.reconcileTransaction.perform,
	      this.reconcileTransaction,
	      method,
	      scope,
	      a
	    );
	  }
	});

	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

	function batchedUpdates(callback, a, b, c, d) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b, c, d);
	}

	/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountOrderComparator(c1, c2) {
	  return c1._mountOrder - c2._mountOrder;
	}

	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    len === dirtyComponents.length,
	    'Expected flush transaction\'s stored dirty-components length (%s) to ' +
	    'match dirty-components array length (%s).',
	    len,
	    dirtyComponents.length
	  ) : invariant(len === dirtyComponents.length));

	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountOrderComparator);

	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, it will still
	    // be here, but we assume that it has cleared its _pendingCallbacks and
	    // that performUpdateIfNecessary is a noop.
	    var component = dirtyComponents[i];

	    // If performUpdateIfNecessary happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = component._pendingCallbacks;
	    component._pendingCallbacks = null;

	    ReactReconciler.performUpdateIfNecessary(
	      component,
	      transaction.reconcileTransaction
	    );

	    if (callbacks) {
	      for (var j = 0; j < callbacks.length; j++) {
	        transaction.callbackQueue.enqueue(
	          callbacks[j],
	          component.getPublicInstance()
	        );
	      }
	    }
	  }
	}

	var flushBatchedUpdates = function() {
	  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	  // array and perform any updates enqueued by mount-ready handlers (i.e.,
	  // componentDidUpdate) but we need to check here too in order to catch
	  // updates enqueued by setState callbacks and asap calls.
	  while (dirtyComponents.length || asapEnqueued) {
	    if (dirtyComponents.length) {
	      var transaction = ReactUpdatesFlushTransaction.getPooled();
	      transaction.perform(runBatchedUpdates, null, transaction);
	      ReactUpdatesFlushTransaction.release(transaction);
	    }

	    if (asapEnqueued) {
	      asapEnqueued = false;
	      var queue = asapCallbackQueue;
	      asapCallbackQueue = CallbackQueue.getPooled();
	      queue.notifyAll();
	      CallbackQueue.release(queue);
	    }
	  }
	};
	flushBatchedUpdates = ReactPerf.measure(
	  'ReactUpdates',
	  'flushBatchedUpdates',
	  flushBatchedUpdates
	);

	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component) {
	  ensureInjected();

	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)
	  ("production" !== process.env.NODE_ENV ? warning(
	    ReactCurrentOwner.current == null,
	    'enqueueUpdate(): Render methods should be a pure function of props ' +
	    'and state; triggering nested component updates from render is not ' +
	    'allowed. If necessary, trigger nested updates in ' +
	    'componentDidUpdate.'
	  ) : null);

	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component);
	    return;
	  }

	  dirtyComponents.push(component);
	}

	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    batchingStrategy.isBatchingUpdates,
	    'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' +
	    'updates are not being batched.'
	  ) : invariant(batchingStrategy.isBatchingUpdates));
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}

	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function(ReconcileTransaction) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReconcileTransaction,
	      'ReactUpdates: must provide a reconcile transaction class'
	    ) : invariant(ReconcileTransaction));
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },

	  injectBatchingStrategy: function(_batchingStrategy) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      _batchingStrategy,
	      'ReactUpdates: must provide a batching strategy'
	    ) : invariant(_batchingStrategy));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof _batchingStrategy.batchedUpdates === 'function',
	      'ReactUpdates: must provide a batchedUpdates() function'
	    ) : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof _batchingStrategy.isBatchingUpdates === 'boolean',
	      'ReactUpdates: must provide an isBatchingUpdates boolean attribute'
	    ) : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
	    batchingStrategy = _batchingStrategy;
	  }
	};

	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,

	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};

	module.exports = ReactUpdates;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */

	'use strict';

	var PooledClass = __webpack_require__(9);

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);

	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}

	assign(CallbackQueue.prototype, {

	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function(callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },

	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function() {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        callbacks.length === contexts.length,
	        'Mismatched list of contexts in callback queue'
	      ) : invariant(callbacks.length === contexts.length));
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0, l = callbacks.length; i < l; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },

	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function() {
	    this._callbacks = null;
	    this._contexts = null;
	  },

	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function() {
	    this.reset();
	  }

	});

	PooledClass.addPoolingTo(CallbackQueue);

	module.exports = CallbackQueue;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,

	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,

	  /**
	   * @param {object} object
	   * @param {string} objectName
	   * @param {object<string>} methodNames
	   */
	  measureMethods: function(object, objectName, methodNames) {
	    if ("production" !== process.env.NODE_ENV) {
	      for (var key in methodNames) {
	        if (!methodNames.hasOwnProperty(key)) {
	          continue;
	        }
	        object[key] = ReactPerf.measure(
	          objectName,
	          methodNames[key],
	          object[key]
	        );
	      }
	    }
	  },

	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function(objName, fnName, func) {
	    if ("production" !== process.env.NODE_ENV) {
	      var measuredFunc = null;
	      var wrapper = function() {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },

	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function(measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};

	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}

	module.exports = ReactPerf;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconciler
	 */

	'use strict';

	var ReactRef = __webpack_require__(30);
	var ReactElementValidator = __webpack_require__(32);

	/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
	function attachRefs() {
	  ReactRef.attachRefs(this, this._currentElement);
	}

	var ReactReconciler = {

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function(internalInstance, rootID, transaction, context) {
	    var markup = internalInstance.mountComponent(rootID, transaction, context);
	    if ("production" !== process.env.NODE_ENV) {
	      ReactElementValidator.checkAndWarnForMutatedProps(
	        internalInstance._currentElement
	      );
	    }
	    transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function(internalInstance) {
	    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
	    internalInstance.unmountComponent();
	  },

	  /**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
	  receiveComponent: function(
	    internalInstance, nextElement, transaction, context
	  ) {
	    var prevElement = internalInstance._currentElement;

	    if (nextElement === prevElement && nextElement._owner != null) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for an element created outside a composite to be
	      // deeply mutated and reused.
	      return;
	    }

	    if ("production" !== process.env.NODE_ENV) {
	      ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
	    }

	    var refsChanged = ReactRef.shouldUpdateRefs(
	      prevElement,
	      nextElement
	    );

	    if (refsChanged) {
	      ReactRef.detachRefs(internalInstance, prevElement);
	    }

	    internalInstance.receiveComponent(nextElement, transaction, context);

	    if (refsChanged) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	  },

	  /**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function(
	    internalInstance,
	    transaction
	  ) {
	    internalInstance.performUpdateIfNecessary(transaction);
	  }

	};

	module.exports = ReactReconciler;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRef
	 */

	'use strict';

	var ReactOwner = __webpack_require__(31);

	var ReactRef = {};

	function attachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(component.getPublicInstance());
	  } else {
	    // Legacy ref
	    ReactOwner.addComponentAsRefTo(component, ref, owner);
	  }
	}

	function detachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(null);
	  } else {
	    // Legacy ref
	    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
	  }
	}

	ReactRef.attachRefs = function(instance, element) {
	  var ref = element.ref;
	  if (ref != null) {
	    attachRef(ref, instance, element._owner);
	  }
	};

	ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
	  // If either the owner or a `ref` has changed, make sure the newest owner
	  // has stored a reference to `this`, and the previous owner (if different)
	  // has forgotten the reference to `this`. We use the element instead
	  // of the public this.props because the post processing cannot determine
	  // a ref. The ref conceptually lives on the element.

	  // TODO: Should this even be possible? The owner cannot change because
	  // it's forbidden by shouldUpdateReactComponent. The ref can change
	  // if you swap the keys of but not the refs. Reconsider where this check
	  // is made. It probably belongs where the key checking and
	  // instantiateReactComponent is done.

	  return (
	    nextElement._owner !== prevElement._owner ||
	    nextElement.ref !== prevElement.ref
	  );
	};

	ReactRef.detachRefs = function(instance, element) {
	  var ref = element.ref;
	  if (ref != null) {
	    detachRef(ref, instance, element._owner);
	  }
	};

	module.exports = ReactRef;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {

	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function(object) {
	    return !!(
	      (object &&
	      typeof object.attachRef === 'function' && typeof object.detachRef === 'function')
	    );
	  },

	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function(component, ref, owner) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to add a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    owner.attachRef(ref, component);
	  },

	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function(component, ref, owner) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to remove a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
	      owner.detachRef(ref);
	    }
	  }

	};

	module.exports = ReactOwner;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactElement = __webpack_require__(11);
	var ReactFragment = __webpack_require__(10);
	var ReactPropTypeLocations = __webpack_require__(33);
	var ReactPropTypeLocationNames = __webpack_require__(34);
	var ReactCurrentOwner = __webpack_require__(17);
	var ReactNativeComponent = __webpack_require__(35);

	var getIteratorFn = __webpack_require__(21);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(15);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	var loggedTypeFailures = {};

	var NUMERIC_PROPERTY_REGEX = /^\d+$/;

	/**
	 * Gets the instance's name for use in warnings.
	 *
	 * @internal
	 * @return {?string} Display name or undefined
	 */
	function getName(instance) {
	  var publicInstance = instance && instance.getPublicInstance();
	  if (!publicInstance) {
	    return undefined;
	  }
	  var constructor = publicInstance.constructor;
	  if (!constructor) {
	    return undefined;
	  }
	  return constructor.displayName || constructor.name || undefined;
	}

	/**
	 * Gets the current owner's displayName for use in warnings.
	 *
	 * @internal
	 * @return {?string} Display name or undefined
	 */
	function getCurrentOwnerDisplayName() {
	  var current = ReactCurrentOwner.current;
	  return (
	    current && getName(current) || undefined
	  );
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  warnAndMonitorForKeyUse(
	    'Each child in an array or iterator should have a unique "key" prop.',
	    element,
	    parentType
	  );
	}

	/**
	 * Warn if the key is being defined as an object property but has an incorrect
	 * value.
	 *
	 * @internal
	 * @param {string} name Property name of the key.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validatePropertyKey(name, element, parentType) {
	  if (!NUMERIC_PROPERTY_REGEX.test(name)) {
	    return;
	  }
	  warnAndMonitorForKeyUse(
	    'Child objects should have non-numeric keys so ordering is preserved.',
	    element,
	    parentType
	  );
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} message The base warning that gets output.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function warnAndMonitorForKeyUse(message, element, parentType) {
	  var ownerName = getCurrentOwnerDisplayName();
	  var parentName = typeof parentType === 'string' ?
	    parentType : parentType.displayName || parentType.name;

	  var useName = ownerName || parentName;
	  var memoizer = ownerHasKeyUseWarning[message] || (
	    (ownerHasKeyUseWarning[message] = {})
	  );
	  if (memoizer.hasOwnProperty(useName)) {
	    return;
	  }
	  memoizer[useName] = true;

	  var parentOrOwnerAddendum =
	    ownerName ? (" Check the render method of " + ownerName + ".") :
	    parentName ? (" Check the React.render call using <" + parentName + ">.") :
	    '';

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwnerAddendum = '';
	  if (element &&
	      element._owner &&
	      element._owner !== ReactCurrentOwner.current) {
	    // Name of the component that originally created this child.
	    var childOwnerName = getName(element._owner);

	    childOwnerAddendum = (" It was passed a child from " + childOwnerName + ".");
	  }

	  ("production" !== process.env.NODE_ENV ? warning(
	    false,
	    message + '%s%s See https://fb.me/react-warning-keys for more information.',
	    parentOrOwnerAddendum,
	    childOwnerAddendum
	  ) : null);
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    node._store.validated = true;
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    } else if (typeof node === 'object') {
	      var fragment = ReactFragment.extractIfFragment(node);
	      for (var key in fragment) {
	        if (fragment.hasOwnProperty(key)) {
	          validatePropertyKey(key, fragment[key], parentType);
	        }
	      }
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        ("production" !== process.env.NODE_ENV ? invariant(
	          typeof propTypes[propName] === 'function',
	          '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	          'React.PropTypes.',
	          componentName || 'React class',
	          ReactPropTypeLocationNames[location],
	          propName
	        ) : invariant(typeof propTypes[propName] === 'function'));
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum(this);
	        ("production" !== process.env.NODE_ENV ? warning(false, 'Failed propType: %s%s', error.message, addendum) : null);
	      }
	    }
	  }
	}

	var warnedPropsMutations = {};

	/**
	 * Warn about mutating props when setting `propName` on `element`.
	 *
	 * @param {string} propName The string key within props that was set
	 * @param {ReactElement} element
	 */
	function warnForPropsMutation(propName, element) {
	  var type = element.type;
	  var elementName = typeof type === 'string' ? type : type.displayName;
	  var ownerName = element._owner ?
	    element._owner.getPublicInstance().constructor.displayName : null;

	  var warningKey = propName + '|' + elementName + '|' + ownerName;
	  if (warnedPropsMutations.hasOwnProperty(warningKey)) {
	    return;
	  }
	  warnedPropsMutations[warningKey] = true;

	  var elementInfo = '';
	  if (elementName) {
	    elementInfo = ' <' + elementName + ' />';
	  }
	  var ownerInfo = '';
	  if (ownerName) {
	    ownerInfo = ' The element was created by ' + ownerName + '.';
	  }

	  ("production" !== process.env.NODE_ENV ? warning(
	    false,
	    'Don\'t set .props.%s of the React component%s. Instead, specify the ' +
	    'correct value when initially creating the element or use ' +
	    'React.cloneElement to make a new element with updated props.%s',
	    propName,
	    elementInfo,
	    ownerInfo
	  ) : null);
	}

	// Inline Object.is polyfill
	function is(a, b) {
	  if (a !== a) {
	    // NaN
	    return b !== b;
	  }
	  if (a === 0 && b === 0) {
	    // +-0
	    return 1 / a === 1 / b;
	  }
	  return a === b;
	}

	/**
	 * Given an element, check if its props have been mutated since element
	 * creation (or the last call to this function). In particular, check if any
	 * new props have been added, which we can't directly catch by defining warning
	 * properties on the props object.
	 *
	 * @param {ReactElement} element
	 */
	function checkAndWarnForMutatedProps(element) {
	  if (!element._store) {
	    // Element was created using `new ReactElement` directly or with
	    // `ReactElement.createElement`; skip mutation checking
	    return;
	  }

	  var originalProps = element._store.originalProps;
	  var props = element.props;

	  for (var propName in props) {
	    if (props.hasOwnProperty(propName)) {
	      if (!originalProps.hasOwnProperty(propName) ||
	          !is(originalProps[propName], props[propName])) {
	        warnForPropsMutation(propName, element);

	        // Copy over the new value so that the two props objects match again
	        originalProps[propName] = props[propName];
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  if (element.type == null) {
	    // This has already warned. Don't throw.
	    return;
	  }
	  // Extract the component class from the element. Converts string types
	  // to a composite class which may have propTypes.
	  // TODO: Validating a string's propTypes is not decoupled from the
	  // rendering target which is problematic.
	  var componentClass = ReactNativeComponent.getComponentClassForElement(
	    element
	  );
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(
	      name,
	      componentClass.propTypes,
	      element.props,
	      ReactPropTypeLocations.prop
	    );
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    ("production" !== process.env.NODE_ENV ? warning(
	      componentClass.getDefaultProps.isReactClassApproved,
	      'getDefaultProps is only used on classic React.createClass ' +
	      'definitions. Use a static property named `defaultProps` instead.'
	    ) : null);
	  }
	}

	var ReactElementValidator = {

	  checkAndWarnForMutatedProps: checkAndWarnForMutatedProps,

	  createElement: function(type, props, children) {
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    ("production" !== process.env.NODE_ENV ? warning(
	      type != null,
	      'React.createElement: type should not be null or undefined. It should ' +
	        'be a string (for DOM elements) or a ReactClass (for composite ' +
	        'components).'
	    ) : null);

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(
	      null,
	      type
	    );
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if ("production" !== process.env.NODE_ENV) {
	      try {
	        Object.defineProperty(
	          validatedFactory,
	          'type',
	          {
	            enumerable: false,
	            get: function() {
	              ("production" !== process.env.NODE_ENV ? warning(
	                false,
	                'Factory.type is deprecated. Access the class directly ' +
	                'before passing it to createFactory.'
	              ) : null);
	              Object.defineProperty(this, 'type', {
	                value: type
	              });
	              return type;
	            }
	          }
	        );
	      } catch (x) {
	        // IE will fail on defineProperty (es5-shim/sham too)
	      }
	    }


	    return validatedFactory;
	  },

	  cloneElement: function(element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(6);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if ("production" !== process.env.NODE_ENV) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */

	'use strict';

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);

	var autoGenerateWrapperClass = null;
	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags
	var tagToComponentClass = {};
	var textComponentClass = null;

	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function(componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a text component class that takes the text string to be
	  // rendered as props.
	  injectTextComponentClass: function(componentClass) {
	    textComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function(componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  },
	  // Temporary hack since we expect DOM refs to behave like composites,
	  // for this release.
	  injectAutoWrapper: function(wrapperFactory) {
	    autoGenerateWrapperClass = wrapperFactory;
	  }
	};

	/**
	 * Get a composite component wrapper class for a specific tag.
	 *
	 * @param {ReactElement} element The tag for which to get the class.
	 * @return {function} The React class constructor function.
	 */
	function getComponentClassForElement(element) {
	  if (typeof element.type === 'function') {
	    return element.type;
	  }
	  var tag = element.type;
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
	  }
	  return componentClass;
	}

	/**
	 * Get a native internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
	function createInternalComponent(element) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    genericComponentClass,
	    'There is no registered component for the tag %s',
	    element.type
	  ) : invariant(genericComponentClass));
	  return new genericComponentClass(element.type, element.props);
	}

	/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
	function createInstanceForText(text) {
	  return new textComponentClass(text);
	}

	/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
	function isTextComponent(component) {
	  return component instanceof textComponentClass;
	}

	var ReactNativeComponent = {
	  getComponentClassForElement: getComponentClassForElement,
	  createInternalComponent: createInternalComponent,
	  createInstanceForText: createInstanceForText,
	  isTextComponent: isTextComponent,
	  injection: ReactNativeComponentInjection
	};

	module.exports = ReactNativeComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM updates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function() {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (!this.wrapperInitData) {
	      this.wrapperInitData = [];
	    } else {
	      this.wrapperInitData.length = 0;
	    }
	    this._isInTransaction = false;
	  },

	  _isInTransaction: false,

	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,

	  isInTransaction: function() {
	    return !!this._isInTransaction;
	  },

	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} args... Arguments to pass to the method (optional).
	   *                           Helps prevent need to bind in many cases.
	   * @return Return value from `method`.
	   */
	  perform: function(method, scope, a, b, c, d, e, f) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !this.isInTransaction(),
	      'Transaction.perform(...): Cannot initialize a transaction when there ' +
	      'is already an outstanding transaction.'
	    ) : invariant(!this.isInTransaction()));
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {
	          }
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },

	  initializeAll: function(startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ?
	          wrapper.initialize.call(this) :
	          null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {
	          }
	        }
	      }
	    }
	  },

	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function(startIndex) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      this.isInTransaction(),
	      'Transaction.closeAll(): Cannot close transaction when none are open.'
	    ) : invariant(this.isInTransaction()));
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
	          wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {
	          }
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};

	var Transaction = {

	  Mixin: Mixin,

	  /**
	   * Token to look for to determine if an error occured.
	   */
	  OBSERVED_ERROR: {}

	};

	module.exports = Transaction;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var ReactComponent = __webpack_require__(22);
	var ReactCurrentOwner = __webpack_require__(17);
	var ReactElement = __webpack_require__(11);
	var ReactErrorUtils = __webpack_require__(38);
	var ReactInstanceMap = __webpack_require__(25);
	var ReactLifeCycle = __webpack_require__(24);
	var ReactPropTypeLocations = __webpack_require__(33);
	var ReactPropTypeLocationNames = __webpack_require__(34);
	var ReactUpdateQueue = __webpack_require__(23);

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);
	var keyMirror = __webpack_require__(6);
	var keyOf = __webpack_require__(39);
	var warning = __webpack_require__(15);

	var MIXINS_KEY = keyOf({mixins: null});

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,



	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,



	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function(Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function(Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function(Constructor, childContextTypes) {
	    if ("production" !== process.env.NODE_ENV) {
	      validateTypeDef(
	        Constructor,
	        childContextTypes,
	        ReactPropTypeLocations.childContext
	      );
	    }
	    Constructor.childContextTypes = assign(
	      {},
	      Constructor.childContextTypes,
	      childContextTypes
	    );
	  },
	  contextTypes: function(Constructor, contextTypes) {
	    if ("production" !== process.env.NODE_ENV) {
	      validateTypeDef(
	        Constructor,
	        contextTypes,
	        ReactPropTypeLocations.context
	      );
	    }
	    Constructor.contextTypes = assign(
	      {},
	      Constructor.contextTypes,
	      contextTypes
	    );
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function(Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(
	        Constructor.getDefaultProps,
	        getDefaultProps
	      );
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function(Constructor, propTypes) {
	    if ("production" !== process.env.NODE_ENV) {
	      validateTypeDef(
	        Constructor,
	        propTypes,
	        ReactPropTypeLocations.prop
	      );
	    }
	    Constructor.propTypes = assign(
	      {},
	      Constructor.propTypes,
	      propTypes
	    );
	  },
	  statics: function(Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  }
	};

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but not in __DEV__
	      ("production" !== process.env.NODE_ENV ? warning(
	        typeof typeDef[propName] === 'function',
	        '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	        'React.PropTypes.',
	        Constructor.displayName || 'ReactClass',
	        ReactPropTypeLocationNames[location],
	        propName
	      ) : null);
	    }
	  }
	}

	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ?
	    ReactClassInterface[name] :
	    null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      specPolicy === SpecPolicy.OVERRIDE_BASE,
	      'ReactClassInterface: You are attempting to override ' +
	      '`%s` from your class specification. Ensure that your method names ' +
	      'do not overlap with React methods.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      specPolicy === SpecPolicy.DEFINE_MANY ||
	      specPolicy === SpecPolicy.DEFINE_MANY_MERGED,
	      'ReactClassInterface: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be due ' +
	      'to a mixin.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.DEFINE_MANY ||
	    specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof spec !== 'function',
	    'ReactClass: You\'re attempting to ' +
	    'use a component class as a mixin. Instead, just use a regular object.'
	  ) : invariant(typeof spec !== 'function'));
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !ReactElement.isValidElement(spec),
	    'ReactClass: You\'re attempting to ' +
	    'use a component as a mixin. Instead, just use a regular object.'
	  ) : invariant(!ReactElement.isValidElement(spec)));

	  var proto = Constructor.prototype;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above
	      continue;
	    }

	    var property = spec[name];
	    validateMethodOverride(proto, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod =
	        ReactClassInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var markedDontBind = property && property.__reactDontBind;
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind =
	        isFunction &&
	        !isReactClassMethod &&
	        !isAlreadyDefined &&
	        !markedDontBind;

	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride
	          ("production" !== process.env.NODE_ENV ? invariant(
	            isReactClassMethod && (
	              (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)
	            ),
	            'ReactClass: Unexpected spec policy %s for key %s ' +
	            'when mixing in component specs.',
	            specPolicy,
	            name
	          ) : invariant(isReactClassMethod && (
	            (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)
	          )));

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if ("production" !== process.env.NODE_ENV) {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !isReserved,
	      'ReactClass: You are attempting to define a reserved ' +
	      'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	      'as an instance property instead; it will still be accessible on the ' +
	      'constructor.',
	      name
	    ) : invariant(!isReserved));

	    var isInherited = name in Constructor;
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !isInherited,
	      'ReactClass: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be ' +
	      'due to a mixin.',
	      name
	    ) : invariant(!isInherited));
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    one && two && typeof one === 'object' && typeof two === 'object',
	    'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	  ) : invariant(one && two && typeof one === 'object' && typeof two === 'object'));

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        one[key] === undefined,
	        'mergeIntoWithNoDuplicateKeys(): ' +
	        'Tried to merge two objects with the same key: `%s`. This conflict ' +
	        'may be due to a mixin; in particular, this may be caused by two ' +
	        'getInitialState() or getDefaultProps() methods returning objects ' +
	        'with clashing keys.',
	        key
	      ) : invariant(one[key] === undefined));
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if ("production" !== process.env.NODE_ENV) {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    /* eslint-disable block-scoped-var, no-undef */
	    boundMethod.bind = function(newThis ) {for (var args=[],$__0=1,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          false,
	          'bind(): React component methods may only be bound to the ' +
	          'component instance. See %s',
	          componentName
	        ) : null);
	      } else if (!args.length) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          false,
	          'bind(): You are binding a component method to the component. ' +
	          'React does this for you automatically in a high-performance ' +
	          'way, so you can safely remove this call. See %s',
	          componentName
	        ) : null);
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	      /* eslint-enable */
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      var method = component.__reactAutoBindMap[autoBindKey];
	      component[autoBindKey] = bindAutoBindMethod(
	        component,
	        ReactErrorUtils.guard(
	          method,
	          component.constructor.displayName + '.' + autoBindKey
	        )
	      );
	    }
	  }
	}

	var typeDeprecationDescriptor = {
	  enumerable: false,
	  get: function() {
	    var displayName = this.displayName || this.name || 'Component';
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      '%s.type is deprecated. Use %s directly to access the class.',
	      displayName,
	      displayName
	    ) : null);
	    Object.defineProperty(this, 'type', {
	      value: this
	    });
	    return this;
	  }
	};

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function(newState, callback) {
	    ReactUpdateQueue.enqueueReplaceState(this, newState);
	    if (callback) {
	      ReactUpdateQueue.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function() {
	    if ("production" !== process.env.NODE_ENV) {
	      var owner = ReactCurrentOwner.current;
	      if (owner !== null) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          owner._warnedAboutRefsInRender,
	          '%s is accessing isMounted inside its render() function. ' +
	          'render() should be a pure function of props and state. It should ' +
	          'never access something that requires stale data from the previous ' +
	          'render, such as refs. Move this logic to componentDidMount and ' +
	          'componentDidUpdate instead.',
	          owner.getName() || 'A component'
	        ) : null);
	        owner._warnedAboutRefsInRender = true;
	      }
	    }
	    var internalInstance = ReactInstanceMap.get(this);
	    return (
	      internalInstance &&
	      internalInstance !== ReactLifeCycle.currentlyMountingInstance
	    );
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  setProps: function(partialProps, callback) {
	    ReactUpdateQueue.enqueueSetProps(this, partialProps);
	    if (callback) {
	      ReactUpdateQueue.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Replace all the props.
	   *
	   * @param {object} newProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  replaceProps: function(newProps, callback) {
	    ReactUpdateQueue.enqueueReplaceProps(this, newProps);
	    if (callback) {
	      ReactUpdateQueue.enqueueCallback(this, callback);
	    }
	  }
	};

	var ReactClassComponent = function() {};
	assign(
	  ReactClassComponent.prototype,
	  ReactComponent.prototype,
	  ReactClassMixin
	);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function(spec) {
	    var Constructor = function(props, context) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if ("production" !== process.env.NODE_ENV) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	          'JSX instead. See: https://fb.me/react-legacyfactory'
	        ) : null);
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindMap) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if ("production" !== process.env.NODE_ENV) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (typeof initialState === 'undefined' &&
	            this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      ("production" !== process.env.NODE_ENV ? invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      ) : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;

	    injectedMixins.forEach(
	      mixSpecIntoComponent.bind(null, Constructor)
	    );

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if ("production" !== process.env.NODE_ENV) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    ("production" !== process.env.NODE_ENV ? invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    ) : invariant(Constructor.prototype.render));

	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	        'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	        'The name is phrased as a question because the function is ' +
	        'expected to return a value.',
	        spec.displayName || 'A component'
	      ) : null);
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    // Legacy hook
	    Constructor.type = Constructor;
	    if ("production" !== process.env.NODE_ENV) {
	      try {
	        Object.defineProperty(Constructor, 'type', typeDeprecationDescriptor);
	      } catch (x) {
	        // IE will fail on defineProperty (es5-shim/sham too)
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */

	"use strict";

	var ReactErrorUtils = {
	  /**
	   * Creates a guarded version of a function. This is supposed to make debugging
	   * of event handlers easier. To aid debugging with the browser's debugger,
	   * this currently simply returns the original function.
	   *
	   * @param {function} func Function to be executed
	   * @param {string} name The name of the guard
	   * @return {function}
	   */
	  guard: function(func, name) {
	    return func;
	  }
	};

	module.exports = ReactErrorUtils;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without loosing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};


	module.exports = keyOf;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 * @typechecks static-only
	 */

	'use strict';

	var ReactElement = __webpack_require__(11);
	var ReactElementValidator = __webpack_require__(32);

	var mapObject = __webpack_require__(41);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if ("production" !== process.env.NODE_ENV) {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOM = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOM;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextComponent
	 * @typechecks static-only
	 */

	'use strict';

	var DOMPropertyOperations = __webpack_require__(43);
	var ReactComponentBrowserEnvironment =
	  __webpack_require__(47);
	var ReactDOMComponent = __webpack_require__(87);

	var assign = __webpack_require__(13);
	var escapeTextContentForBrowser = __webpack_require__(46);

	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactDOMTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactDOMTextComponent = function(props) {
	  // This constructor and its argument is currently used by mocks.
	};

	assign(ReactDOMTextComponent.prototype, {

	  /**
	   * @param {ReactText} text
	   * @internal
	   */
	  construct: function(text) {
	    // TODO: This is really a ReactText (ReactNode), not a ReactElement
	    this._currentElement = text;
	    this._stringText = '' + text;

	    // Properties
	    this._rootNodeID = null;
	    this._mountIndex = 0;
	  },

	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function(rootID, transaction, context) {
	    this._rootNodeID = rootID;
	    var escapedText = escapeTextContentForBrowser(this._stringText);

	    if (transaction.renderToStaticMarkup) {
	      // Normally we'd wrap this in a `span` for the reasons stated above, but
	      // since this is a situation where React won't take over (static pages),
	      // we can simply return the text as it is.
	      return escapedText;
	    }

	    return (
	      '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' +
	        escapedText +
	      '</span>'
	    );
	  },

	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function(nextText, transaction) {
	    if (nextText !== this._currentElement) {
	      this._currentElement = nextText;
	      var nextStringText = '' + nextText;
	      if (nextStringText !== this._stringText) {
	        // TODO: Save this as pending props and use performUpdateIfNecessary
	        // and/or updateComponent to do the actual update for consistency with
	        // other component types?
	        this._stringText = nextStringText;
	        ReactDOMComponent.BackendIDOperations.updateTextContentByID(
	          this._rootNodeID,
	          nextStringText
	        );
	      }
	    }
	  },

	  unmountComponent: function() {
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	  }

	});

	module.exports = ReactDOMTextComponent;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(44);

	var quoteAttributeValueForBrowser = __webpack_require__(45);
	var warning = __webpack_require__(15);

	function shouldIgnoreValue(name, value) {
	  return value == null ||
	    (DOMProperty.hasBooleanValue[name] && !value) ||
	    (DOMProperty.hasNumericValue[name] && isNaN(value)) ||
	    (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) ||
	    (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
	}

	if ("production" !== process.env.NODE_ENV) {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};

	  var warnUnknownProperty = function(name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] ||
	        warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }

	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();

	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = (
	      DOMProperty.isCustomAttribute(lowerCasedName) ?
	        lowerCasedName :
	      DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ?
	        DOMProperty.getPossibleStandardName[lowerCasedName] :
	        null
	    );

	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    ("production" !== process.env.NODE_ENV ? warning(
	      standardName == null,
	      'Unknown DOM property %s. Did you mean %s?',
	      name,
	      standardName
	    ) : null);

	  };
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {

	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function(id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' +
	      quoteAttributeValueForBrowser(id);
	  },

	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function(name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      if (shouldIgnoreValue(name, value)) {
	        return '';
	      }
	      var attributeName = DOMProperty.getAttributeName[name];
	      if (DOMProperty.hasBooleanValue[name] ||
	          (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
	        return attributeName;
	      }
	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    } else if ("production" !== process.env.NODE_ENV) {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },

	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function(node, name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(name, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== ('' + value)) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        node.removeAttribute(name);
	      } else {
	        node.setAttribute(name, '' + value);
	      }
	    } else if ("production" !== process.env.NODE_ENV) {
	      warnUnknownProperty(name);
	    }
	  },

	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function(node, name) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        node.removeAttribute(DOMProperty.getAttributeName[name]);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        var defaultValue = DOMProperty.getDefaultValueForProperty(
	          node.nodeName,
	          propName
	        );
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if ("production" !== process.env.NODE_ENV) {
	      warnUnknownProperty(name);
	    }
	  }

	};

	module.exports = DOMPropertyOperations;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */

	/*jslint bitwise: true */

	'use strict';

	var invariant = __webpack_require__(7);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function(domPropertyConfig) {
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(
	        domPropertyConfig.isCustomAttribute
	      );
	    }

	    for (var propName in Properties) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !DOMProperty.isStandardName.hasOwnProperty(propName),
	        'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' +
	        '\'%s\' which has already been injected. You may be accidentally ' +
	        'injecting the same DOM property config twice, or you may be ' +
	        'injecting two configs that have conflicting property names.',
	        propName
	      ) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));

	      DOMProperty.isStandardName[propName] = true;

	      var lowerCased = propName.toLowerCase();
	      DOMProperty.getPossibleStandardName[lowerCased] = propName;

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        DOMProperty.getPossibleStandardName[attributeName] = propName;
	        DOMProperty.getAttributeName[propName] = attributeName;
	      } else {
	        DOMProperty.getAttributeName[propName] = lowerCased;
	      }

	      DOMProperty.getPropertyName[propName] =
	        DOMPropertyNames.hasOwnProperty(propName) ?
	          DOMPropertyNames[propName] :
	          propName;

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
	      } else {
	        DOMProperty.getMutationMethod[propName] = null;
	      }

	      var propConfig = Properties[propName];
	      DOMProperty.mustUseAttribute[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
	      DOMProperty.mustUseProperty[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
	      DOMProperty.hasSideEffects[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
	      DOMProperty.hasBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
	      DOMProperty.hasNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
	      DOMProperty.hasPositiveNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
	      DOMProperty.hasOverloadedBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);

	      ("production" !== process.env.NODE_ENV ? invariant(
	        !DOMProperty.mustUseAttribute[propName] ||
	          !DOMProperty.mustUseProperty[propName],
	        'DOMProperty: Cannot require using both attribute and property: %s',
	        propName
	      ) : invariant(!DOMProperty.mustUseAttribute[propName] ||
	        !DOMProperty.mustUseProperty[propName]));
	      ("production" !== process.env.NODE_ENV ? invariant(
	        DOMProperty.mustUseProperty[propName] ||
	          !DOMProperty.hasSideEffects[propName],
	        'DOMProperty: Properties that have side effects must use property: %s',
	        propName
	      ) : invariant(DOMProperty.mustUseProperty[propName] ||
	        !DOMProperty.hasSideEffects[propName]));
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !!DOMProperty.hasBooleanValue[propName] +
	          !!DOMProperty.hasNumericValue[propName] +
	          !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1,
	        'DOMProperty: Value can be one of boolean, overloaded boolean, or ' +
	        'numeric value, but not a combination: %s',
	        propName
	      ) : invariant(!!DOMProperty.hasBooleanValue[propName] +
	        !!DOMProperty.hasNumericValue[propName] +
	        !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
	    }
	  }
	};
	var defaultValueCache = {};

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-reactid',

	  /**
	   * Checks whether a property name is a standard property.
	   * @type {Object}
	   */
	  isStandardName: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties.
	   * @type {Object}
	   */
	  getPossibleStandardName: {},

	  /**
	   * Mapping from normalized names to attribute names that differ. Attribute
	   * names are used when rendering markup or with `*Attribute()`.
	   * @type {Object}
	   */
	  getAttributeName: {},

	  /**
	   * Mapping from normalized names to properties on DOM node instances.
	   * (This includes properties that mutate due to external factors.)
	   * @type {Object}
	   */
	  getPropertyName: {},

	  /**
	   * Mapping from normalized names to mutation methods. This will only exist if
	   * mutation cannot be set simply by the property or `setAttribute()`.
	   * @type {Object}
	   */
	  getMutationMethod: {},

	  /**
	   * Whether the property must be accessed and mutated as an object property.
	   * @type {Object}
	   */
	  mustUseAttribute: {},

	  /**
	   * Whether the property must be accessed and mutated using `*Attribute()`.
	   * (This includes anything that fails `<propName> in <element>`.)
	   * @type {Object}
	   */
	  mustUseProperty: {},

	  /**
	   * Whether or not setting a value causes side effects such as triggering
	   * resources to be loaded or text selection changes. We must ensure that
	   * the value is only set if it has changed.
	   * @type {Object}
	   */
	  hasSideEffects: {},

	  /**
	   * Whether the property should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasBooleanValue: {},

	  /**
	   * Whether the property must be numeric or parse as a
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasNumericValue: {},

	  /**
	   * Whether the property must be positive numeric or parse as a positive
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasPositiveNumericValue: {},

	  /**
	   * Whether the property can be used as a flag as well as with a value. Removed
	   * when strictly equal to false; present without a value when strictly equal
	   * to true; present with a value otherwise.
	   * @type {Object}
	   */
	  hasOverloadedBooleanValue: {},

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function(attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },

	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function(nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },

	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */

	'use strict';

	var escapeTextContentForBrowser = __webpack_require__(46);

	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}

	module.exports = quoteAttributeValueForBrowser;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */

	'use strict';

	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;',
	  '\'': '&#x27;'
	};

	var ESCAPE_REGEX = /[&><"']/g;

	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}

	module.exports = escapeTextContentForBrowser;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */

	/*jslint evil: true */

	'use strict';

	var ReactDOMIDOperations = __webpack_require__(48);
	var ReactMount = __webpack_require__(67);

	/**
	 * Abstracts away all functionality of the reconciler that requires knowledge of
	 * the browser context. TODO: These callers should be refactored to avoid the
	 * need for this injection.
	 */
	var ReactComponentBrowserEnvironment = {

	  processChildrenUpdates:
	    ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

	  replaceNodeWithMarkupByID:
	    ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,

	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function(rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  }

	};

	module.exports = ReactComponentBrowserEnvironment;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 * @typechecks static-only
	 */

	/*jslint evil: true */

	'use strict';

	var CSSPropertyOperations = __webpack_require__(49);
	var DOMChildrenOperations = __webpack_require__(58);
	var DOMPropertyOperations = __webpack_require__(43);
	var ReactMount = __webpack_require__(67);
	var ReactPerf = __webpack_require__(28);

	var invariant = __webpack_require__(7);
	var setInnerHTML = __webpack_require__(66);

	/**
	 * Errors for properties that should not be updated with `updatePropertyById()`.
	 *
	 * @type {object}
	 * @private
	 */
	var INVALID_PROPERTY_ERRORS = {
	  dangerouslySetInnerHTML:
	    '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
	  style: '`style` must be set using `updateStylesByID()`.'
	};

	/**
	 * Operations used to process updates to DOM nodes. This is made injectable via
	 * `ReactDOMComponent.BackendIDOperations`.
	 */
	var ReactDOMIDOperations = {

	  /**
	   * Updates a DOM node with new property values. This should only be used to
	   * update DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A valid property name, see `DOMProperty`.
	   * @param {*} value New value of the property.
	   * @internal
	   */
	  updatePropertyByID: function(id, name, value) {
	    var node = ReactMount.getNode(id);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
	      'updatePropertyByID(...): %s',
	      INVALID_PROPERTY_ERRORS[name]
	    ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));

	    // If we're updating to null or undefined, we should remove the property
	    // from the DOM node instead of inadvertantly setting to a string. This
	    // brings us in line with the same behavior we have on initial render.
	    if (value != null) {
	      DOMPropertyOperations.setValueForProperty(node, name, value);
	    } else {
	      DOMPropertyOperations.deleteValueForProperty(node, name);
	    }
	  },

	  /**
	   * Updates a DOM node to remove a property. This should only be used to remove
	   * DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A property name to remove, see `DOMProperty`.
	   * @internal
	   */
	  deletePropertyByID: function(id, name, value) {
	    var node = ReactMount.getNode(id);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
	      'updatePropertyByID(...): %s',
	      INVALID_PROPERTY_ERRORS[name]
	    ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
	    DOMPropertyOperations.deleteValueForProperty(node, name, value);
	  },

	  /**
	   * Updates a DOM node with new style values. If a value is specified as '',
	   * the corresponding style property will be unset.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {object} styles Mapping from styles to values.
	   * @internal
	   */
	  updateStylesByID: function(id, styles) {
	    var node = ReactMount.getNode(id);
	    CSSPropertyOperations.setValueForStyles(node, styles);
	  },

	  /**
	   * Updates a DOM node's innerHTML.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} html An HTML string.
	   * @internal
	   */
	  updateInnerHTMLByID: function(id, html) {
	    var node = ReactMount.getNode(id);
	    setInnerHTML(node, html);
	  },

	  /**
	   * Updates a DOM node's text content set by `props.content`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} content Text content.
	   * @internal
	   */
	  updateTextContentByID: function(id, content) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.updateTextContent(node, content);
	  },

	  /**
	   * Replaces a DOM node that exists in the document with markup.
	   *
	   * @param {string} id ID of child to be replaced.
	   * @param {string} markup Dangerous markup to inject in place of child.
	   * @internal
	   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
	   */
	  dangerouslyReplaceNodeWithMarkupByID: function(id, markup) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
	  },

	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markup List of markup strings.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: function(updates, markup) {
	    for (var i = 0; i < updates.length; i++) {
	      updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
	    }
	    DOMChildrenOperations.processUpdates(updates, markup);
	  }
	};

	ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
	  updatePropertyByID: 'updatePropertyByID',
	  deletePropertyByID: 'deletePropertyByID',
	  updateStylesByID: 'updateStylesByID',
	  updateInnerHTMLByID: 'updateInnerHTMLByID',
	  updateTextContentByID: 'updateTextContentByID',
	  dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
	  dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
	});

	module.exports = ReactDOMIDOperations;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(50);
	var ExecutionEnvironment = __webpack_require__(51);

	var camelizeStyleName = __webpack_require__(52);
	var dangerousStyleValue = __webpack_require__(54);
	var hyphenateStyleName = __webpack_require__(55);
	var memoizeStringOnly = __webpack_require__(57);
	var warning = __webpack_require__(15);

	var processStyleName = memoizeStringOnly(function(styleName) {
	  return hyphenateStyleName(styleName);
	});

	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if ("production" !== process.env.NODE_ENV) {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};

	  var warnHyphenatedStyleName = function(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'Unsupported style property %s. Did you mean %s?',
	      name,
	      camelizeStyleName(name)
	    ) : null);
	  };

	  var warnBadVendoredStyleName = function(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'Unsupported vendor-prefixed style property %s. Did you mean %s?',
	      name,
	      name.charAt(0).toUpperCase() + name.slice(1)
	    ) : null);
	  };

	  var warnStyleValueWithSemicolon = function(name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'Style property values shouldn\'t contain a semicolon. ' +
	      'Try "%s: %s" instead.',
	      name,
	      value.replace(badStyleValueWithSemicolonPattern, '')
	    ) : null);
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   */
	  var warnValidStyle = function(name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function(styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if ("production" !== process.env.NODE_ENV) {
	        warnValidStyle(styleName, styleValue);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function(node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if ("production" !== process.env.NODE_ENV) {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	module.exports = CSSPropertyOperations;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  boxFlex: true,
	  boxFlexGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function(prop) {
	  prefixes.forEach(function(prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundImage: true,
	    backgroundPosition: true,
	    backgroundRepeat: true,
	    backgroundColor: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var canUseDOM = !!(
	  (typeof window !== 'undefined' &&
	  window.document && window.document.createElement)
	);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */

	"use strict";

	var camelize = __webpack_require__(53);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function(_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(50);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 ||
	      isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */

	"use strict";

	var hyphenate = __webpack_require__(56);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function(string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 * @typechecks static-only
	 */

	'use strict';

	var Danger = __webpack_require__(59);
	var ReactMultiChildUpdateTypes = __webpack_require__(64);

	var setTextContent = __webpack_require__(65);
	var invariant = __webpack_require__(7);

	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	function insertChildAt(parentNode, childNode, index) {
	  // By exploiting arrays returning `undefined` for an undefined index, we can
	  // rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. However, using `undefined` is not allowed by all
	  // browsers so we must replace it with `null`.
	  parentNode.insertBefore(
	    childNode,
	    parentNode.childNodes[index] || null
	  );
	}

	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {

	  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

	  updateTextContent: setTextContent,

	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markupList List of markup strings.
	   * @internal
	   */
	  processUpdates: function(updates, markupList) {
	    var update;
	    // Mapping from parent IDs to initial child orderings.
	    var initialChildren = null;
	    // List of children that will be moved or removed.
	    var updatedChildren = null;

	    for (var i = 0; i < updates.length; i++) {
	      update = updates[i];
	      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING ||
	          update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
	        var updatedIndex = update.fromIndex;
	        var updatedChild = update.parentNode.childNodes[updatedIndex];
	        var parentID = update.parentID;

	        ("production" !== process.env.NODE_ENV ? invariant(
	          updatedChild,
	          'processUpdates(): Unable to find child %s of element. This ' +
	          'probably means the DOM was unexpectedly mutated (e.g., by the ' +
	          'browser), usually due to forgetting a <tbody> when using tables, ' +
	          'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' +
	          'in an <svg> parent. Try inspecting the child nodes of the element ' +
	          'with React ID `%s`.',
	          updatedIndex,
	          parentID
	        ) : invariant(updatedChild));

	        initialChildren = initialChildren || {};
	        initialChildren[parentID] = initialChildren[parentID] || [];
	        initialChildren[parentID][updatedIndex] = updatedChild;

	        updatedChildren = updatedChildren || [];
	        updatedChildren.push(updatedChild);
	      }
	    }

	    var renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);

	    // Remove updated children first so that `toIndex` is consistent.
	    if (updatedChildren) {
	      for (var j = 0; j < updatedChildren.length; j++) {
	        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
	      }
	    }

	    for (var k = 0; k < updates.length; k++) {
	      update = updates[k];
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertChildAt(
	            update.parentNode,
	            renderedMarkup[update.markupIndex],
	            update.toIndex
	          );
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          insertChildAt(
	            update.parentNode,
	            initialChildren[update.parentID][update.fromIndex],
	            update.toIndex
	          );
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          setTextContent(
	            update.parentNode,
	            update.textContent
	          );
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          // Already removed by the for-loop above.
	          break;
	      }
	    }
	  }

	};

	module.exports = DOMChildrenOperations;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 * @typechecks static-only
	 */

	/*jslint evil: true, sub: true */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(51);

	var createNodesFromMarkup = __webpack_require__(60);
	var emptyFunction = __webpack_require__(16);
	var getMarkupWrap = __webpack_require__(63);
	var invariant = __webpack_require__(7);

	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';

	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}

	var Danger = {

	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function(markupList) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ExecutionEnvironment.canUseDOM,
	      'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' +
	      'thread. Make sure `window` and `document` are available globally ' +
	      'before requiring React when unit testing or use ' +
	      'React.renderToString for server rendering.'
	    ) : invariant(ExecutionEnvironment.canUseDOM));
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        markupList[i],
	        'dangerouslyRenderMarkup(...): Missing markup.'
	      ) : invariant(markupList[i]));
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];

	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      var resultIndex;
	      for (resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];

	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(
	            OPEN_TAG_NAME_EXP,
	            // This index will be parsed back out below.
	            '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" '
	          );
	        }
	      }

	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(
	        markupListByNodeName.join(''),
	        emptyFunction // Do nothing special with <script> tags.
	      );

	      for (var j = 0; j < renderNodes.length; ++j) {
	        var renderNode = renderNodes[j];
	        if (renderNode.hasAttribute &&
	            renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);

	          ("production" !== process.env.NODE_ENV ? invariant(
	            !resultList.hasOwnProperty(resultIndex),
	            'Danger: Assigning to an already-occupied result index.'
	          ) : invariant(!resultList.hasOwnProperty(resultIndex)));

	          resultList[resultIndex] = renderNode;

	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;

	        } else if ("production" !== process.env.NODE_ENV) {
	          console.error(
	            'Danger: Discarding unexpected node:',
	            renderNode
	          );
	        }
	      }
	    }

	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    ("production" !== process.env.NODE_ENV ? invariant(
	      resultListAssignmentCount === resultList.length,
	      'Danger: Did not assign to every index of resultList.'
	    ) : invariant(resultListAssignmentCount === resultList.length));

	    ("production" !== process.env.NODE_ENV ? invariant(
	      resultList.length === markupList.length,
	      'Danger: Expected markup to render %s nodes, but rendered %s.',
	      markupList.length,
	      resultList.length
	    ) : invariant(resultList.length === markupList.length));

	    return resultList;
	  },

	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ExecutionEnvironment.canUseDOM,
	      'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' +
	      'worker thread. Make sure `window` and `document` are available ' +
	      'globally before requiring React when unit testing or use ' +
	      'React.renderToString for server rendering.'
	    ) : invariant(ExecutionEnvironment.canUseDOM));
	    ("production" !== process.env.NODE_ENV ? invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(markup));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      oldChild.tagName.toLowerCase() !== 'html',
	      'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' +
	      '<html> node. This is because browser quirks make this unreliable ' +
	      'and/or slow. If you want to render to the root you must use ' +
	      'server rendering. See React.renderToString().'
	    ) : invariant(oldChild.tagName.toLowerCase() !== 'html'));

	    var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	    oldChild.parentNode.replaceChild(newChild, oldChild);
	  }

	};

	module.exports = Danger;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createNodesFromMarkup
	 * @typechecks
	 */

	/*jslint evil: true, sub: true */

	var ExecutionEnvironment = __webpack_require__(51);

	var createArrayFromMixed = __webpack_require__(61);
	var getMarkupWrap = __webpack_require__(63);
	var invariant = __webpack_require__(7);

	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode =
	  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;

	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}

	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'createNodesFromMarkup dummy not initialized') : invariant(!!dummyNode));
	  var nodeName = getNodeName(markup);

	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];

	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }

	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      handleScript,
	      'createNodesFromMarkup(...): Unexpected <script> element rendered.'
	    ) : invariant(handleScript));
	    createArrayFromMixed(scripts).forEach(handleScript);
	  }

	  var nodes = createArrayFromMixed(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}

	module.exports = createNodesFromMarkup;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createArrayFromMixed
	 * @typechecks
	 */

	var toArray = __webpack_require__(62);

	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return (
	    // not null/false
	    !!obj &&
	    // arrays are objects, NodeLists are functions in Safari
	    (typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    ('length' in obj) &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    (typeof obj.nodeType != 'number') &&
	    (
	      // a real array
	      (// HTMLCollection/NodeList
	      (Array.isArray(obj) ||
	      // arguments
	      ('callee' in obj) || 'item' in obj))
	    )
	  );
	}

	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}

	module.exports = createArrayFromMixed;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule toArray
	 * @typechecks
	 */

	var invariant = __webpack_require__(7);

	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;

	  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
	  // old versions of Safari).
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !Array.isArray(obj) &&
	    (typeof obj === 'object' || typeof obj === 'function'),
	    'toArray: Array-like object expected'
	  ) : invariant(!Array.isArray(obj) &&
	  (typeof obj === 'object' || typeof obj === 'function')));

	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof length === 'number',
	    'toArray: Object needs a length property'
	  ) : invariant(typeof length === 'number'));

	  ("production" !== process.env.NODE_ENV ? invariant(
	    length === 0 ||
	    (length - 1) in obj,
	    'toArray: Object should have keys for indices'
	  ) : invariant(length === 0 ||
	  (length - 1) in obj));

	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }

	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}

	module.exports = toArray;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getMarkupWrap
	 */

	var ExecutionEnvironment = __webpack_require__(51);

	var invariant = __webpack_require__(7);

	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode =
	  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */
	var shouldWrap = {
	  // Force wrapping for SVG elements because if they get created inside a <div>,
	  // they will be initialized in the wrong namespace (and will not display).
	  'circle': true,
	  'clipPath': true,
	  'defs': true,
	  'ellipse': true,
	  'g': true,
	  'line': true,
	  'linearGradient': true,
	  'path': true,
	  'polygon': true,
	  'polyline': true,
	  'radialGradient': true,
	  'rect': true,
	  'stop': true,
	  'text': true
	};

	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	var svgWrap = [1, '<svg>', '</svg>'];

	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],

	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],

	  'optgroup': selectWrap,
	  'option': selectWrap,

	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,

	  'td': trWrap,
	  'th': trWrap,

	  'circle': svgWrap,
	  'clipPath': svgWrap,
	  'defs': svgWrap,
	  'ellipse': svgWrap,
	  'g': svgWrap,
	  'line': svgWrap,
	  'linearGradient': svgWrap,
	  'path': svgWrap,
	  'polygon': svgWrap,
	  'polyline': svgWrap,
	  'radialGradient': svgWrap,
	  'rect': svgWrap,
	  'stop': svgWrap,
	  'text': svgWrap
	};

	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'Markup wrapping node not initialized') : invariant(!!dummyNode));
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}


	module.exports = getMarkupWrap;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */

	'use strict';

	var keyMirror = __webpack_require__(6);

	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  TEXT_CONTENT: null
	});

	module.exports = ReactMultiChildUpdateTypes;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setTextContent
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(51);
	var escapeTextContentForBrowser = __webpack_require__(46);
	var setInnerHTML = __webpack_require__(66);

	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */
	var setTextContent = function(node, text) {
	  node.textContent = text;
	};

	if (ExecutionEnvironment.canUseDOM) {
	  if (!('textContent' in document.documentElement)) {
	    setTextContent = function(node, text) {
	      setInnerHTML(node, escapeTextContentForBrowser(text));
	    };
	  }
	}

	module.exports = setTextContent;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setInnerHTML
	 */

	/* globals MSApp */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(51);

	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

	/**
	 * Set the innerHTML property of a node, ensuring that whitespace is preserved
	 * even in IE8.
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = function(node, html) {
	  node.innerHTML = html;
	};

	// Win8 apps: Allow all html to be inserted
	if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	  setInnerHTML = function(node, html) {
	    MSApp.execUnsafeLocalFunction(function() {
	      node.innerHTML = html;
	    });
	  };
	}

	if (ExecutionEnvironment.canUseDOM) {
	  // IE8: When updating a just created node with innerHTML only leading
	  // whitespace is removed. When updating an existing node with innerHTML
	  // whitespace in root TextNodes is also collapsed.
	  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

	  // Feature detection; only IE8 is known to behave improperly like this.
	  var testElement = document.createElement('div');
	  testElement.innerHTML = ' ';
	  if (testElement.innerHTML === '') {
	    setInnerHTML = function(node, html) {
	      // Magic theory: IE8 supposedly differentiates between added and updated
	      // nodes when processing innerHTML, innerHTML on updated nodes suffers
	      // from worse whitespace behavior. Re-adding a node like this triggers
	      // the initial and more favorable whitespace behavior.
	      // TODO: What to do on a detached node?
	      if (node.parentNode) {
	        node.parentNode.replaceChild(node, node);
	      }

	      // We also implement a workaround for non-visible tags disappearing into
	      // thin air on IE8, this only happens if there is no visible text
	      // in-front of the non-visible tags. Piggyback on the whitespace fix
	      // and simply check if any non-visible tags appear in the source.
	      if (WHITESPACE_TEST.test(html) ||
	          html[0] === '<' && NONVISIBLE_TEST.test(html)) {
	        // Recover leading whitespace by temporarily prepending any character.
	        // \uFEFF has the potential advantage of being zero-width/invisible.
	        node.innerHTML = '\uFEFF' + html;

	        // deleteData leaves an empty `TextNode` which offsets the index of all
	        // children. Definitely want to avoid this.
	        var textNode = node.firstChild;
	        if (textNode.data.length === 1) {
	          node.removeChild(textNode);
	        } else {
	          textNode.deleteData(0, 1);
	        }
	      } else {
	        node.innerHTML = html;
	      }
	    };
	  }
	}

	module.exports = setInnerHTML;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */

	'use strict';

	var DOMProperty = __webpack_require__(44);
	var ReactBrowserEventEmitter = __webpack_require__(68);
	var ReactCurrentOwner = __webpack_require__(17);
	var ReactElement = __webpack_require__(11);
	var ReactElementValidator = __webpack_require__(32);
	var ReactEmptyComponent = __webpack_require__(76);
	var ReactInstanceHandles = __webpack_require__(19);
	var ReactInstanceMap = __webpack_require__(25);
	var ReactMarkupChecksum = __webpack_require__(77);
	var ReactPerf = __webpack_require__(28);
	var ReactReconciler = __webpack_require__(29);
	var ReactUpdateQueue = __webpack_require__(23);
	var ReactUpdates = __webpack_require__(26);

	var emptyObject = __webpack_require__(14);
	var containsNode = __webpack_require__(79);
	var getReactRootElementInContainer = __webpack_require__(82);
	var instantiateReactComponent = __webpack_require__(83);
	var invariant = __webpack_require__(7);
	var setInnerHTML = __webpack_require__(66);
	var shouldUpdateReactComponent = __webpack_require__(86);
	var warning = __webpack_require__(15);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;

	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};

	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;

	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};

	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};

	if ("production" !== process.env.NODE_ENV) {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}

	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];

	/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
	function firstDifferenceIndex(string1, string2) {
	  var minLen = Math.min(string1.length, string2.length);
	  for (var i = 0; i < minLen; i++) {
	    if (string1.charAt(i) !== string2.charAt(i)) {
	      return i;
	    }
	  }
	  return string1.length === string2.length ? -1 : minLen;
	}

	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}

	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          !isValid(cached, id),
	          'ReactMount: Two valid but unequal nodes with the same `%s`: %s',
	          ATTR_NAME, id
	        ) : invariant(!isValid(cached, id)));

	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }

	  return id;
	}

	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}

	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}

	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * Finds the node with the supplied public React instance.
	 *
	 * @param {*} instance A public React instance.
	 * @return {?DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNodeFromInstance(instance) {
	  var id = ReactInstanceMap.get(instance)._rootNodeID;
	  if (ReactEmptyComponent.isNullComponentID(id)) {
	    return null;
	  }
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      internalGetID(node) === id,
	      'ReactMount: Unexpected modification of `%s`',
	      ATTR_NAME
	    ) : invariant(internalGetID(node) === id));

	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }

	  return false;
	}

	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}

	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}

	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(
	    targetID,
	    findDeepestCachedAncestorImpl
	  );

	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}

	/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function mountComponentIntoNode(
	    componentInstance,
	    rootID,
	    container,
	    transaction,
	    shouldReuseMarkup) {
	  var markup = ReactReconciler.mountComponent(
	    componentInstance, rootID, transaction, emptyObject
	  );
	  componentInstance._isTopLevel = true;
	  ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup);
	}

	/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function batchedMountComponentIntoNode(
	    componentInstance,
	    rootID,
	    container,
	    shouldReuseMarkup) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
	  transaction.perform(
	    mountComponentIntoNode,
	    null,
	    componentInstance,
	    rootID,
	    container,
	    transaction,
	    shouldReuseMarkup
	  );
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}

	/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {
	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,

	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function(container, renderCallback) {
	    renderCallback();
	  },

	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function(
	      prevComponent,
	      nextElement,
	      container,
	      callback) {
	    if ("production" !== process.env.NODE_ENV) {
	      ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
	    }

	    ReactMount.scrollMonitor(container, function() {
	      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
	      if (callback) {
	        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
	      }
	    });

	    if ("production" !== process.env.NODE_ENV) {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] =
	        getReactRootElementInContainer(container);
	    }

	    return prevComponent;
	  },

	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function(nextComponent, container) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      container && (
	        (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	      ),
	      '_registerComponent(...): Target container is not a DOM element.'
	    ) : invariant(container && (
	      (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	    )));

	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },

	  /**
	   * Render a new component into the DOM.
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: function(
	    nextElement,
	    container,
	    shouldReuseMarkup
	  ) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case.
	    ("production" !== process.env.NODE_ENV ? warning(
	      ReactCurrentOwner.current == null,
	      '_renderNewRootComponent(): Render methods should be a pure function ' +
	      'of props and state; triggering nested component updates from ' +
	      'render is not allowed. If necessary, trigger nested updates in ' +
	      'componentDidUpdate.'
	    ) : null);

	    var componentInstance = instantiateReactComponent(nextElement, null);
	    var reactRootID = ReactMount._registerComponent(
	      componentInstance,
	      container
	    );

	    // The initial render is synchronous but any updates that happen during
	    // rendering, in componentWillMount or componentDidMount, will be batched
	    // according to the current batching strategy.

	    ReactUpdates.batchedUpdates(
	      batchedMountComponentIntoNode,
	      componentInstance,
	      reactRootID,
	      container,
	      shouldReuseMarkup
	    );

	    if ("production" !== process.env.NODE_ENV) {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[reactRootID] =
	        getReactRootElementInContainer(container);
	    }

	    return componentInstance;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function(nextElement, container, callback) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      ReactElement.isValidElement(nextElement),
	      'React.render(): Invalid component element.%s',
	      (
	        typeof nextElement === 'string' ?
	          ' Instead of passing an element string, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        typeof nextElement === 'function' ?
	          ' Instead of passing a component class, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        // Check if it quacks like an element
	        nextElement != null && nextElement.props !== undefined ?
	          ' This may be caused by unintentionally loading two independent ' +
	          'copies of React.' :
	          ''
	      )
	    ) : invariant(ReactElement.isValidElement(nextElement)));

	    var prevComponent = instancesByReactRootID[getReactRootID(container)];

	    if (prevComponent) {
	      var prevElement = prevComponent._currentElement;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        return ReactMount._updateRootComponent(
	          prevComponent,
	          nextElement,
	          container,
	          callback
	        ).getPublicInstance();
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }

	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup =
	      reactRootElement && ReactMount.isRenderedByReact(reactRootElement);

	    if ("production" !== process.env.NODE_ENV) {
	      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
	        var rootElementSibling = reactRootElement;
	        while (rootElementSibling) {
	          if (ReactMount.isRenderedByReact(rootElementSibling)) {
	            ("production" !== process.env.NODE_ENV ? warning(
	              false,
	              'render(): Target node has markup rendered by React, but there ' +
	              'are unrelated nodes as well. This is most commonly caused by ' +
	              'white-space inserted around server-rendered markup.'
	            ) : null);
	            break;
	          }

	          rootElementSibling = rootElementSibling.nextSibling;
	        }
	      }
	    }

	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;

	    var component = ReactMount._renderNewRootComponent(
	      nextElement,
	      container,
	      shouldReuseMarkup
	    ).getPublicInstance();
	    if (callback) {
	      callback.call(component);
	    }
	    return component;
	  },

	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into the supplied `container`.
	   *
	   * @param {function} constructor React component constructor.
	   * @param {?object} props Initial props of the component instance.
	   * @param {DOMElement} container DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  constructAndRenderComponent: function(constructor, props, container) {
	    var element = ReactElement.createElement(constructor, props);
	    return ReactMount.render(element, container);
	  },

	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into a container node identified by supplied `id`.
	   *
	   * @param {function} componentConstructor React component constructor
	   * @param {?object} props Initial props of the component instance.
	   * @param {string} id ID of the DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in the container node.
	   */
	  constructAndRenderComponentByID: function(constructor, props, id) {
	    var domNode = document.getElementById(id);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      domNode,
	      'Tried to get element with id of "%s" but it is not present on the page.',
	      id
	    ) : invariant(domNode));
	    return ReactMount.constructAndRenderComponent(constructor, props, domNode);
	  },

	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function(container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },

	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function(container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    ("production" !== process.env.NODE_ENV ? warning(
	      ReactCurrentOwner.current == null,
	      'unmountComponentAtNode(): Render methods should be a pure function of ' +
	      'props and state; triggering nested component updates from render is ' +
	      'not allowed. If necessary, trigger nested updates in ' +
	      'componentDidUpdate.'
	    ) : null);

	    ("production" !== process.env.NODE_ENV ? invariant(
	      container && (
	        (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	      ),
	      'unmountComponentAtNode(...): Target container is not a DOM element.'
	    ) : invariant(container && (
	      (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	    )));

	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      return false;
	    }
	    ReactMount.unmountComponentFromNode(component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if ("production" !== process.env.NODE_ENV) {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },

	  /**
	   * Unmounts a component and removes it from the DOM.
	   *
	   * @param {ReactComponent} instance React component instance.
	   * @param {DOMElement} container DOM element to unmount from.
	   * @final
	   * @internal
	   * @see {ReactMount.unmountComponentAtNode}
	   */
	  unmountComponentFromNode: function(instance, container) {
	    ReactReconciler.unmountComponent(instance);

	    if (container.nodeType === DOC_NODE_TYPE) {
	      container = container.documentElement;
	    }

	    // http://jsperf.com/emptying-a-node
	    while (container.lastChild) {
	      container.removeChild(container.lastChild);
	    }
	  },

	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function(id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];

	    if ("production" !== process.env.NODE_ENV) {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          // Call internalGetID here because getID calls isValid which calls
	          // findReactContainerForID (this function).
	          internalGetID(rootElement) === reactRootID,
	          'ReactMount: Root element ID differed from reactRootID.'
	        ) : invariant(// Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID));

	        var containerChild = container.firstChild;
	        if (containerChild &&
	            reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          ("production" !== process.env.NODE_ENV ? warning(
	            false,
	            'ReactMount: Root element has been removed from its original ' +
	            'container. New container:', rootElement.parentNode
	          ) : null);
	        }
	      }
	    }

	    return container;
	  },

	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function(id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },

	  /**
	   * True if the supplied `node` is rendered by React.
	   *
	   * @param {*} node DOM Element to check.
	   * @return {boolean} True if the DOM Element appears to be rendered by React.
	   * @internal
	   */
	  isRenderedByReact: function(node) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      return false;
	    }
	    var id = ReactMount.getID(node);
	    return id ? id.charAt(0) === SEPARATOR : false;
	  },

	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function(node) {
	    var current = node;
	    while (current && current.parentNode !== current) {
	      if (ReactMount.isRenderedByReact(current)) {
	        return current;
	      }
	      current = current.parentNode;
	    }
	    return null;
	  },

	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function(ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;

	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;

	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;

	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.

	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }

	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }

	        child = child.nextSibling;
	      }

	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;

	        return targetChild;
	      }
	    }

	    firstChildren.length = 0;

	    ("production" !== process.env.NODE_ENV ? invariant(
	      false,
	      'findComponentRoot(..., %s): Unable to find element. This probably ' +
	      'means the DOM was unexpectedly mutated (e.g., by the browser), ' +
	      'usually due to forgetting a <tbody> when using tables, nesting tags ' +
	      'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' +
	      'parent. ' +
	      'Try inspecting the child nodes of the element with React ID `%s`.',
	      targetID,
	      ReactMount.getID(ancestorNode)
	    ) : invariant(false));
	  },

	  _mountImageIntoNode: function(markup, container, shouldReuseMarkup) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      container && (
	        (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	      ),
	      'mountComponentIntoNode(...): Target container is not valid.'
	    ) : invariant(container && (
	      (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	    )));

	    if (shouldReuseMarkup) {
	      var rootElement = getReactRootElementInContainer(container);
	      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
	        return;
	      } else {
	        var checksum = rootElement.getAttribute(
	          ReactMarkupChecksum.CHECKSUM_ATTR_NAME
	        );
	        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

	        var rootMarkup = rootElement.outerHTML;
	        rootElement.setAttribute(
	          ReactMarkupChecksum.CHECKSUM_ATTR_NAME,
	          checksum
	        );

	        var diffIndex = firstDifferenceIndex(markup, rootMarkup);
	        var difference = ' (client) ' +
	          markup.substring(diffIndex - 20, diffIndex + 20) +
	          '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

	        ("production" !== process.env.NODE_ENV ? invariant(
	          container.nodeType !== DOC_NODE_TYPE,
	          'You\'re trying to render a component to the document using ' +
	          'server rendering but the checksum was invalid. This usually ' +
	          'means you rendered a different component type or props on ' +
	          'the client from the one on the server, or your render() ' +
	          'methods are impure. React cannot handle this case due to ' +
	          'cross-browser quirks by rendering at the document root. You ' +
	          'should look for environment dependent code in your components ' +
	          'and ensure the props are the same client and server side:\n%s',
	          difference
	        ) : invariant(container.nodeType !== DOC_NODE_TYPE));

	        if ("production" !== process.env.NODE_ENV) {
	          ("production" !== process.env.NODE_ENV ? warning(
	            false,
	            'React attempted to reuse markup in a container but the ' +
	            'checksum was invalid. This generally means that you are ' +
	            'using server rendering and the markup generated on the ' +
	            'server was not what the client was expecting. React injected ' +
	            'new markup to compensate which works but you have lost many ' +
	            'of the benefits of server rendering. Instead, figure out ' +
	            'why the markup being generated is different on the client ' +
	            'or server:\n%s',
	            difference
	          ) : null);
	        }
	      }
	    }

	    ("production" !== process.env.NODE_ENV ? invariant(
	      container.nodeType !== DOC_NODE_TYPE,
	      'You\'re trying to render a component to the document but ' +
	        'you didn\'t use server rendering. We can\'t do this ' +
	        'without using server rendering due to cross-browser quirks. ' +
	        'See React.renderToString() for server rendering.'
	    ) : invariant(container.nodeType !== DOC_NODE_TYPE));

	    setInnerHTML(container, markup);
	  },

	  /**
	   * React ID utilities.
	   */

	  getReactRootID: getReactRootID,

	  getID: getID,

	  setID: setID,

	  getNode: getNode,

	  getNodeFromInstance: getNodeFromInstance,

	  purgeID: purgeID
	};

	ReactPerf.measureMethods(ReactMount, 'ReactMount', {
	  _renderNewRootComponent: '_renderNewRootComponent',
	  _mountImageIntoNode: '_mountImageIntoNode'
	});

	module.exports = ReactMount;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var EventPluginHub = __webpack_require__(69);
	var EventPluginRegistry = __webpack_require__(70);
	var ReactEventEmitterMixin = __webpack_require__(73);
	var ViewportMetrics = __webpack_require__(74);

	var assign = __webpack_require__(13);
	var isEventSupported = __webpack_require__(75);

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;

	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topBlur: 'blur',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topScroll: 'scroll',
	  topSelectionChange: 'selectionchange',
	  topTextInput: 'textInput',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topWheel: 'wheel'
	};

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,

	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function(ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(
	        ReactBrowserEventEmitter.handleTopLevel
	      );
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },

	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function(enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },

	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function() {
	    return !!(
	      (ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled())
	    );
	  },

	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function(registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.
	      registrationNameDependencies[registrationName];

	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0, l = dependencies.length; i < l; i++) {
	      var dependency = dependencies[i];
	      if (!(
	            (isListening.hasOwnProperty(dependency) && isListening[dependency])
	          )) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'wheel',
	              mountAt
	            );
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'mousewheel',
	              mountAt
	            );
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'DOMMouseScroll',
	              mountAt
	            );
	          }
	        } else if (dependency === topLevelTypes.topScroll) {

	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              mountAt
	            );
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE
	            );
	          }
	        } else if (dependency === topLevelTypes.topFocus ||
	            dependency === topLevelTypes.topBlur) {

	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topFocus,
	              'focus',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topBlur,
	              'blur',
	              mountAt
	            );
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topFocus,
	              'focusin',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topBlur,
	              'focusout',
	              mountAt
	            );
	          }

	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	            dependency,
	            topEventMapping[dependency],
	            mountAt
	          );
	        }

	        isListening[dependency] = true;
	      }
	    }
	  },

	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },

	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },

	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function() {
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },

	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginHub.registrationNameModules,

	  putListener: EventPluginHub.putListener,

	  getListener: EventPluginHub.getListener,

	  deleteListener: EventPluginHub.deleteListener,

	  deleteAllListeners: EventPluginHub.deleteAllListeners

	});

	module.exports = ReactBrowserEventEmitter;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */

	'use strict';

	var EventPluginRegistry = __webpack_require__(70);
	var EventPluginUtils = __webpack_require__(4);

	var accumulateInto = __webpack_require__(71);
	var forEachAccumulated = __webpack_require__(72);
	var invariant = __webpack_require__(7);

	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @private
	 */
	var executeDispatchesAndRelease = function(event) {
	  if (event) {
	    var executeDispatch = EventPluginUtils.executeDispatch;
	    // Plugins can provide custom behavior when dispatching events.
	    var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
	    if (PluginModule && PluginModule.executeDispatch) {
	      executeDispatch = PluginModule.executeDispatch;
	    }
	    EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};

	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;

	function validateInstanceHandle() {
	  var valid =
	    InstanceHandle &&
	    InstanceHandle.traverseTwoPhase &&
	    InstanceHandle.traverseEnterLeave;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    valid,
	    'InstanceHandle not injected before use!'
	  ) : invariant(valid));
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {

	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {

	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,

	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function(InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if ("production" !== process.env.NODE_ENV) {
	        validateInstanceHandle();
	      }
	    },

	    getInstanceHandle: function() {
	      if ("production" !== process.env.NODE_ENV) {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },

	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

	  },

	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginRegistry.registrationNameModules,

	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function(id, registrationName, listener) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !listener || typeof listener === 'function',
	      'Expected %s listener to be a function, instead got type %s',
	      registrationName, typeof listener
	    ) : invariant(!listener || typeof listener === 'function'));

	    var bankForRegistrationName =
	      listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;
	  },

	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },

	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },

	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function(id) {
	    for (var registrationName in listenerBank) {
	      delete listenerBank[registrationName][id];
	    }
	  },

	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0, l = plugins.length; i < l; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(
	          topLevelType,
	          topLevelTarget,
	          topLevelTargetID,
	          nativeEvent
	        );
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },

	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function(events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },

	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function() {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !eventQueue,
	      'processEventQueue(): Additional events were enqueued while processing ' +
	      'an event queue. Support for this has not yet been implemented.'
	    ) : invariant(!eventQueue));
	  },

	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function() {
	    listenerBank = {};
	  },

	  __getListenerBank: function() {
	    return listenerBank;
	  }

	};

	module.exports = EventPluginHub;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    ("production" !== process.env.NODE_ENV ? invariant(
	      pluginIndex > -1,
	      'EventPluginRegistry: Cannot inject event plugins that do not exist in ' +
	      'the plugin ordering, `%s`.',
	      pluginName
	    ) : invariant(pluginIndex > -1));
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      PluginModule.extractEvents,
	      'EventPluginRegistry: Event plugins must implement an `extractEvents` ' +
	      'method, but `%s` does not.',
	      pluginName
	    ) : invariant(PluginModule.extractEvents));
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        publishEventForPlugin(
	          publishedEvents[eventName],
	          PluginModule,
	          eventName
	        ),
	        'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
	        eventName,
	        pluginName
	      ) : invariant(publishEventForPlugin(
	        publishedEvents[eventName],
	        PluginModule,
	        eventName
	      )));
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName),
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'event name, `%s`.',
	    eventName
	  ) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(
	          phasedRegistrationName,
	          PluginModule,
	          eventName
	        );
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(
	      dispatchConfig.registrationName,
	      PluginModule,
	      eventName
	    );
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    !EventPluginRegistry.registrationNameModules[registrationName],
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'registration name, `%s`.',
	    registrationName
	  ) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] =
	    PluginModule.eventTypes[eventName].dependencies;
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {

	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],

	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},

	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},

	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},

	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function(InjectedEventPluginOrder) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !EventPluginOrder,
	      'EventPluginRegistry: Cannot inject event plugin ordering more than ' +
	      'once. You are likely trying to load more than one copy of React.'
	    ) : invariant(!EventPluginOrder));
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },

	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function(injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) ||
	          namesToPlugins[pluginName] !== PluginModule) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          !namesToPlugins[pluginName],
	          'EventPluginRegistry: Cannot inject two different event plugins ' +
	          'using the same name, `%s`.',
	          pluginName
	        ) : invariant(!namesToPlugins[pluginName]));
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },

	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function(event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[
	        dispatchConfig.registrationName
	      ] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[
	        dispatchConfig.phasedRegistrationNames[phase]
	      ];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function() {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;

	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }

	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }

	};

	module.exports = EventPluginRegistry;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    next != null,
	    'accumulateInto(...): Accumulated items must not be null or undefined.'
	  ) : invariant(next != null));
	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);

	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }

	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }

	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	module.exports = accumulateInto;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */

	'use strict';

	/**
	 * @param {array} an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
	var forEachAccumulated = function(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};

	module.exports = forEachAccumulated;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */

	'use strict';

	var EventPluginHub = __webpack_require__(69);

	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue();
	}

	var ReactEventEmitterMixin = {

	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events = EventPluginHub.extractEvents(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent
	    );

	    runEventQueueInBatch(events);
	  }
	};

	module.exports = ReactEventEmitterMixin;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	'use strict';

	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function(scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

	module.exports = ViewportMetrics;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(51);

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature =
	    document.implementation &&
	    document.implementation.hasFeature &&
	    // always returns true in newer browsers as per the standard.
	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	    document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM ||
	      capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */

	'use strict';

	var ReactElement = __webpack_require__(11);
	var ReactInstanceMap = __webpack_require__(25);

	var invariant = __webpack_require__(7);

	var component;
	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)
	var nullComponentIDsRegistry = {};

	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function(emptyComponent) {
	    component = ReactElement.createFactory(emptyComponent);
	  }
	};

	var ReactEmptyComponentType = function() {};
	ReactEmptyComponentType.prototype.componentDidMount = function() {
	  var internalInstance = ReactInstanceMap.get(this);
	  // TODO: Make sure we run these methods in the correct order, we shouldn't
	  // need this check. We're going to assume if we're here it means we ran
	  // componentWillUnmount already so there is no internal instance (it gets
	  // removed as part of the unmounting process).
	  if (!internalInstance) {
	    return;
	  }
	  registerNullComponentID(internalInstance._rootNodeID);
	};
	ReactEmptyComponentType.prototype.componentWillUnmount = function() {
	  var internalInstance = ReactInstanceMap.get(this);
	  // TODO: Get rid of this check. See TODO in componentDidMount.
	  if (!internalInstance) {
	    return;
	  }
	  deregisterNullComponentID(internalInstance._rootNodeID);
	};
	ReactEmptyComponentType.prototype.render = function() {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    component,
	    'Trying to return null from a render, but no null placeholder component ' +
	    'was injected.'
	  ) : invariant(component));
	  return component();
	};

	var emptyElement = ReactElement.createElement(ReactEmptyComponentType);

	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIDsRegistry[id] = true;
	}

	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIDsRegistry[id];
	}

	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return !!nullComponentIDsRegistry[id];
	}

	var ReactEmptyComponent = {
	  emptyElement: emptyElement,
	  injection: ReactEmptyComponentInjection,
	  isNullComponentID: isNullComponentID
	};

	module.exports = ReactEmptyComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */

	'use strict';

	var adler32 = __webpack_require__(78);

	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',

	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function(markup) {
	    var checksum = adler32(markup);
	    return markup.replace(
	      '>',
	      ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">'
	    );
	  },

	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function(markup, element) {
	    var existingChecksum = element.getAttribute(
	      ReactMarkupChecksum.CHECKSUM_ATTR_NAME
	    );
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};

	module.exports = ReactMarkupChecksum;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */

	/* jslint bitwise:true */

	'use strict';

	var MOD = 65521;

	// This is a clean-room implementation of adler32 designed for detecting
	// if markup is not what we expect it to be. It does not need to be
	// cryptographically strong, only reasonably good at detecting if markup
	// generated on the server is different than that on the client.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  for (var i = 0; i < data.length; i++) {
	    a = (a + data.charCodeAt(i)) % MOD;
	    b = (b + a) % MOD;
	  }
	  return a | (b << 16);
	}

	module.exports = adler32;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */

	var isTextNode = __webpack_require__(80);

	/*jslint bitwise:true */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if (outerNode.contains) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextNode
	 * @typechecks
	 */

	var isNode = __webpack_require__(81);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (
	    ((typeof Node === 'function' ? object instanceof Node : typeof object === 'object' &&
	    typeof object.nodeType === 'number' &&
	    typeof object.nodeName === 'string'))
	  ));
	}

	module.exports = isNode;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getReactRootElementInContainer
	 */

	'use strict';

	var DOC_NODE_TYPE = 9;

	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 *                                           a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	module.exports = getReactRootElementInContainer;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCompositeComponent = __webpack_require__(84);
	var ReactEmptyComponent = __webpack_require__(76);
	var ReactNativeComponent = __webpack_require__(35);

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(15);

	// To avoid a cyclic dependency, we create the final class in this module
	var ReactCompositeComponentWrapper = function() { };
	assign(
	  ReactCompositeComponentWrapper.prototype,
	  ReactCompositeComponent.Mixin,
	  {
	    _instantiateReactComponent: instantiateReactComponent
	  }
	);

	/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
	function isInternalComponentType(type) {
	  return (
	    typeof type === 'function' &&
	    typeof type.prototype !== 'undefined' &&
	    typeof type.prototype.mountComponent === 'function' &&
	    typeof type.prototype.receiveComponent === 'function'
	  );
	}

	/**
	 * Given a ReactNode, create an instance that will actually be mounted.
	 *
	 * @param {ReactNode} node
	 * @param {*} parentCompositeType The composite type that resolved this.
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(node, parentCompositeType) {
	  var instance;

	  if (node === null || node === false) {
	    node = ReactEmptyComponent.emptyElement;
	  }

	  if (typeof node === 'object') {
	    var element = node;
	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        element && (typeof element.type === 'function' ||
	                    typeof element.type === 'string'),
	        'Only functions or strings can be mounted as React components.'
	      ) : null);
	    }

	    // Special case string values
	    if (parentCompositeType === element.type &&
	        typeof element.type === 'string') {
	      // Avoid recursion if the wrapper renders itself.
	      instance = ReactNativeComponent.createInternalComponent(element);
	      // All native components are currently wrapped in a composite so we're
	      // safe to assume that this is what we should instantiate.
	    } else if (isInternalComponentType(element.type)) {
	      // This is temporarily available for custom components that are not string
	      // represenations. I.e. ART. Once those are updated to use the string
	      // representation, we can drop this code path.
	      instance = new element.type(element);
	    } else {
	      instance = new ReactCompositeComponentWrapper();
	    }
	  } else if (typeof node === 'string' || typeof node === 'number') {
	    instance = ReactNativeComponent.createInstanceForText(node);
	  } else {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      false,
	      'Encountered invalid React node of type %s',
	      typeof node
	    ) : invariant(false));
	  }

	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      typeof instance.construct === 'function' &&
	      typeof instance.mountComponent === 'function' &&
	      typeof instance.receiveComponent === 'function' &&
	      typeof instance.unmountComponent === 'function',
	      'Only React Components can be mounted.'
	    ) : null);
	  }

	  // Sets up the instance. This can probably just move into the constructor now.
	  instance.construct(node);

	  // These two fields are used by the DOM and ART diffing algorithms
	  // respectively. Instead of using expandos on components, we should be
	  // storing the state needed by the diffing algorithms elsewhere.
	  instance._mountIndex = 0;
	  instance._mountImage = null;

	  if ("production" !== process.env.NODE_ENV) {
	    instance._isOwnerNecessary = false;
	    instance._warnedAboutRefsInRender = false;
	  }

	  // Internal instances should fully constructed at this point, so they should
	  // not get any new fields added to them at this point.
	  if ("production" !== process.env.NODE_ENV) {
	    if (Object.preventExtensions) {
	      Object.preventExtensions(instance);
	    }
	  }

	  return instance;
	}

	module.exports = instantiateReactComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */

	'use strict';

	var ReactComponentEnvironment = __webpack_require__(85);
	var ReactContext = __webpack_require__(12);
	var ReactCurrentOwner = __webpack_require__(17);
	var ReactElement = __webpack_require__(11);
	var ReactElementValidator = __webpack_require__(32);
	var ReactInstanceMap = __webpack_require__(25);
	var ReactLifeCycle = __webpack_require__(24);
	var ReactNativeComponent = __webpack_require__(35);
	var ReactPerf = __webpack_require__(28);
	var ReactPropTypeLocations = __webpack_require__(33);
	var ReactPropTypeLocationNames = __webpack_require__(34);
	var ReactReconciler = __webpack_require__(29);
	var ReactUpdates = __webpack_require__(26);

	var assign = __webpack_require__(13);
	var emptyObject = __webpack_require__(14);
	var invariant = __webpack_require__(7);
	var shouldUpdateReactComponent = __webpack_require__(86);
	var warning = __webpack_require__(15);

	function getDeclarationErrorAddendum(component) {
	  var owner = component._currentElement._owner || null;
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * ------------------ The Life-Cycle of a Composite Component ------------------
	 *
	 * - constructor: Initialization of state. The instance is now retained.
	 *   - componentWillMount
	 *   - render
	 *   - [children's constructors]
	 *     - [children's componentWillMount and render]
	 *     - [children's componentDidMount]
	 *     - componentDidMount
	 *
	 *       Update Phases:
	 *       - componentWillReceiveProps (only called if parent updated)
	 *       - shouldComponentUpdate
	 *         - componentWillUpdate
	 *           - render
	 *           - [children's constructors or receive props phases]
	 *         - componentDidUpdate
	 *
	 *     - componentWillUnmount
	 *     - [children's componentWillUnmount]
	 *   - [children destroyed]
	 * - (destroyed): The instance is now blank, released by React and ready for GC.
	 *
	 * -----------------------------------------------------------------------------
	 */

	/**
	 * An incrementing ID assigned to each component when it is mounted. This is
	 * used to enforce the order in which `ReactUpdates` updates dirty components.
	 *
	 * @private
	 */
	var nextMountID = 1;

	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {

	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function(element) {
	    this._currentElement = element;
	    this._rootNodeID = null;
	    this._instance = null;

	    // See ReactUpdateQueue
	    this._pendingElement = null;
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    this._renderedComponent = null;

	    this._context = null;
	    this._mountOrder = 0;
	    this._isTopLevel = false;

	    // See ReactUpdates and ReactUpdateQueue.
	    this._pendingCallbacks = null;
	  },

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function(rootID, transaction, context) {
	    this._context = context;
	    this._mountOrder = nextMountID++;
	    this._rootNodeID = rootID;

	    var publicProps = this._processProps(this._currentElement.props);
	    var publicContext = this._processContext(this._currentElement._context);

	    var Component = ReactNativeComponent.getComponentClassForElement(
	      this._currentElement
	    );

	    // Initialize the public class
	    var inst = new Component(publicProps, publicContext);

	    if ("production" !== process.env.NODE_ENV) {
	      // This will throw later in _renderValidatedComponent, but add an early
	      // warning now to help debugging
	      ("production" !== process.env.NODE_ENV ? warning(
	        inst.render != null,
	        '%s(...): No `render` method found on the returned component ' +
	        'instance: you may have forgotten to define `render` in your ' +
	        'component or you may have accidentally tried to render an element ' +
	        'whose type is a function that isn\'t a React component.',
	        Component.displayName || Component.name || 'Component'
	      ) : null);
	    }

	    // These should be set up in the constructor, but as a convenience for
	    // simpler class abstractions, we set them up after the fact.
	    inst.props = publicProps;
	    inst.context = publicContext;
	    inst.refs = emptyObject;

	    this._instance = inst;

	    // Store a reference from the instance back to the internal representation
	    ReactInstanceMap.set(inst, this);

	    if ("production" !== process.env.NODE_ENV) {
	      this._warnIfContextsDiffer(this._currentElement._context, context);
	    }

	    if ("production" !== process.env.NODE_ENV) {
	      // Since plain JS classes are defined without any special initialization
	      // logic, we can not catch common errors early. Therefore, we have to
	      // catch them here, at initialization time, instead.
	      ("production" !== process.env.NODE_ENV ? warning(
	        !inst.getInitialState ||
	        inst.getInitialState.isReactClassApproved,
	        'getInitialState was defined on %s, a plain JavaScript class. ' +
	        'This is only supported for classes created using React.createClass. ' +
	        'Did you mean to define a state property instead?',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== process.env.NODE_ENV ? warning(
	        !inst.getDefaultProps ||
	        inst.getDefaultProps.isReactClassApproved,
	        'getDefaultProps was defined on %s, a plain JavaScript class. ' +
	        'This is only supported for classes created using React.createClass. ' +
	        'Use a static property to define defaultProps instead.',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== process.env.NODE_ENV ? warning(
	        !inst.propTypes,
	        'propTypes was defined as an instance property on %s. Use a static ' +
	        'property to define propTypes instead.',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== process.env.NODE_ENV ? warning(
	        !inst.contextTypes,
	        'contextTypes was defined as an instance property on %s. Use a ' +
	        'static property to define contextTypes instead.',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== process.env.NODE_ENV ? warning(
	        typeof inst.componentShouldUpdate !== 'function',
	        '%s has a method called ' +
	        'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	        'The name is phrased as a question because the function is ' +
	        'expected to return a value.',
	        (this.getName() || 'A component')
	      ) : null);
	    }

	    var initialState = inst.state;
	    if (initialState === undefined) {
	      inst.state = initialState = null;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof initialState === 'object' && !Array.isArray(initialState),
	      '%s.state: must be set to an object or null',
	      this.getName() || 'ReactCompositeComponent'
	    ) : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));

	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    var childContext;
	    var renderedElement;

	    var previouslyMounting = ReactLifeCycle.currentlyMountingInstance;
	    ReactLifeCycle.currentlyMountingInstance = this;
	    try {
	      if (inst.componentWillMount) {
	        inst.componentWillMount();
	        // When mounting, calls to `setState` by `componentWillMount` will set
	        // `this._pendingStateQueue` without triggering a re-render.
	        if (this._pendingStateQueue) {
	          inst.state = this._processPendingState(inst.props, inst.context);
	        }
	      }

	      childContext = this._getValidatedChildContext(context);
	      renderedElement = this._renderValidatedComponent(childContext);
	    } finally {
	      ReactLifeCycle.currentlyMountingInstance = previouslyMounting;
	    }

	    this._renderedComponent = this._instantiateReactComponent(
	      renderedElement,
	      this._currentElement.type // The wrapping type
	    );

	    var markup = ReactReconciler.mountComponent(
	      this._renderedComponent,
	      rootID,
	      transaction,
	      this._mergeChildContext(context, childContext)
	    );
	    if (inst.componentDidMount) {
	      transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
	    }

	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function() {
	    var inst = this._instance;

	    if (inst.componentWillUnmount) {
	      var previouslyUnmounting = ReactLifeCycle.currentlyUnmountingInstance;
	      ReactLifeCycle.currentlyUnmountingInstance = this;
	      try {
	        inst.componentWillUnmount();
	      } finally {
	        ReactLifeCycle.currentlyUnmountingInstance = previouslyUnmounting;
	      }
	    }

	    ReactReconciler.unmountComponent(this._renderedComponent);
	    this._renderedComponent = null;

	    // Reset pending fields
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	    this._pendingCallbacks = null;
	    this._pendingElement = null;

	    // These fields do not really need to be reset since this object is no
	    // longer accessible.
	    this._context = null;
	    this._rootNodeID = null;

	    // Delete the reference from the instance to this internal representation
	    // which allow the internals to be properly cleaned up even if the user
	    // leaks a reference to the public instance.
	    ReactInstanceMap.remove(inst);

	    // Some existing components rely on inst.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: inst.props = null;
	    // TODO: inst.state = null;
	    // TODO: inst.context = null;
	  },

	  /**
	   * Schedule a partial update to the props. Only used for internal testing.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @internal
	   */
	  _setPropsInternal: function(partialProps, callback) {
	    // This is a deoptimized path. We optimize for always having an element.
	    // This creates an extra internal element.
	    var element = this._pendingElement || this._currentElement;
	    this._pendingElement = ReactElement.cloneAndReplaceProps(
	      element,
	      assign({}, element.props, partialProps)
	    );
	    ReactUpdates.enqueueUpdate(this, callback);
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _maskContext: function(context) {
	    var maskedContext = null;
	    // This really should be getting the component class for the element,
	    // but we know that we're not going to need it for built-ins.
	    if (typeof this._currentElement.type === 'string') {
	      return emptyObject;
	    }
	    var contextTypes = this._currentElement.type.contextTypes;
	    if (!contextTypes) {
	      return emptyObject;
	    }
	    maskedContext = {};
	    for (var contextName in contextTypes) {
	      maskedContext[contextName] = context[contextName];
	    }
	    return maskedContext;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function(context) {
	    var maskedContext = this._maskContext(context);
	    if ("production" !== process.env.NODE_ENV) {
	      var Component = ReactNativeComponent.getComponentClassForElement(
	        this._currentElement
	      );
	      if (Component.contextTypes) {
	        this._checkPropTypes(
	          Component.contextTypes,
	          maskedContext,
	          ReactPropTypeLocations.context
	        );
	      }
	    }
	    return maskedContext;
	  },

	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _getValidatedChildContext: function(currentContext) {
	    var inst = this._instance;
	    var childContext = inst.getChildContext && inst.getChildContext();
	    if (childContext) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        typeof inst.constructor.childContextTypes === 'object',
	        '%s.getChildContext(): childContextTypes must be defined in order to ' +
	        'use getChildContext().',
	        this.getName() || 'ReactCompositeComponent'
	      ) : invariant(typeof inst.constructor.childContextTypes === 'object'));
	      if ("production" !== process.env.NODE_ENV) {
	        this._checkPropTypes(
	          inst.constructor.childContextTypes,
	          childContext,
	          ReactPropTypeLocations.childContext
	        );
	      }
	      for (var name in childContext) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          name in inst.constructor.childContextTypes,
	          '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
	          this.getName() || 'ReactCompositeComponent',
	          name
	        ) : invariant(name in inst.constructor.childContextTypes));
	      }
	      return childContext;
	    }
	    return null;
	  },

	  _mergeChildContext: function(currentContext, childContext) {
	    if (childContext) {
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },

	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function(newProps) {
	    if ("production" !== process.env.NODE_ENV) {
	      var Component = ReactNativeComponent.getComponentClassForElement(
	        this._currentElement
	      );
	      if (Component.propTypes) {
	        this._checkPropTypes(
	          Component.propTypes,
	          newProps,
	          ReactPropTypeLocations.prop
	        );
	      }
	    }
	    return newProps;
	  },

	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function(propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.getName();
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error;
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          ("production" !== process.env.NODE_ENV ? invariant(
	            typeof propTypes[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually ' +
	            'from React.PropTypes.',
	            componentName || 'React class',
	            ReactPropTypeLocationNames[location],
	            propName
	          ) : invariant(typeof propTypes[propName] === 'function'));
	          error = propTypes[propName](props, propName, componentName, location);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // React.render calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);

	          if (location === ReactPropTypeLocations.prop) {
	            // Preface gives us something to blacklist in warning module
	            ("production" !== process.env.NODE_ENV ? warning(
	              false,
	              'Failed Composite propType: %s%s',
	              error.message,
	              addendum
	            ) : null);
	          } else {
	            ("production" !== process.env.NODE_ENV ? warning(
	              false,
	              'Failed Context Types: %s%s',
	              error.message,
	              addendum
	            ) : null);
	          }
	        }
	      }
	    }
	  },

	  receiveComponent: function(nextElement, transaction, nextContext) {
	    var prevElement = this._currentElement;
	    var prevContext = this._context;

	    this._pendingElement = null;

	    this.updateComponent(
	      transaction,
	      prevElement,
	      nextElement,
	      prevContext,
	      nextContext
	    );
	  },

	  /**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function(transaction) {
	    if (this._pendingElement != null) {
	      ReactReconciler.receiveComponent(
	        this,
	        this._pendingElement || this._currentElement,
	        transaction,
	        this._context
	      );
	    }

	    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
	      if ("production" !== process.env.NODE_ENV) {
	        ReactElementValidator.checkAndWarnForMutatedProps(
	          this._currentElement
	        );
	      }

	      this.updateComponent(
	        transaction,
	        this._currentElement,
	        this._currentElement,
	        this._context,
	        this._context
	      );
	    }
	  },

	  /**
	   * Compare two contexts, warning if they are different
	   * TODO: Remove this check when owner-context is removed
	   */
	   _warnIfContextsDiffer: function(ownerBasedContext, parentBasedContext) {
	    ownerBasedContext = this._maskContext(ownerBasedContext);
	    parentBasedContext = this._maskContext(parentBasedContext);
	    var parentKeys = Object.keys(parentBasedContext).sort();
	    var displayName = this.getName() || 'ReactCompositeComponent';
	    for (var i = 0; i < parentKeys.length; i++) {
	      var key = parentKeys[i];
	      ("production" !== process.env.NODE_ENV ? warning(
	        ownerBasedContext[key] === parentBasedContext[key],
	        'owner-based and parent-based contexts differ '  +
	        '(values: `%s` vs `%s`) for key (%s) while mounting %s ' +
	        '(see: http://fb.me/react-context-by-parent)',
	        ownerBasedContext[key],
	        parentBasedContext[key],
	        key,
	        displayName
	      ) : null);
	    }
	  },

	  /**
	   * Perform an update to a mounted component. The componentWillReceiveProps and
	   * shouldComponentUpdate methods are called, then (assuming the update isn't
	   * skipped) the remaining update lifecycle methods are called and the DOM
	   * representation is updated.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevParentElement
	   * @param {ReactElement} nextParentElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function(
	    transaction,
	    prevParentElement,
	    nextParentElement,
	    prevUnmaskedContext,
	    nextUnmaskedContext
	  ) {
	    var inst = this._instance;

	    var nextContext = inst.context;
	    var nextProps = inst.props;

	    // Distinguish between a props update versus a simple state update
	    if (prevParentElement !== nextParentElement) {
	      nextContext = this._processContext(nextParentElement._context);
	      nextProps = this._processProps(nextParentElement.props);

	      if ("production" !== process.env.NODE_ENV) {
	        if (nextUnmaskedContext != null) {
	          this._warnIfContextsDiffer(
	            nextParentElement._context,
	            nextUnmaskedContext
	          );
	        }
	      }

	      // An update here will schedule an update but immediately set
	      // _pendingStateQueue which will ensure that any state updates gets
	      // immediately reconciled instead of waiting for the next batch.

	      if (inst.componentWillReceiveProps) {
	        inst.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }

	    var nextState = this._processPendingState(nextProps, nextContext);

	    var shouldUpdate =
	      this._pendingForceUpdate ||
	      !inst.shouldComponentUpdate ||
	      inst.shouldComponentUpdate(nextProps, nextState, nextContext);

	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        typeof shouldUpdate !== 'undefined',
	        '%s.shouldComponentUpdate(): Returned undefined instead of a ' +
	        'boolean value. Make sure to return true or false.',
	        this.getName() || 'ReactCompositeComponent'
	      ) : null);
	    }

	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(
	        nextParentElement,
	        nextProps,
	        nextState,
	        nextContext,
	        transaction,
	        nextUnmaskedContext
	      );
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state but we shortcut the rest of the update.
	      this._currentElement = nextParentElement;
	      this._context = nextUnmaskedContext;
	      inst.props = nextProps;
	      inst.state = nextState;
	      inst.context = nextContext;
	    }
	  },

	  _processPendingState: function(props, context) {
	    var inst = this._instance;
	    var queue = this._pendingStateQueue;
	    var replace = this._pendingReplaceState;
	    this._pendingReplaceState = false;
	    this._pendingStateQueue = null;

	    if (!queue) {
	      return inst.state;
	    }

	    if (replace && queue.length === 1) {
	      return queue[0];
	    }

	    var nextState = assign({}, replace ? queue[0] : inst.state);
	    for (var i = replace ? 1 : 0; i < queue.length; i++) {
	      var partial = queue[i];
	      assign(
	        nextState,
	        typeof partial === 'function' ?
	          partial.call(inst, nextState, props, context) :
	          partial
	      );
	    }

	    return nextState;
	  },

	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?object} unmaskedContext
	   * @private
	   */
	  _performComponentUpdate: function(
	    nextElement,
	    nextProps,
	    nextState,
	    nextContext,
	    transaction,
	    unmaskedContext
	  ) {
	    var inst = this._instance;

	    var prevProps = inst.props;
	    var prevState = inst.state;
	    var prevContext = inst.context;

	    if (inst.componentWillUpdate) {
	      inst.componentWillUpdate(nextProps, nextState, nextContext);
	    }

	    this._currentElement = nextElement;
	    this._context = unmaskedContext;
	    inst.props = nextProps;
	    inst.state = nextState;
	    inst.context = nextContext;

	    this._updateRenderedComponent(transaction, unmaskedContext);

	    if (inst.componentDidUpdate) {
	      transaction.getReactMountReady().enqueue(
	        inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext),
	        inst
	      );
	    }
	  },

	  /**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  _updateRenderedComponent: function(transaction, context) {
	    var prevComponentInstance = this._renderedComponent;
	    var prevRenderedElement = prevComponentInstance._currentElement;
	    var childContext = this._getValidatedChildContext();
	    var nextRenderedElement = this._renderValidatedComponent(childContext);
	    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
	      ReactReconciler.receiveComponent(
	        prevComponentInstance,
	        nextRenderedElement,
	        transaction,
	        this._mergeChildContext(context, childContext)
	      );
	    } else {
	      // These two IDs are actually the same! But nothing should rely on that.
	      var thisID = this._rootNodeID;
	      var prevComponentID = prevComponentInstance._rootNodeID;
	      ReactReconciler.unmountComponent(prevComponentInstance);

	      this._renderedComponent = this._instantiateReactComponent(
	        nextRenderedElement,
	        this._currentElement.type
	      );
	      var nextMarkup = ReactReconciler.mountComponent(
	        this._renderedComponent,
	        thisID,
	        transaction,
	        this._mergeChildContext(context, childContext)
	      );
	      this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	    }
	  },

	  /**
	   * @protected
	   */
	  _replaceNodeWithMarkupByID: function(prevComponentID, nextMarkup) {
	    ReactComponentEnvironment.replaceNodeWithMarkupByID(
	      prevComponentID,
	      nextMarkup
	    );
	  },

	  /**
	   * @protected
	   */
	  _renderValidatedComponentWithoutOwnerOrContext: function() {
	    var inst = this._instance;
	    var renderedComponent = inst.render();
	    if ("production" !== process.env.NODE_ENV) {
	      // We allow auto-mocks to proceed as if they're returning null.
	      if (typeof renderedComponent === 'undefined' &&
	          inst.render._isMockFunction) {
	        // This is probably bad practice. Consider warning here and
	        // deprecating this convenience.
	        renderedComponent = null;
	      }
	    }

	    return renderedComponent;
	  },

	  /**
	   * @private
	   */
	  _renderValidatedComponent: function(childContext) {
	    var renderedComponent;
	    var previousContext = ReactContext.current;
	    ReactContext.current = this._mergeChildContext(
	      this._currentElement._context,
	      childContext
	    );
	    ReactCurrentOwner.current = this;
	    try {
	      renderedComponent =
	        this._renderValidatedComponentWithoutOwnerOrContext();
	    } finally {
	      ReactContext.current = previousContext;
	      ReactCurrentOwner.current = null;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      // TODO: An `isValidNode` function would probably be more appropriate
	      renderedComponent === null || renderedComponent === false ||
	      ReactElement.isValidElement(renderedComponent),
	      '%s.render(): A valid ReactComponent must be returned. You may have ' +
	        'returned undefined, an array or some other invalid object.',
	      this.getName() || 'ReactCompositeComponent'
	    ) : invariant(// TODO: An `isValidNode` function would probably be more appropriate
	    renderedComponent === null || renderedComponent === false ||
	    ReactElement.isValidElement(renderedComponent)));
	    return renderedComponent;
	  },

	  /**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
	  attachRef: function(ref, component) {
	    var inst = this.getPublicInstance();
	    var refs = inst.refs === emptyObject ? (inst.refs = {}) : inst.refs;
	    refs[ref] = component.getPublicInstance();
	  },

	  /**
	   * Detaches a reference name.
	   *
	   * @param {string} ref Name to dereference.
	   * @final
	   * @private
	   */
	  detachRef: function(ref) {
	    var refs = this.getPublicInstance().refs;
	    delete refs[ref];
	  },

	  /**
	   * Get a text description of the component that can be used to identify it
	   * in error messages.
	   * @return {string} The name or null.
	   * @internal
	   */
	  getName: function() {
	    var type = this._currentElement.type;
	    var constructor = this._instance && this._instance.constructor;
	    return (
	      type.displayName || (constructor && constructor.displayName) ||
	      type.name || (constructor && constructor.name) ||
	      null
	    );
	  },

	  /**
	   * Get the publicly accessible representation of this component - i.e. what
	   * is exposed by refs and returned by React.render. Can be null for stateless
	   * components.
	   *
	   * @return {ReactComponent} the public component instance.
	   * @internal
	   */
	  getPublicInstance: function() {
	    return this._instance;
	  },

	  // Stub
	  _instantiateReactComponent: null

	};

	ReactPerf.measureMethods(
	  ReactCompositeComponentMixin,
	  'ReactCompositeComponent',
	  {
	    mountComponent: 'mountComponent',
	    updateComponent: 'updateComponent',
	    _renderValidatedComponent: '_renderValidatedComponent'
	  }
	);

	var ReactCompositeComponent = {

	  Mixin: ReactCompositeComponentMixin

	};

	module.exports = ReactCompositeComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentEnvironment
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	var injected = false;

	var ReactComponentEnvironment = {

	  /**
	   * Optionally injectable environment dependent cleanup hook. (server vs.
	   * browser etc). Example: A browser system caches DOM nodes based on component
	   * ID and must remove that cache entry when this instance is unmounted.
	   */
	  unmountIDFromEnvironment: null,

	  /**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
	  replaceNodeWithMarkupByID: null,

	  /**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
	  processChildrenUpdates: null,

	  injection: {
	    injectEnvironment: function(environment) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        !injected,
	        'ReactCompositeComponent: injectEnvironment() can only be called once.'
	      ) : invariant(!injected));
	      ReactComponentEnvironment.unmountIDFromEnvironment =
	        environment.unmountIDFromEnvironment;
	      ReactComponentEnvironment.replaceNodeWithMarkupByID =
	        environment.replaceNodeWithMarkupByID;
	      ReactComponentEnvironment.processChildrenUpdates =
	        environment.processChildrenUpdates;
	      injected = true;
	    }
	  }

	};

	module.exports = ReactComponentEnvironment;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	var warning = __webpack_require__(15);

	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
	function shouldUpdateReactComponent(prevElement, nextElement) {
	  if (prevElement != null && nextElement != null) {
	    var prevType = typeof prevElement;
	    var nextType = typeof nextElement;
	    if (prevType === 'string' || prevType === 'number') {
	      return (nextType === 'string' || nextType === 'number');
	    } else {
	      if (nextType === 'object' &&
	          prevElement.type === nextElement.type &&
	          prevElement.key === nextElement.key) {
	        var ownersMatch = prevElement._owner === nextElement._owner;
	        var prevName = null;
	        var nextName = null;
	        var nextDisplayName = null;
	        if ("production" !== process.env.NODE_ENV) {
	          if (!ownersMatch) {
	            if (prevElement._owner != null &&
	                prevElement._owner.getPublicInstance() != null &&
	                prevElement._owner.getPublicInstance().constructor != null) {
	              prevName =
	                prevElement._owner.getPublicInstance().constructor.displayName;
	            }
	            if (nextElement._owner != null &&
	                nextElement._owner.getPublicInstance() != null &&
	                nextElement._owner.getPublicInstance().constructor != null) {
	              nextName =
	                nextElement._owner.getPublicInstance().constructor.displayName;
	            }
	            if (nextElement.type != null &&
	                nextElement.type.displayName != null) {
	              nextDisplayName = nextElement.type.displayName;
	            }
	            if (nextElement.type != null && typeof nextElement.type === 'string') {
	              nextDisplayName = nextElement.type;
	            }
	            if (typeof nextElement.type !== 'string' ||
	                nextElement.type === 'input' ||
	                nextElement.type === 'textarea') {
	              if ((prevElement._owner != null &&
	                  prevElement._owner._isOwnerNecessary === false) ||
	                  (nextElement._owner != null &&
	                  nextElement._owner._isOwnerNecessary === false)) {
	                if (prevElement._owner != null) {
	                  prevElement._owner._isOwnerNecessary = true;
	                }
	                if (nextElement._owner != null) {
	                  nextElement._owner._isOwnerNecessary = true;
	                }
	                ("production" !== process.env.NODE_ENV ? warning(
	                  false,
	                  '<%s /> is being rendered by both %s and %s using the same ' +
	                  'key (%s) in the same place. Currently, this means that ' +
	                  'they don\'t preserve state. This behavior should be very ' +
	                  'rare so we\'re considering deprecating it. Please contact ' +
	                  'the React team and explain your use case so that we can ' +
	                  'take that into consideration.',
	                  nextDisplayName || 'Unknown Component',
	                  prevName || '[Unknown]',
	                  nextName || '[Unknown]',
	                  prevElement.key
	                ) : null);
	              }
	            }
	          }
	        }
	        return ownersMatch;
	      }
	    }
	  }
	  return false;
	}

	module.exports = shouldUpdateReactComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var CSSPropertyOperations = __webpack_require__(49);
	var DOMProperty = __webpack_require__(44);
	var DOMPropertyOperations = __webpack_require__(43);
	var ReactBrowserEventEmitter = __webpack_require__(68);
	var ReactComponentBrowserEnvironment =
	  __webpack_require__(47);
	var ReactMount = __webpack_require__(67);
	var ReactMultiChild = __webpack_require__(88);
	var ReactPerf = __webpack_require__(28);

	var assign = __webpack_require__(13);
	var escapeTextContentForBrowser = __webpack_require__(46);
	var invariant = __webpack_require__(7);
	var isEventSupported = __webpack_require__(75);
	var keyOf = __webpack_require__(39);
	var warning = __webpack_require__(15);

	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = {'string': true, 'number': true};

	var STYLE = keyOf({style: null});

	var ELEMENT_NODE_TYPE = 1;

	/**
	 * Optionally injectable operations for mutating the DOM
	 */
	var BackendIDOperations = null;

	/**
	 * @param {?object} props
	 */
	function assertValidProps(props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (props.dangerouslySetInnerHTML != null) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      props.children == null,
	      'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
	    ) : invariant(props.children == null));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof props.dangerouslySetInnerHTML === 'object' &&
	      '__html' in props.dangerouslySetInnerHTML,
	      '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' +
	      'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' +
	      'for more information.'
	    ) : invariant(typeof props.dangerouslySetInnerHTML === 'object' &&
	    '__html' in props.dangerouslySetInnerHTML));
	  }
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      props.innerHTML == null,
	      'Directly setting property `innerHTML` is not permitted. ' +
	      'For more information, lookup documentation on `dangerouslySetInnerHTML`.'
	    ) : null);
	    ("production" !== process.env.NODE_ENV ? warning(
	      !props.contentEditable || props.children == null,
	      'A component is `contentEditable` and contains `children` managed by ' +
	      'React. It is now your responsibility to guarantee that none of ' +
	      'those nodes are unexpectedly modified or duplicated. This is ' +
	      'probably not intentional.'
	    ) : null);
	  }
	  ("production" !== process.env.NODE_ENV ? invariant(
	    props.style == null || typeof props.style === 'object',
	    'The `style` prop expects a mapping from style properties to values, ' +
	    'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' +
	    'using JSX.'
	  ) : invariant(props.style == null || typeof props.style === 'object'));
	}

	function putListener(id, registrationName, listener, transaction) {
	  if ("production" !== process.env.NODE_ENV) {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    ("production" !== process.env.NODE_ENV ? warning(
	      registrationName !== 'onScroll' || isEventSupported('scroll', true),
	      'This browser doesn\'t support the `onScroll` event'
	    ) : null);
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ?
	      container.ownerDocument :
	      container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getPutListenerQueue().enqueuePutListener(
	    id,
	    registrationName,
	    listener
	  );
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.

	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	  // NOTE: menuitem's close tag should be omitted, but that causes problems.
	};

	// We accept any tag to be rendered but since this gets injected into abitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name

	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = {}.hasOwnProperty;

	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    ("production" !== process.env.NODE_ENV ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
	    validatedTagCache[tag] = true;
	  }
	}

	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag;
	  this._renderedChildren = null;
	  this._previousStyleCopy = null;
	  this._rootNodeID = null;
	}

	ReactDOMComponent.displayName = 'ReactDOMComponent';

	ReactDOMComponent.Mixin = {

	  construct: function(element) {
	    this._currentElement = element;
	  },

	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} The computed markup.
	   */
	  mountComponent: function(rootID, transaction, context) {
	    this._rootNodeID = rootID;
	    assertValidProps(this._currentElement.props);
	    var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
	    return (
	      this._createOpenTagMarkupAndPutListeners(transaction) +
	      this._createContentMarkup(transaction, context) +
	      closeTag
	    );
	  },

	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function(transaction) {
	    var props = this._currentElement.props;
	    var ret = '<' + this._tag;

	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, propValue, transaction);
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            propValue = this._previousStyleCopy = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup =
	          DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }

	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret + '>';
	    }

	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID + '>';
	  },

	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function(transaction, context) {
	    var prefix = '';
	    if (this._tag === 'listing' ||
	        this._tag === 'pre' ||
	        this._tag === 'textarea') {
	      // Add an initial newline because browsers ignore the first newline in
	      // a <listing>, <pre>, or <textarea> as an "authoring convenience" -- see
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody.
	      prefix = '\n';
	    }

	    var props = this._currentElement.props;

	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        return prefix + innerHTML.__html;
	      }
	    } else {
	      var contentToUse =
	        CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        return prefix + escapeTextContentForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(
	          childrenToUse,
	          transaction,
	          context
	        );
	        return prefix + mountImages.join('');
	      }
	    }
	    return prefix;
	  },

	  receiveComponent: function(nextElement, transaction, context) {
	    var prevElement = this._currentElement;
	    this._currentElement = nextElement;
	    this.updateComponent(transaction, prevElement, nextElement, context);
	  },

	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function(transaction, prevElement, nextElement, context) {
	    assertValidProps(this._currentElement.props);
	    this._updateDOMProperties(prevElement.props, transaction);
	    this._updateDOMChildren(prevElement.props, transaction, context);
	  },

	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMProperties: function(lastProps, transaction) {
	    var nextProps = this._currentElement.props;
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) ||
	         !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = this._previousStyleCopy;
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	        this._previousStyleCopy = null;
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        deleteListener(this._rootNodeID, propKey);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        BackendIDOperations.deletePropertyByID(
	          this._rootNodeID,
	          propKey
	        );
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = propKey === STYLE ?
	        this._previousStyleCopy :
	        lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          nextProp = this._previousStyleCopy = assign({}, nextProp);
	        } else {
	          this._previousStyleCopy = null;
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) &&
	                (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) &&
	                lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, nextProp, transaction);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        BackendIDOperations.updatePropertyByID(
	          this._rootNodeID,
	          propKey,
	          nextProp
	        );
	      }
	    }
	    if (styleUpdates) {
	      BackendIDOperations.updateStylesByID(
	        this._rootNodeID,
	        styleUpdates
	      );
	    }
	  },

	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMChildren: function(lastProps, transaction, context) {
	    var nextProps = this._currentElement.props;

	    var lastContent =
	      CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent =
	      CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

	    var lastHtml =
	      lastProps.dangerouslySetInnerHTML &&
	      lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml =
	      nextProps.dangerouslySetInnerHTML &&
	      nextProps.dangerouslySetInnerHTML.__html;

	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;

	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction, context);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }

	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        BackendIDOperations.updateInnerHTMLByID(
	          this._rootNodeID,
	          nextHtml
	        );
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction, context);
	    }
	  },

	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function() {
	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	    this._rootNodeID = null;
	  }

	};

	ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent'
	});

	assign(
	  ReactDOMComponent.prototype,
	  ReactDOMComponent.Mixin,
	  ReactMultiChild.Mixin
	);

	ReactDOMComponent.injection = {
	  injectIDOperations: function(IDOperations) {
	    ReactDOMComponent.BackendIDOperations = BackendIDOperations = IDOperations;
	  }
	};

	module.exports = ReactDOMComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */

	'use strict';

	var ReactComponentEnvironment = __webpack_require__(85);
	var ReactMultiChildUpdateTypes = __webpack_require__(64);

	var ReactReconciler = __webpack_require__(29);
	var ReactChildReconciler = __webpack_require__(89);

	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;

	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];

	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];

	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    textContent: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    textContent: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponentEnvironment.processChildrenUpdates(
	      updateQueue,
	      markupQueue
	    );
	    clearQueue();
	  }
	}

	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}

	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {

	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {

	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function(nestedChildren, transaction, context) {
	      var children = ReactChildReconciler.instantiateChildren(
	        nestedChildren, transaction, context
	      );
	      this._renderedChildren = children;
	      var mountImages = [];
	      var index = 0;
	      for (var name in children) {
	        if (children.hasOwnProperty(name)) {
	          var child = children[name];
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = ReactReconciler.mountComponent(
	            child,
	            rootID,
	            transaction,
	            context
	          );
	          child._mountIndex = index;
	          mountImages.push(mountImage);
	          index++;
	        }
	      }
	      return mountImages;
	    },

	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function(nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        // TODO: The setTextContent operation should be enough
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function(nextNestedChildren, transaction, context) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildren, transaction, context);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }

	      }
	    },

	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function(nextNestedChildren, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var nextChildren = ReactChildReconciler.updateChildren(
	        prevChildren, nextNestedChildren, transaction, context
	      );
	      this._renderedChildren = nextChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var nextChild = nextChildren[name];
	        if (prevChild === nextChild) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChildByName(prevChild, name);
	          }
	          // The child must be instantiated before it's mounted.
	          this._mountChildByNameAtIndex(
	            nextChild, name, nextIndex, transaction, context
	          );
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) &&
	            !(nextChildren && nextChildren.hasOwnProperty(name))) {
	          this._unmountChildByName(prevChildren[name], name);
	        }
	      }
	    },

	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function() {
	      var renderedChildren = this._renderedChildren;
	      ReactChildReconciler.unmountChildren(renderedChildren);
	      this._renderedChildren = null;
	    },

	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function(child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },

	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function(child, mountImage) {
	      enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },

	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function(child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },

	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function(textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },

	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function(
	      child,
	      name,
	      index,
	      transaction,
	      context) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = ReactReconciler.mountComponent(
	        child,
	        rootID,
	        transaction,
	        context
	      );
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	    },

	    /**
	     * Unmounts a rendered child by name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @param {string} name Name of the child in `this._renderedChildren`.
	     * @private
	     */
	    _unmountChildByName: function(child, name) {
	      this.removeChild(child);
	      child._mountIndex = null;
	    }

	  }

	};

	module.exports = ReactMultiChild;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildReconciler
	 * @typechecks static-only
	 */

	'use strict';

	var ReactReconciler = __webpack_require__(29);

	var flattenChildren = __webpack_require__(90);
	var instantiateReactComponent = __webpack_require__(83);
	var shouldUpdateReactComponent = __webpack_require__(86);

	/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
	var ReactChildReconciler = {

	  /**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
	  instantiateChildren: function(nestedChildNodes, transaction, context) {
	    var children = flattenChildren(nestedChildNodes);
	    for (var name in children) {
	      if (children.hasOwnProperty(name)) {
	        var child = children[name];
	        // The rendered children must be turned into instances as they're
	        // mounted.
	        var childInstance = instantiateReactComponent(child, null);
	        children[name] = childInstance;
	      }
	    }
	    return children;
	  },

	  /**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextNestedChildNodes Nested child maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
	  updateChildren: function(
	    prevChildren,
	    nextNestedChildNodes,
	    transaction,
	    context) {
	    // We currently don't have a way to track moves here but if we use iterators
	    // instead of for..in we can zip the iterators and check if an item has
	    // moved.
	    // TODO: If nothing has changed, return the prevChildren object so that we
	    // can quickly bailout if nothing has changed.
	    var nextChildren = flattenChildren(nextNestedChildNodes);
	    if (!nextChildren && !prevChildren) {
	      return null;
	    }
	    var name;
	    for (name in nextChildren) {
	      if (!nextChildren.hasOwnProperty(name)) {
	        continue;
	      }
	      var prevChild = prevChildren && prevChildren[name];
	      var prevElement = prevChild && prevChild._currentElement;
	      var nextElement = nextChildren[name];
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        ReactReconciler.receiveComponent(
	          prevChild, nextElement, transaction, context
	        );
	        nextChildren[name] = prevChild;
	      } else {
	        if (prevChild) {
	          ReactReconciler.unmountComponent(prevChild, name);
	        }
	        // The child must be instantiated before it's mounted.
	        var nextChildInstance = instantiateReactComponent(
	          nextElement,
	          null
	        );
	        nextChildren[name] = nextChildInstance;
	      }
	    }
	    // Unmount children that are no longer present.
	    for (name in prevChildren) {
	      if (prevChildren.hasOwnProperty(name) &&
	          !(nextChildren && nextChildren.hasOwnProperty(name))) {
	        ReactReconciler.unmountComponent(prevChildren[name]);
	      }
	    }
	    return nextChildren;
	  },

	  /**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
	  unmountChildren: function(renderedChildren) {
	    for (var name in renderedChildren) {
	      var renderedChild = renderedChildren[name];
	      ReactReconciler.unmountComponent(renderedChild);
	    }
	  }

	};

	module.exports = ReactChildReconciler;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */

	'use strict';

	var traverseAllChildren = __webpack_require__(18);
	var warning = __webpack_require__(15);

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = !result.hasOwnProperty(name);
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      keyUnique,
	      'flattenChildren(...): Encountered two children with the same key, ' +
	      '`%s`. Child keys must be unique; when two children share a key, only ' +
	      'the first child will be used.',
	      name
	    ) : null);
	  }
	  if (keyUnique && child != null) {
	    result[name] = child;
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}

	module.exports = flattenChildren;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */

	'use strict';

	var BeforeInputEventPlugin = __webpack_require__(92);
	var ChangeEventPlugin = __webpack_require__(100);
	var ClientReactRootIndex = __webpack_require__(102);
	var DefaultEventPluginOrder = __webpack_require__(103);
	var EnterLeaveEventPlugin = __webpack_require__(104);
	var ExecutionEnvironment = __webpack_require__(51);
	var HTMLDOMPropertyConfig = __webpack_require__(108);
	var MobileSafariClickEventPlugin = __webpack_require__(109);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactComponentBrowserEnvironment =
	  __webpack_require__(47);
	var ReactDefaultBatchingStrategy = __webpack_require__(112);
	var ReactDOMComponent = __webpack_require__(87);
	var ReactDOMButton = __webpack_require__(113);
	var ReactDOMForm = __webpack_require__(116);
	var ReactDOMImg = __webpack_require__(118);
	var ReactDOMIDOperations = __webpack_require__(48);
	var ReactDOMIframe = __webpack_require__(119);
	var ReactDOMInput = __webpack_require__(120);
	var ReactDOMOption = __webpack_require__(123);
	var ReactDOMSelect = __webpack_require__(124);
	var ReactDOMTextarea = __webpack_require__(125);
	var ReactDOMTextComponent = __webpack_require__(42);
	var ReactElement = __webpack_require__(11);
	var ReactEventListener = __webpack_require__(126);
	var ReactInjection = __webpack_require__(129);
	var ReactInstanceHandles = __webpack_require__(19);
	var ReactMount = __webpack_require__(67);
	var ReactReconcileTransaction = __webpack_require__(130);
	var SelectEventPlugin = __webpack_require__(136);
	var ServerReactRootIndex = __webpack_require__(138);
	var SimpleEventPlugin = __webpack_require__(139);
	var SVGDOMPropertyConfig = __webpack_require__(148);

	var createFullPageComponent = __webpack_require__(149);

	function autoGenerateWrapperClass(type) {
	  return ReactClass.createClass({
	    tagName: type.toUpperCase(),
	    render: function() {
	      return new ReactElement(
	        type,
	        null,
	        null,
	        null,
	        null,
	        this.props
	      );
	    }
	  });
	}

	function inject() {
	  ReactInjection.EventEmitter.injectReactEventListener(
	    ReactEventListener
	  );

	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);

	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });

	  ReactInjection.NativeComponent.injectGenericComponentClass(
	    ReactDOMComponent
	  );

	  ReactInjection.NativeComponent.injectTextComponentClass(
	    ReactDOMTextComponent
	  );

	  ReactInjection.NativeComponent.injectAutoWrapper(
	    autoGenerateWrapperClass
	  );

	  // This needs to happen before createFullPageComponent() otherwise the mixin
	  // won't be included.
	  ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);

	  ReactInjection.NativeComponent.injectComponentClasses({
	    'button': ReactDOMButton,
	    'form': ReactDOMForm,
	    'iframe': ReactDOMIframe,
	    'img': ReactDOMImg,
	    'input': ReactDOMInput,
	    'option': ReactDOMOption,
	    'select': ReactDOMSelect,
	    'textarea': ReactDOMTextarea,

	    'html': createFullPageComponent('html'),
	    'head': createFullPageComponent('head'),
	    'body': createFullPageComponent('body')
	  });

	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

	  ReactInjection.Updates.injectReconcileTransaction(
	    ReactReconcileTransaction
	  );
	  ReactInjection.Updates.injectBatchingStrategy(
	    ReactDefaultBatchingStrategy
	  );

	  ReactInjection.RootIndex.injectCreateReactRootIndex(
	    ExecutionEnvironment.canUseDOM ?
	      ClientReactRootIndex.createReactRootIndex :
	      ServerReactRootIndex.createReactRootIndex
	  );

	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
	  ReactInjection.DOMComponent.injectIDOperations(ReactDOMIDOperations);

	  if ("production" !== process.env.NODE_ENV) {
	    var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
	    if ((/[?&]react_perf\b/).test(url)) {
	      var ReactDefaultPerf = __webpack_require__(150);
	      ReactDefaultPerf.start();
	    }
	  }
	}

	module.exports = {
	  inject: inject
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var EventPropagators = __webpack_require__(93);
	var ExecutionEnvironment = __webpack_require__(51);
	var FallbackCompositionState = __webpack_require__(94);
	var SyntheticCompositionEvent = __webpack_require__(96);
	var SyntheticInputEvent = __webpack_require__(99);

	var keyOf = __webpack_require__(39);

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'CompositionEvent' in window
	);

	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'TextEvent' in window &&
	  !documentMode &&
	  !isPresto()
	);

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = (
	  ExecutionEnvironment.canUseDOM &&
	  (
	    (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11)
	  )
	);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return (
	    typeof opera === 'object' &&
	    typeof opera.version === 'function' &&
	    parseInt(opera.version(), 10) <= 12
	  );
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	var topLevelTypes = EventConstants.topLevelTypes;

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBeforeInput: null}),
	      captured: keyOf({onBeforeInputCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topTextInput,
	      topLevelTypes.topPaste
	    ]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionEnd: null}),
	      captured: keyOf({onCompositionEndCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionStart: null}),
	      captured: keyOf({onCompositionStartCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionStart,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionUpdate: null}),
	      captured: keyOf({onCompositionUpdateCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionUpdate,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (
	    (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	    !(nativeEvent.ctrlKey && nativeEvent.altKey)
	  );
	}


	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return (
	    topLevelType === topLevelTypes.topKeyDown &&
	    nativeEvent.keyCode === START_KEYCODE
	  );
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return (nativeEvent.keyCode !== START_KEYCODE);
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}

	// Track the current IME composition fallback object, if any.
	var currentComposition = null;

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(
	  topLevelType,
	  topLevelTarget,
	  topLevelTargetID,
	  nativeEvent
	) {
	  var eventType;
	  var fallbackData;

	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!currentComposition) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }

	  if (!eventType) {
	    return null;
	  }

	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!currentComposition && eventType === eventTypes.compositionStart) {
	      currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (currentComposition) {
	        fallbackData = currentComposition.getData();
	      }
	    }
	  }

	  var event = SyntheticCompositionEvent.getPooled(
	    eventType,
	    topLevelTargetID,
	    nativeEvent
	  );

	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }

	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionEnd:
	      return getDataFromCustomEvent(nativeEvent);
	    case topLevelTypes.topKeyPress:
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }

	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;

	    case topLevelTypes.topTextInput:
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;

	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }

	      return chars;

	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}

	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  if (currentComposition) {
	    if (
	      topLevelType === topLevelTypes.topCompositionEnd ||
	      isFallbackCompositionEnd(topLevelType, nativeEvent)
	    ) {
	      var chars = currentComposition.getData();
	      FallbackCompositionState.release(currentComposition);
	      currentComposition = null;
	      return chars;
	    }
	    return null;
	  }

	  switch (topLevelType) {
	    case topLevelTypes.topPaste:
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case topLevelTypes.topKeyPress:
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	        return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case topLevelTypes.topCompositionEnd:
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(
	  topLevelType,
	  topLevelTarget,
	  topLevelTargetID,
	  nativeEvent
	) {
	  var chars;

	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }

	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }

	  var event = SyntheticInputEvent.getPooled(
	    eventTypes.beforeInput,
	    topLevelTargetID,
	    nativeEvent
	  );

	  event.data = chars;
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID,
	    nativeEvent
	  ) {
	    return [
	      extractCompositionEvent(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID,
	        nativeEvent
	      ),
	      extractBeforeInputEvent(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID,
	        nativeEvent
	      )
	    ];
	  }
	};

	module.exports = BeforeInputEventPlugin;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var EventPluginHub = __webpack_require__(69);

	var accumulateInto = __webpack_require__(71);
	var forEachAccumulated = __webpack_require__(72);

	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName =
	    event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (!domID) {
	      throw new Error('Dispatching id must not be null');
	    }
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners =
	      accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We can not perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(
	      event.dispatchMarker,
	      accumulateDirectionalDispatches,
	      event
	    );
	  }
	}


	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners =
	        accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(
	    fromID,
	    toID,
	    accumulateDispatches,
	    leave,
	    enter
	  );
	}


	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}



	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

	module.exports = EventPropagators;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FallbackCompositionState
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(9);

	var assign = __webpack_require__(13);
	var getTextContentAccessor = __webpack_require__(95);

	/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this._root = root;
	  this._startText = this.getText();
	  this._fallbackText = null;
	}

	assign(FallbackCompositionState.prototype, {
	  /**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
	  getText: function() {
	    if ('value' in this._root) {
	      return this._root.value;
	    }
	    return this._root[getTextContentAccessor()];
	  },

	  /**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
	  getData: function() {
	    if (this._fallbackText) {
	      return this._fallbackText;
	    }

	    var start;
	    var startValue = this._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = this.getText();
	    var endLength = endValue.length;

	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }

	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }

	    var sliceTail = end > 1 ? 1 - end : undefined;
	    this._fallbackText = endValue.slice(start, sliceTail);
	    return this._fallbackText;
	  }
	});

	PooledClass.addPoolingTo(FallbackCompositionState);

	module.exports = FallbackCompositionState;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(51);

	var contentKey = null;

	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ?
	      'textContent' :
	      'innerText';
	  }
	  return contentKey;
	}

	module.exports = getTextContentAccessor;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(97);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(
	  dispatchConfig,
	  dispatchMarker,
	  nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(
	  SyntheticCompositionEvent,
	  CompositionEventInterface
	);

	module.exports = SyntheticCompositionEvent;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(9);

	var assign = __webpack_require__(13);
	var emptyFunction = __webpack_require__(16);
	var getEventTarget = __webpack_require__(98);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: getEventTarget,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function(event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      this[propName] = nativeEvent[propName];
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ?
	    nativeEvent.defaultPrevented :
	    nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}

	assign(SyntheticEvent.prototype, {

	  preventDefault: function() {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function() {
	    var event = this.nativeEvent;
	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function() {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function() {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }

	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function(Class, Interface) {
	  var Super = this;

	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;

	  PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
	};

	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);

	module.exports = SyntheticEvent;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}

	module.exports = getEventTarget;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(97);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(
	  dispatchConfig,
	  dispatchMarker,
	  nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(
	  SyntheticInputEvent,
	  InputEventInterface
	);

	module.exports = SyntheticInputEvent;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var EventPluginHub = __webpack_require__(69);
	var EventPropagators = __webpack_require__(93);
	var ExecutionEnvironment = __webpack_require__(51);
	var ReactUpdates = __webpack_require__(26);
	var SyntheticEvent = __webpack_require__(97);

	var isEventSupported = __webpack_require__(75);
	var isTextInputElement = __webpack_require__(101);
	var keyOf = __webpack_require__(39);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onChange: null}),
	      captured: keyOf({onChangeCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topChange,
	      topLevelTypes.topClick,
	      topLevelTypes.topFocus,
	      topLevelTypes.topInput,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};

	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  return (
	    elem.nodeName === 'SELECT' ||
	    (elem.nodeName === 'INPUT' && elem.type === 'file')
	  );
	}

	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (
	    (!('documentMode' in document) || document.documentMode > 8)
	  );
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(
	    eventTypes.change,
	    activeElementID,
	    nativeEvent
	  );
	  EventPropagators.accumulateTwoPhaseDispatches(event);

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue();
	}

	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}

	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}

	function getTargetIDForChangeEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}


	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (
	    (!('documentMode' in document) || document.documentMode > 9)
	  );
	}

	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp =  {
	  get: function() {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function(val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};

	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(
	    target.constructor.prototype,
	    'value'
	  );

	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }

	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);

	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}

	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;

	  manualDispatchChangeEvent(nativeEvent);
	}

	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}

	// For IE8 and IE9.
	function handleEventsForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetIDForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange ||
	      topLevelType === topLevelTypes.topKeyUp ||
	      topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}


	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return (
	    elem.nodeName === 'INPUT' &&
	    (elem.type === 'checkbox' || elem.type === 'radio')
	  );
	}

	function getTargetIDForClickEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }

	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(
	          eventTypes.change,
	          targetID,
	          nativeEvent
	        );
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	    }
	  }

	};

	module.exports = ChangeEventPlugin;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */

	'use strict';

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};

	function isTextInputElement(elem) {
	  return elem && (
	    (elem.nodeName === 'INPUT' && supportedInputTypes[elem.type] || elem.nodeName === 'TEXTAREA')
	  );
	}

	module.exports = isTextInputElement;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var nextReactRootIndex = 0;

	var ClientReactRootIndex = {
	  createReactRootIndex: function() {
	    return nextReactRootIndex++;
	  }
	};

	module.exports = ClientReactRootIndex;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */

	'use strict';

	var keyOf = __webpack_require__(39);

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [
	  keyOf({ResponderEventPlugin: null}),
	  keyOf({SimpleEventPlugin: null}),
	  keyOf({TapEventPlugin: null}),
	  keyOf({EnterLeaveEventPlugin: null}),
	  keyOf({ChangeEventPlugin: null}),
	  keyOf({SelectEventPlugin: null}),
	  keyOf({BeforeInputEventPlugin: null}),
	  keyOf({AnalyticsEventPlugin: null}),
	  keyOf({MobileSafariClickEventPlugin: null})
	];

	module.exports = DefaultEventPluginOrder;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var EventPropagators = __webpack_require__(93);
	var SyntheticMouseEvent = __webpack_require__(105);

	var ReactMount = __webpack_require__(67);
	var keyOf = __webpack_require__(39);

	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;

	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({onMouseEnter: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  },
	  mouseLeave: {
	    registrationName: keyOf({onMouseLeave: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  }
	};

	var extractedEvents = [null, null];

	var EnterLeaveEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topMouseOver &&
	        (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut &&
	        topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from, to;
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      to =
	        getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) ||
	        win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var fromID = from ? ReactMount.getID(from) : '';
	    var toID = to ? ReactMount.getID(to) : '';

	    var leave = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseLeave,
	      fromID,
	      nativeEvent
	    );
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;

	    var enter = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseEnter,
	      toID,
	      nativeEvent
	    );
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;

	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;

	    return extractedEvents;
	  }

	};

	module.exports = EnterLeaveEventPlugin;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(106);
	var ViewportMetrics = __webpack_require__(74);

	var getEventModifierState = __webpack_require__(107);

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function(event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function(event) {
	    return event.relatedTarget || (
	      ((event.fromElement === event.srcElement ? event.toElement : event.fromElement))
	    );
	  },
	  // "Proprietary" Interface.
	  pageX: function(event) {
	    return 'pageX' in event ?
	      event.pageX :
	      event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function(event) {
	    return 'pageY' in event ?
	      event.pageY :
	      event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	module.exports = SyntheticMouseEvent;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(97);

	var getEventTarget = __webpack_require__(98);

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function(event) {
	    if (event.view) {
	      return event.view;
	    }

	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }

	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function(event) {
	    return event.detail || 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

	module.exports = SyntheticUIEvent;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  /*jshint validthis:true */
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	module.exports = getEventModifierState;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	'use strict';

	var DOMProperty = __webpack_require__(44);
	var ExecutionEnvironment = __webpack_require__(51);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE =
	  DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE =
	  DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = (
	    implementation &&
	    implementation.hasFeature &&
	    implementation.hasFeature(
	      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
	      '1.1'
	    )
	  );
	}


	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(
	    /^(data|aria)-[a-z_][a-z\d_.\-]*$/
	  ),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusMixin
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    headers: null,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    low: null,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,

	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: null,
	    autoCorrect: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MUST_USE_ATTRIBUTE,
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    itemType: MUST_USE_ATTRIBUTE,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MUST_USE_ATTRIBUTE,
	    itemRef: MUST_USE_ATTRIBUTE,
	    // property is supported for OpenGraph in meta tags.
	    property: null,
	    // IE-only attribute that controls focus behavior
	    unselectable: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoCapitalize: 'autocapitalize',
	    autoComplete: 'autocomplete',
	    autoCorrect: 'autocorrect',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
	    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};

	module.exports = HTMLDOMPropertyConfig;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule MobileSafariClickEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);

	var emptyFunction = __webpack_require__(16);

	var topLevelTypes = EventConstants.topLevelTypes;

	/**
	 * Mobile Safari does not fire properly bubble click events on non-interactive
	 * elements, which means delegated click listeners do not fire. The workaround
	 * for this bug involves attaching an empty click listener on the target node.
	 *
	 * This particular plugin works around the bug by attaching an empty click
	 * listener on `touchstart` (which does fire on every element).
	 */
	var MobileSafariClickEventPlugin = {

	  eventTypes: null,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topTouchStart) {
	      var target = nativeEvent.target;
	      if (target && !target.onclick) {
	        target.onclick = emptyFunction;
	      }
	    }
	  }

	};

	module.exports = MobileSafariClickEventPlugin;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */

	'use strict';

	var findDOMNode = __webpack_require__(111);

	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function() {
	    return findDOMNode(this);
	  }
	};

	module.exports = ReactBrowserComponentMixin;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(17);
	var ReactInstanceMap = __webpack_require__(25);
	var ReactMount = __webpack_require__(67);

	var invariant = __webpack_require__(7);
	var isNode = __webpack_require__(81);
	var warning = __webpack_require__(15);

	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if ("production" !== process.env.NODE_ENV) {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        owner._warnedAboutRefsInRender,
	        '%s is accessing getDOMNode or findDOMNode inside its render(). ' +
	        'render() should be a pure function of props and state. It should ' +
	        'never access something that requires stale data from the previous ' +
	        'render, such as refs. Move this logic to componentDidMount and ' +
	        'componentDidUpdate instead.',
	        owner.getName() || 'A component'
	      ) : null);
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (isNode(componentOrElement)) {
	    return componentOrElement;
	  }
	  if (ReactInstanceMap.has(componentOrElement)) {
	    return ReactMount.getNodeFromInstance(componentOrElement);
	  }
	  ("production" !== process.env.NODE_ENV ? invariant(
	    componentOrElement.render == null ||
	    typeof componentOrElement.render !== 'function',
	    'Component (with keys: %s) contains `render` method ' +
	    'but is not mounted in the DOM',
	    Object.keys(componentOrElement)
	  ) : invariant(componentOrElement.render == null ||
	  typeof componentOrElement.render !== 'function'));
	  ("production" !== process.env.NODE_ENV ? invariant(
	    false,
	    'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',
	    Object.keys(componentOrElement)
	  ) : invariant(false));
	}

	module.exports = findDOMNode;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */

	'use strict';

	var ReactUpdates = __webpack_require__(26);
	var Transaction = __webpack_require__(36);

	var assign = __webpack_require__(13);
	var emptyFunction = __webpack_require__(16);

	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function() {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};

	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};

	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}

	assign(
	  ReactDefaultBatchingStrategyTransaction.prototype,
	  Transaction.Mixin,
	  {
	    getTransactionWrappers: function() {
	      return TRANSACTION_WRAPPERS;
	    }
	  }
	);

	var transaction = new ReactDefaultBatchingStrategyTransaction();

	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,

	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function(callback, a, b, c, d) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b, c, d);
	    } else {
	      transaction.perform(callback, null, a, b, c, d);
	    }
	  }
	};

	module.exports = ReactDefaultBatchingStrategy;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */

	'use strict';

	var AutoFocusMixin = __webpack_require__(114);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);

	var keyMirror = __webpack_require__(6);

	var button = ReactElement.createFactory('button');

	var mouseListenerNames = keyMirror({
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,
	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	});

	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = ReactClass.createClass({
	  displayName: 'ReactDOMButton',
	  tagName: 'BUTTON',

	  mixins: [AutoFocusMixin, ReactBrowserComponentMixin],

	  render: function() {
	    var props = {};

	    // Copy the props; except the mouse listeners if we're disabled
	    for (var key in this.props) {
	      if (this.props.hasOwnProperty(key) &&
	          (!this.props.disabled || !mouseListenerNames[key])) {
	        props[key] = this.props[key];
	      }
	    }

	    return button(props, this.props.children);
	  }

	});

	module.exports = ReactDOMButton;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusMixin
	 * @typechecks static-only
	 */

	'use strict';

	var focusNode = __webpack_require__(115);

	var AutoFocusMixin = {
	  componentDidMount: function() {
	    if (this.props.autoFocus) {
	      focusNode(this.getDOMNode());
	    }
	  }
	};

	module.exports = AutoFocusMixin;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule focusNode
	 */

	"use strict";

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch(e) {
	  }
	}

	module.exports = focusNode;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMForm
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var LocalEventTrapMixin = __webpack_require__(117);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);

	var form = ReactElement.createFactory('form');

	/**
	 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
	 * to capture it on the <form> element itself. There are lots of hacks we could
	 * do to accomplish this, but the most reliable is to make <form> a
	 * composite component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMForm = ReactClass.createClass({
	  displayName: 'ReactDOMForm',
	  tagName: 'FORM',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    // TODO: Instead of using `ReactDOM` directly, we should use JSX. However,
	    // `jshint` fails to parse JSX so in order for linting to work in the open
	    // source repo, we need to just use `ReactDOM.form`.
	    return form(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
	  }
	});

	module.exports = ReactDOMForm;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LocalEventTrapMixin
	 */

	'use strict';

	var ReactBrowserEventEmitter = __webpack_require__(68);

	var accumulateInto = __webpack_require__(71);
	var forEachAccumulated = __webpack_require__(72);
	var invariant = __webpack_require__(7);

	function remove(event) {
	  event.remove();
	}

	var LocalEventTrapMixin = {
	  trapBubbledEvent:function(topLevelType, handlerBaseName) {
	    ("production" !== process.env.NODE_ENV ? invariant(this.isMounted(), 'Must be mounted to trap events') : invariant(this.isMounted()));
	    // If a component renders to null or if another component fatals and causes
	    // the state of the tree to be corrupted, `node` here can be null.
	    var node = this.getDOMNode();
	    ("production" !== process.env.NODE_ENV ? invariant(
	      node,
	      'LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.'
	    ) : invariant(node));
	    var listener = ReactBrowserEventEmitter.trapBubbledEvent(
	      topLevelType,
	      handlerBaseName,
	      node
	    );
	    this._localEventListeners =
	      accumulateInto(this._localEventListeners, listener);
	  },

	  // trapCapturedEvent would look nearly identical. We don't implement that
	  // method because it isn't currently needed.

	  componentWillUnmount:function() {
	    if (this._localEventListeners) {
	      forEachAccumulated(this._localEventListeners, remove);
	    }
	  }
	};

	module.exports = LocalEventTrapMixin;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMImg
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var LocalEventTrapMixin = __webpack_require__(117);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);

	var img = ReactElement.createFactory('img');

	/**
	 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
	 * capture it on the <img> element itself. There are lots of hacks we could do
	 * to accomplish this, but the most reliable is to make <img> a composite
	 * component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMImg = ReactClass.createClass({
	  displayName: 'ReactDOMImg',
	  tagName: 'IMG',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    return img(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
	  }
	});

	module.exports = ReactDOMImg;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIframe
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var LocalEventTrapMixin = __webpack_require__(117);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);

	var iframe = ReactElement.createFactory('iframe');

	/**
	 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
	 * capture it on the <iframe> element itself. There are lots of hacks we could
	 * do to accomplish this, but the most reliable is to make <iframe> a composite
	 * component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMIframe = ReactClass.createClass({
	  displayName: 'ReactDOMIframe',
	  tagName: 'IFRAME',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    return iframe(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
	  }
	});

	module.exports = ReactDOMIframe;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */

	'use strict';

	var AutoFocusMixin = __webpack_require__(114);
	var DOMPropertyOperations = __webpack_require__(43);
	var LinkedValueUtils = __webpack_require__(121);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);
	var ReactMount = __webpack_require__(67);
	var ReactUpdates = __webpack_require__(26);

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);

	var input = ReactElement.createFactory('input');

	var instancesByReactID = {};

	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}

	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = ReactClass.createClass({
	  displayName: 'ReactDOMInput',
	  tagName: 'INPUT',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    return {
	      initialChecked: this.props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null
	    };
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    props.defaultChecked = null;
	    props.defaultValue = null;

	    var value = LinkedValueUtils.getValue(this);
	    props.value = value != null ? value : this.state.initialValue;

	    var checked = LinkedValueUtils.getChecked(this);
	    props.checked = checked != null ? checked : this.state.initialChecked;

	    props.onChange = this._handleChange;

	    return input(props, this.props.children);
	  },

	  componentDidMount: function() {
	    var id = ReactMount.getID(this.getDOMNode());
	    instancesByReactID[id] = this;
	  },

	  componentWillUnmount: function() {
	    var rootNode = this.getDOMNode();
	    var id = ReactMount.getID(rootNode);
	    delete instancesByReactID[id];
	  },

	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var rootNode = this.getDOMNode();
	    if (this.props.checked != null) {
	      DOMPropertyOperations.setValueForProperty(
	        rootNode,
	        'checked',
	        this.props.checked || false
	      );
	    }

	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    // Here we use asap to wait until all updates have propagated, which
	    // is important when using controlled components within layers:
	    // https://github.com/facebook/react/issues/1698
	    ReactUpdates.asap(forceUpdateIfMounted, this);

	    var name = this.props.name;
	    if (this.props.type === 'radio' && name != null) {
	      var rootNode = this.getDOMNode();
	      var queryRoot = rootNode;

	      while (queryRoot.parentNode) {
	        queryRoot = queryRoot.parentNode;
	      }

	      // If `rootNode.form` was non-null, then we could try `form.elements`,
	      // but that sometimes behaves strangely in IE8. We could also try using
	      // `form.getElementsByName`, but that will only return direct children
	      // and won't include inputs that use the HTML5 `form=` attribute. Since
	      // the input might not even be in a form, let's just use the global
	      // `querySelectorAll` to ensure we don't miss anything.
	      var group = queryRoot.querySelectorAll(
	        'input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	      for (var i = 0, groupLen = group.length; i < groupLen; i++) {
	        var otherNode = group[i];
	        if (otherNode === rootNode ||
	            otherNode.form !== rootNode.form) {
	          continue;
	        }
	        var otherID = ReactMount.getID(otherNode);
	        ("production" !== process.env.NODE_ENV ? invariant(
	          otherID,
	          'ReactDOMInput: Mixing React and non-React radio inputs with the ' +
	          'same `name` is not supported.'
	        ) : invariant(otherID));
	        var otherInstance = instancesByReactID[otherID];
	        ("production" !== process.env.NODE_ENV ? invariant(
	          otherInstance,
	          'ReactDOMInput: Unknown radio button ID %s.',
	          otherID
	        ) : invariant(otherInstance));
	        // If this is a controlled radio button group, forcing the input that
	        // was previously checked to update will cause it to be come re-checked
	        // as appropriate.
	        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	      }
	    }

	    return returnValue;
	  }

	});

	module.exports = ReactDOMInput;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactPropTypes = __webpack_require__(122);

	var invariant = __webpack_require__(7);

	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};

	function _assertSingleLink(input) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    input.props.checkedLink == null || input.props.valueLink == null,
	    'Cannot provide a checkedLink and a valueLink. If you want to use ' +
	    'checkedLink, you probably don\'t want to use valueLink and vice versa.'
	  ) : invariant(input.props.checkedLink == null || input.props.valueLink == null));
	}
	function _assertValueLink(input) {
	  _assertSingleLink(input);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    input.props.value == null && input.props.onChange == null,
	    'Cannot provide a valueLink and a value or onChange event. If you want ' +
	    'to use value or onChange, you probably don\'t want to use valueLink.'
	  ) : invariant(input.props.value == null && input.props.onChange == null));
	}

	function _assertCheckedLink(input) {
	  _assertSingleLink(input);
	  ("production" !== process.env.NODE_ENV ? invariant(
	    input.props.checked == null && input.props.onChange == null,
	    'Cannot provide a checkedLink and a checked property or onChange event. ' +
	    'If you want to use checked or onChange, you probably don\'t want to ' +
	    'use checkedLink'
	  ) : invariant(input.props.checked == null && input.props.onChange == null));
	}

	/**
	 * @param {SyntheticEvent} e change event to handle
	 */
	function _handleLinkedValueChange(e) {
	  /*jshint validthis:true */
	  this.props.valueLink.requestChange(e.target.value);
	}

	/**
	  * @param {SyntheticEvent} e change event to handle
	  */
	function _handleLinkedCheckChange(e) {
	  /*jshint validthis:true */
	  this.props.checkedLink.requestChange(e.target.checked);
	}

	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  Mixin: {
	    propTypes: {
	      value: function(props, propName, componentName) {
	        if (!props[propName] ||
	            hasReadOnlyValue[props.type] ||
	            props.onChange ||
	            props.readOnly ||
	            props.disabled) {
	          return null;
	        }
	        return new Error(
	          'You provided a `value` prop to a form field without an ' +
	          '`onChange` handler. This will render a read-only field. If ' +
	          'the field should be mutable use `defaultValue`. Otherwise, ' +
	          'set either `onChange` or `readOnly`.'
	        );
	      },
	      checked: function(props, propName, componentName) {
	        if (!props[propName] ||
	            props.onChange ||
	            props.readOnly ||
	            props.disabled) {
	          return null;
	        }
	        return new Error(
	          'You provided a `checked` prop to a form field without an ' +
	          '`onChange` handler. This will render a read-only field. If ' +
	          'the field should be mutable use `defaultChecked`. Otherwise, ' +
	          'set either `onChange` or `readOnly`.'
	        );
	      },
	      onChange: ReactPropTypes.func
	    }
	  },

	  /**
	   * @param {ReactComponent} input Form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function(input) {
	    if (input.props.valueLink) {
	      _assertValueLink(input);
	      return input.props.valueLink.value;
	    }
	    return input.props.value;
	  },

	  /**
	   * @param {ReactComponent} input Form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function(input) {
	    if (input.props.checkedLink) {
	      _assertCheckedLink(input);
	      return input.props.checkedLink.value;
	    }
	    return input.props.checked;
	  },

	  /**
	   * @param {ReactComponent} input Form component
	   * @return {function} change callback either from onChange prop or link.
	   */
	  getOnChange: function(input) {
	    if (input.props.valueLink) {
	      _assertValueLink(input);
	      return _handleLinkedValueChange;
	    } else if (input.props.checkedLink) {
	      _assertCheckedLink(input);
	      return _handleLinkedCheckChange;
	    }
	    return input.props.onChange;
	  }
	};

	module.exports = LinkedValueUtils;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(11);
	var ReactFragment = __webpack_require__(10);
	var ReactPropTypeLocationNames = __webpack_require__(34);

	var emptyFunction = __webpack_require__(16);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var elementTypeChecker = createElementTypeChecker();
	var nodeTypeChecker = createNodeChecker();

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: elementTypeChecker,
	  instanceOf: createInstanceTypeChecker,
	  node: nodeTypeChecker,
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error(
	          ("Required " + locationName + " `" + propName + "` was not specified in ") +
	          ("`" + componentName + "`.")
	        );
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") +
	        ("supplied to `" + componentName + "`, expected `" + expectedType + "`.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an array.")
	      );
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactElement.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected instance of `" + expectedClassName + "`.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") +
	      ("supplied to `" + componentName + "`, expected one of " + valuesString + ".")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an object.")
	      );
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  function validate(props, propName, componentName, location) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	      ("`" + componentName + "`.")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactNode.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") +
	        ("supplied to `" + componentName + "`, expected `object`.")
	      );
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	      propValue = ReactFragment.extractIfFragment(propValue);
	      for (var k in propValue) {
	        if (!isNode(propValue[k])) {
	          return false;
	        }
	      }
	      return true;
	    default:
	      return false;
	  }
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	module.exports = ReactPropTypes;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */

	'use strict';

	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);

	var warning = __webpack_require__(15);

	var option = ReactElement.createFactory('option');

	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = ReactClass.createClass({
	  displayName: 'ReactDOMOption',
	  tagName: 'OPTION',

	  mixins: [ReactBrowserComponentMixin],

	  componentWillMount: function() {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if ("production" !== process.env.NODE_ENV) {
	      ("production" !== process.env.NODE_ENV ? warning(
	        this.props.selected == null,
	        'Use the `defaultValue` or `value` props on <select> instead of ' +
	        'setting `selected` on <option>.'
	      ) : null);
	    }
	  },

	  render: function() {
	    return option(this.props, this.props.children);
	  }

	});

	module.exports = ReactDOMOption;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */

	'use strict';

	var AutoFocusMixin = __webpack_require__(114);
	var LinkedValueUtils = __webpack_require__(121);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);
	var ReactUpdates = __webpack_require__(26);

	var assign = __webpack_require__(13);

	var select = ReactElement.createFactory('select');

	function updateOptionsIfPendingUpdateAndMounted() {
	  /*jshint validthis:true */
	  if (this._pendingUpdate) {
	    this._pendingUpdate = false;
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null && this.isMounted()) {
	      updateOptions(this, value);
	    }
	  }
	}

	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function selectValueType(props, propName, componentName) {
	  if (props[propName] == null) {
	    return null;
	  }
	  if (props.multiple) {
	    if (!Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be an array if ") +
	        ("`multiple` is true.")
	      );
	    }
	  } else {
	    if (Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be a scalar ") +
	        ("value if `multiple` is false.")
	      );
	    }
	  }
	}

	/**
	 * @param {ReactComponent} component Instance of ReactDOMSelect
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
	function updateOptions(component, propValue) {
	  var selectedValue, i, l;
	  var options = component.getDOMNode().options;

	  if (component.props.multiple) {
	    selectedValue = {};
	    for (i = 0, l = propValue.length; i < l; i++) {
	      selectedValue['' + propValue[i]] = true;
	    }
	    for (i = 0, l = options.length; i < l; i++) {
	      var selected = selectedValue.hasOwnProperty(options[i].value);
	      if (options[i].selected !== selected) {
	        options[i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    selectedValue = '' + propValue;
	    for (i = 0, l = options.length; i < l; i++) {
	      if (options[i].value === selectedValue) {
	        options[i].selected = true;
	        return;
	      }
	    }
	    if (options.length) {
	      options[0].selected = true;
	    }
	  }
	}

	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = ReactClass.createClass({
	  displayName: 'ReactDOMSelect',
	  tagName: 'SELECT',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  propTypes: {
	    defaultValue: selectValueType,
	    value: selectValueType
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    props.onChange = this._handleChange;
	    props.value = null;

	    return select(props, this.props.children);
	  },

	  componentWillMount: function() {
	    this._pendingUpdate = false;
	  },

	  componentDidMount: function() {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      updateOptions(this, value);
	    } else if (this.props.defaultValue != null) {
	      updateOptions(this, this.props.defaultValue);
	    }
	  },

	  componentDidUpdate: function(prevProps) {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      this._pendingUpdate = false;
	      updateOptions(this, value);
	    } else if (!prevProps.multiple !== !this.props.multiple) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (this.props.defaultValue != null) {
	        updateOptions(this, this.props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(this, this.props.multiple ? [] : '');
	      }
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }

	    this._pendingUpdate = true;
	    ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
	    return returnValue;
	  }

	});

	module.exports = ReactDOMSelect;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */

	'use strict';

	var AutoFocusMixin = __webpack_require__(114);
	var DOMPropertyOperations = __webpack_require__(43);
	var LinkedValueUtils = __webpack_require__(121);
	var ReactBrowserComponentMixin = __webpack_require__(110);
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);
	var ReactUpdates = __webpack_require__(26);

	var assign = __webpack_require__(13);
	var invariant = __webpack_require__(7);

	var warning = __webpack_require__(15);

	var textarea = ReactElement.createFactory('textarea');

	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}

	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = ReactClass.createClass({
	  displayName: 'ReactDOMTextarea',
	  tagName: 'TEXTAREA',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = this.props.children;
	    if (children != null) {
	      if ("production" !== process.env.NODE_ENV) {
	        ("production" !== process.env.NODE_ENV ? warning(
	          false,
	          'Use the `defaultValue` or `value` props instead of setting ' +
	          'children on <textarea>.'
	        ) : null);
	      }
	      ("production" !== process.env.NODE_ENV ? invariant(
	        defaultValue == null,
	        'If you supply `defaultValue` on a <textarea>, do not pass children.'
	      ) : invariant(defaultValue == null));
	      if (Array.isArray(children)) {
	        ("production" !== process.env.NODE_ENV ? invariant(
	          children.length <= 1,
	          '<textarea> can only have at most one child.'
	        ) : invariant(children.length <= 1));
	        children = children[0];
	      }

	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(this);
	    return {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue)
	    };
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    ("production" !== process.env.NODE_ENV ? invariant(
	      props.dangerouslySetInnerHTML == null,
	      '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
	    ) : invariant(props.dangerouslySetInnerHTML == null));

	    props.defaultValue = null;
	    props.value = null;
	    props.onChange = this._handleChange;

	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    return textarea(props, this.state.initialValue);
	  },

	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      var rootNode = this.getDOMNode();
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    ReactUpdates.asap(forceUpdateIfMounted, this);
	    return returnValue;
	  }

	});

	module.exports = ReactDOMTextarea;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */

	'use strict';

	var EventListener = __webpack_require__(127);
	var ExecutionEnvironment = __webpack_require__(51);
	var PooledClass = __webpack_require__(9);
	var ReactInstanceHandles = __webpack_require__(19);
	var ReactMount = __webpack_require__(67);
	var ReactUpdates = __webpack_require__(26);

	var assign = __webpack_require__(13);
	var getEventTarget = __webpack_require__(98);
	var getUnboundedScrollPosition = __webpack_require__(128);

	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}

	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function() {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(
	  TopLevelCallbackBookKeeping,
	  PooledClass.twoArgumentPooler
	);

	function handleTopLevelImpl(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(
	    getEventTarget(bookKeeping.nativeEvent)
	  ) || window;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }

	  for (var i = 0, l = bookKeeping.ancestors.length; i < l; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(
	      bookKeeping.topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      bookKeeping.nativeEvent
	    );
	  }
	}

	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}

	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,

	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

	  setHandleTopLevel: function(handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },

	  setEnabled: function(enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },

	  isEnabled: function() {
	    return ReactEventListener._enabled;
	  },


	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },

	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },

	  monitorScrollValue: function(refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	  },

	  dispatchEvent: function(topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }

	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(
	      topLevelType,
	      nativeEvent
	    );
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};

	module.exports = ReactEventListener;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */

	var emptyFunction = __webpack_require__(16);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function(target, eventType, callback) {
	    if (!target.addEventListener) {
	      if ("production" !== process.env.NODE_ENV) {
	        console.error(
	          'Attempted to listen to events during the capture phase on a ' +
	          'browser that does not support the capture phase. Your application ' +
	          'will not receive some events.'
	        );
	      }
	      return {
	        remove: emptyFunction
	      };
	    } else {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    }
	  },

	  registerDefault: function() {}
	};

	module.exports = EventListener;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 128 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUnboundedScrollPosition
	 * @typechecks
	 */

	"use strict";

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */

	'use strict';

	var DOMProperty = __webpack_require__(44);
	var EventPluginHub = __webpack_require__(69);
	var ReactComponentEnvironment = __webpack_require__(85);
	var ReactClass = __webpack_require__(37);
	var ReactEmptyComponent = __webpack_require__(76);
	var ReactBrowserEventEmitter = __webpack_require__(68);
	var ReactNativeComponent = __webpack_require__(35);
	var ReactDOMComponent = __webpack_require__(87);
	var ReactPerf = __webpack_require__(28);
	var ReactRootIndex = __webpack_require__(20);
	var ReactUpdates = __webpack_require__(26);

	var ReactInjection = {
	  Component: ReactComponentEnvironment.injection,
	  Class: ReactClass.injection,
	  DOMComponent: ReactDOMComponent.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};

	module.exports = ReactInjection;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 * @typechecks static-only
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(27);
	var PooledClass = __webpack_require__(9);
	var ReactBrowserEventEmitter = __webpack_require__(68);
	var ReactInputSelection = __webpack_require__(131);
	var ReactPutListenerQueue = __webpack_require__(135);
	var Transaction = __webpack_require__(36);

	var assign = __webpack_require__(13);

	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};

	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function() {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },

	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occured. `close`
	   *   restores the previous value.
	   */
	  close: function(previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};

	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function() {
	    this.reactMountReady.reset();
	  },

	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function() {
	    this.reactMountReady.notifyAll();
	  }
	};

	var PUT_LISTENER_QUEUEING = {
	  initialize: function() {
	    this.putListenerQueue.reset();
	  },

	  close: function() {
	    this.putListenerQueue.putListeners();
	  }
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [
	  PUT_LISTENER_QUEUEING,
	  SELECTION_RESTORATION,
	  EVENT_SUPPRESSION,
	  ON_DOM_READY_QUEUEING
	];

	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction() {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.putListenerQueue = ReactPutListenerQueue.getPooled();
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap proceedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function() {
	    return this.reactMountReady;
	  },

	  getPutListenerQueue: function() {
	    return this.putListenerQueue;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be resused.
	   */
	  destructor: function() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;

	    ReactPutListenerQueue.release(this.putListenerQueue);
	    this.putListenerQueue = null;
	  }
	};


	assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactReconcileTransaction);

	module.exports = ReactReconcileTransaction;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */

	'use strict';

	var ReactDOMSelection = __webpack_require__(132);

	var containsNode = __webpack_require__(79);
	var focusNode = __webpack_require__(115);
	var getActiveElement = __webpack_require__(134);

	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {

	  hasSelectionCapabilities: function(elem) {
	    return elem && (
	      ((elem.nodeName === 'INPUT' && elem.type === 'text') ||
	      elem.nodeName === 'TEXTAREA' || elem.contentEditable === 'true')
	    );
	  },

	  getSelectionInformation: function() {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange:
	          ReactInputSelection.hasSelectionCapabilities(focusedElem) ?
	          ReactInputSelection.getSelection(focusedElem) :
	          null
	    };
	  },

	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function(priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem &&
	        isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(
	          priorFocusedElem,
	          priorSelectionRange
	        );
	      }
	      focusNode(priorFocusedElem);
	    }
	  },

	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function(input) {
	    var selection;

	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && input.nodeName === 'INPUT') {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }

	    return selection || {start: 0, end: 0};
	  },

	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function(input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (typeof end === 'undefined') {
	      end = start;
	    }

	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && input.nodeName === 'INPUT') {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};

	module.exports = ReactInputSelection;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(51);

	var getNodeForCharacterOffset = __webpack_require__(133);
	var getTextContentAccessor = __webpack_require__(95);

	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}

	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;

	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);

	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;

	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}

	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;

	  var currentRange = selection.getRangeAt(0);

	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(
	    selection.anchorNode,
	    selection.anchorOffset,
	    selection.focusNode,
	    selection.focusOffset
	  );

	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

	  var isTempRangeCollapsed = isCollapsed(
	    tempRange.startContainer,
	    tempRange.startOffset,
	    tempRange.endContainer,
	    tempRange.endOffset
	  );

	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;

	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;

	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}

	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;

	  if (typeof offsets.end === 'undefined') {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }

	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = typeof offsets.end === 'undefined' ?
	            start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);

	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	var useIEOffsets = (
	  ExecutionEnvironment.canUseDOM &&
	  'selection' in document &&
	  !('getSelection' in window)
	);

	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};

	module.exports = ReactDOMSelection;


/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */

	'use strict';

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	module.exports = getNodeForCharacterOffset;


/***/ },
/* 134 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document body is not yet defined.
	 */
	function getActiveElement() /*?DOMElement*/ {
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPutListenerQueue
	 */

	'use strict';

	var PooledClass = __webpack_require__(9);
	var ReactBrowserEventEmitter = __webpack_require__(68);

	var assign = __webpack_require__(13);

	function ReactPutListenerQueue() {
	  this.listenersToPut = [];
	}

	assign(ReactPutListenerQueue.prototype, {
	  enqueuePutListener: function(rootNodeID, propKey, propValue) {
	    this.listenersToPut.push({
	      rootNodeID: rootNodeID,
	      propKey: propKey,
	      propValue: propValue
	    });
	  },

	  putListeners: function() {
	    for (var i = 0; i < this.listenersToPut.length; i++) {
	      var listenerToPut = this.listenersToPut[i];
	      ReactBrowserEventEmitter.putListener(
	        listenerToPut.rootNodeID,
	        listenerToPut.propKey,
	        listenerToPut.propValue
	      );
	    }
	  },

	  reset: function() {
	    this.listenersToPut.length = 0;
	  },

	  destructor: function() {
	    this.reset();
	  }
	});

	PooledClass.addPoolingTo(ReactPutListenerQueue);

	module.exports = ReactPutListenerQueue;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var EventPropagators = __webpack_require__(93);
	var ReactInputSelection = __webpack_require__(131);
	var SyntheticEvent = __webpack_require__(97);

	var getActiveElement = __webpack_require__(134);
	var isTextInputElement = __webpack_require__(101);
	var keyOf = __webpack_require__(39);
	var shallowEqual = __webpack_require__(137);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSelect: null}),
	      captured: keyOf({onSelectCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topContextMenu,
	      topLevelTypes.topFocus,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topMouseDown,
	      topLevelTypes.topMouseUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};

	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @param {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node &&
	      ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown ||
	      activeElement == null ||
	      activeElement !== getActiveElement()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent.getPooled(
	      eventTypes.select,
	      activeElementID,
	      nativeEvent
	    );

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;

	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) ||
	            topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;

	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent);

	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't).
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      case topLevelTypes.topSelectionChange:
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent);
	    }
	  }
	};

	module.exports = SelectEventPlugin;


/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */

	'use strict';

	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = shallowEqual;


/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */

	'use strict';

	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */
	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

	var ServerReactRootIndex = {
	  createReactRootIndex: function() {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};

	module.exports = ServerReactRootIndex;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(5);
	var EventPluginUtils = __webpack_require__(4);
	var EventPropagators = __webpack_require__(93);
	var SyntheticClipboardEvent = __webpack_require__(140);
	var SyntheticEvent = __webpack_require__(97);
	var SyntheticFocusEvent = __webpack_require__(141);
	var SyntheticKeyboardEvent = __webpack_require__(142);
	var SyntheticMouseEvent = __webpack_require__(105);
	var SyntheticDragEvent = __webpack_require__(145);
	var SyntheticTouchEvent = __webpack_require__(146);
	var SyntheticUIEvent = __webpack_require__(106);
	var SyntheticWheelEvent = __webpack_require__(147);

	var getEventCharCode = __webpack_require__(143);

	var invariant = __webpack_require__(7);
	var keyOf = __webpack_require__(39);
	var warning = __webpack_require__(15);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBlur: true}),
	      captured: keyOf({onBlurCapture: true})
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onClick: true}),
	      captured: keyOf({onClickCapture: true})
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onContextMenu: true}),
	      captured: keyOf({onContextMenuCapture: true})
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCopy: true}),
	      captured: keyOf({onCopyCapture: true})
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCut: true}),
	      captured: keyOf({onCutCapture: true})
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDoubleClick: true}),
	      captured: keyOf({onDoubleClickCapture: true})
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrag: true}),
	      captured: keyOf({onDragCapture: true})
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnd: true}),
	      captured: keyOf({onDragEndCapture: true})
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnter: true}),
	      captured: keyOf({onDragEnterCapture: true})
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragExit: true}),
	      captured: keyOf({onDragExitCapture: true})
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragLeave: true}),
	      captured: keyOf({onDragLeaveCapture: true})
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragOver: true}),
	      captured: keyOf({onDragOverCapture: true})
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragStart: true}),
	      captured: keyOf({onDragStartCapture: true})
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrop: true}),
	      captured: keyOf({onDropCapture: true})
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onFocus: true}),
	      captured: keyOf({onFocusCapture: true})
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onInput: true}),
	      captured: keyOf({onInputCapture: true})
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyDown: true}),
	      captured: keyOf({onKeyDownCapture: true})
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyPress: true}),
	      captured: keyOf({onKeyPressCapture: true})
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyUp: true}),
	      captured: keyOf({onKeyUpCapture: true})
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onLoad: true}),
	      captured: keyOf({onLoadCapture: true})
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onError: true}),
	      captured: keyOf({onErrorCapture: true})
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseDown: true}),
	      captured: keyOf({onMouseDownCapture: true})
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseMove: true}),
	      captured: keyOf({onMouseMoveCapture: true})
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOut: true}),
	      captured: keyOf({onMouseOutCapture: true})
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOver: true}),
	      captured: keyOf({onMouseOverCapture: true})
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseUp: true}),
	      captured: keyOf({onMouseUpCapture: true})
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onPaste: true}),
	      captured: keyOf({onPasteCapture: true})
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onReset: true}),
	      captured: keyOf({onResetCapture: true})
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onScroll: true}),
	      captured: keyOf({onScrollCapture: true})
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSubmit: true}),
	      captured: keyOf({onSubmitCapture: true})
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchCancel: true}),
	      captured: keyOf({onTouchCancelCapture: true})
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchEnd: true}),
	      captured: keyOf({onTouchEndCapture: true})
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchMove: true}),
	      captured: keyOf({onTouchMoveCapture: true})
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchStart: true}),
	      captured: keyOf({onTouchStartCapture: true})
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onWheel: true}),
	      captured: keyOf({onWheelCapture: true})
	    }
	  }
	};

	var topLevelEventsToDispatchConfig = {
	  topBlur:        eventTypes.blur,
	  topClick:       eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy:        eventTypes.copy,
	  topCut:         eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag:        eventTypes.drag,
	  topDragEnd:     eventTypes.dragEnd,
	  topDragEnter:   eventTypes.dragEnter,
	  topDragExit:    eventTypes.dragExit,
	  topDragLeave:   eventTypes.dragLeave,
	  topDragOver:    eventTypes.dragOver,
	  topDragStart:   eventTypes.dragStart,
	  topDrop:        eventTypes.drop,
	  topError:       eventTypes.error,
	  topFocus:       eventTypes.focus,
	  topInput:       eventTypes.input,
	  topKeyDown:     eventTypes.keyDown,
	  topKeyPress:    eventTypes.keyPress,
	  topKeyUp:       eventTypes.keyUp,
	  topLoad:        eventTypes.load,
	  topMouseDown:   eventTypes.mouseDown,
	  topMouseMove:   eventTypes.mouseMove,
	  topMouseOut:    eventTypes.mouseOut,
	  topMouseOver:   eventTypes.mouseOver,
	  topMouseUp:     eventTypes.mouseUp,
	  topPaste:       eventTypes.paste,
	  topReset:       eventTypes.reset,
	  topScroll:      eventTypes.scroll,
	  topSubmit:      eventTypes.submit,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd:    eventTypes.touchEnd,
	  topTouchMove:   eventTypes.touchMove,
	  topTouchStart:  eventTypes.touchStart,
	  topWheel:       eventTypes.wheel
	};

	for (var type in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[type].dependencies = [type];
	}

	var SimpleEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * Same as the default implementation, except cancels the event when return
	   * value is false. This behavior will be disabled in a future release.
	   *
	   * @param {object} Event to be dispatched.
	   * @param {function} Application-level callback.
	   * @param {string} domID DOM ID to pass to the callback.
	   */
	  executeDispatch: function(event, listener, domID) {
	    var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);

	    ("production" !== process.env.NODE_ENV ? warning(
	      typeof returnValue !== 'boolean',
	      'Returning `false` from an event handler is deprecated and will be ' +
	      'ignored in a future release. Instead, manually call ' +
	      'e.stopPropagation() or e.preventDefault(), as appropriate.'
	    ) : null);

	    if (returnValue === false) {
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  },

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topError:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSubmit:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    ("production" !== process.env.NODE_ENV ? invariant(
	      EventConstructor,
	      'SimpleEventPlugin: Unhandled event type, `%s`.',
	      topLevelType
	    ) : invariant(EventConstructor));
	    var event = EventConstructor.getPooled(
	      dispatchConfig,
	      topLevelTargetID,
	      nativeEvent
	    );
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }

	};

	module.exports = SimpleEventPlugin;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(97);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function(event) {
	    return (
	      'clipboardData' in event ?
	        event.clipboardData :
	        window.clipboardData
	    );
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	module.exports = SyntheticClipboardEvent;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(106);

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	module.exports = SyntheticFocusEvent;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(106);

	var getEventCharCode = __webpack_require__(143);
	var getEventKey = __webpack_require__(144);
	var getEventModifierState = __webpack_require__(107);

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function(event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.

	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function(event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.

	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function(event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	module.exports = SyntheticKeyboardEvent;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `charCode` property.
	 */
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	module.exports = getEventCharCode;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 * @typechecks static-only
	 */

	'use strict';

	var getEventCharCode = __webpack_require__(143);

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	module.exports = getEventKey;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(105);

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

	module.exports = SyntheticDragEvent;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(106);

	var getEventModifierState = __webpack_require__(107);

	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	module.exports = SyntheticTouchEvent;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(105);

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function(event) {
	    return (
	      'deltaX' in event ? event.deltaX :
	      // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	      'wheelDeltaX' in event ? -event.wheelDeltaX : 0
	    );
	  },
	  deltaY: function(event) {
	    return (
	      'deltaY' in event ? event.deltaY :
	      // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	      'wheelDeltaY' in event ? -event.wheelDeltaY :
	      // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	      'wheelDelta' in event ? -event.wheelDelta : 0
	    );
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	module.exports = SyntheticWheelEvent;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	'use strict';

	var DOMProperty = __webpack_require__(44);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

	var SVGDOMPropertyConfig = {
	  Properties: {
	    clipPath: MUST_USE_ATTRIBUTE,
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    clipPath: 'clip-path',
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox'
	  }
	};

	module.exports = SVGDOMPropertyConfig;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createFullPageComponent
	 * @typechecks
	 */

	'use strict';

	// Defeat circular references by requiring this directly.
	var ReactClass = __webpack_require__(37);
	var ReactElement = __webpack_require__(11);

	var invariant = __webpack_require__(7);

	/**
	 * Create a component that will throw an exception when unmounted.
	 *
	 * Components like <html> <head> and <body> can't be removed or added
	 * easily in a cross-browser way, however it's valuable to be able to
	 * take advantage of React's reconciliation for styling and <title>
	 * management. So we just document it and throw in dangerous cases.
	 *
	 * @param {string} tag The tag to wrap
	 * @return {function} convenience constructor of new component
	 */
	function createFullPageComponent(tag) {
	  var elementFactory = ReactElement.createFactory(tag);

	  var FullPageComponent = ReactClass.createClass({
	    tagName: tag.toUpperCase(),
	    displayName: 'ReactFullPageComponent' + tag,

	    componentWillUnmount: function() {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        false,
	        '%s tried to unmount. Because of cross-browser quirks it is ' +
	        'impossible to unmount some top-level components (eg <html>, <head>, ' +
	        'and <body>) reliably and efficiently. To fix this, have a single ' +
	        'top-level component that never unmounts render these elements.',
	        this.constructor.displayName
	      ) : invariant(false));
	    },

	    render: function() {
	      return elementFactory(this.props);
	    }
	  });

	  return FullPageComponent;
	}

	module.exports = createFullPageComponent;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(44);
	var ReactDefaultPerfAnalysis = __webpack_require__(151);
	var ReactMount = __webpack_require__(67);
	var ReactPerf = __webpack_require__(28);

	var performanceNow = __webpack_require__(152);

	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}

	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}

	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,

	  start: function() {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }

	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },

	  stop: function() {
	    ReactPerf.enableMeasure = false;
	  },

	  getLastMeasurements: function() {
	    return ReactDefaultPerf._allMeasurements;
	  },

	  printExclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },

	  printInclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  getMeasurementsSummaryMap: function(measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(
	      measurements,
	      true
	    );
	    return summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },

	  printWasted: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  printDOM: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function(item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result['type'] = item.type;
	      result['args'] = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  _recordWrite: function(id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes =
	      ReactDefaultPerf
	        ._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1]
	        .writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },

	  measure: function(moduleName, fnName, func) {
	    return function() {for (var args=[],$__0=0,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	      var totalTime;
	      var rv;
	      var start;

	      if (fnName === '_renderNewRootComponent' ||
	          fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ].totalTime = performanceNow() - start;
	        return rv;
	      } else if (fnName === '_mountImageIntoNode' ||
	          moduleName === 'ReactDOMIDOperations') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (fnName === '_mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function(update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(
	              update.parentID,
	              update.type,
	              totalTime,
	              writeArgs
	            );
	          });
	        } else {
	          // basic format
	          ReactDefaultPerf._recordWrite(
	            args[0],
	            fnName,
	            totalTime,
	            Array.prototype.slice.call(args, 1)
	          );
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (
	        (// TODO: receiveComponent()?
	        (fnName === 'mountComponent' ||
	        fnName === 'updateComponent' || fnName === '_renderValidatedComponent')))) {

	        if (typeof this._currentElement.type === 'string') {
	          return func.apply(this, args);
	        }

	        var rootNodeID = fnName === 'mountComponent' ?
	          args[0] :
	          this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';

	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ];

	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          mountStack.push(0);
	        }

	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }

	        entry.displayNames[rootNodeID] = {
	          current: this.getName(),
	          owner: this._currentElement._owner ?
	            this._currentElement._owner.getName() :
	            '<root>'
	        };

	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};

	module.exports = ReactDefaultPerf;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */

	var assign = __webpack_require__(13);

	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  '_mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  TEXT_CONTENT: 'set textContent',
	  'updatePropertyByID': 'update attribute',
	  'deletePropertyByID': 'delete attribute',
	  'updateStylesByID': 'update styles',
	  'updateInnerHTMLByID': 'set innerHTML',
	  'dangerouslyReplaceNodeWithMarkupByID': 'replace'
	};

	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}

	function getDOMSummary(measurements) {
	  var items = [];
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var id;

	    for (id in measurement.writes) {
	      measurement.writes[id].forEach(function(write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    }
	  }
	  return items;
	}

	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );

	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;

	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }

	  arr.sort(function(a, b) {
	    return b.exclusive - a.exclusive;
	  });

	  return arr;
	}

	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );
	    var cleanComponents;

	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }

	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }

	      var displayName = measurement.displayNames[id];

	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;

	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };

	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }

	  arr.sort(function(a, b) {
	    return b.time - a.time;
	  });

	  return arr;
	}

	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}

	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};

	module.exports = ReactDefaultPerfAnalysis;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */

	var performance = __webpack_require__(153);

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (!performance || !performance.now) {
	  performance = Date;
	}

	var performanceNow = performance.now.bind(performance);

	module.exports = performanceNow;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */

	"use strict";

	var ExecutionEnvironment = __webpack_require__(51);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance =
	    window.performance ||
	    window.msPerformance ||
	    window.webkitPerformance;
	}

	module.exports = performance || {};


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	'use strict';

	var ReactElement = __webpack_require__(11);
	var ReactInstanceHandles = __webpack_require__(19);
	var ReactMarkupChecksum = __webpack_require__(77);
	var ReactServerRenderingTransaction =
	  __webpack_require__(155);

	var emptyObject = __webpack_require__(14);
	var instantiateReactComponent = __webpack_require__(83);
	var invariant = __webpack_require__(7);

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToString(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));

	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);

	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup =
	        componentInstance.mountComponent(id, transaction, emptyObject);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToStaticMarkup(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));

	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);

	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, emptyObject);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */

	'use strict';

	var PooledClass = __webpack_require__(9);
	var CallbackQueue = __webpack_require__(27);
	var ReactPutListenerQueue = __webpack_require__(135);
	var Transaction = __webpack_require__(36);

	var assign = __webpack_require__(13);
	var emptyFunction = __webpack_require__(16);

	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function() {
	    this.reactMountReady.reset();
	  },

	  close: emptyFunction
	};

	var PUT_LISTENER_QUEUEING = {
	  initialize: function() {
	    this.putListenerQueue.reset();
	  },

	  close: emptyFunction
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [
	  PUT_LISTENER_QUEUEING,
	  ON_DOM_READY_QUEUEING
	];

	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.putListenerQueue = ReactPutListenerQueue.getPooled();
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap proceedures.
	   */
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function() {
	    return this.reactMountReady;
	  },

	  getPutListenerQueue: function() {
	    return this.putListenerQueue;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be resused.
	   */
	  destructor: function() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;

	    ReactPutListenerQueue.release(this.putListenerQueue);
	    this.putListenerQueue = null;
	  }
	};


	assign(
	  ReactServerRenderingTransaction.prototype,
	  Transaction.Mixin,
	  Mixin
	);

	PooledClass.addPoolingTo(ReactServerRenderingTransaction);

	module.exports = ReactServerRenderingTransaction;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var ReactElement = __webpack_require__(11);

	var invariant = __webpack_require__(7);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    ReactElement.isValidElement(children),
	    'onlyChild must be passed a children with exactly one child.'
	  ) : invariant(ReactElement.isValidElement(children)));
	  return children;
	}

	module.exports = onlyChild;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validators = __webpack_require__(158)

	var locales = __webpack_require__(169)
	var util = __webpack_require__(171)

	module.exports = {
	  addLocale: locales.addLocale
	, allValid: util.allValid
	, BaseTemporalField: __webpack_require__(173)
	, BooleanField: __webpack_require__(181)
	, BoundField: __webpack_require__(183)
	, CharField: __webpack_require__(185)
	, CheckboxChoiceInput: __webpack_require__(188)
	, CheckboxFieldRenderer: __webpack_require__(190)
	, CheckboxInput: __webpack_require__(182)
	, CheckboxSelectMultiple: __webpack_require__(192)
	, ChoiceField: __webpack_require__(196)
	, ChoiceFieldRenderer: __webpack_require__(191)
	, ChoiceInput: __webpack_require__(189)
	, ClearableFileInput: __webpack_require__(197)
	, ComboField: __webpack_require__(199)
	, DateField: __webpack_require__(200)
	, DateInput: __webpack_require__(201)
	, DateTimeBaseInput: __webpack_require__(202)
	, DateTimeField: __webpack_require__(203)
	, DateTimeInput: __webpack_require__(204)
	, DecimalField: __webpack_require__(205)
	, EmailField: __webpack_require__(208)
	, EmailInput: __webpack_require__(209)
	, env: __webpack_require__(187)
	, ErrorList: __webpack_require__(210)
	, ErrorObject: __webpack_require__(211)
	, Field: __webpack_require__(175)
	, FileField: __webpack_require__(212)
	, FileInput: __webpack_require__(198)
	, FilePathField: __webpack_require__(213)
	, FloatField: __webpack_require__(214)
	, Form: __webpack_require__(215)
	, formats: __webpack_require__(174)
	, FormRow: __webpack_require__(220)
	, FormSet: __webpack_require__(222)
	, GenericIPAddressField: __webpack_require__(224)
	, getFormData: util.getFormData
	, HiddenInput: __webpack_require__(176)
	, ImageField: __webpack_require__(225)
	, Input: __webpack_require__(177)
	, IntegerField: __webpack_require__(206)
	, IPAddressField: __webpack_require__(226)
	, isFormAsync: __webpack_require__(223)
	, locales: locales
	, MultipleChoiceField: __webpack_require__(227)
	, MultipleFileField: __webpack_require__(219)
	, MultipleHiddenInput: __webpack_require__(228)
	, MultiValueField: __webpack_require__(229)
	, MultiWidget: __webpack_require__(230)
	, NullBooleanField: __webpack_require__(231)
	, NullBooleanSelect: __webpack_require__(232)
	, NumberInput: __webpack_require__(207)
	, PasswordInput: __webpack_require__(186)
	, RadioChoiceInput: __webpack_require__(233)
	, RadioFieldRenderer: __webpack_require__(234)
	, RadioSelect: __webpack_require__(235)
	, RegexField: __webpack_require__(236)
	, RendererMixin: __webpack_require__(193)
	, RenderForm: __webpack_require__(237)
	, RenderFormSet: __webpack_require__(238)
	, Select: __webpack_require__(195)
	, SelectMultiple: __webpack_require__(194)
	, setDefaultLocale: locales.setDefaultLocale
	, SlugField: __webpack_require__(239)
	, SplitDateTimeField: __webpack_require__(240)
	, SplitDateTimeWidget: __webpack_require__(241)
	, SplitHiddenDateTimeWidget: __webpack_require__(243)
	, SubWidget: __webpack_require__(179)
	, Textarea: __webpack_require__(184)
	, TextInput: __webpack_require__(180)
	, TimeField: __webpack_require__(244)
	, TimeInput: __webpack_require__(242)
	, TypedChoiceField: __webpack_require__(245)
	, TypedMultipleChoiceField: __webpack_require__(246)
	, URLField: __webpack_require__(247)
	, util: util
	, validateAll: util.validateAll
	, ValidationError: validators.ValidationError
	, validators: validators
	, Widget: __webpack_require__(178)
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// HACK: requiring './validators' here makes the circular import in ipv6.js work
	//       after browserification.
	module.exports = __webpack_require__(159)

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var punycode = __webpack_require__(163)
	var url = __webpack_require__(165)

	var errors = __webpack_require__(166)
	var ipv6 = __webpack_require__(168)

	var ValidationError = errors.ValidationError
	var isValidIPv6Address = ipv6.isValidIPv6Address

	var EMPTY_VALUES = [null, undefined, '']

	function String_rsplit(str, sep, maxsplit) {
	  var split = str.split(sep)
	  return maxsplit ? [split.slice(0, -maxsplit).join(sep)].concat(split.slice(-maxsplit)) : split
	}

	/**
	 * Validates that input matches a regular expression.
	 */
	var RegexValidator = Concur.extend({
	  constructor: function(kwargs) {
	    if (!(this instanceof RegexValidator)) { return new RegexValidator(kwargs) }
	    kwargs = object.extend({
	      regex: null, message: null, code: null, inverseMatch: null
	    }, kwargs)
	    if (kwargs.regex) {
	      this.regex = kwargs.regex
	    }
	    if (kwargs.message) {
	      this.message = kwargs.message
	    }
	    if (kwargs.code) {
	      this.code = kwargs.code
	    }
	    if (kwargs.inverseMatch) {
	      this.inverseMatch = kwargs.inverseMatch
	    }
	    // Compile the regex if it was not passed pre-compiled
	    if (is.String(this.regex)) {
	      this.regex = new RegExp(this.regex)
	    }
	    return this.__call__.bind(this)
	  }
	, regex: ''
	, message: 'Enter a valid value.'
	, code: 'invalid'
	, inverseMatch: false
	, __call__: function(value) {
	    if (this.inverseMatch === this.regex.test(''+value)) {
	      throw ValidationError(this.message, {code: this.code})
	    }
	  }
	})

	/**
	 * Validates that input looks like a valid URL.
	 */
	var URLValidator = RegexValidator.extend({
	  regex: new RegExp(
	    '^(?:[a-z0-9\\.\\-]*)://'                         // schema is validated separately
	  + '(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+(?:[A-Z]{2,6}\\.?|[A-Z0-9-]{2,}\\.?)|' // Domain...
	  + 'localhost|'                                      // localhost...
	  + '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|'      // ...or IPv4
	  + '\\[?[A-F0-9]*:[A-F0-9:]+\\]?)'                   // ...or IPv6
	  + '(?::\\d+)?'                                      // Optional port
	  + '(?:/?|[/?]\\S+)$'
	  , 'i'
	  )
	, message: 'Enter a valid URL.'
	, schemes: ['http', 'https', 'ftp', 'ftps']

	, constructor:function(kwargs) {
	    if (!(this instanceof URLValidator)) { return new URLValidator(kwargs) }
	    kwargs = object.extend({schemes: null}, kwargs)
	    RegexValidator.call(this, kwargs)
	    if (kwargs.schemes !== null) {
	      this.schemes = kwargs.schemes
	    }
	    return this.__call__.bind(this)
	  }

	, __call__: function(value) {
	    value = ''+value
	    // Check if the scheme is valid first
	    var scheme = value.split('://')[0].toLowerCase()
	    if (this.schemes.indexOf(scheme) === -1) {
	      throw ValidationError(this.message, {code: this.code})
	    }

	    // Check the full URL
	    try {
	      RegexValidator.prototype.__call__.call(this, value)
	    }
	    catch (e) {
	      if (!(e instanceof ValidationError)) { throw e }

	      // Trivial case failed - try for possible IDN domain
	      var urlFields = url.parseUri(value)
	      try {
	        urlFields.host = punycode.toASCII(urlFields.host)
	      }
	      catch (unicodeError) {
	        throw e
	      }
	      value = url.makeUri(urlFields)
	      RegexValidator.prototype.__call__.call(this, value)
	    }
	  }
	})

	/** Validates that input looks like a valid e-mail address. */
	var EmailValidator = Concur.extend({
	  message: 'Enter a valid email address.'
	, code: 'invalid'
	, userRegex: new RegExp(
	    "(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*$"                                 // Dot-atom
	  + '|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-\\011\\013\\014\\016-\\177])*"$)' // Quoted-string
	  , 'i')
	, domainRegex: new RegExp(
	    '^(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+(?:[A-Z]{2,6}|[A-Z0-9-]{2,})$'          // Domain
	  + '|^\\[(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\]$' // Literal form, ipv4 address (SMTP 4.1.3)
	  , 'i')
	, domainWhitelist: ['localhost']

	, constructor: function(kwargs) {
	    if (!(this instanceof EmailValidator)) { return new EmailValidator(kwargs) }
	    kwargs = object.extend({message: null, code: null, whitelist: null}, kwargs)
	    if (kwargs.message !== null) {
	      this.message = kwargs.message
	    }
	    if (kwargs.code !== null) {
	      this.code = kwargs.code
	    }
	    if (kwargs.whitelist !== null) {
	      this.domainWhitelist = kwargs.whitelist
	    }
	    return this.__call__.bind(this)
	  }

	, __call__ : function(value) {
	    value = ''+value

	    if (!value || value.indexOf('@') == -1) {
	      throw ValidationError(this.message, {code: this.code})
	    }

	    var parts = String_rsplit(value, '@', 1)
	    var userPart = parts[0]
	    var domainPart = parts[1]

	    if (!this.userRegex.test(userPart)) {
	      throw ValidationError(this.message, {code: this.code})
	    }

	    if (this.domainWhitelist.indexOf(domainPart) == -1 &&
	        !this.domainRegex.test(domainPart)) {
	      // Try for possible IDN domain-part
	      try {
	        domainPart = punycode.toASCII(domainPart)
	        if (this.domainRegex.test(domainPart)) {
	          return
	        }
	      }
	      catch (unicodeError) {
	        // Pass through to throw the ValidationError
	      }
	      throw ValidationError(this.message, {code: this.code})
	    }
	  }
	})

	var validateEmail = EmailValidator()

	var SLUG_RE = /^[-a-zA-Z0-9_]+$/
	/** Validates that input is a valid slug. */
	var validateSlug = RegexValidator({
	  regex: SLUG_RE
	, message: 'Enter a valid "slug" consisting of letters, numbers, underscores or hyphens.'
	, code: 'invalid'
	})

	var IPV4_RE = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/
	/** Validates that input is a valid IPv4 address. */
	var validateIPv4Address = RegexValidator({
	  regex: IPV4_RE
	, message: 'Enter a valid IPv4 address.'
	, code: 'invalid'
	})

	/** Validates that input is a valid IPv6 address. */
	function validateIPv6Address(value) {
	  if (!isValidIPv6Address(value)) {
	    throw ValidationError('Enter a valid IPv6 address.', {code: 'invalid'})
	  }
	}

	/** Validates that input is a valid IPv4 or IPv6 address. */
	function validateIPv46Address(value) {
	  try {
	    validateIPv4Address(value)
	  }
	  catch (e) {
	    if (!(e instanceof ValidationError)) { throw e }
	    try {
	      validateIPv6Address(value)
	    }
	    catch (e) {
	      if (!(e instanceof ValidationError)) { throw e }
	      throw ValidationError('Enter a valid IPv4 or IPv6 address.',
	                            {code: 'invalid'})
	    }
	  }
	}

	var ipAddressValidatorLookup = {
	  both: {validators: [validateIPv46Address], message: 'Enter a valid IPv4 or IPv6 address.'}
	, ipv4: {validators: [validateIPv4Address], message: 'Enter a valid IPv4 address.'}
	, ipv6: {validators: [validateIPv6Address], message: 'Enter a valid IPv6 address.'}
	}

	/**
	 * Depending on the given parameters returns the appropriate validators for
	 * a GenericIPAddressField.
	 */
	function ipAddressValidators(protocol, unpackIPv4) {
	  if (protocol != 'both' && unpackIPv4) {
	    throw new Error('You can only use unpackIPv4 if protocol is set to "both"')
	  }
	  protocol = protocol.toLowerCase()
	  if (typeof ipAddressValidatorLookup[protocol] == 'undefined') {
	    throw new Error('The protocol "' + protocol +'" is unknown')
	  }
	  return ipAddressValidatorLookup[protocol]
	}

	var COMMA_SEPARATED_INT_LIST_RE = /^[\d,]+$/
	/** Validates that input is a comma-separated list of integers. */
	var validateCommaSeparatedIntegerList = RegexValidator({
	  regex: COMMA_SEPARATED_INT_LIST_RE
	, message: 'Enter only digits separated by commas.'
	, code: 'invalid'
	})

	/**
	 * Base for validators which compare input against a given value.
	 */
	var BaseValidator = Concur.extend({
	  constructor: function(limitValue) {
	    if (!(this instanceof BaseValidator)) { return new BaseValidator(limitValue) }
	    this.limitValue = limitValue
	    return this.__call__.bind(this)
	  }
	, compare: function(a, b) { return a !== b }
	, clean: function(x) { return x }
	, message: 'Ensure this value is {limitValue} (it is {showValue}).'
	, code: 'limitValue'
	, __call__: function(value) {
	    var cleaned = this.clean(value)
	    var params = {limitValue: this.limitValue, showValue: cleaned}
	    if (this.compare(cleaned, this.limitValue)) {
	      throw ValidationError(this.message, {code: this.code, params: params})
	    }
	  }
	})

	/**
	 * Validates that input is less than or equal to a given value.
	 */
	var MaxValueValidator = BaseValidator.extend({
	  constructor: function(limitValue) {
	    if (!(this instanceof MaxValueValidator)) { return new MaxValueValidator(limitValue) }
	    return BaseValidator.call(this, limitValue)
	  }
	, compare: function(a, b) { return a > b }
	, message: 'Ensure this value is less than or equal to {limitValue}.'
	, code: 'maxValue'
	})

	/**
	 * Validates that input is greater than or equal to a given value.
	 */
	var MinValueValidator = BaseValidator.extend({
	  constructor: function(limitValue) {
	    if (!(this instanceof MinValueValidator)) { return new MinValueValidator(limitValue) }
	    return BaseValidator.call(this, limitValue)
	  }
	, compare: function(a, b) { return a < b }
	, message: 'Ensure this value is greater than or equal to {limitValue}.'
	, code: 'minValue'
	})

	/**
	 * Validates that input is at least a given length.
	 */
	var MinLengthValidator = BaseValidator.extend({
	  constructor: function(limitValue) {
	    if (!(this instanceof MinLengthValidator)) { return new MinLengthValidator(limitValue) }
	    return BaseValidator.call(this, limitValue)
	  }
	, compare: function(a, b) { return a < b }
	, clean: function(x) { return x.length }
	, message: 'Ensure this value has at least {limitValue} characters (it has {showValue}).'
	, code: 'minLength'
	})

	/**
	 * Validates that input is at most a given length.
	 */
	var MaxLengthValidator = BaseValidator.extend({
	  constructor: function(limitValue) {
	    if (!(this instanceof MaxLengthValidator)) { return new MaxLengthValidator(limitValue) }
	    return BaseValidator.call(this, limitValue)
	  }
	, compare: function(a, b) { return a > b }
	, clean: function(x) { return x.length }
	, message: 'Ensure this value has at most {limitValue} characters (it has {showValue}).'
	, code: 'maxLength'
	})

	module.exports = {
	  EMPTY_VALUES: EMPTY_VALUES
	, RegexValidator: RegexValidator
	, URLValidator: URLValidator
	, EmailValidator: EmailValidator
	, validateEmail: validateEmail
	, validateSlug: validateSlug
	, validateIPv4Address: validateIPv4Address
	, validateIPv6Address: validateIPv6Address
	, validateIPv46Address: validateIPv46Address
	, ipAddressValidators: ipAddressValidators
	, validateCommaSeparatedIntegerList: validateCommaSeparatedIntegerList
	, BaseValidator: BaseValidator
	, MaxValueValidator: MaxValueValidator
	, MinValueValidator: MinValueValidator
	, MaxLengthValidator: MaxLengthValidator
	, MinLengthValidator: MinLengthValidator
	, ValidationError: ValidationError
	, ipv6: ipv6
	}


/***/ },
/* 160 */
/***/ function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty
	var toString = Object.prototype.toString

	function type(obj) {
	  return toString.call(obj).slice(8, -1).toLowerCase()
	}

	function inherits(childConstructor, parentConstructor) {
	  var F = function() {}
	  F.prototype = parentConstructor.prototype
	  childConstructor.prototype = new F()
	  childConstructor.prototype.constructor = childConstructor
	  return childConstructor
	}

	function extend(dest, src) {
	  for (var prop in src) {
	    if (hasOwn.call(src, prop)) {
	      dest[prop] = src[prop]
	    }
	  }
	  return dest
	}

	/**
	 * Mixes in properties from one object to another. If the source object is a
	 * Function, its prototype is mixed in instead.
	 */
	function mixin(dest, src) {
	  if (type(src) == 'function') {
	    extend(dest, src.prototype)
	  }
	  else {
	    extend(dest, src)
	  }
	}

	/**
	 * Applies mixins specified as a __mixins__ property on the given properties
	 * object, returning an object containing the mixed in properties.
	 */
	function applyMixins(properties) {
	  var mixins = properties.__mixins__
	  if (type(mixins) != 'array') {
	    mixins = [mixins]
	  }
	  var mixedProperties = {}
	  for (var i = 0, l = mixins.length; i < l; i++) {
	    mixin(mixedProperties, mixins[i])
	  }
	  delete properties.__mixins__
	  return extend(mixedProperties, properties)
	}

	/**
	 * Inherits another constructor's prototype and sets its prototype and
	 * constructor properties in one fell swoop.
	 *
	 * If a child constructor is not provided via prototypeProps.constructor,
	 * a new constructor will be created.
	 */
	function inheritFrom(parentConstructor, childConstructor, prototypeProps, constructorProps) {
	  // Create a child constructor if one wasn't given
	  if (childConstructor == null) {
	    childConstructor = function() {
	      parentConstructor.apply(this, arguments)
	    }
	  }

	  // Make sure the new prototype has the correct constructor set up
	  prototypeProps.constructor = childConstructor

	  // Base constructors should only have the properties they're defined with
	  if (parentConstructor !== Concur) {
	    // Inherit the parent's prototype
	    inherits(childConstructor, parentConstructor)
	    childConstructor.__super__ = parentConstructor.prototype
	  }

	  // Add prototype properties - this is why we took a copy of the child
	  // constructor reference in extend() - if a .constructor had been passed as a
	  // __mixins__ and overitten prototypeProps.constructor, these properties would
	  // be getting set on the mixed-in constructor's prototype.
	  extend(childConstructor.prototype, prototypeProps)

	  // Add constructor properties
	  extend(childConstructor, constructorProps)

	  return childConstructor
	}

	/**
	 * Namespace and dummy constructor for initial extension.
	 */
	var Concur = module.exports = function() {}

	/**
	 * Details of a constructor's inheritance chain - Concur just facilitates sugar
	 * so we don't include it in the initial chain. Arguably, Object.prototype could
	 * go here, but it's just not that interesting.
	 */
	Concur.__mro__ = []

	/**
	 * Creates or uses a child constructor to inherit from the the call
	 * context, which is expected to be a constructor.
	 */
	Concur.extend = function(prototypeProps, constructorProps) {
	  // Ensure we have prop objects to work with
	  prototypeProps = prototypeProps || {}
	  constructorProps = constructorProps || {}

	  // If the constructor being inherited from has a __meta__ function somewhere
	  // in its prototype chain, call it to customise prototype and constructor
	  // properties before they're used to set up the new constructor's prototype.
	  if (typeof this.prototype.__meta__ != 'undefined') {
	    this.prototype.__meta__(prototypeProps, constructorProps)
	  }

	  // Any child constructor passed in should take precedence - grab a reference
	  // to it befoer we apply any mixins.
	  var childConstructor = (hasOwn.call(prototypeProps, 'constructor')
	                          ? prototypeProps.constructor
	                          : null)

	  // If any mixins are specified, mix them into the property objects
	  if (hasOwn.call(prototypeProps, '__mixins__')) {
	    prototypeProps = applyMixins(prototypeProps)
	  }
	  if (hasOwn.call(constructorProps, '__mixins__')) {
	    constructorProps = applyMixins(constructorProps)
	  }

	  // Set up the new child constructor and its prototype
	  childConstructor = inheritFrom(this,
	                                 childConstructor,
	                                 prototypeProps,
	                                 constructorProps)

	  // Pass on the extend function for extension in turn
	  childConstructor.extend = this.extend

	  // Expose the inheritance chain for programmatic access
	  childConstructor.__mro__ = [childConstructor].concat(this.__mro__)

	  return childConstructor
	}


/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString

	// Type checks

	function isArray(o) {
	  return toString.call(o) == '[object Array]'
	}

	function isBoolean(o) {
	  return toString.call(o) == '[object Boolean]'
	}

	function isDate(o) {
	  return toString.call(o) == '[object Date]'
	}

	function isError(o) {
	  return toString.call(o) == '[object Error]'
	}

	function isFunction(o) {
	  return toString.call(o) == '[object Function]'
	}

	function isNumber(o) {
	  return toString.call(o) == '[object Number]'
	}

	function isObject(o) {
	  return toString.call(o) == '[object Object]'
	}

	function isRegExp(o) {
	  return toString.call(o) == '[object RegExp]'
	}

	function isString(o) {
	  return toString.call(o) == '[object String]'
	}

	// Content checks

	function isEmpty(o) {
	  /* jshint ignore:start */
	  for (var prop in o) {
	    return false
	  }
	  /* jshint ignore:end */
	  return true
	}

	module.exports = {
	  Array: isArray
	, Boolean: isBoolean
	, Date: isDate
	, Empty: isEmpty
	, Error: isError
	, Function: isFunction
	, NaN: isNaN
	, Number: isNumber
	, Object: isObject
	, RegExp: isRegExp
	, String: isString
	}


/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Wraps Object.prototype.hasOwnProperty() so it can be called with an object
	 * and property name.
	 */
	var hasOwn = (function() {
	  var hasOwnProperty = Object.prototype.hasOwnProperty
	  return function(obj, prop) { return hasOwnProperty.call(obj, prop) }
	})()

	/**
	 * Returns the type of an object as a lowercase string.
	 */
	var type = (function() {
	  var toString = Object.prototype.toString
	  return function(obj) { return toString.call(obj).slice(8, -1).toLowerCase() }
	})()

	/**
	 * Copies own properties from any given objects to a destination object.
	 */
	function extend(dest) {
	  for (var i = 1, l = arguments.length, src; i < l; i++) {
	    src = arguments[i]
	    if (src) {
	      for (var prop in src) {
	        if (hasOwn(src, prop)) {
	          dest[prop] = src[prop]
	        }
	      }
	    }
	  }
	  return dest
	}

	/**
	 * Makes a constructor inherit another constructor's prototype without
	 * having to actually use the constructor.
	 */
	function inherits(childConstructor, parentConstructor) {
	  var F = function() {}
	  F.prototype = parentConstructor.prototype
	  childConstructor.prototype = new F()
	  childConstructor.prototype.constructor = childConstructor
	  return childConstructor
	}

	/**
	 * Creates an Array of [property, value] pairs from an Object.
	 */
	function items(obj) {
	  var items_ = []
	  for (var prop in obj) {
	    if (hasOwn(obj, prop)) {
	      items_.push([prop, obj[prop]])
	    }
	  }
	  return items_
	}

	/**
	 * Creates an Object from an Array of [property, value] pairs.
	 */
	function fromItems(items) {
	  var obj = {}
	  for (var i = 0, l = items.length, item; i < l; i++) {
	    item = items[i]
	    obj[item[0]] = item[1]
	  }
	  return obj
	}

	/**
	 * Creates a lookup Object from an Array, coercing each item to a String.
	 */
	function lookup(arr) {
	  var obj = {}
	  for (var i = 0, l = arr.length; i < l; i++) {
	    obj[''+arr[i]] = true
	  }
	  return obj
	}

	/**
	 * If the given object has the given property, returns its value, otherwise
	 * returns the given default value.
	 */
	function get(obj, prop, defaultValue) {
	  return (hasOwn(obj, prop) ? obj[prop] : defaultValue)
	}

	/**
	 * Deletes and returns an own property from an object, optionally returning a
	 * default value if the object didn't have theproperty.
	 * @throws if given an object which is null (or undefined), or if the property
	 *   doesn't exist and there was no defaultValue given.
	 */
	function pop(obj, prop, defaultValue) {
	  if (obj == null) {
	    throw new Error('pop was given ' + obj)
	  }
	  if (hasOwn(obj, prop)) {
	    var value = obj[prop]
	    delete obj[prop]
	    return value
	  }
	  else if (arguments.length == 2) {
	    throw new Error("pop was given an object which didn't have an own '" +
	                    prop + "' property, without a default value to return")
	  }
	  return defaultValue
	}

	/**
	 * If the prop is in the object, return its value. If not, set the prop to
	 * defaultValue and return defaultValue.
	 */
	function setDefault(obj, prop, defaultValue) {
	  if (obj == null) {
	    throw new Error('setDefault was given ' + obj)
	  }
	  defaultValue = defaultValue || null
	  if (hasOwn(obj, prop)) {
	    return obj[prop]
	  }
	  else {
	    obj[prop] = defaultValue
	    return defaultValue
	  }
	}

	module.exports = {
	  hasOwn: hasOwn
	, type: type
	, extend: extend
	, inherits: inherits
	, items: items
	, fromItems: fromItems
	, lookup: lookup
	, get: get
	, pop: pop
	, setDefault: setDefault
	}


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(164)(module), (function() { return this; }())))

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 165 */
/***/ function(module, exports) {

	'use strict';

	// parseUri 1.2.2
	// (c) Steven Levithan <stevenlevithan.com>
	// MIT License
	function parseUri (str) {
	  var o = parseUri.options
	    , m = o.parser[o.strictMode ? "strict" : "loose"].exec(str)
	    , uri = {}
	    , i = 14

	  while (i--) { uri[o.key[i]] = m[i] || "" }

	  uri[o.q.name] = {};
	  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
	    if ($1) { uri[o.q.name][$1] = $2 }
	  })

	  return uri
	}

	parseUri.options = {
	  strictMode: false
	, key: ['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor']
	, q: {
	    name: 'queryKey'
	  , parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	  }
	, parser: {
	    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
	  , loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	  }
	}

	// makeURI 1.2.2 - create a URI from an object specification; compatible with
	// parseURI (http://blog.stevenlevithan.com/archives/parseuri)
	// (c) Niall Smart <niallsmart.com>
	// MIT License
	function makeUri(u) {
	  var uri = ''
	  if (u.protocol) {
	    uri += u.protocol + '://'
	  }
	  if (u.user) {
	    uri += u.user
	  }
	  if (u.password) {
	    uri += ':' + u.password
	  }
	  if (u.user || u.password) {
	    uri += '@'
	  }
	  if (u.host) {
	    uri += u.host
	  }
	  if (u.port) {
	    uri += ':' + u.port
	  }
	  if (u.path) {
	    uri += u.path
	  }
	  var qk = u.queryKey
	  var qs = []
	  for (var k in qk) {
	    if (!qk.hasOwnProperty(k)) {
	      continue
	    }
	    var v = encodeURIComponent(qk[k])
	    k = encodeURIComponent(k)
	    if (v) {
	      qs.push(k + '=' + v)
	    }
	    else {
	      qs.push(k)
	    }
	  }
	  if (qs.length > 0) {
	    uri += '?' + qs.join('&')
	  }
	  if (u.anchor) {
	    uri += '#' + u.anchor
	  }
	  return uri
	}

	module.exports = {
	  parseUri: parseUri
	, makeUri: makeUri
	}


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var format = __webpack_require__(167).formatObj
	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var NON_FIELD_ERRORS = '__all__'

	/**
	 * A validation error, containing a list of messages. Single messages (e.g.
	 * those produced by validators) may have an associated error code and
	 * parameters to allow customisation by fields.
	 *
	 * The message argument can be a single error, a list of errors, or an object
	 * that maps field names to lists of errors. What we define as an "error" can
	 * be either a simple string or an instance of ValidationError with its message
	 * attribute set, and what we define as list or object can be an actual list or
	 * object or an instance of ValidationError with its errorList or errorObj
	 * property set.
	 */
	var ValidationError = Concur.extend({
	  constructor: function ValidationError(message, kwargs) {
	    if (!(this instanceof ValidationError)) { return new ValidationError(message, kwargs) }
	    kwargs = object.extend({code: null, params: null}, kwargs)

	    var code = kwargs.code
	    var params = kwargs.params

	    if (message instanceof ValidationError) {
	      if (object.hasOwn(message, 'errorObj')) {
	        message = message.errorObj
	      }
	      else if (object.hasOwn(message, 'message')) {
	        message = message.errorList
	      }
	      else {
	        code = message.code
	        params = message.params
	        message = message.message
	      }
	    }

	    if (is.Object(message)) {
	      this.errorObj = {}
	      Object.keys(message).forEach(function(field) {
	        var messages = message[field]
	        if (!(messages instanceof ValidationError)) {
	          messages = ValidationError(messages)
	        }
	        this.errorObj[field] = messages.errorList
	      }.bind(this))
	    }
	    else if (is.Array(message)) {
	      this.errorList = []
	      message.forEach(function(message) {
	        // Normalize strings to instances of ValidationError
	        if (!(message instanceof ValidationError)) {
	          message = ValidationError(message)
	        }
	        this.errorList.push.apply(this.errorList, message.errorList)
	      }.bind(this))
	    }
	    else {
	      this.message = message
	      this.code = code
	      this.params = params
	      this.errorList = [this]
	    }
	  }
	})

	/**
	 * Returns validation messages as an object with field names as properties.
	 * Throws an error if this validation error was not created with a field error
	 * object.
	 */
	ValidationError.prototype.messageObj = function() {
	  if (!object.hasOwn(this, 'errorObj')) {
	    throw new Error('ValidationError has no errorObj')
	  }
	  return this.__iter__()
	}

	/**
	 * Returns validation messages as a list.
	 */
	ValidationError.prototype.messages = function() {
	  if (object.hasOwn(this, 'errorObj')) {
	    var messages = []
	    Object.keys(this.errorObj).forEach(function(field) {
	      var errors = this.errorObj[field]
	      messages.push.apply(messages, ValidationError(errors).__iter__())
	    }.bind(this))
	    return messages
	  }
	  else {
	    return this.__iter__()
	  }
	}

	/**
	 * Generates an object of field error messags or a list of error messages
	 * depending on how this ValidationError has been constructed.
	 */
	ValidationError.prototype.__iter__ = function() {
	  if (object.hasOwn(this, 'errorObj')) {
	    var messageObj = {}
	    Object.keys(this.errorObj).forEach(function(field) {
	      var errors = this.errorObj[field]
	      messageObj[field] = ValidationError(errors).__iter__()
	    }.bind(this))
	    return messageObj
	  }
	  else {
	    return this.errorList.map(function(error) {
	      var message = error.message
	      if (error.params) {
	        message = format(message, error.params)
	      }
	      return message
	    })
	  }
	}

	/**
	 * Passes this error's messages on to the given error object, adding to a
	 * particular field's error messages if already present.
	 */
	ValidationError.prototype.updateErrorObj = function(errorObj) {
	  if (object.hasOwn(this, 'errorObj')) {
	    if (errorObj) {
	      Object.keys(this.errorObj).forEach(function(field) {
	        if (!object.hasOwn(errorObj, field)) {
	          errorObj[field] = []
	        }
	        var errors = errorObj[field]
	        errors.push.apply(errors, this.errorObj[field])
	      }.bind(this))
	    }
	    else {
	      errorObj = this.errorObj
	    }
	  }
	  else {
	    if (!object.hasOwn(errorObj, NON_FIELD_ERRORS)) {
	      errorObj[NON_FIELD_ERRORS] = []
	    }
	    var nonFieldErrors = errorObj[NON_FIELD_ERRORS]
	    nonFieldErrors.push.apply(nonFieldErrors, this.errorList)
	  }
	  return errorObj
	}

	ValidationError.prototype.toString = function() {
	  return ('ValidationError(' + JSON.stringify(this.__iter__()) + ')')
	}

	module.exports = {
	  ValidationError: ValidationError
	}


/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	var slice = Array.prototype.slice
	  , formatRegExp = /%[%s]/g
	  , formatObjRegExp = /({{?)(\w+)}/g

	/**
	 * Replaces %s placeholders in a string with positional arguments.
	 */
	function format(s) {
	  return formatArr(s, slice.call(arguments, 1))
	}

	/**
	 * Replaces %s placeholders in a string with array contents.
	 */
	function formatArr(s, a) {
	  var i = 0
	  return s.replace(formatRegExp, function(m) { return m == '%%' ? '%' : a[i++] })
	}

	/**
	 * Replaces {propertyName} placeholders in a string with object properties.
	 */
	function formatObj(s, o) {
	  return s.replace(formatObjRegExp, function(m, b, p) { return b.length == 2 ? m.slice(1) : o[p] })
	}

	var units = 'kMGTPEZY'
	  , stripDecimals = /\.00$|0$/

	/**
	 * Formats bytes as a file size with the appropriately scaled units.
	 */
	function fileSize(bytes, threshold) {
	  threshold = Math.min(threshold || 768, 1024)
	  var i = -1
	    , unit = 'bytes'
	    , size = bytes
	  while (size > threshold && i < units.length) {
	    size = size / 1024
	    i++
	  }
	  if (i > -1) {
	    unit = units.charAt(i) + 'B'
	  }
	  return size.toFixed(2).replace(stripDecimals, '') + ' ' + unit
	}

	module.exports = {
	  format: format
	, formatArr: formatArr
	, formatObj: formatObj
	, fileSize: fileSize
	}


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var errors = __webpack_require__(166)

	var ValidationError = errors.ValidationError

	var hexRE = /^[0-9a-f]+$/

	/**
	 * Cleans a IPv6 address string.
	 *
	 * Validity is checked by calling isValidIPv6Address() - if an invalid address
	 * is passed, a ValidationError is thrown.
	 *
	 * Replaces the longest continious zero-sequence with '::' and removes leading
	 * zeroes and makes sure all hextets are lowercase.
	 */
	function cleanIPv6Address(ipStr, kwargs) {
	  kwargs = object.extend({
	    unpackIPv4: false, errorMessage: 'This is not a valid IPv6 address.'
	  }, kwargs)

	  var bestDoublecolonStart = -1
	  var bestDoublecolonLen = 0
	  var doublecolonStart = -1
	  var doublecolonLen = 0

	  if (!isValidIPv6Address(ipStr)) {
	    throw ValidationError(kwargs.errorMessage, {code: 'invalid'})
	  }

	  // This algorithm can only handle fully exploded IP strings
	  ipStr = _explodeShorthandIPstring(ipStr)
	  ipStr = _sanitiseIPv4Mapping(ipStr)

	  // If needed, unpack the IPv4 and return straight away
	  if (kwargs.unpackIPv4) {
	    var ipv4Unpacked = _unpackIPv4(ipStr)
	    if (ipv4Unpacked) {
	      return ipv4Unpacked
	    }
	  }

	  var hextets = ipStr.split(':')

	  for (var i = 0, l = hextets.length; i < l; i++) {
	    // Remove leading zeroes
	    hextets[i] = hextets[i].replace(/^0+/, '')
	    if (hextets[i] === '') {
	      hextets[i] = '0'
	    }

	    // Determine best hextet to compress
	    if (hextets[i] == '0') {
	      doublecolonLen += 1
	      if (doublecolonStart == -1) {
	        // Start a sequence of zeros
	        doublecolonStart = i
	      }
	      if (doublecolonLen > bestDoublecolonLen) {
	        // This is the longest sequence so far
	        bestDoublecolonLen = doublecolonLen
	        bestDoublecolonStart = doublecolonStart
	      }
	    }
	    else {
	      doublecolonLen = 0
	      doublecolonStart = -1
	    }
	  }

	  // Compress the most suitable hextet
	  if (bestDoublecolonLen > 1) {
	    var bestDoublecolonEnd = bestDoublecolonStart + bestDoublecolonLen
	    // For zeros at the end of the address
	    if (bestDoublecolonEnd == hextets.length) {
	      hextets.push('')
	    }
	    hextets.splice(bestDoublecolonStart, bestDoublecolonLen, '')
	    // For zeros at the beginning of the address
	    if (bestDoublecolonStart === 0) {
	      hextets.unshift('')
	    }
	  }

	  return hextets.join(':').toLowerCase()
	}

	/**
	 * Sanitises IPv4 mapping in a expanded IPv6 address.
	 *
	 * This converts ::ffff:0a0a:0a0a to ::ffff:10.10.10.10.
	 * If there is nothing to sanitise, returns an unchanged string.
	 */
	function _sanitiseIPv4Mapping(ipStr) {
	  if (ipStr.toLowerCase().indexOf('0000:0000:0000:0000:0000:ffff:') !== 0) {
	    // Not an ipv4 mapping
	    return ipStr
	  }

	  var hextets = ipStr.split(':')

	  if (hextets[hextets.length - 1].indexOf('.') != -1) {
	    // Already sanitized
	    return ipStr
	  }

	  var ipv4Address = [
	    parseInt(hextets[6].substring(0, 2), 16)
	  , parseInt(hextets[6].substring(2, 4), 16)
	  , parseInt(hextets[7].substring(0, 2), 16)
	  , parseInt(hextets[7].substring(2, 4), 16)
	  ].join('.')

	  return hextets.slice(0, 6).join(':') +  ':' + ipv4Address
	}

	/**
	 * Unpacks an IPv4 address that was mapped in a compressed IPv6 address.
	 *
	 * This converts 0000:0000:0000:0000:0000:ffff:10.10.10.10 to 10.10.10.10.
	 * If there is nothing to sanitize, returns null.
	 */
	function _unpackIPv4(ipStr) {
	  if (ipStr.toLowerCase().indexOf('0000:0000:0000:0000:0000:ffff:') !== 0) {
	    return null
	  }

	  var hextets = ipStr.split(':')
	  return hextets.pop()
	}

	/**
	 * Determines if we have a valid IPv6 address.
	 */
	function isValidIPv6Address(ipStr) {
	  var validateIPv4Address = __webpack_require__(159).validateIPv4Address

	  // We need to have at least one ':'
	  if (ipStr.indexOf(':') == -1) {
	    return false
	  }

	  // We can only have one '::' shortener
	  if (String_count(ipStr, '::') > 1) {
	    return false
	  }

	  // '::' should be encompassed by start, digits or end
	  if (ipStr.indexOf(':::') != -1) {
	    return false
	  }

	  // A single colon can neither start nor end an address
	  if ((ipStr.charAt(0) == ':' && ipStr.charAt(1) != ':') ||
	      (ipStr.charAt(ipStr.length - 1) == ':' &&
	       ipStr.charAt(ipStr.length - 2) != ':')) {
	    return false
	  }

	  // We can never have more than 7 ':' (1::2:3:4:5:6:7:8 is invalid)
	  if (String_count(ipStr, ':') > 7) {
	    return false
	  }

	  // If we have no concatenation, we need to have 8 fields with 7 ':'
	  if (ipStr.indexOf('::') == -1 && String_count(ipStr, ':') != 7) {
	    // We might have an IPv4 mapped address
	    if (String_count(ipStr, '.') != 3) {
	      return false
	    }
	  }

	  ipStr = _explodeShorthandIPstring(ipStr)

	  // Now that we have that all squared away, let's check that each of the
	  // hextets are between 0x0 and 0xFFFF.
	  var hextets = ipStr.split(':')
	  for (var i = 0, l = hextets.length, hextet; i < l; i++) {
	    hextet = hextets[i]
	    if (String_count(hextet, '.') == 3) {
	      // If we have an IPv4 mapped address, the IPv4 portion has to
	      // be at the end of the IPv6 portion.
	      if (ipStr.split(':').pop() != hextet) {
	        return false
	      }
	      try {
	        validateIPv4Address(hextet)
	      }
	      catch (e) {
	        if (!(e instanceof ValidationError)) {
	          throw e
	        }
	        return false
	      }
	    }
	    else {
	      if (!hexRE.test(hextet)) {
	        return false
	      }
	      var intValue = parseInt(hextet, 16)
	      if (isNaN(intValue) || intValue < 0x0 || intValue > 0xFFFF) {
	        return false
	      }
	    }
	  }

	  return true
	}

	/**
	 * Expands a shortened IPv6 address.
	 */
	function _explodeShorthandIPstring(ipStr) {
	  if (!_isShortHand(ipStr)) {
	    // We've already got a longhand ipStr
	    return ipStr
	  }

	  var newIp = []
	  var hextets = ipStr.split('::')

	  // If there is a ::, we need to expand it with zeroes to get to 8 hextets -
	  // unless there is a dot in the last hextet, meaning we're doing v4-mapping
	  var fillTo = (ipStr.split(':').pop().indexOf('.') != -1) ? 7 : 8

	  if (hextets.length > 1) {
	    var sep = hextets[0].split(':').length + hextets[1].split(':').length
	    newIp = hextets[0].split(':')
	    for (var i = 0, l = fillTo - sep; i < l; i++) {
	      newIp.push('0000')
	    }
	    newIp = newIp.concat(hextets[1].split(':'))
	  }
	  else {
	    newIp = ipStr.split(':')
	  }

	  // Now need to make sure every hextet is 4 lower case characters.
	  // If a hextet is < 4 characters, we've got missing leading 0's.
	  var retIp = []
	  for (i = 0, l = newIp.length; i < l; i++) {
	    retIp.push(zeroPadding(newIp[i], 4) + newIp[i].toLowerCase())
	  }
	  return retIp.join(':')
	}

	/**
	 * Determines if the address is shortened.
	 */
	function _isShortHand(ipStr) {
	  if (String_count(ipStr, '::') == 1) {
	    return true
	  }
	  var parts = ipStr.split(':')
	  for (var i = 0, l = parts.length; i < l; i++) {
	    if (parts[i].length < 4) {
	      return true
	    }
	  }
	  return false
	}

	// Utilities

	function zeroPadding(str, length) {
	  if (str.length >= length) {
	    return ''
	  }
	  return new Array(length - str.length + 1).join('0')
	}

	function String_count(str, subStr) {
	  return str.split(subStr).length - 1
	}

	module.exports = {
	  cleanIPv6Address: cleanIPv6Address
	, isValidIPv6Address: isValidIPv6Address
	}


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var time = __webpack_require__(170)

	var defaultLocale = {lang: 'en'}

	var localeCache = {
	  en: {
	    DATE_INPUT_FORMATS: [
	      '%Y-%m-%d'                        // '2006-10-25'
	    , '%m/%d/%Y', '%m/%d/%y'            // '10/25/2006', '10/25/06'
	    , '%b %d %Y', '%b %d, %Y'           // 'Oct 25 2006', 'Oct 25, 2006'
	    , '%d %b %Y', '%d %b, %Y'           // '25 Oct 2006', '25 Oct, 2006'
	    , '%B %d %Y', '%B %d, %Y'           // 'October 25 2006', 'October 25, 2006'
	    , '%d %B %Y', '%d %B, %Y'           // '25 October 2006', '25 October, 2006'
	    ]
	  , DATETIME_INPUT_FORMATS: [
	      '%Y-%m-%d %H:%M:%S'               // '2006-10-25 14:30:59'
	    , '%Y-%m-%d %H:%M'                  // '2006-10-25 14:30'
	    , '%Y-%m-%d'                        // '2006-10-25'
	    , '%m/%d/%Y %H:%M:%S'               // '10/25/2006 14:30:59'
	    , '%m/%d/%Y %H:%M'                  // '10/25/2006 14:30'
	    , '%m/%d/%Y'                        // '10/25/2006'
	    , '%m/%d/%y %H:%M:%S'               // '10/25/06 14:30:59'
	    , '%m/%d/%y %H:%M'                  // '10/25/06 14:30'
	    , '%m/%d/%y'                        // '10/25/06'
	    ]
	  }
	, en_GB: {
	    DATE_INPUT_FORMATS: [
	      '%d/%m/%Y', '%d/%m/%y'            // '25/10/2006', '25/10/06'
	    , '%b %d %Y', '%b %d, %Y'           // 'Oct 25 2006', 'Oct 25, 2006'
	    , '%d %b %Y', '%d %b, %Y'           // '25 Oct 2006', '25 Oct, 2006'
	    , '%B %d %Y', '%B %d, %Y'           // 'October 25 2006', 'October 25, 2006'
	    , '%d %B %Y', '%d %B, %Y'           // '25 October 2006', '25 October, 2006'
	    ]
	  , DATETIME_INPUT_FORMATS: [
	      '%Y-%m-%d %H:%M:%S'               // '2006-10-25 14:30:59'
	    , '%Y-%m-%d %H:%M'                  // '2006-10-25 14:30'
	    , '%Y-%m-%d'                        // '2006-10-25'
	    , '%d/%m/%Y %H:%M:%S'               // '25/10/2006 14:30:59'
	    , '%d/%m/%Y %H:%M'                  // '25/10/2006 14:30'
	    , '%d/%m/%Y'                        // '25/10/2006'
	    , '%d/%m/%y %H:%M:%S'               // '25/10/06 14:30:59'
	    , '%d/%m/%y %H:%M'                  // '25/10/06 14:30'
	    , '%d/%m/%y'                        // '25/10/06'
	    ]
	  }
	}

	/**
	 * Adds a locale object to our own cache (for formats) and isomorph.time's cache
	 * (for time parsing/formatting).
	 * @param {string} lang
	 * @param {string=} locale
	 */
	function addLocale(lang, locale) {
	  localeCache[lang] = locale
	  time.locales[lang] = locale
	}

	/**
	 * Gets the most applicable locale, falling back to the language code if
	 * necessary and to the default locale if no matching locale was found.
	 * @param {string=} lang
	 */
	function getLocale(lang) {
	  if (lang) {
	    if (object.hasOwn(localeCache, lang)) {
	      return localeCache[lang]
	    }
	    if (lang.indexOf('_') != -1) {
	      lang = lang.split('_')[0]
	      if (object.hasOwn(localeCache, lang)) {
	        return localeCache[lang]
	      }
	    }
	  }
	  return localeCache[defaultLocale.lang]
	}

	/**
	 * Gets all applicable locales, with the most specific first, falling back to
	 * the default locale if necessary.
	 * @param {string=} lang
	 * @return {Array.<Object>}
	 */
	function getLocales(lang) {
	  if (lang) {
	    var locales = []
	    if (object.hasOwn(localeCache, lang)) {
	       locales.push(localeCache[lang])
	    }
	    if (lang.indexOf('_') != -1) {
	      lang = lang.split('_')[0]
	      if (object.hasOwn(localeCache, lang)) {
	        locales.push(localeCache[lang])
	      }
	    }
	    if (locales.length) {
	      return locales
	    }
	  }
	  return [localeCache[defaultLocale.lang]]
	}

	/**
	 * Sets the language code for the default locale.
	 * @param {string} lang
	 */
	function setDefaultLocale(lang) {
	  if (!object.hasOwn(localeCache, lang)) {
	    throw new Error('Unknown locale: ' + lang)
	  }
	  defaultLocale.lang = lang
	}

	/**
	 * @return {string} the language code for the default locale.
	 */
	function getDefaultLocale() {
	  return defaultLocale.lang
	}

	module.exports = {
	  addLocale: addLocale
	, getDefaultLocale: getDefaultLocale
	, getLocale: getLocale
	, getLocales: getLocales
	, setDefaultLocale: setDefaultLocale
	}


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)

	/**
	 * Pads a number with a leading zero if necessary.
	 */
	function pad(number) {
	  return (number < 10 ? '0' + number : number)
	}

	/**
	 * Returns the index of item in list, or -1 if it's not in list.
	 */
	function indexOf(item, list) {
	  for (var i = 0, l = list.length; i < l; i++) {
	    if (item === list[i]) {
	      return i
	    }
	  }
	  return -1
	}

	/**
	 * Maps directive codes to regular expression patterns which will capture the
	 * data the directive corresponds to, or in the case of locale-dependent
	 * directives, a function which takes a locale and generates a regular
	 * expression pattern.
	 */
	var parserDirectives = {
	  // Locale's abbreviated month name
	  'b': function(l) { return '(' + l.b.join('|') + ')' }
	  // Locale's full month name
	, 'B': function(l) { return '(' + l.B.join('|') + ')' }
	  // Locale's equivalent of either AM or PM.
	, 'p': function(l) { return '(' + l.AM + '|' + l.PM + ')' }
	, 'd': '(\\d\\d?)' // Day of the month as a decimal number [01,31]
	, 'H': '(\\d\\d?)' // Hour (24-hour clock) as a decimal number [00,23]
	, 'I': '(\\d\\d?)' // Hour (12-hour clock) as a decimal number [01,12]
	, 'm': '(\\d\\d?)' // Month as a decimal number [01,12]
	, 'M': '(\\d\\d?)' // Minute as a decimal number [00,59]
	, 'S': '(\\d\\d?)' // Second as a decimal number [00,59]
	, 'y': '(\\d\\d?)' // Year without century as a decimal number [00,99]
	, 'Y': '(\\d{4})'  // Year with century as a decimal number
	, '%': '%'         // A literal '%' character
	}

	/**
	 * Maps directive codes to functions which take the date to be formatted and
	 * locale details (if required), returning an appropriate formatted value.
	 */
	var formatterDirectives = {
	  'a': function(d, l) { return l.a[d.getDay()] }
	, 'A': function(d, l) { return l.A[d.getDay()] }
	, 'b': function(d, l) { return l.b[d.getMonth()] }
	, 'B': function(d, l) { return l.B[d.getMonth()] }
	, 'd': function(d) { return pad(d.getDate(), 2) }
	, 'H': function(d) { return pad(d.getHours(), 2) }
	, 'M': function(d) { return pad(d.getMinutes(), 2) }
	, 'm': function(d) { return pad(d.getMonth() + 1, 2) }
	, 'S': function(d) { return pad(d.getSeconds(), 2) }
	, 'w': function(d) { return d.getDay() }
	, 'Y': function(d) { return d.getFullYear() }
	, '%': function(d) { return '%' }
	}

	/** Test for hanging percentage symbols. */
	var strftimeFormatCheck = /[^%]%$/

	/**
	 * A partial implementation of strptime which parses time details from a string,
	 * based on a format string.
	 * @param {String} format
	 * @param {Object} locale
	 */
	function TimeParser(format, locale) {
	  this.format = format
	  this.locale = locale
	  var cachedPattern = TimeParser._cache[locale.name + '|' + format]
	  if (cachedPattern !== undefined) {
	    this.re = cachedPattern[0]
	    this.matchOrder = cachedPattern[1]
	  }
	  else {
	    this.compilePattern()
	  }
	}

	/**
	 * Caches RegExps and match orders generated per locale/format string combo.
	 */
	TimeParser._cache = {}

	TimeParser.prototype.compilePattern = function() {
	  // Normalise whitespace before further processing
	  var format = this.format.split(/(?:\s|\t|\n)+/).join(' ')
	    , pattern = []
	    , matchOrder = []
	    , c
	    , directive

	  for (var i = 0, l = format.length; i < l; i++) {
	    c = format.charAt(i)
	    if (c != '%') {
	      if (c === ' ') {
	        pattern.push(' +')
	      }
	      else {
	        pattern.push(c)
	      }
	      continue
	    }

	    if (i == l - 1) {
	      throw new Error('strptime format ends with raw %')
	    }

	    c = format.charAt(++i)
	    directive = parserDirectives[c]
	    if (directive === undefined) {
	      throw new Error('strptime format contains an unknown directive: %' + c)
	    }
	    else if (is.Function(directive)) {
	      pattern.push(directive(this.locale))
	    }
	    else {
	      pattern.push(directive)
	    }

	    if (c != '%') {
	       matchOrder.push(c)
	    }
	  }

	  this.re = new RegExp('^' + pattern.join('') + '$')
	  this.matchOrder = matchOrder
	  TimeParser._cache[this.locale.name + '|' + this.format] = [this.re, matchOrder]
	}

	/**
	 * Attempts to extract date and time details from the given input.
	 * @param {string} input
	 * @return {Array.<number>}
	 */
	TimeParser.prototype.parse = function(input) {
	  var matches = this.re.exec(input)
	  if (matches === null) {
	    throw new Error('Time data did not match format: data=' + input +
	                    ', format=' + this.format)
	  }

	    // Default values for when more accurate values cannot be inferred
	  var time = [1900, 1, 1, 0, 0, 0]
	    // Matched time data, keyed by directive code
	    , data = {}

	  for (var i = 1, l = matches.length; i < l; i++) {
	    data[this.matchOrder[i - 1]] = matches[i]
	  }

	  // Extract year
	  if (data.hasOwnProperty('Y')) {
	    time[0] = parseInt(data.Y, 10)
	  }
	  else if (data.hasOwnProperty('y')) {
	    var year = parseInt(data.y, 10)
	    if (year < 68) {
	        year = 2000 + year
	    }
	    else if (year < 100) {
	        year = 1900 + year
	    }
	    time[0] = year
	  }

	  // Extract month
	  if (data.hasOwnProperty('m')) {
	    var month = parseInt(data.m, 10)
	    if (month < 1 || month > 12) {
	      throw new Error('Month is out of range: ' + month)
	    }
	    time[1] = month
	  }
	  else if (data.hasOwnProperty('B')) {
	    time[1] = indexOf(data.B, this.locale.B) + 1
	  }
	  else if (data.hasOwnProperty('b')) {
	    time[1] = indexOf(data.b, this.locale.b) + 1
	  }

	  // Extract day of month
	  if (data.hasOwnProperty('d')) {
	    var day = parseInt(data.d, 10)
	    if (day < 1 || day > 31) {
	      throw new Error('Day is out of range: ' + day)
	    }
	    time[2] = day
	  }

	  // Extract hour
	  var hour
	  if (data.hasOwnProperty('H')) {
	    hour = parseInt(data.H, 10)
	    if (hour > 23) {
	      throw new Error('Hour is out of range: ' + hour)
	    }
	    time[3] = hour
	  }
	  else if (data.hasOwnProperty('I')) {
	    hour = parseInt(data.I, 10)
	    if (hour < 1 || hour > 12) {
	      throw new Error('Hour is out of range: ' + hour)
	    }

	    // If we don't get any more information, we'll assume this time is
	    // a.m. - 12 a.m. is midnight.
	    if (hour == 12) {
	        hour = 0
	    }

	    time[3] = hour

	    if (data.hasOwnProperty('p')) {
	      if (data.p == this.locale.PM) {
	        // We've already handled the midnight special case, so it's
	        // safe to bump the time by 12 hours without further checks.
	        time[3] = time[3] + 12
	      }
	    }
	  }

	  // Extract minute
	  if (data.hasOwnProperty('M')) {
	    var minute = parseInt(data.M, 10)
	    if (minute > 59) {
	        throw new Error('Minute is out of range: ' + minute)
	    }
	    time[4] = minute
	  }

	  // Extract seconds
	  if (data.hasOwnProperty('S')) {
	    var second = parseInt(data.S, 10)
	    if (second > 59) {
	      throw new Error('Second is out of range: ' + second)
	    }
	    time[5] = second
	  }

	  // Validate day of month
	  day = time[2], month = time[1], year = time[0]
	  if (((month == 4 || month == 6 || month == 9 || month == 11) &&
	      day > 30) ||
	      (month == 2 && day > ((year % 4 === 0 && year % 100 !== 0 ||
	                             year % 400 === 0) ? 29 : 28))) {
	    throw new Error('Day is out of range: ' + day)
	  }

	  return time
	}

	var time  = {
	  /** Default locale name. */
	  defaultLocale: 'en'

	  /** Locale details. */
	, locales: {
	    en: {
	      name: 'en'
	    , a: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	    , A: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
	          'Friday', 'Saturday']
	    , AM: 'AM'
	    , b: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	          'Oct', 'Nov', 'Dec']
	    , B: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
	          'August', 'September', 'October', 'November', 'December']
	    , PM: 'PM'
	    }
	  }
	}

	/**
	 * Retrieves the locale with the given code.
	 * @param {string} code
	 * @return {Object}
	 */
	var getLocale = time.getLocale = function(code) {
	  if (code) {
	    if (time.locales.hasOwnProperty(code)) {
	      return time.locales[code]
	    }
	    else if (code.length > 2) {
	      // If we appear to have more than a language code, try the
	      // language code on its own.
	      var languageCode = code.substring(0, 2)
	      if (time.locales.hasOwnProperty(languageCode)) {
	        return time.locales[languageCode]
	      }
	    }
	  }
	  return time.locales[time.defaultLocale]
	}

	/**
	 * Parses time details from a string, based on a format string.
	 * @param {string} input
	 * @param {string} format
	 * @param {string=} locale
	 * @return {Array.<number>}
	 */
	var strptime = time.strptime = function(input, format, locale) {
	  return new TimeParser(format, getLocale(locale)).parse(input)
	}

	/**
	 * Convenience wrapper around time.strptime which returns a JavaScript Date.
	 * @param {string} input
	 * @param {string} format
	 * @param {string=} locale
	 * @return {date}
	 */
	time.strpdate = function(input, format, locale) {
	  var t = strptime(input, format, locale)
	  return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5])
	}

	/**
	 * A partial implementation of <code>strftime</code>, which formats a date
	 * according to a format string. An Error will be thrown if an invalid
	 * format string is given.
	 * @param {date} date
	 * @param {string} format
	 * @param {string=} locale
	 * @return {string}
	 */
	time.strftime = function(date, format, locale) {
	  if (strftimeFormatCheck.test(format)) {
	    throw new Error('strftime format ends with raw %')
	  }
	  locale = getLocale(locale)
	  return format.replace(/(%.)/g, function(s, f) {
	    var code = f.charAt(1)
	    if (typeof formatterDirectives[code] == 'undefined') {
	      throw new Error('strftime format contains an unknown directive: ' + f)
	    }
	    return formatterDirectives[code](date, locale)
	  })
	}

	module.exports = time


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var getFormData = __webpack_require__(172)

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	/**
	 * Replaces String {placeholders} with properties of a given object, but
	 * interpolates into and returns an Array instead of a String.
	 * By default, any resulting empty strings are stripped out of the Array. To
	 * disable this, pass an options object with a 'strip' property which is false.
	 */
	function formatToArray(str, obj, options) {
	  var parts = str.split(/\{(\w+)\}/g)
	  for (var i = 1, l = parts.length; i < l; i += 2) {
	    parts[i] = (object.hasOwn(obj, parts[i])
	                ? obj[parts[i]]
	                : '{' + parts[i] + '}')
	  }
	  if (!options || (options && options.strip !== false)) {
	    parts = parts.filter(function(p) { return p !== ''})
	  }
	  return parts
	}

	/**
	 * Get named properties from an object.
	 * @param src {Object}
	 * @param props {Array.<string>}
	 * @return {Object}
	 */
	function getProps(src, props) {
	  var result = {}
	  for (var i = 0, l = props.length; i < l ; i++) {
	    var prop = props[i]
	    if (object.hasOwn(src, prop)) {
	      result[prop] = src[prop]
	    }
	  }
	  return result
	}

	/**
	 * Get a named property from an object, calling it and returning its result if
	 * it's a function.
	 */
	function maybeCall(obj, prop) {
	  var value = obj[prop]
	  if (is.Function(value)) {
	    value = value.call(obj)
	  }
	  return value
	}

	/**
	 * Creates a list of choice pairs from a list of objects using the given named
	 * properties for the value and label.
	 */
	function makeChoices(list, valueProp, labelProp) {
	  return list.map(function(item) {
	    return [maybeCall(item, valueProp), maybeCall(item, labelProp)]
	  })
	}

	/**
	 * Validates choice input and normalises lazy, non-Array choices to be
	 * [value, label] pairs
	 * @return {Array} a normalised version of the given choices.
	 * @throws if an Array with length != 2 was found where a choice pair was expected.
	 */
	function normaliseChoices(choices) {
	  if (!choices.length) { return choices }

	  var normalisedChoices = []
	  for (var i = 0, l = choices.length, choice; i < l; i++) {
	    choice = choices[i]
	    if (!is.Array(choice)) {
	      // TODO In the development build, emit a warning about a choice being
	      //      automatically converted from 'blah' to ['blah', 'blah'] in case it
	      //      wasn't intentional
	      choice = [choice, choice]
	    }
	    if (choice.length != 2) {
	      throw new Error('Choices in a choice list must contain exactly 2 values, ' +
	                      'but got ' + JSON.stringify(choice))
	    }
	    if (is.Array(choice[1])) {
	      var normalisedOptgroupChoices = []
	      // This is an optgroup, so look inside the group for options
	      var optgroupChoices = choice[1]
	      for (var j = 0, m = optgroupChoices.length, optgroupChoice; j < m; j++) {
	        optgroupChoice = optgroupChoices[j]
	        if (!is.Array(optgroupChoice)) {
	          optgroupChoice = [optgroupChoice, optgroupChoice]
	        }
	        if (optgroupChoice.length != 2) {
	          throw new Error('Choices in an optgroup choice list must contain ' +
	                          'exactly 2 values, but got ' +
	                          JSON.stringify(optgroupChoice))
	        }
	        normalisedOptgroupChoices.push(optgroupChoice)
	      }
	      normalisedChoices.push([choice[0], normalisedOptgroupChoices])
	    }
	    else {
	      normalisedChoices.push(choice)
	    }
	  }
	  return normalisedChoices
	}

	/**
	 * @param {Array.<string>} events
	 */
	function normaliseValidationEvents(events) {
	  events = events.map(function(event) {
	    if (event.indexOf('on') === 0) { return event }
	    return 'on' + event.charAt(0).toUpperCase() + event.substr(1)
	  })
	  var onChangeIndex = events.indexOf('onChange')
	  if (onChangeIndex != -1) {
	    events.splice(onChangeIndex, 1)
	  }
	  return {events: events, onChange: (onChangeIndex != -1)}
	}

	/**
	 * @param {string} events
	 */
	function normaliseValidationString(events) {
	  return normaliseValidationEvents(strip(events).split(/ +/g))
	}

	/**
	 * @param {(string|Object)} validation
	 */
	function normaliseValidation(validation) {
	  if (!validation || validation === 'manual') {
	    return validation
	  }
	  else if (validation === 'auto') {
	    return {events: ['onBlur'], onChange: true, onChangeDelay: 369}
	  }
	  else if (is.String(validation)) {
	    return normaliseValidationString(validation)
	  }
	  else if (is.Object(validation)) {
	    var normalised
	    if (is.String(validation.on)) {
	      normalised = normaliseValidationString(validation.on)
	    }
	    else if (is.Array(validation.on)) {
	      normalised = normaliseValidationEvents(validation.on)
	    }
	    else {
	      throw new Error("Validation config Objects must have an 'on' String or Array")
	    }
	    normalised.onChangeDelay = object.get(validation, 'onChangeDelay', validation.delay)
	    return normalised
	  }
	  throw new Error('Unexpected validation config: ' + validation)
	}

	/**
	 * Converts 'firstName' and 'first_name' to 'First name', and
	 * 'SHOUTING_LIKE_THIS' to 'SHOUTING LIKE THIS'.
	 */
	var prettyName = (function() {
	  var capsRE = /([A-Z]+)/g
	  var splitRE = /[ _]+/
	  var allCapsRE = /^[A-Z][A-Z0-9]+$/

	  return function(name) {
	    // Prefix sequences of caps with spaces and split on all space
	    // characters.
	    var parts = name.replace(capsRE, ' $1').split(splitRE)

	    // If we had an initial cap...
	    if (parts[0] === '') {
	      parts.splice(0, 1)
	    }

	    // Give the first word an initial cap and all subsequent words an
	    // initial lowercase if not all caps.
	    for (var i = 0, l = parts.length; i < l; i++) {
	      if (i === 0) {
	        parts[0] = parts[0].charAt(0).toUpperCase() +
	                   parts[0].substr(1)
	      }
	      else if (!allCapsRE.test(parts[i])) {
	        parts[i] = parts[i].charAt(0).toLowerCase() +
	                   parts[i].substr(1)
	      }
	    }

	    return parts.join(' ')
	  }
	})()

	/**
	 * Coerces to string and strips leading and trailing spaces.
	 */
	var strip = function() {
	  var stripRE =/(^\s+|\s+$)/g
	  return function strip(s) {
	    return (''+s).replace(stripRE, '')
	  }
	}()

	/**
	 * From Underscore.js 1.5.2
	 * http://underscorejs.org
	 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * Modified to give the returned function:
	 * - a .cancel() method which prevents the debounced function being called.
	 * - a .trigger() method which calls the debounced function immediately.
	 */
	function debounce(func, wait, immediate) {
	  var timeout, args, context, timestamp, result
	  var debounced = function() {
	    context = this
	    args = arguments
	    timestamp = new Date()
	    var later = function() {
	      var last = (new Date()) - timestamp
	      if (last < wait) {
	        timeout = setTimeout(later, wait - last)
	      } else {
	        timeout = null
	        if (!immediate) { result = func.apply(context, args) }
	      }
	    };
	    var callNow = immediate && !timeout
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    if (callNow) { result = func.apply(context, args) }
	    return result
	  }

	  // Clear any pending timeout
	  debounced.cancel = function() {
	    if (timeout) {
	      clearTimeout(timeout)
	    }
	  }

	  // Clear any pending timeout and execute the function immediately
	  debounced.trigger = function() {
	    debounced.cancel()
	    return func.apply(context, args)
	  }

	  return debounced
	}

	/**
	 * Returns a function with a .cancel() function which can be used to prevent the
	 * given function from being called. If the given function has an onCancel(),
	 * it will be called when it's being cancelled.
	 *
	 * Use case: triggering an asynchronous function with new data while an existing
	 * function for the same task but with old data is still pending a callback, so
	 * the callback only gets called for the last one to run.
	 */
	function cancellable(func) {
	  var cancelled = false

	  var cancellabled = function() {
	    if (!cancelled) {
	      func.apply(null, arguments)
	    }
	  }

	  cancellabled.cancel = function() {
	    cancelled = true
	    if (is.Function(func.onCancel)) {
	      func.onCancel()
	    }
	  }

	  return cancellabled
	}

	/**
	 * Wrapper for getFormData which allows you to pass a React form ref.
	 * @param {HTMLFormElement|ReactElement} form a form element.
	 * @return {Object.<string,(string|Array.<string>)>} an object containing the
	 *    submittable value(s) held in each of the form's elements.
	 */
	function getMaybeReactFormData(form) {
	  if (typeof form.getDOMNode == 'function') {
	    form = form.getDOMNode()
	  }
	  return getFormData(form)
	}

	/**
	 * Extracts data from a <form> and validates it with a list of forms and/or
	 * formsets.
	 * @param form the <form> into which any given forms and formsets have been
	 *   rendered - this can be a React <form> component or a real <form> DOM node.
	 * @param {Array.<(Form|FormSet)>} formsAndFormsets a list of forms and/or
	 *   formsets to be used to validate the <form>'s input data.
	 * @return {boolean} true if the <form>'s input data are valid according to all
	 *   given forms and formsets.
	 */
	function validateAll(form, formsAndFormsets) {
	  var data = getMaybeReactFormData(form)
	  var isValid = true
	  for (var i = 0, l = formsAndFormsets.length; i < l; i++) {
	    if (!formsAndFormsets[i].setFormData(data)) {
	      isValid = false
	    }
	  }
	  return isValid
	}

	/**
	 * Returns true if every form/formset is valid.
	 */
	function allValid(formsOrFormsets) {
	  var valid = true
	  for (var i = 0, l = formsOrFormsets.length; i < l; i++) {
	    if (!formsOrFormsets[i].isValid()) {
	      valid = false
	    }
	  }
	  return valid
	}

	var info = function() {}
	var warning = function() {}

	if ('production' !== process.env.NODE_ENV) {
	  info = function(message) {
	    console.warn('[newforms] ' + message)
	  }
	  warning = function(message) {
	    console.warn('[newforms] Warning: ' + message)
	  }
	}

	function autoIdChecker(props, propName, componentName, location) {
	  var autoId = props.autoId
	  if (props.autoId && !(is.String(autoId) && autoId.indexOf('{name}') != -1)) {
	    return new Error(
	      'Invalid `autoId` ' + location + ' supplied to ' +
	      '`' + componentName + '`. Must be falsy or a String containing a ' +
	      '`{name}` placeholder'
	    )
	  }
	}

	module.exports = {
	  allValid: allValid
	, autoIdChecker: autoIdChecker
	, cancellable: cancellable
	, debounce: debounce
	, info: info
	, formatToArray: formatToArray
	, getFormData: getMaybeReactFormData
	, getProps: getProps
	, makeChoices: makeChoices
	, normaliseChoices: normaliseChoices
	, normaliseValidation: normaliseValidation
	, prettyName: prettyName
	, strip: strip
	, validateAll: validateAll
	, warning: warning
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 172 */
/***/ function(module, exports) {

	'use strict';

	var NODE_LIST_CLASSES = {
	  '[object HTMLCollection]': true
	, '[object NodeList]': true
	, '[object RadioNodeList]': true
	}

	var IGNORED_INPUT_TYPES = {
	  'button': true
	, 'reset': true
	, 'submit': true
	, 'fieldset': true
	}

	var CHECKED_INPUT_TYPES = {
	  'checkbox': true
	, 'radio': true
	}

	var TRIM_RE = /^\s+|\s+$/g

	var slice = Array.prototype.slice
	var toString = Object.prototype.toString

	/**
	 * @param {HTMLFormElement} form
	 * @return {Object.<string,(string|Array.<string>)>} an object containing
	 *   submittable value(s) held in the form's .elements collection, with
	 *   properties named as per element names or ids.
	 */
	function getFormData(form, options) {
	  if (!form) {
	    throw new Error('A form is required by getFormData, was given form=' + form)
	  }

	  if (!options) {
	    options = {trim: false}
	  }

	  var data = {}
	  var elementName
	  var elementNames = []
	  var elementNameLookup = {}

	  // Get unique submittable element names for the form
	  for (var i = 0, l = form.elements.length; i < l; i++) {
	    var element = form.elements[i]
	    if (IGNORED_INPUT_TYPES[element.type] || element.disabled) {
	      continue
	    }
	    elementName = element.name || element.id
	    if (elementName && !elementNameLookup[elementName]) {
	      elementNames.push(elementName)
	      elementNameLookup[elementName] = true
	    }
	  }

	  // Extract element data name-by-name for consistent handling of special cases
	  // around elements which contain multiple inputs.
	  for (i = 0, l = elementNames.length; i < l; i++) {
	    elementName = elementNames[i]
	    var value = getNamedFormElementData(form, elementName, options)
	    if (value != null) {
	      data[elementName] = value
	    }
	  }

	  return data
	}

	/**
	 * @param {HTMLFormElement} form
	 * @param {string} elementName
	 * @return {(string|Array.<string>)} submittable value(s) in the form for a
	 *   named element from its .elements collection, or null if there was no
	 *   element with that name or the element had no submittable value(s).
	 */
	function getNamedFormElementData(form, elementName, options) {
	  if (!form) {
	    throw new Error('A form is required by getNamedFormElementData, was given form=' + form)
	  }
	  if (!elementName && toString.call(elementName) !== '[object String]') {
	    throw new Error('A form element name is required by getNamedFormElementData, was given elementName=' + elementName)
	  }

	  var element = form.elements[elementName]
	  if (!element || element.disabled) {
	    return null
	  }

	  var trim = !!(options && options.trim)

	  if (!NODE_LIST_CLASSES[toString.call(element)]) {
	    return getFormElementValue(element, trim)
	  }

	  // Deal with multiple form controls which have the same name
	  var data = []
	  var allRadios = true
	  for (var i = 0, l = element.length; i < l; i++) {
	    if (element[i].disabled) {
	      continue
	    }
	    if (allRadios && element[i].type !== 'radio') {
	      allRadios = false
	    }
	    var value = getFormElementValue(element[i], trim)
	    if (value != null) {
	      data = data.concat(value)
	    }
	  }

	  // Special case for an element with multiple same-named inputs which were all
	  // radio buttons: if there was a selected value, only return the value.
	  if (allRadios && data.length === 1) {
	    return data[0]
	  }

	  return (data.length > 0 ? data : null)
	}

	/**
	 * @param {HTMLElement} element a form element.
	 * @param {booleam} trim should values for text entry inputs be trimmed?
	 * @return {(string|Array.<string>|File|Array.<File>)} the element's submittable
	 *   value(s), or null if it had none.
	 */
	function getFormElementValue(element, trim) {
	  var value = null

	  if (element.type === 'select-one') {
	    if (element.options.length) {
	      value = element.options[element.selectedIndex].value
	    }
	    return value
	  }

	  if (element.type === 'select-multiple') {
	    value = []
	    for (var i = 0, l = element.options.length; i < l; i++) {
	      if (element.options[i].selected) {
	        value.push(element.options[i].value)
	      }
	    }
	    if (value.length === 0) {
	      value = null
	    }
	    return value
	  }

	  // If a file input doesn't have a files attribute, fall through to using its
	  // value attribute.
	  if (element.type === 'file' && 'files' in element) {
	    if (element.multiple) {
	      value = slice.call(element.files)
	      if (value.length === 0) {
	        value = null
	      }
	    }
	    else {
	      // Should be null if not present, according to the spec
	      value = element.files[0]
	    }
	    return value
	  }

	  if (!CHECKED_INPUT_TYPES[element.type]) {
	    value = (trim ? element.value.replace(TRIM_RE, '') : element.value)
	  }
	  else if (element.checked) {
	    value = element.value
	  }

	  return value
	}

	getFormData.getNamedFormElementData = getNamedFormElementData

	module.exports = getFormData

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var time = __webpack_require__(170)

	var formats = __webpack_require__(174)
	var locales = __webpack_require__(169)

	var Field = __webpack_require__(175)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError
	var $__1=  __webpack_require__(171),strip=$__1.strip

	/**
	 * Base field for fields which validate that their input is a date or time.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var BaseTemporalField = Field.extend({
	  inputFormatType: ''
	, constructor: function BaseTemporalField(kwargs) {
	    kwargs = object.extend({inputFormats: null}, kwargs)
	    Field.call(this, kwargs)
	    this.inputFormats = kwargs.inputFormats
	  }
	})

	/**
	 * Validates that its input is a valid date or time.
	 * @param {(string|Date)} value user input.
	 * @return {Date}
	 * @throws {ValidationError} if the input is invalid.
	 */
	BaseTemporalField.prototype.toJavaScript = function(value) {
	  if (!is.Date(value)) {
	    value = strip(value)
	  }
	  if (is.String(value)) {
	    if (this.inputFormats === null) {
	      this.inputFormats = formats.getFormat(this.inputFormatType)
	    }
	    for (var i = 0, l = this.inputFormats.length; i < l; i++) {
	      try {
	        return this.strpdate(value, this.inputFormats[i])
	      }
	      catch (e) {
	        // pass
	      }
	    }
	  }
	  throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	}

	/**
	 * Creates a Date from the given input if it's valid based on a format.
	 * @param {string} value
	 * @param {string} format
	 * @return {Date}
	 */
	BaseTemporalField.prototype.strpdate = function(value, format) {
	  return time.strpdate(value, format, locales.getDefaultLocale())
	}

	BaseTemporalField.prototype._hasChanged = function(initial, data) {
	  try {
	    data = this.toJavaScript(data)
	  }
	  catch (e) {
	    if (!(e instanceof ValidationError)) { throw e }
	    return true
	  }
	  initial = this.toJavaScript(initial)
	  if (!!initial && !!data) {
	    return initial.getTime() !== data.getTime()
	  }
	  else {
	    return initial !== data
	  }
	}


	module.exports = BaseTemporalField

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var locales = __webpack_require__(169)

	/**
	 * Standard input formats which will always be accepted.
	 */
	var ISO_INPUT_FORMATS = {
	  'DATE_INPUT_FORMATS': ['%Y-%m-%d']
	, 'TIME_INPUT_FORMATS': ['%H:%M:%S', '%H:%M']
	, 'DATETIME_INPUT_FORMATS': [
	    '%Y-%m-%d %H:%M:%S'
	  , '%Y-%m-%d %H:%M'
	  , '%Y-%m-%d'
	  ]
	}

	var formatCache = {}

	/**
	 * Gets all acceptable formats of a certain type (e.g. DATE_INPUT_FORMATS) for a
	 * particular language code. All date/time formats will have the applicable ISO
	 * formats added as lowest-precedence.
	 * If an unknown language code is given, the default locale's formats will be
	 * used instead.
	 * If the locale doesn't have configuration for the format type, only the ISO
	 * formats will be returned.
	 * @param {string} formatType
	 * @param {string=} lang language code - if not given, the default locale's
	 *   formats will be returned.
	 * @return {Array.<string>} a list of formats
	 */
	function getFormat(formatType, lang) {
	  if (!lang) {
	    lang = locales.getDefaultLocale()
	  }
	  var cacheKey = formatType + ':' + lang
	  if (!object.hasOwn(formatCache, cacheKey)) {
	    var langLocales = locales.getLocales(lang)
	    var localeFormats = []
	    for (var i = 0, l = langLocales.length; i < l; i++) {
	      var locale = langLocales[i]
	      if (object.hasOwn(locale, formatType)) {
	        // Copy locale-specific formats, as we may be adding to them
	        localeFormats = locale[formatType].slice()
	        break
	      }
	    }
	    if (object.hasOwn(ISO_INPUT_FORMATS, formatType)) {
	      var isoFormats = ISO_INPUT_FORMATS[formatType]
	      for (var j = 0, m = isoFormats.length; j < m; j++) {
	        var isoFormat = isoFormats[j]
	        if (localeFormats.indexOf(isoFormat) == -1) {
	          localeFormats.push(isoFormat)
	        }
	      }
	    }
	    formatCache[cacheKey] = localeFormats
	  }
	  return formatCache[cacheKey]
	}

	module.exports = {
	  getFormat: getFormat
	}


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var HiddenInput = __webpack_require__(176)
	var Widget = __webpack_require__(178)
	var TextInput = __webpack_require__(180)

	var $__0=   __webpack_require__(158),EMPTY_VALUES=$__0.EMPTY_VALUES,ValidationError=$__0.ValidationError
	var $__1=  __webpack_require__(171),normaliseValidation=$__1.normaliseValidation

	/**
	 * An object that is responsible for doing validation and normalisation, or
	 * "cleaning", for example: an EmailField makes sure its data is a valid
	 * e-mail address and makes sure that acceptable "blank" values all have the
	 * same representation.
	 * @constructor
	 * @param {Object=} kwargs
	 */
	var Field = Concur.extend({
	  widget: TextInput         // Default widget to use when rendering this type of Field
	, hiddenWidget: HiddenInput // Default widget to use when rendering this as "hidden"
	, defaultValidators: []             // Default list of validators
	  // Add an 'invalid' entry to defaultErrorMessages if you want a specific
	  // field error message not raised by the field validators.
	, defaultErrorMessages: {
	    required: 'This field is required.'
	  }
	, emptyValues: EMPTY_VALUES.slice()
	, emptyValueArray: true // Should isEmptyValue check for empty Arrays?

	, constructor: function Field(kwargs) {
	    kwargs = object.extend({
	      required: true, widget: null, label: null, initial: null,
	      helpText: null, errorMessages: null, showHiddenInitial: false,
	      validators: [], cssClass: null, validation: null, controlled: null,
	      custom: null, widgetAttrs: {}
	    }, kwargs)
	    this.required = kwargs.required
	    this.label = kwargs.label
	    this.initial = kwargs.initial
	    this.showHiddenInitial = kwargs.showHiddenInitial
	    this.helpText = kwargs.helpText || ''
	    this.cssClass = kwargs.cssClass
	    this.validation = normaliseValidation(kwargs.validation)
	    this.controlled = kwargs.controlled
	    this.custom = kwargs.custom
	    this.widgetAttrs = kwargs.widgetAttrs

	    var widget = kwargs.widget || this.widget
	    if (!(widget instanceof Widget)) {
	      // We must have a Widget constructor, so construct with it
	      widget = new widget()
	    }
	    // Let the widget know whether it should display as required
	    widget.isRequired = this.required
	    // Hook into this.getWidgetAttrs() for any Field-specific HTML attributes
	    object.extend(widget.attrs, this.getWidgetAttrs(widget))
	    this.widget = widget

	    // Increment the creation counter and save our local copy
	    this.creationCounter = Field.creationCounter++

	    // Copy error messages for this instance into a new object and override
	    // with any provided error messages.
	    var messages = [{}]
	    for (var i = this.constructor.__mro__.length - 1; i >=0; i--) {
	      messages.push(object.get(this.constructor.__mro__[i].prototype,
	                               'defaultErrorMessages', null))
	    }
	    messages.push(kwargs.errorMessages)
	    this.errorMessages = object.extend.apply(object, messages)

	    this.validators = this.defaultValidators.concat(kwargs.validators)
	  }
	})

	/**
	 * Tracks each time a Field instance is created; used to retain order.
	 */
	Field.creationCounter = 0

	Field.prototype.prepareValue = function(value) {
	  return value
	}

	/**
	 * @param {*} value user input.
	 * @throws {ValidationError} if the input is invalid.
	 */
	Field.prototype.toJavaScript = function(value) {
	  return value
	}

	/**
	 * Checks for the given value being === one of the configured empty values, plus
	 * any additional checks required due to JavaScript's lack of a generic object
	 * equality checking mechanism.
	 */
	Field.prototype.isEmptyValue = function(value) {
	  if (this.emptyValues.indexOf(value) != -1) {
	    return true
	  }
	  return (this.emptyValueArray === true && is.Array(value) && value.length === 0)
	}

	Field.prototype.validate = function(value) {
	  if (this.required && this.isEmptyValue(value)) {
	    throw ValidationError(this.errorMessages.required, {code: 'required'})
	  }
	}

	Field.prototype.runValidators = function(value) {
	  if (this.isEmptyValue(value)) {
	    return
	  }
	  var errors = []
	  for (var i = 0, l = this.validators.length; i < l; i++) {
	    var validator = this.validators[i]
	    try {
	      validator(value)
	    }
	    catch (e) {
	      if (!(e instanceof ValidationError)) { throw e }
	      if (object.hasOwn(e, 'code') &&
	          object.hasOwn(this.errorMessages, e.code)) {
	        e.message = this.errorMessages[e.code]
	      }
	      errors.push.apply(errors, e.errorList)
	    }
	  }
	  if (errors.length > 0) {
	    throw ValidationError(errors)
	  }
	}

	/**
	 * Validates the given value and returns its "cleaned" value as an appropriate
	 * JavaScript object.
	 * @param {string} value user input.
	 * @throws {ValidationError} if the input is invalid.
	 */
	Field.prototype.clean = function(value) {
	  value = this.toJavaScript(value)
	  this.validate(value)
	  this.runValidators(value)
	  return value
	}

	/**
	 * Return the value that should be shown for this field on render of a bound
	 * form, given the submitted data for the field and the initial data, if any.
	 * For most fields, this will simply be data; FileFields need to handle it a bit
	 * differently.
	 */
	Field.prototype.boundData = function(data, initial) {
	  return data
	}

	/**
	 * Specifies HTML attributes which should be added to a given widget for this
	 * field.
	 * @param {Widget} widget a widget.
	 * @return {Object} an object specifying HTML attributes that should be added to
	 *   the given widget when rendered, based on this field.
	 */
	Field.prototype.getWidgetAttrs = function(widget) {
	  return object.extend({}, this.widgetAttrs)
	}

	/**
	 * @return {boolean} true if data differs from initial.
	 */
	Field.prototype._hasChanged = function(initial, data) {
	  // For purposes of seeing whether something has changed, null is the same
	  // as an empty string, if the data or initial value we get is null, replace
	  // it with ''.
	  var initialValue = (initial === null ? '' : initial)
	  try {
	    data = this.toJavaScript(data)
	    if (typeof this._coerce == 'function') {
	      data = this._coerce(data)
	    }
	  }
	  catch (e) {
	    if (!(e instanceof ValidationError)) { throw e }
	    return true
	  }
	  var dataValue = (data === null ? '' : data)
	  return (''+initialValue != ''+dataValue) // TODO is forcing to string necessary?
	}

	module.exports = Field

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Input = __webpack_require__(177)

	/**
	 * An HTML <input type="hidden"> widget.
	 * @constructor
	 * @extends {Input}
	 * @param {Object=} kwargs
	 */
	var HiddenInput = Input.extend({
	  constructor: function HiddenInput(kwargs) {
	    if (!(this instanceof HiddenInput)) { return new HiddenInput(kwargs) }
	    Input.call(this, kwargs)
	  }
	, inputType: 'hidden'
	, isHidden: true
	})

	module.exports = HiddenInput

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var Widget = __webpack_require__(178)

	/**
	 * An HTML <input> widget.
	 * @constructor
	 * @extends {Widget}
	 * @param {Object=} kwargs
	 */
	var Input = Widget.extend({
	  constructor: function Input(kwargs) {
	    if (!(this instanceof Input)) { return new Input(kwargs) }
	    Widget.call(this, kwargs)
	  }
	  /** The type attribute of this input - subclasses must define it. */
	, inputType: null
	})

	Input.prototype._formatValue = function(value) {
	  return value
	}

	Input.prototype.render = function(name, value, kwargs) {
	  kwargs = object.extend({attrs: null}, kwargs)
	  if (value === null) {
	    value = ''
	  }
	  var finalAttrs = this.buildAttrs(kwargs.attrs, {type: this.inputType,
	                                                  name: name})
	  // Hidden inputs can be made controlled inputs by default, as the user
	  // can't directly interact with them.
	  var valueAttr = (kwargs.controlled || this.isHidden ? 'value' : 'defaultValue')
	  if (!(valueAttr == 'defaultValue' && value === '')) {
	    finalAttrs[valueAttr] = (value !== '' ? ''+this._formatValue(value) : value)
	  }
	  return React.createElement('input', finalAttrs)
	}

	module.exports = Input

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var object = __webpack_require__(162)
	var SubWidget = __webpack_require__(179)

	/**
	 * An HTML form widget.
	 * @constructor
	 * @param {Object=} kwargs
	 */
	var Widget = Concur.extend({
	  constructor: function Widget(kwargs) {
	    kwargs = object.extend({attrs: null}, kwargs)
	    this.attrs = object.extend({}, kwargs.attrs)
	  }
	  /** Determines whether this corresponds to an <input type="hidden">. */
	, isHidden: false
	  /** Determines whether this widget needs a multipart-encoded form. */
	, needsMultipartForm: false
	  /** Determines whether this widget is for a required field. */
	, isRequired: false
	  /** Override for active validation config a particular widget needs to use. */
	, validation: null
	  /** Determines whether this widget's render logic always needs to use the initial value. */
	, needsInitialValue: false
	  /** Determines whether this widget's value can be set. */
	, isValueSettable: true
	})

	/**
	 * Yields all "subwidgets" of this widget. Used only by RadioSelect to
	 * allow access to individual <input type="radio"> buttons.
	 * Arguments are the same as for render().
	 * @return {Array.<SubWidget>}
	 */
	Widget.prototype.subWidgets = function(name, value, kwargs) {
	  return [SubWidget(this, name, value, kwargs)]
	}

	/**
	 * Returns this Widget rendered as HTML.
	 * The value given is not guaranteed to be valid input, so subclass
	 * implementations should program defensively.
	 * @abstract
	 */
	Widget.prototype.render = function(name, value, kwargs) {
	  throw new Error('Constructors extending Widget must implement a render() method.')
	}

	/**
	 * Helper function for building an HTML attributes object.
	 */
	Widget.prototype.buildAttrs = function(kwargAttrs, renderAttrs) {
	  return object.extend({}, this.attrs, renderAttrs, kwargAttrs)
	}

	/**
	 * Retrieves a value for this widget from the given data.
	 * @param {Object} data form data.
	 * @param {Object} files file data.
	 * @param {string} name the field name to be used to retrieve data.
	 * @return a value for this widget, or null if no value was provided.
	 */
	Widget.prototype.valueFromData = function(data, files, name) {
	  return object.get(data, name, null)
	}

	/**
	 * Determines the HTML id attribute of this Widget for use by a
	 * <label>, given the id of the field.
	 * This hook is necessary because some widgets have multiple HTML elements and,
	 * thus, multiple ids. In that case, this method should return an ID value that
	 * corresponds to the first id in the widget's tags.
	 * @param {string} id a field id.
	 * @return {string} the id which should be used by a <label> for this Widget.
	 */
	Widget.prototype.idForLabel = function(id) {
	  return id
	}

	module.exports = Widget

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var object = __webpack_require__(162)

	/**
	 * Some widgets are made of multiple HTML elements -- namely, RadioSelect.
	 * This represents the "inner" HTML element of a widget.
	 * @constructor
	 */
	var SubWidget = Concur.extend({
	  constructor: function SubWidget(parentWidget, name, value, kwargs) {
	    if (!(this instanceof SubWidget)) {
	      return new SubWidget(parentWidget, name, value, kwargs)
	    }
	    this.parentWidget = parentWidget
	    this.name = name
	    this.value = value
	    kwargs = object.extend({attrs: null, choices: []}, kwargs)
	    this.attrs = kwargs.attrs
	    this.choices = kwargs.choices
	  }
	})

	SubWidget.prototype.render = function() {
	  var kwargs = {attrs: this.attrs}
	  if (this.choices.length) {
	    kwargs.choices = this.choices
	  }
	  return this.parentWidget.render(this.name, this.value, kwargs)
	}

	module.exports = SubWidget

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var Input = __webpack_require__(177)

	/**
	 * An HTML <input type="text"> widget.
	 * @constructor
	 * @extends {Input}
	 * @param {Object=} kwargs
	 */
	var TextInput = Input.extend({
	  constructor: function TextInput(kwargs) {
	    if (!(this instanceof TextInput)) { return new TextInput(kwargs) }
	    kwargs = object.extend({attrs: null}, kwargs)
	    if (kwargs.attrs != null) {
	      this.inputType = object.pop(kwargs.attrs, 'type', this.inputType)
	    }
	    Input.call(this, kwargs)
	  }
	, inputType: 'text'
	})

	module.exports = TextInput

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)

	var CheckboxInput = __webpack_require__(182)
	var Field = __webpack_require__(175)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * Normalises its input to a Boolean primitive.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var BooleanField = Field.extend({
	  widget: CheckboxInput

	, constructor: function BooleanField(kwargs) {
	    if (!(this instanceof BooleanField)) { return new BooleanField(kwargs) }
	    Field.call(this, kwargs)
	  }
	})

	BooleanField.prototype.toJavaScript = function(value) {
	  // Explicitly check for a 'false' string, which is what a hidden field will
	  // submit for false. Also check for '0', since this is what RadioSelect will
	  // provide. Because Boolean('anything') == true, we don't need to handle that
	  // explicitly.
	  if (is.String(value) && (value.toLowerCase() == 'false' || value == '0')) {
	    value = false
	  }
	  else {
	    value = Boolean(value)
	  }
	  value = Field.prototype.toJavaScript.call(this, value)
	  if (!value && this.required) {
	    throw ValidationError(this.errorMessages.required, {code: 'required'})
	  }
	  return value
	}

	BooleanField.prototype._hasChanged = function(initial, data) {
	  // Sometimes data or initial could be null or '' which should be the same
	  // thing as false.
	  if (initial === 'false') {
	    // showHiddenInitial may have transformed false to 'false'
	    initial = false
	  }
	  return (Boolean(initial) != Boolean(data))
	}

	module.exports = BooleanField

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var Widget = __webpack_require__(178)

	function defaultCheckTest(value) {
	  return (value !== false && value != null && value !== '')
	}

	/**
	 * An HTML <input type="checkbox"> widget.
	 * @constructor
	 * @extends {Widget}
	 * @param {Object=} kwargs
	 */
	var CheckboxInput = Widget.extend({
	  constructor: function CheckboxInput(kwargs) {
	    if (!(this instanceof Widget)) { return new CheckboxInput(kwargs) }
	    kwargs = object.extend({checkTest: defaultCheckTest}, kwargs)
	    Widget.call(this, kwargs)
	    this.checkTest = kwargs.checkTest
	  }
	, validation: {onChange: true}
	})

	CheckboxInput.prototype.render = function(name, value, kwargs) {
	  kwargs = object.extend({}, kwargs)
	  var finalAttrs = this.buildAttrs(kwargs.attrs, {type: 'checkbox',
	                                                  name: name})
	  if (value !== '' && value !== true && value !== false && value !== null &&
	      value !== undefined) {
	    // Only add the value attribute if value is non-empty
	    finalAttrs.value = value
	  }
	  var checkedAttr = (kwargs.controlled ? 'checked' : 'defaultChecked')
	  finalAttrs[checkedAttr] = this.checkTest(value)
	  return React.createElement('input', finalAttrs)
	}

	CheckboxInput.prototype.valueFromData = function(data, files, name) {
	  if (typeof data[name] == 'undefined') {
	    //  A missing value means False because HTML form submission does not
	    // send results for unselected checkboxes.
	    return false
	  }
	  var value = data[name]
	  var values = {'true': true, 'false': false}
	  // Translate true and false strings to boolean values
	  if (is.String(value)) {
	    value = object.get(values, value.toLowerCase(), value)
	  }
	  return !!value
	}

	module.exports = CheckboxInput

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var is = __webpack_require__(161)
	var format = __webpack_require__(167).formatObj
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var TextInput = __webpack_require__(180)
	var Textarea = __webpack_require__(184)

	var $__0=  __webpack_require__(171),prettyName=$__0.prettyName

	/**
	 * A helper for rendering a field.
	 * @param {Form} form the form instance which the field is a part of.
	 * @param {Field} field the field to be rendered.
	 * @param {string} name the name associated with the field in the form.
	 * @constructor
	 */
	var BoundField = Concur.extend({
	  constructor: function BoundField(form, field, name) {
	    if (!(this instanceof BoundField)) { return new BoundField(form, field, name) }
	    this.form = form
	    this.field = field
	    this.name = name
	    this.htmlName = form.addPrefix(name)
	    this.htmlInitialName = form.addInitialPrefix(name)
	    this.htmlInitialId = form.addInitialPrefix(this.autoId())
	    this.label = this.field.label !== null ? this.field.label : prettyName(name)
	    this.helpText = field.helpText || ''
	  }
	})

	// ================================================================== Status ===

	/**
	 * @return {boolean} true if the value which will be displayed in the field's
	 *   widget is empty.
	 */
	BoundField.prototype.isEmpty = function() {
	  return this.field.isEmptyValue(this.value())
	}

	/**
	 * @return {boolean} true if the field has a pending async validation.
	 */
	BoundField.prototype.isPending = function() {
	  return typeof this.form._pendingAsyncValidation[this.name] != 'undefined'
	}

	/**
	 * @return {boolean} true if the field has some data in its form's cleanedData.
	 */
	BoundField.prototype.isCleaned = function() {
	  return typeof this.form.cleanedData[this.name] != 'undefined'
	}

	/**
	 * @return {boolean} true if the field's widget will render hidden field(s).
	 */
	BoundField.prototype.isHidden = function() {
	  return this.field.widget.isHidden
	}

	/**
	 * Determines the field's curent status in the form. Statuses are determined in
	 * the following order:
	 * * 'pending' - the field has a pending async validation.
	 * * 'error' - the field has a validation error.
	 * * 'valid' - the field has a value in form.cleanedData.
	 * * 'default' - the field meets none of the above criteria, e.g. it's been
	 *   rendered but hasn't been interacted with or validated yet.
	 * @return {string}
	 */
	BoundField.prototype.status = function() {
	  if (this.isPending()) { return 'pending' }
	  if (this.errors().isPopulated()) { return 'error' }
	  if (this.isCleaned()) { return 'valid' }
	  return 'default'
	}

	// ============================================================== Field Data ===

	/**
	 * Calculates and returns the id attribute for this BoundField if the associated
	 * form has an autoId. Returns an empty string otherwise.
	 */
	BoundField.prototype.autoId = function() {
	  var autoId = this.form.autoId
	  if (autoId) {
	    autoId = ''+autoId
	    if (autoId.indexOf('{name}') != -1) {
	      return format(autoId, {name: this.htmlName})
	    }
	    return this.htmlName
	  }
	  return ''
	}

	/**
	 * @return {*} user input data for the field, or null if none has been given.
	 */
	BoundField.prototype.data = function() {
	  return this.field.widget.valueFromData(this.form.data,
	                                         this.form.files,
	                                         this.htmlName)
	}

	/**
	 * @return {ErrorObject} errors for the field, which may be empty.
	 */
	BoundField.prototype.errors = function() {
	  return this.form.errors(this.name) || new this.form.errorConstructor()
	}

	/**
	 * @return {string=} the first error message for the field, or undefined if
	 *   there were none.
	 */
	BoundField.prototype.errorMessage = function() {
	  return this.errors().first()
	}

	/**
	 * @return {Array.<string>} all error messages for the field, will be empty if
	 *   there were none.
	 */
	BoundField.prototype.errorMessages = function() {
	  return this.errors().messages()
	}

	/**
	 * Gets or generates an id for the field's <label>.
	 * @return {string}
	 */
	BoundField.prototype.idForLabel = function() {
	  var widget = this.field.widget
	  var id = object.get(widget.attrs, 'id', this.autoId())
	  return widget.idForLabel(id)
	}

	/**
	 * @return {*} the value to be displayed in the field's widget.
	 */
	BoundField.prototype.value = function() {
	  var data
	  if (this.form.isInitialRender) {
	    data = this.initialValue()
	  }
	  else {
	    data = this.field.boundData(this.data(),
	                                object.get(this.form.initial,
	                                           this.name,
	                                           this.field.initial))
	  }
	  return this.field.prepareValue(data)
	}

	/**
	 * @return {*} the initial value for the field, will be null if none was
	 *   configured on the field or given to the form.
	 */
	BoundField.prototype.initialValue = function() {
	  var value = object.get(this.form.initial, this.name, this.field.initial)
	  if (is.Function(value)) {
	    value = value()
	  }
	  return value
	}

	// =============================================================== Rendering ===

	/**
	 * Renders a widget for the field.
	 * @param {Object=} kwargs widgets options.
	 * @param {Widget} kwargs.widget an override for the widget used to render the
	 *   field - if not provided, the field's configured widget will be used.
	 * @param {Object} kwargs.attrs additional attributes to be added to the field's
	 *   widget.
	 * @return {ReactElement}
	 */
	BoundField.prototype.asWidget = function(kwargs) {
	  kwargs = object.extend({
	    widget: null, attrs: null, onlyInitial: false
	  }, kwargs)
	  var widget = (kwargs.widget !== null ? kwargs.widget : this.field.widget)
	  var attrs = (kwargs.attrs !== null ? kwargs.attrs : {})
	  var autoId = this.autoId()
	  var name = !kwargs.onlyInitial ? this.htmlName : this.htmlInitialName
	  if (autoId &&
	      typeof attrs.id == 'undefined' &&
	      typeof widget.attrs.id == 'undefined') {
	    attrs.id = (!kwargs.onlyInitial ? autoId : this.htmlInitialId)
	  }
	  if (typeof attrs.key == 'undefined') {
	    attrs.key = name
	  }
	  var controlled = this._isControlled(widget)
	  var validation = this._validation(widget)

	  // Always Add an onChange event handler to update form.data when the field is
	  // changed.
	  attrs.onChange = this.form._handleFieldEvent.bind(this.form, {
	    event: 'onChange'
	  , validate: !!validation.onChange
	  , delay: validation.onChangeDelay
	  })

	  // If validation should happen on events other than onChange, also add event
	  // handlers for them.
	  if (validation != 'manual' && validation.events) {
	    for (var i = 0, l = validation.events.length; i < l; i++) {
	      var eventName = validation.events[i]
	      attrs[eventName] =
	        this.form._handleFieldEvent.bind(this.form, {event: eventName})
	    }
	  }

	  var renderKwargs = {attrs: attrs, controlled: controlled}
	  if (widget.needsInitialValue) {
	    renderKwargs.initialValue = this.initialValue()
	  }
	  return widget.render(name, this.value(), renderKwargs)
	}

	/**
	 * Renders the field as a hidden field.
	 * @param {Object=} kwargs widget options.
	 * @return {ReactElement}
	 */
	BoundField.prototype.asHidden = function(kwargs) {
	  kwargs = object.extend({}, kwargs, {widget: new this.field.hiddenWidget()})
	  return this.asWidget(kwargs)
	}

	/**
	 * Renders the field as a text input.
	 * @param {Object=} kwargs widget options.
	 * @return {ReactElement}
	 */
	BoundField.prototype.asText = function(kwargs) {
	  kwargs = object.extend({}, kwargs, {widget: TextInput()})
	  return this.asWidget(kwargs)
	}

	/**
	 * Renders the field as a textarea.
	 * @param {Object=} kwargs widget options.
	 * @return {ReactElement}
	 */
	BoundField.prototype.asTextarea = function(kwargs) {
	  kwargs = object.extend({}, kwargs, {widget: Textarea()})
	  return this.asWidget(kwargs)
	}

	/**
	 * Determines CSS classes for this field based on what's configured in the field
	 * and form, and the field's current status.
	 * @param {string=} extraCssClasses additional CSS classes for the field.
	 * @return {string} space-separated CSS classes for this field.
	 */
	BoundField.prototype.cssClasses = function(extraCssClasses) {
	  var cssClasses = (extraCssClasses ? [extraCssClasses] : [])

	  // Field/row classes
	  if (this.field.cssClass !== null) {
	    cssClasses.push(this.field.cssClass)
	  }
	  if (typeof this.form.rowCssClass != 'undefined') {
	    cssClasses.push(this.form.rowCssClass)
	  }

	  // Status class
	  var status = this.status()
	  if (typeof this.form[status + 'CssClass'] != 'undefined') {
	    cssClasses.push(this.form[status + 'CssClass'])
	  }

	  // Required-ness classes
	  if (this.field.required) {
	    if (typeof this.form.requiredCssClass != 'undefined') {
	      cssClasses.push(this.form.requiredCssClass)
	    }
	  }
	  else if (typeof this.form.optionalCssClass != 'undefined') {
	    cssClasses.push(this.form.optionalCssClass)
	  }

	  return cssClasses.join(' ')
	}

	/**
	 * Renders a tag containing help text for the field.
	 * @param {Object=} kwargs configuration options.
	 * @param {string} kwargs.tagName allows overriding the type of tag - defaults
	 *   to 'span'.
	 * @param {string} kwargs.contents help text contents - if not provided,
	 *   contents will be taken from the field itself. To render raw HTML in help
	 *   text, it should be specified using the React convention for raw HTML,
	 *   which is to provide an object with a __html property.
	 * @param {Object} kwargs.attrs additional attributes to be added to the tag -
	 *   by default it will get a className of 'helpText'
	 * @return {ReactElement}
	 */
	BoundField.prototype.helpTextTag = function(kwargs) {
	  kwargs = object.extend({
	    tagName: 'span', attrs: null, contents: this.helpText
	  }, kwargs)
	  if (kwargs.contents) {
	    var attrs = object.extend({className: 'helpText'}, kwargs.attrs)
	    var contents = kwargs.contents
	    if (is.Object(contents) && object.hasOwn(contents, '__html')) {
	      attrs.dangerouslySetInnerHTML = contents
	      return React.createElement(kwargs.tagName, attrs)
	    }
	    return React.createElement(kwargs.tagName, attrs, contents)
	  }
	}

	/**
	 * Wraps the given contents in a <label> if the field has an id attribute. If
	 * contents aren't given, uses the field's label.
	 * If attrs are given, they're used as HTML attributes on the <label> tag.
	 * @param {Object=} kwargs configuration options.
	 * @param {string} kwargs.contents contents for the label - if not provided,
	 *   label contents will be generated from the field itself.
	 * @param {Object} kwargs.attrs additional attributes to be added to the label.
	 * @param {string} kwargs.labelSuffix allows overriding the form's labelSuffix.
	 * @return {ReactElement}
	 */
	BoundField.prototype.labelTag = function(kwargs) {
	  kwargs = object.extend({
	    contents: this.label, attrs: null, labelSuffix: this.form.labelSuffix
	  }, kwargs)
	  var contents = this._addLabelSuffix(kwargs.contents, kwargs.labelSuffix)
	  var widget = this.field.widget
	  var id = object.get(widget.attrs, 'id', this.autoId())
	  if (id) {
	    var attrs = object.extend(kwargs.attrs || {}, {htmlFor: widget.idForLabel(id)})
	    contents = React.createElement('label', attrs, contents)
	  }
	  return contents
	}

	/**
	 * @return {ReactElement}
	 */
	BoundField.prototype.render = function(kwargs) {
	  if (this.field.showHiddenInitial) {
	    return React.createElement('div', null, this.asWidget(kwargs),
	                               this.asHidden({onlyInitial: true}))
	  }
	  return this.asWidget(kwargs)
	}

	/**
	 * Returns a list of SubWidgets that comprise all widgets in this BoundField.
	 * This really is only useful for RadioSelect and CheckboxSelectMultiple
	 * widgets, so that you can iterate over individual inputs when rendering.
	 * @return {Array.<SubWidget>}
	 */
	BoundField.prototype.subWidgets = function() {
	  var id = this.field.widget.attrs.id || this.autoId()
	  var kwargs = {attrs: {}}
	  if (id) {
	    kwargs.attrs.id = id
	  }
	  return this.field.widget.subWidgets(this.htmlName, this.value(), kwargs)
	}

	/**
	 * @return {string}
	 */
	BoundField.prototype._addLabelSuffix = function(label, labelSuffix) {
	  // Only add the suffix if the label does not end in punctuation
	  if (labelSuffix && ':?.!'.indexOf(label.charAt(label.length - 1)) == -1) {
	    return label + labelSuffix
	  }
	  return label
	}

	/**
	 * Determines if the widget should be a controlled or uncontrolled React
	 * component.
	 * @return {boolean}
	 */
	BoundField.prototype._isControlled = function(widget) {
	  if (arguments.length === 0) {
	    widget = this.field.widget
	  }
	  var controlled = false
	  if (widget.isValueSettable) {
	    // If the field has any controlled config set, it should take precedence,
	    // otherwise use the form's as it has a default.
	    controlled = (this.field.controlled !== null
	                  ? this.field.controlled
	                  : this.form.controlled)
	  }
	  return controlled
	}

	/**
	 * Gets the configured validation for the field or form, allowing the widget
	 * which is going to be rendered to override it if necessary.
	 * @param {Widget=} widget
	 * @return {?(Object|string)}
	 */
	BoundField.prototype._validation = function(widget) {
	  if (arguments.length === 0) {
	    widget = this.field.widget
	  }
	  // If the field has any validation config set, it should take precedence,
	  // otherwise use the form's as it has a default.
	  var validation = this.field.validation || this.form.validation
	  // Allow widgets to override the type of validation that's used for them -
	  // primarily for inputs which can only be changed by click/selection.
	  if (validation !== 'manual' && widget.validation !== null) {
	    validation = widget.validation
	  }
	  return validation
	}

	module.exports = BoundField

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var Widget = __webpack_require__(178)

	/**
	 * An HTML <textarea> widget.
	 * @param {Object} [kwargs] configuration options
	 * @config {object} [attrs] HTML attributes for the rendered widget. Default
	 *   rows and cols attributes will be used if not provided.
	 * @constructor
	 * @extends {Widget}
	 * @param {Object=} kwargs
	 */
	var Textarea = Widget.extend({
	  constructor: function Textarea(kwargs) {
	    if (!(this instanceof Textarea)) { return new Textarea(kwargs) }
	    // Ensure we have something in attrs
	    kwargs = object.extend({attrs: null}, kwargs)
	    // Provide default 'cols' and 'rows' attributes
	    kwargs.attrs = object.extend({rows: '3', cols: '40'}, kwargs.attrs)
	    Widget.call(this, kwargs)
	  }
	})

	Textarea.prototype.render = function(name, value, kwargs) {
	  kwargs = object.extend({}, kwargs)
	  if (value === null) {
	    value = ''
	  }
	  var finalAttrs = this.buildAttrs(kwargs.attrs, {name: name})
	  var valueAttr = (kwargs.controlled ? 'value' : 'defaultValue')
	  finalAttrs[valueAttr] = value
	  return React.createElement('textarea', finalAttrs)
	}

	module.exports = Textarea

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var Field = __webpack_require__(175)
	var PasswordInput = __webpack_require__(186)
	var TextInput = __webpack_require__(180)

	var $__0=   __webpack_require__(158),MinLengthValidator=$__0.MinLengthValidator,MaxLengthValidator=$__0.MaxLengthValidator

	/**
	 * Validates that its input is a valid String.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var CharField = Field.extend({
	  constructor: function CharField(kwargs) {
	    if (!(this instanceof CharField)) { return new CharField(kwargs) }
	    kwargs = object.extend({maxLength: null, minLength: null}, kwargs)
	    this.maxLength = kwargs.maxLength
	    this.minLength = kwargs.minLength
	    Field.call(this, kwargs)
	    if (this.minLength !== null) {
	      this.validators.push(MinLengthValidator(this.minLength))
	    }
	    if (this.maxLength !== null) {
	      this.validators.push(MaxLengthValidator(this.maxLength))
	    }
	  }
	})

	/**
	 * @return {string}
	 */
	CharField.prototype.toJavaScript = function(value) {
	  if (this.isEmptyValue(value)) {
	    return ''
	  }
	  return ''+value
	}

	/**
	 * If this field is configured to enforce a maximum length, adds a suitable
	 * maxLength attribute to text input fields.
	 * @param {Widget} widget the widget being used to render this field's value.
	 * @return {Object} additional attributes which should be added to the widget.
	 */
	CharField.prototype.getWidgetAttrs = function(widget) {
	  var attrs = Field.prototype.getWidgetAttrs.call(this, widget)
	  if (this.maxLength !== null && (widget instanceof TextInput ||
	                                  widget instanceof PasswordInput)) {
	    attrs.maxLength = ''+this.maxLength
	  }
	  return attrs
	}

	module.exports = CharField

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var env = __webpack_require__(187)
	var TextInput = __webpack_require__(180)

	/**
	 * An HTML <input type="password"> widget.
	 * @constructor
	 * @extends {TextInput}
	 * @param {Object=} kwargs
	 */
	var PasswordInput = TextInput.extend({
	  constructor: function PasswordInput(kwargs) {
	    if (!(this instanceof PasswordInput)) { return new PasswordInput(kwargs) }
	    kwargs = object.extend({renderValue: false}, kwargs)
	    TextInput.call(this, kwargs)
	    this.renderValue = kwargs.renderValue
	  }
	, inputType: 'password'
	})

	PasswordInput.prototype.render = function(name, value, kwargs) {
	  if (!env.browser && !this.renderValue) {
	    value = ''
	  }
	  return TextInput.prototype.render.call(this, name, value, kwargs)
	}

	module.exports = PasswordInput

/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  browser: typeof window != 'undefined'
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)

	var ChoiceInput = __webpack_require__(189)

	var CheckboxChoiceInput = ChoiceInput.extend({
	  constructor: function CheckboxChoiceInput(name, value, attrs, controlled, choice, index) {
	    if (!(this instanceof CheckboxChoiceInput)) {
	      return new CheckboxChoiceInput(name, value, attrs, controlled, choice, index)
	    }
	    if (!is.Array(value)) {
	      value = [value]
	    }
	    ChoiceInput.call(this, name, value, attrs, controlled, choice, index)
	    for (var i = 0, l = this.value.length; i < l; i++) {
	      this.value[i] = ''+this.value[i]
	    }
	  }
	, inputType: 'checkbox'
	})

	CheckboxChoiceInput.prototype.isChecked = function() {
	  return this.value.indexOf(this.choiceValue) !== -1
	}

	module.exports = CheckboxChoiceInput

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var SubWidget = __webpack_require__(179)
	var Widget = __webpack_require__(178)

	/**
	 * An object used by ChoiceFieldRenderer that represents a single
	 * <input>.
	 */
	var ChoiceInput = SubWidget.extend({
	  constructor: function ChoiceInput(name, value, attrs, controlled, choice, index) {
	    this.name = name
	    this.value = value
	    this.attrs = attrs
	    this.controlled = controlled
	    this.choiceValue = ''+choice[0]
	    this.choiceLabel = ''+choice[1]
	    this.index = index
	    if (typeof this.attrs.id != 'undefined') {
	      this.attrs.id += '_' + this.index
	    }
	    if (typeof this.attrs.key != 'undefined') {
	      this.attrs.key += '_' + this.index
	    }
	  }
	, inputType: null // Subclasses must define this
	})

	/**
	 * Renders a <label> enclosing the widget and its label text.
	 */
	ChoiceInput.prototype.render = function() {
	  var labelAttrs = {}
	  if (this.idForLabel()) {
	    labelAttrs.htmlFor = this.idForLabel()
	  }
	  return React.createElement('label', labelAttrs, this.tag(), ' ', this.choiceLabel)
	}

	ChoiceInput.prototype.isChecked = function() {
	  return this.value === this.choiceValue
	}

	/**
	 * Renders the <input> portion of the widget.
	 */
	ChoiceInput.prototype.tag = function() {
	  var finalAttrs = Widget.prototype.buildAttrs.call(this, {}, {
	    type: this.inputType, name: this.name, value: this.choiceValue
	  })
	  var checkedAttr = (this.controlled ? 'checked' : 'defaultChecked')
	  finalAttrs[checkedAttr] = this.isChecked()
	  return React.createElement('input', finalAttrs)
	}

	ChoiceInput.prototype.idForLabel = function() {
	  return object.get(this.attrs, 'id', '')
	}

	module.exports = ChoiceInput

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CheckboxChoiceInput = __webpack_require__(188)
	var ChoiceFieldRenderer = __webpack_require__(191)

	var CheckboxFieldRenderer = ChoiceFieldRenderer.extend({
	  constructor: function CheckboxFieldRenderer(name, value, attrs, controlled, choices) {
	    if (!(this instanceof CheckboxFieldRenderer)) {
	      return new CheckboxFieldRenderer(name, value, attrs, controlled, choices)
	    }
	    ChoiceFieldRenderer.apply(this, arguments)
	  }
	, choiceInputConstructor: CheckboxChoiceInput
	})

	module.exports = CheckboxFieldRenderer

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	/**
	 * An object used by choice Selects to enable customisation of choice widgets.
	 * @constructor
	 * @param {string} name
	 * @param {string} value
	 * @param {Object} attrs
	 * @param {boolean} controlled
	 * @param {Array} choices
	 */
	var ChoiceFieldRenderer = Concur.extend({
	  constructor: function ChoiceFieldRenderer(name, value, attrs, controlled, choices) {
	    if (!(this instanceof ChoiceFieldRenderer)) {
	      return new ChoiceFieldRenderer(name, value, attrs, controlled, choices)
	    }
	    this.name = name
	    this.value = value
	    this.attrs = attrs
	    this.controlled = controlled
	    this.choices = choices
	  }
	, choiceInputConstructor: null
	})

	ChoiceFieldRenderer.prototype.choiceInputs = function() {
	  var inputs = []
	  for (var i = 0, l = this.choices.length; i < l; i++) {
	    inputs.push(this.choiceInputConstructor(this.name, this.value,
	                                            object.extend({}, this.attrs),
	                                            this.controlled,
	                                            this.choices[i], i))
	  }
	  return inputs
	}

	ChoiceFieldRenderer.prototype.choiceInput = function(i) {
	  if (i >= this.choices.length) {
	    throw new Error('Index out of bounds: ' + i)
	  }
	  return this.choiceInputConstructor(this.name, this.value,
	                                     object.extend({}, this.attrs),
	                                     this.controlled,
	                                     this.choices[i], i)
	  }

	/**
	 * Outputs a <ul> for this set of choice fields.
	 * If an id was given to the field, it is applied to the <ul> (each item in the
	 * list will get an id of `$id_$i`).
	 */
	ChoiceFieldRenderer.prototype.render = function() {
	  var id = object.get(this.attrs, 'id', null)
	  var key = object.pop(this.attrs, 'key', null)
	  var items = []
	  for (var i = 0, l = this.choices.length; i < l; i++) {
	    var choice = this.choices[i]
	    var choiceValue = choice[0]
	    var choiceLabel = choice[1]
	    if (is.Array(choiceLabel)) {
	      var attrsPlus = object.extend({}, this.attrs)
	      if (id) {
	        attrsPlus.id +='_' + i
	      }
	      if (key) {
	        attrsPlus.key += '_' + i
	      }
	      var subRenderer = ChoiceFieldRenderer(this.name, this.value,
	                                            attrsPlus,
	                                            this.controlled,
	                                            choiceLabel)
	      subRenderer.choiceInputConstructor = this.choiceInputConstructor
	      items.push(React.createElement('li', null, choiceValue, subRenderer.render()))
	    }
	    else {
	      var w = this.choiceInputConstructor(this.name, this.value,
	                                          object.extend({}, this.attrs),
	                                          this.controlled,
	                                          choice, i)
	      items.push(React.createElement('li', null, w.render()))
	    }
	  }
	  var listAttrs = {}
	  if (id) {
	    listAttrs.id = id
	  }
	  return React.createElement('ul', listAttrs, items)
	}

	module.exports = ChoiceFieldRenderer

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CheckboxFieldRenderer = __webpack_require__(190)
	var RendererMixin = __webpack_require__(193)
	var SelectMultiple = __webpack_require__(194)

	/**
	 * Multiple selections represented as a list of <input type="checkbox"> widgets.
	 * @constructor
	 * @extends {SelectMultiple}
	 * @param {Object=} kwargs
	 */
	var CheckboxSelectMultiple = SelectMultiple.extend({
	  __mixins__: [RendererMixin]
	, constructor: function(kwargs) {
	    if (!(this instanceof CheckboxSelectMultiple)) { return new CheckboxSelectMultiple(kwargs) }
	    RendererMixin.call(this, kwargs)
	    SelectMultiple.call(this, kwargs)
	  }
	, renderer: CheckboxFieldRenderer
	, _emptyValue: []
	})

	module.exports = CheckboxSelectMultiple

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var object = __webpack_require__(162)

	var RendererMixin = Concur.extend({
	  constructor: function RendererMixin(kwargs) {
	    kwargs = object.extend({renderer: null}, kwargs)
	    // Override the default renderer if we were passed one
	    if (kwargs.renderer !== null) {
	      this.renderer = kwargs.renderer
	    }
	  }
	, _emptyValue: null
	, validation: {onChange: true}
	})

	RendererMixin.prototype.subWidgets = function(name, value, kwargs) {
	  return this.getRenderer(name, value, kwargs).choiceInputs()
	}

	/**
	 * @return an instance of the renderer to be used to render this widget.
	 */
	RendererMixin.prototype.getRenderer = function(name, value, kwargs) {
	  kwargs = object.extend({choices: [], controlled: false}, kwargs)
	  if (value === null) {
	    value = this._emptyValue
	  }
	  var finalAttrs = this.buildAttrs(kwargs.attrs)
	  var choices = this.choices.concat(kwargs.choices)
	  return new this.renderer(name, value, finalAttrs, kwargs.controlled, choices)
	}

	RendererMixin.prototype.render = function(name, value, kwargs) {
	  return this.getRenderer(name, value, kwargs).render()
	}

	/**
	 * Widgets using this RendererMixin are made of a collection of subwidgets, each
	 * with their own <label>, and distinct ID.
	 * The IDs are made distinct by y "_X" suffix, where X is the zero-based index
	 * of the choice field. Thus, the label for the main widget should reference the
	 * first subwidget, hence the "_0" suffix.
	 */
	RendererMixin.prototype.idForLabel = function(id) {
	  if (id) {
	    id += '_0'
	  }
	  return id
	}

	module.exports = RendererMixin

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var Select = __webpack_require__(195)

	/**
	 * An HTML <select> widget which allows multiple selections.
	 * @constructor
	 * @extends {Select}
	 * @param {Object=} kwargs
	 */
	var SelectMultiple = Select.extend({
	  constructor: function SelectMultiple(kwargs) {
	    if (!(this instanceof SelectMultiple)) { return new SelectMultiple(kwargs) }
	    Select.call(this, kwargs)
	  }
	, allowMultipleSelected: true
	, validation: {onChange: true}
	})

	/**
	 * Renders the widget.
	 * @param {string} name the field name.
	 * @param {Array} selectedValues the values of options which should be marked as
	 *   selected, or null if no values are selected - these will be normalised to
	 *   Strings for comparison with choice values.
	 * @param {Object} [kwargs] additional rendering options.
	 * @return a <select> element which allows multiple selections.
	 */
	SelectMultiple.prototype.render = function(name, selectedValues, kwargs) {
	  kwargs = object.extend({choices: []}, kwargs)
	  if (selectedValues === null) {
	    selectedValues = []
	  }
	  if (!is.Array(selectedValues)) {
	    selectedValues = [selectedValues]
	  }
	  var finalAttrs = this.buildAttrs(kwargs.attrs, {name: name,
	                                                  multiple: 'multiple'})
	  var options = this.renderOptions(kwargs.choices, selectedValues)
	  var valueAttr = (kwargs.controlled ? 'value' : 'defaultValue')
	  finalAttrs[valueAttr] = selectedValues
	  return React.createElement('select', finalAttrs, options)
	}

	/**
	 * Retrieves values for this widget from the given data.
	 * @param {Object} data form data.
	 * @param {Object} files file data.
	 * @param {string} name the field name to be used to retrieve data.
	 * @return {Array} values for this widget, or null if no values were provided.
	 */
	SelectMultiple.prototype.valueFromData = function(data, files, name) {
	  if (object.hasOwn(data, name) && data[name] != null) {
	    return [].concat(data[name])
	  }
	  return null
	}

	module.exports = SelectMultiple

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var Widget = __webpack_require__(178)

	var $__0=  __webpack_require__(171),normaliseChoices=$__0.normaliseChoices

	/**
	 * An HTML <select> widget.
	 * @constructor
	 * @extends {Widget}
	 * @param {Object=} kwargs
	 */
	var Select = Widget.extend({
	  constructor: function Select(kwargs) {
	    if (!(this instanceof Select)) { return new Select(kwargs) }
	    kwargs = object.extend({choices: []}, kwargs)
	    Widget.call(this, kwargs)
	    this.choices = normaliseChoices(kwargs.choices)
	  }
	, allowMultipleSelected: false
	, validation: {onChange: true}
	})

	/**
	 * Renders the widget.
	 * @param {string} name the field name.
	 * @param {*} selectedValue the value of an option which should be marked as
	 *   selected, or null if no value is selected -- will be normalised to a String
	 *   for comparison with choice values.
	 * @param {Object=} kwargs rendering options
	 * @param {Object=} kwargs.attrs additional HTML attributes for the rendered widget.
	 * @param {Array=} kwargs.choices choices to be used when rendering the widget, in
	 *   addition to those already held by the widget itself.
	 * @return a <select> element.
	 */
	Select.prototype.render = function(name, selectedValue, kwargs) {
	  kwargs = object.extend({choices: []}, kwargs)
	  if (selectedValue === null) {
	    selectedValue = ''
	  }
	  var finalAttrs = this.buildAttrs(kwargs.attrs, {name: name})
	  var options = this.renderOptions(kwargs.choices, [selectedValue])
	  var valueAttr = (kwargs.controlled ? 'value' : 'defaultValue')
	  finalAttrs[valueAttr] = selectedValue
	  return React.createElement('select', finalAttrs, options)
	}

	Select.prototype.renderOptions = function(additionalChoices, selectedValues) {
	  var selectedValuesLookup = object.lookup(selectedValues)
	  var options = []
	  var choices = this.choices.concat(normaliseChoices(additionalChoices))
	  for (var i = 0, l = choices.length, choice; i < l; i++) {
	    choice = choices[i]
	    if (is.Array(choice[1])) {
	      var optgroupOptions = []
	      var optgroupChoices = choice[1]
	      for (var j = 0, m = optgroupChoices.length; j < m; j++) {
	        optgroupOptions.push(this.renderOption(selectedValuesLookup,
	                                               optgroupChoices[j][0],
	                                               optgroupChoices[j][1]))
	      }
	      options.push(React.createElement('optgroup', {label: choice[0], key: choice[9]}, optgroupOptions))
	    }
	    else {
	      options.push(this.renderOption(selectedValuesLookup,
	                                     choice[0],
	                                     choice[1]))
	    }
	  }
	  return options
	}

	Select.prototype.renderOption = function(selectedValuesLookup, optValue, optLabel) {
	  optValue = ''+optValue
	  var attrs = {value: optValue, key: optValue + optLabel}
	  if (typeof selectedValuesLookup[optValue] != 'undefined') {
	    attrs['selected'] = 'selected'
	    if (!this.allowMultipleSelected) {
	      // Only allow for a single selection with this value
	      delete selectedValuesLookup[optValue]
	    }
	  }
	  return React.createElement('option', attrs, optLabel)
	}

	module.exports = Select

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var Field = __webpack_require__(175)
	var Select = __webpack_require__(195)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError
	var $__1=  __webpack_require__(171),normaliseChoices=$__1.normaliseChoices

	/**
	 * Validates that its input is one of a valid list of choices.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var ChoiceField = Field.extend({
	  widget: Select
	, defaultErrorMessages: {
	    invalidChoice: 'Select a valid choice. {value} is not one of the available choices.'
	  }

	, constructor: function ChoiceField(kwargs) {
	    if (!(this instanceof ChoiceField)) { return new ChoiceField(kwargs) }
	    kwargs = object.extend({choices: []}, kwargs)
	    Field.call(this, kwargs)
	    this.setChoices(kwargs.choices)
	  }
	})

	ChoiceField.prototype.choices = function() { return this._choices }
	ChoiceField.prototype.setChoices = function(choices) {
	  // Setting choices also sets the choices on the widget
	  this._choices = this.widget.choices = normaliseChoices(choices)
	}

	ChoiceField.prototype.toJavaScript = function(value) {
	  if (this.isEmptyValue(value)) {
	    return ''
	  }
	  return ''+value
	}

	/**
	 * Validates that the given value is in this field's choices.
	 */
	ChoiceField.prototype.validate = function(value) {
	  Field.prototype.validate.call(this, value)
	  if (value && !this.validValue(value)) {
	    throw ValidationError(this.errorMessages.invalidChoice, {
	      code: 'invalidChoice'
	    , params: {value: value}
	    })
	  }
	}

	/**
	 * Checks to see if the provided value is a valid choice.
	 * @param {string} value the value to be validated.
	 */
	ChoiceField.prototype.validValue = function(value) {
	  var choices = this.choices()
	  for (var i = 0, l = choices.length; i < l; i++) {
	    if (is.Array(choices[i][1])) {
	      // This is an optgroup, so look inside the group for options
	      var optgroupChoices = choices[i][1]
	      for (var j = 0, m = optgroupChoices.length; j < m; j++) {
	        if (value === ''+optgroupChoices[j][0]) {
	          return true
	        }
	      }
	    }
	    else if (value === ''+choices[i][0]) {
	      return true
	    }
	  }
	  return false
	}

	module.exports = ChoiceField

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var CheckboxInput = __webpack_require__(182)
	var FileInput = __webpack_require__(198)

	var $__0=  __webpack_require__(171),formatToArray=$__0.formatToArray

	var FILE_INPUT_CONTRADICTION = {}

	/**
	 * @constructor
	 * @extends {FileInput}
	 * @param {Object=} kwargs
	 */
	var ClearableFileInput = FileInput.extend({
	  needsInitialValue: true
	, isValueSettable: false
	, constructor: function ClearableFileInput(kwargs) {
	    if (!(this instanceof ClearableFileInput)) { return new ClearableFileInput(kwargs) }
	    FileInput.call(this, kwargs)
	  }
	, initialText: 'Currently'
	, inputText: 'Change'
	, clearCheckboxLabel: 'Clear'
	, templateWithInitial: function(params) {
	    return formatToArray(
	      '{initialText}: {initial} {clearTemplate}{br}{inputText}: {input}'
	    , object.extend(params, {br: React.createElement('br', null)})
	    )
	  }
	, templateWithClear: function(params) {
	    return formatToArray(
	      '{checkbox} {label}'
	    , object.extend(params, {
	        label: React.createElement('label', {htmlFor: params.checkboxId}, params.label)
	      })
	    )
	  }
	, urlMarkupTemplate: function(href, name) {
	    return React.createElement('a', {href: href}, name)
	  }
	})

	ClearableFileInput.FILE_INPUT_CONTRADICTION = FILE_INPUT_CONTRADICTION

	/**
	 * Given the name of the file input, return the name of the clear checkbox
	 * input.
	 */
	ClearableFileInput.prototype.clearCheckboxName = function(name) {
	  return name + '-clear'
	}

	/**
	 * Given the name of the clear checkbox input, return the HTML id for it.
	 */
	ClearableFileInput.prototype.clearCheckboxId = function(name) {
	  return name + '_id'
	}

	ClearableFileInput.prototype.render = function(name, value, kwargs) {
	  kwargs = object.extend({attrs: {}}, kwargs)
	  kwargs.attrs.key = 'input'
	  var input = FileInput.prototype.render.call(this, name, value, kwargs)
	  var initialValue = kwargs.initialValue
	  if (!initialValue && value && typeof value.url != 'undefined') {
	    initialValue = value
	  }
	  if (initialValue && typeof initialValue.url != 'undefined') {
	    var clearTemplate
	    if (!this.isRequired) {
	      var clearCheckboxName = this.clearCheckboxName(name)
	      var clearCheckboxId = this.clearCheckboxId(clearCheckboxName)
	      clearTemplate = this.templateWithClear({
	        checkbox: CheckboxInput().render(clearCheckboxName, false, {attrs: {'id': clearCheckboxId}})
	      , checkboxId: clearCheckboxId
	      , label: this.clearCheckboxLabel
	      })
	    }
	    var contents = this.templateWithInitial({
	      initialText: this.initialText
	    , initial: this.urlMarkupTemplate(initialValue.url, ''+initialValue)
	    , clearTemplate: clearTemplate
	    , inputText: this.inputText
	    , input: input
	    })
	    return React.createElement('span', null, contents)
	  }
	  else {
	    return React.createElement('span', null, input)
	  }
	}

	ClearableFileInput.prototype.valueFromData = function(data, files, name) {
	  var upload = FileInput.prototype.valueFromData(data, files, name)
	  if (!this.isRequired &&
	      CheckboxInput.prototype.valueFromData.call(this, data, files,
	                                                 this.clearCheckboxName(name))) {
	    if (upload) {
	      // If the user contradicts themselves (uploads a new file AND
	      // checks the "clear" checkbox), we return a unique marker
	      // object that FileField will turn into a ValidationError.
	      return FILE_INPUT_CONTRADICTION
	    }
	    // false signals to clear any existing value, as opposed to just null
	    return false
	  }
	  return upload
	}

	module.exports = ClearableFileInput

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var Input = __webpack_require__(177)

	var env =__webpack_require__(187)

	/**
	 * An HTML <input type="file"> widget.
	 * @constructor
	 * @extends {Input}
	 * @param {Object=} kwargs
	 */
	var FileInput = Input.extend({
	  constructor: function FileInput(kwargs) {
	    if (!(this instanceof FileInput)) { return new FileInput(kwargs) }
	    Input.call(this, kwargs)
	  }
	, inputType: 'file'
	, needsMultipartForm: true
	, validation: {onChange: true}
	, isValueSettable: false
	})

	FileInput.prototype.render = function(name, value, kwargs) {
	  return Input.prototype.render.call(this, name, null, kwargs)
	}

	/**
	 * On the client, files will be populated with File objects from the input's
	 * FileList when supported, otherwise its value will be in data as a fallback.
	 */
	FileInput.prototype.valueFromData = function(data, files, name) {
	  var dataSource = files
	  if (env.browser && !(name in files)) {
	    dataSource = data
	  }
	  return object.get(dataSource, name, null)
	}

	module.exports = FileInput

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var Field = __webpack_require__(175)

	/**
	 * A Field whose clean() method calls multiple Field clean() methods.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var ComboField = Field.extend({
	  constructor: function ComboField(kwargs) {
	    if (!(this instanceof ComboField)) { return new ComboField(kwargs) }
	    kwargs = object.extend({fields: []}, kwargs)
	    Field.call(this, kwargs)
	    // Set required to False on the individual fields, because the required
	    // validation will be handled by ComboField, not by those individual fields.
	    for (var i = 0, l = kwargs.fields.length; i < l; i++) {
	      kwargs.fields[i].required = false
	    }
	    this.fields = kwargs.fields
	  }
	})

	ComboField.prototype.clean = function(value) {
	  Field.prototype.clean.call(this, value)
	  for (var i = 0, l = this.fields.length; i < l; i++) {
	    value = this.fields[i].clean(value)
	  }
	  return value
	}

	module.exports = ComboField

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseTemporalField = __webpack_require__(173)
	var DateInput = __webpack_require__(201)

	/**
	 * Validates that its input is a date.
	 * @constructor
	 * @extends {BaseTemporalField}
	 * @param {Object=} kwargs
	 */
	var DateField = BaseTemporalField.extend({
	  widget: DateInput
	, inputFormatType: 'DATE_INPUT_FORMATS'
	, defaultErrorMessages: {
	    invalid: 'Enter a valid date.'
	  }

	, constructor: function DateField(kwargs) {
	    if (!(this instanceof DateField)) { return new DateField(kwargs) }
	    BaseTemporalField.call(this, kwargs)
	  }
	})

	/**
	 * Validates that the input can be converted to a date.
	 * @param {?(string|Date)} value user input.
	 * @return {?Date} a with its year, month and day attributes set, or null for
	 *   empty values when they are allowed.
	 * @throws {ValidationError} if the input is invalid.
	 */
	DateField.prototype.toJavaScript = function(value) {
	  if (this.isEmptyValue(value)) {
	    return null
	  }
	  if (value instanceof Date) {
	    return new Date(value.getFullYear(), value.getMonth(), value.getDate())
	  }
	  return BaseTemporalField.prototype.toJavaScript.call(this, value)
	}

	module.exports = DateField

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DateTimeBaseInput = __webpack_require__(202)

	/**
	 * @constructor
	 * @extends {DateTimeBaseInput}
	 * @param {Object=} kwargs
	 */
	var DateInput = DateTimeBaseInput.extend({
	  formatType: 'DATE_INPUT_FORMATS'
	, constructor: function DateInput(kwargs) {
	    if (!(this instanceof DateInput)) { return new DateInput(kwargs) }
	    DateTimeBaseInput.call(this, kwargs)
	  }
	})

	module.exports = DateInput

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var time = __webpack_require__(170)

	var formats = __webpack_require__(174)
	var locales = __webpack_require__(169)
	var TextInput = __webpack_require__(180)

	/**
	 * A <input type="text"> which, if given a Date object to display, formats it as
	 * an appropriate date/time String.
	 * @constructor
	 * @extends {TextInput}
	 * @param {Object=} kwargs
	 */
	var DateTimeBaseInput = TextInput.extend({
	  formatType: ''
	, constructor: function DateTimeBaseInput(kwargs) {
	    kwargs = object.extend({format: null}, kwargs)
	    TextInput.call(this, kwargs)
	    this.format = kwargs.format
	  }
	})

	DateTimeBaseInput.prototype._formatValue = function(value) {
	  if (is.Date(value)) {
	    if (this.format === null) {
	      this.format = formats.getFormat(this.formatType)[0]
	    }
	    return time.strftime(value, this.format, locales.getDefaultLocale())
	  }
	  return value
	}

	module.exports = DateTimeBaseInput

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)

	var BaseTemporalField = __webpack_require__(173)
	var DateTimeInput = __webpack_require__(204)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * Validates that its input is a date/time.
	 * @constructor
	 * @extends {BaseTemporalField}
	 * @param {Object=} kwargs
	 */
	var DateTimeField = BaseTemporalField.extend({
	  widget: DateTimeInput
	, inputFormatType: 'DATETIME_INPUT_FORMATS'
	, defaultErrorMessages: {
	    invalid: 'Enter a valid date/time.'
	  }

	, constructor: function DateTimeField(kwargs) {
	    if (!(this instanceof DateTimeField)) { return new DateTimeField(kwargs) }
	    BaseTemporalField.call(this, kwargs)
	  }
	})

	/**
	 * @param {?(string|Date|Array.<string>)} value user input.
	 * @return {?Date}
	 * @throws {ValidationError} if the input is invalid.
	 */
	DateTimeField.prototype.toJavaScript = function(value) {
	  if (this.isEmptyValue(value)) {
	    return null
	  }
	  if (value instanceof Date) {
	    return value
	  }
	  if (is.Array(value)) {
	    // Input comes from a SplitDateTimeWidget, for example, so it's two
	    // components: date and time.
	    if (value.length != 2) {
	      throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	    }
	    if (this.isEmptyValue(value[0]) && this.isEmptyValue(value[1])) {
	      return null
	    }
	    value = value.join(' ')
	  }
	  return BaseTemporalField.prototype.toJavaScript.call(this, value)
	}


	module.exports = DateTimeField

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DateTimeBaseInput = __webpack_require__(202)

	/**
	 * @constructor
	 * @extends {DateTimeBaseInput}
	 * @param {Object=} kwargs
	 */
	var DateTimeInput = DateTimeBaseInput.extend({
	  formatType: 'DATETIME_INPUT_FORMATS'
	, constructor: function DateTimeInput(kwargs) {
	    if (!(this instanceof DateTimeInput)) { return new DateTimeInput(kwargs) }
	    DateTimeBaseInput.call(this, kwargs)
	  }
	})

	module.exports = DateTimeInput

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var Field = __webpack_require__(175)
	var IntegerField = __webpack_require__(206)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError
	var $__1=  __webpack_require__(171),strip=$__1.strip

	/**
	 * Validates that its input is a decimal number.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var DecimalField = IntegerField.extend({
	  defaultErrorMessages: {
	    invalid: 'Enter a number.'
	  , maxDigits: 'Ensure that there are no more than {max} digits in total.'
	  , maxDecimalPlaces: 'Ensure that there are no more than {max} decimal places.'
	  , maxWholeDigits: 'Ensure that there are no more than {max} digits before the decimal point.'
	  }

	, constructor: function DecimalField(kwargs) {
	    if (!(this instanceof DecimalField)) { return new DecimalField(kwargs) }
	    kwargs = object.extend({maxDigits: null, decimalPlaces: null}, kwargs)
	    this.maxDigits = kwargs.maxDigits
	    this.decimalPlaces = kwargs.decimalPlaces
	    IntegerField.call(this, kwargs)
	  }
	})

	/** Decimal validation regular expression, in lieu of a Decimal type. */
	DecimalField.DECIMAL_REGEXP = /^[-+]?(?:\d+(?:\.\d*)?|(?:\d+)?\.\d+)$/

	/**
	 * DecimalField overrides the clean() method as it performs its own validation
	 * against a different value than that given to any defined validators, due to
	 * JavaScript lacking a built-in Decimal type. Decimal format and component size
	 * checks will be performed against a normalised string representation of the
	 * input, whereas Validators will be passed a float version of the value for
	 * min/max checking.
	 * @param {string|Number} value
	 * @return {string} a normalised version of the input.
	 */
	DecimalField.prototype.clean = function(value) {
	  // Take care of empty, required validation
	  Field.prototype.validate.call(this, value)
	  if (this.isEmptyValue(value)) {
	    return null
	  }

	  // Coerce to string and validate that it looks Decimal-like
	  value = strip(''+value)
	  if (!DecimalField.DECIMAL_REGEXP.test(value)) {
	    throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	  }

	  // In lieu of a Decimal type, DecimalField validates against a string
	  // representation of a Decimal, in which:
	  // * Any leading sign has been stripped
	  var negative = false
	  if (value.charAt(0) == '+' || value.charAt(0) == '-') {
	    negative = (value.charAt(0) == '-')
	    value = value.substr(1)
	  }
	  // * Leading zeros have been stripped from digits before the decimal point,
	  //   but trailing digits are retained after the decimal point.
	  value = value.replace(/^0+/, '')
	  // Reset to zero if we just wiped out all the digits in the input
	  if (value === '' || value == '.') {
	    value = '0'
	  }
	  // * If the input ended with a '.', it is stripped
	  if (value.indexOf('.') == value.length - 1) {
	    value = value.substring(0, value.length - 1)
	  }

	  // Perform own validation
	  var pieces = value.split('.')
	  var wholeDigits = pieces[0].length
	  var decimals = (pieces.length == 2 ? pieces[1].length : 0)
	  var digits = wholeDigits + decimals
	  if (this.maxDigits !== null && digits > this.maxDigits) {
	    throw ValidationError(this.errorMessages.maxDigits, {
	      code: 'maxDigits'
	    , params: {max: this.maxDigits}
	    })
	  }
	  if (this.decimalPlaces !== null && decimals > this.decimalPlaces) {
	    throw ValidationError(this.errorMessages.maxDecimalPlaces, {
	      code: 'maxDecimalPlaces'
	    , params: {max: this.decimalPlaces}
	    })
	  }
	  if (this.maxDigits !== null &&
	      this.decimalPlaces !== null &&
	      wholeDigits > (this.maxDigits - this.decimalPlaces)) {
	    throw ValidationError(this.errorMessages.maxWholeDigits, {
	      code: 'maxWholeDigits'
	    , params: {max: (this.maxDigits - this.decimalPlaces)}
	    })
	  }

	  // * Values which did not have a leading zero gain a single leading zero
	  if (value.charAt(0) == '.') {
	    value = '0' + value
	  }
	  // Restore sign if necessary
	  if (negative) {
	    value = '-' + value
	  }

	  // Validate against a float value - best we can do in the meantime
	  this.runValidators(parseFloat(value))

	  // Return the normalised String representation
	  return value
	}

	DecimalField.prototype.getWidgetAttrs = function(widget) {
	  var attrs = IntegerField.prototype.getWidgetAttrs.call(this, widget)
	   if (!object.hasOwn(widget.attrs, 'step')) {
	    var step = 'any'
	    if (this.decimalPlaces !== null) {
	      // Use exponential notation for small values since they might
	      // be parsed as 0 otherwise.
	      if (this.decimalPlaces === 0) {
	        step = '1'
	      }
	      else if (this.decimalPlaces < 7) {
	        step = '0.' + '000001'.slice(-this.decimalPlaces)
	      }
	      else {
	        step = '1e-' + this.decimalPlaces
	      }
	    }
	    object.setDefault(attrs, 'step', step)
	  }
	  return attrs
	}

	module.exports = DecimalField

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var Field = __webpack_require__(175)
	var NumberInput = __webpack_require__(207)

	var $__0=    __webpack_require__(158),MaxValueValidator=$__0.MaxValueValidator,MinValueValidator=$__0.MinValueValidator,ValidationError=$__0.ValidationError

	/**
	 * Validates that its input is a valid integer.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var IntegerField = Field.extend({
	  widget: NumberInput
	, defaultErrorMessages: {
	    invalid: 'Enter a whole number.'
	  }

	, constructor: function IntegerField(kwargs) {
	    if (!(this instanceof IntegerField)) { return new IntegerField(kwargs) }
	    kwargs = object.extend({maxValue: null, minValue: null}, kwargs)
	    this.maxValue = kwargs.maxValue
	    this.minValue = kwargs.minValue
	    Field.call(this, kwargs)

	    if (this.minValue !== null) {
	      this.validators.push(MinValueValidator(this.minValue))
	    }
	    if (this.maxValue !== null) {
	      this.validators.push(MaxValueValidator(this.maxValue))
	    }
	  }
	})

	/**
	 * Validates that Number() can be called on the input with a result that isn't
	 * NaN and doesn't contain any decimal points.
	 * @param {*} value user input.
	 * @return {?number} the result of Number(), or null for empty values.
	 * @throws {ValidationError} if the input is invalid.
	 */
	IntegerField.prototype.toJavaScript = function(value) {
	  value = Field.prototype.toJavaScript.call(this, value)
	  if (this.isEmptyValue(value)) {
	    return null
	  }
	  value = Number(value)
	  if (isNaN(value) || value.toString().indexOf('.') != -1) {
	    throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	  }
	  return value
	}

	IntegerField.prototype.getWidgetAttrs = function(widget) {
	  var attrs = Field.prototype.getWidgetAttrs.call(this, widget)
	  if (this.minValue !== null && !object.hasOwn(widget.attrs, 'min')) {
	    object.setDefault(attrs, 'min', this.minValue)
	  }
	  if (this.maxValue !== null && !object.hasOwn(widget.attrs, 'max')) {
	    object.setDefault(attrs, 'max', this.maxValue)
	  }
	  return attrs
	}

	module.exports = IntegerField

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var TextInput = __webpack_require__(180)

	/**
	 * An HTML <input type="number"> widget.
	 * @constructor
	 * @extends {TextInput}
	 * @param {Object=} kwargs
	 */
	var NumberInput = TextInput.extend({
	  constructor: function NumberInput(kwargs) {
	    if (!(this instanceof NumberInput)) { return new NumberInput(kwargs) }
	    TextInput.call(this, kwargs)
	  }
	, inputType: 'number'
	})

	module.exports = NumberInput

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(171)

	var CharField = __webpack_require__(185)
	var EmailInput = __webpack_require__(209)

	var $__0=  __webpack_require__(158),validateEmail=$__0.validateEmail

	/**
	 * Validates that its input appears to be a valid e-mail address.
	 * @constructor
	 * @extends {CharField}
	 * @param {Object=} kwargs
	 */
	var EmailField = CharField.extend({
	  widget: EmailInput
	, defaultValidators: [validateEmail]

	, constructor: function EmailField(kwargs) {
	    if (!(this instanceof EmailField)) { return new EmailField(kwargs) }
	    CharField.call(this, kwargs)
	  }
	})

	EmailField.prototype.clean = function(value) {
	  value = util.strip(this.toJavaScript(value))
	  return CharField.prototype.clean.call(this, value)
	}


	module.exports = EmailField

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var TextInput = __webpack_require__(180)

	/**
	 * An HTML <input type="email"> widget.
	 * @constructor
	 * @extends {TextInput}
	 * @param {Object=} kwargs
	 */
	var EmailInput = TextInput.extend({
	  constructor: function EmailInput(kwargs) {
	    if (!(this instanceof EmailInput)) { return new EmailInput(kwargs) }
	    TextInput.call(this, kwargs)
	  }
	, inputType: 'email'
	})

	module.exports = EmailInput

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * A list of errors which knows how to display itself in various formats.
	 * @param {Array=} list a list of errors.
	 * @constructor
	 */
	var ErrorList = Concur.extend({
	  constructor: function ErrorList(list) {
	    if (!(this instanceof ErrorList)) { return new ErrorList(list) }
	    this.data = list || []
	  }
	})

	/**
	 * @param {Array.<Object>} list
	 * @return {ErrorList}
	 */
	ErrorList.fromJSON = function(list) {
	  var result = new ErrorList()
	  result.fromJSON(list)
	  return result
	}

	/**
	 * Adds more errors.
	 * @param {Array} errorList a list of errors.
	 */
	ErrorList.prototype.extend = function(errorList) {
	  this.data.push.apply(this.data, errorList)
	}

	/**
	 * @return {number} the number of errors.
	 */
	ErrorList.prototype.length = function() {
	  return this.data.length
	}

	/**
	 * @return {boolean} true if any errors are present.
	 */
	ErrorList.prototype.isPopulated = function() {
	  return (this.length() > 0)
	}

	/**
	 * @return {string} the first message held in this ErrorList.
	 */
	ErrorList.prototype.first = function() {
	  if (this.data.length > 0) {
	    var error = this.data[0]
	    if (error instanceof ValidationError) {
	      error = error.messages()[0]
	    }
	    return error
	  }
	}

	/**
	 * @return {Array.<string>} the list of messages held in this ErrorList.
	 */
	ErrorList.prototype.messages = function() {
	  var messages = []
	  for (var i = 0, l = this.data.length; i < l; i++) {
	    var error = this.data[i]
	    if (error instanceof ValidationError) {
	      error = error.messages()[0]
	    }
	    messages.push(error)
	  }
	  return messages
	}

	/**
	 * Default display is as a list.
	 * @return {ReactElement}
	 */
	ErrorList.prototype.render = function(kwargs) {
	  return this.asUl(kwargs)
	}

	/**
	 * Displays errors as a list.
	 * @return {ReactElement}
	 */
	ErrorList.prototype.asUl = function(kwargs) {
	  if (!this.isPopulated()) {
	    return
	  }
	  kwargs = object.extend({className: 'errorlist'}, kwargs)
	  return React.createElement('ul', {className: kwargs.className},
	    this.messages().map(function(error) {
	      return React.createElement('li', null, error)
	    })
	  )
	}

	/**
	 * Displays errors as text.
	 * @return {string}
	 */
	ErrorList.prototype.asText = ErrorList.prototype.toString =function() {
	  return this.messages().map(function(error) {
	    return '* ' + error
	  }).join('\n')
	}

	/**
	 * @return {Array}
	 */
	ErrorList.prototype.asData = function() {
	  return this.data
	}

	/**
	 * @return {Object}
	 */
	ErrorList.prototype.toJSON = function() {
	  return new ValidationError(this.data).errorList.map(function(error) {
	    return {
	      message: error.messages()[0]
	    , code: error.code || ''
	    }
	  })
	}

	/**
	 * @param {Array.<Object>} list
	 */
	ErrorList.prototype.fromJSON = function(list) {
	  this.data = list.map(function(err) {
	    return new ValidationError(err.message, {code: err.code})
	  })
	}

	module.exports = ErrorList


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Concur = __webpack_require__(160)
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var ErrorList = __webpack_require__(210)

	/**
	 * A collection of field errors that knows how to display itself in various
	 * formats. This object's .error properties are the field names and
	 * corresponding values are the errors.
	 * @constructor
	 */
	var ErrorObject = Concur.extend({
	  constructor: function ErrorObject() {
	    if (!(this instanceof ErrorObject)) { return new ErrorObject() }
	    this.errors = {}
	  }
	})

	/**
	 * @param {Object} jsonObj
	 * @param {function=} errorConstructor
	 * @return {ErrorObject}
	 */
	ErrorObject.fromJSON = function(jsonObj, errorConstructor) {
	  var result = new ErrorObject()
	  result.fromJSON(jsonObj, errorConstructor)
	  return result
	}

	/**
	 * Sets a field's errors.
	 * @param {string} fieldName
	 * @param {ErrorList} errors
	 */
	ErrorObject.prototype.set = function(fieldName, errors) {
	  this.errors[fieldName] = errors
	}

	/**
	 * Gets a field's errors.
	 * @param {string} fieldName
	 * @return {ErrorList}
	 */
	ErrorObject.prototype.get = function(fieldName) {
	  return this.errors[fieldName]
	}

	/**
	 * Removes errors for a field.
	 * @param {string} fieldName
	 * @return {boolean} true if there were errors for the field.
	 */
	ErrorObject.prototype.remove = function(fieldName) {
	  return delete this.errors[fieldName]
	}

	/**
	 * Removes errors for multiple fields.
	 * @param {Array.<string>} fieldNames
	 */
	ErrorObject.prototype.removeAll = function(fieldNames) {
	  for (var i = 0, l = fieldNames.length; i < l; i++) {
	    delete this.errors[fieldNames[i]]
	  }
	}

	/**
	 * @return {boolean} true if the field has errors.
	 */
	ErrorObject.prototype.hasField = function(fieldName) {
	  return object.hasOwn(this.errors, fieldName)
	}

	/**
	 * @return {number}
	 */
	ErrorObject.prototype.length = function() {
	  return Object.keys(this.errors).length
	}

	/**
	 * @return {boolean} true if any errors are present.
	 */
	ErrorObject.prototype.isPopulated = function() {
	  return (this.length() > 0)
	}

	/**
	 * Default display is as a list.
	 * @return {ReactElement}
	 */
	ErrorObject.prototype.render = function(kwargs) {
	  return this.asUl(kwargs)
	}

	/**
	 * Displays error details as a list.
	 * @return {ReactElement}
	 */
	ErrorObject.prototype.asUl = function(kwargs) {
	  kwargs = object.extend({className: 'errorlist'}, kwargs)
	  var items = Object.keys(this.errors).map(function(fieldName) {
	    return React.createElement('li', null, fieldName, this.errors[fieldName].asUl())
	  }.bind(this))
	  if (items.length === 0) { return }
	  return React.createElement('ul', {className: kwargs.className}, items)
	}

	/**
	 * Displays error details as text.
	 * @return {string}
	 */
	ErrorObject.prototype.asText = ErrorObject.prototype.toString = function() {
	  return Object.keys(this.errors).map(function(fieldName) {
	    var messages = this.errors[fieldName].messages()
	    return ['* ' + fieldName].concat(messages.map(function(message) {
	      return ('  * ' + message)
	    })).join('\n')
	  }.bind(this)).join('\n')
	}

	/**
	 * @return {Object}
	 */
	ErrorObject.prototype.asData = function() {
	  var data = {}
	  Object.keys(this.errors).map(function(fieldName) {
	    data[fieldName] = this.errors[fieldName].asData()
	  }.bind(this))
	  return data
	}

	/**
	 * @return {Object}
	 */
	ErrorObject.prototype.toJSON = function() {
	  var jsonObj = {}
	  Object.keys(this.errors).map(function(fieldName) {
	    jsonObj[fieldName] = this.errors[fieldName].toJSON()
	  }.bind(this))
	  return jsonObj
	}

	/**
	 * @param {Object} jsonObj
	 * @param {function=} errorConstructor
	 */
	ErrorObject.prototype.fromJSON = function(jsonObj, errorConstructor) {
	  errorConstructor = errorConstructor || ErrorList
	  this.errors = {}
	  var fieldNames = Object.keys(jsonObj)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    var fieldName = fieldNames[i]
	    this.errors[fieldName] = errorConstructor.fromJSON(jsonObj[fieldName])
	  }
	}

	module.exports = ErrorObject


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var env = __webpack_require__(187)

	var ClearableFileInput = __webpack_require__(197)
	var Field = __webpack_require__(175)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * Validates that its input is a valid uploaded file.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var FileField = Field.extend({
	  widget: ClearableFileInput
	, defaultErrorMessages: {
	    invalid: 'No file was submitted. Check the encoding type on the form.'
	  , missing: 'No file was submitted.'
	  , empty: 'The submitted file is empty.'
	  , maxLength: 'Ensure this filename has at most {max} characters (it has {length}).'
	  , contradiction: 'Please either submit a file or check the clear checkbox, not both.'
	  }

	, constructor: function FileField(kwargs) {
	    if (!(this instanceof FileField)) { return new FileField(kwargs) }
	    kwargs = object.extend({maxLength: null, allowEmptyFile: false}, kwargs)
	    this.maxLength = kwargs.maxLength
	    this.allowEmptyFile = kwargs.allowEmptyFile
	    delete kwargs.maxLength
	    Field.call(this, kwargs)
	  }
	})

	FileField.prototype.toJavaScript = function(data, initial) {
	  if (this.isEmptyValue(data)) {
	    return null
	  }

	  // If the browser doesn't support File objects, we can't do anything more
	  if (env.browser && is.String(data)) {
	    return data
	  }

	  // File objects should have name and size attributes
	  if (typeof data.name == 'undefined' || typeof data.size == 'undefined') {
	    throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	  }

	  var name = data.name
	  var suze = Number(data.size)

	  if (this.maxLength !== null && name.length > this.maxLength) {
	    throw ValidationError(this.errorMessages.maxLength, {
	      code: 'maxLength'
	    , params: {max: this.maxLength, length: name.length}
	    })
	  }
	  if (!name) {
	    throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	  }
	  if (!this.allowEmptyFile && suze === 0) {
	    throw ValidationError(this.errorMessages.empty, {code: 'empty'})
	  }

	  return data
	}

	FileField.prototype.clean = function(data, initial) {
	  // If the widget got contradictory inputs, we raise a validation error
	  if (data === ClearableFileInput.FILE_INPUT_CONTRADICTION) {
	    throw ValidationError(this.errorMessages.contradiction,
	                          {code: 'contradiction'})
	  }
	  // false means the field value should be cleared; further validation is
	  // not needed.
	  if (data === false) {
	    if (!this.required) {
	      return false
	    }
	    // If the field is required, clearing is not possible (the widget
	    // shouldn't return false data in that case anyway). false is not
	    // in EMPTY_VALUES; if a false value makes it this far it should be
	    // validated from here on out as null (so it will be caught by the
	    // required check).
	    data = null
	  }
	  if (!data && initial) {
	    return initial
	  }
	  return Field.prototype.clean.call(this, data)
	}

	FileField.prototype.boundData = function(data, initial) {
	  if (data === null || data === ClearableFileInput.FILE_INPUT_CONTRADICTION) {
	    return initial
	  }
	  return data
	}

	FileField.prototype._hasChanged = function(initial, data) {
	  return (data !== null)
	}

	module.exports = FileField

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var ChoiceField = __webpack_require__(196)

	/**
	 * Allows choosing from files inside a certain directory.
	 * @constructor
	 * @extends {ChoiceField}
	 * @param {string} path
	 * @param {Object=} kwargs
	 */
	var FilePathField = ChoiceField.extend({
	  constructor: function FilePathField(path, kwargs) {
	    if (!(this instanceof FilePathField)) { return new FilePathField(path, kwargs) }
	    kwargs = object.extend({
	      match: null, recursive: false, required: true, widget: null,
	      label: null, initial: null, helpText: null,
	      allowFiles: true, allowFolders: false
	    }, kwargs)

	    this.path = path
	    this.match = object.pop(kwargs, 'match')
	    this.recursive = object.pop(kwargs, 'recursive')
	    this.allowFiles = object.pop(kwargs, 'allowFiles')
	    this.allowFolders = object.pop(kwargs, 'allowFolders')
	    delete kwargs.match
	    delete kwargs.recursive

	    kwargs.choices = []
	    ChoiceField.call(this, kwargs)

	    if (this.required) {
	      this.setChoices([])
	    }
	    else {
	      this.setChoices([['', '---------']])
	    }

	    if (this.match !== null) {
	      this.matchRE = new RegExp(this.match)
	    }

	    // TODO Plug in file paths when running on the server

	    this.widget.choices = this.choices()
	  }
	})

	module.exports = FilePathField

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var Field = __webpack_require__(175)
	var IntegerField = __webpack_require__(206)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError
	var $__1=  __webpack_require__(171),strip=$__1.strip

	/**
	 * Validates that its input is a valid float.
	 * @constructor
	 * @extends {IntegerField}
	 * @param {Object=} kwargs
	 */
	var FloatField = IntegerField.extend({
	  defaultErrorMessages: {
	    invalid: 'Enter a number.'
	  }

	, constructor: function FloatField(kwargs) {
	    if (!(this instanceof FloatField)) { return new FloatField(kwargs) }
	    IntegerField.call(this, kwargs)
	  }
	})

	/** Float validation regular expression, as parseFloat() is too forgiving. */
	FloatField.FLOAT_REGEXP = /^[-+]?(?:\d+(?:\.\d*)?|(?:\d+)?\.\d+)$/

	/**
	 * Validates that the input looks like valid input for parseFloat() and the
	 * result of calling it isn't NaN.
	 * @param {*} value user input.
	 * @return a Number obtained from parseFloat(), or null for empty values.
	 * @throws {ValidationError} if the input is invalid.
	 */
	FloatField.prototype.toJavaScript = function(value) {
	  value = Field.prototype.toJavaScript.call(this, value)
	  if (this.isEmptyValue(value)) {
	    return null
	  }
	  value = strip(value)
	  if (!FloatField.FLOAT_REGEXP.test(value)) {
	    throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	  }
	  value = parseFloat(value)
	  if (isNaN(value)) {
	    throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	  }
	  return value
	}

	/**
	 * Determines if data has changed from initial. In JavaScript, trailing zeroes
	 * in floats are dropped when a float is coerced to a String, so e.g., an
	 * initial value of 1.0 would not match a data value of '1.0' if we were to use
	 * the Widget object's _hasChanged, which checks coerced String values.
	 * @return {boolean} true if data has changed from initial.
	 */
	FloatField.prototype._hasChanged = function(initial, data) {
	  // For purposes of seeing whether something has changed, null is the same
	  // as an empty string, if the data or initial value we get is null, replace
	  // it with ''.
	  var dataValue = (data === null ? '' : data)
	  var initialValue = (initial === null ? '' : initial)
	  if (initialValue === dataValue) {
	    return false
	  }
	  else if (initialValue === '' || dataValue === '') {
	    return true
	  }
	  return (parseFloat(''+initialValue) != parseFloat(''+dataValue))
	}

	FloatField.prototype.getWidgetAttrs = function(widget) {
	  var attrs = IntegerField.prototype.getWidgetAttrs.call(this, widget)
	  if (!object.hasOwn(widget.attrs, 'step')) {
	    object.setDefault(attrs, 'step', 'any')
	  }
	  return attrs
	}

	module.exports = FloatField

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var Concur = __webpack_require__(160)
	var getFormData = __webpack_require__(172)
	var copy = __webpack_require__(216)
	var $__0=  __webpack_require__(167),formatObj=$__0.formatObj
	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var constants = __webpack_require__(217)

	var BoundField = __webpack_require__(183)
	var DeclarativeFieldsMeta = __webpack_require__(218)
	var ErrorList = __webpack_require__(210)
	var ErrorObject = __webpack_require__(211)
	var FileField = __webpack_require__(212)
	var MultipleFileField = __webpack_require__(219)

	var $__1=  __webpack_require__(158),ValidationError=$__1.ValidationError
	var $__2=      __webpack_require__(171),cancellable=$__2.cancellable,debounce=$__2.debounce,info=$__2.info,warning=$__2.warning,normaliseValidation=$__2.normaliseValidation

	function noop() {}
	var sentinel = {}

	var NON_FIELD_ERRORS = constants.NON_FIELD_ERRORS

	/**
	 * Checks if a field's view of raw input data (via its Widget) has changed.
	 */
	function fieldDataHasChanged(previous, current) {
	  if (is.Array(previous) && is.Array(current)) {
	    if (previous.length != current.length) { return true }
	    for (var i = 0, l = previous.length; i < l; i++) {
	      if (previous[i] != current[i]) { return true }
	    }
	    return false
	  }
	  return previous != current
	}

	if ('production' !== process.env.NODE_ENV) {
	  var warnedOnImpliedValidateAuto = false
	}

	/**
	 * A collection of Fields that knows how to validate and display itself.
	 * @constructor
	 * @param {Object.<string, *>} kwargs form options.
	 */
	var Form = Concur.extend({
	  __meta__: DeclarativeFieldsMeta,

	  prefixFormat: '{prefix}-{name}',

	  constructor: function Form(kwargs) {
	    // TODO Perform PropType checks on kwargs in development mode
	    kwargs = object.extend({
	      data: null, files: null, autoId: 'id_{name}', prefix: null,
	      initial: null, errorConstructor: ErrorList, labelSuffix: ':',
	      emptyPermitted: false, validation: null, controlled: false,
	      onChange: null, errors: null
	    }, kwargs)
	    this.isInitialRender = (kwargs.data == null && kwargs.files == null)
	    this.data = kwargs.data || {}
	    this.files = kwargs.files || {}
	    this.autoId = kwargs.autoId
	    this.prefix = kwargs.prefix
	    this.initial = kwargs.initial || {}
	    this.cleanedData = {}
	    this.errorConstructor = kwargs.errorConstructor
	    this.labelSuffix = kwargs.labelSuffix
	    this.emptyPermitted = kwargs.emptyPermitted
	    this.controlled = kwargs.controlled
	    this.onChange = kwargs.onChange

	    // Auto validation is implied when onChange is passed
	    if (is.Function(kwargs.onChange)) {
	      if ('production' !== process.env.NODE_ENV) {
	        if (!warnedOnImpliedValidateAuto && kwargs.validation === 'auto') {
	          info('Passing onChange to a Form or FormSet constructor also ' +
	               "implies validation: 'auto' by default - you don't have " +
	               'to set it manually.')
	          warnedOnImpliedValidateAuto = true
	        }
	      }
	      if (kwargs.validation == null) {
	        kwargs.validation = 'auto'
	      }
	    }
	    this.validation = normaliseValidation(kwargs.validation || 'manual')

	    this._errors = kwargs.errors

	    // Cancellable debounced functions for delayed event validation
	    this._pendingEventValidation = {}
	    // Input data as it was last time validation was performed on a field
	    this._lastValidatedData = {}
	    // Cached result of the last call to hasChanged()
	    this._lastHasChanged = null

	    // Lookup for names of fields pending validation
	    this._pendingValidation = {}
	    // Cancellable callbacks for pending async validation
	    this._pendingAsyncValidation = {}
	    // Lookup for names of fields pending validation which clean() depends on
	    this._runCleanAfter = {}
	    // Callback to be run the next time validation finishes
	    this._onValidate = null

	    // The baseFields attribute is the *prototype-wide* definition of fields.
	    // Because a particular *instance* might want to alter this.fields, we
	    // create this.fields here by deep copying baseFields. Instances should
	    // always modify this.fields; they should not modify baseFields.
	    this.fields = copy.deepCopy(this.baseFields)

	    if ('production' !== process.env.NODE_ENV) {
	      // Now that form.fields exists, we can check if there's any configuration
	      // which *needs* onChange on the form or its fields.
	      if (!is.Function(kwargs.onChange) && this._needsOnChange()) {
	        warning("You didn't provide an onChange callback for a " +
	                this._formName() + ' which has controlled fields. This ' +
	                'will result in read-only fields.')
	      }
	    }

	    // Copy initial values to the data object, as it represents form input -
	    // literally so in the case of controlled components once we start taking
	    // some data and isInitialRender flips to false.
	    if (this.isInitialRender) {
	      this._copyInitialToData()
	    }
	  }
	})

	// XXX Don't alter form extension arguments - fix this in Concur
	var _extend = Form.extend
	Form.extend = function(prototypeProps, constructorProps) {
	  return _extend.call(this, object.extend({}, prototypeProps), constructorProps)
	}

	/**
	 * Calls the onChange function if it's been provided. This method will be called
	 * every time the form makes a change to its state which requires redisplay.
	 */
	Form.prototype._stateChanged = function() {
	  if (typeof this.onChange == 'function') {
	    this.onChange()
	  }
	}

	/**
	 * Copies initial data to the input data object, as it represents form input -
	 * when using controlled components once we start taking some data,
	 * isInitialRender flips to false and this.data is used for rendering widgets.
	 */
	Form.prototype._copyInitialToData = function() {
	  var initialData = object.extend(this._fieldInitialData(), this.initial)
	  var initialFieldNames = Object.keys(initialData)
	  for (var i = 0, l = initialFieldNames.length; i < l; i++) {
	    var fieldName = initialFieldNames[i]
	    if (typeof this.fields[fieldName] == 'undefined') { continue }
	    // Don't copy initial to input data for fields which can't have the
	    // initial data set as their current value.
	    if (!this.fields[fieldName].widget.isValueSettable) { continue }
	    this.data[this.addPrefix(fieldName)] = initialData[fieldName]
	  }
	}

	/**
	 * Gets initial data configured in this form's fields.
	 * @return {Object.<string,*>}
	 */
	Form.prototype._fieldInitialData = function() {
	  var fieldInitial = {}
	  var fieldNames = Object.keys(this.fields)
	  for (var i = 0, l = fieldNames.length; i < l; i++) {
	    var fieldName = fieldNames[i]
	    var initial = this.fields[fieldName].initial
	    if (initial !== null) {
	      fieldInitial[fieldName] = initial
	    }
	  }
	  return fieldInitial
	}

	/**
	 * Tries to construct a display name for the form for display in messages.
	 * @return {string}
	 */
	Form.prototype._formName = function() {
	  var name = this.displayName || this.constructor.name
	  return (name ? "'" + name + "'" : 'Form')
	}

	/**
	 * @return {boolean} true if the form or any of its fields are configured to
	 *   generate controlled components.
	 */
	Form.prototype._needsOnChange = function() {
	  if (this.controlled === true) {
	    return true
	  }
	  var names = Object.keys(this.fields)
	  for (var i = 0, l = names.length; i < l; i++) {
	    if (this.fields[names[i]].controlled === true) {
	      return true
	    }
	  }
	  return false
	}

	// ============================================================== Validation ===

	/**
	 * Validates the form from scratch. If a <form> is given, data from it will be
	 * set on this form first. Otherwise, validation will be done with this form's
	 * current input data.
	 * @param {(ReactElement|HTMLFormElement)=} form the <form> containing this
	 * form's rendered widgets - this can be a React <form> component or a real
	 * <form> DOM node.
	 * @param {function(err, isValid, cleanedData)=} cb callback for asynchronous
	 *   validation.
	 * @return {boolean|undefined} true if the form only has synchronous validation
	 *   and is valid.
	 * @throws if the form has asynchronous validation and a callback is not
	 *   provided.
	 */
	Form.prototype.validate = function(form, cb) {
	  this._cancelPendingOperations()
	  if (is.Function(form)) {
	    cb = form
	    form = null
	  }
	  if (form) {
	    if (typeof form.getDOMNode == 'function') {
	      form = form.getDOMNode()
	    }
	    this.data = getFormData(form)
	  }
	  return (this.isAsync() ? this._validateAsync(cb) : this._validateSync())
	}

	Form.prototype._validateAsync = function(cb) {
	  if (!is.Function(cb)) {
	    throw new Error(
	      'You must provide a callback to validate() when a form has ' +
	      'asynchronous validation.'
	    )
	  }
	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }
	  this._onValidate = cb
	  this.fullClean()
	  // Display async progress indicators
	  this._stateChanged()
	}

	Form.prototype._validateSync = function() {
	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }
	  this.fullClean()
	  // Display changes to valid/invalid state
	  this._stateChanged()
	  return this.isValid()
	}

	/**
	 * Cleans data for all fields and triggers cross-form cleaning.
	 */
	Form.prototype.fullClean = function() {
	  this._errors = new ErrorObject()
	  if (this.isInitialRender) {
	    return // Stop further processing
	  }

	  this.cleanedData = {}

	  // If the form is permitted to be empty, and none of the form data has
	  // changed from the initial data, short circuit any validation.
	  if (this.emptyPermitted && !this.hasChanged()) {
	    this._finishedValidation(null)
	    return
	  }

	  this._cleanFields()
	}

	/**
	 * Cleans data for the given field names and triggers cross-form cleaning in
	 * case any cleanedData it uses has changed.
	 * @param {Array.<string>} fields field names.
	 */
	Form.prototype.partialClean = function(fields) {
	  this._removeErrors(fields)

	  // If the form is permitted to be empty, and none of the form data has
	  // changed from the initial data, short circuit any validation.
	  if (this.emptyPermitted && !this.hasChanged()) {
	    if (this._errors.isPopulated()) {
	      this._errors = ErrorObject()
	    }
	    return
	  }

	  this._preCleanFields(fields)
	  for (var i = 0, l = fields.length; i < l; i++) {
	    this._cleanField(fields[i])
	  }
	}

	/**
	 * Validates and cleans every field in the form.
	 */
	Form.prototype._cleanFields = function() {
	  var fieldNames = Object.keys(this.fields)
	  this._preCleanFields(fieldNames)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    this._cleanField(fieldNames[i])
	  }
	}

	/**
	 * Sets up pending validation state prior to cleaning fields and configures
	 * cross-field cleaning to run after its dependent fields have been cleaned, or
	 * after all fields have been cleaned if dependencies have not been configured.
	 * @param {Array.<string>} fieldNames fields which are about to be cleaned.
	 */
	Form.prototype._preCleanFields = function(fieldNames) {
	  // Add all field names to those pending validation
	  object.extend(this._pendingValidation, object.lookup(fieldNames))

	  // Add appropriate field names to determine when to run cross-field cleaning
	  var i, l
	  if (typeof this.clean.fields != 'undefined') {
	    for (i = 0, l = fieldNames.length; i < l; i++) {
	      if (this.clean.fields[fieldNames[i]]) {
	        this._runCleanAfter[fieldNames[i]] = true
	      }
	    }
	  }
	  else {
	    // Ignore any invalid field names given
	    for (i = 0, l = fieldNames.length; i < l; i++) {
	      if (this.fields[fieldNames[i]]) {
	        this._runCleanAfter[fieldNames[i]] = true
	      }
	    }
	  }
	}

	/**
	 * Validates and cleans the named field and runs any custom validation function
	 * that's been provided for it.
	 * @param {string} name the name of a form field.
	 */
	Form.prototype._cleanField = function(name) {
	  if (!object.hasOwn(this.fields, name)) {
	    throw new Error(this._formName() + " has no field named '" + name + "'")
	  }

	  var field = this.fields[name]
	  // valueFromData() gets the data from the data objects.
	  // Each widget type knows how to retrieve its own data, because some widgets
	  // split data over several HTML fields.
	  var value = field.widget.valueFromData(this.data, this.files,
	                                         this.addPrefix(name))
	  var async = false
	  var error = null

	  try {
	    if (field instanceof FileField) {
	      var initial = object.get(this.initial, name, field.initial)
	      value = field.clean(value, initial)
	    }
	    else {
	      value = field.clean(value)
	    }
	    this.cleanedData[name] = value
	    var customClean = this._getCustomClean(name)
	    if (is.Function(customClean)) {
	      async = this._runCustomClean(name, customClean)
	    }
	  }
	  catch (e) {
	    if (e instanceof ValidationError) {
	      this.addError(name, e)
	    }
	    else {
	      error = e
	    }
	  }

	  if (!async) {
	    this._fieldCleaned(name, error)
	  }
	}

	/**
	 * Gets the custom cleaning method for a field. These can be named clean<Name>
	 * or clean_<name>.
	 * @param {string} fieldName
	 * @return {function|undefined}
	 */
	Form.prototype._getCustomClean = function(fieldName) {
	  return (this['clean' + fieldName.charAt(0).toUpperCase() + fieldName.substr(1)] ||
	          this['clean_' + fieldName])
	}

	/**
	 * Calls a custom cleaning method, expecting synchronous or asynchronous
	 * behaviour, depending on its arity.
	 * @param {string} fieldName a field name.
	 * @param {(function()|function(function(Error, string, string|ValidationError)))} customClean
	 *   the custom cleaning method for the field.
	 * @return {boolean} true if cleaning is running asynchronously, false if it just
	 *   ran synchronously.
	 */
	Form.prototype._runCustomClean = function(fieldName, customClean) {
	  // Check arity to see if we have a callback in the function signature
	  if (customClean.length === 0) {
	    // Synchronous processing only expected
	    customClean.call(this)
	    return false
	  }

	  // If custom validation is async and there's one pending, prevent its
	  // callback from doing anything.
	  if (typeof this._pendingAsyncValidation[fieldName] != 'undefined') {
	    object.pop(this._pendingAsyncValidation, fieldName).cancel()
	  }
	  // Set up callback for async processing - the argument for addError()
	  // should be passed via the callback as calling it directly prevents us
	  // from completely ignoring the callback if validation fires again.
	  var callback = function(err, validationError) {
	    if (validationError) {
	      this.addError(fieldName == NON_FIELD_ERRORS ? null : fieldName, validationError)
	    }
	    this._fieldCleaned(fieldName, err)
	    this._stateChanged()
	  }.bind(this)
	  var cancellableCallback = cancellable(callback)

	  // An explicit return value of false indicates that async processing is
	  // being skipped (e.g. because sync checks in the method failed first)
	  var returnValue = customClean.call(this, cancellableCallback)
	  if (returnValue !== false) {
	    // Async processing is happening! Make the callback cancellable and
	    // hook up any custom onCancel handling provided.
	    if (returnValue && typeof returnValue.onCancel == 'function') {
	      callback.onCancel = returnValue.onCancel
	    }
	    this._pendingAsyncValidation[fieldName] = cancellableCallback
	    return true
	  }
	}

	/**
	 * Callback for completion of field cleaning. Triggers further field cleaning or
	 * signals the end of validation, as necessary.
	 * @param {string} fieldName
	 * @param {Error=} err an error caught while cleaning the field.
	 */
	Form.prototype._fieldCleaned = function(fieldName, err) {
	  var wasPending = delete this._pendingValidation[fieldName]
	  if (this._pendingAsyncValidation[fieldName]) {
	    delete this._pendingAsyncValidation[fieldName]
	  }

	  if (err) {
	    if ("production" !== process.env.NODE_ENV) {
	      console.error('Error cleaning ' + this._formName() + '.' + fieldName +
	                    ':' + err.message)
	    }
	    // Stop tracking validation progress on error, and don't call clean()
	    this._pendingValidation = {}
	    this._runCleanAfter = {}
	    this._finishedValidation(err)
	    return
	  }

	  // Run clean() if this was the last field it was waiting for
	  if (this._runCleanAfter[fieldName]) {
	    delete this._runCleanAfter[fieldName]
	    if (is.Empty(this._runCleanAfter)) {
	      this._cleanForm()
	      return
	    }
	  }

	  // Signal the end of validation if this was the last field we were waiting for
	  if (wasPending && is.Empty(this._pendingValidation)) {
	    this._finishedValidation(null)
	  }
	}

	/**
	 * Hook for doing any extra form-wide cleaning after each Field has been cleaned.
	 * Any ValidationError thrown by synchronous validation in this method will not
	 * be associated with a particular field; it will have a special-case association
	 * with the field named '__all__'.
	 * @param {function(Error, string, string|ValidationError)=} cb a callback to signal the
	 *   end of asynchronous validation.
	 */
	Form.prototype.clean = noop

	/**
	 * Calls the clean() hook.
	 */
	Form.prototype._cleanForm = function() {
	  var async = false
	  var error = null
	  try {
	    if (this.clean !== noop) {
	      async = this._runCustomClean(NON_FIELD_ERRORS, this.clean)
	    }
	  }
	  catch (e) {
	    if (e instanceof ValidationError) {
	      this.addError(null, e)
	    }
	    else {
	      error = e
	    }
	  }

	  if (!async) {
	    this._fieldCleaned(NON_FIELD_ERRORS, error)
	  }
	}

	Form.prototype._finishedValidation = function(err) {
	  if (!this.isAsync()) {
	    if (err) {
	      throw err
	    }
	    // Synchronous form validation results will be returned via the original
	    // call which triggered validation.
	    return
	  }
	  if (is.Function(this._onValidate)) {
	    var callback = this._onValidate
	    this._onValidate = null
	    if (err) {
	      return callback(err)
	    }
	    var isValid = this.isValid()
	    callback(null, isValid, isValid ? this.cleanedData : null)
	  }
	}

	/**
	 * Cancels any pending field validations and async validations.
	 */
	Form.prototype._cancelPendingOperations = function() {
	  Object.keys(this._pendingEventValidation).forEach(function(field) {
	    object.pop(this._pendingEventValidation, field).cancel()
	  }.bind(this))
	  Object.keys(this._pendingAsyncValidation).forEach(function(field) {
	    object.pop(this._pendingAsyncValidation, field).cancel()
	  }.bind(this))
	}

	// ========================================================== Event Handling ===

	/**
	 * Handles validating the field which is the target of the given event based
	 * on its validation config. This will be hooked up to the appropriate event
	 * as per the field's validation config.
	 * @param {Object} validation the field's validation config for the event.
	 * @param {SyntheticEvent} e the event being handled.
	 */
	Form.prototype._handleFieldEvent = function(validation, e) {
	  // Update form.data with the current value of the field which is the target of
	  // the event.
	  var htmlName = e.target.name
	  var fieldName = this.removePrefix(e.target.getAttribute('data-newforms-field') || htmlName)
	  var field = this.fields[fieldName]
	  var targetData = getFormData.getNamedFormElementData(e.target.form, htmlName)
	  this.data[htmlName] = targetData
	  if (field instanceof FileField && 'files' in e.target) {
	    var files = e.target.files
	    this.files[htmlName] = (field instanceof MultipleFileField
	                            ? Array.prototype.slice.call(files)
	                            : files[0])
	  }
	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }
	  if (this.controlled || field.controlled) {
	    this._stateChanged()
	  }

	  // Bail out early if the event is only being handled to update the field's data
	  if (validation.validate === false) { return }

	  var validate = false

	  // Special cases for onBlur, as it ends a user's interaction with a text input
	  if (validation.event == 'onBlur') {
	    // If there is any pending validation, trigger it immediately
	    if (typeof this._pendingEventValidation[fieldName] != 'undefined') {
	      this._pendingEventValidation[fieldName].trigger()
	      return
	    }
	    // Always validate if the field is required and the input which was blurred
	    // was empty (some fields have multiple inputs).
	    validate = (field.required && field.isEmptyValue(targetData))
	  }

	  // Always validate if this is the first time the field has been interacted
	  // with.
	  if (!validate) {
	    var lastValidatedData = object.get(this._lastValidatedData, fieldName, sentinel)
	    validate = (lastValidatedData === sentinel)
	  }

	  // Otherwise, validate if data has changed since validation was last performed
	  // - this prevents displayed validation errors being cleared unnecessarily.
	  if (!validate) {
	    var fieldData = field.widget.valueFromData(this.data, this.files, this.addPrefix(fieldName))
	    validate = fieldDataHasChanged(lastValidatedData, fieldData)
	  }

	  // Cancel any pending validation as it's no longer needed - this can happen
	  // if the user edits a field with debounced validation and it ends up back
	  // at its original value before validation is triggered.
	  if (!validate && typeof this._pendingEventValidation[fieldName] != 'undefined') {
	    object.pop(this._pendingEventValidation, fieldName).cancel()
	  }

	  // If we don't need to validate, we're done handling the event
	  if (!validate) { return }

	  if (validation.delay) {
	    this._delayedFieldValidation(fieldName, validation.delay)
	  }
	  else {
	    this._immediateFieldValidation(fieldName)
	  }
	}

	/**
	 * Sets up delayed validation of a field with a debounced function and calls it,
	 * or just calls the function again if it already exists, to reset the delay.
	 * @param {string} fieldName
	 * @param {number} delay delay time in ms.
	 */
	Form.prototype._delayedFieldValidation = function(fieldName, delay) {
	  if (typeof this._pendingEventValidation[fieldName] == 'undefined') {
	    this._pendingEventValidation[fieldName] = debounce(function() {
	      delete this._pendingEventValidation[fieldName]
	      this._immediateFieldValidation(fieldName)
	    }.bind(this), delay)
	  }
	  this._pendingEventValidation[fieldName]()
	}

	/**
	 * Validates a field and notifies the React component that state has changed.
	 * @param {string} fieldName
	 */
	Form.prototype._immediateFieldValidation = function(fieldName) {
	  // Remove and cancel any pending validation for the field to avoid doubling up
	  // when both delayed and immediate validation are configured.
	  if (typeof this._pendingEventValidation[fieldName] != 'undefined') {
	    object.pop(this._pendingEventValidation, fieldName).cancel()
	  }
	  this._lastValidatedData[fieldName] =
	      this.fields[fieldName].widget.valueFromData(this.data, this.files,
	                                                  this.addPrefix(fieldName))
	  this.partialClean([fieldName])
	  this._stateChanged()
	}

	// ============================================================== Mutability ===

	/**
	 * Resets a form data back to its initial state, optionally providing new initial
	 * data.
	 * @param {Object.<string, *>=} newInitial new initial data for the form.
	 */
	Form.prototype.reset = function(newInitial) {
	  this._cancelPendingOperations()

	  if (typeof newInitial != 'undefined') {
	    this.initial = newInitial
	  }

	  this.data = {}
	  this.cleanedData = {}
	  this.isInitialRender = true

	  this._errors = null
	  this._lastHasChanged = null
	  this._pendingValidation = {}
	  this._runCleanAfter = {}
	  this._lastValidatedData = {}
	  this._onValidate = null

	  this._copyInitialToData()
	  this._stateChanged()
	}

	/**
	 * Sets the form's entire input data, also triggering validation by default.
	 * @param {object.<string,*>} data new input data for the form.
	 * @param {object.<string,boolean>} kwargs data setting options.
	 * @return {boolean|undefined} if data setting options indicate the new data
	 *   should be validated and the form does not have asynchronous validation
	 *   configured: true if the new data is valid.
	 */
	Form.prototype.setData = function(data, kwargs) {
	  kwargs = object.extend({
	    prefixed: false, validate: true, _triggerStateChange: true
	  }, kwargs)

	  this.data = (kwargs.prefixed ? data : this._prefixData(data))

	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }
	  if (kwargs.validate) {
	    this._errors = null
	    // This call ultimately triggers a fullClean() because _errors is null
	    var isValid = this.isValid()
	  }
	  else {
	    // Prevent validation being triggered if errors() is accessed during render
	    this._errors = new ErrorObject()
	  }

	  if (kwargs._triggerStateChange) {
	    this._stateChanged()
	  }

	  if (kwargs.validate && !this.isAsync()) {
	    return isValid
	  }
	}

	/**
	 * Sets the form's entire input data wth data extracted from a <form>, which
	 * will be prefixed, if prefixes are being used.
	 * @param {Object.<strong, *>} formData
	 * @param {Object.<string, boolean>} kwargs setData options.
	 */
	Form.prototype.setFormData = function(formData, kwargs) {
	  return this.setData(formData, object.extend(kwargs || {}, {prefixed: true}))
	}

	/**
	 * Updates some of the form's input data, optionally triggering validation of
	 * updated fields and form-wide cleaning, or clears existing errors from the
	 * updated fields.
	 * @param {Object.<string, *>} data updated input data for the form.
	 * @param {Object.<string, boolean>} kwargs update options.
	 */
	Form.prototype.updateData = function(data, kwargs) {
	  kwargs = object.extend({
	    prefixed: false, validate: true, clearValidation: true
	  }, kwargs)

	  object.extend(this.data, (kwargs.prefixed ? data : this._prefixData(data)))
	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }

	  var fields = Object.keys(data)
	  if (kwargs.prefixed) {
	    fields = fields.map(this.removePrefix.bind(this))
	  }

	  if (kwargs.validate) {
	    this.partialClean(fields)
	  }
	  else if (kwargs.clearValidation) {
	    this._removeErrors(fields)
	    this._removeCleanedData(fields)
	    this._cleanForm()
	  }

	  this._stateChanged()
	}

	/**
	 * Removes any cleanedData present for the given form fields.
	 * @param {Array.<string>} fields field names.
	 */
	Form.prototype._removeCleanedData = function(fields) {
	  for (var i = 0, l = fields.length; i < l; i++) {
	    delete this.cleanedData[fields[i]]
	  }
	}

	// ============================================================= BoundFields ===

	/**
	 * Creates a BoundField for the field with the given name.
	 * @param {string} name a field name.
	 * @return {BoundField} a BoundField for the field.
	 */
	Form.prototype.boundField = function(name) {
	  if (!object.hasOwn(this.fields, name)) {
	    throw new Error(this._formName() + " does not have a '" + name + "' field.")
	  }
	  return new BoundField(this, this.fields[name], name)
	}

	/**
	 * Creates a BoundField for each field in the form, in the order in which the
	 * fields were created.
	 * @param {function(Field, string)=} test if provided, this function will be
	 *   called with field and name arguments - BoundFields will only be generated
	 *   for fields for which true is returned.
	 * @return {Array.<BoundField>} a list of BoundField objects.
	 */
	Form.prototype.boundFields = function(test) {
	  var bfs = []
	  var fieldNames = Object.keys(this.fields)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    var fieldName = fieldNames[i]
	    if (!test || test(this.fields[fieldName], fieldName)) {
	      bfs.push(new BoundField(this, this.fields[fieldName], fieldName))
	    }
	  }
	  return bfs
	}

	/**
	 * Like boundFields(), but returns a name -> BoundField object instead.
	 * @return {Object.<string, BoundField>}
	 */
	Form.prototype.boundFieldsObj = function() {
	  var bfs = {}
	  var fieldNames = Object.keys(this.fields)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    var fieldName = fieldNames[i]
	    bfs[fieldName] = new BoundField(this, this.fields[fieldName], fieldName)
	  }
	  return bfs
	}

	/**
	 * Returns a list of all the BoundField objects that correspond to hidden
	 * fields. Useful for manual form layout.
	 * @return {Array.<BoundField>}
	 */
	Form.prototype.hiddenFields = function() {
	  return this.boundFields(function(field) {
	    return field.widget.isHidden
	  })
	}

	/**
	 * Returns a list of BoundField objects that do not correspond to hidden fields.
	 * The opposite of the hiddenFields() method.
	 * @return {Array.<BoundField>}
	 */
	Form.prototype.visibleFields = function() {
	  return this.boundFields(function(field) {
	    return !field.widget.isHidden
	  })
	}

	// ================================================================== Errors ===

	/**
	 * Updates the content of this._errors.
	 * The field argument is the name of the field to which the errors should be
	 * added. If its value is null the errors will be treated as NON_FIELD_ERRORS.
	 * The error argument can be a single error, a list of errors, or an object that
	 * maps field names to lists of errors. What we define as an "error" can be
	 * either a simple string or an instance of ValidationError with its message
	 * attribute set and what we define as list or object can be an actual list or
	 * object or an instance of ValidationError with its errorList or errorObj
	 * property set.
	 * If error is an object, the field argument *must* be null and errors will be
	 * added to the fields that correspond to the properties of the object.
	 * @param {?string} field the name of a form field.
	 * @param {(string|ValidationError|Array.<(string|ValidationError)>|Object<string,(string|ValidationError|Array.<(string|ValidationError)>))} error
	 */
	Form.prototype.addError = function(field, error) {
	  if (!(error instanceof ValidationError)) {
	    // Normalise to ValidationError and let its constructor do the hard work of
	    // making sense of the input.
	    error = ValidationError(error)
	  }

	  if (object.hasOwn(error, 'errorObj')) {
	    if (field !== null) {
	      throw new Error("The 'field' argument to form.addError() must be null when " +
	                      "the 'error' argument contains errors for multiple fields.")
	    }
	    error = error.errorObj
	  }
	  else {
	    var errorList = error.errorList
	    error = {}
	    error[field || NON_FIELD_ERRORS] = errorList
	  }

	  var fields = Object.keys(error)
	  for (var i = 0, l = fields.length; i < l; i++) {
	    field = fields[i]
	    errorList = error[field]
	    if (!this._errors.hasField(field)) {
	      if (field !== NON_FIELD_ERRORS && !object.hasOwn(this.fields, field)) {
	        throw new Error(this._formName() + " has no field named '" + field + "'")
	      }
	      this._errors.set(field, new this.errorConstructor())
	    }
	    else {
	      // Filter out any error messages which are duplicates of existing
	      // messages. This can happen if onChange validation which uses addError()
	      // is fired repeatedly and is adding an error message to a field other
	      // then the one being changed.
	      var messageLookup = object.lookup(this._errors.get(field).messages())
	      var newMessages = ErrorList(errorList).messages()
	      for (var j = errorList.length - 1; j >= 0; j--) {
	        if (messageLookup[newMessages[j]]) {
	          errorList.splice(j, 1)
	        }
	      }
	    }

	    if (errorList.length > 0) {
	      this._errors.get(field).extend(errorList)
	    }

	    if (object.hasOwn(this.cleanedData, field)) {
	      delete this.cleanedData[field]
	    }
	  }
	}

	/**
	 * Getter for errors, which first cleans the form if there are no errors
	 * defined yet.
	 * @param {string=} name if given, errors for this field name will be returned
	 *   instead of the full error object.
	 * @return {ErrorObject|ErrorList} form or field errors
	 */
	Form.prototype.errors = function(name) {
	  if (this._errors == null) {
	    this.fullClean()
	  }
	  if (name) {
	    return this._errors.get(name)
	  }
	  return this._errors
	}

	/**
	 * @return {ErrorObject} errors that aren't associated with a particular field -
	 *   i.e., errors generated by clean(). Will be empty if there are none.
	 */
	Form.prototype.nonFieldErrors = function() {
	  return (this.errors(NON_FIELD_ERRORS) || new this.errorConstructor())
	}

	/**
	 * @param {ErrorObject} errors
	 */
	Form.prototype.setErrors = function(errors) {
	  this._errors = errors
	  this._stateChanged()
	}

	/**
	 * Removes any validation errors present for the given form fields. If validation
	 * has not been performed yet, initialises the errors object.
	 * @param {Array.<string>} fields field names.
	 */
	Form.prototype._removeErrors = function(fields) {
	  if (this._errors == null) {
	    this._errors = ErrorObject()
	  }
	  else {
	    // TODO use clean.fields if available
	    this._errors.remove(NON_FIELD_ERRORS)
	    this._errors.removeAll(fields)
	  }
	}

	// ================================================================= Changes ===

	/**
	 * Determines which fields have changed from initial form data.
	 * @param {boolean=} _hasChangedCheck if true, the method is only being run to
	 *   determine if any fields have changed, not to get the list of fields.
	 * @return {Array.<string>|boolean} a list of changed field names or true if
	 *   only checking for changes and one is found.
	 */
	Form.prototype.changedData = function(_hasChangedCheck) {
	  var changedData = []
	  var initialValue
	  // XXX: For now we're asking the individual fields whether or not
	  // the data has changed. It would probably be more efficient to hash
	  // the initial data, store it in a hidden field, and compare a hash
	  // of the submitted data, but we'd need a way to easily get the
	  // string value for a given field. Right now, that logic is embedded
	  // in the render method of each field's widget.
	  var fieldNames = Object.keys(this.fields)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    var name = fieldNames[i]
	    var field = this.fields[name]
	    var prefixedName = this.addPrefix(name)
	    var dataValue = field.widget.valueFromData(this.data, this.files, prefixedName)
	    if (!field.showHiddenInitial) {
	      initialValue = object.get(this.initial, name, field.initial)
	      if (is.Function(initialValue)) {
	        initialValue = initialValue()
	      }
	    }
	    else {
	      var initialPrefixedName = this.addInitialPrefix(name)
	      var hiddenWidget = new field.hiddenWidget()
	      try {
	        initialValue = hiddenWidget.valueFromData(
	                this.data, this.files, initialPrefixedName)
	      }
	      catch (e) {
	        if (!(e instanceof ValidationError)) { throw e }
	        // Always assume data has changed if validation fails
	        if (_hasChangedCheck) {
	          return true
	        }
	        changedData.push(name)
	        continue
	      }
	    }
	    if (field._hasChanged(initialValue, dataValue)) {
	      if (_hasChangedCheck) {
	        return true
	      }
	      changedData.push(name)
	    }
	  }
	  if (_hasChangedCheck) {
	    return false
	  }
	  return changedData
	}

	/**
	 * @return {boolean} true if input data differs from initial data.
	 */
	Form.prototype.hasChanged = function() {
	  this._lastHasChanged = this.changedData(true)
	  return this._lastHasChanged
	}

	// ================================================================== Status ===

	/**
	 * @return {boolean} true if the form needs a callback argument for final
	 *   validation.
	 */
	Form.prototype.isAsync = function() {
	  if (this.clean.length == 1) { return true }
	  var fieldNames = Object.keys(this.fields)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    var customClean = this._getCustomClean(fieldNames[i])
	    if (is.Function(customClean) && customClean.length == 1) {
	      return true
	    }
	  }
	  return false
	}

	/**
	 * @return {boolean} true if all required fields have been completed.
	 */
	Form.prototype.isComplete = function() {
	  if (!this.isValid() || this.isPending()) {
	    return false
	  }
	  var fieldNames = Object.keys(this.fields)
	  for (var i = 0, l = fieldNames.length; i < l; i++) {
	    var fieldName = fieldNames[i]
	    if (this.fields[fieldName].required &&
	        typeof this.cleanedData[fieldName] == 'undefined') {
	      return false
	    }
	  }
	  return true
	}

	/**
	 * @return {boolean} true if the form needs to be multipart-encoded, in other
	 *   words, if it has a FileField.
	 */
	Form.prototype.isMultipart = function() {
	  var fieldNames = Object.keys(this.fields)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    if (this.fields[fieldNames[i]].widget.needsMultipartForm) {
	      return true
	    }
	  }
	  return false
	}

	/**
	 * @return {boolean} true if the form is waiting for async validation to
	 *   complete.
	 */
	Form.prototype.isPending = function() {
	  return !is.Empty(this._pendingAsyncValidation)
	}

	/**
	 * @return {boolean} true if the form doesn't have any errors.
	 */
	Form.prototype.isValid = function() {
	  if (this.isInitialRender) {
	    return false
	  }
	  return !this.errors().isPopulated()
	}

	/**
	 * @return {boolean} true if the form is waiting for async validation of its
	 *   clean() method to complete.
	 */
	Form.prototype.nonFieldPending = function() {
	  return typeof this._pendingAsyncValidation[NON_FIELD_ERRORS] != 'undefined'
	}

	/**
	 * @return {boolean} true if this form is allowed to be empty and if input data
	 *   differs from initial data. This can be used to determine when required
	 *   fields in an extra FormSet form become truly required.
	 */
	Form.prototype.notEmpty = function() {
	  return (this.emptyPermitted && this._lastHasChanged === true)
	}

	// ================================================================ Prefixes ===

	/**
	 * Adds an initial prefix for checking dynamic initial values.
	 * @param {string} fieldName a field name.
	 * @return {string}
	 */
	Form.prototype.addInitialPrefix = function(fieldName) {
	  return 'initial-' + this.addPrefix(fieldName)
	}

	/**
	 * Prepends a prefix to a field name if this form has one set.
	 * @param {string} fieldName a form field name.
	 * @return {string} the field name with a prefix prepended if this form has a
	 *   prefix set, otherwise the field name as-is.
	 * @return {string}
	 */
	Form.prototype.addPrefix = function(fieldName) {
	  if (this.prefix !== null) {
	    return formatObj(this.prefixFormat, {prefix: this.prefix, name: fieldName})
	  }
	  return fieldName
	}

	/**
	 * Extracts a form field name from the name attribute of a rendered form input.
	 * @param {string} htmlName a name attribute from a rendered form input.
	 * @return {string}
	 */
	Form.prototype.removePrefix = function(htmlName) {
	  if (this.prefix !== null) {
	    var partialPrefix = this.prefixFormat.replace('{prefix}', this.prefix)
	    var startIndex = partialPrefix.indexOf('{name}')
	    var lengthDiff = htmlName.length - partialPrefix.length
	    return htmlName.substr(startIndex, /* length of {name} */ 6 + lengthDiff)
	  }
	  return htmlName
	}

	/**
	 * Creates a version of the given data object with prefixes removed from the
	 * property names if this form has a prefix, otherwise returns the object
	 * itself.
	 * @param {object.<string,*>} data
	 * @return {Object.<string,*>}
	 */
	Form.prototype._deprefixData = function(data) {
	  if (this.prefix == null) { return data }
	  var prefixedData = {}
	  var fieldNames = Object.keys(data)
	  for (var i = 0, l = fieldNames.length; i < l; i++) {
	    prefixedData[this.removePrefix(fieldNames[i])] = data[fieldNames[i]]
	  }
	  return prefixedData
	}

	/**
	 * Creates a version of the given data object with prefixes added to the
	 * property names if this form has a prefix, otherwise returns the object
	 * itself.
	 * @param {object.<string,*>} data
	 * @return {Object.<string,*>}
	 */
	Form.prototype._prefixData = function(data) {
	  if (this.prefix == null) { return data }
	  var prefixedData = {}
	  var fieldNames = Object.keys(data)
	  for (var i = 0, l = fieldNames.length; i < l; i++) {
	    prefixedData[this.addPrefix(fieldNames[i])] = data[fieldNames[i]]
	  }
	  return prefixedData
	}

	module.exports = Form
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty
	var toString = Object.prototype.toString
	var type = function(obj) { return toString.call(obj).slice(8, -1).toLowerCase() }

	var primitiveWrapperTypes = {
	  boolean: true
	, number: true
	, string: true
	}

	var stringPropsRE = /^(?:\d+|length)$/

	/* This file is part of OWL JavaScript Utilities.

	OWL JavaScript Utilities is free software: you can redistribute it and/or
	modify it under the terms of the GNU Lesser General Public License
	as published by the Free Software Foundation, either version 3 of
	the License, or (at your option) any later version.

	OWL JavaScript Utilities is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Lesser General Public License for more details.

	You should have received a copy of the GNU Lesser General Public
	License along with OWL JavaScript Utilities.  If not, see
	<http://www.gnu.org/licenses/>.
	*/

	// Re-usable constructor function used by clone()
	function Clone() {}

	// Clone objects, skip other types
	function clone(target) {
	  if (typeof target == 'object') {
	    Clone.prototype = target
	    return new Clone()
	  }
	  else {
	    return target
	  }
	}

	// Shallow Copy
	function copy(target) {
	  var c, property
	  if (typeof target != 'object') {
	    // Non-objects have value semantics, so target is already a copy
	    return target
	  }
	  else {
	    var value = target.valueOf()
	    if (target == value) {
	      // The object is a standard object wrapper for a native type, say String.
	      // we can make a copy by instantiating a new object around the value.
	      c = new target.constructor(value)
	      var notString = type(target) != 'string'

	      // Wrappers can have properties added to them
	      for (property in target) {
	        if (hasOwn.call(target, property) && (notString || !stringPropsRE.test(property))) {
	          c[property] = target[property]
	        }
	      }

	      return c
	    }
	    else {
	      // We have a normal object. If possible, we'll clone the original's
	      // prototype (not the original) to get an empty object with the same
	      // prototype chain as the original. If just copy the instance properties.
	      // Otherwise, we have to copy the whole thing, property-by-property.
	      if (target instanceof target.constructor && target.constructor !== Object) {
	        c = clone(target.constructor.prototype)

	        // Give the copy all the instance properties of target. It has the same
	        // prototype as target, so inherited properties are already there.
	        for (property in target) {
	          if (hasOwn.call(target, property)) {
	            c[property] = target[property]
	          }
	        }
	      }
	      else {
	        c = {}
	        for (property in target) {
	          c[property] = target[property]
	        }
	      }

	      return c
	    }
	  }
	}

	// Deep Copy
	var deepCopiers = []

	function DeepCopier(config) {
	  for (var key in config) {
	    this[key] = config[key]
	  }
	}

	DeepCopier.prototype = {
	  constructor: DeepCopier

	  // Determines if this DeepCopier can handle the given object.
	, canCopy: function(source) { return false }

	  // Starts the deep copying process by creating the copy object. You can
	  // initialize any properties you want, but you can't call recursively into the
	  // DeepCopyAlgorithm.
	, create: function(source) {}

	  // Completes the deep copy of the source object by populating any properties
	  // that need to be recursively deep copied. You can do this by using the
	  // provided deepCopyAlgorithm instance's deepCopy() method. This will handle
	  // cyclic references for objects already deepCopied, including the source
	  // object itself. The "result" passed in is the object returned from create().
	, populate: function(deepCopyAlgorithm, source, result) {}
	}

	function DeepCopyAlgorithm() {
	  // copiedObjects keeps track of objects already copied by this deepCopy
	  // operation, so we can correctly handle cyclic references.
	  this.copiedObjects = []
	  var thisPass = this
	  this.recursiveDeepCopy = function(source) {
	    return thisPass.deepCopy(source)
	  }
	  this.depth = 0
	}
	DeepCopyAlgorithm.prototype = {
	  constructor: DeepCopyAlgorithm

	, maxDepth: 256

	  // Add an object to the cache.  No attempt is made to filter duplicates; we
	  // always check getCachedResult() before calling it.
	, cacheResult: function(source, result) {
	    this.copiedObjects.push([source, result])
	  }

	  // Returns the cached copy of a given object, or undefined if it's an object
	  // we haven't seen before.
	, getCachedResult: function(source) {
	    var copiedObjects = this.copiedObjects
	    var length = copiedObjects.length
	    for ( var i=0; i<length; i++ ) {
	      if ( copiedObjects[i][0] === source ) {
	        return copiedObjects[i][1]
	      }
	    }
	    return undefined
	  }

	  // deepCopy handles the simple cases itself: non-objects and object's we've
	  // seen before. For complex cases, it first identifies an appropriate
	  // DeepCopier, then calls applyDeepCopier() to delegate the details of copying
	  // the object to that DeepCopier.
	, deepCopy: function(source) {
	    // null is a special case: it's the only value of type 'object' without
	    // properties.
	    if (source === null) { return null }

	    // All non-objects use value semantics and don't need explict copying
	    if (typeof source != 'object') { return source }

	    var cachedResult = this.getCachedResult(source)

	    // We've already seen this object during this deep copy operation so can
	    // immediately return the result. This preserves the cyclic reference
	    // structure and protects us from infinite recursion.
	    if (cachedResult) { return cachedResult }

	    // Objects may need special handling depending on their class. There is a
	    // class of handlers call "DeepCopiers" that know how to copy certain
	    // objects. There is also a final, generic deep copier that can handle any
	    // object.
	    for (var i=0; i<deepCopiers.length; i++) {
	      var deepCopier = deepCopiers[i]
	      if (deepCopier.canCopy(source)) {
	        return this.applyDeepCopier(deepCopier, source)
	      }
	    }
	    // The generic copier can handle anything, so we should never reach this
	    // line.
	    throw new Error('no DeepCopier is able to copy ' + source)
	  }

	  // Once we've identified which DeepCopier to use, we need to call it in a
	  // very particular order: create, cache, populate.This is the key to detecting
	  // cycles. We also keep track of recursion depth when calling the potentially
	  // recursive populate(): this is a fail-fast to prevent an infinite loop from
	  // consuming all available memory and crashing or slowing down the browser.
	, applyDeepCopier: function(deepCopier, source) {
	    // Start by creating a stub object that represents the copy.
	    var result = deepCopier.create(source)

	    // We now know the deep copy of source should always be result, so if we
	    // encounter source again during this deep copy we can immediately use
	    // result instead of descending into it recursively.
	    this.cacheResult(source, result)

	    // Only DeepCopier.populate() can recursively deep copy. So, to keep track
	    // of recursion depth, we increment this shared counter before calling it,
	    // and decrement it afterwards.
	    this.depth++
	    if (this.depth > this.maxDepth) {
	      throw new Error("Exceeded max recursion depth in deep copy.")
	    }

	    // It's now safe to let the deepCopier recursively deep copy its properties
	    deepCopier.populate(this.recursiveDeepCopy, source, result)

	    this.depth--

	    return result
	  }
	}

	// Entry point for deep copy.
	//   source is the object to be deep copied.
	//   maxDepth is an optional recursion limit. Defaults to 256.
	function deepCopy(source, maxDepth) {
	  var deepCopyAlgorithm = new DeepCopyAlgorithm()
	  if (maxDepth) {
	    deepCopyAlgorithm.maxDepth = maxDepth
	  }
	  return deepCopyAlgorithm.deepCopy(source)
	}

	// Publicly expose the DeepCopier class
	deepCopy.DeepCopier = DeepCopier

	// Publicly expose the list of deepCopiers
	deepCopy.deepCopiers = deepCopiers

	// Make deepCopy() extensible by allowing others to register their own custom
	// DeepCopiers.
	deepCopy.register = function(deepCopier) {
	  if (!(deepCopier instanceof DeepCopier)) {
	    deepCopier = new DeepCopier(deepCopier)
	  }
	  deepCopiers.unshift(deepCopier)
	}

	// Generic Object copier
	// The ultimate fallback DeepCopier, which tries to handle the generic case.
	// This should work for base Objects and many user-defined classes.
	deepCopy.register({
	  canCopy: function(source) { return true }

	, create: function(source) {
	    if (source instanceof source.constructor) {
	      return clone(source.constructor.prototype)
	    }
	    else {
	      return {}
	    }
	  }

	, populate: function(deepCopy, source, result) {
	    for (var key in source) {
	      if (hasOwn.call(source, key)) {
	        result[key] = deepCopy(source[key])
	      }
	    }
	    return result
	  }
	})

	// Standard primitive wrapper copier
	deepCopy.register({
	  canCopy: function(source) {
	    return primitiveWrapperTypes[type(source)]
	  }

	, create: function(source) {
	    return new source.constructor(source.valueOf())
	  }

	, populate: function(deepCopy, source, result) {
	    var notString = type(source) != 'string'
	    for (var key in source) {
	      if (hasOwn.call(source, key) && (notString || !stringPropsRE.test(key))) {
	        result[key] = deepCopy(source[key])
	      }
	    }
	    return result
	  }
	})

	// RegExp copier
	deepCopy.register({
	  canCopy: function(source) {
	    return type(source) == 'regexp'
	  }

	, create: function(source) {
	    return source
	  }


	})

	// Date copier
	deepCopy.register({
	  canCopy: function(source) {
	    return type(source) == 'date'
	  }

	, create: function(source) {
	    return new Date(source)
	  }
	})

	// Array copier
	deepCopy.register({
	  canCopy: function(source) {
	    return type(source) == 'array'
	  }

	, create: function(source) {
	    return new source.constructor()
	  }

	, populate: function(deepCopy, source, result) {
	    for (var i = 0; i < source.length; i++) {
	      result.push(deepCopy(source[i]))
	    }
	    return result
	  }
	})

	module.exports = {
	  DeepCopyAlgorithm: DeepCopyAlgorithm
	, copy: copy
	, clone: clone
	, deepCopy: deepCopy
	}


/***/ },
/* 217 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  /** Default maximum number of forms in a formset, to prevent memory exhaustion. */
	  FORMSET_DEFAULT_MAX_NUM: 1000
	  /** Default minimum number of forms in a formset. */
	, FORMSET_DEFAULT_MIN_NUM: 0
	  /** Property under which non-field-specific errors are stored. */
	, NON_FIELD_ERRORS: '__all__'
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var Field = __webpack_require__(175)

	// TODO Support declaring propTypes when extending forms - merge them in here

	/**
	 * Meta function for handling declarative fields and inheriting fields from
	 * forms further up the inheritance chain or being explicitly mixed-in, which
	 * sets up baseFields and declaredFields on a new Form constructor's prototype.
	 * @param {Object.<string,*>} prototypeProps
	 */
	function DeclarativeFieldsMeta(prototypeProps) {
	  // Pop Fields instances from prototypeProps to build up the new form's own
	  // declaredFields.
	  var fields = []
	  Object.keys(prototypeProps).forEach(function(name) {
	    if (prototypeProps[name] instanceof Field) {
	      fields.push([name, prototypeProps[name]])
	      delete prototypeProps[name]
	    }
	  })
	  fields.sort(function(a, b) {
	    return a[1].creationCounter - b[1].creationCounter
	  })
	  prototypeProps.declaredFields = object.fromItems(fields)

	  // Build up final declaredFields from the form being extended, forms being
	  // mixed in and the new form's own declaredFields, in that order of
	  // precedence.
	  var declaredFields = {}

	  // If we're extending another form, we don't need to check for shadowed
	  // fields, as it's at the bottom of the pile for inheriting declaredFields.
	  if (object.hasOwn(this, 'declaredFields')) {
	    object.extend(declaredFields, this.declaredFields)
	  }

	  // If any mixins which look like Form constructors were given, inherit their
	  // declaredFields and check for shadowed fields.
	  if (object.hasOwn(prototypeProps, '__mixins__')) {
	    var mixins = prototypeProps.__mixins__
	    if (!is.Array(mixins)) { mixins = [mixins] }
	    // Process mixins from left-to-right, the same precedence they'll get for
	    // having their prototype properties mixed in.
	    for (var i = 0, l = mixins.length; i < l; i++) {
	      var mixin = mixins[i]
	      if (is.Function(mixin) && object.hasOwn(mixin.prototype, 'declaredFields')) {
	        // Extend mixed-in declaredFields over the top of what's already there,
	        // then delete any fields which have been shadowed by a non-Field
	        // property in its prototype.
	        object.extend(declaredFields, mixin.prototype.declaredFields)
	        Object.keys(mixin.prototype).forEach(function(name) {
	          if (object.hasOwn(declaredFields, name)) {
	            delete declaredFields[name]
	          }
	        })
	        // To avoid overwriting the new form's baseFields, declaredFields or
	        // constructor when the rest of the mixin's prototype is mixed-in by
	        // Concur, replace the mixin with an object containing only its other
	        // prototype properties.
	        var mixinPrototype = object.extend({}, mixin.prototype)
	        delete mixinPrototype.baseFields
	        delete mixinPrototype.declaredFields
	        delete mixinPrototype.constructor
	        mixins[i] = mixinPrototype
	      }
	    }
	    // We may have wrapped a single mixin in an Array - assign it back to the
	    // new form's prototype for processing by Concur.
	    prototypeProps.__mixins__ = mixins
	  }

	  // Finally - extend the new form's own declaredFields over the top of
	  // declaredFields being inherited, then delete any fields which have been
	  // shadowed by a non-Field property in its prototype.
	  object.extend(declaredFields, prototypeProps.declaredFields)
	  Object.keys(prototypeProps).forEach(function(name) {
	    if (object.hasOwn(declaredFields, name)) {
	      delete declaredFields[name]
	    }
	  })

	  prototypeProps.baseFields = declaredFields
	  prototypeProps.declaredFields = declaredFields

	  // If a clean method is specified as [field1, field2, ..., cleanFunction],
	  // replace it with the clean function and attach the field names to the
	  // function.
	  if (object.hasOwn(prototypeProps, 'clean') && is.Array(prototypeProps.clean)) {
	    var clean = prototypeProps.clean.pop()
	    clean.fields = object.lookup(prototypeProps.clean)
	    prototypeProps.clean = clean
	  }
	}

	module.exports = DeclarativeFieldsMeta

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)

	var env = __webpack_require__(187)

	var Field = __webpack_require__(175)
	var FileInput = __webpack_require__(198)
	var FileField = __webpack_require__(212)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * Validates that its input is a list of valid files.
	 * @constructor
	 * @extends {FileField}
	 * @param {Object=} kwargs
	 */
	var MultipleFileField = FileField.extend({
	  widget: FileInput,

	  defaultErrorMessages: {
	    invalid: 'No files were submitted. Check the encoding type on the form.',
	    missing: 'No files were submitted.',
	    empty: '{name} is empty.',
	    maxLength: 'Ensure filenames have at most {max} characters ({name} has {length}).'
	  },

	  constructor: function MultipleFileField(kwargs) {
	    if (!(this instanceof MultipleFileField)) { return new MultipleFileField(kwargs) }
	    FileField.call(this, kwargs)
	  }
	})

	MultipleFileField.prototype.getWidgetAttrs = function(widget) {
	  var attrs = FileField.prototype.getWidgetAttrs.call(this, widget)
	  attrs.multiple = true
	  return attrs
	}

	MultipleFileField.prototype.toJavaScript = function(data, initial) {
	  if (this.isEmptyValue(data)) {
	    return []
	  }

	  // If the browser doesn't support File objects, we can't do anything more
	  if (env.browser && is.String(data)) {
	    return data
	  }

	  for (var i = 0, l = data.length; i < l; i++) {
	    var file = data[i]

	    // File objects should have name and size attributes
	    if (typeof file.name == 'undefined' || typeof file.size == 'undefined') {
	      throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	    }

	    var name = file.name
	    var size = Number(file.size)

	    if (this.maxLength !== null && name.length > this.maxLength) {
	      throw ValidationError(this.errorMessages.maxLength, {
	        code: 'maxLength',
	        params: {max: this.maxLength, name:name, length: name.length}
	      })
	    }
	    if (!name) {
	      throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	    }
	    if (!this.allowEmptyFile && size === 0) {
	      throw ValidationError(this.errorMessages.empty, {
	        code: 'empty',
	        params: {name:name}
	      })
	    }
	  }

	  return data
	}

	MultipleFileField.prototype.clean = function(data, initial) {
	  if (this.isEmptyValue(data) && !this.isEmptyValue(initial)) {
	    return initial
	  }
	  return Field.prototype.clean.call(this, data)
	}

	MultipleFileField.prototype.validate = function(value) {
	  if (this.required && !value.length) {
	    throw ValidationError(this.errorMessages.required, {code: 'required'})
	  }
	}

	MultipleFileField.prototype._hasChanged = function(initial, data) {
	  return !this.isEmptyValue(data)
	}

	module.exports = MultipleFileField

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1)

	var BoundField = __webpack_require__(183)
	var ProgressMixin = __webpack_require__(221)

	/**
	 * Renders a "row" in a form. This can contain manually provided contents, or
	 * if a BoundField is given, it will be used to display a field's label, widget,
	 * error message(s), help text and async pending indicator.
	 */
	var FormRow = React.createClass({displayName: "FormRow",
	  mixins: [ProgressMixin],
	  propTypes: {
	    bf: React.PropTypes.instanceOf(BoundField)
	  , className: React.PropTypes.string
	  , component: React.PropTypes.any
	  , content: React.PropTypes.any
	  , hidden: React.PropTypes.bool
	  , __all__:function(props) {
	      if (!props.bf && !props.content) {
	        return new Error(
	          'Invalid props supplied to `FormRow`, either `bf` or `content` ' +
	          'must be specified.'
	        )
	      }
	      if (props.bf && props.content) {
	        return new Error(
	          'Both `bf` and `content` props were passed to `FormRow` - `bf` ' +
	          'will be ignored.'
	        )
	      }
	    }
	  },

	  getDefaultProps:function() {
	    return {
	      component: 'div'
	    }
	  },

	  render:function() {
	    var attrs = {}
	    if (this.props.className) {
	      attrs.className = this.props.className
	    }
	    if (this.props.hidden) {
	      attrs.style = {display: 'none'}
	    }
	    // If content was given, use it
	    if (this.props.content) {
	      return React.createElement(this.props.component, React.__spread({},  attrs), this.props.content)
	    }
	    // Otherwise render a BoundField
	    var bf = this.props.bf
	    var isPending = bf.isPending()
	    return React.createElement(this.props.component, React.__spread({},  attrs), 
	      bf.label && bf.labelTag(), " ", bf.render(), 
	      isPending && ' ', 
	      isPending && this.renderProgress(), 
	      bf.errors().render(), 
	      bf.helpText && ' ', 
	      bf.helpTextTag()
	    )
	  }
	})

	module.exports = FormRow

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var React = __webpack_require__(1)

	var ProgressMixin = {
	  propTypes: {
	    progress: React.PropTypes.any // Component or function to render async progress
	  },

	  renderProgress:function() {
	    if (!this.props.progress) {
	      return React.createElement("progress", null, "Validating...")
	    }
	    if (is.Function(this.props.progress)) {
	      return this.props.progress()
	    }
	    return React.createElement(this.props.progress, null)
	  }
	}

	module.exports = ProgressMixin

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var Concur = __webpack_require__(160)
	var getFormData = __webpack_require__(172)
	var is = __webpack_require__(161)
	var $__0=  __webpack_require__(167),formatObj=$__0.formatObj
	var object = __webpack_require__(162)

	var constants = __webpack_require__(217)
	var env = __webpack_require__(187)

	var BooleanField = __webpack_require__(181)
	var ErrorList = __webpack_require__(210)
	var Form = __webpack_require__(215)
	var HiddenInput = __webpack_require__(176)
	var IntegerField = __webpack_require__(206)
	var isFormAsync = __webpack_require__(223)

	var $__1=  __webpack_require__(158),ValidationError=$__1.ValidationError
	var $__2=  __webpack_require__(171),cancellable=$__2.cancellable

	function noop() {}

	// Name associated with clean() validation
	var CLEAN_VALIDATION = 'clean'

	// Special field names
	var DELETION_FIELD_NAME = 'DELETE'
	var INITIAL_FORM_COUNT = 'INITIAL_FORMS'
	var MAX_NUM_FORM_COUNT = 'MAX_NUM_FORMS'
	var MIN_NUM_FORM_COUNT = 'MIN_NUM_FORMS'
	var ORDERING_FIELD_NAME = 'ORDER'
	var TOTAL_FORM_COUNT = 'TOTAL_FORMS'

	// Default minimum number of forms in a formset
	var DEFAULT_MIN_NUM = constants.FORMSET_DEFAULT_MIN_NUM

	// Default maximum number of forms in a formset, to prevent memory exhaustion
	var DEFAULT_MAX_NUM = constants.FORMSET_DEFAULT_MAX_NUM

	/**
	 * ManagementForm is used to keep track of how many form instances are displayed
	 * on the page. If adding new forms via JavaScript, you should increment the
	 * count field of this form as well.
	 * @constructor
	 */
	var ManagementForm = (function() {
	  var fields = {}
	  fields[TOTAL_FORM_COUNT] = IntegerField({widget: HiddenInput})
	  fields[INITIAL_FORM_COUNT] = IntegerField({widget: HiddenInput})
	  // MIN_NUM_FORM_COUNT and MAX_NUM_FORM_COUNT are output with the rest of
	  // the management form, but only for the convenience of client-side
	  // code. The POST value of them returned from the client is not checked.
	  fields[MIN_NUM_FORM_COUNT] = IntegerField({required: false, widget: HiddenInput})
	  fields[MAX_NUM_FORM_COUNT] = IntegerField({required: false, widget: HiddenInput})
	  return Form.extend(fields)
	})()

	/**
	 * A collection of instances of the same Form.
	 * @constructor
	 * @param {Object=} kwargs
	 */
	var FormSet = Concur.extend({
	  prefixFormat: '{prefix}-{index}',

	  constructor: function FormSet(kwargs) {
	    // TODO Perform PropType checks on kwargs in development mode
	    kwargs = object.extend({
	      // Formset options
	      form: this.form || null, extra: is.Number(this.extra) ? this.extra : 1,
	      canOrder: this.canOrder || false, canDelete: this.canDelete || false,
	      maxNum: is.Number(this.maxNum) ? this.maxNum : DEFAULT_MAX_NUM,
	      validateMax: this.validateMax || false,
	      minNum: is.Number(this.minNum) ? this.minNum : DEFAULT_MIN_NUM,
	      validateMin: this.validateMin || false,
	      managementFormCssClass: this.magagementFormCssClass || null,
	      // Form options
	      data: null, files: null, autoId: 'id_{name}', prefix: null,
	      initial: null, errorConstructor: ErrorList, validation: null,
	      controlled: false, onChange: null
	    }, kwargs)

	    if (!is.Function(kwargs.form)) {
	      throw new Error(
	        'A FormSet must be given a Form constructor to use, either via its ' +
	        'constructor\'s `form` option or via its prototype, passing a `form` ' +
	        'property to `FormSet.extend()`.'
	      )
	    }

	    this.form = kwargs.form
	    this.extra = kwargs.extra + kwargs.minNum
	    this.canOrder = kwargs.canOrder
	    this.canDelete = kwargs.canDelete
	    this.maxNum = kwargs.maxNum
	    this.validateMax = kwargs.validateMax
	    this.minNum = kwargs.minNum
	    this.validateMin = kwargs.validateMin
	    // Hard limit on forms instantiated, to prevent memory-exhaustion attacks
	    // limit is simply maxNum + DEFAULT_MAX_NUM (which is 2 * DEFAULT_MAX_NUM
	    // if maxNum is not provided in the first place)
	    this.absoluteMax = kwargs.maxNum + DEFAULT_MAX_NUM

	    this.isInitialRender = (kwargs.data === null && kwargs.files === null)
	    this.prefix = kwargs.prefix || this.getDefaultPrefix()
	    this.autoId = kwargs.autoId
	    this.data = kwargs.data || {}
	    this.files = kwargs.files || {}
	    this.initial = kwargs.initial
	    this.errorConstructor = kwargs.errorConstructor
	    this.managementFormCssClass = kwargs.managementFormCssClass
	    this.validation = kwargs.validation
	    this.controlled = kwargs.controlled
	    this.onChange = kwargs.onChange

	    this._forms = null
	    this._errors = null
	    this._nonFormErrors = null

	    // Lookup for pending validation
	    this._pendingValidation = {}
	    // Cancellable callbacks for pending async validation
	    this._pendingAsyncValidation = {}
	    // Lookup for pending validation which formset cleaning depends on
	    this._cleanFormsetAfter = {}
	    // Callback to be run the next time validation finishes
	    this._onValidate = null
	  }
	})

	/**
	 * Tries to construct a display name for the formset for display in messages.
	 * @return {string}
	 */
	FormSet.prototype._formsetName = function() {
	  var name = this.displayName || this.constructor.name
	  return (name ? "'" + name + "'" : 'FormSet')
	}

	/**
	 * Calls the onChange function if it's been provided. This method will be called
	 * every time the formset makes a change to its state which requires redisplay.
	 */
	FormSet.prototype._stateChanged = function() {
	  if (typeof this.onChange == 'function') {
	    this.onChange()
	  }
	}

	// ============================================================== Validation ===

	/**
	 * Forces the formset to revalidate from scratch. If a <form> is given, data
	 * from it will be set on this formset's forms first. Otherwise, validation will
	 * be done with current input data.
	 * @param {(ReactElement|HTMLFormElement)=} form the <form> containing this
	 *   formset's rendered widgets - this can be a React <form> component or a real
	 *   <form> DOM node.
	 * @param {function(err, isValid, cleanedData)=} cb callback for asynchronous
	 *   validation.
	 * @return {boolean|undefined} true if the form only has synchronous validation
	 *   and is valid.
	 * @throws if the formset or its form has asynchronous validation and a callback
	 *   is not provided.
	 */
	FormSet.prototype.validate = function(form, cb) {
	  this._cancelPendingOperations()
	  if (is.Function(form)) {
	    cb = form
	    form = null
	  }
	  if (form) {
	    if (typeof form.getDOMNode == 'function') {
	      form = form.getDOMNode()
	    }
	    this.setData(getFormData(form), {
	      validate: false
	    , _triggerStateChange: false
	    })
	  }
	  return (this.isAsync() ? this._validateAsync(cb) : this._validateSync())
	}

	FormSet.prototype._validateAsync = function(cb) {
	  if (!is.Function(cb)) {
	    throw new Error(
	      'You must provide a callback to validate() when a formset or its form ' +
	      'has asynchronous validation.'
	    )
	  }
	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }
	  this._onValidate = cb
	  this.fullClean()
	  // Update state to display async progress indicators
	  this._stateChanged()
	}

	FormSet.prototype._validateSync = function() {
	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }
	  this.fullClean()
	  // Display changes to valid/invalid state
	  this._stateChanged()
	  return this.isValid()
	}

	/**
	 * Cleans all of this.data and populates this._errors and this._nonFormErrors.
	 */
	FormSet.prototype.fullClean = function() {
	  this._errors = []
	  this._nonFormErrors = new this.errorConstructor()

	  if (this.isInitialRender) {
	    return // Stop further processing
	  }

	  this._cleanForms()
	}

	/**
	 * Validates and cleans every form in the formset.
	 */
	FormSet.prototype._cleanForms = function() {
	  var forms = this.forms()
	  var formIndexLookup = object.lookup(Object.keys(forms))
	  object.extend(this._pendingValidation, formIndexLookup)
	  object.extend(this._cleanFormsetAfter, formIndexLookup)
	  for (var i = 0, l = forms.length; i < l; i++) {
	    this._cleanForm(i, forms[i])
	  }
	  // Make sure clean gets called even if the formset is empty
	  if (forms.length === 0) {
	    this._cleanFormsetAfter.empty = true
	    this._formCleaned('empty', null)
	  }
	}

	/**
	 * Validates and cleans the form at the given index.
	 * @param {number} index the index of the form in the formset.
	 * @param {Form} form
	 */
	FormSet.prototype._cleanForm = function(index, form) {
	  if (!form.isAsync()) {
	    form.validate()
	    this._errors[index] = form.errors()
	    this._formCleaned(index, null)
	    return
	  }

	  // If the form is async and there's one pending, prevent its callback from
	  // doing anything.
	  if (typeof this._pendingAsyncValidation[index] != 'undefined') {
	    object.pop(this._pendingAsyncValidation, index).cancel()
	  }
	  // Set up callback for async processing
	  var callback = function(err) {
	    if (!err) {
	      this._errors[index] = form.errors()
	    }
	    this._formCleaned(index, err)
	    this._stateChanged()
	  }.bind(this)
	  callback.onCancel = function() {
	    form._cancelPendingOperations()
	  }
	  this._pendingAsyncValidation[index] = cancellable(callback)
	  form.validate(callback)
	}

	/**
	 * Callback for completion of form cleaning. Triggers formset cleaning or
	 * signals the end of validation, as necessary.
	 * @param {number|string} name the name associated with the cleaning that's completed.
	 * @param {Error=} err an error caught while cleaning.
	 */
	FormSet.prototype._formCleaned = function(name, err) {
	  delete this._pendingValidation[name]
	  if (this._pendingAsyncValidation[name]) {
	    delete this._pendingAsyncValidation[name]
	  }

	  if (err) {
	    if ("production" !== process.env.NODE_ENV) {
	      console.error('Error cleaning formset[' + name + ']:' + err.message)
	    }
	    // Stop tracking validation progress on error, and don't call clean()
	    this._pendingValidation = {}
	    this._cleanFormsetAfter = {}
	    this._finishedValidation(err)
	    return
	  }

	  // Run clean() if this this was the last field it was waiting for
	  if (this._cleanFormsetAfter[name]) {
	    delete this._cleanFormsetAfter[name]
	    if (is.Empty(this._cleanFormsetAfter)) {
	      this._cleanFormset()
	      return
	    }
	  }

	  // Signal the end of validation if this was the last field we were waiting for
	  if (name == CLEAN_VALIDATION) {
	    this._finishedValidation(null)
	  }
	}

	/**
	 * Hook for doing any extra formset-wide cleaning after Form.clean() has been
	 * called on every form. Any ValidationError raised by this method will not be
	 * associated with a particular form; it will be accessible via
	 * formset.nonFormErrors()
	 */
	FormSet.prototype.clean = noop

	/**
	 * Validates the number of forms and calls the clean() hook.
	 */
	FormSet.prototype._cleanFormset = function() {
	  var async = false
	  var error = null
	  try {
	    var totalFormCount = this.totalFormCount()
	    var deletedFormCount = this.deletedForms().length
	    if ((this.validateMax && totalFormCount - deletedFormCount > this.maxNum) ||
	        (!env.browser && this.managementForm().cleanedData[TOTAL_FORM_COUNT] > this.absoluteMax)) {
	      throw ValidationError('Please submit ' + this.maxNum + ' or fewer forms.',
	                            {code: 'tooManyForms'})
	    }
	    if (this.validateMin && totalFormCount - deletedFormCount < this.minNum) {
	      throw ValidationError('Please submit ' + this.minNum + ' or more forms.',
	                            {code: 'tooFewForms'})
	    }
	    // Give this.clean() a chance to do cross-form validation.
	    if (this.clean !== noop) {
	      async = this._runCustomClean(CLEAN_VALIDATION, this.clean)
	    }
	  }
	  catch (e) {
	    if (e instanceof ValidationError) {
	      this._nonFormErrors = new this.errorConstructor(e.messages())
	    }
	    else {
	      error = e
	    }
	  }

	  if (!async) {
	    this._formCleaned(CLEAN_VALIDATION, error)
	  }
	}

	/**
	 * Calls a custom cleaning method, expecting synchronous or asynchronous
	 * behaviour, depending on its arity.
	 * @param {string} name a name to associate with the cleaning method.
	 * @param {function} customClean
	 * @return {boolean} true if cleaning is running asynchronously, false if it just
	 *   ran synchronously.
	 */
	FormSet.prototype._runCustomClean = function(name, customClean) {
	  // Check arity to see if we have a callback in the function signature
	  if (customClean.length === 0) {
	    // Synchronous processing only expected
	    customClean.call(this)
	    return false
	  }

	  // If custom validation is async and there's one pending, prevent its
	  // callback from doing anything.
	  if (typeof this._pendingAsyncValidation[name] != 'undefined') {
	    object.pop(this._pendingAsyncValidation, name).cancel()
	  }
	  // Set up callback for async processing - arguments for addError()
	  // should be passed via the callback as calling it directly prevents us
	  // from completely ignoring the callback if validation fires again.
	  var callback = function(err, validationError) {
	    if (typeof validationError != 'undefined') {
	      this.addError(validationError)
	    }
	    this._formCleaned(name, err)
	    this._stateChanged()
	  }.bind(this)

	  // An explicit return value of false indicates that async processing is
	  // being skipped (e.g. because sync checks in the method failed first)
	  var returnValue = customClean.call(this, callback)
	  if (returnValue !== false) {
	    // Async processing is happening! Make the callback cancellable and
	    // hook up any custom onCancel handling provided.
	    if (returnValue && typeof returnValue.onCancel == 'function') {
	      callback.onCancel = returnValue.onCancel
	    }
	    this._pendingAsyncValidation[name] = cancellable(callback)
	    return true
	  }
	}

	FormSet.prototype._finishedValidation = function(err) {
	  if (!this.isAsync()) {
	    if (err) {
	      throw err
	    }
	    // Synchronous formset validation results will be returned via the original
	    // call which triggered validation.
	    return
	  }
	  if (is.Function(this._onValidate)) {
	    var callback = this._onValidate
	    this._onValidate = null
	    if (err) {
	      return callback(err)
	    }
	    var isValid = this.isValid()
	    callback(null, isValid, isValid ? this.cleanedData() : null)
	  }
	}

	/**
	 * Cancels any pending async validations.
	 */
	FormSet.prototype._cancelPendingOperations = function() {
	  Object.keys(this._pendingAsyncValidation).forEach(function(field) {
	    object.pop(this._pendingAsyncValidation, field).cancel()
	  }.bind(this))
	}

	/**
	 * Returns a list of form.cleanedData objects for every form in this.forms().
	 */
	FormSet.prototype.cleanedData = function() {
	  var forms = this.initialForms()
	  // Don't include empty or incomplete extra forms
	  forms.push.apply(forms, this.extraForms().filter(function(form) {
	    return form.hasChanged() && form.isComplete()
	  }))
	  return forms.map(function(form) { return form.cleanedData })
	}


	// ============================================================== Mutability ===

	/**
	 * Sets the formset's entire input data, also triggering validation by default.
	 * @param {Object.<string,*>} data new input data for forms, which must be
	 *   prefixed for uniqueness.
	 * @param {Object.<string,boolean>} kwargs data setting options.
	 * @return {boolean} if date setting options indicate the new data should be
	 *   validated, true if the new data is valid.
	 */
	FormSet.prototype.setData = function(data, kwargs) {
	  kwargs = object.extend({validate: true, _triggerStateChange: true}, kwargs)

	  this.data = data
	  var formDataSettingOptions = {
	    prefixed: true, validate: kwargs.validate, _triggerStateChange: false
	  }
	  this.forms().forEach(function(form) {
	    form.setData(data, formDataSettingOptions)
	  })

	  if (this.isInitialRender) {
	    this.isInitialRender = false
	  }
	  if (kwargs.validate) {
	    this._errors = null
	    // This call ultimately triggers a fullClean() because _errors is null
	    var isValid = this.isValid()
	  }
	  else {
	    // Prevent validation being triggered if errors() is accessed during render
	    this._errors = []
	    this._nonFormErrors = new this.errorConstructor()
	  }

	  if (kwargs._triggerStateChange) {
	    this._stateChanged()
	  }

	  if (kwargs.validate) {
	    return isValid
	  }
	}

	/**
	 * Alias to keep the FormSet data setting API the same as Form's.
	 */
	FormSet.prototype.setFormData = FormSet.prototype.setData

	// =================================================================== Forms ===

	/**
	 * Returns the ManagementForm instance for this FormSet.
	 * @browser the form is unbound and uses initial data from this FormSet.
	 * @server the form is bound to submitted data.
	 */
	FormSet.prototype.managementForm = function() {
	  var form
	  if (!env.browser && !this.isInitialRender) {
	    form = new ManagementForm({data: this.data, autoId: this.autoId,
	                               prefix: this.prefix})
	    if (!form.isValid()) {
	      throw ValidationError('ManagementForm data is missing or has been tampered with',
	                            {code: 'missing_management_form'})
	    }
	  }
	  else {
	    var initial = {}
	    initial[TOTAL_FORM_COUNT] = this.totalFormCount()
	    initial[INITIAL_FORM_COUNT] = this.initialFormCount()
	    initial[MIN_NUM_FORM_COUNT] = this.minNum
	    initial[MAX_NUM_FORM_COUNT] = this.maxNum
	    form = new ManagementForm({autoId: this.autoId,
	                               prefix: this.prefix,
	                               initial: initial})
	  }
	  if (this.managementFormCssClass !== null) {
	    form.hiddenFieldRowCssClass = this.managementFormCssClass
	  }
	  return form
	}

	/**
	 * Determines the number of form instances this formset contains, based on
	 * either submitted management data or initial configuration, as appropriate.
	 */
	FormSet.prototype.totalFormCount = function() {
	  if (!env.browser && !this.isInitialRender) {
	    // Return absoluteMax if it is lower than the actual total form count in
	    // the data; this is DoS protection to prevent clients  from forcing the
	    // server to instantiate arbitrary numbers of forms.
	    return Math.min(this.managementForm().cleanedData[TOTAL_FORM_COUNT], this.absoluteMax)
	  }
	  else {
	    var initialForms = this.initialFormCount()
	    var totalForms = this.initialFormCount() + this.extra
	    // Allow all existing related objects/inlines to be displayed, but don't
	    // allow extra beyond max_num.
	    if (this.maxNum !== null &&
	        initialForms > this.maxNum &&
	        this.maxNum >= 0) {
	      totalForms = initialForms
	    }
	    if (this.maxNum !== null &&
	        totalForms > this.maxNum &&
	        this.maxNum >= 0) {
	      totalForms = this.maxNum
	    }
	    return totalForms
	  }
	}

	/**
	 * Determines the number of initial form instances this formset contains, based
	 * on either submitted management data or initial configuration, as appropriate.
	 */
	FormSet.prototype.initialFormCount = function() {
	  if (!env.browser && !this.isInitialRender) {
	    return this.managementForm().cleanedData[INITIAL_FORM_COUNT]
	  }
	  else {
	    // Use the length of the initial data if it's there, 0 otherwise.
	    return (this.initial !== null && this.initial.length > 0
	            ? this.initial.length
	            : 0)
	  }
	}

	/**
	 * Instantiates forms when first accessed.
	 */
	FormSet.prototype.forms = function() {
	  if (this._forms !== null) { return this._forms }
	  var forms = []
	  var totalFormCount = this.totalFormCount()
	  for (var i = 0; i < totalFormCount; i++) {
	    forms.push(this._constructForm(i))
	  }
	  this._forms = forms
	  return forms
	}

	/**
	 * Adds another form and increments extra.
	 */
	FormSet.prototype.addAnother = function() {
	  var currentFormCount = this.totalFormCount()
	  this.extra++
	  if (this._forms !== null) {
	    this._forms[currentFormCount] = this._constructForm(currentFormCount)
	  }
	 this._stateChanged()
	}

	// Assumption - the UI will only let the user remove extra forms
	FormSet.prototype.removeForm = function(index) {
	  if (this.extra === 0) {
	    throw new Error("Can't remove a form when there are no extra forms")
	  }
	  this.extra--
	  if (this._forms !== null) {
	    this._forms.splice(index, 1)
	  }
	  if (this._errors !== null) {
	    this._errors.splice(index, 1)
	  }
	 this._stateChanged()
	}

	/**
	 * Instantiates and returns the ith form instance in the formset.
	 */
	FormSet.prototype._constructForm = function(i) {
	  var defaults = {
	    autoId: this.autoId
	  , prefix: this.addPrefix(i)
	  , errorConstructor: this.errorConstructor
	  , validation: this.validation
	  , controlled: this.controlled
	  , onChange: this.onChange
	  }
	  if (!this.isInitialRender) {
	    defaults.data = this.data
	    defaults.files = this.files
	  }
	  if (this.initial !== null && this.initial.length > 0) {
	    if (typeof this.initial[i] != 'undefined') {
	      defaults.initial = this.initial[i]
	    }
	  }
	  // Allow extra forms to be empty
	  if (i >= this.initialFormCount()) {
	    defaults.emptyPermitted = true
	  }

	  var form = new this.form(defaults)
	  this.addFields(form, i)
	  return form
	}

	/**
	 * Returns a list of all the initial forms in this formset.
	 */
	FormSet.prototype.initialForms = function() {
	  return this.forms().slice(0, this.initialFormCount())
	}

	/**
	 * Returns a list of all the extra forms in this formset.
	 */
	FormSet.prototype.extraForms = function() {
	  return this.forms().slice(this.initialFormCount())
	}

	FormSet.prototype.emptyForm = function() {
	  var kwargs = {
	    autoId: this.autoId,
	    prefix: this.addPrefix('__prefix__'),
	    emptyPermitted: true
	  }
	  var form = new this.form(kwargs)
	  this.addFields(form, null)
	  return form
	}

	/**
	 * Returns a list of forms that have been marked for deletion.
	 */
	FormSet.prototype.deletedForms = function() {
	  if (!this.isValid() || !this.canDelete) { return [] }

	  var forms = this.forms()

	  // Construct _deletedFormIndexes, which is just a list of form indexes
	  // that have had their deletion widget set to true.
	  if (typeof this._deletedFormIndexes == 'undefined') {
	    this._deletedFormIndexes = []
	    for (var i = 0, l = forms.length; i < l; i++) {
	      var form = forms[i]
	      // If this is an extra form and hasn't changed, ignore it
	      if (i >= this.initialFormCount() && !form.hasChanged()) {
	        continue
	      }
	      if (this._shouldDeleteForm(form)) {
	        this._deletedFormIndexes.push(i)
	      }
	    }
	  }

	  return this._deletedFormIndexes.map(function(i) { return forms[i] })
	}

	/**
	 * Returns a list of forms in the order specified by the incoming data.
	 * Throws an Error if ordering is not allowed.
	 */
	FormSet.prototype.orderedForms = function() {
	  if (!this.isValid() || !this.canOrder) {
	    throw new Error(this.constructor.name +
	                    " object has no attribute 'orderedForms'")
	  }

	  var forms = this.forms()

	  // Construct _ordering, which is a list of [form index, orderFieldValue]
	  // pairs. After constructing this list, we'll sort it by orderFieldValue
	  // so we have a way to get to the form indexes in the order specified by
	  // the form data.
	  if (typeof this._ordering == 'undefined') {
	    this._ordering = []
	    for (var i = 0, l = forms.length; i < l; i++) {
	      var form = forms[i]
	      // If this is an extra form and hasn't changed, ignore it
	      if (i >= this.initialFormCount() && !form.hasChanged()) {
	        continue
	      }
	      // Don't add data marked for deletion
	      if (this.canDelete && this._shouldDeleteForm(form)) {
	        continue
	      }
	      this._ordering.push([i, form.cleanedData[ORDERING_FIELD_NAME]])
	    }

	    // Null should be sorted below anything else. Allowing null as a
	    // comparison value makes it so we can leave ordering fields blank.
	    this._ordering.sort(function(x, y) {
	      if (x[1] === null && y[1] === null) {
	        // Sort by form index if both order field values are null
	        return x[0] - y[0]
	      }
	      if (x[1] === null) {
	        return 1
	      }
	      if (y[1] === null) {
	        return -1
	      }
	      return x[1] - y[1]
	    })
	  }

	  return this._ordering.map(function(ordering) { return forms[ordering[0]]})
	}

	/**
	 * A hook for adding extra fields on to each form instance.
	 * @param {Form} form the form fields are to be added to.
	 * @param {Number} index the index of the given form in the formset.
	 */
	FormSet.prototype.addFields = function(form, index) {
	  if (this.canOrder) {
	    // Only pre-fill the ordering field for initial forms
	    if (index != null && index < this.initialFormCount()) {
	      form.fields[ORDERING_FIELD_NAME] =
	          IntegerField({label: 'Order', initial: index + 1,
	                        required: false})
	    }
	    else {
	      form.fields[ORDERING_FIELD_NAME] =
	          IntegerField({label: 'Order', required: false})
	    }
	  }
	  if (this.canDelete) {
	    form.fields[DELETION_FIELD_NAME] =
	        BooleanField({label: 'Delete', required: false})
	  }
	}

	/**
	 * Returns whether or not the form was marked for deletion.
	 */
	FormSet.prototype._shouldDeleteForm = function(form) {
	  return object.get(form.cleanedData, DELETION_FIELD_NAME, false)
	}

	// ================================================================== Errors ===

	FormSet.prototype.addError = function(error) {
	  if (!(error instanceof ValidationError)) {
	    // Normalise to ValidationError and let its constructor do the hard work of
	    // making sense of the input.
	    error = ValidationError(error)
	  }

	  this._nonFormErrors.extend(error.errorList)
	}

	/**
	 * Returns a list of form.errors for every form in this.forms.
	 */
	FormSet.prototype.errors = function() {
	  if (this._errors === null) {
	    this.fullClean()
	  }
	  return this._errors
	}

	/**
	 * Returns an ErrorList of errors that aren't associated with a particular
	 * form -- i.e., from formset.clean(). Returns an empty ErrorList if there are
	 * none.
	 */
	FormSet.prototype.nonFormErrors = function() {
	  if (this._nonFormErrors === null) {
	    this.fullClean()
	  }
	  return this._nonFormErrors
	}

	/**
	 * Returns the number of errors across all forms in the formset.
	 */
	FormSet.prototype.totalErrorCount = function() {
	  return (this.nonFormErrors().length() +
	          this.errors().reduce(function(sum, formErrors) {
	            return sum + formErrors.length()
	          }, 0))
	}

	// ================================================================== Status ===

	/**
	 * Returns true if any form differs from initial.
	 */
	FormSet.prototype.hasChanged = function() {
	  var forms = this.forms()
	  for (var i = 0, l = forms.length; i < l; i++) {
	    if (forms[i].hasChanged()) {
	      return true
	    }
	  }
	  return false
	}

	/**
	 * @return {boolean} true if the formset needs a callback argument for final
	 *   validation.
	 */
	FormSet.prototype.isAsync = function() {
	  return (this.clean.length == 1 || isFormAsync(this.form))
	}

	/**
	 * @return {boolean} true if the formset needs to be multipart-encoded, i.e. it
	 * has a FileInput. Otherwise, false.
	 */
	FormSet.prototype.isMultipart = function() {
	  return (this.forms().length > 0 && this.forms()[0].isMultipart())
	}

	/**
	 * @return {boolean} true if the formset is waiting for async validation to
	 *   complete.
	 */
	FormSet.prototype.isPending = function() {
	  return !is.Empty(this._pendingAsyncValidation)
	}

	/**
	 * Returns true if every form in this.forms() is valid and there are no non-form
	 * errors.
	 */
	FormSet.prototype.isValid = function() {
	  if (this.isInitialRender) {
	    return false
	  }
	  // Triggers a full clean
	  var errors = this.errors()
	  var forms = this.forms()
	  for (var i = 0, l = errors.length; i < l ; i++) {
	    if (errors[i].isPopulated()) {
	      if (this.canDelete && this._shouldDeleteForm(forms[i])) {
	        // This form is going to be deleted so any of its errors should
	        // not cause the entire formset to be invalid.
	        continue
	      }
	      return false
	    }
	  }
	  return !this.nonFormErrors().isPopulated()
	}

	/**
	 * @return {boolean} true if the formset is waiting for async validation of its
	 *   clean() method to complete.
	 */
	FormSet.prototype.nonFormPending = function() {
	  return typeof this._pendingAsyncValidation[CLEAN_VALIDATION] != 'undefined'
	}

	// ================================================================ Prefixes ===

	/**
	 * Returns the formset prefix with the form index appended.
	 * @param {Number} index the index of a form in the formset.
	 */
	FormSet.prototype.addPrefix = function(index) {
	  return formatObj(this.prefixFormat, {prefix: this.prefix, index: index})
	}

	FormSet.prototype.getDefaultPrefix = function() {
	  return 'form'
	}

	module.exports = FormSet
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)

	function isFormAsync(constructor) {
	  var proto = constructor.prototype
	  if (proto.clean.length == 1) { return true }
	  var fieldNames = Object.keys(proto.baseFields)
	  for (var i = 0, l = fieldNames.length; i < l ; i++) {
	    var customClean = proto._getCustomClean(fieldNames[i])
	    if (is.Function(customClean) && customClean.length == 1) {
	      return true
	    }
	  }
	  return false
	}

	module.exports = isFormAsync

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var validators = __webpack_require__(158)

	var CharField = __webpack_require__(185)

	var cleanIPv6Address = validators.ipv6.cleanIPv6Address

	var GenericIPAddressField = CharField.extend({
	  constructor: function GenericIPAddressField(kwargs) {
	    if (!(this instanceof GenericIPAddressField)) { return new GenericIPAddressField(kwargs) }
	    kwargs = object.extend({protocol: 'both', unpackIPv4: false}, kwargs)
	    this.unpackIPv4 = kwargs.unpackIPv4
	    this.defaultValidators =
	      validators.ipAddressValidators(kwargs.protocol, kwargs.unpackIPv4).validators
	    CharField.call(this, kwargs)
	  }
	})

	GenericIPAddressField.prototype.toJavaScript = function(value) {
	  if (!value) {
	    return ''
	  }
	  if (value && value.indexOf(':') != -1) {
	    return cleanIPv6Address(value, {unpackIPv4: this.unpackIPv4})
	  }
	  return value
	}


	module.exports = GenericIPAddressField

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var FileField = __webpack_require__(212)

	/**
	 * Validates that its input is a valid uploaded image.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var ImageField = FileField.extend({
	  defaultErrorMessages: {
	    invalidImage: 'Upload a valid image. The file you uploaded was either not an image or a corrupted image.'
	  }

	, constructor: function ImageField(kwargs) {
	    if (!(this instanceof ImageField)) { return new ImageField(kwargs) }
	    FileField.call(this, kwargs)
	  }
	})

	/**
	 * Checks that the file-upload field data contains a valid image.
	 */
	ImageField.prototype.toJavaScript = function(data, initial) {
	  var f = FileField.prototype.toJavaScript.call(this, data, initial)
	  if (f === null) {
	    return null
	  }

	  // TODO Plug in image processing code when running on the server

	  return f
	}

	ImageField.prototype.getWidgetAttrs = function(widget) {
	  var attrs = FileField.prototype.getWidgetAttrs.call(this, widget)
	  attrs.accept = 'image/*'
	  return attrs
	}


	module.exports = ImageField

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CharField = __webpack_require__(185)

	var $__0=  __webpack_require__(158),validateIPv4Address=$__0.validateIPv4Address

	/**
	 * Validates that its input is a valid IPv4 address.
	 * @constructor
	 * @extends {CharField}
	 * @param {Object=} kwargs
	 * @deprecated in favour of GenericIPAddressField
	 */
	var IPAddressField = CharField.extend({
	  defaultValidators: [validateIPv4Address]

	, constructor: function IPAddressField(kwargs) {
	    if (!(this instanceof IPAddressField)) { return new IPAddressField(kwargs) }
	    CharField.call(this, kwargs)
	  }
	})

	module.exports = IPAddressField

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var ChoiceField = __webpack_require__(196)
	var MultipleHiddenInput = __webpack_require__(228)
	var SelectMultiple = __webpack_require__(194)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * Validates that its input is one or more of a valid list of choices.
	 * @constructor
	 * @extends {ChoiceField}
	 * @param {Object=} kwargs
	 */
	var MultipleChoiceField = ChoiceField.extend({
	  hiddenWidget: MultipleHiddenInput
	, widget: SelectMultiple
	, defaultErrorMessages: {
	    invalidChoice: 'Select a valid choice. {value} is not one of the available choices.'
	  , invalidList: 'Enter a list of values.'
	  }

	, constructor: function MultipleChoiceField(kwargs) {
	    if (!(this instanceof MultipleChoiceField)) { return new MultipleChoiceField(kwargs) }
	    ChoiceField.call(this, kwargs)
	  }
	})

	MultipleChoiceField.prototype.toJavaScript = function(value) {
	  if (this.isEmptyValue(value)) {
	    return []
	  }
	  else if (!is.Array(value)) {
	    throw ValidationError(this.errorMessages.invalidList, {code: 'invalidList'})
	  }
	  var stringValues = []
	  for (var i = 0, l = value.length; i < l; i++) {
	    stringValues.push(''+value[i])
	  }
	  return stringValues
	}

	/**
	 * Validates that the input is a list and that each item is in this field's
	 * choices.
	 * @param {Array.<string>} value user input.
	 * @throws {ValidationError} if the input is invalid.
	 */
	MultipleChoiceField.prototype.validate = function(value) {
	  if (this.required && !value.length) {
	    throw ValidationError(this.errorMessages.required, {code: 'required'})
	  }
	  for (var i = 0, l = value.length; i < l; i++) {
	    if (!this.validValue(value[i])) {
	      throw ValidationError(this.errorMessages.invalidChoice, {
	        code: 'invalidChoice'
	      , params: {value: value[i]}
	      })
	    }
	  }
	}

	MultipleChoiceField.prototype._hasChanged = function(initial, data) {
	  if (initial === null) {
	    initial = []
	  }
	  if (data === null) {
	    data = []
	  }
	  if (initial.length != data.length) {
	    return true
	  }
	  var dataLookup = object.lookup(data)
	  for (var i = 0, l = initial.length; i < l; i++) {
	    if (typeof dataLookup[''+initial[i]] == 'undefined') {
	      return true
	    }
	  }
	  return false
	}

	module.exports = MultipleChoiceField

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var HiddenInput = __webpack_require__(176)

	/**
	 * A widget that handles <input type="hidden"> for fields that have a list of
	 * values.
	 * @constructor
	 * @extends {HiddenInput}
	 * @param {Object=} kwargs
	 */
	var MultipleHiddenInput = HiddenInput.extend({
	  constructor: function MultipleHiddenInput(kwargs) {
	    if (!(this instanceof MultipleHiddenInput)) { return new MultipleHiddenInput(kwargs) }
	    HiddenInput.call(this, kwargs)
	  }
	})

	MultipleHiddenInput.prototype.render = function(name, value, kwargs) {
	  kwargs = object.extend({attrs: null}, kwargs)
	  if (value === null) {
	    value = []
	  }
	  var finalAttrs = this.buildAttrs(kwargs.attrs, {type: this.inputType,
	                                                  name: name})
	  var id = object.get(finalAttrs, 'id', null)
	  var key = object.get(finalAttrs, 'key', null)
	  var inputs = []
	  for (var i = 0, l = value.length; i < l; i++) {
	    var inputAttrs = object.extend({}, finalAttrs, {value: value[i]})
	    // Add numeric index suffixes to attributes which should be unique
	    if (id) {
	      inputAttrs.id = id + '_' + i
	    }
	    if (key) {
	      inputAttrs.key = id + '_' + i
	    }
	    inputs.push(React.createElement('input', inputAttrs))
	  }
	  return React.createElement('div', null, inputs)
	}

	MultipleHiddenInput.prototype.valueFromData = function(data, files, name) {
	  if (typeof data[name] != 'undefined') {
	    return [].concat(data[name])
	  }
	  return null
	}

	module.exports = MultipleHiddenInput

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var Field = __webpack_require__(175)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * A Field that aggregates the logic of multiple Fields.
	 * Its clean() method takes a "decompressed" list of values, which are then
	 * cleaned into a single value according to this.fields. Each value in this
	 * list is cleaned by the corresponding field -- the first value is cleaned by
	 * the first field, the second value is cleaned by the second field, etc. Once
	 * all fields are cleaned, the list of clean values is "compressed" into a
	 * single value.
	 * Subclasses should not have to implement clean(). Instead, they must
	 * implement compress(), which takes a list of valid values and returns a
	 * "compressed" version of those values -- a single value.
	 * You'll probably want to use this with MultiWidget.
	 * @constructor
	 * @extends {Field}
	 * @param {Object=} kwargs
	 */
	var MultiValueField = Field.extend({
	  defaultErrorMessages: {
	    invalid: 'Enter a list of values.'
	  , incomplete: 'Enter a complete value.'
	  }

	, constructor: function MultiValueField(kwargs) {
	    if (!(this instanceof Field)) { return new MultiValueField(kwargs) }
	    kwargs = object.extend({fields: []}, kwargs)
	    this.requireAllFields = object.pop(kwargs, 'requireAllFields', true)
	    Field.call(this, kwargs)

	    for (var i = 0, l = kwargs.fields.length; i < l; i++) {
	      var f = kwargs.fields[i]
	      object.setDefault(f.errorMessages, 'incomplete',
	                        this.errorMessages.incomplete)
	      if (this.requireAllFields) {
	        // Set required to false on the individual fields, because the required
	        // validation will be handled by MultiValueField, not by those
	        // individual fields.
	        f.required = false
	      }
	    }
	    this.fields = kwargs.fields
	  }
	})

	MultiValueField.prototype.validate = function() {}

	/**
	 * Validates every value in the given list. A value is validated against the
	 * corresponding Field in this.fields.
	 * For example, if this MultiValueField was instantiated with
	 * {fields: [forms.DateField(), forms.TimeField()]}, clean() would call
	 * DateField.clean(value[0]) and TimeField.clean(value[1]).
	 * @param {Array} value user input for each field.
	 * @return the result of calling compress() on the cleaned input.
	 * @throws {ValidationError} if the input is invalid.
	 */
	MultiValueField.prototype.clean = function(value) {
	  var cleanData = []
	  var errors = []

	  if (!value || is.Array(value)) {
	    var allValuesEmpty = true
	    if (is.Array(value)) {
	      for (var i = 0, l = value.length; i < l; i++) {
	        if (value[i]) {
	          allValuesEmpty = false
	          break
	        }
	      }
	    }

	    if (!value || allValuesEmpty) {
	      if (this.required) {
	        throw ValidationError(this.errorMessages.required, {code: 'required'})
	      }
	      else {
	        return this.compress([])
	      }
	    }
	  }
	  else {
	    throw ValidationError(this.errorMessages.invalid, {code: 'invalid'})
	  }

	  for (i = 0, l = this.fields.length; i < l; i++) {
	    var field = this.fields[i]
	    var fieldValue = value[i]
	    if (fieldValue === undefined) {
	      fieldValue = null
	    }
	    if (this.isEmptyValue(fieldValue)) {
	      if (this.requireAllFields) {
	        // Throw a 'required' error if the MultiValueField is required and any
	        // field is empty.
	        if (this.required) {
	          throw ValidationError(this.errorMessages.required, {code: 'required'})
	        }
	      }
	      else if (field.required) {
	        // Otherwise, add an 'incomplete' error to the list of collected errors
	        // and skip field cleaning, if a required field is empty.
	        if (errors.indexOf(field.errorMessages.incomplete) == -1) {
	          errors.push(field.errorMessages.incomplete)
	        }
	        continue
	      }
	    }

	    try {
	      cleanData.push(field.clean(fieldValue))
	    }
	    catch (e) {
	      if (!(e instanceof ValidationError)) { throw e }
	      // Collect all validation errors in a single list, which we'll throw at
	      // the end of clean(), rather than throwing a single exception for the
	      // first error we encounter. Skip duplicates.
	      errors = errors.concat(e.messages().filter(function(m) {
	        return errors.indexOf(m) == -1
	      }))
	    }
	  }

	  if (errors.length !== 0) {
	    throw ValidationError(errors)
	  }

	  var out = this.compress(cleanData)
	  this.validate(out)
	  this.runValidators(out)
	  return out
	}

	/**
	 * Returns a single value for the given list of values. The values can be
	 * assumed to be valid.
	 * For example, if this MultiValueField was instantiated with
	 * {fields: [forms.DateField(), forms.TimeField()]}, this might return a Date
	 * object created by combining the date and time in dataList.
	 * @param {Array} dataList
	 * @abstract
	 */
	MultiValueField.prototype.compress = function(dataList) {
	  throw new Error('Subclasses must implement this method.')
	}

	MultiValueField.prototype._hasChanged = function(initial, data) {
	  if (initial === null) {
	    initial = []
	    for (var i = 0, l = data.length; i < l; i++) {
	      initial.push('')
	    }
	  }
	  else if (!(is.Array(initial))) {
	    initial = this.widget.decompress(initial)
	  }

	  for (i = 0, l = this.fields.length; i < l; i++) {
	    if (this.fields[i]._hasChanged(initial[i], data[i])) {
	      return true
	    }
	  }
	  return false
	}

	module.exports = MultiValueField

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var Widget = __webpack_require__(178)

	/**
	 * A widget that is composed of multiple widgets.
	 * @constructor
	 * @extends {Widget}
	 * @param {Object=} kwargs
	 */
	var MultiWidget = Widget.extend({
	  constructor: function MultiWidget(widgets, kwargs) {
	    if (!(this instanceof MultiWidget)) { return new MultiWidget(widgets, kwargs) }
	    this.widgets = []
	    var needsMultipartForm = false
	    for (var i = 0, l = widgets.length; i < l; i++) {
	      var widget = widgets[i] instanceof Widget ? widgets[i] : new widgets[i]()
	      if (widget.needsMultipartForm) {
	        needsMultipartForm = true
	      }
	      this.widgets.push(widget)
	    }
	    this.needsMultipartForm = needsMultipartForm
	    Widget.call(this, kwargs)
	  }
	})

	/**
	 * This method is different than other widgets', because it has to figure out
	 * how to split a single value for display in multiple widgets.
	 *
	 * If the given value is NOT a list, it will first be "decompressed" into a list
	 * before it is rendered by calling the  MultiWidget#decompress function.
	 *
	 * Each value in the list is rendered  with the corresponding widget -- the
	 * first value is rendered in the first widget, the second value is rendered in
	 * the second widget, and so on.
	 *
	 * @param {string} name the field name.
	 * @param {(array.<*>|*)} value a list of values, or a normal value (e.g., a String that has
	 *   been "compressed" from a list of values).
	 * @param {Object=} kwargs rendering options.
	 * @return a rendered collection of widgets.
	 */
	MultiWidget.prototype.render = function(name, value, kwargs) {
	  kwargs = object.extend({}, kwargs)
	  if (!(is.Array(value))) {
	    value = this.decompress(value)
	  }
	  var finalAttrs = this.buildAttrs(kwargs.attrs, {'data-newforms-field': name})
	  var id = object.get(finalAttrs, 'id', null)
	  var key = object.get(finalAttrs, 'key', null)
	  var renderedWidgets = []
	  for (var i = 0, l = this.widgets.length; i < l; i++) {
	    var widget = this.widgets[i]
	    var widgetValue = null
	    if (typeof value[i] != 'undefined') {
	      widgetValue = value[i]
	    }
	    if (id) {
	      finalAttrs.id = id + '_' + i
	    }
	    if (key) {
	      finalAttrs.key = key + '_' + i
	    }
	    renderedWidgets.push(
	        widget.render(name + '_' + i, widgetValue, {attrs: finalAttrs,
	                                                    controlled: kwargs.controlled}))
	  }
	  return this.formatOutput(renderedWidgets)
	}

	MultiWidget.prototype.idForLabel = function(id) {
	  if (id) {
	    id += '_0'
	  }
	  return id
	}

	MultiWidget.prototype.valueFromData = function(data, files, name) {
	  var values = []
	  for (var i = 0, l = this.widgets.length; i < l; i++) {
	    values[i] = this.widgets[i].valueFromData(data, files, name + '_' + i)
	  }
	  return values
	}

	/**
	 * Creates an element containing a given list of rendered widgets.
	 *
	 * This hook allows you to format the HTML design of the widgets, if needed.
	 *
	 * @param {Array} renderedWidgets a list of rendered widgets.
	 * @return a <div> containing the rendered widgets.
	 */
	MultiWidget.prototype.formatOutput = function(renderedWidgets) {
	  return React.createElement('div', null, renderedWidgets)
	}

	/**
	 * Creates a list of decompressed values for the given compressed value.
	 * @abstract
	 * @param value a compressed value, which can be assumed to be valid, but not
	 *   necessarily non-empty.
	 * @return a list of decompressed values for the given compressed value.
	 */
	MultiWidget.prototype.decompress = function(value) {
	  throw new Error('MultiWidget subclasses must implement a decompress() method.')
	}

	module.exports = MultiWidget

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BooleanField = __webpack_require__(181)
	var NullBooleanSelect = __webpack_require__(232)

	/**
	 * A field whose valid values are null, true and false.
	 * Invalid values are cleaned to null.
	 * @constructor
	 * @extends {BooleanField}
	 * @param {Object=} kwargs
	 */
	var NullBooleanField = BooleanField.extend({
	  widget: NullBooleanSelect

	, constructor: function NullBooleanField(kwargs) {
	    if (!(this instanceof NullBooleanField)) { return new NullBooleanField(kwargs) }
	    BooleanField.call(this, kwargs)
	  }
	})

	NullBooleanField.prototype.toJavaScript = function(value) {
	  // Explicitly checks for the string 'True' and 'False', which is what a
	  // hidden field will submit for true and false, and for '1' and '0', which
	  // is what a RadioField will submit. Unlike the BooleanField we also need
	  // to check for true, because we are not using Boolean() function.
	  if (value === true || value == 'True' || value == 'true' || value == '1') {
	    return true
	  }
	  else if (value === false || value == 'False' || value == 'false' || value == '0') {
	    return false
	  }
	  return null
	}

	NullBooleanField.prototype.validate = function(value) {}

	NullBooleanField.prototype._hasChanged = function(initial, data) {
	  // null (unknown) and false (No) are not the same
	  if (initial !== null) {
	      initial = Boolean(initial)
	  }
	  if (data !== null) {
	      data = Boolean(data)
	  }
	  return initial != data
	}

	module.exports = NullBooleanField

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Select = __webpack_require__(195)

	/**
	 * A <select> widget intended to be used with NullBooleanField.
	 * @constructor
	 * @extends {Select}
	 * @param {Object=} kwargs
	 */
	var NullBooleanSelect = Select.extend({
	  constructor: function NullBooleanSelect(kwargs) {
	    if (!(this instanceof NullBooleanSelect)) { return new NullBooleanSelect(kwargs) }
	    kwargs = kwargs || {}
	    // Set or override choices
	    kwargs.choices = [['1', 'Unknown'], ['2', 'Yes'], ['3', 'No']]
	    Select.call(this, kwargs)
	  }
	})

	NullBooleanSelect.prototype.render = function(name, value, kwargs) {
	  if (value === true || value == '2') {
	    value = '2'
	  }
	  else if (value === false || value == '3') {
	    value = '3'
	  }
	  else {
	    value = '1'
	  }
	  return Select.prototype.render.call(this, name, value, kwargs)
	}

	NullBooleanSelect.prototype.valueFromData = function(data, files, name) {
	  var value = null
	  if (typeof data[name] != 'undefined') {
	    var dataValue = data[name]
	    if (dataValue === true || dataValue == 'True' || dataValue == 'true' ||
	        dataValue == '2') {
	      value = true
	    }
	    else if (dataValue === false || dataValue == 'False' ||
	             dataValue == 'false' || dataValue == '3') {
	      value = false
	    }
	  }
	  return value
	}

	module.exports = NullBooleanSelect

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ChoiceInput = __webpack_require__(189)

	var RadioChoiceInput = ChoiceInput.extend({
	  constructor: function RadioChoiceInput(name, value, attrs, controlled, choice, index) {
	    if (!(this instanceof RadioChoiceInput)) {
	      return new RadioChoiceInput(name, value, attrs, controlled, choice, index)
	    }
	    ChoiceInput.call(this, name, value, attrs, controlled, choice, index)
	    this.value = ''+this.value
	  }
	, inputType: 'radio'
	})

	module.exports = RadioChoiceInput

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ChoiceFieldRenderer = __webpack_require__(191)
	var RadioChoiceInput = __webpack_require__(233)

	var RadioFieldRenderer = ChoiceFieldRenderer.extend({
	  constructor: function RadioFieldRenderer(name, value, attrs, controlled, choices) {
	    if (!(this instanceof RadioFieldRenderer)) {
	      return new RadioFieldRenderer(name, value, attrs, controlled, choices)
	    }
	    ChoiceFieldRenderer.apply(this, arguments)
	  }
	, choiceInputConstructor: RadioChoiceInput
	})

	module.exports = RadioFieldRenderer

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var RadioFieldRenderer = __webpack_require__(234)
	var RendererMixin = __webpack_require__(193)
	var Select = __webpack_require__(195)

	/**
	 * Renders a single select as a list of <input type="radio"> elements.
	 * @constructor
	 * @extends {Select}
	 * @param {Object=} kwargs
	 */
	var RadioSelect = Select.extend({
	  __mixins__: [RendererMixin]
	, constructor: function(kwargs) {
	    if (!(this instanceof RadioSelect)) { return new RadioSelect(kwargs) }
	    RendererMixin.call(this, kwargs)
	    Select.call(this, kwargs)
	  }
	, renderer: RadioFieldRenderer
	, _emptyValue: ''
	})

	module.exports = RadioSelect

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)

	var CharField = __webpack_require__(185)

	var $__0=  __webpack_require__(158),RegexValidator=$__0.RegexValidator

	/**
	 * Validates that its input matches a given regular expression.
	 * @constructor
	 * @extends {CharField}
	 * @param {(RegExp|string)} regex
	 * @param {Object=} kwargs
	 */
	var RegexField = CharField.extend({
	  constructor: function RegexField(regex, kwargs) {
	    if (!(this instanceof RegexField)) { return new RegexField(regex, kwargs) }
	    CharField.call(this, kwargs)
	    if (is.String(regex)) {
	      regex = new RegExp(regex)
	    }
	    this.regex = regex
	    this.validators.push(RegexValidator({regex: this.regex}))
	  }
	})

	module.exports = RegexField

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var ErrorObject = __webpack_require__(211)
	var Form = __webpack_require__(215)
	var FormRow = __webpack_require__(220)
	var ProgressMixin = __webpack_require__(221)

	var $__0=  __webpack_require__(217),NON_FIELD_ERRORS=$__0.NON_FIELD_ERRORS
	var $__1=   __webpack_require__(171),autoIdChecker=$__1.autoIdChecker,getProps=$__1.getProps

	var formProps = {
	  autoId: autoIdChecker
	, controlled: React.PropTypes.bool
	, data: React.PropTypes.object
	, emptyPermitted: React.PropTypes.bool
	, errorConstructor: React.PropTypes.func
	, errors: React.PropTypes.instanceOf(ErrorObject)
	, files: React.PropTypes.object
	, initial: React.PropTypes.object
	, labelSuffix: React.PropTypes.string
	, onChange: React.PropTypes.func
	, prefix: React.PropTypes.string
	, validation: React.PropTypes.oneOfType([
	    React.PropTypes.string
	  , React.PropTypes.object
	  ])
	}

	/**
	 * Renders a Form. A form instance or constructor can be given. If a constructor
	 * is given, an instance will be created when the component is mounted, and any
	 * additional props will be passed to the constructor as options.
	 */
	var RenderForm = React.createClass({displayName: "RenderForm",
	  mixins: [ProgressMixin],
	  propTypes: object.extend({}, formProps, {
	    className: React.PropTypes.string      // Class for the component wrapping all rows
	  , component: React.PropTypes.any         // Component to wrap all rows
	  , form: React.PropTypes.oneOfType([      // Form instance or constructor
	      React.PropTypes.func,
	      React.PropTypes.instanceOf(Form)
	    ]).isRequired
	  , row: React.PropTypes.any               // Component to render form rows
	  , rowComponent: React.PropTypes.any      // Component to wrap each row
	  }),

	  childContextTypes: {
	    form: React.PropTypes.instanceOf(Form)
	  },

	  getChildContext:function() {
	    return {form: this.form}
	  },

	  getDefaultProps:function() {
	    return {
	      component: 'div'
	    , row: FormRow
	    , rowComponent: 'div'
	    }
	  },

	  componentWillMount:function() {
	    if (this.props.form instanceof Form) {
	      this.form = this.props.form
	    }
	    else {
	      this.form = new this.props.form(object.extend({
	        onChange: this.forceUpdate.bind(this)
	      }, getProps(this.props, Object.keys(formProps))))
	    }
	  },

	  getForm:function() {
	    return this.form
	  },

	  render:function() {
	    // Allow a single child to be passed for custom rendering - passing any more
	    // will throw an error.
	    if (React.Children.count(this.props.children) !== 0) {
	      // TODO Cloning should no longer be necessary when facebook/react#2112 lands
	      return React.cloneElement(React.Children.only(this.props.children), {form: this.form})
	    }

	    // Default rendering
	    var $__0=   this,form=$__0.form,props=$__0.props
	    var attrs = {}
	    if (this.props.className) {
	      attrs.className = props.className
	    }
	    var topErrors = form.nonFieldErrors()
	    var hiddenFields = form.hiddenFields().map(function(bf)  {
	      var errors = bf.errors()
	      if (errors.isPopulated) {
	        topErrors.extend(errors.messages().map(function(error)  {
	          return '(Hidden field ' + bf.name + ') ' + error
	        }))
	      }
	      return bf.render()
	    })

	    return React.createElement(props.component, React.__spread({},  attrs), 
	      topErrors.isPopulated() && React.createElement(props.row, {
	        className: form.errorCssClass, 
	        component: props.rowComponent, 
	        content: topErrors.render(), 
	        key: form.addPrefix(NON_FIELD_ERRORS)}
	      ), 
	      form.visibleFields().map(function(bf)  {return React.createElement(props.row, {
	        bf: bf, 
	        className: bf.cssClasses(), 
	        component: props.rowComponent, 
	        key: bf.htmlName, 
	        progress: props.progress}
	      );}), 
	      form.nonFieldPending() && React.createElement(props.row, {
	        className: form.pendingRowCssClass, 
	        component: props.rowComponent, 
	        content: this.renderProgress(), 
	        key: form.addPrefix('__pending__')}
	      ), 
	      hiddenFields.length > 0 && React.createElement(props.row, {
	        className: form.hiddenFieldRowCssClass, 
	        component: props.rowComponent, 
	        content: hiddenFields, 
	        hidden: true, 
	        key: form.addPrefix('__hidden__')}
	      )
	    )
	  }
	})

	module.exports =  RenderForm

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)
	var React = __webpack_require__(1)

	var FormRow = __webpack_require__(220)
	var FormSet = __webpack_require__(222)
	var ProgressMixin = __webpack_require__(221)
	var RenderForm = __webpack_require__(237)

	var $__0=  __webpack_require__(217),NON_FIELD_ERRORS=$__0.NON_FIELD_ERRORS
	var $__1=   __webpack_require__(171),autoIdChecker=$__1.autoIdChecker,getProps=$__1.getProps

	var formsetProps = {
	  canDelete: React.PropTypes.bool
	, canOrder: React.PropTypes.bool
	, extra: React.PropTypes.number
	, form: React.PropTypes.func
	, maxNum: React.PropTypes.number
	, minNum: React.PropTypes.number
	, validateMax: React.PropTypes.bool
	, validateMin: React.PropTypes.bool

	, autoId: autoIdChecker
	, controlled: React.PropTypes.bool
	, data: React.PropTypes.object
	, errorConstructor: React.PropTypes.func
	, files: React.PropTypes.object
	, initial: React.PropTypes.object
	, onChange: React.PropTypes.func
	, prefix: React.PropTypes.string
	, validation: React.PropTypes.oneOfType([
	    React.PropTypes.string
	  , React.PropTypes.object
	  ])
	}

	/**
	 * Renders a Formset. A formset instance or constructor can be given. If a
	 * constructor is given, an instance will be created when the component is
	 * mounted, and any additional props will be passed to the constructor as
	 * options.
	 */
	var RenderFormSet = React.createClass({displayName: "RenderFormSet",
	  mixins: [ProgressMixin],
	  propTypes: object.extend({}, formsetProps, {
	    className: React.PropTypes.string         // Class for the component wrapping all forms
	  , component: React.PropTypes.any            // Component to wrap all forms
	  , formComponent: React.PropTypes.any        // Component to wrap each form
	  , formset: React.PropTypes.oneOfType([      // Formset instance or constructor
	      React.PropTypes.func,
	      React.PropTypes.instanceOf(FormSet)
	    ])
	  , row: React.PropTypes.any                  // Component to render form rows
	  , rowComponent: React.PropTypes.any         // Component to wrap each form row
	  , useManagementForm: React.PropTypes.bool   // Should ManagementForm hidden fields be rendered?
	  , __all__:function(props) {
	      if (!props.form && !props.formset) {
	        return new Error(
	          'Invalid props supplied to `RenderFormSet`, either `form` or ' +
	          '`formset` must be specified.'
	        )
	      }
	    }
	  }),

	  getDefaultProps:function() {
	    return {
	      component: 'div'
	    , formComponent: 'div'
	    , formset: FormSet
	    , row: FormRow
	    , rowComponent: 'div'
	    , useManagementForm: false
	    }
	  },

	  componentWillMount:function() {
	    if (this.props.formset instanceof FormSet) {
	      this.formset = this.props.formset
	    }
	    else {
	      this.formset = new this.props.formset(object.extend({
	        onChange: this.forceUpdate.bind(this)
	      }, getProps(this.props, Object.keys(formsetProps))))
	    }
	  },

	  getFormset:function() {
	    return this.formset
	  },

	  render:function() {
	    var $__0=   this,formset=$__0.formset,props=$__0.props
	    var attrs = {}
	    if (this.props.className) {
	      attrs.className = props.className
	    }
	    var topErrors = formset.nonFormErrors()

	    return React.createElement(props.component, React.__spread({},  attrs), 
	      topErrors.isPopulated() && React.createElement(props.row, {
	        className: formset.errorCssClass, 
	        content: topErrors.render(), 
	        key: formset.addPrefix(NON_FIELD_ERRORS), 
	        rowComponent: props.rowComponent}
	      ), 
	      formset.forms().map(function(form)  {return React.createElement(RenderForm, {
	        form: form, 
	        formComponent: props.formComponent, 
	        progress: props.progress, 
	        row: props.row, 
	        rowComponent: props.rowComponent}
	      );}), 
	      formset.nonFormPending() && React.createElement(props.row, {
	        className: formset.pendingRowCssClass, 
	        content: this.renderProgress(), 
	        key: formset.addPrefix('__pending__'), 
	        rowComponent: props.rowComponent}
	      ), 
	      props.useManagementForm && React.createElement(RenderForm, {
	        form: formset.managementForm(), 
	        formComponent: props.formComponent, 
	        row: props.row, 
	        rowComponent: props.rowComponent}
	      )
	    )
	  }
	})

	module.exports = RenderFormSet

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validators = __webpack_require__(158)

	var CharField = __webpack_require__(185)

	var $__0=  __webpack_require__(171),strip=$__0.strip

	/**
	 * Validates that its input is a valid slug.
	 * @constructor
	 * @extends {CharField}
	 * @param {Object=} kwargs
	 */
	var SlugField = CharField.extend({
	  defaultValidators: [validators.validateSlug]
	, constructor: function SlugField(kwargs) {
	    if (!(this instanceof SlugField)) { return new SlugField(kwargs) }
	    CharField.call(this, kwargs)
	  }
	})

	SlugField.prototype.clean = function(value) {
	  value = strip(this.toJavaScript(value))
	  return CharField.prototype.clean.call(this, value)
	}

	module.exports = SlugField

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)

	var DateField = __webpack_require__(200)
	var MultiValueField = __webpack_require__(229)
	var SplitDateTimeWidget = __webpack_require__(241)
	var SplitHiddenDateTimeWidget = __webpack_require__(243)
	var TimeField = __webpack_require__(244)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * A MultiValueField consisting of a DateField and a TimeField.
	 * @constructor
	 * @extends {MultiValueField}
	 * @param {Object=} kwargs
	 */
	var SplitDateTimeField = MultiValueField.extend({
	  hiddenWidget: SplitHiddenDateTimeWidget
	, widget: SplitDateTimeWidget
	, defaultErrorMessages: {
	    invalidDate: 'Enter a valid date.'
	  , invalidTime: 'Enter a valid time.'
	  }

	, constructor: function SplitDateTimeField(kwargs) {
	    if (!(this instanceof SplitDateTimeField)) { return new SplitDateTimeField(kwargs) }
	    kwargs = object.extend({
	      inputDateFormats: null, inputTimeFormats: null
	    }, kwargs)
	    var errors = object.extend({}, this.defaultErrorMessages)
	    if (typeof kwargs.errorMessages != 'undefined') {
	      object.extend(errors, kwargs.errorMessages)
	    }
	    kwargs.fields = [
	      DateField({inputFormats: kwargs.inputDateFormats,
	                 errorMessages: {invalid: errors.invalidDate}})
	    , TimeField({inputFormats: kwargs.inputTimeFormats,
	                 errorMessages: {invalid: errors.invalidTime}})
	    ]
	    MultiValueField.call(this, kwargs)
	  }
	})

	/**
	 * Validates that, if given, its input does not contain empty values.
	 * @param {?Array.<Date>} dataList a two-item list consisting of two Date
	 *   objects, the first of which represents a date, the second a time.
	 * @return {?Date} a Dare representing the given date and time, or null for
	 *   empty values.
	 */
	SplitDateTimeField.prototype.compress = function(dataList) {
	  if (is.Array(dataList) && dataList.length > 0) {
	    var d = dataList[0]
	    var t = dataList[1]
	    // Raise a validation error if date or time is empty (possible if
	    // SplitDateTimeField has required == false).
	    if (this.isEmptyValue(d)) {
	      throw ValidationError(this.errorMessages.invalidDate, {code: 'invalidDate'})
	    }
	    if (this.isEmptyValue(t)) {
	      throw ValidationError(this.errorMessages.invalidTime, {code: 'invalidTime'})
	    }
	    return new Date(d.getFullYear(), d.getMonth(), d.getDate(),
	                    t.getHours(), t.getMinutes(), t.getSeconds())
	  }
	  return null
	}

	module.exports = SplitDateTimeField

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var DateInput = __webpack_require__(201)
	var MultiWidget = __webpack_require__(230)
	var TimeInput = __webpack_require__(242)

	/**
	 * Splits Date input into two <input type="text"> elements.
	 * @constructor
	 * @extends {MultiWidget}
	 * @param {Object=} kwargs
	 */
	var SplitDateTimeWidget = MultiWidget.extend({
	  constructor: function SplitDateTimeWidget(kwargs) {
	    if (!(this instanceof SplitDateTimeWidget)) { return new SplitDateTimeWidget(kwargs) }
	    kwargs = object.extend({dateFormat: null, timeFormat: null}, kwargs)
	    var widgets = [
	      DateInput({attrs: kwargs.attrs, format: kwargs.dateFormat})
	    , TimeInput({attrs: kwargs.attrs, format: kwargs.timeFormat})
	    ]
	    MultiWidget.call(this, widgets, kwargs.attrs)
	  }
	})

	SplitDateTimeWidget.prototype.decompress = function(value) {
	  if (value) {
	    return [
	      new Date(value.getFullYear(), value.getMonth(), value.getDate())
	    , new Date(1900, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds())
	    ]
	  }
	  return [null, null]
	}

	module.exports = SplitDateTimeWidget

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DateTimeBaseInput = __webpack_require__(202)

	/**
	 * @constructor
	 * @extends {DateTimeBaseInput}
	 * @param {Object=} kwargs
	 */
	var TimeInput = DateTimeBaseInput.extend({
	  formatType: 'TIME_INPUT_FORMATS'
	, constructor: function TimeInput(kwargs) {
	    if (!(this instanceof TimeInput)) { return new TimeInput(kwargs) }
	    DateTimeBaseInput.call(this, kwargs)
	  }
	})

	module.exports = TimeInput

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SplitDateTimeWidget = __webpack_require__(241)

	/**
	 * Splits Date input into two <input type="hidden"> elements.
	 * @constructor
	 * @extends {SplitDateTimeWidget}
	 * @param {Object=} kwargs
	 */
	var SplitHiddenDateTimeWidget = SplitDateTimeWidget.extend({
	  constructor: function SplitHiddenDateTimeWidget(kwargs) {
	    if (!(this instanceof SplitHiddenDateTimeWidget)) { return new SplitHiddenDateTimeWidget(kwargs) }
	    SplitDateTimeWidget.call(this, kwargs)
	    for (var i = 0, l = this.widgets.length; i < l; i++) {
	      this.widgets[i].inputType = 'hidden'
	      this.widgets[i].isHidden = true
	    }
	  }
	, isHidden: true
	})

	module.exports = SplitHiddenDateTimeWidget

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var time = __webpack_require__(170)

	var locales = __webpack_require__(169)

	var BaseTemporalField = __webpack_require__(173)
	var TimeInput = __webpack_require__(242)

	/**
	 * Validates that its input is a time.
	 * @constructor
	 * @extends {BaseTemporalField}
	 * @param {Object=} kwargs
	 */
	var TimeField = BaseTemporalField.extend({
	  widget: TimeInput
	, inputFormatType: 'TIME_INPUT_FORMATS'
	, defaultErrorMessages: {
	    invalid: 'Enter a valid time.'
	  }

	, constructor: function TimeField(kwargs) {
	    if (!(this instanceof TimeField)) { return new TimeField(kwargs) }
	    BaseTemporalField.call(this, kwargs)
	  }
	})

	/**
	 * Validates that the input can be converted to a time.
	 * @param {?(string|Date)} value user input.
	 * @return {?Date} a Date with its hour, minute and second attributes set, or
	 *   null for empty values when they are allowed.
	 * @throws {ValidationError} if the input is invalid.
	 */
	TimeField.prototype.toJavaScript = function(value) {
	  if (this.isEmptyValue(value)) {
	    return null
	  }
	  if (value instanceof Date) {
	    return new Date(1900, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds())
	  }
	  return BaseTemporalField.prototype.toJavaScript.call(this, value)
	}

	/**
	 * Creates a Date representing a time from the given input if it's valid based
	 * on the format.
	 * @param {string} value
	 * @param {string} format
	 * @return {Date}
	 */
	TimeField.prototype.strpdate = function(value, format) {
	  var t = time.strptime(value, format, locales.getDefaultLocale())
	  return new Date(1900, 0, 1, t[3], t[4], t[5])
	}

	module.exports = TimeField

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var object = __webpack_require__(162)

	var ChoiceField = __webpack_require__(196)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * A ChoiceField which returns a value coerced by some provided function.
	 * @constructor
	 * @extends {ChoiceField}
	 * @param {Object=} kwargs
	 */
	var TypedChoiceField = ChoiceField.extend({
	  constructor: function TypedChoiceField(kwargs) {
	    if (!(this instanceof TypedChoiceField)) { return new TypedChoiceField(kwargs) }
	    kwargs = object.extend({
	      coerce: function(val) { return val }, emptyValue: ''
	    }, kwargs)
	    this.coerce = object.pop(kwargs, 'coerce')
	    this.emptyValue = object.pop(kwargs, 'emptyValue')
	    ChoiceField.call(this, kwargs)
	  }
	})

	/**
	 * Validate that the value can be coerced to the right type (if not empty).
	 */
	TypedChoiceField.prototype._coerce = function(value) {
	  if (value === this.emptyValue || this.isEmptyValue(value)) {
	    return this.emptyValue
	  }
	  try {
	    value = this.coerce(value)
	  }
	  catch (e) {
	    throw ValidationError(this.errorMessages.invalidChoice, {
	      code: 'invalidChoice'
	    , params: {value: value}
	    })
	  }
	  return value
	}

	TypedChoiceField.prototype.clean = function(value) {
	  value = ChoiceField.prototype.clean.call(this, value)
	  return this._coerce(value)
	}


	module.exports = TypedChoiceField

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var is = __webpack_require__(161)
	var object = __webpack_require__(162)
	var MultipleChoiceField = __webpack_require__(227)

	var $__0=  __webpack_require__(158),ValidationError=$__0.ValidationError

	/**
	 * A MultipleChoiceField which returns values coerced by some provided function.
	 * @constructor
	 * @extends {MultipleChoiceField}
	 * @param {Object=} kwargs
	 */
	var TypedMultipleChoiceField = MultipleChoiceField.extend({
	  constructor: function TypedMultipleChoiceField(kwargs) {
	    if (!(this instanceof TypedMultipleChoiceField)) { return new TypedMultipleChoiceField(kwargs) }
	    kwargs = object.extend({
	      coerce: function(val) { return val }, emptyValue: []
	    }, kwargs)
	    this.coerce = object.pop(kwargs, 'coerce')
	    this.emptyValue = object.pop(kwargs, 'emptyValue')
	    MultipleChoiceField.call(this, kwargs)
	  }
	})

	TypedMultipleChoiceField.prototype._coerce = function(value) {
	  if (value === this.emptyValue || this.isEmptyValue(value) ||
	      (is.Array(value) && !value.length)) {
	    return this.emptyValue
	  }
	  var newValue = []
	  for (var i = 0, l = value.length; i < l; i++) {
	    try {
	      newValue.push(this.coerce(value[i]))
	    }
	    catch (e) {
	      throw ValidationError(this.errorMessages.invalidChoice, {
	        code: 'invalidChoice'
	      , params: {value: value[i]}
	      })
	    }
	  }
	  return newValue
	}

	TypedMultipleChoiceField.prototype.clean = function(value) {
	  value = MultipleChoiceField.prototype.clean.call(this, value)
	  return this._coerce(value)
	}

	TypedMultipleChoiceField.prototype.validate = function(value) {
	  if (value !== this.emptyValue || (is.Array(value) && value.length)) {
	    MultipleChoiceField.prototype.validate.call(this, value)
	  }
	  else if (this.required) {
	    throw ValidationError(this.errorMessages.required, {code: 'required'})
	  }
	}

	module.exports = TypedMultipleChoiceField

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var url = __webpack_require__(165)

	var CharField = __webpack_require__(185)
	var URLInput = __webpack_require__(248)

	var $__0=  __webpack_require__(158),URLValidator=$__0.URLValidator
	var $__1=  __webpack_require__(171),strip=$__1.strip

	/**
	 * Validates that its input appears to be a valid URL.
	 * @constructor
	 * @extends {CharField}
	 * @param {Object=} kwargs
	 */
	var URLField = CharField.extend({
	  widget: URLInput
	, defaultErrorMessages: {
	    invalid: 'Enter a valid URL.'
	  }
	, defaultValidators: [URLValidator()]

	, constructor: function URLField(kwargs) {
	    if (!(this instanceof URLField)) { return new URLField(kwargs) }
	    CharField.call(this, kwargs)
	  }
	})

	URLField.prototype.toJavaScript = function(value) {
	  if (value) {
	    var urlFields = url.parseUri(value)
	    if (!urlFields.protocol) {
	      // If no URL protocol given, assume http://
	      urlFields.protocol = 'http'
	    }
	    if (!urlFields.path) {
	      // The path portion may need to be added before query params
	      urlFields.path = '/'
	    }
	    value = url.makeUri(urlFields)
	  }
	  return CharField.prototype.toJavaScript.call(this, value)
	}

	URLField.prototype.clean = function(value) {
	  value = strip(this.toJavaScript(value))
	  return CharField.prototype.clean.call(this, value)
	}

	module.exports = URLField

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var TextInput = __webpack_require__(180)

	/**
	 * An HTML <input type="url"> widget.
	 * @constructor
	 * @extends {TextInput}
	 * @param {Object=} kwargs
	 */
	var URLInput = TextInput.extend({
	  constructor: function URLInput(kwargs) {
	    if (!(this instanceof URLInput)) { return new URLInput(kwargs) }
	    TextInput.call(this, kwargs)
	  }
	, inputType: 'url'
	})

	module.exports = URLInput

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(250);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(252)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(251)();
	// imports


	// module
	exports.push([module.id, "body {\r\n  padding: 50px;\r\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\r\n  background-color: lightyellow;\r\n}\r\n\r\na {\r\n  color: #00B7FF;\r\n}\r\n\r\ntable {\r\n\tborder: 1px solid black;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\ntable td {\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n\tborder: 1px solid black;\r\n}\r\n\r\ntable th {\r\n\tpadding: 10px;\r\n\tborder: 1px solid black;\r\n}\r\n\r\ninput {\r\n\tdisplay: block;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n}", ""]);

	// exports


/***/ },
/* 251 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);