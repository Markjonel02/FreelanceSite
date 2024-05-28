"use client";
import {
  DomHandler,
  ObjectUtils,
  PrimeReact,
  PrimeReactContext,
  classNames,
  mergeProps
} from "./chunk-55O44UL4.js";
import {
  require_react
} from "./chunk-4JI2AD7N.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/primereact/ripple/ripple.esm.js
var React2 = __toESM(require_react());

// node_modules/primereact/hooks/hooks.esm.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var useUnmountEffect = function useUnmountEffect2(fn) {
  return React.useEffect(function() {
    return fn;
  }, []);
};
var useMergeProps = function useMergeProps2() {
  var context = (0, import_react.useContext)(PrimeReactContext);
  return function() {
    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }
    return mergeProps(props, context === null || context === void 0 ? void 0 : context.ptOptions);
  };
};
var useMountEffect = function useMountEffect2(fn) {
  var mounted = React.useRef(false);
  return React.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return fn && fn();
    }
  }, []);
};
var _id = 0;
var useStyle = function useStyle2(css) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _useState = (0, import_react.useState)(false), _useState2 = _slicedToArray(_useState, 2), isLoaded = _useState2[0], setIsLoaded = _useState2[1];
  var styleRef = (0, import_react.useRef)(null);
  var context = (0, import_react.useContext)(PrimeReactContext);
  var defaultDocument = DomHandler.isClient() ? window.document : void 0;
  var _options$document = options.document, document2 = _options$document === void 0 ? defaultDocument : _options$document, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media;
  var getCurrentStyleRef = function getCurrentStyleRef2(styleContainer) {
    var existingStyle = styleContainer.querySelector('style[data-primereact-style-id="'.concat(name, '"]'));
    if (existingStyle) {
      return existingStyle;
    }
    if (id !== void 0) {
      var existingElement = document2.getElementById(id);
      if (existingElement) {
        return existingElement;
      }
    }
    return document2.createElement("style");
  };
  var update = function update2(newCSS) {
    isLoaded && css !== newCSS && (styleRef.current.textContent = newCSS);
  };
  var load = function load2() {
    if (!document2 || isLoaded) {
      return;
    }
    var styleContainer = (context === null || context === void 0 ? void 0 : context.styleContainer) || document2.head;
    styleRef.current = getCurrentStyleRef(styleContainer);
    if (!styleRef.current.isConnected) {
      styleRef.current.type = "text/css";
      if (id) {
        styleRef.current.id = id;
      }
      if (media) {
        styleRef.current.media = media;
      }
      DomHandler.addNonce(styleRef.current, context && context.nonce || PrimeReact.nonce);
      styleContainer.appendChild(styleRef.current);
      if (name) {
        styleRef.current.setAttribute("data-primereact-style-id", name);
      }
    }
    styleRef.current.textContent = css;
    setIsLoaded(true);
  };
  var unload = function unload2() {
    if (!document2 || !styleRef.current) {
      return;
    }
    DomHandler.removeInlineStyle(styleRef.current);
    setIsLoaded(false);
  };
  (0, import_react.useEffect)(function() {
    if (!manual) {
      load();
    }
  }, [manual]);
  return {
    id,
    name,
    update,
    unload,
    load,
    isLoaded
  };
};
var useUpdateEffect = function useUpdateEffect2(fn, deps) {
  var mounted = React.useRef(false);
  return React.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    return fn && fn();
  }, deps);
};

