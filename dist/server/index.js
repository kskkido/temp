module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// define constants such as env
// module.exports getters that check for environment variables
// some how make symlink work like bones
var pkg = __webpack_require__(10);
var process = __webpack_require__(11);

var env = process.env;


module.exports = {
	get baseUrl() {
		return env.BASE_URL || 'http://localhost:' + module.exports.port;
	},
	get name() {
		return pkg.name;
	},
	get port() {
		return env.PORT || 1337;
	},
	get root() {
		return process.cwd();
	},
	package: pkg,
	env: env
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(env, 'env', '/Users/Kidokeisuke/bitcraft/index.js');
}();

;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _morgan = __webpack_require__(7);

var _morgan2 = _interopRequireDefault(_morgan);

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _faye = __webpack_require__(8);

var _faye2 = _interopRequireDefault(_faye);

var _bodyParser = __webpack_require__(9);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ = __webpack_require__(0);

var _ssr = __webpack_require__(12);

var _ssr2 = _interopRequireDefault(_ssr);

var _hmr = __webpack_require__(13);

var _hmr2 = _interopRequireDefault(_hmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PUBLIC_PATH = _path2.default.join(_.root, 'dist/public');

var bae = new _faye2.default.NodeAdapter({
	mount: '/faye',
	timeout: 45
});

var app = (0, _express2.default)();

var _default = app.use(_.env.NODE_ENV === 'development' ? _hmr2.default : function (req, res, next) {
	return next();
}).use((0, _morgan2.default)('dev')).use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use('/public', _express2.default.static(PUBLIC_PATH)).get('*', _ssr2.default).use(function (err, req, res) {
	console.error(err);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});

exports.default = _default;


if (module === __webpack_require__.c[__webpack_require__.s]) {
	var server = app.listen(_.port, function () {
		console.log('connected');

		var _server$address = server.address(),
		    address = _server$address.address;

		var host = address === '::' ? 'localhost' : address;
		var urlSafeHost = host.includes(':') ? '[' + host + ']' : host;
		console.log('Listening on http://' + urlSafeHost + ':' + _.port);
	});

	bae.attach(server);
}
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PUBLIC_PATH, 'PUBLIC_PATH', '/Users/Kidokeisuke/bitcraft/src/server/index.js');

	__REACT_HOT_LOADER__.register(bae, 'bae', '/Users/Kidokeisuke/bitcraft/src/server/index.js');

	__REACT_HOT_LOADER__.register(app, 'app', '/Users/Kidokeisuke/bitcraft/src/server/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/index.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("faye");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
	"name": "faye-chat",
	"version": "0.0.1",
	"description": "Faye Chat",
	"main": "index.js",
	"scripts": {
		"test": "mocha --compilers js:babel-register --watch-extensions js,jsx tests/**/*.test.js",
		"build": "webpack",
		"start": "node ./dist/server",
		"start-dev": "NODE_ENV=development webpack -w & NODE_ENV=development nodemon ./dist/server",
		"start-prod": "NODE_ENV=production webpack && npm run start"
	},
	"keywords": [],
	"author": "bitcraft",
	"license": "Proprietary",
	"private": true,
	"dependencies": {
		"body-parser": "^1.17.2",
		"express": "^4.15.3",
		"faye": "^1.2.4",
		"history": "^4.6.3",
		"morgan": "^1.8.2",
		"pg": "^6.4.1",
		"ramda": "^0.25.0",
		"react": "^16.0.0",
		"react-dom": "^16.0.0",
		"react-dom-server": "^0.0.5",
		"react-redux": "^5.0.5",
		"react-router": "^4.2.0",
		"react-router-dom": "^4.2.2",
		"redux": "^3.7.2",
		"redux-devtools-extension": "^2.13.2",
		"redux-logger": "^3.0.6",
		"redux-thunk": "^2.2.0",
		"sequelize": "^4.3.2"
	},
	"devDependencies": {
		"awesome-typescript-loader": "^3.3.0",
		"babel-core": "^6.25.0",
		"babel-eslint": "^8.0.2",
		"babel-loader": "^7.1.1",
		"babel-plugin-transform-object-rest-spread": "^6.26.0",
		"babel-preset-env": "^1.6.1",
		"babel-preset-react": "^6.24.1",
		"babel-register": "^6.24.1",
		"chai": "^4.1.0",
		"compression-webpack-plugin": "^1.0.0",
		"enzyme": "^3.0.0",
		"eslint": "^4.11.0",
		"eslint-config-airbnb": "^16.1.0",
		"eslint-plugin-import": "^2.8.0",
		"eslint-plugin-jsx-a11y": "^6.0.2",
		"eslint-plugin-react": "^7.4.0",
		"mocha": "^3.4.2",
		"prop-types": "^15.6.0",
		"react-hot-loader": "^3.1.2",
		"supertest": "^3.0.0",
		"webpack": "^3.2.0",
		"webpack-bundle-analyzer": "^2.9.1",
		"webpack-dev-middleware": "^1.12.0",
		"webpack-hot-middleware": "^2.20.0",
		"webpack-merge": "^4.1.1",
		"webpack-node-externals": "^1.6.0"
	}
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ = __webpack_require__(0);

var html = '\n\t<!doctype html>\n\t<html>\n\t\t<head>\n\t\t\t<style>\n\t\t\t\tp {\n\t\t\t\t\t\tmargin-top:0;\n\t\t\t\t\t\tmargin-bottom:0;\n\t\t\t\t\t\tfont-family: Tahoma, Arial, sans-serif;\n\t\t\t\t\t\t-webkit-font-smoothing: subpixel-antialiased;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<title>boiled</title>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="app"></div>\n\t\t\t<script type="text/javascript" src=' + _.baseUrl + '/faye/client.js></script>\n\t\t\t<script src="public/bundle.js"></script>\n\t\t</body>\n\t</html>\n';

function handleRender(req, res) {
	res.send(html);
}

var _default = handleRender;
exports.default = _default;

// const renderFullPage = (html, preloadedState) =>
// 	`
// 		<!doctype html>
// 		<html>
// 			<head>
// 				<style>
// 					p {
// 							margin-top:0;
// 							margin-bottom:0;
// 							font-family: Tahoma, Arial, sans-serif;
// 							-webkit-font-smoothing: subpixel-antialiased;
// 					}
// 				</style>
// 				<title>boiled</title>
// 			</head>
// 			<body>
// 				<div id="app"></div>
// 				<script src="bundle.js"></script>
// 				<script type="text/javascript" src=${baseUrl}/faye/client.js></script>
// 			</body>
// 		</html>
// 	`

;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(handleRender, 'handleRender', '/Users/Kidokeisuke/bitcraft/src/server/ssr.js');

	__REACT_HOT_LOADER__.register(html, 'html', '/Users/Kidokeisuke/bitcraft/src/server/ssr.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/ssr.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(2);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(14);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(15);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = __webpack_require__(16);

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// webpack config is an array, [0: clientConfig, 1: serverConfig]
/* eslint-disable import/no-extraneous-dependencies */
var clientConfig = _webpack4.default[0];
var compiler = (0, _webpack2.default)(clientConfig);

var _default = router.use((0, _webpackDevMiddleware2.default)(compiler, {
	noInfo: true,
	publicPath: clientConfig.output.publicPath
})).use((0, _webpackHotMiddleware2.default)(compiler, {
	quiet: true
}));

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(router, 'router', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');

	__REACT_HOT_LOADER__.register(clientConfig, 'clientConfig', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');

	__REACT_HOT_LOADER__.register(compiler, 'compiler', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const npmEvent = process.env.npm_lifecycle_event;
module.exports = __webpack_require__(17);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var _require = __webpack_require__(0),
    env = _require.env;

var clientConfig = __webpack_require__(18);
var serverConfig = __webpack_require__(20);
var applyBaseConfig = __webpack_require__(22)(env);

module.exports = [clientConfig, serverConfig].map(applyBaseConfig);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(applyBaseConfig, 'applyBaseConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/index.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var webpack = __webpack_require__(2);
var merge = __webpack_require__(3);
var CompressionPlugin = __webpack_require__(19);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/client'),
	output: join(root, 'dist/public'),
	reducers: join(root, 'src/client/reducers'),
	utils: join(root, 'src/client/utils')
};

var commonConfig = {
	entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', PATHS.entry],
	output: {
		path: PATHS.output,
		filename: 'bundle.js',
		publicPath: '/public'
	},
	resolve: {
		alias: {
			Reducers: PATHS.reducers,
			Utils: PATHS.utils
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '*']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: ['react-hot-loader/webpack', 'awesome-typescript-loader']
		}]
	}
};

var prodConfig = {
	plugins: [new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false, // Suppress uglification warnings
			unsafe: true,
			unsafe_comps: true,
			screw_ie8: true
		},
		output: {
			comments: false
		},
		exclude: [/\.min\.js$/gi]
	}), new webpack.optimize.AggressiveMergingPlugin(), new CompressionPlugin({
		asset: '[path].gz[query]',
		algorithm: 'gzip',
		test: /\.js$|\.css$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	})]
};

var devConfig = {
	output: {
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
};

module.exports = function (env) {
	return env.NODE_ENV === 'production' ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var nodeExternals = __webpack_require__(21);
var merge = __webpack_require__(3);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/server'),
	output: join(root, 'dist/server')
};

var commonConfig = {
	entry: PATHS.entry,
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: PATHS.output,
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	}
};

var prodConfig = {};

var devConfig = {};

module.exports = function (env) {
	return env.NODE_ENV === 'production' ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var webpack = __webpack_require__(2);
var merge = __webpack_require__(3);

var commonConfig = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'env']
			}
		}]
	}
};

var prodConfig = {
	plugins: [new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	})]
};

var devConfig = {
	devtool: 'cheap-source-map',
	plugins: [new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"development"'
		}
	})]
};

module.exports = function (env) {
	var envConfig = env.NODE_ENV === 'production' ? prodConfig : devConfig;

	return function (factory) {
		return merge(commonConfig, envConfig, factory(env));
	};
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map