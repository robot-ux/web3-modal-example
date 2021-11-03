/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6908:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DefaultNotFound = void 0;

var _jsxRuntime = __webpack_require__(997);

const DefaultNotFound = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
  style: {
    margin: '150px auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  children: "404"
});

exports.DefaultNotFound = DefaultNotFound;

/***/ }),

/***/ 7342:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
exports["default"] = void 0;

var _plugin = __webpack_require__(4466);

var _reactRouterDom = __webpack_require__(4661);

Object.keys(_reactRouterDom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactRouterDom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactRouterDom[key];
    }
  });
});
// eslint-disable-next-line filenames/match-exported
var _default = _plugin.routerPlugin;
exports["default"] = _default;

/***/ }),

/***/ 4466:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routerPlugin = void 0;

var _react = _interopRequireWildcard(__webpack_require__(6689));

var _history = __webpack_require__(5295);

var _reactRouterDom = __webpack_require__(4661);

var _runtimeCore = __webpack_require__(1310);

var _utils = __webpack_require__(2656);

var _jsxRuntime = __webpack_require__(997);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// todo: check
const isBrowser = () => typeof window !== 'undefined';

const routerPlugin = ({
  history: customHistory,
  supportHtml5History: _supportHtml5History = true,
  routesConfig,
  historyOptions
}) => {
  const isBrow = isBrowser(); // eslint-disable-next-line no-nested-ternary

  const history = isBrow ? customHistory || _supportHtml5History ? (0, _history.createBrowserHistory)(historyOptions) : (0, _history.createHashHistory)(historyOptions) : {};
  return (0, _runtimeCore.createPlugin)(() => ({
    hoc: ({
      App
    }, next) => {
      const getRouteApp = () => {
        if (isBrow) {
          return props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Router, {
            history: history,
            children: routesConfig ? (0, _utils.renderRoutes)(routesConfig, props) : /*#__PURE__*/(0, _jsxRuntime.jsx)(App, _objectSpread({}, props))
          });
        }

        return props => {
          var _runtimeContext$ssrCo;

          const runtimeContext = (0, _react.useContext)(_runtimeCore.RuntimeReactContext);
          const basename = (0, _utils.resolveBasename)(historyOptions === null || historyOptions === void 0 ? void 0 : historyOptions.basename);
          const location = (0, _utils.getLocation)(runtimeContext === null || runtimeContext === void 0 ? void 0 : runtimeContext.ssrContext);
          const ctx = (runtimeContext === null || runtimeContext === void 0 ? void 0 : (_runtimeContext$ssrCo = runtimeContext.ssrContext) === null || _runtimeContext$ssrCo === void 0 ? void 0 : _runtimeContext$ssrCo.redirection) || {};
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.StaticRouter, {
            basename: basename,
            location: location,
            context: ctx,
            children: routesConfig ? (0, _utils.renderRoutes)(routesConfig, props) : /*#__PURE__*/(0, _jsxRuntime.jsx)(App, _objectSpread({}, props))
          });
        };
      };

      return next({
        App: getRouteApp()
      });
    }
  }), {
    name: `@modern-js/plugin-router`
  });
};

exports.routerPlugin = routerPlugin;

/***/ }),

/***/ 2656:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLocation = getLocation;
exports.renderRoutes = renderRoutes;
exports.resolveBasename = resolveBasename;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _reactRouterDom = __webpack_require__(4661);

var _DefaultNotFound = __webpack_require__(6908);

var _jsxRuntime = __webpack_require__(997);

const _excluded = ["Component"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function renderRoutes(routesConfig, extraProps = {}) {
  const Layout = _ref => {
    let {
      Component
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    const GlobalLayout = routesConfig === null || routesConfig === void 0 ? void 0 : routesConfig.globalApp;

    if (!GlobalLayout) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({}, props));
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(GlobalLayout, _objectSpread({
      Component: Component
    }, props));
  };

  const findMatchedRoute = pathname => {
    var _routesConfig$routes;

    return routesConfig === null || routesConfig === void 0 ? void 0 : (_routesConfig$routes = routesConfig.routes) === null || _routesConfig$routes === void 0 ? void 0 : _routesConfig$routes.find(route => {
      const info = (0, _reactRouterDom.matchPath)(pathname, {
        path: route.path,
        exact: route.exact,
        sensitive: route.sensitive
      });
      return Boolean(info);
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
    path: "/",
    render: props => {
      const matchedRoute = findMatchedRoute(props.location.pathname);

      if (!matchedRoute) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNotFound.DefaultNotFound, {});
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: matchedRoute.path,
        exact: matchedRoute.exact,
        sensitive: matchedRoute.sensitive,
        render: routeProps => /*#__PURE__*/(0, _jsxRuntime.jsx)(Layout, _objectSpread(_objectSpread({
          Component: matchedRoute.component
        }, routeProps), extraProps))
      });
    }
  });
}

function getLocation(serverContext) {
  const {
    pathname,
    url
  } = (serverContext === null || serverContext === void 0 ? void 0 : serverContext.request) || {};
  const index = (url || '').indexOf(pathname);

  if (index === -1) {
    return pathname;
  }

  return url.substring(index);
}

function resolveBasename(basename) {
  if (typeof basename !== 'string') {
    return '';
  }

  if (basename.endsWith('/')) {
    return resolveBasename(basename.substr(0, basename.length - 1));
  }

  return basename;
}

/***/ }),

/***/ 2158:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useHeaders = exports.run = void 0;

var _async_hooks = _interopRequireDefault(__webpack_require__(852));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _async_hooks.default !== null && _async_hooks.default !== void 0 && _async_hooks.default.AsyncLocalStorage ? new _async_hooks.default.AsyncLocalStorage() : null;

const run = (headers, next) => storage.run(headers, next);

exports.run = run;

const useHeaders = () => {
  if (!storage) {
    throw new Error(`Unable to use async_hook, please confirm the node version
      `);
  }

  const headers = storage.getStore();

  if (!headers) {
    throw new Error(`Can't call useHeaders out of scope, it should be placed on top of the function`);
  }

  return headers;
};

exports.useHeaders = useHeaders;

/***/ }),

/***/ 2074:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useHeaders: true
};
exports["default"] = void 0;
Object.defineProperty(exports, "useHeaders", ({
  enumerable: true,
  get: function () {
    return _hook.useHeaders;
  }
}));

var _utils = __webpack_require__(7922);

var _runtimeCore = __webpack_require__(1310);

var _prefetch = _interopRequireDefault(__webpack_require__(8999));

var _hook = __webpack_require__(2158);

var _react = __webpack_require__(8669);

Object.keys(_react).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _react[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _react[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const registeredApps = new WeakSet();

const plugin = () => (0, _runtimeCore.createPlugin)(() => ({
  server: async ({
    App,
    context
  }) => {
    if (!registeredApps.has(App)) {
      (0, _runtimeCore.registerPrefetch)(App, _context => (0, _prefetch.default)(App, _context));
      registeredApps.add(App);
    }

    if (typeof window === 'undefined') {
      const html = await __webpack_require__(6194)/* .render */ .s(context, (context === null || context === void 0 ? void 0 : context.ssrContext.distDir) || _utils.path.join(process.cwd(), 'dist'), App);
      return html;
    }

    return null;
  },
  pickContext: ({
    context,
    pickedContext
  }, next) => {
    var _context$ssrContext;

    return next({
      context,
      pickedContext: _objectSpread(_objectSpread({}, pickedContext), {}, {
        request: context === null || context === void 0 ? void 0 : (_context$ssrContext = context.ssrContext) === null || _context$ssrContext === void 0 ? void 0 : _context$ssrContext.request
      })
    });
  }
}), {
  name: '@modern-js/plugin-ssr'
});

var _default = plugin;
exports["default"] = _default;

/***/ }),

/***/ 8999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _server = __webpack_require__(8684);

var _hook = __webpack_require__(2158);

var _jsxRuntime = __webpack_require__(997);

// todo: SSRContext
const prefetch = async (App, context) => (0, _hook.run)(context.ssrContext.request.headers, async () => {
  var _context$store;

  (0, _server.renderToStaticMarkup)( /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {
    context: context
  }));

  if (!context.loaderManager.hasPendingLoaders()) {
    return {};
  }

  const loadersData = await context.loaderManager.awaitPendingLoaders();
  return {
    loadersData,
    // todo: move to plugin state
    storeState: context === null || context === void 0 ? void 0 : (_context$store = context.store) === null || _context$store === void 0 ? void 0 : _context$store.getState()
  };
});

var _default = prefetch;
exports["default"] = _default;

/***/ }),

/***/ 8669:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NoSSR", ({
  enumerable: true,
  get: function () {
    return _nossr.NoSSR;
  }
}));
Object.defineProperty(exports, "PreRender", ({
  enumerable: true,
  get: function () {
    return _prerender.PreRender;
  }
}));

var _prerender = __webpack_require__(3464);

var _nossr = __webpack_require__(1336);

/***/ }),

/***/ 1336:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoSSR = void 0;

var _react = _interopRequireWildcard(__webpack_require__(6689));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let csr = false;

const NoSSR = props => {
  const [isMounted, setMounted] = (0, _react.useState)(csr);
  (0, _react.useEffect)(() => {
    csr = true;
    setMounted(true);
  });
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isMounted ? children : null);
};

exports.NoSSR = NoSSR;

/***/ }),

/***/ 3464:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PreRender = void 0;

var _reactSideEffect = _interopRequireDefault(__webpack_require__(2217));

var _react = _interopRequireWildcard(__webpack_require__(6689));

var _util = __webpack_require__(7219);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PROP_NAMES = {
  INTERVAL: 'interval',
  STALE_LIMIT: 'staleLimit',
  LEVEL: 'level',
  INCLUDES: 'includes',
  EXCLUDES: 'excludes',
  FALLBACK: 'fallback',
  MATCHES: 'matches'
};

const handleClientStateChange = () => {// not used
};

const mapStateOnServer = reduceProps => {
  const defaultProps = {
    interval: 10,
    staleLimit: false,
    level: 0,
    includes: null,
    excludes: null,
    fallback: false,
    matches: null
  };
  return Object.keys(defaultProps).reduce((props, key) => {
    const propKey = key;
    const reduceProp = reduceProps[propKey];
    let nextProps = props;

    if ((0, _util.exist)(reduceProp)) {
      nextProps = _objectSpread(_objectSpread({}, props), {}, {
        [propKey]: reduceProp
      });
    }

    return nextProps;
  }, defaultProps);
};

const reducePropsToState = propsList => {
  const reduceProps = {
    interval: (0, _util.getOuttermostProperty)(propsList, PROP_NAMES.INTERVAL),
    staleLimit: (0, _util.getOuttermostProperty)(propsList, PROP_NAMES.STALE_LIMIT),
    level: (0, _util.getOuttermostProperty)(propsList, PROP_NAMES.LEVEL),
    includes: (0, _util.aggKeysFromPropsList)(propsList, PROP_NAMES.INCLUDES),
    excludes: (0, _util.aggKeysFromPropsList)(propsList, PROP_NAMES.EXCLUDES),
    fallback: (0, _util.getOuttermostProperty)(propsList, PROP_NAMES.FALLBACK),
    matches: (0, _util.aggMatchesFromPropsList)(propsList, PROP_NAMES.MATCHES)
  };
  return reduceProps;
};

function factory(Component) {
  class Spr extends _react.default.Component {
    static set canUseDOM(canUseDOM) {
      Component.canUseDOM = canUseDOM;
    }

    static get canUseDOM() {
      return Component.canUseDOM;
    } // eslint-disable-next-line react/sort-comp


    verify() {
      return true;
    }

    render() {
      const newProps = _objectSpread({}, this.props);

      const validate = this.verify();

      if (!validate) {
        throw new Error('invalid props, check usage');
      }

      return /*#__PURE__*/(0, _react.createElement)(Component, _objectSpread({}, newProps));
    }

  }

  Spr.peek = Component.peek;
  Spr.rewind = Component.rewind;

  Spr.config = () => {
    const mappedState = Component.rewind();
    return mappedState;
  };

  return Spr;
}

const NullComponent = () => null;

const SprSideEffects = (0, _reactSideEffect.default)(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
const PreRender = factory(SprSideEffects);
exports.PreRender = PreRender;

/***/ }),

/***/ 7219:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.aggMatchesFromPropsList = exports.aggKeysFromPropsList = void 0;
exports.exist = exist;
exports.getOuttermostProperty = exports.getInnermostProperty = void 0;
const REQUEST_META = ['header', 'query'];