// node_modules/primereact/componentbase/componentbase.esm.js
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var buttonStyles = "\n.p-button {\n    margin: 0;\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    vertical-align: bottom;\n    text-align: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-button-label {\n    flex: 1 1 auto;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-only {\n    justify-content: center;\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n    flex: 0 0 auto;\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-button-group .p-button {\n    margin: 0;\n}\n\n.p-button-group .p-button:not(:last-child) {\n    border-right: 0 none;\n}\n\n.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-button-group .p-button:first-of-type {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-button-group .p-button:last-of-type {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-button-group .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n";
var inputTextStyles = "\n.p-inputtext {\n    margin: 0;\n}\n\n.p-fluid .p-inputtext {\n    width: 100%;\n}\n\n/* InputGroup */\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup-addon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-inputgroup .p-float-label {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-fluid .p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-fluid .p-inputgroup .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n/* Floating Label */\n.p-float-label {\n    display: block;\n    position: relative;\n}\n\n.p-float-label label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -0.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n}\n\n.p-float-label textarea ~ label,\n.p-float-label .p-mention ~ label {\n    top: 1rem;\n}\n\n.p-float-label input:focus ~ label,\n.p-float-label input:-webkit-autofill ~ label,\n.p-float-label input.p-filled ~ label,\n.p-float-label textarea:focus ~ label,\n.p-float-label textarea.p-filled ~ label,\n.p-float-label .p-inputwrapper-focus ~ label,\n.p-float-label .p-inputwrapper-filled ~ label,\n.p-float-label .p-tooltip-target-wrapper ~ label {\n    top: -0.75rem;\n    font-size: 12px;\n}\n\n.p-float-label .p-placeholder,\n.p-float-label input::placeholder,\n.p-float-label .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-float-label .p-focus .p-placeholder,\n.p-float-label input:focus::placeholder,\n.p-float-label .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-input-icon-left,\n.p-input-icon-right {\n    position: relative;\n    display: inline-block;\n}\n\n.p-input-icon-left > i,\n.p-input-icon-right > i,\n.p-input-icon-left > svg,\n.p-input-icon-right > svg,\n.p-input-icon-left > .p-input-prefix,\n.p-input-icon-right > .p-input-suffix {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-fluid .p-input-icon-left,\n.p-fluid .p-input-icon-right {\n    display: block;\n    width: 100%;\n}\n";
var iconStyles = "\n.p-icon {\n    display: inline-block;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\nsvg.p-icon {\n    pointer-events: auto;\n}\n\nsvg.p-icon g,\n.p-disabled svg.p-icon {\n    pointer-events: none;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n";
var commonStyle = "\n@layer primereact {\n    .p-component, .p-component * {\n        box-sizing: border-box;\n    }\n\n    .p-hidden {\n        display: none;\n    }\n\n    .p-hidden-space {\n        visibility: hidden;\n    }\n\n    .p-reset {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        text-decoration: none;\n        font-size: 100%;\n        list-style: none;\n    }\n\n    .p-disabled, .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-component-overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-unselectable-text {\n        user-select: none;\n    }\n\n    .p-scrollbar-measure {\n        width: 100px;\n        height: 100px;\n        overflow: scroll;\n        position: absolute;\n        top: -9999px;\n    }\n\n    @-webkit-keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n    @keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n\n    .p-link {\n        text-align: left;\n        background-color: transparent;\n        margin: 0;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-link:disabled {\n        cursor: default;\n    }\n\n    /* Non react overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity .1s linear;\n    }\n\n    /* React based overlay animations */\n    .p-connected-overlay-enter {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-enter-active {\n        opacity: 1;\n        transform: scaleY(1);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-enter-done {\n        transform: none;\n    }\n\n    .p-connected-overlay-exit {\n        opacity: 1;\n    }\n\n    .p-connected-overlay-exit-active {\n        opacity: 0;\n        transition: opacity .1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        max-height: 1000px;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-toggleable-content-enter-done {\n        transform: none;\n    }\n\n    .p-toggleable-content-exit {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-exit-active {\n        overflow: hidden;\n        max-height: 0;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-sr-only {\n        border: 0;\n        clip: rect(1px, 1px, 1px, 1px);\n        clip-path: inset(50%);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n        word-wrap: normal;\n    }\n\n    /* @todo Refactor */\n    .p-menu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    ".concat(buttonStyles, "\n    ").concat(inputTextStyles, "\n    ").concat(iconStyles, "\n}\n");
var ComponentBase = {
  cProps: void 0,
  cParams: void 0,
  cName: void 0,
  defaultProps: {
    pt: void 0,
    ptOptions: void 0,
    unstyled: false
  },
  context: {},
  globalCSS: void 0,
  classes: {},
  styles: "",
  extend: function extend() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var css = props.css;
    var defaultProps = _objectSpread(_objectSpread({}, props.defaultProps), ComponentBase.defaultProps);
    var inlineStyles = {};
    var getProps2 = function getProps3(props2) {
      var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      ComponentBase.context = context;
      ComponentBase.cProps = props2;
      return ObjectUtils.getMergedProps(props2, defaultProps);
    };
    var getOtherProps2 = function getOtherProps3(props2) {
      return ObjectUtils.getDiffProps(props2, defaultProps);
    };
    var getPTValue = function getPTValue2() {
      var _ComponentBase$contex;
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      if (obj.hasOwnProperty("pt") && obj.pt !== void 0) {
        obj = obj.pt;
      }
      var originalkey = key;
      var isNestedParam = /./g.test(originalkey) && !!params[originalkey.split(".")[0]];
      var fkey = isNestedParam ? ObjectUtils.toFlatCase(originalkey.split(".")[1]) : ObjectUtils.toFlatCase(originalkey);
      var hostName = params.hostName && ObjectUtils.toFlatCase(params.hostName);
      var componentName = hostName || params.props && params.props.__TYPE && ObjectUtils.toFlatCase(params.props.__TYPE) || "";
      var isTransition = fkey === "transition";
      var datasetPrefix = "data-pc-";
      var getHostInstance = function getHostInstance2(params2) {
        return params2 !== null && params2 !== void 0 && params2.props ? params2.hostName ? params2.props.__TYPE === params2.hostName ? params2.props : getHostInstance2(params2.parent) : params2.parent : void 0;
      };
      var getPropValue = function getPropValue2(name) {
        var _params$props, _getHostInstance;
        return ((_params$props = params.props) === null || _params$props === void 0 ? void 0 : _params$props[name]) || ((_getHostInstance = getHostInstance(params)) === null || _getHostInstance === void 0 ? void 0 : _getHostInstance[name]);
      };
      ComponentBase.cParams = params;
      ComponentBase.cName = componentName;
      var _ref = getPropValue("ptOptions") || ComponentBase.context.ptOptions || {}, _ref$mergeSections = _ref.mergeSections, mergeSections = _ref$mergeSections === void 0 ? true : _ref$mergeSections, _ref$mergeProps = _ref.mergeProps, useMergeProps3 = _ref$mergeProps === void 0 ? false : _ref$mergeProps;
      var getPTClassValue = function getPTClassValue2() {
        var value = getOptionValue.apply(void 0, arguments);
        if (Array.isArray(value)) {
          return {
            className: classNames.apply(void 0, _toConsumableArray(value))
          };
        }
        if (ObjectUtils.isString(value)) {
          return {
            className: value
          };
        }
        if (value !== null && value !== void 0 && value.hasOwnProperty("className") && Array.isArray(value.className)) {
          return {
            className: classNames.apply(void 0, _toConsumableArray(value.className))
          };
        }
        return value;
      };
      var globalPT = searchInDefaultPT ? isNestedParam ? _useGlobalPT(getPTClassValue, originalkey, params) : _useDefaultPT(getPTClassValue, originalkey, params) : void 0;
      var self = isNestedParam ? void 0 : _usePT(_getPT(obj, componentName), getPTClassValue, originalkey, params);
      var datasetProps = !isTransition && _objectSpread(_objectSpread({}, fkey === "root" && _defineProperty({}, "".concat(datasetPrefix, "name"), params.props && params.props.__parentMetadata ? ObjectUtils.toFlatCase(params.props.__TYPE) : componentName)), {}, _defineProperty({}, "".concat(datasetPrefix, "section"), fkey));
      return mergeSections || !mergeSections && self ? useMergeProps3 ? mergeProps([globalPT, self, Object.keys(datasetProps).length ? datasetProps : {}], {
        classNameMergeFunction: (_ComponentBase$contex = ComponentBase.context.ptOptions) === null || _ComponentBase$contex === void 0 ? void 0 : _ComponentBase$contex.classNameMergeFunction
      }) : _objectSpread(_objectSpread(_objectSpread({}, globalPT), self), Object.keys(datasetProps).length ? datasetProps : {}) : _objectSpread(_objectSpread({}, self), Object.keys(datasetProps).length ? datasetProps : {});
    };
    var setMetaData = function setMetaData2() {
      var metadata = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var props2 = metadata.props, state = metadata.state;
      var ptm = function ptm2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return getPTValue((props2 || {}).pt, key, _objectSpread(_objectSpread({}, metadata), params));
      };
      var ptmo = function ptmo2() {
        var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return getPTValue(obj, key, params, false);
      };
      var isUnstyled = function isUnstyled2() {
        return ComponentBase.context.unstyled || PrimeReact.unstyled || props2.unstyled;
      };
      var cx = function cx2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return !isUnstyled() ? getOptionValue(css && css.classes, key, _objectSpread({
          props: props2,
          state
        }, params)) : void 0;
      };
      var sx = function sx2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var when = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (when) {
          var _ComponentBase$contex2;
          var self = getOptionValue(css && css.inlineStyles, key, _objectSpread({
            props: props2,
            state
          }, params));
          var base = getOptionValue(inlineStyles, key, _objectSpread({
            props: props2,
            state
          }, params));
          return mergeProps([base, self], {
            classNameMergeFunction: (_ComponentBase$contex2 = ComponentBase.context.ptOptions) === null || _ComponentBase$contex2 === void 0 ? void 0 : _ComponentBase$contex2.classNameMergeFunction
          });
        }
        return void 0;
      };
      return {
        ptm,
        ptmo,
        sx,
        cx,
        isUnstyled
      };
    };
    return _objectSpread(_objectSpread({
      getProps: getProps2,
      getOtherProps: getOtherProps2,
      setMetaData
    }, props), {}, {
      defaultProps
    });
  }
};
var getOptionValue = function getOptionValue2(obj) {
  var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var fKeys = String(ObjectUtils.toFlatCase(key)).split(".");
  var fKey = fKeys.shift();
  var matchedPTOption = ObjectUtils.isNotEmpty(obj) ? Object.keys(obj).find(function(k) {
    return ObjectUtils.toFlatCase(k) === fKey;
  }) : "";
  return fKey ? ObjectUtils.isObject(obj) ? getOptionValue2(ObjectUtils.getItemValue(obj[matchedPTOption], params), fKeys.join("."), params) : void 0 : ObjectUtils.getItemValue(obj, params);
};
var _getPT = function _getPT2(pt) {
  var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var callback = arguments.length > 2 ? arguments[2] : void 0;
  var _usept = pt === null || pt === void 0 ? void 0 : pt._usept;
  var getValue = function getValue2(value) {
    var _ref3;
    var checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var _value = callback ? callback(value) : value;
    var _key = ObjectUtils.toFlatCase(key);
    return (_ref3 = checkSameKey ? _key !== ComponentBase.cName ? _value === null || _value === void 0 ? void 0 : _value[_key] : void 0 : _value === null || _value === void 0 ? void 0 : _value[_key]) !== null && _ref3 !== void 0 ? _ref3 : _value;
  };
  return ObjectUtils.isNotEmpty(_usept) ? {
    _usept,
    originalValue: getValue(pt.originalValue),
    value: getValue(pt.value)
  } : getValue(pt, true);
};
var _usePT = function _usePT2(pt, callback, key, params) {
  var fn = function fn2(value2) {
    return callback(value2, key, params);
  };
  if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
    var _ref4 = pt._usept || ComponentBase.context.ptOptions || {}, _ref4$mergeSections = _ref4.mergeSections, mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections, _ref4$mergeProps = _ref4.mergeProps, useMergeProps3 = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps, classNameMergeFunction = _ref4.classNameMergeFunction;
    var originalValue = fn(pt.originalValue);
    var value = fn(pt.value);
    if (originalValue === void 0 && value === void 0) {
      return void 0;
    } else if (ObjectUtils.isString(value)) {
      return value;
    } else if (ObjectUtils.isString(originalValue)) {
      return originalValue;
    }
    return mergeSections || !mergeSections && value ? useMergeProps3 ? mergeProps([originalValue, value], {
      classNameMergeFunction
    }) : _objectSpread(_objectSpread({}, originalValue), value) : value;
  }
  return fn(pt);
};
var getGlobalPT = function getGlobalPT2() {
  return _getPT(ComponentBase.context.pt || PrimeReact.pt, void 0, function(value) {
    return ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var getDefaultPT = function getDefaultPT2() {
  return _getPT(ComponentBase.context.pt || PrimeReact.pt, void 0, function(value) {
    return getOptionValue(value, ComponentBase.cName, ComponentBase.cParams) || ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var _useGlobalPT = function _useGlobalPT2(callback, key, params) {
  return _usePT(getGlobalPT(), callback, key, params);
};
var _useDefaultPT = function _useDefaultPT2(callback, key, params) {
  return _usePT(getDefaultPT(), callback, key, params);
};

// node_modules/primereact/ripple/ripple.esm.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
function _toPrimitive2(input, hint) {
  if (_typeof2(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return _typeof2(key) === "symbol" ? key : String(key);
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
var styles = "\n@layer primereact {\n    .p-ripple {\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-ink {\n        display: block;\n        position: absolute;\n        background: rgba(255, 255, 255, 0.5);\n        border-radius: 100%;\n        transform: scale(0);\n    }\n    \n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n    \n    .p-ripple-disabled .p-ink {\n        display: none;\n    }\n}\n\n@keyframes ripple {\n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n\n";
var classes = {
  root: "p-ink"
};
var RippleBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles,
    classes
  },
  getProps: function getProps(props) {
    return ObjectUtils.getMergedProps(props, RippleBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return ObjectUtils.getDiffProps(props, RippleBase.defaultProps);
  }
});
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Ripple = React2.memo(React2.forwardRef(function(inProps, ref) {
  var _React$useState = React2.useState(false), _React$useState2 = _slicedToArray2(_React$useState, 2), isMounted = _React$useState2[0], setMounted = _React$useState2[1];
  var inkRef = React2.useRef(null);
  var targetRef = React2.useRef(null);
  var mergeProps2 = useMergeProps();
  var context = React2.useContext(PrimeReactContext);
  var props = RippleBase.getProps(inProps, context);
  var isRippleActive = context && context.ripple || PrimeReact.ripple;
  var metaData = {
    props
  };
  useStyle(RippleBase.css.styles, {
    name: "ripple",
    manual: !isRippleActive
  });
  var _RippleBase$setMetaDa = RippleBase.setMetaData(_objectSpread2({}, metaData)), ptm = _RippleBase$setMetaDa.ptm, cx = _RippleBase$setMetaDa.cx;
  var getTarget = function getTarget2() {
    return inkRef.current && inkRef.current.parentElement;
  };
  var bindEvents = function bindEvents2() {
    if (targetRef.current) {
      targetRef.current.addEventListener("pointerdown", onPointerDown);
    }
  };
  var unbindEvents = function unbindEvents2() {
    if (targetRef.current) {
      targetRef.current.removeEventListener("pointerdown", onPointerDown);
    }
  };
  var onPointerDown = function onPointerDown2(event) {
    var offset = DomHandler.getOffset(targetRef.current);
    var offsetX = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
    var offsetY = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;
    activateRipple(offsetX, offsetY);
  };
  var activateRipple = function activateRipple2(offsetX, offsetY) {
    if (!inkRef.current || getComputedStyle(inkRef.current, null).display === "none") {
      return;
    }
    DomHandler.removeClass(inkRef.current, "p-ink-active");
    setDimensions();
    inkRef.current.style.top = offsetY + "px";
    inkRef.current.style.left = offsetX + "px";
    DomHandler.addClass(inkRef.current, "p-ink-active");
  };
  var onAnimationEnd = function onAnimationEnd2(event) {
    DomHandler.removeClass(event.currentTarget, "p-ink-active");
  };
  var setDimensions = function setDimensions2() {
    if (inkRef.current && !DomHandler.getHeight(inkRef.current) && !DomHandler.getWidth(inkRef.current)) {
      var d = Math.max(DomHandler.getOuterWidth(targetRef.current), DomHandler.getOuterHeight(targetRef.current));
      inkRef.current.style.height = d + "px";
      inkRef.current.style.width = d + "px";
    }
  };
  React2.useImperativeHandle(ref, function() {
    return {
      props,
      getInk: function getInk() {
        return inkRef.current;
      },
      getTarget: function getTarget2() {
        return targetRef.current;
      }
    };
  });
  useMountEffect(function() {
    setMounted(true);
  });
  useUpdateEffect(function() {
    if (isMounted && inkRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  }, [isMounted]);
  useUpdateEffect(function() {
    if (inkRef.current && !targetRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  });
  useUnmountEffect(function() {
    if (inkRef.current) {
      targetRef.current = null;
      unbindEvents();
    }
  });
  if (!isRippleActive) {
    return null;
  }
  var rootProps = mergeProps2({
    "aria-hidden": true,
    className: classNames(cx("root"))
  }, RippleBase.getOtherProps(props), ptm("root"));
  return React2.createElement("span", _extends({
    role: "presentation",
    ref: inkRef
  }, rootProps, {
    onAnimationEnd
  }));
}));
Ripple.displayName = "Ripple";
export {
  Ripple
};
//# sourceMappingURL=primereact_ripple.js.map