const getInnermostProperty = function getInnermostProperty(propsList, propName) {
  for (let i = propsList.length - 1; i >= 0; i--) {
    const props = propsList[i];

    if (props.hasOwnProperty(propName)) {
      return props[propName];
    }
  }

  return null;
};

exports.getInnermostProperty = getInnermostProperty;

const getOuttermostProperty = function getOuttermostProperty(propsList, propName) {
  for (const props of propsList) {
    if (props.hasOwnProperty(propName)) {
      return props[propName];
    }
  }

  return null;
};

exports.getOuttermostProperty = getOuttermostProperty;

const aggKeysFromPropsList = function aggKeysFromPropsList(propsList, propName) {
  const initResult = REQUEST_META.reduce((result, next) => {
    const key = next;
    result[key] = [];
    return result;
  }, {});
  const res = propsList.filter(props => usefulObject(props[propName])).reduce((result, next) => {
    REQUEST_META.forEach(key => {
      const prop = next[propName];

      if (prop !== null && prop !== void 0 && prop.hasOwnProperty(key) && usefulArray(prop[key])) {
        result[key] = unique(result[key].concat(prop[key]));
      }
    });
    return result;
  }, initResult);
  return REQUEST_META.reduce((result, next) => {
    var _result$key;

    const key = next;

    if (result[key] && ((_result$key = result[key]) === null || _result$key === void 0 ? void 0 : _result$key.length) === 0) {
      delete result[key];
    }

    return result;
  }, res);
};

exports.aggKeysFromPropsList = aggKeysFromPropsList;

const aggMatchesFromPropsList = function aggMatchesFromPropsList(propsList, propName) {
  const initResult = REQUEST_META.reduce((result, next) => {
    const key = next;
    result[key] = {};
    return result;
  }, {});
  const res = propsList.filter(props => usefulObject(props[propName])).reduce((result, next) => {
    REQUEST_META.forEach(key => {
      const prop = next[propName]; // 这边目前是浅拷贝，越后渲染优先级越高

      if (prop !== null && prop !== void 0 && prop.hasOwnProperty(key) && usefulObject(prop[key])) {
        result[key] = Object.assign(result[key], prop[key]);
      }
    });
    return result;
  }, initResult);
  return REQUEST_META.reduce((result, next) => {
    const key = next;

    if (result[key] && Object.keys(result[key]).length === 0) {
      delete result[key];
    }

    return result;
  }, res);
};

exports.aggMatchesFromPropsList = aggMatchesFromPropsList;

function unique(arr) {
  return Array.from(new Set(arr));
}

function usefulObject(target) {
  if (!exist(target)) {
    return false;
  }

  return target.constructor === Object && Object.keys(target).length > 0;
}

function usefulArray(target) {
  if (!exist(target)) {
    return false;
  }

  return Array.isArray(target) && target.length > 0;
}

function exist(target) {
  return target != null;
}

/***/ }),

/***/ 3056:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(7922);

var _react = _interopRequireDefault(__webpack_require__(6689));

var _server = _interopRequireDefault(__webpack_require__(8684));

var _serializeJavascript = _interopRequireDefault(__webpack_require__(9261));

var _reactHelmet = _interopRequireDefault(__webpack_require__(2791));

var _template = __webpack_require__(6529);

var _type = __webpack_require__(7937);

var _helmet = _interopRequireDefault(__webpack_require__(6235));

var _reduce = __webpack_require__(2363);

var loadableRenderer = _interopRequireWildcard(__webpack_require__(9702));

var styledComponentRenderer = _interopRequireWildcard(__webpack_require__(6873));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildTemplateData = (context, data, renderLevel) => {
  const {
    request
  } = context;
  return {
    data,
    context: {
      request: {
        params: request.params,
        query: request.query,
        pathname: request.pathname,
        headers: request.headers
      }
    },
    renderLevel
  };
};

class Entry {
  constructor(options) {
    this.entryName = void 0;
    this.result = void 0;
    this.App = void 0;
    this.fragments = void 0;
    this.fragments = (0, _template.toFragments)(options.template);
    this.entryName = options.name;
    this.App = options.App;
    this.result = {
      renderLevel: _type.RenderLevel.CLIENT_RENDER,
      html: '',
      chunksMap: {
        js: '',
        css: ''
      }
    };
  }

  async renderToHtml(context) {
    const {
      ssrContext
    } = context;

    if (ssrContext.redirection.url) {
      return '';
    }

    const prefetchData = await this.prefetch(context);

    if (ssrContext.redirection.url) {
      return '';
    }

    if (this.result.renderLevel >= _type.RenderLevel.SERVER_PREFETCH) {
      this.result.html = this.renderToString(context);
    }

    if (ssrContext.redirection.url) {
      return '';
    }

    let html = '';
    const templateData = buildTemplateData(ssrContext, prefetchData, this.result.renderLevel);
    const SSRData = this.getSSRDataScript(templateData);

    for (const fragment of this.fragments) {
      if (fragment.isVariable && fragment.content === 'SSRDataScript') {
        html += fragment.getValue(SSRData);
      } else {
        html += fragment.getValue(this.result);
      }
    }

    const helmetData = _reactHelmet.default.renderStatic();

    return helmetData ? (0, _helmet.default)(html, helmetData) : html;
  }

  async prefetch(context) {
    const {
      App: {
        prefetch
      }
    } = this;
    let prefetchData;

    try {
      prefetchData = prefetch ? await prefetch(context) : null;
      this.result.renderLevel = _type.RenderLevel.SERVER_PREFETCH;
    } catch (e) {
      // 这个逻辑基本不会走进来，prefecth 内部会做 catch
      this.result.renderLevel = _type.RenderLevel.CLIENT_RENDER;
      console.error('SSR Error - App Prefetch error = %s', e);
    }

    return prefetchData || {};
  }

  renderToString(context) {
    let html = '';

    try {
      const App = /*#__PURE__*/_react.default.createElement(this.App, {
        context: Object.assign(context, {
          ssr: true
        })
      }); // Todo render Hook


      const renderContext = {
        loadableManifest: _utils.path.resolve(context.ssrContext.distDir, _utils.LOADABLE_STATS_FILE),
        result: this.result,
        entryName: this.entryName
      };
      html = (0, _reduce.reduce)(App, renderContext, [loadableRenderer.toHtml, styledComponentRenderer.toHtml, jsx => _server.default.renderToString(jsx)]);
      this.result.renderLevel = _type.RenderLevel.SERVER_RENDER;
    } catch (e) {
      console.error('SSR Error - App Render To HTML error = %s', e);
    }

    return html;
  }

  getSSRDataScript(templateData) {
    return {
      SSRDataScript: `
        <script>window._SSR_DATA = ${(0, _serializeJavascript.default)(templateData, {
        isJSON: true
      })}</script>
      `
    };
  }

}

exports["default"] = Entry;

/***/ }),

/***/ 6235:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = helmet;
// 用于 react-helmet 正则替换
const RE_HTML_ATTR = /<html[^>]*>/;
const RE_BODY_ATTR = /<body[^>]*>/;
const RE_LAST_IN_HEAD = /<\/head>/;
const RE_TITLE = /<title[^>]*>([\s\S\n\r]*?)<\/title>/; // 通过 react-helmet 修改模板

function helmet(content, helmetData) {
  let result = content;
  const bodyAttributes = helmetData.bodyAttributes.toString();

  if (bodyAttributes) {
    result = result.replace(RE_BODY_ATTR, `<body ${bodyAttributes}>`);
  }

  const htmlAttributes = helmetData.htmlAttributes.toString();

  if (htmlAttributes) {
    result = result.replace(RE_HTML_ATTR, `<html ${htmlAttributes}>`);
  }

  const base = helmetData.base.toString();
  const link = helmetData.link.toString();
  const meta = helmetData.meta.toString();
  const noscript = helmetData.noscript.toString();
  const script = helmetData.script.toString();
  const style = helmetData.style.toString();
  const title = helmetData.title.toString(); // helmetData 中是否有写 title 标签，有的话替换模板中的 title

  const hasHelmetTitle = RE_TITLE.exec(title);

  if (hasHelmetTitle !== null && hasHelmetTitle !== void 0 && hasHelmetTitle[1]) {
    result = result.replace(RE_TITLE, title);
  }

  return result.replace(RE_LAST_IN_HEAD, `
    ${base}
    ${link}
    ${meta}
    ${noscript}
    ${script}
    ${style}
    ${title}
    </head>
  `);
}

/***/ }),

/***/ 6194:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.s = void 0;

var _runtimeCore = __webpack_require__(1310);

var _prerender = __webpack_require__(3464);

var _hook = __webpack_require__(2158);

var _entry = _interopRequireDefault(__webpack_require__(3056));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const render = async (ctx, _ = process.cwd(), App) => {
  const {
    entryName,
    template: templateHTML
  } = ctx.ssrContext; // const templateHTML = path.join(pwd, entryPath);

  return (0, _hook.run)(ctx.ssrContext.request.headers, async () => {
    const entry = new _entry.default({
      name: entryName,
      App,
      template: templateHTML
    });
    const html = await entry.renderToHtml(ctx);

    const cacheConfig = _prerender.PreRender.config();

    if (cacheConfig) {
      ctx.ssrContext.cacheConfig = cacheConfig;
    }

    return html;
  });
};

exports.s = render;

/***/ }),

/***/ 9702:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toHtml = void 0;

var _utils = __webpack_require__(7922);

var _server = __webpack_require__(6478);

function getLoadableScripts(extractor) {
  const check = scripts => (scripts || '').includes('__LOADABLE_REQUIRED_CHUNKS___ext');

  const scripts = extractor.getScriptTags();

  if (!check(scripts)) {
    return '';
  }

  return scripts.split('</script>') // 前两个 script为 loadable 必须的 script
  .slice(0, 2).map(i => `${i}</script>`).join('');
}

const toHtml = (jsx, renderer, next) => {
  const {
    loadableManifest,
    result: {
      chunksMap
    }
  } = renderer;

  if (!loadableManifest || chunksMap.js) {
    return next(jsx);
  }

  const extractor = new _server.ChunkExtractor({
    statsFile: loadableManifest,
    entrypoints: [renderer.entryName]
  });
  const html = next(extractor.collectChunks(jsx));
  const chunks = extractor.getChunkAssets(extractor.chunks);
  chunksMap.js = (chunksMap.js || '') + getLoadableScripts(extractor);

  for (const v of chunks) {
    const fileType = _utils.path.extname(v.url).slice(1);

    if (fileType === 'js') {
      chunksMap[fileType] += `<script src="${v.url}"></script>`;
    } else if (fileType === 'css') {
      chunksMap[fileType] += `<link href="${v.url}" rel="stylesheet" />`;
    }
  }

  return html;
};

exports.toHtml = toHtml;

/***/ }),

/***/ 2363:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.reduce = reduce;

function reduce(jsx, renderer, middleware) {
  let index = 0;

  const createNext = () => App => middleware[index++](App, renderer, createNext());

  return createNext()(jsx);
}

/***/ }),

/***/ 6873:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toHtml = void 0;

var _styled = __webpack_require__(4855);

const toHtml = (jsx, renderer, next) => {
  const sheet = new _styled.ServerStyleSheet();
  const html = next(sheet.collectStyles(jsx));
  const css = sheet.getStyleTags();
  renderer.result.chunksMap.css += css;
  return html;
};

exports.toHtml = toHtml;

/***/ }),

/***/ 6529:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Fragment = void 0;
exports.toFragments = toFragments;

var _fs = _interopRequireDefault(__webpack_require__(7147));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readFile = filepath => {
  if (_fs.default.existsSync(filepath)) {
    return _fs.default.readFileSync(filepath, 'utf-8');
  } else {
    return null;
  }
};

const VARIABLE_REG_EXP = /<!--<\?([-=+])\s*(.*?)\s*\?>-->/;
const VARIABLE_SPLITTER = /(<!--<\?.*?\?>-->)/;
const ENCODE_HTML_RULES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&#34;',
  "'": '&#39;'
};
const MATCH_HTML = /[&<>'"]/g;

function encodeChar(c) {
  return ENCODE_HTML_RULES[c] || c;
}

function escape(str) {
  return str.replace(MATCH_HTML, encodeChar);
}

class Fragment {
  constructor(template) {
    this.isVariable = void 0;
    this.content = void 0;
    this.filters = void 0;
    this.path = void 0;
    const match = VARIABLE_REG_EXP.exec(template);

    if (match) {
      const [, filterFlag, content] = match;
      this.isVariable = true;
      this.content = content;
      this.filters = [Fragment.filterMap[filterFlag]];
      this.path = content.replace(/\[['"](.*?)['"]\]/g, '.$1').split('.');
    } else {
      this.isVariable = false;
      this.content = template;
      this.filters = [];
      this.path = [];
    }
  }

  getValue(data) {
    if (this.isVariable) {
      const value = this.path.reduce((p, n) => p != null ? p[n] : p, data);
      return this.filters.reduce((p, n) => n(p), value != null ? value : '');
    }

    return this.content;
  }

}

exports.Fragment = Fragment;
Fragment.filterMap = {
  '=': escape,
  '-': v => v
};
const fragmentListMap = {};

function toFragments(filename) {
  if (fragmentListMap[filename]) {
    return fragmentListMap[filename];
  } // 未开启现代构建的项目无 -es6.html


  const template = readFile(filename);

  if (!template) {
    throw new Error(`Could not find template file: ${filename}`);
  }

  const fragmentList = template.split(VARIABLE_SPLITTER).filter(v => Boolean(v)).map(v => new Fragment(v));
  fragmentListMap[filename] = fragmentList;
  return fragmentList;
}

/***/ }),

/***/ 7937:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RenderLevel = void 0;
// import { IncomingHttpHeaders } from 'http';
let RenderLevel;
exports.RenderLevel = RenderLevel;

(function (RenderLevel) {
  RenderLevel[RenderLevel["CLIENT_RENDER"] = 0] = "CLIENT_RENDER";
  RenderLevel[RenderLevel["SERVER_PREFETCH"] = 1] = "SERVER_PREFETCH";
  RenderLevel[RenderLevel["SERVER_RENDER"] = 2] = "SERVER_RENDER";
})(RenderLevel || (exports.RenderLevel = RenderLevel = {}));

/***/ }),

/***/ 684:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.autoActions = void 0;
Object.defineProperty(exports, "devtools", ({
  enumerable: true,
  get: function () {
    return _pluginDevtools.default;
  }
}));
exports.immer = exports.effects = void 0;

var _pluginEffects = __webpack_require__(9895);

var _pluginAutoActions = _interopRequireDefault(__webpack_require__(8012));

var _pluginImmutable = _interopRequireDefault(__webpack_require__(3985));

var _pluginDevtools = _interopRequireDefault(__webpack_require__(3089));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const effects = () => _pluginEffects.plugin;

exports.effects = effects;

const immer = () => _pluginImmutable.default;

exports.immer = immer;

const autoActions = () => _pluginAutoActions.default;

exports.autoActions = autoActions;

/***/ }),

/***/ 2847:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  model: true,
  createStore: true
};
Object.defineProperty(exports, "createStore", ({
  enumerable: true,
  get: function () {
    return _store.createStore;
  }
}));
exports["default"] = void 0;
Object.defineProperty(exports, "model", ({
  enumerable: true,
  get: function () {
    return _store.model;
  }
}));

var _plugin = _interopRequireWildcard(__webpack_require__(4530));

Object.keys(_plugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _plugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _plugin[key];
    }
  });
});

var _react = __webpack_require__(8846);

Object.keys(_react).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _react[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _react[key];
    }
  });
});

var _store = __webpack_require__(2801);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/// <reference types="@modern-js-reduck/plugin-auto-actions" />
/// <reference types="@modern-js-reduck/plugin-devtools" />
/// <reference types="@modern-js-reduck/plugin-effects" />
/// <reference types="@modern-js-reduck/plugin-immutable" />
// eslint-disable-next-line filenames/match-exported
var _default = _plugin.default;
exports["default"] = _default;

/***/ }),

/***/ 4530:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
exports["default"] = void 0;

var _react = __webpack_require__(6689);

var _runtimeCore = __webpack_require__(1310);

var _store = __webpack_require__(2801);

var _react2 = __webpack_require__(8846);

var _jsxRuntime = __webpack_require__(997);

var _plugins = __webpack_require__(684);

Object.keys(_plugins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _plugins[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _plugins[key];
    }
  });
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const state = config => (0, _runtimeCore.createPlugin)(() => ({
  hoc({
    App
  }, next) {
    return next({
      App: props => {
        const context = (0, _react.useContext)(_runtimeCore.RuntimeReactContext);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Provider, {
          store: context.store,
          config: config,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(App, _objectSpread({}, props))
        });
      }
    });
  },

  init({
    context
  }, next) {
    const storeConfig = config || {};

    if (typeof window !== 'undefined') {
      var _window, _window$_SSR_DATA, _window$_SSR_DATA$dat;

      storeConfig.initialState = storeConfig.initialState || ((_window = window) === null || _window === void 0 ? void 0 : (_window$_SSR_DATA = _window._SSR_DATA) === null || _window$_SSR_DATA === void 0 ? void 0 : (_window$_SSR_DATA$dat = _window$_SSR_DATA.data) === null || _window$_SSR_DATA$dat === void 0 ? void 0 : _window$_SSR_DATA$dat.storeState) || {};
    }

    context.store = (0, _store.createStore)(storeConfig);
    next({
      context
    });
  },

  pickContext({
    context,
    pickedContext
  }, next) {
    return next({
      context,
      pickedContext: _objectSpread(_objectSpread({}, pickedContext), {}, {
        store: context.store
      })
    });
  }

}), {
  name: '@modern-js/plugin-state'
});

var _default = state;
exports["default"] = _default;

/***/ }),

/***/ 3880:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.reset = exports.impl = exports.asyncHooks = void 0;

/**
 * Copyright Lucifier129 and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file at
 * https://github.com/farrow-js/farrow/blob/master/LICENSE
 *
 */
// eslint-disable-next-line import/no-mutable-exports
let asyncHooks;
exports.asyncHooks = asyncHooks;

const impl = implimentations => {
  exports.asyncHooks = asyncHooks = implimentations;
};

exports.impl = impl;

const reset = () => {
  exports.asyncHooks = asyncHooks = undefined;
};

exports.reset = reset;

/***/ }),

/***/ 6075:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useContainer = exports.runWithContainer = exports.runHooks = exports.isContext = exports.isContainer = exports.fromContainer = exports.createContext = exports.createContainer = exports.assertContext = exports.assertContainer = exports.ContainerSymbol = void 0;

var _hook = __webpack_require__(1873);

/**
 * Copyright Lucifier129 and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file at
 * https://github.com/farrow-js/farrow/blob/master/LICENSE
 *
 */
const ContextSymbol = Symbol('Context');

const isContext = input => Object.prototype.hasOwnProperty.call(input, ContextSymbol);

exports.isContext = isContext;

const assertContext = input => {
  if (!isContext(input)) {
    throw new Error(`Expected Context, but received ${input}`);
  }
};

exports.assertContext = assertContext;

const createContext = value => {
  const id = Symbol('ContextID'); // eslint-disable-next-line @typescript-eslint/no-shadow

  const create = value => {
    const use = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const container = useContainer();
      return Object.seal({
        get value() {
          return container.read(Context);
        },

        set value(v) {
          container.write(Context, v);
        }

      });
    };

    const get = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const container = useContainer();
      return container.read(Context);
    };

    const set = v => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const container = useContainer();
      container.write(Context, v);
    };

    const assert = () => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const value = get();

      if (value === null || value === undefined) {
        throw new Error( // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Expected value is not null or undefined, but got: ${value}`);
      }

      return value;
    };

    const Context = {
      id,
      [ContextSymbol]: value,
      create,
      use,
      get,
      set,
      assert
    };
    return Context;
  };

  return create(value);
};

exports.createContext = createContext;
const ContainerSymbol = Symbol('Container'); // eslint-disable-next-line @typescript-eslint/no-redeclare

exports.ContainerSymbol = ContainerSymbol;

const isContainer = input => Boolean(input === null || input === void 0 ? void 0 : input[ContainerSymbol]);

exports.isContainer = isContainer;

const assertContainer = input => {
  if (!isContainer(input)) {
    throw new Error(`Expected Context, but received ${input}`);
  }
};

exports.assertContainer = assertContainer;

const createContextMap = storage => {
  const contextMap = new Map();
  Object.values(storage).forEach(context => {
    contextMap.set(context.id, context);
  });
  return contextMap;
};

const createContainer = (ContextStorage = {}) => {
  const contextMap = createContextMap(ContextStorage);

  const read = context => {
    const target = contextMap.get(context.id);

    if (target) {
      return target[ContextSymbol];
    }

    return context[ContextSymbol];
  };

  const write = (context, value) => {
    contextMap.set(context.id, context.create(value));
  };

  const container = Object.freeze({
    [ContainerSymbol]: true,
    read,
    write
  });
  return container;
};

exports.createContainer = createContainer;
const {
  run,
  hooks
} = (0, _hook.createHooks)({
  useContainer: () => {
    throw new Error(`Can't call useContainer out of scope, it should be placed on top of the function`);
  }
});
const runHooks = run;
exports.runHooks = runHooks;
const {
  useContainer
} = hooks;
exports.useContainer = useContainer;

const fromContainer = container => ({
  useContainer: () => container
});

exports.fromContainer = fromContainer;

const runWithContainer = (f, container) => runHooks(f, fromContainer(container));

exports.runWithContainer = runWithContainer;

/***/ }),

/***/ 1921:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createCounter = exports.createAsyncCounter = void 0;

/**
 * Copyright Lucifier129 and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file at
 * https://github.com/farrow-js/farrow/blob/master/LICENSE
 *
 */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const createCounter = callback => {
  const dispatch = (index, input) => {
    const next = (nextInput = input) => dispatch(index + 1, nextInput);

    return callback(index, input, next);
  };

  const start = input => dispatch(0, input);

  return {
    start,
    dispatch
  };
}; // eslint-disable-next-line @typescript-eslint/no-invalid-void-type


exports.createCounter = createCounter;

const createAsyncCounter = callback => {
  const dispatch = async (index, input) => {
    const next = (nextInput = input) => dispatch(index + 1, nextInput);

    return callback(index, input, next);
  };

  const start = input => dispatch(0, input);

  return {
    start,
    dispatch
  };
};

exports.createAsyncCounter = createAsyncCounter;

/***/ }),

/***/ 1873:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createHooks = void 0;

var _asyncHooksInterface = __webpack_require__(3880);

/**
 * Copyright Lucifier129 and other contributors.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file at
 * https://github.com/farrow-js/farrow/blob/master/LICENSE
 *
 */
const createHooks = defaultHooks => {
  let currentHooks = {};
  const hooks = {};

  for (const key in defaultHooks) {
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    const f = (...args) => {
      var _asyncHooks$get;

      // eslint-disable-next-line @typescript-eslint/no-shadow
      const hooks = currentHooks === defaultHooks ? (_asyncHooks$get = _asyncHooksInterface.asyncHooks === null || _asyncHooksInterface.asyncHooks === void 0 ? void 0 : _asyncHooksInterface.asyncHooks.get()) !== null && _asyncHooks$get !== void 0 ? _asyncHooks$get : defaultHooks : currentHooks;
      let handler = hooks[key];

      if (typeof handler !== 'function') {
        handler = defaultHooks[key];
      }

      return handler(...args);
    };

    hooks[key] = f;
  }

  const run = (f, implementations) => {
    try {
      currentHooks = implementations || defaultHooks;
      _asyncHooksInterface.asyncHooks === null || _asyncHooksInterface.asyncHooks === void 0 ? void 0 : _asyncHooksInterface.asyncHooks.set(currentHooks);
      return f();
    } finally {
      currentHooks = defaultHooks;
    }
  };

  return {
    run,
    hooks
  };
};

exports.createHooks = createHooks;

/***/ }),

/***/ 3783:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _waterfall = __webpack_require__(1067);

Object.keys(_waterfall).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _waterfall[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _waterfall[key];
    }
  });
});

var _workflow = __webpack_require__(2215);

Object.keys(_workflow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _workflow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _workflow[key];
    }
  });
});

var _pipeline = __webpack_require__(5837);

Object.keys(_pipeline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pipeline[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pipeline[key];
    }
  });
});

var _manager = __webpack_require__(7519);

Object.keys(_manager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _manager[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _manager[key];
    }
  });
});

var _context = __webpack_require__(6075);

Object.keys(_context).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _context[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _context[key];
    }
  });
});

/***/ }),

/***/ 6640:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createAsyncManager = void 0;

var _context = __webpack_require__(6075);

var _sync = __webpack_require__(5043);

var _runner = __webpack_require__(9474);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ASYNC_PLUGIN_SYMBOL = 'ASYNC_PLUGIN_SYMBOL';

const createAsyncManager = processes => {
  let index = 0;

  const createPlugin = (initializer, options = {}) => _objectSpread(_objectSpread(_objectSpread({}, _sync.DEFAULT_OPTIONS), {}, {
    name: `No.${index++} plugin`
  }, options), {}, {
    ASYNC_PLUGIN_SYMBOL,
    initializer
  });

  const isPlugin = input => (0, _sync.hasOwnProperty)(input, ASYNC_PLUGIN_SYMBOL) && input[ASYNC_PLUGIN_SYMBOL] === ASYNC_PLUGIN_SYMBOL;

  const registe = extraProcesses => {
    // eslint-disable-next-line no-param-reassign
    processes = _objectSpread(_objectSpread({}, extraProcesses), processes);
  };

  const clone = () => {
    let plugins = [];

    const usePlugin = (...input) => {
      for (const plugin of input) {
        if (isPlugin(plugin)) {
          if (!includeAsyncPlugin(plugins, plugin)) {
            plugins.push(_objectSpread(_objectSpread({}, plugin), {}, {
              index: plugins.length
            }));
          }
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          console.warn(`Unknown plugin: ${plugin.name}`);
        }
      }

      return manager;
    };

    const clear = () => {
      plugins = [];
    };

    const currentContainer = (0, _context.createContainer)();

    const init = async options => {
      const container = (options === null || options === void 0 ? void 0 : options.container) || currentContainer;
      const sortedPlugins = sortAsyncPlugins(plugins);
      checkAsyncPlugins(sortedPlugins);
      const hooksList = await Promise.all(sortedPlugins.map(plugin => (0, _context.runWithContainer)(() => plugin.initializer(), container)));
      return (0, _sync.generateRunner)(hooksList, container, processes);
    };

    const run = (cb, options) => {
      const container = (options === null || options === void 0 ? void 0 : options.container) || currentContainer;
      return (0, _context.runWithContainer)(cb, container);
    };

    const manager = {
      createPlugin,
      isPlugin,
      usePlugin,
      init,
      run,
      clear,
      clone,
      registe,
      useRunner: _runner.useRunner
    };
    return manager;
  };

  return clone();
};

exports.createAsyncManager = createAsyncManager;

const includeAsyncPlugin = (plugins, input) => {
  for (const plugin of plugins) {
    if (plugin.name === input.name) {
      return true;
    }
  }

  return false;
};

const sortAsyncPlugins = input => {
  let plugins = input.slice();

  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];

    for (const pre of plugin.pre) {
      for (let j = i + 1; j < plugins.length; j++) {
        if (plugins[j].name === pre) {
          plugins = [...plugins.slice(0, i), plugins[j], ...plugins.slice(i, j), ...plugins.slice(j + 1, plugins.length)];
        }
      }
    }

    for (const post of plugin.post) {
      for (let j = 0; j < i; j++) {
        if (plugins[j].name === post) {
          plugins = [...plugins.slice(0, j), ...plugins.slice(j + 1, i + 1), plugins[j], ...plugins.slice(i + 1, plugins.length)];
        }
      }
    }
  }

  return plugins;
};

const checkAsyncPlugins = plugins => {
  for (const origin of plugins) {
    for (const rival of origin.rivals) {
      for (const plugin of plugins) {
        if (rival === plugin.name) {
          throw new Error(`${origin.name} has rival ${plugin.name}`);
        }
      }
    }

    for (const required of origin.required) {
      if (!plugins.some(plugin => plugin.name === required)) {
        throw new Error(`The plugin: ${required} is required when plugin: ${origin.name} is exist.`);
      }
    }
  }
};

/***/ }),

/***/ 7519:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _sync = __webpack_require__(5043);

Object.keys(_sync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sync[key];
    }
  });
});

var _async = __webpack_require__(6640);

Object.keys(_async).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _async[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _async[key];
    }
  });
});

var _runner = __webpack_require__(9474);

Object.keys(_runner).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _runner[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _runner[key];
    }
  });
});

/***/ }),

/***/ 9474:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useRunner = exports.RunnerContext = void 0;

var _context = __webpack_require__(6075);

const RunnerContext = (0, _context.createContext)(null);
exports.RunnerContext = RunnerContext;

const useRunner = () => {
  const runner = RunnerContext.use().value;

  if (!runner) {
    throw new Error(`Can't call useRunner out of scope, it should be placed in hooks of plugin`);
  }

  return runner;
};

exports.useRunner = useRunner;

/***/ }),

/***/ 5043:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasOwnProperty = exports.generateRunner = exports.createManager = exports.cloneProgressRecord = exports.cloneProgress = exports.DEFAULT_OPTIONS = void 0;

var _context = __webpack_require__(6075);

var _waterfall = __webpack_require__(1067);

var _workflow = __webpack_require__(2215);

var _pipeline = __webpack_require__(5837);

var _runner = __webpack_require__(9474);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SYNC_PLUGIN_SYMBOL = 'SYNC_PLUGIN_SYMBOL';
const DEFAULT_OPTIONS = {
  name: 'untitled',
  pre: [],
  post: [],
  rivals: [],
  required: []
};
exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;

const createManager = processes => {
  let index = 0;

  const createPlugin = (initializer, options = {}) => _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_OPTIONS), {}, {
    name: `No.${index++} plugin`
  }, options), {}, {
    SYNC_PLUGIN_SYMBOL,
    initializer
  });

  const isPlugin = input => hasOwnProperty(input, SYNC_PLUGIN_SYMBOL) && input[SYNC_PLUGIN_SYMBOL] === SYNC_PLUGIN_SYMBOL;

  const registe = extraProcesses => {
    // eslint-disable-next-line no-param-reassign
    processes = _objectSpread(_objectSpread({}, extraProcesses), processes);
  };

  const clone = () => {
    let plugins = [];

    const usePlugin = (...input) => {
      for (const plugin of input) {
        if (isPlugin(plugin)) {
          if (!includePlugin(plugins, plugin)) {
            plugins.push(_objectSpread(_objectSpread({}, plugin), {}, {
              index: plugins.length
            }));
          }
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          console.warn(`Unknown plugin: ${plugin.name}`);
        }
      }

      return {
        createPlugin,
        isPlugin,
        usePlugin,
        init,
        run,
        clear,
        registe,
        useRunner: _runner.useRunner,
        clone
      };
    };

    const clear = () => {
      plugins = [];
    };

    const currentContainer = (0, _context.createContainer)();

    const init = options => {
      const container = (options === null || options === void 0 ? void 0 : options.container) || currentContainer;
      const sortedPlugins = sortPlugins(plugins);
      checkPlugins(sortedPlugins);
      const hooksList = sortedPlugins.map(plugin => (0, _context.runWithContainer)(() => plugin.initializer(), container));
      return generateRunner(hooksList, container, processes);
    };

    const run = (cb, options) => {
      const container = (options === null || options === void 0 ? void 0 : options.container) || currentContainer;
      return (0, _context.runWithContainer)(cb, container);
    };

    return {
      createPlugin,
      isPlugin,
      usePlugin,
      init,
      clear,
      run,
      registe,
      useRunner: _runner.useRunner,
      clone
    };
  };

  return clone();
};

exports.createManager = createManager;

const generateRunner = (hooksList, container, processes) => {
  const runner = {};
  const cloneShape = cloneProgressRecord(processes);

  if (processes) {
    for (const key in cloneShape) {
      for (const hooks of hooksList) {
        if (!hooks) {
          continue;
        }

        if (hooks[key]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          cloneShape[key].use(hooks[key]);
        }
      } // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error


      runner[key] = (input, options) => cloneShape[key].run(input, _objectSpread({
        container
      }, options));
    }
  }

  container.write(_runner.RunnerContext, runner);
  return runner;
};

exports.generateRunner = generateRunner;

const cloneProgress = progress => {
  if ((0, _waterfall.isWaterfall)(progress)) {
    return (0, _waterfall.createWaterfall)();
  }

  if ((0, _waterfall.isAsyncWaterfall)(progress)) {
    return (0, _waterfall.createAsyncWaterfall)();
  }

  if ((0, _workflow.isWorkflow)(progress)) {
    return (0, _workflow.createWorkflow)();
  }

  if ((0, _workflow.isAsyncWorkflow)(progress)) {
    return (0, _workflow.createAsyncWorkflow)();
  }

  if ((0, _workflow.isParallelWorkflow)(progress)) {
    return (0, _workflow.createParallelWorkflow)();
  }

  if ((0, _pipeline.isPipeline)(progress)) {
    return (0, _pipeline.createPipeline)();
  }

  if ((0, _pipeline.isAsyncPipeline)(progress)) {
    return (0, _pipeline.createAsyncPipeline)();
  } // eslint-disable-next-line @typescript-eslint/restrict-template-expressions


  throw new Error(`Unknown progress: ${progress}`);
}; // eslint-disable-next-line @typescript-eslint/no-invalid-void-type


exports.cloneProgress = cloneProgress;

const cloneProgressRecord = record => {
  if (!record) {
    return record;
  }

  const result = {};

  for (const key in record) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    result[key] = cloneProgress(record[key]);
  }

  return result;
};

exports.cloneProgressRecord = cloneProgressRecord;

const includePlugin = (plugins, input) => {
  for (const plugin of plugins) {
    if (plugin.name === input.name) {
      return true;
    }
  }

  return false;
};

const sortPlugins = input => {
  let plugins = input.slice();

  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];

    for (const pre of plugin.pre) {
      for (let j = i + 1; j < plugins.length; j++) {
        if (plugins[j].name === pre) {
          plugins = [...plugins.slice(0, i), plugins[j], ...plugins.slice(i, j), ...plugins.slice(j + 1, plugins.length)];
        }
      }
    }

    for (const post of plugin.post) {
      for (let j = 0; j < i; j++) {
        if (plugins[j].name === post) {
          plugins = [...plugins.slice(0, j), ...plugins.slice(j + 1, i + 1), plugins[j], ...plugins.slice(i + 1, plugins.length)];
        }
      }
    }
  }

  return plugins;
};

const checkPlugins = plugins => {
  for (const origin of plugins) {
    for (const rival of origin.rivals) {
      for (const plugin of plugins) {
        if (rival === plugin.name) {
          throw new Error(`${origin.name} has rival ${plugin.name}`);
        }
      }
    }

    for (const required of origin.required) {
      if (!plugins.some(plugin => plugin.name === required)) {
        throw new Error(`The plugin: ${required} is required when plugin: ${origin.name} is exist.`);
      }
    }
  }
};

const hasOwnProperty = (obj, prop) => obj.hasOwnProperty(prop);

exports.hasOwnProperty = hasOwnProperty;

/***/ }),

/***/ 4883:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAsyncPipeline = exports.isAsyncPipeline = exports.getAsyncMiddleware = exports.createAsyncPipeline = void 0;

var _context = __webpack_require__(6075);

var _counter = __webpack_require__(1921);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ASYNC_PIPELINE_SYMBOL = Symbol('ASYNC_PIPELINE_SYMBOL');

const isAsyncPipeline = input => Boolean(input === null || input === void 0 ? void 0 : input[ASYNC_PIPELINE_SYMBOL]);

exports.isAsyncPipeline = isAsyncPipeline;

const getAsyncMiddleware = input => {
  if (typeof input === 'function') {
    return input;
  } else if (input && typeof input.middleware === 'function') {
    return input.middleware;
  } // eslint-disable-next-line @typescript-eslint/no-base-to-string,@typescript-eslint/restrict-template-expressions


  throw new Error(`${input} is not a Middleware or { middleware: Middleware }`);
};

exports.getAsyncMiddleware = getAsyncMiddleware;

const createAsyncPipeline = options => {
  const config = _objectSpread({}, options);

  const middlewares = [];

  const use = (...inputs) => {
    middlewares.push(...inputs.map(getAsyncMiddleware));
    return pipeline;
  };

  const createCurrentCounter = (hooks, onLast) => (0, _counter.createAsyncCounter)(async (index, input, next) => {
    if (index >= middlewares.length) {
      if (onLast) {
        return onLast(input);
      }

      throw new Error(`Expect returning a value, but all middlewares just calling next()`);
    }

    const middleware = middlewares[index];
    const result = await (0, _context.runHooks)(async () => middleware(input, next), hooks);
    return result;
  });

  const currentContainer = (0, _context.createContainer)(config.contexts);
  const currentHooks = (0, _context.fromContainer)(currentContainer);
  const currentCounter = createCurrentCounter(currentHooks); // eslint-disable-next-line @typescript-eslint/no-shadow

  const run = (input, options) => {
    var _options$container;

    const container = (_options$container = options === null || options === void 0 ? void 0 : options.container) !== null && _options$container !== void 0 ? _options$container : currentContainer;
    const hooks = container === currentContainer ? currentHooks : (0, _context.fromContainer)(container);
    let counter = container === currentContainer ? currentCounter : createCurrentCounter(hooks);

    if (options !== null && options !== void 0 && options.onLast) {
      counter = createCurrentCounter(hooks, options.onLast);
    }

    const result = counter.start(input);
    return result;
  };

  const middleware = (input, next) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = (0, _context.useContainer)();
    return run(input, {
      container,
      onLast: next
    });
  };

  const pipeline = {
    [ASYNC_PIPELINE_SYMBOL]: true,
    use,
    run,
    middleware
  };
  return pipeline;
};

exports.createAsyncPipeline = createAsyncPipeline;

const useAsyncPipeline = pipeline => {
  const container = (0, _context.useContainer)();

  const runPipeline = (input, options) => pipeline.run(input, _objectSpread(_objectSpread({}, options), {}, {
    container
  }));

  return runPipeline;
};

exports.useAsyncPipeline = useAsyncPipeline;

/***/ }),

/***/ 5837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _sync = __webpack_require__(2839);

Object.keys(_sync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sync[key];
    }
  });
});

var _async = __webpack_require__(4883);

Object.keys(_async).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _async[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _async[key];
    }
  });
});

/***/ }),

/***/ 2839:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePipeline = exports.isPipeline = exports.getMiddleware = exports.createPipeline = void 0;

var _context = __webpack_require__(6075);

var _counter = __webpack_require__(1921);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PIPELINE_SYMBOL = Symbol('PIPELINE_SYMBOL');

const isPipeline = input => Boolean(input === null || input === void 0 ? void 0 : input[PIPELINE_SYMBOL]);

exports.isPipeline = isPipeline;

const getMiddleware = input => {
  if (typeof input === 'function') {
    return input;
  } else if (input && typeof input.middleware === 'function') {
    return input.middleware;
  } // eslint-disable-next-line @typescript-eslint/no-base-to-string,@typescript-eslint/restrict-template-expressions


  throw new Error(`${input} is not a Middleware or { middleware: Middleware }`);
};

exports.getMiddleware = getMiddleware;

const createPipeline = options => {
  const config = _objectSpread({}, options);

  const middlewares = [];

  const use = (...inputs) => {
    middlewares.push(...inputs.map(getMiddleware));
    return pipeline;
  };

  const createCurrentCounter = (hooks, onLast) => (0, _counter.createCounter)((index, input, next) => {
    if (index >= middlewares.length) {
      if (onLast) {
        return onLast(input);
      }

      throw new Error(`Expect returning a value, but all middlewares just calling next()`);
    }

    const middleware = middlewares[index];
    const result = (0, _context.runHooks)(() => middleware(input, next), hooks);
    return result;
  });

  const currentContainer = (0, _context.createContainer)(config.contexts);
  const currentHooks = (0, _context.fromContainer)(currentContainer);
  const currentCounter = createCurrentCounter(currentHooks); // eslint-disable-next-line @typescript-eslint/no-shadow

  const run = (input, options) => {
    var _options$container;

    const container = (_options$container = options === null || options === void 0 ? void 0 : options.container) !== null && _options$container !== void 0 ? _options$container : currentContainer;
    const hooks = container === currentContainer ? currentHooks : (0, _context.fromContainer)(container);
    let counter = container === currentContainer ? currentCounter : createCurrentCounter(hooks);

    if (options !== null && options !== void 0 && options.onLast) {
      counter = createCurrentCounter(hooks, options.onLast);
    }

    const result = counter.start(input);
    return result;
  };

  const middleware = (input, next) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = (0, _context.useContainer)();
    return run(input, {
      container,
      onLast: next
    });
  };

  const pipeline = {
    [PIPELINE_SYMBOL]: true,
    use,
    run,
    middleware
  };
  return pipeline;
};

exports.createPipeline = createPipeline;

const usePipeline = pipeline => {
  const container = (0, _context.useContainer)();

  const runPipeline = (input, options) => pipeline.run(input, _objectSpread(_objectSpread({}, options), {}, {
    container
  }));

  return runPipeline;
};

exports.usePipeline = usePipeline;

/***/ }),

/***/ 7666:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isAsyncWaterfall = exports.getAsyncBrook = exports.createAsyncWaterfall = void 0;

var _counter = __webpack_require__(1921);

var _context = __webpack_require__(6075);

const ASYNC_WATERFALL_SYMBOL = Symbol('ASYNC_WATERFALL_SYMBOL');

const getAsyncBrook = input => {
  if (typeof input === 'function') {
    return input;
  } else if (input && typeof input.brook === 'function') {
    return input.brook;
  } // eslint-disable-next-line @typescript-eslint/no-base-to-string,@typescript-eslint/restrict-template-expressions


  throw new Error(`${input} is not a AsyncBrook or { brook: AsyncBrook }`);
};

exports.getAsyncBrook = getAsyncBrook;

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const createAsyncWaterfall = () => {
  const middlewares = [];

  const createCurrentRunner = hooks => (0, _counter.createAsyncCounter)(async (index, input, next) => {
    if (index >= middlewares.length) {
      return input;
    }

    return (0, _context.runHooks)(async () => next((await middlewares[index](input)) || input), hooks);
  });

  const currentContainer = (0, _context.createContainer)();
  const currentHooks = (0, _context.fromContainer)(currentContainer);
  const currentRunner = createCurrentRunner(currentHooks);

  const use = (...input) => {
    middlewares.push(...input.map(getAsyncBrook));
    return waterfall;
  };

  const run = async (input, options) => {
    var _options$container;

    const container = (_options$container = options === null || options === void 0 ? void 0 : options.container) !== null && _options$container !== void 0 ? _options$container : currentContainer;
    const hooks = container === currentContainer ? currentHooks : (0, _context.fromContainer)(container);
    const runner = container === currentContainer ? currentRunner : createCurrentRunner(hooks);
    return runner.start(input);
  };

  const brook = input => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = (0, _context.useContainer)();
    return run(input, {
      container
    });
  };

  const waterfall = {
    use,
    run,
    brook,
    [ASYNC_WATERFALL_SYMBOL]: true
  };
  return waterfall;
};

exports.createAsyncWaterfall = createAsyncWaterfall;

const isAsyncWaterfall = input => Boolean(input === null || input === void 0 ? void 0 : input[ASYNC_WATERFALL_SYMBOL]);

exports.isAsyncWaterfall = isAsyncWaterfall;

/***/ }),

/***/ 1067:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _sync = __webpack_require__(5558);

Object.keys(_sync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sync[key];
    }
  });
});

var _async = __webpack_require__(7666);

Object.keys(_async).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _async[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _async[key];
    }
  });
});

/***/ }),

/***/ 5558:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isWaterfall = exports.getBrook = exports.createWaterfall = void 0;

var _counter = __webpack_require__(1921);

var _context = __webpack_require__(6075);

const WATERFALL_SYMBOL = Symbol('WATERFALL_SYMBOL'); // eslint-disable-next-line @typescript-eslint/no-invalid-void-type

const getBrook = input => {
  if (typeof input === 'function') {
    return input;
  } else if (input && typeof input.brook === 'function') {
    return input.brook;
  } // eslint-disable-next-line @typescript-eslint/no-base-to-string,@typescript-eslint/restrict-template-expressions


  throw new Error(`${input} is not a Brook or { brook: Brook }`);
};

exports.getBrook = getBrook;

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const createWaterfall = () => {
  const middlewares = [];

  const createCurrentRunner = hooks => (0, _counter.createCounter)((index, input, next) => {
    if (index >= middlewares.length) {
      return input;
    }

    return (0, _context.runHooks)(() => next(middlewares[index](input) || input), hooks);
  });

  const currentContainer = (0, _context.createContainer)();
  const currentHooks = (0, _context.fromContainer)(currentContainer);
  const currentRunner = createCurrentRunner(currentHooks);

  const use = (...input) => {
    middlewares.push(...input.map(getBrook));
    return waterfall;
  };

  const run = (input, options) => {
    var _options$container;

    const container = (_options$container = options === null || options === void 0 ? void 0 : options.container) !== null && _options$container !== void 0 ? _options$container : currentContainer;
    const hooks = container === currentContainer ? currentHooks : (0, _context.fromContainer)(container);
    const runner = container === currentContainer ? currentRunner : createCurrentRunner(hooks);
    return runner.start(input);
  };

  const brook = input => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = (0, _context.useContainer)();
    return run(input, {
      container
    });
  };

  const waterfall = {
    use,
    run,
    brook,
    [WATERFALL_SYMBOL]: true
  };
  return waterfall;
};

exports.createWaterfall = createWaterfall;

const isWaterfall = input => Boolean(input === null || input === void 0 ? void 0 : input[WATERFALL_SYMBOL]);

exports.isWaterfall = isWaterfall;

/***/ }),

/***/ 2477:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isAsyncWorkflow = exports.createAsyncWorkflow = void 0;

var _counter = __webpack_require__(1921);

var _context = __webpack_require__(6075);

const ASYNC_WORKFLOW_SYMBOL = Symbol('ASYNC_WORKFLOW_SYMBOL');

const isAsyncWorkflow = input => Boolean(input === null || input === void 0 ? void 0 : input[ASYNC_WORKFLOW_SYMBOL]); // eslint-disable-next-line @typescript-eslint/no-invalid-void-type


exports.isAsyncWorkflow = isAsyncWorkflow;

const createAsyncWorkflow = () => {
  const middlewares = [];

  const createCurrentRunner = hooks => (0, _counter.createAsyncCounter)(async (index, input, next) => {
    if (index >= middlewares.length) {
      return [];
    }

    const middleware = middlewares[index];
    return (0, _context.runHooks)(async () => {
      const result = await middleware(input);
      const rest = await next(input);
      return [result, ...rest];
    }, hooks);
  });

  const currentContainer = (0, _context.createContainer)();
  const currentHooks = (0, _context.fromContainer)(currentContainer);
  const currentRunner = createCurrentRunner(currentHooks);

  const use = (...input) => {
    middlewares.push(...input);
    return workflow;
  };

  const run = async (input, options) => {
    var _options$container;

    const container = (_options$container = options === null || options === void 0 ? void 0 : options.container) !== null && _options$container !== void 0 ? _options$container : currentContainer;
    const hooks = container === currentContainer ? currentHooks : (0, _context.fromContainer)(container);
    const runner = container === currentContainer ? currentRunner : createCurrentRunner(hooks);
    return runner.start(input);
  };

  const workflow = {
    use,
    run,
    [ASYNC_WORKFLOW_SYMBOL]: true
  };
  return workflow;
};

exports.createAsyncWorkflow = createAsyncWorkflow;

/***/ }),

/***/ 2215:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _sync = __webpack_require__(6310);

Object.keys(_sync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sync[key];
    }
  });
});

var _parallel = __webpack_require__(672);

Object.keys(_parallel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parallel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parallel[key];
    }
  });
});

var _async = __webpack_require__(2477);

Object.keys(_async).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _async[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _async[key];
    }
  });
});

/***/ }),

/***/ 672:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isParallelWorkflow = exports.createParallelWorkflow = void 0;

var _counter = __webpack_require__(1921);

var _context = __webpack_require__(6075);

const PARALLEL_WORKFLOW_SYMBOL = Symbol('PARALLEL_WORKFLOW_SYMBOL');

const isParallelWorkflow = input => Boolean(input === null || input === void 0 ? void 0 : input[PARALLEL_WORKFLOW_SYMBOL]);

exports.isParallelWorkflow = isParallelWorkflow;

const createParallelWorkflow = () => {
  const middlewares = [];

  const createCurrentRunner = hooks => (0, _counter.createAsyncCounter)((index, input, next) => {
    if (index >= middlewares.length) {
      return Promise.resolve([]);
    }

    const middleware = middlewares[index];
    return (0, _context.runHooks)(async () => Promise.all([middleware(input), ...(await next(input))]), hooks);
  });

  const currentContainer = (0, _context.createContainer)();
  const currentHooks = (0, _context.fromContainer)(currentContainer);
  const currentRunner = createCurrentRunner(currentHooks);

  const use = (...input) => {
    middlewares.push(...input);
    return workflow;
  };

  const run = async (input, options) => {
    var _options$container;

    const container = (_options$container = options === null || options === void 0 ? void 0 : options.container) !== null && _options$container !== void 0 ? _options$container : currentContainer;
    const hooks = container === currentContainer ? currentHooks : (0, _context.fromContainer)(container);
    const runner = container === currentContainer ? currentRunner : createCurrentRunner(hooks);
    return runner.start(input);
  };

  const workflow = {
    use,
    run,
    [PARALLEL_WORKFLOW_SYMBOL]: true
  };
  return workflow;
};

exports.createParallelWorkflow = createParallelWorkflow;

/***/ }),

/***/ 6310:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isWorkflow = exports.createWorkflow = void 0;

var _counter = __webpack_require__(1921);

var _context = __webpack_require__(6075);

const WORKFLOW_SYMBOL = Symbol('WORKFLOW_SYMBOL');

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const createWorkflow = () => {
  const middlewares = [];

  const createCurrentRunner = hooks => (0, _counter.createCounter)((index, input, next) => {
    if (index >= middlewares.length) {
      return [];
    }

    const middleware = middlewares[index];
    return (0, _context.runHooks)(() => [middleware(input), ...next(input)], hooks);
  });

  const currentContainer = (0, _context.createContainer)();
  const currentHooks = (0, _context.fromContainer)(currentContainer);
  const currentRunner = createCurrentRunner(currentHooks);

  const use = (...input) => {
    middlewares.push(...input);
    return workflow;
  };

  const run = (input, options) => {
    var _options$container;

    const container = (_options$container = options === null || options === void 0 ? void 0 : options.container) !== null && _options$container !== void 0 ? _options$container : currentContainer;
    const hooks = container === currentContainer ? currentHooks : (0, _context.fromContainer)(container);
    const runner = container === currentContainer ? currentRunner : createCurrentRunner(hooks);
    return runner.start(input);
  };

  const workflow = {
    use,
    run,
    [WORKFLOW_SYMBOL]: true
  };
  return workflow;
};

exports.createWorkflow = createWorkflow;

const isWorkflow = input => Boolean(input === null || input === void 0 ? void 0 : input[WORKFLOW_SYMBOL]);

exports.isWorkflow = isWorkflow;

/***/ }),

/***/ 9589:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getConfig = exports.defineConfig = void 0;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
const APP_CONFIG_SYMBOL = 'config';

const getConfig = Component => // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Component[APP_CONFIG_SYMBOL];

exports.getConfig = getConfig;

const defineConfig = (Component, config) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Component[APP_CONFIG_SYMBOL] = config;
  return Component;
};

exports.defineConfig = defineConfig;

/***/ }),

/***/ 7731:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useRuntimeContext = exports.createApp = exports.bootstrap = void 0;

var _react = _interopRequireWildcard(__webpack_require__(6689));

var _reactDom = _interopRequireDefault(__webpack_require__(6405));

var _plugin = __webpack_require__(3783);

var _plugin2 = __webpack_require__(2184);

var _runtimeContext = __webpack_require__(9092);

var _loaderManager = __webpack_require__(5646);

var _jsxRuntime = __webpack_require__(997);

const _excluded = ["context"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const runnerMap = new WeakMap();

const createApp = ({
  plugins
}) => {
  const appRuntime = _plugin2.runtime.clone();

  appRuntime.usePlugin(...plugins);
  return App => {
    const runner = appRuntime.init({});
    const container = (0, _plugin.createContainer)({
      App: _plugin2.AppComponentContext.create(App)
    });

    const WrapperComponent = props => {
      const element = /*#__PURE__*/_react.default.createElement(App, _objectSpread({}, props), props.children);

      return runner.provide({
        element,
        props: _objectSpread({}, props),
        context: {}
      }, {
        container,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onLast: ({
          element
        }) => element
      });
    };

    Object.assign(WrapperComponent, App);
    const HOCApp = runner.hoc({
      App: WrapperComponent
    }, {
      container,
      // eslint-disable-next-line @typescript-eslint/no-shadow
      onLast: ({
        App
      }) => {
        const WrapComponent = _ref => {
          let {
            context
          } = _ref,
              props = _objectWithoutProperties(_ref, _excluded);

          let contextValue = context;

          if (!contextValue) {
            contextValue = {
              loaderManager: (0, _loaderManager.createLoaderManager)({}),
              runner
            };
            runner.init({
              context: contextValue
            }, {
              onLast: ({
                context: context1
              }) => {
                var _init, _ref2;

                App === null || App === void 0 ? void 0 : (_init = (_ref2 = App).init) === null || _init === void 0 ? void 0 : _init.call(_ref2, context1);
              }
            });
          }

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_runtimeContext.RuntimeReactContext.Provider, {
            value: contextValue,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(App, _objectSpread({}, props))
          });
        };

        return Object.assign(WrapComponent, WrapperComponent);
      }
    });
    runnerMap.set(HOCApp, runner);
    return HOCApp;
  };
};

exports.createApp = createApp;

const bootstrap = async (App, id) => {
  const runner = runnerMap.get(App);
  const context = {
    loaderManager: (0, _loaderManager.createLoaderManager)({}),
    runner
  };

  const runInit = _context => runner.init({
    context: _context
  }, {
    onLast: ({
      context: context1
    }) => {
      var _init2, _ref3;

      App === null || App === void 0 ? void 0 : (_init2 = (_ref3 = App).init) === null || _init2 === void 0 ? void 0 : _init2.call(_ref3, context1);
    }
  });

  if (typeof window !== 'undefined') {
    var _window, _window$_SSR_DATA, _window$_SSR_DATA$dat;

    const loadersData = ((_window = window) === null || _window === void 0 ? void 0 : (_window$_SSR_DATA = _window._SSR_DATA) === null || _window$_SSR_DATA === void 0 ? void 0 : (_window$_SSR_DATA$dat = _window$_SSR_DATA.data) === null || _window$_SSR_DATA$dat === void 0 ? void 0 : _window$_SSR_DATA$dat.loadersData) || {};
    const initialLoadersState = Object.keys(loadersData).reduce((res, key) => {
      const loaderData = loadersData[key];

      if (loaderData.loading !== false || loaderData.error || !loaderData.data) {
        return res;
      }

      res[key] = loaderData.data;
      return res;
    }, {});
    Object.assign(context, {
      loaderManager: (0, _loaderManager.createLoaderManager)(initialLoadersState, {
        skipStatic: true
      })
    });
    runInit(context);
    return runner.client({
      App,
      context,
      rootElement: typeof id !== 'string' ? id : document.getElementById(id || 'root')
    }, {
      // eslint-disable-next-line @typescript-eslint/require-await,@typescript-eslint/no-shadow
      onLast: async ({
        App,
        rootElement
      }) => {
        _reactDom.default.render( /*#__PURE__*/_react.default.createElement(App, {
          context
        }), rootElement);
      }
    });
  }

  Object.assign(context, {
    ssrContext: id,
    loaderManager: (0, _loaderManager.createLoaderManager)({}, {
      skipNonStatic: id.staticGenerate,
      // if not static generate, only non-static loader can exec on prod env
      skipStatic:  true && !id.staticGenerate
    })
  });
  runInit(context);
  return runner.server({
    App,
    context
  });
};

exports.bootstrap = bootstrap;

const useRuntimeContext = () => {
  const context = (0, _react.useContext)(_runtimeContext.RuntimeReactContext);
  return context.runner.pickContext({
    context,
    pickedContext: {}
  }, {
    onLast: ({
      pickedContext
    }) => pickedContext
  });
};

exports.useRuntimeContext = useRuntimeContext;

/***/ }),

/***/ 1310:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useAppComponent: true,
  useRootElement: true,
  createPlugin: true,
  createRuntime: true,
  runtime: true,
  registerInit: true,
  registerPrefetch: true,
  defineConfig: true,
  getConfig: true,
  RuntimeReactContext: true
};
Object.defineProperty(exports, "RuntimeReactContext", ({
  enumerable: true,
  get: function () {
    return _runtimeContext.RuntimeReactContext;
  }
}));
Object.defineProperty(exports, "createPlugin", ({
  enumerable: true,
  get: function () {
    return _plugin.createPlugin;
  }
}));
Object.defineProperty(exports, "createRuntime", ({
  enumerable: true,
  get: function () {
    return _plugin.createRuntime;
  }
}));
Object.defineProperty(exports, "defineConfig", ({
  enumerable: true,
  get: function () {
    return _appConfig.defineConfig;
  }
}));
Object.defineProperty(exports, "getConfig", ({
  enumerable: true,
  get: function () {
    return _appConfig.getConfig;
  }
}));
Object.defineProperty(exports, "registerInit", ({
  enumerable: true,
  get: function () {
    return _plugin.registerInit;
  }
}));
Object.defineProperty(exports, "registerPrefetch", ({
  enumerable: true,
  get: function () {
    return _plugin.registerPrefetch;
  }
}));
Object.defineProperty(exports, "runtime", ({
  enumerable: true,
  get: function () {
    return _plugin.runtime;
  }
}));
Object.defineProperty(exports, "useAppComponent", ({
  enumerable: true,
  get: function () {
    return _plugin.useAppComponent;
  }
}));
Object.defineProperty(exports, "useRootElement", ({
  enumerable: true,
  get: function () {
    return _plugin.useRootElement;
  }
}));

var _wrap = __webpack_require__(5624);

Object.keys(_wrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _wrap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wrap[key];
    }
  });
});

var _render = __webpack_require__(726);

Object.keys(_render).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _render[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _render[key];
    }
  });
});

var _initial = __webpack_require__(8793);

Object.keys(_initial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _initial[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _initial[key];
    }
  });
});

var _plugin = __webpack_require__(2184);

var _appConfig = __webpack_require__(9589);

var _compatible = __webpack_require__(7731);

Object.keys(_compatible).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _compatible[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compatible[key];
    }
  });
});

var _runtimeContext = __webpack_require__(9092);

var _loader = __webpack_require__(6070);

Object.keys(_loader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _loader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _loader[key];
    }
  });
});

var _plugin2 = __webpack_require__(3783);

Object.keys(_plugin2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _plugin2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _plugin2[key];
    }
  });
});

/***/ }),

/***/ 8793:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialRuntime = void 0;

var _plugin = __webpack_require__(2184);

var _wrap = __webpack_require__(5624);

var _render = __webpack_require__(726);

const initialRuntime = (plugins, manager = _plugin.runtime) => ({
  wrap: (0, _wrap.initialWrapper)(plugins, manager),
  render: (0, _render.initialRender)(plugins, manager)
});

exports.initialRuntime = initialRuntime;

/***/ }),

/***/ 6070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useLoader", ({
  enumerable: true,
  get: function () {
    return _useLoader.default;
  }
}));

var _useLoader = _interopRequireDefault(__webpack_require__(5605));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 5646:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createLoaderManager = exports.LoaderStatus = void 0;

var _invariant = _interopRequireDefault(__webpack_require__(7644));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calc id from string or object
 */
const createGetId = () => {
  const idCache = new Map();
  return objectId => {
    const cachedId = idCache.get(objectId);

    if (cachedId) {
      return cachedId;
    }

    const id = JSON.stringify(objectId);
    (0, _invariant.default)(id, 'params should be not null value');
    idCache.set(objectId, id);
    return id;
  };
};

let LoaderStatus;
exports.LoaderStatus = LoaderStatus;

(function (LoaderStatus) {
  LoaderStatus[LoaderStatus["idle"] = 0] = "idle";
  LoaderStatus[LoaderStatus["loading"] = 1] = "loading";
  LoaderStatus[LoaderStatus["fulfilled"] = 2] = "fulfilled";
  LoaderStatus[LoaderStatus["rejected"] = 3] = "rejected";
})(LoaderStatus || (exports.LoaderStatus = LoaderStatus = {}));

const createLoader = (id, initialData, loaderFn, skip = false) => {
  let promise;
  let status = LoaderStatus.idle;
  let data = initialData;
  let error;
  let hasLoaded = false;
  const handlers = new Set();

  const load = async () => {
    if (skip) {
      return promise;
    }

    if (status === LoaderStatus.loading) {
      return promise;
    }

    status = LoaderStatus.loading;
    notify();
    promise = new Promise(resolve => {
      loaderFn() // eslint-disable-next-line promise/prefer-await-to-then
      .then(value => {
        data = value;
        error = null;
        status = LoaderStatus.fulfilled;
        notify();
        resolve(value);
      }) // eslint-disable-next-line promise/prefer-await-to-then
      .catch(e => {
        error = e;
        data = null;
        status = LoaderStatus.rejected;
        notify();
        resolve(e);
      }) // eslint-disable-next-line promise/prefer-await-to-then
      .finally(() => {
        promise = null;
        hasLoaded = true;
      });
    });
    return promise;
  };

  const getResult = () => ({
    loading: !hasLoaded && status === LoaderStatus.loading,
    reloading: hasLoaded && status === LoaderStatus.loading,
    data,
    error
  });

  const notify = () => {
    handlers.forEach(handler => {
      handler(status, getResult());
    });
  };

  const onChange = handler => {
    handlers.add(handler);
    return () => {
      handlers.delete(handler);
    };
  };

  return {
    get result() {
      return getResult();
    },

    get promise() {
      return promise;
    },

    onChange,
    load
  };
};

/**
 * Create loaders manager. It's returned instance will add to context
 * @param initialDataMap used to initialing loader data
 */
const createLoaderManager = (initialDataMap, managerOptions = {}) => {
  const {
    skipStatic = false,
    skipNonStatic = false
  } = managerOptions;
  const loadersMap = new Map();
  const getId = createGetId();

  const add = (loaderFn, loaderOptions) => {
    const id = getId(loaderOptions.params);
    let loader = loadersMap.get(id);

    if (!loader) {
      // ignore non-static loader on static phase
      const ignoreNonStatic = skipNonStatic && !loaderOptions.static; // ignore static loader on non-static phase

      const ignoreStatic = skipStatic && loaderOptions.static;
      const skipExec = ignoreNonStatic || ignoreStatic;
      loader = createLoader(id, loaderOptions.initialData || initialDataMap[id], loaderFn, // Todo whether static loader is exec when CSR
      skipExec);
      loadersMap.set(id, loader);
    }

    return id;
  };

  const get = id => loadersMap.get(id); // check if there has pending loaders


  const hasPendingLoaders = () => {
    for (const loader of loadersMap.values()) {
      const {
        promise
      } = loader;

      if (promise instanceof Promise) {
        return true;
      }
    }

    return false;
  }; // waiting for all pending loaders to be settled


  const awaitPendingLoaders = async () => {
    const pendingLoaders = [];

    for (const [id, loader] of loadersMap) {
      const {
        promise
      } = loader;

      if (promise instanceof Promise) {
        pendingLoaders.push([id, loader]);
      }
    }

    await Promise.all(pendingLoaders.map(item => item[1].promise));
    return pendingLoaders.reduce((res, [id, loader]) => {
      res[id] = loader.result;
      return res;
    }, {});
  };

  return {
    hasPendingLoaders,
    awaitPendingLoaders,
    add,
    get
  };
};

exports.createLoaderManager = createLoaderManager;

/***/ }),

/***/ 5605:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(6689);

var _loaderManager = __webpack_require__(5646);

var _runtimeContext = __webpack_require__(9092);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const useLoader = (loaderFn, options = {
  params: undefined
}) => {
  const context = (0, _react.useContext)(_runtimeContext.RuntimeReactContext);
  const isSSRSecRender = Boolean(context.ssr);
  const {
    loaderManager
  } = context;
  const loaderRef = (0, _react.useRef)();
  const unlistenLoaderChangeRef = (0, _react.useRef)(null);
  const reload = (0, _react.useCallback)(params => {
    var _unlistenLoaderChange3, _loaderRef$current2;

    if (typeof params === 'undefined') {
      var _loaderRef$current;

      return (_loaderRef$current = loaderRef.current) === null || _loaderRef$current === void 0 ? void 0 : _loaderRef$current.load();
    }

    const id = loaderManager.add(() => {
      try {
        const res = loaderFn(context, params);

        if (res instanceof Promise) {
          return res;
        }

        return Promise.resolve(res);
      } catch (e) {
        return Promise.reject(e instanceof Error ? e.message : e);
      }
    }, _objectSpread(_objectSpread({}, options), {}, {
      params
    }));
    loaderRef.current = loaderManager.get(id);

    if (isSSRSecRender) {
      var _unlistenLoaderChange;

      (_unlistenLoaderChange = unlistenLoaderChangeRef.current) === null || _unlistenLoaderChange === void 0 ? void 0 : _unlistenLoaderChange.call(unlistenLoaderChangeRef);
      return undefined;
    } // skip this loader, then try to unlisten loader change


    if (options.skip) {
      var _unlistenLoaderChange2;

      (_unlistenLoaderChange2 = unlistenLoaderChangeRef.current) === null || _unlistenLoaderChange2 === void 0 ? void 0 : _unlistenLoaderChange2.call(unlistenLoaderChangeRef);
      return undefined;
    }

    const res = loaderRef.current.load(); // unlisten old loader, and subsribe to new loader

    (_unlistenLoaderChange3 = unlistenLoaderChangeRef.current) === null || _unlistenLoaderChange3 === void 0 ? void 0 : _unlistenLoaderChange3.call(unlistenLoaderChangeRef);
    unlistenLoaderChangeRef.current = (_loaderRef$current2 = loaderRef.current) === null || _loaderRef$current2 === void 0 ? void 0 : _loaderRef$current2.onChange((_status, _result) => {
      setResult(_result);

      if (_status === _loaderManager.LoaderStatus.fulfilled) {
        var _options$onSuccess;

        options === null || options === void 0 ? void 0 : (_options$onSuccess = options.onSuccess) === null || _options$onSuccess === void 0 ? void 0 : _options$onSuccess.call(options, result.data);
      }

      if (_status === _loaderManager.LoaderStatus.rejected) {
        var _options$onError;

        options === null || options === void 0 ? void 0 : (_options$onError = options.onError) === null || _options$onError === void 0 ? void 0 : _options$onError.call(options, result.data);
      }
    });
    return res;
  }, [options.skip]);
  (0, _react.useEffect)(() => () => {
    var _unlistenLoaderChange4;

    (_unlistenLoaderChange4 = unlistenLoaderChangeRef.current) === null || _unlistenLoaderChange4 === void 0 ? void 0 : _unlistenLoaderChange4.call(unlistenLoaderChangeRef);
  }, []);
  (0, _react.useMemo)(() => {
    var _options$params;

    const p = (_options$params = options.params) !== null && _options$params !== void 0 ? _options$params : loaderFn.id;

    if (!p) {
      throw new Error('Params is required in useLoader');
    }

    reload(p);
  }, [options.params]);
  const [result, setResult] = (0, _react.useState)(loaderRef.current.result);
  return _objectSpread(_objectSpread({}, result), {}, {
    reload
  });
};

var _default = useLoader;
exports["default"] = _default;

/***/ }),

/***/ 2184:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useRootElement = exports.useAppComponent = exports.runtime = exports.registerPrefetch = exports.registerInit = exports.createRuntime = exports.createPlugin = exports.AppComponentContext = void 0;

var _plugin = __webpack_require__(3783);

var _loaderManager = __webpack_require__(5646);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const hoc = (0, _plugin.createPipeline)(); // eslint-disable-next-line @typescript-eslint/no-empty-interface

const provide = (0, _plugin.createPipeline)();
const AppComponentContext = (0, _plugin.createContext)(null);
exports.AppComponentContext = AppComponentContext;

const useAppComponent = () => {
  const AppComponent = AppComponentContext.use().value;

  if (!AppComponent) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Expect React.ComponentType, accept: ${AppComponent}`);
  }

  return AppComponent;
};

exports.useAppComponent = useAppComponent;

const useRootElement = () => {
  const rootElement = AppComponentContext.use().value;

  if (!rootElement) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Expect HTMLElement, accept: ${rootElement}`);
  }

  return rootElement;
};

exports.useRootElement = useRootElement;
const client = (0, _plugin.createAsyncPipeline)();
const server = (0, _plugin.createAsyncPipeline)();
const init = (0, _plugin.createPipeline)();
const pickContext = (0, _plugin.createPipeline)();

const createRuntime = () => (0, _plugin.createManager)({
  hoc,
  provide,
  client,
  server,
  init,
  pickContext
});
/**
 * register init hook. It would be revoked both ssr and csr.
 */


exports.createRuntime = createRuntime;

const registerInit = (App, _init) => {
  const originalInit = App.init;

  App.init = async context => {
    if (!context.loaderManager) {
      context.loaderManager = (0, _loaderManager.createLoaderManager)({});
    }

    await Promise.all([originalInit === null || originalInit === void 0 ? void 0 : originalInit(context), _init === null || _init === void 0 ? void 0 : _init(context)]);
  };
};
/**
 * register prefetch hook. It would be revoked both ssr and csr.
 * But if ssr success, It wont exec in csr again.
 * If ssr prefetch failed, It will fallback to exec in csr.
 */


exports.registerInit = registerInit;

const registerPrefetch = (App, prefetch) => {
  const originalPrefetch = App.prefetch;

  App.prefetch = async context => {
    const originResult = await (originalPrefetch === null || originalPrefetch === void 0 ? void 0 : originalPrefetch(context));
    const result = await (prefetch === null || prefetch === void 0 ? void 0 : prefetch(context));
    return _objectSpread(_objectSpread({}, originResult), result);
  };
};

exports.registerPrefetch = registerPrefetch;
const runtime = createRuntime();
exports.runtime = runtime;
const {
  createPlugin
} = runtime;
exports.createPlugin = createPlugin;

/***/ }),

/***/ 726:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.serverRender = exports.initialRender = exports.clientRender = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _reactDom = _interopRequireDefault(__webpack_require__(6405));

var _plugin = __webpack_require__(2184);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialRender = (plugins, manager = _plugin.runtime) => {
  manager.usePlugin(...plugins);
  return {
    clientRender: (props, rootElement) => clientRender(props, rootElement, manager),
    serverRender: props => serverRender(props, manager)
  };
};

exports.initialRender = initialRender;

const clientRender = ({
  App
}, rootElement, manager = _plugin.runtime) => {
  const runner = manager.init({});
  return runner.client({
    App,
    rootElement
  }, {
    // eslint-disable-next-line @typescript-eslint/no-shadow,@typescript-eslint/require-await
    onLast: async ({
      App,
      rootElement
    }) => {
      _reactDom.default.render( /*#__PURE__*/_react.default.createElement(App), rootElement);
    }
  });
};

exports.clientRender = clientRender;

const serverRender = ({
  App
}, manager = _plugin.runtime) => {
  const runner = manager.init({});
  return runner.server({
    App
  });
};

exports.serverRender = serverRender;

/***/ }),

/***/ 9092:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RuntimeReactContext = void 0;

var _react = __webpack_require__(6689);

const RuntimeReactContext = /*#__PURE__*/(0, _react.createContext)({}); // eslint-disable-next-line @typescript-eslint/no-empty-interface

exports.RuntimeReactContext = RuntimeReactContext;

/***/ }),

/***/ 4855:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(__webpack_require__(7518));

Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _styledComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _styledComponents[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _styledComponents.default;
exports["default"] = _default;

/***/ }),

/***/ 5624:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.wrap = exports.initialWrapper = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _plugin = __webpack_require__(3783);

var _plugin2 = __webpack_require__(2184);

var _runtimeContext = __webpack_require__(9092);

const _excluded = ["context"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialWrapper = (plugins, manager = _plugin2.runtime) => {
  manager.usePlugin(...plugins); // eslint-disable-next-line @typescript-eslint/ban-types

  return (App, config) => wrap(App, config, manager);
}; // eslint-disable-next-line @typescript-eslint/ban-types


exports.initialWrapper = initialWrapper;

const wrap = (App, {}, manager = _plugin2.runtime) => {
  const runner = manager.init({});
  const container = (0, _plugin.createContainer)({
    App: _plugin2.AppComponentContext.create(App)
  });

  const WrapperComponent = props => {
    const element = /*#__PURE__*/_react.default.createElement(App, _objectSpread({}, props), props.children);

    return runner.provide({
      element,
      props: _objectSpread({}, props),
      context: {}
    }, {
      container,
      // eslint-disable-next-line @typescript-eslint/no-shadow
      onLast: ({
        element
      }) => element
    });
  };

  return runner.hoc({
    App: WrapperComponent
  }, {
    container,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    onLast: ({
      App
    }) => {
      const WrapComponent = _ref => {
        let {
          context
        } = _ref,
            props = _objectWithoutProperties(_ref, _excluded);

        return /*#__PURE__*/_react.default.createElement(_runtimeContext.RuntimeReactContext.Provider, {
          value: context
        }, /*#__PURE__*/_react.default.createElement(App, props));
      };

      return WrapComponent;
    }
  });
};

exports.wrap = wrap;

/***/ }),

/***/ 9085:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _pluginState = __webpack_require__(2847);

Object.keys(_pluginState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pluginState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pluginState[key];
    }
  });
});

/***/ }),

/***/ 3435:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _pluginRouter = __webpack_require__(7342);

Object.keys(_pluginRouter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pluginRouter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pluginRouter[key];
    }
  });
});

/***/ }),

/***/ 3324:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _runtimeCore.RuntimeReactContext;
  }
});
Object.defineProperty(exports, "Ux", ({
  enumerable: true,
  get: function () {
    return _runtimeCore.bootstrap;
  }
}));
Object.defineProperty(exports, "ri", ({
  enumerable: true,
  get: function () {
    return _runtimeCore.createApp;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _runtimeCore.createPlugin;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _runtimeCore.defineConfig;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _runtimeCore.registerInit;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _runtimeCore.registerPrefetch;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _runtimeCore.useLoader;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _runtimeCore.useRuntimeContext;
  }
});

var _runtimeCore = __webpack_require__(1310);

/***/ }),

/***/ 5369:
/***/ (function(module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: nunito_for_arco, Helvetica Neue, Helvetica, PingFang SC,\n    Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n\n.container {\n  min-height: 100vh;\n  max-width: 100%;\n  padding: 50px 100px;\n}\n\nbutton {\n  margin: 0;\n  margin-right: 20px;\n  outline: 0;\n  padding: 10px;\n  background: #0078ef;\n  border: 0;\n  border-radius: 4px;\n  color: #fff;\n  cursor: pointer\n}\n\nbutton:hover {\n    opacity: 0.8;\n  }\n\n.network {\n  margin-bottom: 10px;\n}\n.display-panel {\n  padding: 30px;\n  color: green;\n  border: 1px dashed;\n  margin-bottom: 20px;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;8DAC4D;AAC9D;;AAEA;EACE,mCAAmC;EACnC,kCAAkC;EAClC,2BAAsB;OAAtB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,WAAW;EACX;AAKF;;AAHE;IACE,YAAY;EACd;;AAGF;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;AACvB","sourcesContent":["html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: nunito_for_arco, Helvetica Neue, Helvetica, PingFang SC,\n    Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n}\n\n.container {\n  min-height: 100vh;\n  max-width: 100%;\n  padding: 50px 100px;\n}\n\nbutton {\n  margin: 0;\n  margin-right: 20px;\n  outline: 0;\n  padding: 10px;\n  background: #0078ef;\n  border: 0;\n  border-radius: 4px;\n  color: #fff;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n}\n\n.network {\n  margin-bottom: 10px;\n}\n.display-panel {\n  padding: 30px;\n  color: green;\n  border: 1px dashed;\n  margin-bottom: 20px;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 3645:
/***/ (function(module) {



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

/***/ 7537:
/***/ (function(module) {



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

/***/ 6478:
/***/ (function(module) {

module.exports = require("@loadable/server");

/***/ }),

/***/ 8012:
/***/ (function(module) {

module.exports = require("@modern-js-reduck/plugin-auto-actions");

/***/ }),

/***/ 3089:
/***/ (function(module) {

module.exports = require("@modern-js-reduck/plugin-devtools");

/***/ }),

/***/ 9895:
/***/ (function(module) {

module.exports = require("@modern-js-reduck/plugin-effects");

/***/ }),

/***/ 3985:
/***/ (function(module) {

module.exports = require("@modern-js-reduck/plugin-immutable");

/***/ }),

/***/ 8846:
/***/ (function(module) {

module.exports = require("@modern-js-reduck/react");

/***/ }),

/***/ 2801:
/***/ (function(module) {

module.exports = require("@modern-js-reduck/store");

/***/ }),

/***/ 5295:
/***/ (function(module) {

module.exports = require("history");

/***/ }),

/***/ 7644:
/***/ (function(module) {

module.exports = require("invariant");

/***/ }),

/***/ 6689:
/***/ (function(module) {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ (function(module) {

module.exports = require("react-dom");

/***/ }),

/***/ 8684:
/***/ (function(module) {

module.exports = require("react-dom/server");

/***/ }),

/***/ 2791:
/***/ (function(module) {

module.exports = require("react-helmet");

/***/ }),

/***/ 4661:
/***/ (function(module) {

module.exports = require("react-router-dom");

/***/ }),

/***/ 2217:
/***/ (function(module) {

module.exports = require("react-side-effect");

/***/ }),

/***/ 997:
/***/ (function(module) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9261:
/***/ (function(module) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ 7518:
/***/ (function(module) {

module.exports = require("styled-components");

/***/ }),

/***/ 7922:
/***/ (function(module) {

module.exports = require("@modern-js/utils");

/***/ }),

/***/ 852:
/***/ (function(module) {

module.exports = require("async_hooks");

/***/ }),

/***/ 7147:
/***/ (function(module) {

module.exports = require("fs");

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ main; },
  "serverRender": function() { return /* binding */ serverRender; }
});

// EXTERNAL MODULE: ./node_modules/@modern-js/runtime/dist/js/node/index.js
var node = __webpack_require__(3324);
// EXTERNAL MODULE: ./node_modules/@modern-js/runtime/dist/js/node/exports/router.js
var router = __webpack_require__(3435);
;// CONCATENATED MODULE: external "web3modal"
var external_web3modal_namespaceObject = require("web3modal");
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_namespaceObject);
;// CONCATENATED MODULE: external "web3"
var external_web3_namespaceObject = require("web3");
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/web3-modal/constant.tsx
const CHAIN_IDS_MAPPING={'0x01':'eth-mainnet','0x03':'ropsten-testnet','0x61':'bsc-testnet','0x38':'bsc-mainnet'};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/web3-modal/index.tsx
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}const providerOptions=()=>({'custom-binancewallet':{display:{logo:'https://dex-bin.bnbstatic.com/static/images/icon_dex.svg',name:'Binance Wallet',description:'Connect to your Binance Wallet'},package:window.BinanceChain,connector:async provider=>{await provider.enable();return provider;}}});const getWeb3Modal=()=>{const web3modal=new (external_web3modal_default())({network:'testnet',providerOptions:providerOptions(),cacheProvider:true,// disableInjectedProvider: true,
theme:{background:'rgb(39, 49, 56)',main:'rgb(199, 199, 199)',secondary:'rgb(136, 136, 136)',border:'rgba(195, 195, 195, 0.14)',hover:'rgb(16, 26, 32)'}});return web3modal;};const ConnectButtons=()=>{const _useState=(0,external_react_.useState)({}),_useState2=_slicedToArray(_useState,2),web3modal=_useState2[0],setWeb3modal=_useState2[1];const _useState3=(0,external_react_.useState)({}),_useState4=_slicedToArray(_useState3,2),result=_useState4[0],setResult=_useState4[1];const _useState5=(0,external_react_.useState)({}),_useState6=_slicedToArray(_useState5,2),web3=_useState6[0],setWeb3=_useState6[1];const _useState7=(0,external_react_.useState)({}),_useState8=_slicedToArray(_useState7,2),network=_useState8[0],setNetwork=_useState8[1];const _useState9=(0,external_react_.useState)(''),_useState10=_slicedToArray(_useState9,2),account=_useState10[0],setAccount=_useState10[1];(0,external_react_.useEffect)(()=>{setWeb3modal(getWeb3Modal());},[]);const handleConnect=(0,external_react_.useCallback)(async()=>{const provider=await web3modal.connect();const _web3=new (external_web3_default())(provider);const accounts=await _web3.eth.getAccounts();setResult({accounts});setWeb3(_web3);setAccount(accounts[0]);const chainId=await _web3.eth.getChainId();const setChainId=_chainId=>{const hex=_web3.utils.toHex(_chainId);setNetwork({chainId:_chainId,hex,name:CHAIN_IDS_MAPPING[hex]});};setChainId(chainId);// Subscribe to accounts change
provider.on('accountsChanged',_accounts=>{setAccount(_accounts[0]);});// Subscribe to chainId change
provider.on('chainChanged',_chainId=>{setChainId(Number(_chainId));});},[web3modal]);// eth_sign
const handleSign=(0,external_react_.useCallback)(async()=>{if(!web3.eth){setResult({error:'Please click connect first'});return;}const msg='0x749324f788147326a2d3113d1926fcd82b4fb6f02e0a29b897a2e614dcc40464';try{const signature=await web3.eth.sign(msg,account);setResult({signature});}catch(error){console.info(error);}},[web3,account]);// personal_sign
const handlePersonalSign=(0,external_react_.useCallback)(async()=>{if(!web3.eth){setResult({error:'Please click connect first'});return;}const msg='0x749324f788147326a2d3113d1926fcd82b4fb6f02e0a29b897a2e614dcc40464';try{const signature=await web3.eth.personal.sign(msg,account,'');setResult({signature});}catch(error){console.info(error);}},[web3,account]);// eth_sendTransaction
const handleSendTx=(0,external_react_.useCallback)(async()=>{if(!web3.eth){setResult({error:'Please click connect first'});return;}try{const tx=await web3.eth.sendTransaction({to:account,from:account,value:0.001*1e18});setResult(tx);}catch(error){console.info(error);}},[web3,account]);// clear connect
const handleClear=async()=>{web3modal.clearCachedProvider();setResult({});setWeb3({});};return/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:"network",children:["Network: ",JSON.stringify(network)]}),/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:"network",children:["Account: ",account]}),/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"display-panel",children:JSON.stringify(result,null,2)})]}),/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime_.jsx)("button",{type:"button",onClick:handleClear,children:"Clear Connect"}),/*#__PURE__*/(0,jsx_runtime_.jsx)("button",{type:"button",onClick:handleConnect,children:"Connect"}),/*#__PURE__*/(0,jsx_runtime_.jsx)("button",{type:"button",onClick:handleSign,children:"Eth_sign"}),/*#__PURE__*/(0,jsx_runtime_.jsx)("button",{type:"button",onClick:handlePersonalSign,children:"Personal_sign"}),/*#__PURE__*/(0,jsx_runtime_.jsx)("button",{type:"button",onClick:handleSendTx,children:"Eth_sendTransaction"})]})]});};
// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(5369);
;// CONCATENATED MODULE: ./src/App.tsx
const App_App=()=>/*#__PURE__*/(0,jsx_runtime_.jsxs)(router.Switch,{children:[/*#__PURE__*/(0,jsx_runtime_.jsx)(router.Route,{exact:true,path:"/",children:/*#__PURE__*/(0,jsx_runtime_.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime_.jsx)("h2",{className:"description",children:"Web3 Modal Test"}),/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:"grid",children:/*#__PURE__*/(0,jsx_runtime_.jsx)(ConnectButtons,{})})]})}),/*#__PURE__*/(0,jsx_runtime_.jsx)(router.Route,{path:"*",children:/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{children:"404"})})]});/* harmony default export */ var src_App = (App_App);
// EXTERNAL MODULE: ./node_modules/@modern-js/plugin-router/dist/js/node/runtime/index.js
var runtime = __webpack_require__(7342);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
// EXTERNAL MODULE: ./node_modules/@modern-js/plugin-ssr/dist/js/node/index.node.js
var index_node = __webpack_require__(2074);
var index_node_default = /*#__PURE__*/__webpack_require__.n(index_node);
// EXTERNAL MODULE: ./node_modules/@modern-js/plugin-state/dist/js/node/runtime/index.js
var node_runtime = __webpack_require__(2847);
var node_runtime_default = /*#__PURE__*/__webpack_require__.n(node_runtime);
// EXTERNAL MODULE: ./node_modules/@modern-js/runtime/dist/js/node/exports/model.js
var model = __webpack_require__(9085);
;// CONCATENATED MODULE: ./node_modules/.modern-js/main/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}const IS_BROWSER=typeof window!=='undefined';const MOUNT_ID='root';const createStatePlugins=config=>{const plugins=[];plugins.push((0,model.immer)(config['immer']));plugins.push((0,model.effects)(config['effects']));plugins.push((0,model.autoActions)(config['autoActions']));plugins.push((0,model.devtools)(config['devtools']));return plugins;};let AppWrapper=null;function render(){var _App$config,_App$config2,_App$config3;AppWrapper=(0,node/* createApp */.ri)({plugins:[runtime_default()(_objectSpread(_objectSpread({},{"historyOptions":{"basename":"/"}}),src_App===null||src_App===void 0?void 0:(_App$config=src_App.config)===null||_App$config===void 0?void 0:_App$config.router)),index_node_default()(_objectSpread(_objectSpread({},true),src_App===null||src_App===void 0?void 0:(_App$config2=src_App.config)===null||_App$config2===void 0?void 0:_App$config2.ssr)),node_runtime_default()(_objectSpread(_objectSpread({},{plugins:createStatePlugins(true)}),src_App===null||src_App===void 0?void 0:(_App$config3=src_App.config)===null||_App$config3===void 0?void 0:_App$config3.state))]})(src_App);if(IS_BROWSER){(0,node/* bootstrap */.Ux)(AppWrapper,MOUNT_ID);}return AppWrapper;}AppWrapper=render();function serverRender(context){return (0,node/* bootstrap */.Ux)(AppWrapper,context);}/* harmony default export */ var main = (AppWrapper);;
}();
module.exports = __webpack_exports__;
/******/ })()
;