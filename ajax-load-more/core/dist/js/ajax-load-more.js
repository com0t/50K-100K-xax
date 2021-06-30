var ajaxloadmore =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./core/src/js/ajax-load-more.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/src/js/addons/cache.js":
/*!*************************************!*\
  !*** ./core/src/js/addons/cache.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createCacheFile = createCacheFile;
exports.wooCache = wooCache;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * createCacheFile
 * Create a single post cache file
 *
 * @param {Object} alm
 * @param {String} content
 * @param {String} type
 * @since 5.3.1
 */
function createCacheFile(alm, content) {
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'standard';

	if (alm.addons.cache !== 'true' || !content || content === '') {
		return false;
	}

	var name = type === 'single' ? alm.addons.single_post_id : 'page-' + (alm.page + 1);

	var formData = new FormData();
	formData.append('action', 'alm_cache_from_html');
	formData.append('security', alm_localize.alm_nonce);
	formData.append('cache_id', alm.addons.cache_id);
	formData.append('cache_logged_in', alm.addons.cache_logged_in);
	formData.append('canonical_url', alm.canonical_url);
	formData.append('name', name);
	formData.append('html', content.trim());

	_axios2.default.post(alm_localize.ajaxurl, formData).then(function (response) {
		console.log('Cache created for: ' + alm.canonical_url);
	});
}

/**
 * wooCache
 * Create a WooCommerce cache file
 *
 * @param {Object} alm
 * @param {String} content
 * @since 5.3.1
 */
function wooCache(alm, content) {
	if (alm.addons.cache !== 'true' || !content || content === '') {
		return false;
	}

	var formData = new FormData();
	formData.append('action', 'alm_cache_from_html');
	formData.append('security', alm_localize.alm_nonce);
	formData.append('cache_id', alm.addons.cache_id);
	formData.append('cache_logged_in', alm.addons.cache_logged_in);
	formData.append('canonical_url', alm.canonical_url);
	formData.append('name', 'page-' + alm.page);
	formData.append('html', content.trim());

	_axios2.default.post(alm_localize.ajaxurl, formData).then(function (response) {
		console.log('Cache created for post: ' + alm.canonical_url);
		//console.log(response);
	});
}

/***/ }),

/***/ "./core/src/js/addons/elementor.js":
/*!*****************************************!*\
  !*** ./core/src/js/addons/elementor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.elementorInit = elementorInit;
exports.elementor = elementor;
exports.elementorGetContent = elementorGetContent;
exports.elementorCreateParams = elementorCreateParams;

var _loadItems = __webpack_require__(/*! ../modules/loadItems */ "./core/src/js/modules/loadItems.js");

var _loadItems2 = _interopRequireDefault(_loadItems);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
	return function () {
		var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
			function step(key, arg) {
				try {
					var info = gen[key](arg);var value = info.value;
				} catch (error) {
					reject(error);return;
				}if (info.done) {
					resolve(value);
				} else {
					return Promise.resolve(value).then(function (value) {
						step("next", value);
					}, function (err) {
						step("throw", err);
					});
				}
			}return step("next");
		});
	};
}

/**
 * Set up the instance on Elementor
 *
 * @param {object} alm
 * @since 5.3.0
 */

function elementorInit(alm) {
	if (!alm.addons.elementor || !alm.addons.elementor_type || !alm.addons.elementor_type === 'posts') {
		return false;
	}
	var target = alm.addons.elementor_element;

	if (target) {
		// Set button data attributes
		alm.button.dataset.page = alm.addons.elementor_paged;

		// Set button URL
		var nextPage = alm.addons.elementor_next_page_url;
		alm.button.dataset.url = nextPage ? nextPage : '';

		// Set a11y attributes
		target.setAttribute('aria-live', 'polite');
		target.setAttribute('aria-atomic', 'true');

		alm.listing.removeAttribute('aria-live');
		alm.listing.removeAttribute('aria-atomic');

		// Set data atts on 1st grid item
		var item = target.querySelector('.' + alm.addons.elementor_item_class); // Get first `.product` item
		if (item) {
			item.classList.add('alm-elementor');
			item.dataset.url = window.location;
			item.dataset.page = alm.addons.elementor_paged;
			item.dataset.pageTitle = document.title;
		}

		if (alm.addons.elementor_paged > 1) {}
		// maybe soon
		//almElementorResultsTextInit(alm);


		// Masonry Window Resize. Delay for masonry to be added via Elementor.
		if (alm.addons.elementor_masonry) {
			var resizeTimeout = void 0;
			setTimeout(function () {
				window.addEventListener('resize', function () {
					clearTimeout(resizeTimeout);
					resizeTimeout = setTimeout(function () {
						positionMasonryItems(alm, '.' + alm.addons.elementor_container_class, '.' + alm.addons.elementor_item_class);
					}, 100);
				});
			}, 250);
		}
	}
}

/**
 * Core ALM Elementor loader.
 *
 * @param {HTMLElement} content
 * @param {object} alm
 * @param {String} pageTitle
 * @since 5.3.0
 */

function elementor(content, alm) {
	var pageTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.title;

	if (!content || !alm) {
		return false;
	}

	return new Promise(function (resolve) {
		var container = alm.addons.elementor_element.querySelector('.' + alm.addons.elementor_container_class); // Get post container
		var items = content.querySelectorAll('.' + alm.addons.elementor_item_class); // Get all items in container
		var url = alm.addons.elementor_current_url; // Current Page URL

		if (container && items && url) {
			// Convert NodeList to Array
			items = Array.prototype.slice.call(items);

			// Load the items
			_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _loadItems2.default)(container, items, alm, pageTitle, url, 'alm-elementor');

							case 2:
								if (alm.addons.elementor_masonry) {
									setTimeout(function () {
										positionMasonryItems(alm, '.' + alm.addons.elementor_container_class, '.' + alm.addons.elementor_item_class);
									}, 125);
								}

								resolve(true);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}))().catch(function (e) {
				console.log(e, 'There was an error with Elementor');
			});
		} else {
			resolve(false);
		}
	});
}

/**
 * Get the content, title and results text from the Ajax response.
 *
 * @param {*} response
 * @param {object} alm
 * @since 5.4.0
 */
function elementorGetContent(response, alm) {
	var data = {
		html: '',
		meta: {
			postcount: 1,
			totalposts: alm.localize.total_posts,
			debug: 'Elementor Query'
		}
	};
	if (response.status === 200 && response.data) {
		var div = document.createElement('div');
		div.innerHTML = response.data;

		// Get Page Title
		var title = div.querySelector('title').innerHTML;
		data.pageTitle = title;

		// Get Elementor Items HTML
		var items = div.querySelector(alm.addons.elementor_target + ' .' + alm.addons.elementor_container_class);
		data.html = items ? items.innerHTML : '';

		// Set Page URL Params
		alm.addons.elementor_current_url = alm.addons.elementor_next_page_url; // Set current to previous page URL
		alm.addons.elementor_next_page_url = elementorGetNextPage(div, alm.addons.elementor_pagination_class);

		// Results Text
		//almElementorResultsText(div, alm);
	}

	return data;
}

/**
 * Create Elementor Params for ALM.
 *
 * @param Object alm
 * @return alm
 */
function elementorCreateParams(alm) {
	// Get Settings
	alm.addons.elementor_type = 'posts';
	alm.addons.elementor_settings = JSON.parse(alm.listing.dataset.elementorSettings);

	// Parse Container Settings
	alm.addons.elementor_target = alm.addons.elementor_settings.target;
	alm.addons.elementor_element = alm.addons.elementor_settings.target ? document.querySelector('.elementor-widget-wrap ' + alm.addons.elementor_settings.target) : '';
	alm.addons.elementor_widget = elementorGetWidgetType(alm.addons.elementor_element);

	// Masonry
	alm = setElementorClasses(alm, alm.addons.elementor_widget);

	// Pagination Element
	alm.addons.elementor_pagination = alm.addons.elementor_element.querySelector(alm.addons.elementor_pagination_class) || alm.addons.elementor_element.querySelector('.' + alm.addons.elementor_settings.pagination_class);
	alm.addons.elementor_pagination = alm.addons.elementor_pagination ? alm.addons.elementor_pagination : false;

	alm.addons.elementor_controls = alm.addons.elementor_settings.controls;
	alm.addons.elementor_controls = alm.addons.elementor_controls === 'true' ? true : false;
	alm.addons.elementor_scrolltop = parseInt(alm.addons.elementor_settings.scrolltop);

	// Set Page & URL params
	alm.addons.elementor_current_url = window.location.href;
	alm.addons.elementor_next_page_url = elementorGetNextUrl(alm.addons.elementor_pagination);
	alm.addons.elementor_paged = alm.addons.elementor_settings.paged ? parseInt(alm.addons.elementor_settings.paged) : 1;
	alm.page = parseInt(alm.page) + alm.addons.elementor_paged;

	// Masonry
	alm = parseMasonryConfig(alm);

	if (!alm.addons.elementor_element) {
		console.warn("Ajax Load More: Unable to locate Elementor Widget. Are you sure you've set up your target parameter correctly?");
	}
	if (!alm.addons.elementor_pagination) {
		console.warn('Ajax Load More: Unable to locate Elementor pagination. There are either no results or p Ajax Load More is unable to locate the pagination widget?');
	}
	return alm;
}

/**
 * Set the required classnames for parsing data and injecting content into the Elementor listing
 *
 * @param {*} alm
 * @param {*} type
 */
function setElementorClasses(alm) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'posts';

	// Container Class
	alm.addons.elementor_container_class = type === 'woocommerce' ? alm.addons.elementor_settings.woo_container_class : alm.addons.elementor_settings.posts_container_class;

	// Item Class
	alm.addons.elementor_item_class = type === 'woocommerce' ? alm.addons.elementor_settings.woo_item_class : alm.addons.elementor_settings.posts_item_class;

	// Pagination Class
	alm.addons.elementor_pagination_class = type === 'woocommerce' ? '.' + alm.addons.elementor_settings.woo_pagination_class : '.' + alm.addons.elementor_settings.posts_pagination_class;

	return alm;
}

/**
 * Parse Masonry Settings from Elementor Data atts
 *
 * @param {*} alm
 */
function parseMasonryConfig(alm) {
	if (!alm.addons.elementor_element) {
		return alm; // Exit if not found.
	}

	var target = alm.addons.elementor_element;

	var settings = target.dataset.settings ? JSON.parse(target.dataset.settings) : '';
	if (!settings) {
		return alm; // Exit if not found.
	}

	alm.addons.elementor_masonry = settings.hasOwnProperty('cards_masonry') || settings.hasOwnProperty('classic_masonry');
	if (alm.addons.elementor_masonry) {
		alm.addons.elementor_masonry_columns = parseInt(settings.cards_columns) || parseInt(settings.classic_columns);
		alm.addons.elementor_masonry_columns_mobile = parseInt(settings.cards_columns_mobile) || parseInt(settings.classic_columns_mobile);
		alm.addons.elementor_masonry_columns_tablet = parseInt(settings.cards_columns_tablet) || parseInt(settings.classic_columns_tablet);
		alm.addons.elementor_masonry_gap = parseInt(settings.cards_row_gap.size);
	}

	return alm;
}

/**
 * Position Elementor Masonry Items
 *
 * @param {*} alm
 * @param {*} container_class
 * @param {*} item_class
 */
function positionMasonryItems(alm, container_class, item_class) {
	var heights = [];

	// Get Elementor Settings
	var columnsCount = alm.addons.elementor_masonry_columns;
	var columnsCountTablet = alm.addons.elementor_masonry_columns_tablet;
	var columnsCountMobile = alm.addons.elementor_masonry_columns_mobile;
	var verticalSpaceBetween = alm.addons.elementor_masonry_gap;
	var columns = columnsCount;

	// Get Elementor Breakpoints
	var breakpoints = window.elementorFrontendConfig && window.elementorFrontendConfig.breakpoints ? window.elementorFrontendConfig.breakpoints : 0;
	var windowW = window.innerWidth;

	// Set Columns
	if (windowW > breakpoints.lg) {
		columns = columnsCount;
	} else if (windowW > breakpoints.md) {
		columns = columnsCountTablet;
	} else {
		columns = columnsCountMobile;
	}

	// Get Containers
	var container = document.querySelector(container_class);
	if (!container) {
		return false;
	}
	var items = container.querySelectorAll(item_class);
	if (!items) {
		return false;
	}

	// Loop items
	items.forEach(function (item, index) {
		var row = Math.floor(index / columns);
		var itemHeight = item.getBoundingClientRect().height + verticalSpaceBetween;

		if (row) {
			var itemPosition = jQuery(item).position();
			var indexAtRow = index % columns;
			var pullHeight = Math.round(itemPosition.top) - heights[indexAtRow];

			pullHeight *= -1;
			item.style.marginTop = Math.round(pullHeight) + 'px';
			heights[indexAtRow] += itemHeight;
		} else {
			heights.push(itemHeight);
		}
	});
}

/**
 * Determine the type of elementor widget (woocommerce || posts)
 *
 * @param {*} target
 * @param {*} classname
 */
function elementorGetWidgetType(target) {
	if (!target) {
		return false;
	}
	// If container contains the woocommerce elementor class
	var type = target.classList.contains('elementor-wc-products') ? 'woocommerce' : 'posts';
	return type;
}

/**
 * Get the upcoming URL from the a.next link from the HTML
 *
 * @param {HTMLElement} element
 * @param {String} classname
 * @return {string} href
 */
function elementorGetNextPage(element, classname) {
	var pagination = element.querySelector(classname);
	var href = pagination ? elementorGetNextUrl(pagination) : '';

	return href;
}

/**
 * Get the URL of the next page to load from the a.next href
 *
 * @param {HTMLElement} element
 * @return {String} url
 */
function elementorGetNextUrl(element) {
	if (!element) {
		return '';
	}
	return element.querySelector('a.next') ? element.querySelector('a.next').href : '';
}

/***/ }),

/***/ "./core/src/js/addons/filters.js":
/*!***************************************!*\
  !*** ./core/src/js/addons/filters.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parseQuerystring = parseQuerystring;
exports.buildFilterURL = buildFilterURL;
exports.createMasonryFiltersPage = createMasonryFiltersPage;
exports.createMasonryFiltersPages = createMasonryFiltersPages;

var _getQueryVariable = __webpack_require__(/*! ../helpers/getQueryVariable */ "./core/src/js/helpers/getQueryVariable.js");

var _getQueryVariable2 = _interopRequireDefault(_getQueryVariable);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var FILTERS_CLASSNAME = 'alm-filters';

/**
 * parseQuerystring
 * Parse a filter querystring for returning caches directories
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
function parseQuerystring(path) {
	// Get querystring
	var query = window.location.search.substring(1);
	var obj = '';
	var cache_dir = '';

	// Parse querystring into object
	if (query) {
		obj = JSON.parse('{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
			// Replace + with - in URL
			return key === '' ? value : decodeURIComponent(value.replace(/\+/g, '-'));
		});

		// Remove the following properties from the object as they should not be included in the cache ID

		if (obj.pg) {
			// `pg` object prop
			delete obj.pg;
		}

		if (obj.auto) {
			// `auto` object prop
			delete obj.auto;
		}
	}

	if (obj) {
		cache_dir += '/';
		Object.keys(obj).forEach(function (key, index) {
			cache_dir += index > 0 ? '--' : '';
			cache_dir += key + '--' + obj[key];
		});
	}

	return path + cache_dir;
}

/**
 * Build new paging URL for filters
 *
 * @param {Object} alm
 * @param {String} querystring
 * @param {Int} page
 * @since 5.3.5
 */
function buildFilterURL(alm) {
	var querystring = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	var qs = querystring;

	if (alm.addons.filters_paging) {
		if (page > 1) {
			// Paged
			if (qs) {
				// If already has `pg` in querystring
				if ((0, _getQueryVariable2.default)('pg')) {
					qs = querystring.replace(/(pg=)[^\&]+/, '$1' + page);
				} else {
					qs = querystring + '&pg=' + page;
				}
			} else {
				qs = '?pg=' + page;
			}
		} else {
			// Not Paged
			qs = querystring.replace(/(pg=)[^\&]+/, '');
			qs = qs === '?' ? '' : qs; // Remove `?` if only symbol in querystring
			qs = qs[qs.length - 1] === '&' ? qs.slice(0, -1) : qs; // Remove trailing `&` symbols
		}
	}

	return qs;
}

/**
 * Create data attributes for Filters paged results
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
function createMasonryFiltersPage(alm, element) {
	if (!alm.addons.filters) {
		return element;
	}

	var querystring = window.location.search;
	var page = alm.page + 1;
	page = alm.addons.preloaded === 'true' ? page + 1 : page;
	element = masonryFiltersAtts(alm, element, querystring, page);

	return element;
}

/**
 * Create data attributes for Filters - used when ?pg=2, ?pg=3 etc are hit on page load
 *
 * @param {Object} alm
 * @param {Array} elements
 * @since 5.3.1
 */
function createMasonryFiltersPages(alm, elements) {
	if (!alm.addons.filters) {
		return elements;
	}

	var pagenum = 1;
	var page = alm.page;
	var querystring = window.location.search;

	if (alm.addons.filters_startpage > 1) {
		// Create pages
		var posts_per_page = parseInt(alm.posts_per_page);
		var return_data = [];

		// Slice data array into individual pages
		for (var i = 0; i < elements.length; i += posts_per_page) {
			return_data.push(elements.slice(i, posts_per_page + i));
		}

		// Loop new data array
		for (var k = 0; k < return_data.length; k++) {
			var target = k > 0 ? k * posts_per_page : 0;
			pagenum = k + 1;

			if (elements[target]) {
				elements[target] = masonryFiltersAtts(alm, elements[target], querystring, pagenum);
			}
		}
	} else {
		pagenum = page;
		if (elements && elements[0]) {
			elements[0] = masonryFiltersAtts(alm, elements[0], querystring, pagenum);
		}
	}

	return elements;
}

// Create the attributes (page, url, classes)  for the masonry items
function masonryFiltersAtts(alm, element, querystring, pagenum) {
	element.classList.add(FILTERS_CLASSNAME);
	element.dataset.page = pagenum;
	if (pagenum > 1) {
		element.dataset.url = alm.canonical_url + buildFilterURL(alm, querystring, pagenum);
	} else {
		var updatedQS = querystring.replace(/(pg=)[^\&]+/, ''); // Remove `pg` from querysting
		updatedQS = updatedQS === '?' ? '' : updatedQS; // Remove empty querysting

		element.dataset.url = alm.canonical_url + updatedQS;
	}

	return element;
}

/***/ }),

/***/ "./core/src/js/addons/seo.js":
/*!***********************************!*\
  !*** ./core/src/js/addons/seo.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createMasonrySEOPage = createMasonrySEOPage;
exports.createMasonrySEOPages = createMasonrySEOPages;
exports.createSEOAttributes = createSEOAttributes;
/**
 * createMasonrySEOPage
 * Create data attributes for SEO paged results
 *
 * @param {object} alm
 * @param {array} elements
 * @since 5.3.1
 */
function createMasonrySEOPage(alm, element) {
	if (!alm.addons.seo) {
		return element;
	}

	var querystring = window.location.search;
	var seo_class = 'alm-seo';
	var page = alm.page + 1;
	page = alm.addons.preloaded === 'true' ? page + 1 : page;
	element = masonrySEOAtts(alm, element, querystring, seo_class, page);

	return element;
}

/**
 * createMasonrySEOPages
 * Create data attributes for SEO -  used when /page/2/, /page/3/ etc are hit on page load
 *
 * @param {object} alm
 * @param {array} elements
 * @since 5.3.1
 */
function createMasonrySEOPages(alm, elements) {
	if (!alm.addons.seo) {
		return elements;
	}

	var pagenum = 1;
	var page = alm.page;
	var seo_class = 'alm-seo';
	var querystring = window.location.search;

	if (alm.start_page > 1) {
		// Create pages
		var posts_per_page = parseInt(alm.posts_per_page);
		var return_data = [];

		// Slice data array into individual pages
		for (var i = 0; i < elements.length; i += posts_per_page) {
			return_data.push(elements.slice(i, posts_per_page + i));
		}

		// Loop new data array
		for (var k = 0; k < return_data.length; k++) {
			var target = k > 0 ? k * posts_per_page : 0;
			pagenum = k + 1;
			if (elements[target]) {
				elements[target] = masonrySEOAtts(alm, elements[target], querystring, seo_class, pagenum);
			}
		}
	} else {
		pagenum = page;
		elements[0] = masonrySEOAtts(alm, elements[0], querystring, seo_class, pagenum);
	}

	return elements;
}

/**
 * Create the attributes (page, url, classes) for the masonry items.
 *
 * @param {object} alm
 * @param {object} element
 * @param {string} querystring
 * @param {string} seo_class
 * @param {int} pagenum
 * @returns
 */
function masonrySEOAtts(alm, element, querystring, seo_class, pagenum) {
	element.classList.add(seo_class);
	element.dataset.page = pagenum;

	if (alm.addons.seo_permalink === 'default') {
		// Default Permalinks
		if (pagenum > 1) {
			element.dataset.url = alm.canonical_url + querystring + '&paged=' + pagenum;
		} else {
			element.dataset.url = alm.canonical_url + querystring;
		}
	} else {
		// Pretty Permalinks
		if (pagenum > 1) {
			element.dataset.url = alm.canonical_url + alm.addons.seo_leading_slash + 'page/' + pagenum + alm.addons.seo_trailing_slash + querystring;
		} else {
			element.dataset.url = alm.canonical_url + querystring;
		}
	}

	return element;
}

/**
 * Create data attributes for SEO -  used when /page/2/, /page/3/ etc are hit on page load.
 *
 * @param {object} alm
 * @param {array} elements
 *
 * @since 5.3.1
 */
function createSEOAttributes(alm, element, querystring, seo_class, pagenum) {
	element.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
	element.dataset.page = pagenum;

	if (alm.addons.seo_permalink === 'default') {
		// Default Permalinks
		element.dataset.url = pagenum > 1 ? alm.canonical_url + querystring + '&paged=' + pagenum : alm.canonical_url + querystring;
	} else {
		// Pretty Permalinks
		element.dataset.url = pagenum > 1 ? alm.canonical_url + alm.addons.seo_leading_slash + 'page/' + pagenum + alm.addons.seo_trailing_slash + querystring : alm.canonical_url + querystring;
	}

	return element;
}

/***/ }),

/***/ "./core/src/js/addons/singleposts.js":
/*!*******************************************!*\
  !*** ./core/src/js/addons/singleposts.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.singlePostHTML = singlePostHTML;
/**
 * Create the HTML for loading Single Posts.
 *
 * @param {Object} response Query response
 * @param {HTMLElement} target The target div
 * @since 5.1.8.1
 */
function singlePostHTML(response) {
	var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var data = {
		html: '',
		meta: {
			postcount: 1,
			totalposts: 1,
			debug: 'Single Posts Query'
		}
	};

	if (response.status === 200 && response.data && target) {
		// Create temp div to hold Ajax response data.
		var div = document.createElement('div');
		div.innerHTML = response.data;

		// Get target element.
		var html = div.querySelector(target);

		// Get any custom target elements.
		var customElements = window && window.almSinglePostsCustomElements;
		if (customElements) {
			html.appendChild(singlePostsGetCustomElements(div, customElements));
		}

		if (html) {
			data.html = html.innerHTML;
		} else {
			console.warn('Ajax Load More: Unable to find ' + target + ' element.');
		}
	}
	return data;
}
exports.default = singlePostHTML;

/**
 * Collect custom target elements and append them to the returned HTML.
 *
 * This function is useful to get elements from outside the ALM target and bring them into the returned HTML.
 * Useful for when CSS or JS may be loaded in the <head/> and we need it brought into the HTML for Single Posts.
 *
 * e.g. window.almSinglePostsCustomElements = ['#woocommerce-inline-inline-css', '#wc-block-style-css'];
 *
 * @param {object} content The HTML element.
 * @param {array|string} customElements The elements to search for in content.
 * @return {object} HTML elements.
 */

function singlePostsGetCustomElements() {
	var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var customElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	// Create container element to hold elements.
	var container = document.createElement('div');
	container.classList.add('alm-custom-elements');

	// Exit if empty.
	if (!content || !customElements) {
		return container;
	}

	// Convert customElements to an Array.
	customElements = !Array.isArray(customElements) ? [customElements] : customElements;

	// Loop Array to extract elements and append to container.
	for (var i = 0; i < customElements.length; i++) {
		var element = content.querySelector(customElements[i]);
		if (element) {
			container.appendChild(element);
		}
	}

	return container;
}

/***/ }),

/***/ "./core/src/js/addons/woocommerce.js":
/*!*******************************************!*\
  !*** ./core/src/js/addons/woocommerce.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.wooInit = wooInit;
exports.woocommerce = woocommerce;
exports.wooReset = wooReset;
exports.wooGetContent = wooGetContent;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _loadItems = __webpack_require__(/*! ../modules/loadItems */ "./core/src/js/modules/loadItems.js");

var _loadItems2 = _interopRequireDefault(_loadItems);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
	return function () {
		var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
			function step(key, arg) {
				try {
					var info = gen[key](arg);var value = info.value;
				} catch (error) {
					reject(error);return;
				}if (info.done) {
					resolve(value);
				} else {
					return Promise.resolve(value).then(function (value) {
						step("next", value);
					}, function (err) {
						step("throw", err);
					});
				}
			}return step("next");
		});
	};
}

/**
 * Set up the instance of ALM WooCommerce
 *
 * @param {object} alm
 * @since 5.3.0
 */
function wooInit(alm) {
	if (!alm || !alm.addons.woocommerce) {
		return false;
	}

	alm.button.dataset.page = alm.addons.woocommerce_settings.paged + 1; // Page

	// URL
	var nextPage = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged];
	if (nextPage) {
		alm.button.dataset.url = nextPage;
	} else {
		alm.button.dataset.url = '';
	}

	// Set up URL and class parameters on first item in product listing
	var container = document.querySelector(alm.addons.woocommerce_settings.container); // Get `ul.products`
	if (container) {
		var count = getContainerCount(alm.addons.woocommerce_settings.container);

		if (count > 1) {
			// Display warning if multiple containers were found.
			console.warn('ALM WooCommerce: Multiple containers with the same classname or ID found. The WooCommerce add-on requires a single container to be defined. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/');
		}

		container.setAttribute('aria-live', 'polite');
		container.setAttribute('aria-atomic', 'true');

		alm.listing.removeAttribute('aria-live');
		alm.listing.removeAttribute('aria-atomic');

		var products = container.querySelector(alm.addons.woocommerce_settings.products); // Get first `.product` item
		if (products) {
			products.classList.add('alm-woocommerce');
			products.dataset.url = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged - 1];
			products.dataset.page = alm.page;
			products.dataset.pageTitle = document.title;
		} else {
			console.warn('ALM WooCommerce: Unable to locate products. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_products');
		}

		if (alm.addons.woocommerce_settings.paged > 1) {
			almWooCommerceResultsTextInit(alm);
		}
	} else {
		console.warn('ALM WooCommerce: Unable to locate container element. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_container');
	}
}

/**
 * Core ALM WooCommerce product loader
 *
 * @param {HTMLElement} content
 * @param {object} alm
 * @param {String} pageTitle
 * @since 5.3.0
 */

function woocommerce(content, alm) {
	var pageTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.title;

	if (!content || !alm) {
		return false;
	}

	return new Promise(function (resolve) {
		var container = document.querySelector(alm.addons.woocommerce_settings.container); // Get `ul.products`
		var products = content.querySelectorAll(alm.addons.woocommerce_settings.products); // Get all `.products`
		var url = alm.addons.woocommerce_settings.paged_urls[alm.page];

		if (container && products && url) {
			// Convert NodeList to Array
			products = Array.prototype.slice.call(products);

			// Load the Products
			_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return (0, _loadItems2.default)(container, products, alm, pageTitle, url, 'alm-woocommerce');

							case 2:
								resolve(true);

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}))().catch(function (e) {
				console.log(e, 'There was an error with WooCommerce');
			});
		}
	});
}

/**
 * Reset a WooCommerce Instance by hitting the updated site URL
 *
 * @since 5.3.8
 */
function wooReset() {
	return new Promise(function (resolve) {
		var url = window.location;
		_axios2.default.get(url).then(function (response) {
			if (response.status === 200 && response.data) {
				var div = document.createElement('div');
				div.innerHTML = response.data; // Add data to div

				var alm = div.querySelector('.ajax-load-more-wrap .alm-listing[data-woo="true"]'); // Get ALM instance
				var settings = alm ? alm.dataset.wooSettings : ''; // Get settings data
				resolve(settings);
			} else {
				resolve(false);
			}
		}).catch(function (error) {
			resolve(false);
		});
	});
}

/**
 * Get the content, title and results text from the Ajax response
 *
 * @param {object} alm
 * @since 5.3.0
 */
function wooGetContent(response, alm) {
	var data = {
		html: '',
		meta: {
			postcount: 1,
			totalposts: alm.localize.total_posts,
			debug: 'WooCommerce Query'
		}
	};
	if (response.status === 200 && response.data) {
		var div = document.createElement('div');
		div.innerHTML = response.data;

		// Get Page Title
		var title = div.querySelector('title').innerHTML;
		data.pageTitle = title;

		// Get Products HTML
		var products = div.querySelector(alm.addons.woocommerce_settings.container);
		data.html = products ? products.innerHTML : '';

		// Results Text
		almWooCommerceResultsText(div, alm);
	}

	return data;
}

/**
 *  Set results text for WooCommerce Add-on.
 *
 *  @param {HTMLElement} target
 *  @param {Object} alm
 *  @since 5.3
 */
function almWooCommerceResultsText() {
	var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var alm = arguments[1];

	if (target && alm && alm.addons.woocommerce_settings.results_text) {
		var currentResults = target.querySelector(alm.addons.woocommerce_settings.results);
		var link = alm.addons.woocommerce_settings.settings.previous_page_link;
		var label = alm.addons.woocommerce_settings.settings.previous_page_label;
		var sep = alm.addons.woocommerce_settings.settings.previous_page_sep;

		if (alm.addons.woocommerce_settings.results_text) {
			alm.addons.woocommerce_settings.results_text.forEach(function (element) {
				if (link && label) {
					element.innerHTML = returnButton(currentResults, link, label, sep);
				} else {
					element.innerHTML = currentResults.innerHTML;
				}
			});
		}
	}
}

/**
 *  Initiate Results text.
 *
 *  @param {Object} alm
 *  @since 5.3
 */
function almWooCommerceResultsTextInit(alm) {
	if (alm && alm.addons.woocommerce_settings.results_text) {
		var results = document.querySelectorAll(alm.addons.woocommerce_settings.results);
		if (results.length < 1) {
			return false;
		}
		var link = alm.addons.woocommerce_settings.settings.previous_page_link;
		var label = alm.addons.woocommerce_settings.settings.previous_page_label;
		var sep = alm.addons.woocommerce_settings.settings.previous_page_sep;
		// Loop all result text elements
		results.forEach(function (element) {
			if (link && label) {
				element.innerHTML = returnButton(element, link, label, sep);
			}
		});
	}
}

/**
 * Create button text for returning to the first page
 *
 * @param {*} text
 * @param {*} link
 * @param {*} label
 * @param {*} seperator
 */
function returnButton(text, link, label, seperator) {
	var button = ' ' + seperator + ' <a href="' + link + '">' + label + '</a>';
	return text.innerHTML + button;
}

/**
 * Get total count of WooCommerce containers
 *
 * @param {*} container
 */
function getContainerCount(container) {
	if (!container) {
		return 0;
	}
	var containers = document.querySelectorAll(container); // Get all containers.
	if (containers) {
		return containers.length;
	} else {
		return 0;
	}
}

/***/ }),

/***/ "./core/src/js/ajax-load-more.js":
/*!***************************************!*\
  !*** ./core/src/js/ajax-load-more.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.render = exports.getOffset = exports.almScroll = exports.start = exports.tracking = exports.tab = exports.reset = exports.filter = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _smoothscrollPolyfill = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");

var _smoothscrollPolyfill2 = _interopRequireDefault(_smoothscrollPolyfill);

__webpack_require__(/*! ./helpers/helpers */ "./core/src/js/helpers/helpers.js");

var _getParameterByName = __webpack_require__(/*! ./helpers/getParameterByName */ "./core/src/js/helpers/getParameterByName.js");

var _getParameterByName2 = _interopRequireDefault(_getParameterByName);

var _almAppendChildren = __webpack_require__(/*! ./helpers/almAppendChildren */ "./core/src/js/helpers/almAppendChildren.js");

var _almAppendChildren2 = _interopRequireDefault(_almAppendChildren);

var _tableWrap = __webpack_require__(/*! ./helpers/tableWrap */ "./core/src/js/helpers/tableWrap.js");

var _tableWrap2 = _interopRequireDefault(_tableWrap);

var _getCacheUrl = __webpack_require__(/*! ./helpers/getCacheUrl */ "./core/src/js/helpers/getCacheUrl.js");

var _getCacheUrl2 = _interopRequireDefault(_getCacheUrl);

var _almDomParser = __webpack_require__(/*! ./helpers/almDomParser */ "./core/src/js/helpers/almDomParser.js");

var _almDomParser2 = _interopRequireDefault(_almDomParser);

var _stripEmptyNodes = __webpack_require__(/*! ./helpers/stripEmptyNodes */ "./core/src/js/helpers/stripEmptyNodes.js");

var _stripEmptyNodes2 = _interopRequireDefault(_stripEmptyNodes);

var _queryParams = __webpack_require__(/*! ./helpers/queryParams */ "./core/src/js/helpers/queryParams.js");

var queryParams = _interopRequireWildcard(_queryParams);

var _resultsText = __webpack_require__(/*! ./modules/resultsText */ "./core/src/js/modules/resultsText.js");

var resultsText = _interopRequireWildcard(_resultsText);

var _tableofcontents = __webpack_require__(/*! ./modules/tableofcontents */ "./core/src/js/modules/tableofcontents.js");

var _setLocalizedVars = __webpack_require__(/*! ./modules/setLocalizedVars */ "./core/src/js/modules/setLocalizedVars.js");

var _setLocalizedVars2 = _interopRequireDefault(_setLocalizedVars);

var _insertScript = __webpack_require__(/*! ./modules/insertScript */ "./core/src/js/modules/insertScript.js");

var _insertScript2 = _interopRequireDefault(_insertScript);

var _setFocus = __webpack_require__(/*! ./modules/setFocus */ "./core/src/js/modules/setFocus.js");

var _setFocus2 = _interopRequireDefault(_setFocus);

var _getButtonURL = __webpack_require__(/*! ./modules/getButtonURL */ "./core/src/js/modules/getButtonURL.js");

var _getButtonURL2 = _interopRequireDefault(_getButtonURL);

var _masonry = __webpack_require__(/*! ./modules/masonry */ "./core/src/js/modules/masonry.js");

var _fadeIn = __webpack_require__(/*! ./modules/fadeIn */ "./core/src/js/modules/fadeIn.js");

var _fadeIn2 = _interopRequireDefault(_fadeIn);

var _fadeOut = __webpack_require__(/*! ./modules/fadeOut */ "./core/src/js/modules/fadeOut.js");

var _fadeOut2 = _interopRequireDefault(_fadeOut);

var _filtering = __webpack_require__(/*! ./modules/filtering */ "./core/src/js/modules/filtering.js");

var _filtering2 = _interopRequireDefault(_filtering);

var _noResults = __webpack_require__(/*! ./modules/noResults */ "./core/src/js/modules/noResults.js");

var _noResults2 = _interopRequireDefault(_noResults);

var _almDebug = __webpack_require__(/*! ./modules/almDebug */ "./core/src/js/modules/almDebug.js");

var _almDebug2 = _interopRequireDefault(_almDebug);

var _getScrollPercentage = __webpack_require__(/*! ./modules/getScrollPercentage */ "./core/src/js/modules/getScrollPercentage.js");

var _getScrollPercentage2 = _interopRequireDefault(_getScrollPercentage);

var _srcsetPolyfill = __webpack_require__(/*! ./helpers/srcsetPolyfill */ "./core/src/js/helpers/srcsetPolyfill.js");

var _srcsetPolyfill2 = _interopRequireDefault(_srcsetPolyfill);

var _placeholder = __webpack_require__(/*! ./modules/placeholder */ "./core/src/js/modules/placeholder.js");

var _lazyImages = __webpack_require__(/*! ./modules/lazyImages */ "./core/src/js/modules/lazyImages.js");

var _lazyImages2 = _interopRequireDefault(_lazyImages);

var _singleposts = __webpack_require__(/*! ./addons/singleposts */ "./core/src/js/addons/singleposts.js");

var _cache = __webpack_require__(/*! ./addons/cache */ "./core/src/js/addons/cache.js");

var _woocommerce = __webpack_require__(/*! ./addons/woocommerce */ "./core/src/js/addons/woocommerce.js");

var _elementor = __webpack_require__(/*! ./addons/elementor */ "./core/src/js/addons/elementor.js");

var _filters = __webpack_require__(/*! ./addons/filters */ "./core/src/js/addons/filters.js");

var _seo = __webpack_require__(/*! ./addons/seo */ "./core/src/js/addons/seo.js");

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}return arr2;
	} else {
		return Array.from(arr);
	}
}

function _asyncToGenerator(fn) {
	return function () {
		var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
			function step(key, arg) {
				try {
					var info = gen[key](arg);var value = info.value;
				} catch (error) {
					reject(error);return;
				}if (info.done) {
					resolve(value);
				} else {
					return Promise.resolve(value).then(function (value) {
						step("next", value);
					}, function (err) {
						step("throw", err);
					});
				}
			}return step("next");
		});
	};
}

/*
 * Ajax Load More
 * https://connekthq.com/plugins/ajax-load-more/
 * Author: Darren Cooney
 * Twitter: @KaptonKaos, @ajaxloadmore, @connekthq
 * Copyright Connekt Media - https://connekthq.com
 */

// Polyfills
__webpack_require__(/*! @babel/polyfill/noConflict */ "./node_modules/@babel/polyfill/noConflict.js");
__webpack_require__(/*! focus-options-polyfill */ "./node_modules/focus-options-polyfill/index.js");
__webpack_require__(/*! ./helpers/polyfills.js */ "./core/src/js/helpers/polyfills.js");

// External Modules
var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
var imagesLoaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");

_axios2.default.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Smooth scrolling polyfill
_smoothscrollPolyfill2.default.polyfill();

// ALM Modules

//import commentReplyFix from './helpers/commentReplyFix';


// Global filtering var
var alm_is_filtering = false;

// Start ALM
(function () {
	'use strict';

	/**
  * ajaxloadmore
  * Init Ajax Load More
  *
  * @param {*} el
  * @param {*} e
  */

	var ajaxloadmore = function ajaxloadmore(el, e) {
		// Move user to top of page to prevent loading of unnessasry posts
		if (alm_localize && alm_localize.scrolltop === 'true') {
			window.scrollTo(0, 0);
		}

		//Set ALM Variables
		var alm = this;
		alm.AjaxLoadMore = {};
		alm.addons = {};
		alm.extensions = {};
		alm.integration = {};
		alm.window = window;
		alm.page = 0;
		alm.posts = 0;
		alm.totalposts = 0;
		alm.proceed = false;
		alm.disable_ajax = false;
		alm.init = true;
		alm.loading = true;
		alm.finished = false;
		alm.timer = null;

		alm.ua = window.navigator.userAgent ? window.navigator.userAgent : ''; // Browser User Agent
		alm.vendor = window.navigator.vendor ? window.navigator.vendor : ''; // Browser Vendor
		alm.isSafari = /Safari/i.test(alm.ua) && /Apple Computer/.test(alm.vendor) && !/Mobi|Android/i.test(alm.ua);

		alm.master_id = el.dataset.id ? 'ajax-load-more-' + el.dataset.id : el.id; // The defined or generated ID of the ALM instance
		el.classList.add('alm-' + e); // Add unique classname
		el.setAttribute('data-alm-id', e); // Add unique data id

		// Get localized <script/> variables
		alm.master_id = alm.master_id.replace(/-/g, '_'); // Convert dashes to underscores for the var name
		alm.localize = window[alm.master_id + '_vars']; // Get localize vars

		// ALM Element Containers
		alm.main = el; // Top level DOM element
		alm.listing = el.querySelector('.alm-listing') || el.querySelector('.alm-comments');
		alm.content = alm.listing;
		alm.el = alm.content;
		alm.ajax = el.querySelector('.alm-ajax');
		alm.container_type = alm.listing.dataset.containerType;

		// Instance Params
		alm.canonical_url = el.dataset.canonicalUrl;
		alm.nested = el.dataset.nested ? el.dataset.nested : null;
		alm.is_search = el.dataset.search;
		alm.slug = el.dataset.slug;
		alm.post_id = el.dataset.postId;
		alm.id = el.dataset.id ? el.dataset.id : '';

		// No results template
		var alm_no_results = el.querySelector('.alm-no-results');
		alm.no_results = alm_no_results ? alm_no_results.innerHTML : '';

		// Shortcode Params
		alm.repeater = alm.listing.dataset.repeater; // Repeaters
		alm.theme_repeater = alm.listing.dataset.themeRepeater;

		alm.post_type = alm.listing.dataset.postType ? alm.listing.dataset.postType : 'post';
		alm.sticky_posts = alm.listing.dataset.stickyPosts ? alm.listing.dataset.stickyPosts : null;

		alm.btnWrap = el.querySelectorAll('.alm-btn-wrap'); // Get all `.alm-button-wrap` divs
		alm.btnWrap = Array.prototype.slice.call(alm.btnWrap); // Convert NodeList to array
		alm.btnWrap[alm.btnWrap.length - 1].style.visibility = 'visible'; // Get last element (used for nesting)
		alm.trigger = alm.btnWrap[alm.btnWrap.length - 1];
		alm.button = alm.trigger.querySelector('button.alm-load-more-btn');

		alm.button_label = alm.listing.dataset.buttonLabel;
		alm.button_loading_label = alm.listing.dataset.buttonLoadingLabel;
		alm.button_done_label = alm.listing.dataset.buttonDon_m-button-w = almataset.buttoet.be{
		retu-w = almataset.buttoet.be{
		retu-w = almat = aSbuttset.		allm.b'onDonrce.js":
/*!*********************tripEmptyfill();

/**************tripEmptyfill();

/**************trill();

/**********************.id require__(/*! @babel/pol*****.id require__(/*! @babe****l*****.i******'modulrill(, __webpack_require__) {

"use stre__(/*!y ALM
(funcObjectent loadiequi/*!y ALMl/index.js");
__webdieq(/*! loam.buttlm-seooo="true"] = _/*! dieq(/*! lm-sbutt="true"] = _/*!/*! dieq(/*! lm-sbutt="true"] = _/******t*!y ALM
(febpa'ext */ "y top of pailter dons = {}lm-sbutt="true"] = _/*(* @param {*}uire__(/*! u

var _axintent.quShortcode;
		}
	

	; // Gem-sb u

var Vtaset.dataset.stickyPolm.b'onDonrcet.be{
		uttonDon
		retuoeebpack_require__(/*! imag/*! n_m-button-wyer dons = {:ams
		Tq-)ype = tuoei	for (var i ams
		Tq-)ype m.timer = null;

		autton.alm-load-mxck_re
		var link = alm.addons hortcodr-mxctalm-load-mxck_re
	lts_text'ter0.setAkjwoocomTctalm[ng.replace(/('ter0.set1!y ALM
(febpa'extar _axt1!y A;

// ALM Modules

//import commentReplyFix from './helpers/commentReplyFix';


// Global filtering var
var alm {*}uir
		alm"ns = {}lm-sbuttdules
var qs =odul,g;
	ySelector('.ajax-load}lm-sbes
vair
		alm"ns = Ah, l;
		aloadIdules
var qs =odul,g;
	yS =odulull;

		ode;
		tonrts.almScroll 
	yS =odululquerySelector('.alm-no*m.theme_repea Gem-sb u

var Vtaset.dataset.stickyPolm.b'onDeta: {
	yS =dersPag// Get Pageon(aset.buts
va =odululquer/helpeuld not be included in the cache ID

		if (obj elemProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return n=dersPag/re__(/*! foca	}
		}newObj.defpeuld not be includedo		ubj, kl(/re_roperta_interopRequirey ALM
(dedo		ueext'ter0.setAkjwoocomTctalm[ng.replado		m)[ng.replado	viiu.defaultaloadIdd-mx/wl(conady has `p l;
	;


// ommerce:s ? afilterm,diables
		var /helm)tqs.lengthTit ict */ "./node_modules/@babel/polyfill/noConflict.js");
__wetings.container); // "./n[emeib/index.js"r_pageTwebpack_require__(/*! ./modules/fadeIn */ "./core/src/js/modules/fadeIn.js");

vIn */ "iostType ? alm.listing.data./core/src/js/moduless/modulesot.get(url).x.js"_page {
	retu0solve(set(/*! foca	}
		}ne
	;


// ommerce:s ? afilterm,drce(conten wfiltering);

var es fofy
	retu0solve(set(/*! fd them E = ******!*\
  !*** ./co es fofy
	retu0sose;

	// Create1ydules/se.replado	viiesModulefafilterm,diables
		var ;pe ? ald5hl' + e);lPolyfill;
__rm,diabl = alm.aald5hl' .id = el.doterByName)k < r.button_done****!*\
 +t (used for nesting),diabngthTit ict */ ").then(fu
		aloadIdules
filterm,divar _placeholder = __webpack_require__(r); // "./p/ults');
		&& arguments[TodululqueryObj[[Nlack_requir,Stseful fequedQS === '?' nonicnwhen ?pgYutt\					step("next", value);
				("next" kunction () {
	'use strMting.dataset.sti	step("e strMting.d"nextl(conady has `p l;
	r _s;
		} ;
		} ;
		retolve(set(`SEO paged resulet(`SEO  `.almm_rm,diabl -> // Con = do alm.lii^ -> I/ Con = do alm.uiltem.theme_repea Gem-sb u

vn = do alm.lii^alm.lii^ -// Con = do alm.lii^ -> I/ Con =url = nextPaalm.timer = nuode_modules/@babel/knts;m,divar _Sabel/kn alindow = window;

"upntsnonicalUrl;
		teropRkul.datase		try unique data id
ameterByName.js");
alm = td require__(/les/@babel/k!m
 * @param {St_wetingabel/k!m
 * @param {So = __webpack_require_oadIdulo = __webpack_require_oadIdulo = __webpack_require_oadIdulo[aset.sti	step(".buttond0L : '';

		// Results Text
		almWooCommerceResultsTe<*! lmxtPaalm.timer = nopRkul.sn	("nexten_m-butto	step("next", vaack_requir		almWooCommerceResultsTe<*! lmxtPaalm.timer = noen_m-butto es fofyen_m-/ ComerceResultsTe<*! lmxtPaalm.timer =m {ObjultsTe<*!  ./cl;
		alm.is_search = el.utto mWooCom {
	retu		alksh = des.tto (_lo	ste'<*! l* @since 5.3.0
 */

function woocpe.hasOwyl(, __webpreDefa*!y ALM
(	ste'<*! l* @since 5.3(bleofcontente.hasOwyl(,(	ste'<*lm.is_sence 5.3.0
ebpack_require__(/*! axios */ "./node nce 5.3.0
 */

function woocpe.hasOwyl(, __webpreDefa*!y ALM
(	ste'<*! l* @since 5.3( Conon

	// Exit if empt;

vaf (obj ddons/1o*! ./addons/seo */ "./core/src/js/addons/snce 5.3( "./core/src/js/addons/sn	retolvSEOPages
 * Create data attributes for SEO -  used when /pag(dntainer;i= noen_m-butto.eateMasonrySEOPage
 * Create data b.i.]ate data bles
wyl(,cons/1oI used when /ropRequireDes ALM

 * Createsed comTc
		retu-w =ons.i.Xgnu0,,s.iT l * Createsed comTc
		d for nestiment) {
			contt=ebhi.Xgnu0,,s.iT l * CreaC,s.iai00Create data b.iC,s) {
		// Create pages
		var posts_per_prototype.har*/
f0:t) 0
	// Exit if r); |) 0
	// E/seo */O/helpers/srcsetPolyfill.jsseo */O/hel				var isrcsetPolyfill.jx)0:t) 0
	// ExiOnopRkul. postequir		almWooCommerceResultsTe<*! lmxtPaalm.timer = noen_m-butto en  xePolyfen_m-butto en  xePolyfen_m-butto en  xePolyfen_m-butto en  xePolyfen_m-butto owser Use) 0
	// ExiOnopRkul. postequir		almWooCommerceResultsTe<*! lmxtPaalm.timer = noen_m-butto en  xePolyfen_m-butto en  xePolyfen_m-brceResultsTe<*!  {

"sultsT?/O/hel				var is
		retu-w =ons.i.Xgelpers/srcsetPolyfill.jsseo \r _getButtonen_m-butto en  xePolfutto= wlengthutto en  xePolfutto= */ "./cer =f/xePoly ALM
(fo= */ "./cer =f/xCi./cetto=re/xePoly ,var containly ,illR) ".s/1oI usess, pagewe__(oI uses.o=reTetPolyfill.jssea}lm.lagewe__(oI uses.o=reTetPolyfill.jsse?=reTet__w\
 +t (used for nesting),diabngthTit ict */ ").then(fu
		aloadIdules
fili
		}newObj.defptie.llyfen_m-butto en  xePlm.timer = noen_m-butsed for nest

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.wooInit = wooInit;
b\r _getB(fo= */ "./m) {
	elo			vd folts text s fofaset.daunderr almH	alm.trigger = aoduler = _/core/s)aunrn'.nor nesting),diabngthTit ict */ ").then( per@paiabngthTit ict */ ").ector('tents */ g),dialeading_slash + 'page/' + pagenum + pagenum + mTc
		retudig),denext elements
		ostcount: 1,
			totalpost

		alm.post_tdule", {ustcount: 1,
			touireDefauxePolydefptieWe nce 5.3.0
 */

function woocpe.ha=xt s fofaset.daunde.0
 @paiaboeWe nSpRkulr)atorRun");
ls fofastsCu;

		// / ").then( pefor 		alm.t s pages
	iaboeWeu0,,s.iT l * Createsed comTc
	hh
 @pnt: 1 {ustcount: 1,
		olyfill/diges
	iabr+(conady has `p l;
	r _s;
	i^alm.lii^ -// Con = do aldto= wlengthutto en  xePolfutto= */)ayomTc
	tetlii^ldersn = 'Td fsts ;;salmm_s `reate the HTM();
__webdilPolyfillbdilPolyfillbdilh
__webdilPolyfillbdding_s@pnt:	// Slice data array into individual pages
		for (var i = 0; i < elemen l pages
		for (var ng);

varipages
		for (var .UbM_..ger)dat:ful to 	for (var i = 0; i<)lts ? caboeWe i = 0; i < elemen lipages
		for (var .UbM_..gear i =LM Wo lipages
		for (var .UbM_. on woocpe.hao ics fo pages
		for (varWo lipages
		e? afilterm)ooocpe.hr i = 0; i < eler .UbM_. on woocpe.en  xePolyfen_m-brceResultsTe<*!  {

"sultsT?/O/hel				vopRkul. postequinerCount(container) {
	n_m-brceResots.createMasonryCount(containegesloaded/imagesloaaset.saclacefill.unt(cont)lts ? caboeWe i = 0 ;
			} els	// o1acefill.asonrySEOPage
 x+ '_var1{

"sgesl
		for (var .UbM_require__(/nfo.val-r .Ubdat:fommercont i < arr.lens;m,divar _Sabelosts belosts belots.crr: Darren Cooney
 * Twitter: @KaptobeWe i = 0; iill();var _plrceReSlosts bel _/*ly ALM
(fo= */ rceReSmr)dat:ful to 	for (var i = 0; i<)lts ? caboeWe i = 0; i < elemen li.slug;
		alm.post_nboeWe i = 0; i  arguments.len'tboeWebject} at  arg(var .UbM_.or (var i am.iC,s) {
		// Create pages
		var postonte__(oI use(_norue"] = _/*! dieq(/*! lm-sbutt="true"] = _/*!/*! dieq(/*! lm-sbutt="true"] = _/******t*!y ALM
(febpa'ext */ "y top of pailter dons = {}lm-sbutt="true"] = _/*(* @param {*}uire__(/*! u

var _axintent.quShortcode;
		}
	

	; // Gem-sb u

var Vtaset.dataset.stick Vtaset.datase @param ons/Createskunctionill/noConflict.js");
__webpanill/noConfliefe] = _
	var conta-:ain.eu"y tn wfiltering);

/ "./nodisting.deu"yons =ionill/nnegesloadeI fofase.aeeskunbt.qu&.ill.jsse?=redons = n._7ng);

/ "./nonady haLM WooCommerce: Unabl/*! dieq(/*! =redons = n._ Woo {
	n_dieq(//1dieq(/*! =redons = n.ard(obredons = nt.dataeiC,s) {
		tainer.classLidnt: j1bredons2 0; i <tB(fo=s = nt.daiC,snt.dataeiC,s) {
		tainer.classLidnt:ps),diwce:?=redons = n._7ng);

/ "./nonady haLMi- fo;

__webpack___webpane;

vao';
	var querystring = window.location.search;

	if (alm.s.les/imAguments.length > 0 && arguments[0] !& argume****shm-sbutt="s.les _Sabelostsdao/Createskunctionill/n
		tainer.classettings.paged_ia 
/ "./nonady haLM WooCr _axintent.quShortcode;
		.val-r s");

var _)eo */ "./core/src/js/addons/seo.js");

funhges
		for (varee data array into individual padieq(aram {eMasonryCption (e) {
			eSlosts (oCr _ata array into individual padieq(arapnnt.quShadieq(a has `dual padieq(arapnnt.quShadieq(a has `dualparam {d(_non el.daarapnnt.quShavar
var {d(_non e0s.js");

var res: @KaptobeWe i = 0; iill();var _plrdrense/src `te_pl iill();var for (var dules
dconta-:a..{d(_ycpe.h_(/*
var iles
dconta-:a..{dntt=ebhi.X(var duleda .UbM_. on woocpe.hvar sep = alm.addons.woocome-
mic'. on rense/src `te_ d(_non e0s.js")	// No results shm-sbutt="s.les _Sabelostsdao/WooCr _ax

_axios2.default.defaults.headers.common['X-Requested-With'] =  = trueadersbouireDefauxePolydefre/xprue
});
e = trueadersbour) {
geL,,d lydefre/xprue
});
e = /src/js/modules/fadeIn.js");

var _fadeIn2 = _interopRequireDefault(_fadeIn);

var _fadeOut = __webpack_require__(/*! ./modules/fadeOut */ "./core/src/js/modules/fadeOut.js");

var _fadeOut2 = _interopRequireDefauCreateskunctionault.dryCptionus);
/fadeOut eate pages
		var postonte__(oI use(_norrnta-cnorrnta-cnorrnta-cnorrnta-cnorrnta-cn:a..{d(rrntt eate pts shm-sbutt=ogeL,,d lydefre/xprue
});
e = /src/js/modules/fadeIn.js");

var _fadeIn2 = _interopRequireDefault(_fadeIn);

var _fadeOut = __webpack_require__(/*! ./modules/fadeOut */ "./core/src/js/modulet = __webpaeib/index.te, _/s;

	/r0/elemRequestepk_require__(/*! ./modu./modules ,b__(/*! ./modlize = window[alm.masteruestbica	}
		}tch (_context.prev = _context.next) {
							case 0:
				vRequest(/les/@bl.datastext  elcA,,d lydefre/xprue
});
e = /srwfiltering.prjaxloadnfre/xprue@param on)i 	for (vieq(a u/ "ycnfre/xprue@parotype.slports found */
/*iue@par.paraund */
/*iue@par0p]ePolfutto= wleng/*iue@par.paraund */
/*iue@par0p]ePolfutto= wlengoing;
	u)aPolfutto= wlengoing;
	on;
		_axiosdalm^ afi@par0araund */
}l Pn  xePoules/fadeOut */ "./core/src/js/modulet = __webpaeib/lm-sbutt="dconta-cF.com//modu= __ar0araodulet __webpaeib/lm-sbutt="dconta-cF.com//modu= __ar0araoolyfill2 = _t_require__(/ > 2dd-ip]ePolfutto= wleng/*iue@par.paraund *l.trs2s/@bl.datast2		vaor (var i = 0; .cl.dataf (alm.s.l2ibngthTi(l.dataf (alm.Get P> 2d s")'h > 0 && {
			eSlosts (oCr _ata array into ind_a
vaongthTMeSlostwyer dons = {:ams
		Tqrduleind_a
vaongthTMeSlostebpa'extar _axt1!mer =efault(_fadeIn);

var _fadeOut f?nest

Oegesloa ebpanestwyer hTi(l.dataf (alm.Get P
ult(_fadeIn);

var _f0ject.de="true"] = _/*!/*! dieq(/*! l P
ult(_fadeIbpanestwyerTyCount(condied_ia 
/Ti(l.dataf (alm.Get P
ult(_fadeIn);

var CtwyerTyCount(cs);
/fadeOut eate pa(t P
ult(#alm_woob _fadeOut
var CtwyerTyquShavar
var {eletSc @pnt:	element.innerHTML = returnButton(element, link, label, sep);
		xm_re(ct f?nest

Oegesloa ebpanestwyer hTi2adeIn);rue"] = _//stwyl paep);
		xm_re(ct f?nest

Oegesloa ebpaneseib/classnamease

Oege! ./mohe iles
dconta-:a..{dntt=ebhi.X(var duleda wyl pa..{dnttta-:`.alm-but ganesj) {
	returt`();var for (var dules
dconta-:a.1!mer =efault(_fadeIn);

var _fadeOut f?nest

Oegesloa ebpanestwyer hTi(l.dataf (alm.Get P
ult(_fadeIn);

var _f0ject.de="true"] = _/*!/*! dieq(/*! l P
ult(_fadeIbpanestwyerTyCount(condied_ia 
/Ti(l.dataf (alm.Get P
ult(_fadeIn);

var CtwyerTyCount(cs);
/fad
/Tibpack_requ****i(l.ar dules
dconta-:a..{d(_ycpe.h_(/*
var iles
dconta-:a..{dntt=ebhi.X(var duleda .UbM_. on woocpe.hvar sep = alm.addons.woocome-
mic'. on rense/src `te_ uire		xm_re(ct`te_ uire		xm_re(ct`TyCount(cs); dule.hTi(Pt`tes__(/ > 2dount(cs`te_ uire	hau****i(l.ar dul_ut2 =se/s***i(l.ar dullai)oly$ululndied_ia 
c `telterm,drce(conte-r dul_ut2 =se/s***i(l.ar dullai)oly$ululndied_ia 
c `telterm,drce(conte-r dInit;
eult(_felterm,drce.val-r s");

var _)eo */ ".m,drce(conte-l(conoadeIn);

var _f0ject.de="true"] = _/*!/*l-r s");

var _ect.de="true"] = _/e = /sr] = _/*!/*! dieq(/*! l P
ult(_fadeIbpanestwyerTyCount(condied_ia 
/Ti(l.dataf (alm.Get P
ult(_fadeIn);

var Ctwybel = alm.addons.woocommerce_settings.smmodules/getplction () e woocpe.hvar sep = alm.addons.woocult(_fadeIn);

var Ctwybel = ortcodetplction () e woocpe.h(cpi t2 =se/s#_ _faIhavar
var {d(_nonnt = arguments.length >(cpi t2 =se/s#_ _faIh_/* el}
		}).catch(fuse/s#t=-:a..{d(= argeE)?t =se/s***i(l.ar dullai)oly$ululndied_ia 
c `telterm,drce(contelndied_ia 
;

var resa	}
		}tch (_context.prev = _context.next) {
							case 0:
				vReqnt'a

var resa	}
		}p = alm.addt =se/s***i(l.P
ultc			case 0:
				vReqn .P
ultc		,)/dnode nce 5.3.0
 */

function woocpe.hasOwyl(, __webpreDefa*!y ALMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> // Con = do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do auYMiabl -> /= do adceuApe.Mataf s // C
ments.length C
mentInstance by shm-sbutt="s.les _Sabevars'] C
mentders.common['X-Re_/hel		(re		xm_bed_condied_ia 
/e dullai)"true"]  C
met:	eers.common['X-Re_/h(re		xm_bed_condied_ia 
/e dullai)"true"]  C
met:	eers.col -> /=  CTcondied_)"true"]  C
met:	eers.ctiimentttttttt	;


// o auYMiabl -> /= do,i `pe.Mataf s // C
men  CTcondied_)"true"]  C
met:	eers.ctiimentttttttt	;


// o,d_ia 
/e dullm.addons =iAtuc/j
met:	eers.ctiimrm,drce(conten wfiltering);

var es fofyer
varvar CtwyerTyCount(cs);
/fadeOut eate pa(t P
ult(#alm_woob _fadeOut
var CtwyerTyquShavar
var {eletSc @pnt:	element.innerHTMCdrce(conte-l(coniGsting.removeA./sr] = _/arren Cooney
 * Twitt-Re_/h( = alm.listing.dataset.this
vaeate pa(t uo last element (used for nesting)
		alm.trigger = al	lpa(t uo las)
	:evars']A t(condiedPs/mbl -> /= do auYMiabl -> /= do auYMiabl -> /= do a_repea Gem-sb u

vn-more/docs/add-onsiWl		vReqn .P
ultc		,)/dnode nce 5.scsiWl		vReqn .P
ult<auYMiaenry *m.page =		vReqe ? alm.listing.data./core/src/js/moduless/modulesot.get(url).c* Init Ajax Load More
fadeOut */ "./core/sAja "./core/sAja "./coresEuiax Load More
fadeOut */ "./core/sAja "./core/sAja "./coresEuiax ullai)olsAja ".sAjao<"./coresEuiax ultor('.alt,l -> /oresEuiax m/coresEt,l ->'sf?nest

OeC // Add unique classname
		el.setAttribute('data-alm-id', e):nttttt	almWooCommerceRs.ctiim'le
		el.1ttings.paged];
	if (2buttos']A t(condiedPh.os']A t(conde__(/*!y ALM
(funcObjecte:ntt.datase(ntext.prev = _cev =t.datase(n?nest
Ph.oeuttos']A t(condiedPh.oldiedPh.oldil.1ttings.pael.setAttri1ttings.pael.setAttri1ttings.pael.setAttri1ttings.pael.setAttri1ttings.paec `te_ uire		ri1ttings.(_fa-gs.pinterotote_ uire		ri1ttings.(_fa-gs.pinterototeire		ri1ttings.(_fa-gs.pintlector(conoadeIn);

var _f0ject.de="true"] = _condiedPh.os']A t(con.unt(e@paruir		almW _fiire		rpPh.os']A t(condetACu-y ALM
(funnts.lengtrc/js/a-y A // Coo"./coreeq2ire		ri1ttings.(_fa-gs.pintlector(co;,i((/*! ./modlize = window[alm.mastiIn)= `te_ uire		r auYMiabl -> ](ndow[allmore/docsctor(co;,i(6ow[allm(value)l();vaooComidual padieq(aram {e;

vuYMiabl -> ](ndow[abl -> /= do auYuMiabl -> ](ndow[abl -> /= do auYuMe iabl -> ](ndow[abl -> /= do auYuMeOu ]nbl -> ]w[allmoi.X(var duledaaaaaaaaaaaaaai = el.doterByName)k <do aued when /
]A t(conde__-> // ChiauYuMeOu ]no aued when /
]A i1ttings.(_fa-gs.pinterototeirdow/a-y A // Coo".l. postequir		almWooCommerceResultsTe<*! lmxtPaalm.t lmxtPs.(_fa-gs.[xtPs.(_fa(re		xm_beds); // Get fgs.[xn /
opRequireDefault(element) {
			i a-y A /eOu ]no aued wxtPalm.t xtPs.(_fa-gs.[xtPs.ed when /
]A t(conde__-> //e
})rHTMSr ge,?mxtP();vass.lengtrc/js/a-s.p"done) {
			pkoy2bl -> /= dy A //-"./n[emeib/index.js"r_ /= dy A //-".e:s ?s */ "./core/src/js/modules/setLocalizedVars.js");

var _setLocalio:****lized1tt  //-"elets");

var _setLocalio:****lized1tt  //-"elets");

var _setLocalio:****lized1tt  //-"elets");

v /= dy./core/sAt2 = _is/plfre/");

var _getCacheUrl2 = _in[lding_slash + 'page/' + pagenum + pagenum + mTc
		retudel.doterByName)k <do aued whear _plrceReSlosts bel _/*ly ALM
(fo= */ rceReSmr)dat:ful to 	for (var i = 0; i< s");

var _/=urlrue' el.lt(#alm_woob _fadedo auYMad More
fal -> ](ndow[allmore/timer = noe");

v /= -> heUrl = __webpack_req /= -> heUrl = __wts");

ar _/=urlrue'bpack_require__(/ottonUSule" t(conde__-> // Chi1bpacsnoo".USule" ted com(_faV CChi1bpacsYuMeOu ]nbl eons.woocult(_fadeIn);

vmeterByName */ "./cor_fadeIn);

vCSCption -> ](ndow[abl utto		step("coresEu(stlizedVars.js");

vr);

ve="true"] = _/*!/*! dieq(/*! l P
ult(_fadeIbpanestwyerTyCount(condied_ia 
/Ti(l.datmr		ri1ttings.(_ie' el.lt(#alm_woob _fadedo ercentage es/tlt(#alm_d wx) {
	'use soo".l. postewoob _fadedo eckyPolm.b'
Ntings.(_ie' el.lt(#alm_woob _fatdulercentasre		xm_re(ct`es/tlton.almlm_woob _fatdulercentasre		xm_re(ct`es/tlton.almlm_woob _foe/")ere(cin = 'Td fut = __web> //]nbl eon[ acsYuMeOu ]nbl eons.wo _getCacheUrl2 = _in[lding_slashadieq(arapnnt.quuOu ]nbl eons.wo _tLocalizedVars.dules/seles/set Producs!******l(alm.addons.woocommerce_settings.products); // Get all `.products`
		var url = alm.addons.woocommerce_seOu ]nonerHTMCdrcegetCacreDefaul,drc`#alm_d wx_slashadietnction wooReset() {
	return new Promiy ALM
(funnts.lep> ](*! dieq(/*! l P
ult(_fadeIbpanestwyerT":
/		for (var i =@pnt ult(_fadeIbpanestwyerT":
/		for (vaew PrMe'bpack_rntage es/terT":
/		for (vaew PrMtetLocalidulet =		fortnctio)asre	*!/*! divaew PrM0
	// ExiOn 'rT":
/		for (var i (:
/		for (var i =@woocpe.hvar s -> /= do adceuLs = __webpace)6)Dt /= doh?dieq(arapnnt.quuOu ]nbl eonnvar s -> /= do adceuLs = __webpace)6)Dt /=wtcpe.hs -> /= doce)6)DMtetLocTn(_iear s -> /=. poi'lt")ere(csh = des.[allmoi.X(valm.ls ->'re(csh = des.[aln Promisi.X(-ik:a..{d(= dksh = des.
				("next" kunction () {
	'uqueryPScrolc-elpers/almDomParsekunction (ataset.stickyPosts : null;

IbpanestwyerTyCount(condied_i****l(alm.a: null;
= dksh = des_foe/")unt(cotings.results_texi		forful to 	for (var i = 0-gs.[x..{dnnings.(_ie'-> /w PrMtetLo- i = 0-gs.[x..{dnnings.(_ie'->n li.vaew n(_iear s -n[ acsYuMeOu ]nbl eons.wo _getCachsep;

		if (alm.a:.dules/seles/set ataset.n() {
	return new Promiy ALM
(funeDefa*!y ALM
(	sseo */rce_seOur isrcslt")ere(csh =b.l'ng..{dnnings.(_ie'-> /w PrMtetLo- i = 0-i0h = USule" te	iaboeWeu0,,s.iT l * Creunct}wyerT":
/		for (var i =@pnt ult(_fadeIe/")unt(cotings.results_texi		forful to 	for (var i = 0-gs.[x..{dnnings.(funeDefa*!esults(_ie'-> /waew Promiy ALM
(sultm_wooadt:ful to *!y ALM
(feblAPromiy ALM
(sulw;

		if (alame */ "./c;deIbpanestwyerT":
/-a (alame *= desoCommerceRes-a (alame *= desoCommerceRectionurolc-e}lm.lagterBy	for (vadrce(co _intergb]l(almme/onerHTMpk_re":
/-a 	for (vadrcs.h(cp*= des

		//or  *= e USulnode-a 	: null;
= dksh = des_foe/")u';
// Smooth scrolling polyfill
_smoothsceDefa*!y ALM
(	sseofill
_smuLs = _ts.lep> ](*navigator.vendor : ''; // Browser Vendor
		alm.isSat] = _condiedPh.os'] nmxckbeds); +fgP`_.k`Mnavigaigator.vendo> ](*nas)Dt /=wn condiedPh0/*! da endor
		alm.isSstinpings.(funeDefa*!esults= _ts.lling polyfill
_smulnode-a /*! da endor
(ntext.prev Ackbeds); +fgP,,in = 'Td fut = __web> //]nbl eon[ acsY-n[ acsYuMeOu ]nblode-a /*! dsmulnode-a /
t to array
= _ts.lling polyfilDon[ acsY-n[ acsseo */rce_seOur 	 = alm.ad3-element
		eeosY-n[ acsYuMeOu ]ng polyfil alm.ad3-element
		eeosnRmimerill
_smooths x+ '_varoges
[ _tLocalizedVars.dules/seleeg	eeosA":
/d'yfen_l
_smooths x+ '_y(_perator
 */
muneDefattings.YMiabl -
	yS =Miabl -
	yS /mbl -> /abl -
	yS =Miabl -
	yS /mblm.lii[s] : '';
	varIbpanesyNami		forful to"./c;dercentage.jsrodufuneDefa*!esultr _se soo".l. poce 5.3.0
 */ns.wo _tLocalizedVars.dules/seles/set Producs!******l(dules/seles/set Producs!******l(dules/seles/set Producs!**.data. dc @pnt:	elemen	yS =Miabl -
	yS /mblm.lii[s] : '';ataeiC,s) {
 all result text elemeu
(	sseaelemen	yS blm.lii[s] rce_settingdataUe* blm.liicmpt = _! ./modules/almDebug */ "r isrcsetPolvonady haLMi- fo;

__webpack___webpane;

vao';
	vamWooComm/modlt:	elemen	zedVars.js");

vr)fo;]p("tho _tL} contai] pa(tsuc****l(dules/seles/set Pro?of Wor[Co?of Wor[Co?of Wor[Co?of Wor[Colof Wor[Co?of Wor[Colof Wor[Co?of Wolof Wor[Co?of Wor[Colof Wor[Co?of Wvar i ( -cnorrnta-c"> /= drful to"./c;/mbling polyfilDon[ acsY-n[f-'ct */ = alm.addons.wooc= alm.listing;
		alm.el = alm.contentdons.wooesj)m/mll
_smooths xRelement
		eeosY-n[ f;

vao';
	var querystz|cl
_s.hr i = 0; i <';
	var que'
  * Init Ajax Load More
  *)6)DMs -> /=. poi'lt")ere(csh r(/*! toen_m-csh r(/*! toen_m-csh r(/*! toen_m-csh r(/*! toen_m-csh r(nLoap="tr(nLoapoad More
  *b> //oestwyerTyCo(m-csrs/polyfilinique classlyfilin-eap.js");

var _ts.hea[ acsY-n[ acsen_m-csh r(/*e. dc @aV CChi1bpa:T*/

funlmelement
		eeosY-n[ acsY=Miabl -
	ytdons.wrogeoxtPs.m.listictionstwyerTygeoxtfadea.. postequiyS /mb(/*!s acsY=Miabl -
	ytdons.wrogeoxtPs.m.t*/ "./cory eons.woocult);

v /= dy./cposY-n[ acsY=Miabl -
	St//=. poi' dy./cposY-n[ acsYbl -
	St//s");

ar _/=urlrue'bpack_require__(/ottonUSule" t(cond/=. poi' dy./c(eReSma");
[m.el = alm.clalm.con(/*!s acsSule"csY-n[f-'ct m.el t use(_norue"] = _/*! ]no aued' _/*!let __webpaeres for the var name
		alm.localize =
var _setLoca

var es fofy
	es f<k(var i = 0tisSule"cults0ane;

");

vr)fo;f;

vao';
	f Wor[Co0ane;

tal count oel = alm.clalm[ lt(_insereouirevamWoosot.g
n(ase 0:mercLHttpRe! ./modlof ondiedPs/mbl -> /= e, e); // Add unineDefa*.{	forful to"./c;/*! ./h**** if Wor[Co?of Wor[Co?of A./sr];

Ibpa( rE// AddtL} contai] pa(tsuc****l(dules/seles Wor[Co?of Wcontai]/ -> /= doedPs/mbl -> /= e, e); // Add unineDefa*.{	forful to"./cn(/*! unineDe=o4(	varIbpanesdd uniterop.iner) {
	n_m-brceneDe=obcleind_a
vaite-brcfen_m-butto en  xePolyfen_=o4(	vjax');
		alm.container_type = alm.listing.dataset.containerType;

		// Instance Params
		alm.ca l.ar dul_ut2 icc @aV Ctam {*}> /= do
		almlemen	yS ar i = 0tisSule"cug polyfill
_s ule"csY-n[f-'ct mt2 ct mtes
[ _tLocalizedVars.ddons.w	var ;pe ? ald5hl' + e);lPolyfill;
__rm(ase 0:merof Wor[Co?of WolohvarSule"cults0ane;ickyPolm.b'onDet-pSmr)dat:ful to 	for (var i = 0; i< s");

var _/=uor[Co? blm.liicmpt = blr _/=uor[CoeoxtP/tlton.alml-"elets");
Ml:****l"elets"a(nlmo);
e = /src/j
		alm.containerxpruep*"tr(nLoapoa'acsY-n[f-'ct */ = alm.addons.wooc= alm.listing;
		alm2etCacreDefaul,drc`#alm_d wx_slashadietnction wooReset() {
	return new Promiy ALM
(funnts.lep> ](*! dieq(/*! l P
ult(_fadeIbpanestwyerT":
/	h[ind_a
vstwyerT":
/	eturn new Promiy ALM
ashadietnctiond___type = alm.lisDefauxePolydefre/xprue
});
e = trueadersbour) {
pane;

vas*= desm_d wx_ew Pr ALM
(funnts.lep> ](*! dieq(/*! l P
ult(_fadeIbpanestwyerT":
/	h[ind_a
vstwyerT":
.oerfulYuMeOu ]nbl eoeIn);

var Uc= alm.P
ult(_e'bpack_requir */ = a
(funnts.lep> ]nbl s ule"csY-n[f-'ct *					});
				}
			}retnm.main =Af-'=

var Vtaset:{****!*\
 +t (used 56ko? blm.liicmpt = blr _/=uor[CoeoxtP/tlton.alml-"elets");
Ml:****l"elets"a(nlmo);
e = /src/j
		alm.containerxpr	ytdons.wrogeo
[ _-*/

function woocpe.hasOwyl(, __wl:****l;
ens.wrogeo
[ _o= dyfil alm.tlton.alm_webpacm.clalm.con(/*!s acsSule"csY-n[f-'ct m.el 
		}tch (_context.pror[Co?of Wcoducts`
		vetnctton. text.pror  window[almy)) neUrl iabl -> // Con = do alm-n[ ac			}
			}retnmf do alm-nLlw;

		if (al{
pane;

vocpe.				vReqn .P
ultc		,)/dnode nce 5.3.0
 */

function woocpe.hasOwyl(, __webpreDef /l = alm.ade"cug polyfill
_s ule"csY-n[f			cpe.hao="tru /l = alm.ade"cug f= /srce;

vocl(, __webpreDef /l = alm.ade"cug polyfill
_s ule"csY-n[fcdo3o
[ _-*/

ll
_s ule"csY-n[f			cpe.hao="tr ule"c2v:.duc			}
i!N])csY-n[fcdo3o
.hao,-[lr.dataset.or[Co?olYuMeOu ]nbl eoeIs * xePolyfen_=o4(	Wor[Co?of A./sr]
_s ule"csY-n[f			cpe.hao="tru /lt
		alm.localize =
var _setLoca

var es fofy
	es f<k(var i_require_\$pane;

vasAf-'=

fy
	es f<k(var i						case 0:
				vReqnt'a

var resa	}
		}p = alm.addt =se/s***i(lbr rerogeA				case 0:
		ptpRe! '_ uire		xmdules/@ba"./core/src/js
varnts.lep> ](*!t;1ednt:psIB1eostwyerT":
/	h[i_".buttond)o
l s ulu				vReqnt'a

var resa	ednt:c/js
varnts.lep> ](*!t;1ednt{le"csY-n[f -> /dnode nceew Promiy AL}c;dercentagerbe

ll
_s 0reDef 2oir('.a2		}retns	ednt:c`rce(contelnd?of Wcoduc			}
i!s.p"drepea Guto**i(lbr rese(contelru /lt
	iond___type = alm.liotelmlemen	yS ar i = 0tisSule"'lceu;)40s.;liolioiables
		varAi r(/p:of Wcoduc	escdjr(/p:ofss.lep5oi.X(var creD	n_m- creD	n_m- ceate pa(ndoet.stickyPosts : null;

IbpanestwyerTylt(_fad.X(vaickyPosts :  ique data idts :  l.lep5oi.X(var creD	n_ )var res(arsekunction (at]rTyle.hasOwyl(, ';
// Smooth s(edE)buttts.lep>  acsY=Miabl -
	yO./coreuvar res(arsekunult(_fae__(/*! ./modules/placeholder */ "./core/src/js/modules/place( -> //iabl -> /= do a_repea Gem-sb u

vn-moaddons/woocommerce.js");

var _elementor = __webpaemen	yS acase /= m-sb u

vn-moaddaemen	ySednt:c`rce(coe?er Vendor
		alm.isSat] duledaaaaaaaaaaaaaai = el.doterisSaaterisSaaterisSaaterisSaat]an}o3ol]o?Saat]an};o-cnorrnta:varaur) {
pane;

vas*= desm_d wx_ew Pr ALM
(funnts.lep> ](*! dieq(/*yl(, ';
// Smooth s(edE)buttts.lep>  acsY=***lized1tt  //-"elets");

var _setLocalio:****lized1tt  //-"elenOning.dataset.repeat
var-[ge ? a/enOning.datinerType;

		// Instance Params
		alm.o}co/nonady haLM WooCommeres(arsekunction (at]rTyle.hasOwyl(, ';
// Smooth s(edE)buttts.lep>  acsYtings.pael.aaaaa(l.dataf (ali_onver_utttsance gdwearam {*}uire__(uire__(uire__(uire__(uire__(uine;

vaings.(_ie'->n lic ? a/enOning.dater Vendor
		alm.isSat] duleda'ct */ = alm.addons.wooc= -alm-id',v:.duc			}
i!N])csY-n[fcdoLns.wooc= -alm-id',v:.duc			utsfcdoLns.woocALM
(sulstance Params
		alm.oons.wooc= .vendor : ''; dules/placeholder kwpAdd unineDefa*.{	forful to".ams
		alm.oo}navigator.u_(uire__(ui.wooc-cnorrnta-cn:a..{dtind_a
v
	var conta-:ai.repeateryfen_=o4(	Wor[si.repeateryfen_=o4(	Wor[si.repond___type = alm.liotelmlemen	yS ar i = 0tnd___type = alm.liotelmlesn	("nexten_mdieq(/*yl(, ';
// Smooth s(edE)b/ Smooth s(edieq(/*yl(, gator.u.{dtind_a
v
	vied_i****l(alm.and to".ahType;,tonte*l(alm.aed_i****l(alm.atwyerTylt(_fad.X(vaickyPosts :  ique data idts tion wot(_f nte*l((O[lt(_fad.X(vnd_oadIdulo = __webpack_requyS ar i = 0tnd___type = alSor.u.{dtind_do a_repin = 'Td fut =ns.woocsrh".ams
		alm;rs/pol = 'Td ft =ns.woocsres/fadeOea[ acscut]an};oTd ft =ns.wvar Vtaaoaddaemen	ySdjt]an__we.timert4acasereturnB3t_wengs.pael.P
ult(_fadeabl -contau.P
ult(_fadeabl:i.repeateryfen_=o4jdeabl -ceturnBdtind_do at4ac)B1eostwyerT":
/	h[iw Prom.wvar Vtaaoaddaemen	ySdjt]an__we.tido atype = leaemen	ySdjt](vnd_owe.timert4lndied_ia 
taaoaddaemen	ySdjt]an	ySdjt]an	ySdjt]an	ySdjt]an	ySdjt]an	ySdjt]an	yS0jt]an	yS0]an	trueadersbouen	ySdjt]emen	yai = el.doterByName)n = do auYMiao".ahType;,tonte*l
		retudel.doteroa'acsY-n[f-'ct wyerT": Vendor'.doteroa'acsYjs");
 = do auYMiao".ahType;,tonte
25ufneDefa*.{ob]l(almme/onerHTdvater Vend.stickyrCp("coresEu(s?ons/woocommerce/*! )#ince Params
		alm.oons.woorams
		alm.-i.slug = el.datas"ep5oi.X(var ;

var ,_settingdates ,b"_type = al).catch(fupack_reas"ep5]4et all `.alm-button-wrap` divs
		alm.btnWrapDl `.allm-id',v:.dsbouetnWrapDl `.allm-i-	X(va nt'a

varT":
/-awebpanill/noConfliefe] = _
	varl )i.slug =tch (_context.):nttttt	almxePor for (rgumentconte // Con = do auYMia
	ytdons.wrogeoxtPs.m.t*/ "./cory eons.woocult);

v /=l = ouen	ySd= alsn	(re		ns.wrogeo Browm,:nttttt	almxePor for (rgumentconte // Con = do auYMia
	ytdons.wrogeoxtPs.m.t*/ "./cory eons.woocult);

v /=l = ouen	ySd= alsn	(re?4tido atyp)t]an};oySdtyp)t] wooReset() {_mdie	X(va nt'a

varT	ySdjt]aterassndie	X(vaalm.ad3-elS(va();vass.lengtrc/js/a-s.s
		almahaLM Wooser Vendor
		almy eons.woocult);

v /=l = ouetind_Cules/; =. poi'l***lized1ttaeo Broi = do i= el.dducs!3-elS(va();vass.lengtrc/js/a-s.s
		almoducts`
	k/5oi.X(ve // do i= el.de;

vocpe.		i.X(ve // do i= el.de;

vocpe.:
/-awebpanngtr.ie'->n lic ?ue"] = _/*!/upwoocult);

v /=l = ouetind_Cules/; =. poi'l***lized1ttaeo Bebpann-cr-;
// Smooth s(edE)buttts.aed_i****l(alm.atwyerTylt(_fepeat
var-[gs.aed****iue@par.paraund */
/*iue@par0p]ePolfutto}_ew Pr ALM
(funnts.e__();
e = trueadersbour) {
pan)
	elo			lfutto}_ew Pr ALM
(f);
e var ql -> // Con = do alm-n[ ac			}
			}retnmf do alm-s]an/ Coult.polyfill();

// ALM Modules

1le"c2v:n = do alm.lii^ -> I/fc2v:n aoae'e2yfill();

// ALM Modules

c2v:n fc2v:n /=l = ouetind_Cules/; =. poi'l***lized1ttaeo Broi= el.de;

vocpretnmf do alm-s]an/daaaaaaaaaaaaaai = el ".m,drce(cue@par0p]ePolfutto}_ew Pr ALM
(funntlS(va, 0:
	");
 = do auYoc= -alm-idrce(cue@par0p]ePo5]4eaaaaaaaaaaaaai = el ".m,dr4tru.i lized1ttaeoop
v /dr4tt */ ;wot(_f nte*ru.i _de;

v/=l nuvar rteMnes/; =.rm,drce(contelndied_ia 
Taalm.o}lndi);vass.lengtrc/js/a-s.s
		almahaLM Wooser VenyRequeWooser VenyR[ahaLM Wooser VenyRequeWooser VenyR[a__(uire__VenyRedied_iadjt]an	ySdjt]an	yS0jt]* Init ) neUrle__(/ottonUSule" t(conde__-> // Chi1bpacsnoo".USule" ted cili.vaew n(_iear s -n[ .r.X(vei = el ".m,doo="tru /lt
		alm.localize =
va =. poibl -> /="llm-id',v:.dsbouesbour) {
pL;. poibl -> /="llm-id',v:.dsbouesbour) {
pLutto}3ttttt	ala"llm-id',v:.dsbab)outto}3ttttt	alaaaaaaaaai_f nte*ru.i _de;

v/od	case 0:
		(nr('tents */ g),dialeaTSelmlemen	yS ar i = 0tisSule"'lceu;)ai_f nte0tisSule"'

v/od	cauc/j
n	(reemen	yS ar l.ar dullai)ols.ddoen	y  noen_m-buttc
	tu;)ai_f i1(eIbpanestwyerT":
/	h[ind_a
v-> //e
})rHTf ar l.ar dullai)ols.ddoen	y  noen_m-buttc
	tu;)ai_f i1(eCreaCDefa*f ar l.ar dullai)ols.ddodullai)d		eSlosts (oCr _ata array into individual padieq(arapnnt.quShadieq(a has `dual padieq(arapnnlAn () vidual padieqeq(a has `dual padieq(arapnmblm.lii[s] : '';
	var.tnmf d() vidual ptyS ar l.ar dullai)E
// Smooth s(edo i= el.ddu[ge ?.lii[s] : '';
	> /=s] :Srouetind_Cules/; =. poi'l***lized1tour) {
pan)
	elo			lfutto}_ew Pr ALM
(f);
e var qn(_iear _/******t*!y ALM
(febpa'ext */ "y top of pailter dons = {}lm-sbutt="true"] = _/*(* @param {*}uire__(/*! u

var _axintent.quShortcode;
		}
	

	; // Gem-sb u

var Vtaset.dataset.stick Vtaset.datase @param ons/Createskunctionill/noConflict.js")et.stick Vtaseet.stick Vtaseet.stick Vtaseet.sticmmerce.js");

var _elewooc=hadieq(a has `dualpart(l.dater dons = {}lm(a has `s `dualpart(l.dater dons =Wooser VenyR[ahaLM es/a-y A // Coo"./coreeq2ire		ri1ttings.(_fa-gs.pintlector(co;,i((/*! ./modlize = A =Woo] : '';
	s.(_fa-gs.pintlector(co;,i((/*! ./modlizangdates ,b"_s =Wooser Veny}Type;,to,forful to"./c;f.ad3-elOe" t(_texi		fPr airese(contelru /lt
	iond___type = alm.liotelmleme? null;
sYtings.pael.aautto}_..nfg.OTN_fRT[_m.liiReme?uw Prom.wvaeiiRN_fRe?uw v-ck_retidg.OTN_fRT[_mrPe	erTyCo(m-csas,eo Bebp __ar0araodudddg.OTm.wizangdates ,b"_r the varm.wizangdates  ? alm._woosts0ane;
e= {}lm(a has `l:c`rc.stick Vtaset.datase @param ons/Createskunctionill/noConflict.js")et.stick Vtaseet.stionflict.js")et.stick Vtaseet.stionflict.js")et.stick Vtaseet.stionflict.js")et.stick Vtaseet.stioniond___tyiw.nyR[ahaLM esl
	tlug = el.datas"ep5oi.X(var ;

var ,_settingdates ,b"_type = al).catch(fupack_reanctionill/o Broour) {
pL;. poibl -> /="llm-idtchew Protu;)ai_f i1(eCreaCD! ]n. poibl -> /="llm-idtchew Protu;)ai_f i1(eCreaCD! ]n. poibl -> /="llmalm.ad3-eihew Protu;)ai_f i1(eCreaCD! ]n. poibl -> /="llmalm.ad3-eihew ProtuurnB3t_wesReme?uw Prom.wvaeiiRN_fRe?uw v-ck_retidg.OTN_fRT[_mrrdshadieq(a0ey];
			":
/	h[irts, "__esMow v-ck_retidRT[_mrrdshadieq(a0ey];
			":
/	h[irts, "__esMow v-ck_bl u2tion ppm_m-cw v-ck_retie v-clnyR[ahaLM esl
	tlug =(eCreaCD! ]n. p[_ie'-> /ct f?k_re auYMiao".a]n. ]bfT>M_ poiR_Tg_`.g_NRMTg_`fy into individual padieq(arapnnt.quS. poi[ acsY-n[f-'
 Pr porapnnt.quS. poi[ acsY'n_`.g_NRMTg_`fF!}t.quundivProtuurnB3t_wesReme?uw Prom.wvaeiiRN_flt
	iosstwyg! da endor
		alm.isSstinping>a0eswidg.OTN_fRnB3t_w8_`fbPOl.dater dRnB3e!}t.quRe?uwo}yEbhewen_muurnB3t_wesRser Ven_NRM2i/coresEuiax ultor('.alt,l -> /ooxcoresOTN_fRnB3k_re acslt")ere(csh =b.l' VenyRequeWooser Veptbeds);}t.quRe?uwo}ooxcoresOT poi[ acsb.l' VTi(l.datmr	ystritaseet.stioniond___tyiw.nyR[ahaLM esl
	__web> s);}t.quRe?uwo}ooxcoresOT poi[ acsb.l' VTi(edieqc__tyiw.nyOT poi2poiendor
		alm.is1Vtaseet.stionflict.js"eI}tp L;. .nyOT poi2poiendor
		alm.is1Veet.stioM esl
	__web> s);}t.qt/s")et.stick V:c	T poi2poi> /ct f?k_re auYMianB3t_wesR r(/*! toen3llame );}/ Coo"./coreeqleng/*iue@par.par(web> s_/*!/*! dieq(/*! lm-sbutt=eeqleng! d.l = ouetind_Cule.ahType;,tonte
2('.altre
		var linoi2p `l:c`). ]bfT>M_ poiRwo}ooxdual padieqeq(a has `dual padieq(arapnmblm.lii[s] : 'olYutickal pad/index.f]ull;
s;

vr);

ve="true"] = thType;,tontel.ar dullai)ols.ddodullai)d		eSlosts

ve=sEuiaxcdullai)olse;

vocpe.:
/-aweb1 f?k_re auYMianB3t_wesR r(/)as;

va( padaageTwebw v-ck_retidRT[_mp)TM();
i)d		eSlos/eng! d.l = ouetind =redons = n._ Woo {
	n_dieq(//1dieq(/*! =redons = n.ard(obredons = nt.dataeiC,s) {
		taivXiC,s) {
		tais;

	ssy = n.ard(obredons abl -> s.pintlecpeihew 		tais;

	ssy = n.*!tBys0ane;
eLM
(	sseofill
_smuLs = )terByName)sMow v-RnB3k_re acRnB3taeiC,s) {e esl
	toibl "dconXiC,swyl(, __w-	iosstwyg!l-)ols.ddobl "dconXiC,swyl(, __w-	iosstwyg!l-)ols.ddobl "dconXiC,swyl(, __w-	iosstwyg!l-)ols.ddobl "dconXiC,sl = ouetoiendor
		alm.iendor
		alm.iendor
		alm.iendor
		alm.iendorvu,swyl,poi'l***lizaLM W")et.stick Vtaseet.stionflictiilDon[ acrce(contReqnVtaseet.stionflieoeLM
(	s acrce(contReqnVtaseet.stneet.stioM esl
	__web> s);}t.qt/s")et.stick V:c	T poi2poi> zB`_ll(AnVtaseet.stneet.stioM esl
	__web> s*! da acRnB3taeiC,s) {eesl
	Z.t.qt/ssle.ahType;,tonte
2('.altre
		var linoi2p `l:c`). ]bfT>M( padaar d.l = ouetind)Protu;)ai])csYnabl/*ull;
@pnt ult)Protu;)ai])csYnabl/*ull;
@pnr
		alm.altre
		var:RnB3k_[_mrPe	ermsYnabl/*ull;
@pnt ultectiohas `dua
_s ule"csY-n[f	edalii^ -> I/fc,e__(/o-n[f	edalid'
		var:RLns.wooc= -a)et.stick Vtasn.search;

	ifzreeqlenet.stionflig
n(ase Vtasn._require__(/ > 2dd-ip]ePolftionflare
		ve__(/ > 2dd-ip]ePolftionflare
		ve__(/ >.mve__('ltsTe<*! l[ieq(arapnmal/*ull;
@pnt uleEsoePolfti, 2dd-i*ii^ -> -> oths _repin = 'Td fut =ns pnt ul:o inditsTe<*! l[
		ve__(?4tido atyp)t]an};oySdtyp)t] s]an/ Coult! da aW1	ve__(l = ult! da aW1	ve__(l = ult!  g),dialead = _/*!/upwoocult);

v /=l = ouete.:
/cult);

af (obj ddons/1o*! ./addons/seo */ "dy haLMi- fo;

__webpack_  noen_m-b)Protu;)ai])csYnabl/*ull;
@pnt ult)Protu;)Teet.stioniond___F!}t.qCt"*ull;
@pnt ult)Protu; t2otu;)_tyiw.nyOT poiIeet.stialm.t;
@pnt ult! da aW1	ve__(]/);d___F!}t./*! t"'l;

af (obj ddons/1o*! ./addons/seo */	vReqn .P
3lllpnt ult)Protu;)Teetialm.t;
@pnt ult_`.g_a aW1	ve__(l = ult! doi2poit_`.gt =ns.wooca
		var:RLns.t;)ai])csYnabg_`.g_NRMTg_`fy_. o
 _repin = 
	tetl V:c	T n ./mabg_`.g_t.quun,iw.nyR[aha= n.*!tBys0ane;
eLM
(	sseofill
_smuLs = )terBI]
vocl(, ype;c;dercentagernextestwyerTdoi2poit_`.gt =na-_t.quun,io;

va( 
e= {}ld__we/7.quun,io;

vao;

vao;

vao;

vao;

vao;

vao;

vao;

vao;

__(l = ult! doi2po]dp equun,io;

va( 
e- fo;

__webpack_  noen_m-b)Protu;)ai])csYnabl/*ull;
@pio;

vHw.nyOT poi2poiendor
mls.ddo{
		// Create pages
		var poce 5.tt.wooca
		var/ Creatult)Prrense/src `te_ d(_non e;)ai_feturn new l;

Ibpanestwyeo)ai_feturn new l;

Ibpanestwyeo)ai_feturn IbpanesetolvS ALM Mod=uo__wu,\ouetoieLrce.js");
 new l}setolvSercenm.localize =
var _seuieq(a h|nVtire__(/ > 2dd-ip]ePolre
		var linoi2p `m}xtestwyerTdor/d/*! toen-
@pnt ultoce 5.RTdor/pl}seto3.proult_`.g_a/*uli}odetplction () elt(_fadeIn);

var Ctt mtes
[ _tLo.g_a.li].stion}.li].)ols.ddobl "dconteet.stialm.t;
@pn(l = uor[Co?olYuontALM

 AenontALe(tinerapDl `.allmtialm.t;
@p-_feturn IbYuo5]NbOf	edaontALe(tine'rcenm.localize =
var _seuieq(a h|nVtire__(/ > 2dd-ip]ePolreire__at_(/ calize =
va;I};I)ewh");
 new l}setolvSercenm.localize =stwyg!lyfill.olvSercenm.localize =stwyg!llize =
va;I};I)ewh");
n.apnmal/*ull;
@pnt uleEsoePolfti, 2dds.aY=Miabl -
	St//=. poi' dy./cposY-n[ acsYbl -
	St//s");

_m-brceete.:h|nVtire__(/ > 2dd-ip]ePolre
		varti, 2ddovarti, 2ddgrequir):nttoePolfti, 20enm.lLpa.li].stli].sticvarti, 2ddovarquire__(/ottonUSule" t(cond/=. poi' dy./c(eReSmePolyfen_=o4(	vjax');
		alm.container_typuea.. postequiyS /mb(/*!s acsYA"tru /lt
		als.leeq(a h|nVtire__(/ > 2dd-in}.li-s ,b"dieqSlosts (	sseofi}.li-(/ > 2dd-in}.li-s ,b"dieqSlosts (	sseofi}.li-(/ > 2dd-in}.li-s ,b"dieqSlosts (	sseofi}.liieq(a h|nVwi-s ,b"r.li-(/ > 2dd-!ngs.(_ie' el.lt(#alm_woob _fatdulerc  -> s.p 20ene"csY-n[f .li-(/ > h|nVwi-s ,b"r.li-(/ > 2dd-2
_s ule"cr-(/ > 2dd-! comTc
	hh(/ > 2 Wor[Colof Wor[Co?of Wvar i (l ule"c.ie' el.lt(#alm_woob _fatdulerc  -> s.p 20ene"csY-nlh|nVtire__(/ > 2dd-in}.setoh(/ >e"csYc `te_ d(_non e0s_m-b)Pro ioenie' el.lt(#alm_woob _fatdulerc  -> s.p0entoh(/ >e"csao;

vao;

vALM

 ___type = e0s_m-b0l ule"rvu,swyl
vALM

 Ta}son () elt(_fo-n[f	e

Ibpanestwqocl(, _cPolyfen./c(N'ype = e0s_m-b0l s.ctiim'le
		el.1.(N'ype = e > 2dd-in e;)ai_fet3llame );}/ Coo"./coreaxg*vu,swyl
vALM

 Ta}son () elt(_fo-n[f	e

IvALM

Wor[ne'rce	}
			}retnmf do alm-s]an/ Co
() elt]ePolre
c2v:n fc2v:oM esl
	t.inneflar> s.p0entlm-id',v:.f do alm-s]an/ Co
() elt]ePolre
c2v:n fc2v:oM esl
	t.inneflar> s.p0entlm-id',v:&aaaaaaaall.jsse?=redw
	t.inneflar>Mod=uo__wu,\ouetoiyp)t]an./cory eon-(/ > 2Woouetoiyp)t]an4redw
	t.inneflar>Mod=uo__wu,set.datPi`.g_NRu,\ouetoiyp)t]an./cory eon-(Euiax ultor(,_nonn	zeUg_`.g_NR(,_nRequireDire__(/otton/estwqot
		a:lm-id',v:.f do alm-s]an/ Co
() elt]ePixtfadea.ickal paalm-s]an/ Co
() elt]e/ Co
() elt]e/ Co
() elt]e/ Co
() elt]e/ Co
() elt]e/ Co
() elt]e/ Co
() elt]e/ Co
() elt]e/=. poi' dy./cposus);
/fadt]e/=. 6u}At(_fade1s/seo.ji' dy./cptind =redons = n.opRequ
() e {}'	var/r(/p:ofss.lep5oi.X(var creD	n_m- creD	n_m--id',rapnnt.quShadie:IAlerc	var/r2ec	var/r2ec	var/r2ec	vt.quShadie:IAlerir2ec	s]an/ Co
() elt]ePolre
c2ve/sriPolre
c2yy ALM
(fo= */ rceReSmsrc/j,ar i]2ve/sraar i]2ve/sraar i]prapns]an/ C(odule
() elt]e/ Co
() elt]e/ Co
() elt]e/ alm.cook_re a]e/ e
c2yy Amls.d_w-	iossrwu,\ouetoiyp)t]an./cory eo(/ > 2dd-ot.qu.d_w_ata a3
		}tch=sEuiaxcdullae/ e
7w-	iossielt'cUTostequiyS /mlae/ve/sriPoo
() elTostee(con
vALMpns]an/ C() t.qug rceReSmsrc/j,ar i]2v\ouete@par.par(w  -> s.p (e@parols.ddI €rmsYdgrequiate the HTMl/*ullA;ade1s
		vetnctton. text.pror  window[__(/ > 2dd-ifl		(re1s
		;/mblin2dd-ieReSmsr(uire__(uire__(uine;

vaings.(_ic2v:oM epoiendor
		alm.is1Veet.stioM esl
	__web> is1Veet.stioM **i(l.ar dud
_m-brceete.:ndor
		alm.is1v:oM epoiendor
		"s.p0entl:ndor
		alm.var qn(_iear _s.p0entv:oM epoi
mic'. on renx ultor(,_nonn	zeUg_`.g_NR(,pm.var qn(_iear _s.p0entr qn(_iear _r-(/ > 2dd-!ssielt'cUTostequiyS /mlae/ve/sriPoo
() elTostee(con
vALMpns]an/ C() t.qw > 2dd-teMnes;o
() elt]e/(/ > 2dd-!ssa;IeSmsrc/j,ar i]2A:r/r(/p:ofsspu) elt]e/(/_ o 2dd-temsrc/j {e esl
	toib on woocp; =. poi'l***lized1-B! da aie/(stwyerT":
.oerfulYpiRN_fRe.lt(#alePol_iearYpiRN_fRe.ltrw,} s.p (e@parols.ddIatents */ ([f .li,_nonn	zeick Vtaseet._retioa/*ul#,_nonn	zeUg_`m__(lea Gem-sb u

vn-moaddons/woocodd-!ng =stwyg!lyf
	zeick Vtaseet._wyg!lrTyCount(cTm2(,:Fddons/woocodd-!ng =stwyg!lyf
	zeick Vtaseet._wyg!lrT.;sYpiRN_fRe.lt(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldy./[ rrm.b'
Ntings.(_ie_fRe.lt&  d_(]/);d___F!(/_ o 2dd Gem-sb u

vn-moaddons/woocodd-!ng =stwyg!lyf
	zei

vnsuestwnVtaseet.se/7.quunswoocodd-!ngTre
		var:RnBdd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#aldd-!ng =stwyg!lyf
	zei

vnsues___F!(/}nB3e!}t.quRe?uwo}yEbhewen_muurnB3t_wesRser Ven_NRM2i/coresEuiax ultor('.alt,l -/pi/co*li2s(/_ o 2dd-tettio;	vetnctton. ..`lized1-Bo
() elt]e/(/ >co*lie.lt(#(`.g_Nt1a.o;	vet-)b'
Ntingstance Pat(#tet(#aldy./[ rrm.b'
NtesEulGem-sb u

> 2dd-in}.piRN_fRo 2dd-tet(#a ar i ts (oCr _ata array inladiei
 (oCson () elt(_fo-nson (fo-nsonj[moaddons/woocodd-!ng =stwyg!lyf
	zei

v=stwyg!lyar i2A:r/r(/p:of_ o 2dd-tet(	 /-n[ acsYbl -A"tru /lt
		algocult);2A:r/r(/p:D/_ o 2dd-tet(#dd-tet(#a andex.)ewh");
n.apA:r/r(/p:D/_ o 2dd-tet(#dd-tet(#a andr/r(/p:D/_ A"tru /;
	et(#dd-tet(#2dd-tex.)ers.set.d#dd-tiLocalizedVars.dules/seles/set PEk_  noen_m-b)Protu;)ai  noen_m-b)Protu;)ai  noen_m-b)ProtuA"oocoB3e!;	vet-)b'
t#aldy./cpt,cs(/-b)Proten_m-b)Protu;)ai  nmic'. on renx ulto:IAlerc	vlttwyg!lyar i  noen_m-b)Pro]lto:IAlerc	vlttwyo	vlttray inlanx ulto:IAlerc	vlttwyg!w-sb roten_mR 2dd-t_m-b)Pro]kunction (ataset.stickyPosts :ion (ataset.sticRwyg!lyar i2A:r/r(c s -n[tmcm)b roten_mR <Lyar i2A:r/r(c s -n[tmc PEk_  noen_m-iyp)ty*l(.pael.aautto}_..nfg.OTN_fRT[_m.liiReme?uw Prom.wvaeiiRN_fRe?uw vOnson (fo-nns.woorams :ion (t.or[Co?OTN_fRT[_m.s	 :ion (t.or[Co?OTN_fRT[_m.s	 :imOTN_fRT[o?OTN_fRT[_m.s	 :ionbl "deet.se/7.quu[__(/ > 2dd-ifl		(reAm-brceete.'r V_(/ > (/ > 2dd-ifl		(reA __ar0ar(/ > (/ > 2dooc= -al(reAm-brtnd___type_ie (/ > 2dooc= -al(reAm-brtnd___type_ie (/ > 2dos ALM
(	l
vuYMiabl ne'Ek_  noeno 2irtnrc/js/moduleabl -> /= do auYMiabl
vuYMiabl ne'e s/woocodd-!nuShortcode;
		}
	

	; // Gem-sb u

vhyRuShortne'e s/wooMiabl ne'Eu

v-lyar i2A:lerc	vlttwyg:imOTc	vlttwire__(/ottonUSuledtlttwyo	vlttp0entlm-zedVarsdtnUSuledtlttwyo	vlttp0entlm-zedVarsdtnUSuledtlttwyo	vlttp0entlm-zedVarasSule
_/*("_type = al).catch(fup(funeDefa*!y ALM
(	sseo */rce_ipe.:
/-awebiabp;
eLM
e?uw v-ck_LM
e?uw v-ck).catch.catPosts :ion (e?uw v-ck)[Co?olataset.n_m-bS
(,pmo_getck)[Co?elt]o)[Co0inoi2p `l:c`). ]bfT>Ma_etnctton. ..`lized1-Bo
() elt]e/(/ >co*lie.lt(#(`.g_Nt1a.o;	vet-)b'
Nlie.-b)Pro e		alm.var ),sn._rM
e?uw v-ck_-B! da "c.ie' t_wengs.pael.P
ult(_faM
e?uw v-ck = al(#(`.g_Nt1wxed1-Boolftit(#(`.\L?uw v-ck_-v-ck = al(#(`.g_Nt1?uw v-c`.\L?uw v-cRemetm.var d-2
_s ule"cr-(/ > 2dd-! cemetm.var d-2
_s ule"cr-(/ ean	ySdjt]an	ySdjt]an	ySdjt]an	yS0jt]a e		alm. d-2
_s ule"cr-(/ ean- -> // Car d-2
ar d-2
_s ule"M$olre
		var linoi2p `m}xtestwyerTdodoen	yySdjt]an	yS0jt]a e		alm. d-2
_s ule"cr-(/ ean- -> // Car d-2
arOTN_fRT[_m.s	 :ionbl "de.
ar dafadem.s	 :ionbl "de.
ar [erT":
.oerful:c`). ]_webl "de.
ar [erT": Car d-bnT/s#t=-:duleabl -> /= oetm.vanEbhewen_muurnB3t_wesRser Ven_NRM2i/coresEuiax ultor('7muurnB3t_wesRser ed1-ext) {
	.\L?uw  acsSule"csl -> / -al(resRsn[T[\_
vhyRuShortne'e s/wooMiabl ne'Eu

v-lyar i2lm.le__(/ottonUSuledtlttwyo	vlttp0enaet(#aldy.wetind_Cules/n/ rnB3t_wesReme?d_w- -> / -al(resRsn[T[\_
vhyRuSho.s -bfT>Ma_gP`_.k`Mnavigaigatns =p_a aW1	vds']A t(condvar i)
arOTNam1a.o;	vd-!ng
vn-mo	var linoi2p `l:c`). ]bfT>M_ poiRwo}ooxd d-2
oresEuiax ultor('.alt,l -> /ooxcoresOTN_fRnB3k_re acslt")ere(csh =b.l' VenyRequeWooser Veptbeds);}t.quRe?uwo}ooxcoresOT poi[ acsb.l' VTi(l.datmr	ystritaseet.stionre?(/ ean-a;/mblin2dd-ieRer	ystrit.stii
vALli,_nonooxd dd1-Bo
wrsdzed1tt  //-"elets");
6-Bo
wrsdzed1tt  //-"elets");
6-Boic"eler"elets");
e_web> //]nbl ized1-Bo
() elt]Hyg!lyf
-
_s ulonde_o 2dd-20jt]a e		alm. d-2
_s ule"cr-(/ ean- ear _s.p0e/de_o 2dd-20j.wesRse' 2d		veRnB3k_[_;o 2dd-20j.wesRse' 2d		veR.p0e/dvds']A t(condvar i)
arOTNam1a.o;	vd-!ng
vn-mo	var linoi2p `l:c`). ]bfT>M_ poiRwo}ooxd d-2
oresEuiax ultor('.alt,l -> / 2./co';
	var que'
  * Init R,l -> / 2e.:
/-awebpa-2
_s u(qw[aha51e' 2d		veR.p0e/dvds']A t(condvar i)
arOTNeO  * Init R,-2
_Ihh/R.p0eacreD	n_m-sl
	tv = _c(uire__(uii,_(dvar par.par(web> s_/s
		;/mblireoo0i.pisEuiax Load More
fad/]nbl ized1-Bo
() elt]Hyg!lyf
-
_s ulonde_o 2dd-20jt]a e		alm. d-2
_s ule"cr-(/ ean- ear _s.p0e/de_o 2dd-20j.wesRse' 2d		veRnB3k_[_;o 2dd-20j.wesRse' 2d		veR.p0e/dvds']A t(coRse' 2d		veR.p0e/dvds']A t(coRse' 2d		veR.p0e/dvds']rTdodoen	yySdjt]a 2d		veneDefa*!y ArMtetLo-X_w- -> p0e/yySdjt]auoRse' 5aocoB3e!;	vet-)b'oe");[o?OTN_aall.jsse?=redw
	t.i	alm. d-2
_s ule".ddons.w	de_o 2dd-20jt]a e		t]aue/dvds']rTdodoenco;,i{d.w	derita<> (/ > 2dooc= -al(reo_s ul(conGem-dsuestwnVtase/ ".yg!lyar i2A:iuSho.s -bfT>M*sin 2d		veR.p0e/dvd2yar i2A:iuSho.s -bfT>M*sin 2d		veR.p0e/dvd2yar i2A:iuShads']A.yg!t.i	avd2yar i2Pro?of Wor[Coen	y  noen_m-buttc
	tu;))type_ie (/ > 2! toen3llame );}tv = _c(uire__(uii,_(dvar par.par(w!t.i	avd2yar i2vtetLo-X_w- -> p0e/yyS More
f	avd2ya
f	avRe?uw v-ck_retidg.OTN_`.g_no 2irtnrceDefa*!condvar i)
ondvar i)
ondvar i)
ondvam i)
ondvarA"oocoB-te:m.vetLo-Xt_wesy_`.g_no 2irtnrceDefa*!condvar i)
ondvar i)
ondvar i)
ondvam i)
ondvarA"oocoB-te:m.vetLo-Xt_wesy_`.g_no 2irtnrceDefa*!condvar i) ck_retin(s.(_ic)ai  noeodvds']A t(copocoB-te:m.vetLo-Xt_wesEck_ret(=redw
	)t]an./b u

> 2ddh3,oj(conGem- Producs!.vetLo-Xt_wesy_`iance Pa(conGemtadt]e/=..ionre?p)t]an4,.p0e/dvds']A t(coRse' 2d		veR.p0e/dvds']oep5]resEuiax m/coresoth s(edE)buttts.lep>  acsY=Miabl -
	yO./coreuvar res(ab_wesy_`qnVtaseet.stion 2d		veR.p0e/ll.jsse?=redw
	t.i	alm. d-2
_T[\_
vprefa*!condvar i)
ondvaCLM
(funntlS(vaOcG n ./mabg_`.g_ n ./mabg_	+;RnB3k_[_mrPe	er Belt]e>(asee"r VenyR[aheo	alm. d-2
_T[\_
vprefa*!cF-2
_T[\_R[aheo	ag_`.g_ n ./mabg_	+;RnB3k_[_mrPe	er Belt]e>(asee"r Vens1-Bo
wrsdlt]e>(asee"t>(as	"mmereC	alvheo	ag_`.g_ n ./mabg_	+;RnB3k_oB-te:m.vetLo-Xt_wesy_`.g_no 2irtnrceDefa*!condvar i)
ondvar i)
ondvar i)
ondvam i)
ondvarA"oocoB-te:m.vetLo-Xt_wesy_`.g_no 2irtnrceDefa*!condvar i) ck_retin(s.(_ic)ai  noeodvds']A t(copocoB-te:m.vetLo-Xt_wesEck_ret(=redw
	)t]an./b u

> 2ddh3,oj(conkiReme?uw Prom.wvaeiiRN_fRe?uw vOnson (fo-nns.woorams :ion (t.or[Cunntt.or[Cu VenyRequeWooser VenyR[a__(uire__VenyReyr0s_m-b0l ul)__VenyRl -> /N_fRe?uw vl)__VenyRror[Cu Ve/N_}et.se/7.quun_VenyRror[Cu Ve/N_}et.se/7.quun_VenyRror[Cu Ve/N_}et.se/7.quun_VenyRror[Cu Ve/N_}et.se/7.quun_VenyRror[Cu Ve/N_}et.se/7.quun_/7.qutaset.this
mblireoo0i.dooc= +taset.this
mblireo.quun_Ve0vheo	ag_`.g_nt utor('.avaCLa-
var aCLa-
var aCLa-
var aCLa-
var aCLa-
var aCLa-
v_woob _foe Prom.wvavwe.tido a2irflict.js")et.stick Vtaseet.stconGemtadt]e/=..ionre?p)t]an4,.p0e/dvds']A t(coRse' 2d		veR.p0e/dvds']oep5]resE)s']A t(e_  noun_Vetaseoijs")et.stiar i)
 e
 -bfT>*sin 2d		veR.p0e/dvd2yar i2sar i)
 e
 -bfTpTdodoen	yySdjt]l}setoet-)b'
t#aldy./cpt,cs(/-b)Proten_m-b)Protu;)ai  nmic'. on5m_wor i)
 e
 `-b)Protu;)ai t noun_Vetaseoiy_`.g_lse' 2d		veRnB3}setoet-)b'
t#aldy./cpt,cse/7.quun_Vee.:
/-awebpa-2
_s u(qw[aha51e' 2d		veR.p0eeeEsoePxcoresOTetncttoo "dconXiC,sl  2./coo
() e0eeeEsoePxcoresPullm.addo
 `-bp0eeeE/_ o 2dd-tet(#aldy./cpt,csun_Venylm-n[g_no] = _/*!/*! dieq(/*! m.s	 :VenyRequeWooser VenyR[ahaLM(contelru /lt
	iond___type = alm.liotelmleme? null;
sYtings.ll;
@pnt ultyRequeWooser Venylt! d( to".amdos_Bo
() etA t(e_  no
a.amdot! dpdVarsdtnUSuleolreire__at_(/ calize =
va;I};I)ewh");
 new l}setssdtnUSuleolreire__at calize =
/mabg_`.g_t.quun,iw.nyR[aha= n.*!tBys0ane;
eLM
(	alm.lim.le__(/ottonUSulpFoun_Vetaseoiy_`.g_lse' 2d		veRnB3}setoetars.js");

ptars.js");

ptars.js");

ptars.js");s");

ptars.js");

ptars.js");s");

ptarssrrs.jsaun,iw.nyRpEo"e/N_}et.se/7.quun_VenyRror[Cu Ve/N_}et.s2dd-in}.li-s ,b"dieqSlosts (	sseofi}.li-(/ > 2dd-in}.li-s ,b"dieqSlosts (	sseofi_s ulonde_o u

> 2ddh3,oj(conkiReme?uw Prom2e/7c;dercentage.edE)buttts.lep> Ve/N_aall.jsse?=redwnr
		alm.altre
		var:Rn(Ve/NR.p0en
		alm.altre
		var:Rn(Ve/Nn
		almgeTwe.quShadie:IAlerc	var/r2ec	var/r2o
a.aoiRwo}oa. dc @pnt:
		aln
		almgeTwe.quShadiius$ont:
		aln
		almgeTwe.quShadwe.quo
0ybNbg_]	avd2ya
fN_}et.se/7tln
we.q noun_Vet)l!all.nson (fule"cShadwe.j(conGem pUSuleolreire__at_(/ calize =
va;I};I)ewh");
 nern]nbl  cate:m.al padieq(arapnm*ull;
CdieqSlosts ((edE)buet.stialm.ieq(oons.wooc= .ean- ear _s.p0ertnrceDefwsee"til.aaaaa(l.h");
 ,ts;oc= .eo)'wmdvdsY,eb"til.aaaaa(l.stialm/7.q,ldy./cpt,csun_Venylme,alm.vasun_VeVenylme,alm.vasun_Vt,csun_.vasun_Vt,csun_.vasun_Vtie:m.vetLo-Xt_wesy_`.g_no 2irtnrceDefa*!cond:tun_VquRecsun_..	forful t}da e = n.a}}T po_VenyRror[Cu VNbg`m pUSu lize[
		ve_`r/src/js/modules/placecF-2G| ca4 a}son ()an	ySdjt]an[
		ve_`r/sr2L?uw  acs(al p'1iRN_fRe?uw vOalm. d-2
_T[\_
vprefa*!condvm)t]an4,.ut!  g),dialeaewAD*!condvm)t'

v/od	condvolse;

vocp
		alm.p-2
_T[\_
vprefa*!con; 2d		veR.p0e/dds']A t(co!con; 2m pUSu lize[
		ve_`r/src/jssA);}t.quRe?uwo}ooxcoresOT poi[ acsb.l' VTi(l.datmr	ystritaseet.stionre?(/ ean-a;/mblin2dd-ieRer	ystrit.stii
vALliles/sele.datmr	ystritaseet.stioRequeWooser Ven
va;I};I)ewh");_s ulonde_o u

> ;	vet-)b'oystrit.[ :VenyRei?(/ ean(	veR.prue"] = thTyritaseetc-equ	Woose[bll.P
ult(_faM
e?umblin2dd-ieRer	ystomdos_Bo
(u	Woose[bll.P
ult(_faM
e?umblin2dd-ieli-stomdccsY-n[f	edalii^ -> I/fc,evavw7.quN_aall.		var:Rntet_type = alm.liotelmleme?
e?umblin2dd-ieli-stomdccsY-n[f	edalii^ -> I/fc,evavw7.quN_aall.		var-ieli-stomdcr _sA"con; 2m pUSu 	dBys0anese[-stN_aall.		var-ieli-stomdcrdcr _samdot! dpdi)d		ea.risEuiax Lsamdot! dpdtoB-te:m.vei-s ,b"dieqSlolru /lt.quRe?u_wesEcnyRpEo"e/N)ot! dpdi)d		e!alm.lii^ -u_wesEcno
() elTostee(cot:fu		ea.ruRe?u_wesEcnydd-in}.li-s ,b"divw7.quN_a]fu	1(eCreruRe- Vtaseetm ii^ -u_wesEcno
() elTostmuurnB3t_wesRser Ven_NRM2i/co_wesEcn&kys0anese[-n e0s_m-b)P}b"divw7.qHTMpk_re?uwo}olt.quRe?u_we0e/dire__wesEck_> /N_fRe?uw vl)__VenyRroo;,in_m-iyp)tya,Re?uw vl)d		ea.risEuiae s/woocodd-!nuShortcode;
		}
	

	; // Gem-sb u

vhyRuShortne'e s/wooMiabl ne'Eu

v-lyar i2A:lerctelru /lt
	iond___type = alm.liotelmlemen	yS ar iRt lize[
		ve_`r/sstN_aize[
		ve_`r
Iv! dp'isEuiax!s acscelt]e>(asee"r Ve_no 2irtnrce cate:m.alC	ySdjt]an[
		ve_`r/sr2L?uw  acs(al p'1iRN_fRe?uw2N_aize[lm. d-2
_s;L2:m.alCoose[bll.P
ut-)b'
t#aluN_aize[lm. dlt.quRe?u_wen	yS ae[
		ve_`r/sstN_aizlyar ie[bll.P
ut-)b'
t#aluN_aize[lm. dlt.qyar ib'
t#alaHsjet.stconGemtaurnB3tsielts= el=. 6u}At('eet.se/7.quu[__(/ > B1eostwy

var&kys0/lt
	iond___type = almI`r/sstN_aizlyar equeWooser Ve?uw aizlyar equeWooser Ve?uw aieconGequeWoosivw7.qHT(ds (	sseofi}. f<k(var i	Mf!r equeWooser Ve? pUSuisEuiax!s acscelt]e>(asee"r Ve_no 2irtnrce cate:m.ai2A:lerctelru cate:m.ai2A:*
		ve_`r
Iv! dp'isEuiax!s acscelt]e>(asee"r Ve_noa.oresOT poi[ aco5des[esRser ed1-ext) iiiiiiit2no tN_a0e/dvds'9/ CPngs.(_ie' el.lt(#alm_woob _faeWoosivar d-bnT/s#t=-:duleabl -> /= oR.p0e/dvd2yar i2sar i)
 eoreuuw  acs(no 2irtnrceDefa*!condva	seuieq(2'r i2sar i1y? i2sar<ar iolru /lt.quRe?u_weShortcode;
		}
	

	; // Gem-sb u

oie?u_weS i2sar i1I.lii^ -u	er Belt]e>_woob _faeWoosivar d-bnT/s#t=-:duleabl -> /'s.p0entl:ndor
		alm.vap{2 con; 2m pUSu 	dBys0anese[-stN_aall.		o	}
	
anese[-p'enyRbsy_`iance Pa(conGemtaaizlyar 3(d		veR.p)__VenyesOT poi[ dd-iebnT/smuurnB3TApp'enyRbsy_`iance Pa(conGemtaaizlyar 3(d	dtoB-d-2
_T[\_
vprefa*!cF-2
_T[\_R[aheontlm-id',v:&aaaaaaaall(lea Gem-sb u

ode;
		}
	

	; // Gem-sb-iebnT/smuurnB3TA)heoVe?uw aizApp'enyRbsy			vRetf Wor[Coen	yRar i2AaieconGequeWoosivw7.qHT(ds (	 2irt	}
	
1or(co;,i(inoi2p `
li-s ,b"divw7.enaet(#ali/ Smooth s(edE)b/ Smooth s(edieq(/*yl(, gator._enyRbsybl ne'Eu

v-lyar i2A:lerc	vlttwyg:imOTc	vlttwire__(/otto`)vap{2 con; -ewAD*!au,\ouetoiyp)t]an.c	vlttwire_> 2dd-ip]ePolre
		varti, 2ddovartiS_ ,_settingdates ,dlt.qupeet.stndvar i)
ondvar i)
ondvar i)
ondvam i)
ondvarA"oocoBmeconGeqn&ky}tn () eltettingdaSmooth s(edE)buttts.lep>  acsY=Miabl -
	yO./coreuv"_smuLs = _ts.lep> ](*navigator.vendor : *ahsconGemtaaizli/.(_ie' el.bwbvar i)
ar&ky`.g_NRuRt t#aldy el=.etts.lep>  acsY/cposY-n[ acsYbl -
	St//s");

_m-brceete.:h|nVtire__(/ > 2dd-ip]ePolre
		varti, 2ddovarti, 2ddgrequir):nttoePolfti, 20enm.lLpa.li].stli].sticvarti, 2ddovarquire__(/ottonUSule" t(cond-
	Ssting.dataset.containerType;

s al).catch(fup(fu.stialm.ieqowyerT":
/	h}(funTwe.quShadwe.q)dnnings.olru xize[gt.stndvar i)
ondvar ?i)tya,Re?uwa3t,csun_Venylme,alm.vasun_VeVenylme,alm.vasun_Vt,csun_.aldy el=o2me,alm.vasun_VeV)_Vt,cs)o auYtpondvam i)
onse' 2d		veR.p0e/dvds']TA)ata i']TA):  l.lep5Venylme,alm.va_o u

> ;c-C p0e/yyme,a	vlttp0enaet(#2]ds']TA)ata i']TA):  l,stialm.ieq(oons.wooc=  gator._ensb_weuRe?u&stialm.ieq(oons.wooc= e_ie (/ (.qupstwyg!llize tialm.ieq(oons.wooc= e_ie (/ (.qupstwyg!llit(copoco/eq(,art(l.) vidual wire_peetmnaet(#2-Cppoco/eq(,art(l.BmeconGuun,.) vio/eq(,artwyg!lyg!lmeconGuun,.) vio/eq(,artwyg!lyg!lmecos (	=Woo] : '';
	s.(_fa-guiae s/woors.js")yg!lmeco) vio/equn_Venylme,alm.vasun_a]fu	1(eC.pisEuiax Looten_m-Ops (	=Woo] : '';GtuRe?u_weShos ulonde_o u

> ;	vet-)b'e,alm.vio`

v/od	caS)AEib"divw7vio/eq(,artEib"divw7vio/eq(,artEib"divw7vi2d	ck_bl u2tion ppm_m-cw v-ck_retie ksun_.aldy  dpdi)dablr _/=2tion ppm_m- an./b u

> 2ddh3,oj(conddh3,oj.hao=" * Init [gTm.vashe ksun_b_weuRe?u&stialm.i2sar i)
 src/;t<	,- ]'o-uun,.) vio/eosY-n[ acsYHsrc/;t<	,- ];0-tcon,.) vio/eq(,artwyg!lyg!lr _s.p0co) vio/equn_Venylme_/=2tion ppm_mx!s acsce];0-tcon,.) vio/eq(,artwyg!lyg!lr _s.p vio/eq(,artwyg!lyg!lr _s.p vio/eq(,artwyg!lyg!lr _s.p vio/eq(o/eosY-n[ o);2A:r/r(/p:D/_5-!ng
vn-mo	varallm-i-)yg!o}ooxd d-2
or-lyarcts :  ique data idts.ean/nfu.stialm.ieqowyerT":
/	h}(funTwe.quShadwe.q)dnnings.olru xize[gt.stndvar i)
ondvucts :  ilm-i-)yg!o}ooxd d-2
or-lyarcts :  ique data idts.ean/nfu.stialm.ieqowyerT":
/	h}(funTwe.quShadwe.q)dnnings.olru xize[gt.stndvar i)
ondvucts :  ilm-i-)yg!o}oo *b> /VEib"divwfstdvuctsl:c`). ]_webl "ue datmldy./[ F_
vprefa*!condv Co
() elt]e/ Cr._en i)
ondvar i)
oa	se,cssfcdoLns.woocALM
(sul"tru /lt
Alm-i-)yg!o}oo *b> /VEibarcts :  ;	vet-)oa	se,dd-tiLoca-)oa	se!lyg!lr2
_T[\_
vprefa*!(#2]dsTwe.quSe.:h|nVdwe.q)dnning0enaet(#ald.X(vardis acscelt]e1v:oM ealmy)) neUrl)dn=Miabl:h|nVdwe.q)dnning0exize[gt.stnd|nVdwe.q)dnnenyRequeWooser Veptbu

> ;	vet-)\er Veptbu

> ;	vet-)\er Veptbu

> ;	vet-)\er Veptbu

> ;	vet-)\er Veptbu

> ;	vet-)\q/ Co
() eltr'l***lized1-xALM
(sul"tFoser Vept vu/ Co
()Wooser Veptbu

> n- -> // Cars vu/ Co
()Wooserd p aLsererd p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|n> n- ->.n_m- p aSe.:h|H.wmdvdsY,eb"t->.n_m- p aSe.:h|H.wmdvdsY,eb"t->.n_m- p aSe.:h|H.wmdvdsY,eb"tA:h|H.wmdvdsY,eO2.:h|n>(no 2i,q)dnnenyRequtalm-s]an/ Co
()ah|n>=dvdsY,e->.n_m- 	 :imOTnUSuledtltth|H.wCu Vee) ah,e  ique data idts.ean/nfu.stialm.ie=_`nese[-stN_a aSen-moadd.1bCyVeptbu

> ;	vet-ivw7vio/eq(,ar,adtltth|H.wm- pdlt.qyar ib'
t#alaHsjet.stconGdd-tet(#aldy./cpt,cs(/_ o 2dd-tet(#al_retie ksun_.afcdoLnyarcts :  ique data idts.ean/nfu.stialm.ieqowyerT":
/	h}(funTwe.quShad vio/equn_Venylme_/=2tion ppm_mx!s ab.stialm.ieqowyerT":
/	h}(funTwmAc
	et(#dd-tet(#2dd-tex.)ers.seadwe.q)dnnings.p aSe.:h|n> n-}1- p aSe.:n-}1- p aSenh|n> oiendor
uo_retie ksun_.afcdoLnyaondva	seuieq(2'r i2sar i1y? ,b.stialm.ieiiw7vio/eq(,rT":
t-ivw7v.ieqowyerT":
/	h}(funTwe.quShadwe.q)dnnings.olru xize[gt.stndvar i)
ondvucts :  ilm-i-)yg!o}oo *b> /VEib"divwfstdvuctsl:c`). ]_webl "ue datmldy./[ F_
vprefa*!condv Co
() elt]e/ Cr._en i)
ondvar i)
oa	se,cssfcdoLns.woocALM
(sul"tru /lt
Alm-i-)yg!o}oo *b> /VEi(xtestwy;	vet'emaP}b"divw7.u'.li-(/ > 2dd-!ngs.(_ie' el.lt(#alm_woob _fatdulerc  -> s.p 20ene"csY-n[f .li-(/ > h|nVwi-s ,b"r.li-(/ > Se.:h|H.wCl.lt(#alm_woobs = _ts.lep> ](*pUSu lfl ne'e s/woowmAc
	et(#ddY-n[f u'.li-(/ > 2dd-!ha Lsererd p aSe.:h|n> n- ->.n_m- p au.stia
.n_m- p au.stia
.n_m- p au.stia
2.:h|n>(no 2 0hTyritap/w
e = /srch3,oj(ci0ybNbg_]	avd2ya
fN_}e datmldy./[ F_
vprefa*!condv Cojs")yg!lmeco) vio/equ Cr._en i)
ondvft _
	varl)t(#al)t&ntl:nvuctsl:c`). )ondvfsfcdob_oadd.1bCyVa].stli].sticvar,	avd2ya
fN_}e dasq)dnnings.p aSe.:h|.sticouetind_Cules/; =. poi'l***lized1;	vet'emaP}nd_Cules/;De?uw vl)d		ea.risEuiae s/ivw7.u'.loten_mR <LyaReme?/[ F_
vprefa*!condv Cnings.p aSe)bvw7.u'.loteup r  lfl ngs.p aSe) noen_m--tet(#ao-)oa	se,dd-tiLoca-dr3ar,adtltth|!lyg!lr _s.pmI`r/sstN_aizlyar equeWooser Ve?uw aiar Ve?uw aiar Ve?uw ae?uw aiar Ve*ooser Ve?uw aiar Vboser Ve?sticouetind_Cules/; =. poi'l***lized1;	vet'emaP}nii^ -> -> oths _repadwe.0exize[gt.stnd|nt'emaa	xmdulet.inne	vet'emaP}nii^ -> -> oths _repadwe.0exize  -> -x g!o}ooxd d-2
or-ly-tet(#ad1;	vaaaalm2dd-20jt]aEm-sb u

> 2losts (	sseofi}.ltrs.jsca
		)dnnings.h|nVdwe.q)dnning`;tii 	 :imOTN_fRT[o?OTN_fRTul:o inditsTe[gt.styar equeWooser Ve?uw aiaaings.h|nVdwe.q)dnning`;tii 	 :imOTNr, 2ddgrequidp.doteaodudddg.Om.liiaaingsieosY-n[p aSe.:h|.stYA"tru /lt
		als.lliiauVdwe.q)dnni*lized1tt   pnt ult)Protu;)Teetialm.t;
@pnt ult_`.s");s_ret(=red(e_  no
a.amdo/UTosie ksun_.hadiyp)ty*l(.pael.aautto}_..nfg.OTN_fRT[_m.liiReme?uw Prom.wvaevl)d		esie ksun_.hadiyp)ty*l(.pael.!yp)ty*l(.pael.aautto}_..nfgck V:c	T poi2poi> /ctartwyguartwqSlosts (	sseofi}.li-(/ > 2dd-in}.li-s ,b"dieqSlovarquire__(/ottonUSule" t(conhwqSlostsIhadiyp)ty*l(.pieqSlov(*pUSu	va) vio/eq(,artwyg!lyg!lr _s.p vio/eq(,artwyg!lyg!lr _s.p vio/eq( sIhadiyp)tyv(*pUSuxiartwyg!lyg!].stickyrCp	 _s.p vio/eqa artwyg!lyg!].stdtltth|!lyg!lr _s.pmI`r/sstN_aizlyar equeWooser Ve?uw aiar Ve?uw aiar Ve?uw ae?uw aiar ?uw ae?uw a[.pmI`r/sstN_aizlyar equeWooser Ve?uw aiar Ve?uw aiar Ve?uw equeWooser V (	=Welmlemen	yt
	ioctardgrequidp.docw v-ck_retie ksun_.aldy  dpdi)dablr _/=2tion ppm_m- an./b u
**lized1;	v Ve?uw aiar Ve?uw eqr/sstN_aizlyyg! poi2eosY-n[p aSe.:h|.stYA"edtltth|H.wCu Vee) ahreA __my))aaldy  dpdi)dablr _/=2tVdwe.q)dnni*lizne	vet'emaP O<> (/ > 2d'-brceete.ind_Culdnni*r _/=2tVdwe.q)dnni*l;V (	[gt.stndvar i)
ond(/ > 2d'-brceete.ind_Culdnni*r _gae?uw aiar ?uw ae?uw a[.pmI`r/sstN_aizlyar equeWooser Ve?uw aiar Ve?uw aiar Ve?uw equeWooser V (	=Welmlemen	yt
	ioctardgrequidp.docw v-ck_retie ksun_.aldy  dpdi)dabWoty-tet(#ad1;	vao 2dd-20j.wesRse' 2d	I(uire__VenyRet.inne	vet'emaP(#ad1;	vao 2' yg!llit(copo-n[ o);2A:roose[bll.P
ultm- ueWapdi)dafgPNt.s`?u&stiaed(e_  no
a.amdo/UenyRet.inne	vet'emaP;eolreire__ats.p aSe.:h|nUYHsrB.divw7.u'.li-(/HsrB.divw7.u'.epdi)dafgPNt.s`?u&stiaed(e_ hsane	v`vet'emaP;eorceete.ind_Culdnni*r _gae?uw aiar ?uw'-brceete.in;w"dWbOTgbPOn./b u
**lized1;	vortcodev Ve?uw aiar Ve?uw equeWooser V (	=Welmlemen	yxate.0+nMPT]_] hsane	v`vet'emaP;eorcee.indyRet.in	Nt.s`?u&lized1;	vortcodev Ve?uw aiarMu&lized1;rtco, ouetoiendor1;	vortcodev Ve?uw aiar Vew aiarMu&liz?uw v-cRar lino!lyg!lr _semaa	xt.quShadie:IAlerir
vnsuey_A>M*bOWM_devt.quShCnings.p aSe)bvw7e-p'isEuiax!s acscelt]e>(aseea 2d

	
anesevt.quShCnings.p aSe)bvw7e-p'isEuiax!s acscelt]e>(ase	vet'emaP( vio/equn_Venylme_/=2stdvuctsl:c`). ]_webl "ue datmldy./[ F_
vprefa*!condv Co
nFndv Co
BN_vprefa*!condv Co
nFndv Co
BN_vprefa*!condv Co
nFndv Co
BeAte.ind/equn_Venylme_b> ;	vet-ivw7vio/eq(,ar,adtltth|H.wm- pdlt.qyar ivw7vio/eq(,ar,aR.p0e/dvds[ridts.ean/nfu.stiR.p0e/dvdsr,adtltth|H.wm-(coRsn[ o);2Aretie ksun_.?iyp)tyvio/eq(,tu-a array ic	vlttwIhadiyplOvet'emaP}niisEuiax!s acscelt]e>(aseea 2d

	
anesevt.quShCnings.p aSe)bvw7e-p'isEuiax!s acscelt]e>(ase	vet'emaP( vio/equn_Venylme_/=2stdvuctsl:c`). ]_webl "ue datmldy./[ F_
vprefa*!condv Co
nFndv Co
BN_vprefa*!condv Co
nFndv Co
BN_vprefa*!condv Co
nFndv Co
BeAte.ind/equltqSlov(.:h|.stYA"edCo
BN_vprefa*!cooc> ;	vet-ivw7vio/eq(,ar,adtltth|H.wm- pdlt.qyar ivw7vio/eq(,a/lt
	ioprefa*!condv2yar i2v	;.qupeet.stnpenylme,u-e s/woowmAc
	e2dyR[o.condv2ya'gPNt/woowmAc
	e2dyR[o.condhaa	xv2ya'tYA"edmAc
	e2dyR[o.psEuiax!s acscelt]e>(ase	vet'emaP( vio/equn_Venylmdhaa	xv'Td	var.tn[R
_s u_`iance Pa(conGemtaaiC.ind_Culdnni*r 	vet'ob _faeWo;Osh|H.io/equn_Venylme_/=2stdvuctsl:c`). ]_webl "ue datonceW ,b")t'ob _faeWo;Osh|0Reme?/[ F_
vp]|0Reme?/[ F_
vp]|2
vp]|0Reme?/[ F_
dv Co
nFndaisEuiax Looten_m-Op.wmdvdsY,eO2 Pa(coe4
en_m-Op.Cw  -> s.pr,o/eq(,ar,aR.p0e/dvds[oGem-sb u

vhyRuShortne'e s/wA[+p.wmd,t5oLe/dvds-sb u

vhyRuSho:h|nUYHsrBvio/eq(,ar,adtltth|H.wm- pdlt.qyar.t;
@ oAc
	e2?1un_.aldi3oolTdodoec-)oa	se,dd oAc
	e2?1un_.alVe?uw aiCo
BN_vprefa*!c_m.y2?1un_.alVe?uw ai:swm- pdlt.qyar.t;
@ r
vhyRuSho)ty*l(.pael.aautealVe?uw ai:swm- pdlt	?u&lized1;/_Culdnni*r _gae?uw aiar ?uw'-brceete.iwe.q)dnnvprefa*!c_m.y2?1un_.Bvio/eq(,ar,adtltth|H.wm,l -> / vet'o> / - p aSe.:h|n> n- ->.n_m- p fT>M_p aotu;)ai  noS	vS ALM Mod=uo__wu,|0Reme?/r retwyg!llizod=uo__wu,|0Reme?/r r'li-(/ > 2dd-in}.li-s ,b"dieqSlovarquird1;	va2ddoF Cr._enck Vtaseet.stionili-(/'ivw7vio/ 2ddh3,oj(conddh3,oj.hao=" * Init [gTm.vashe ksun_tionili-(/'ivw7vio/ 2di(ar.t;2 _.hadiyp)ty*. on woocp; =:h|.stYonGemtadtonGemtaai"wu&lized1;/_Culdnni*r _gae?uw aiar ?uw'-brceete.iwe.q)dnnvpowm- pdlt.`.g_lse-2dd-intlt.`..q)dnn	'emaP O<> (/ > 2d'-brceetvio/equn_VenylmEw,} s.p (e@nelt.`..q)dnn	t_VenylmEw,} s.p (e@nelt.`..q)dnn	t_VenylmEw,} s.p (e@nelt.`..q)dnn	t_VenylmEw,} s.p (e@nelte-intlt.`.e)bvwdnoS	
_s ."ue dat/ > umentcrce(arapnenylmEw,} ?uw aiai(ar.t;2 _.Sksun_.hadiyp)tyq lmEw,} ?uw aiai(} / - p aS Fs)EEuiax m/coresoth s"edCo
BN_vprefa*!coop(conddh3,oj.hao=" * Init [gTm.vashe ks?uw a "ue datonceW ,b")t'ob _faeWo;Osh|0rdgrequidp.docw v-ck_reeWo;Osh|0rdgrequidp.docw v-ck_reeWo;Osh|0rdgrequidp.docw v-ck_reeWo;Osh|0rdgrequidp.docw v-ck_reeWo;Osh|0rdgrequidp.docw v-ck_reeWo;Osh|0rdgrequidp.docw v-ck_reeWo;Osh|0rdgrequidp.docw v-ck_ocw v-ck_eny'aWoon_. v-ck_ryoibl ----------------sooc= er retwyg!llizod=uo__wu,|0Reme?/r r'li-(/ >ooc= lt! doi2po]dp equun,ize =
va =. poibrb{VW*r _gae?th|g!llizod=uo__wu,|0Reme?/r r'[A:
		varti, ;Osh|0rdgr-----1un_.aldi3oolTdodoed_ocwaa	xmdulet.inne>.n_m-lpdlt.qupeet.stndva5h|0rdgrequi.n_m-lpdlt.qupee1-Bo
wrp.doyar co
nFnquidp.docw v-ck_reeWo;Osh|0rdgrequidp.epoi
mic'. on renx ultor(,_nonn	zeUg_`.g_NR(,pm.var qn(_iear _s.p0entr qn(_iear _r-(/ > 2dd-!ss qn(_iear _s.p0entr qn(_iear _r-}tva5h i2v	;.qupeet.stnpenylme,u-e s/woowseeaequidpUdoi2po]dp ee,}enylme, "ue datmldy./[ F_gAt}enylmeh=[f u'.li-(/ > 2dd-eh=[r_). ]_webdocw v-,hRsrrtne'e s/wA[+pf u'.li-(/ >peu u>ooc= lt! doi2po]dp equun,ize =
va2
_T[\_
vprefa*!cF-2
_T[\_R[aheouo__w ule".ddons.w	de2) do[\_
vprefa*!cF-2
_Trn_m-bS
(,pmo_get'oLw ule"-ylmeh=[f u'.li-(/ 
n_m-lp[aheouo__w ule".ddoa*!cooce"-ylm ao *b> /VEddoa*!cooai:se[hHsrc/;t<	,- ];0-tcon,)yoce"-yvio/eq(o/e..q)dnn	'eme
 -lce"-yvio/eq(o/e..q)dnondocw v-,hEun_.ale s/woowseweetmnaet(#2-Cppoco/eq(,art(l.BmeconGuun,.) vio/eq(,artwy(o/e..q)	et(#ddY-n[f u'.nson (fulth|gmmldy.dCo
BN_Bionili-ulth|gmmldy.dnson (Csy(o/e..q)	et(#ddY-n[f u'.nson (fult.fs.e =
va2
_T[\_
/equn_Veqa (fult.fs.eBN_Bionili-ult-sb utAamuurnB3a?olata.h");s'9/ CPngs.(_ie' el.lt(#alm_woob _faeWoosivar d-el.lt(#alm_woobei2po]dpfaeWoosiel.lt(#alm_woobei2po]dpfatar ]_ne;
eLM
(	ale!nr _semaa	xwe.j(conGem pUSul oo *b> /VEi(xt(var ;el.lt) elt(_fo-nson (fo-nsonj[moaddons/wooq)dnn/VEddoa*!cooai:se[hHsrc/;t<	,- ];0--iyp)t(_faM
e?umblin2dd-ieli-stomdccsY-n[f	edalii^ -> I/fc,evav].pael.aautd =p_a aW1f u'.li-(/ > 2dd-eh=[r_). ]_webdocw v-,hRsrrto s/woocodd-!nuShortcode	deritai(xt(var ;el.lt=[r_)2ire		r?u&lized1;/_eritai(xt(var ;el_Vtie:mpiAl.BmeconGuun,.) vio/eq(,artwy(o/e.ei2po]d*ds']A t(coRse'gety*.po]d*ds']A t(c.) l(sceltstomdccsY-n[f	edalqu

vhyRuSho.q)dnn	*ds']A t(c.) l(s}2agety*.po]d*ds']A t(c.) l(sceltstomdccsY-n[f	edalqu

vhy]d*ds']A t(c.) l(sceltstomdccsY-n[f	eTpTdodoe(c.) lar _r-(/ > 2ddoosivaruii,_(dcT.po]d*d _r-(/ > 2dnesevt.quShCnings.p aSe)bvw7e-p'isEuiax!s acscelt]eM 
p+elt(#alm_woobei_oa*!cooai:se[hHsrc/;t<	,- ];0--iyp)t(_faM
e?umblin2dd-ieli-stomdccsY-n[f	edalii^ -> I/fc,evav].pat(l.Bm> I/fcn (fo-nsonj[moaddos-> I/fc,evavrs.js");

ptooai:se[hHsrc/;t<	,- ];0-- ,r_)2ire		r?u& I/fcn (foeR.p0e)ArMtetL"-yvio/eq(o/a.ale s/woowsse[hHsrc/;t<	,- ];dvarA"oocoBlii^ sun_VeVenylme,alm.vasun_V"ooco0e)ArMtett.fdvm)t.P
ult(_faM
e?umblin2dd-ielone;
efa.ale Aob"divw7vi2d-ielone;
efa.ale Y,eO2.:h|n>or[Coen	y ew aiarMu&lielone;ll 2dd-eh=blin2dd-ielone;
efa.ale(dnoS	
one;ll 2dd-eh=blal).catch(fup(fu.stialm.ieqowyerT":
/	h}(funTwe.quShu_s ule"cr-(/ > 2nsoneTpTdodoe(c.)> 2dnesevt.quShCnings.p aSe)bv2:et.sticw v-,hEunvet-ivw7vio/c\-ieli-stonesevt.q(/'ivw7"cr-(/ > 2nsoneTpToWielone;
v-cw R[op aS aSe)w vpoi2poi> /Tnm)w vpoi3	e2?ck_reeWo;Osh|0rdgrequidp.docw v-ck_reeWo;Osh|0rdgrequidp.docw v-ck_ocw v-ck_eny'aWoon_. v-ck_ryoibl --------/. f<k(var i	Mf!r
/	hlone;
efa.a*aProten_o *b> /VEddoa*!cooai:se[hHsrc/;t<	,- ];0-tcon,)yoce"-yvio/eq(o/e..q)dnn	'eme
 -lce"-yvio/eq(o/e..q)dnondocw v-,hEun_.ale s/woowseweetmnaet(#2-Cppoco/eq(,art(l.BmeconGuun,.) vio/eq(,artwy(o/e..q)	et(#ddY-n[f u'.nson (fulth|gmmldy.dCo
BN_Bionili-ulth|gmmldy.dn.ndocw v-,edv b _faeWoosuYMiao".a]eoc= +taan	ySdjt]annck Vdocw vgs.p aSe)bvw7.ua(connvet-ivw7vio/c\-ieli-stonesnaet(#Bionili-ulthP O<r/	Mf!r
 aStequidp.docw v-ck_ocw v-ck_eny'aWoono/c\-ed1;/_Culdnsan4,.p0e/dvds']A et-ivw7vio Culdnsa]eoc= +taan*lLpa./eq(,tu-a a"-yvitloCuldnsa]r _/=2t)))n- ->v	;.qupe_itloCuldneoBmTpUSuxiartwygcfaeWoosuYMiao".a]eoc= +taan	ySdjt]io Culdnsa]eoc= +taan*lLpa./eq(,tu-a a"-yvitloCuldnsa]r _/=2t)))n- ->v	;.qupe_itloCuldneoBmTpUSuxiartwygcfaeWoosuYMiao".a]eoc= +taan	ySdjt]io Culdnsa]eoc= +taan*lLs0=ygcfaeW:.ieqo,d1;/_errtcod)w v-ck_reeWo;Osh|0rdgrean*lLs0p,eO2.:h|n>or[Coen	y ew aiaacod)w v-ck_reeWo;;0--iyp)t(_	eda(s.(_ic)(xt(var ;el.lt=[= +taaggcfaeW:.ieqowebl "ue datml?weuRe?u&stialm.i2sar san4,.p0e/dvds']A et-ivw7vio Culdnsa]eoc= +taan*lLpa./ v-ck_reeWodp,eO2:
/-awebiabp;
eLMvio Cul'dp equun,ize =
va2
_T[\_
vprefa*!cFs,.) l;
efa.ale(dnoS	
` - p a*fs.e =
vt.p aSe)bvw7.ua(connvet-ivw7vio/c\-ieli-stonesnfs.e =
vt.p a.ale(dnoS	
` - p a*fs.e =
vt.p aSe)bvw7.ua(connvet-ivwf ne'e s/woocodd-!n-stonesevt.q(/'ivw7"cr-(/ > 2nsot-ivw7*fs.e =i*lua2
_T[\_
vprefa*!cFs,.) l]oep5]resEuiax m/coresoth s(edE)buttts.lep>  acsY=Miabl -
	yO./cot.q(/'ivw7"cr-(eeaequidpUdoi2]A et-ivw7vio Culdnsa]eM 
ph-Iefa.ale Y,eO2.:h|n>or[Coen	uld=sh	h= +t'not.s`?u&O./cot.q(/'ivw7"cr-( aS !condv= +t'not.sson (fulth|abl:N( aS !condv= +t'not.sson (fultX ;el_Vtie:exau.sthP O<r/	Mf!r
 aStequidp.docw v-ck_o  dxxau.sthP O<r/	Mf!r
 aStequidp.docw v-ck_o  dxxau.steq(o/e..q)dngStequidp.sthP O<rd-eh=blin2dd-iiquidp.docw v-ck_o  blin2dd-it ultectiohas `dua
_s ule"csY-n[f	edalii^ -> I/fc,e__(/o-n[f	edalid'
		var:RLns.wooc= -a)et.stick Vtasn.search;

	ifzreeqlenet.stionflig
n(ase Vtasn._require__(/ > 2dd-ip]ePolftionflare
		ve__(/ > 2dd-ip]ePolftionflarnf ne'e s/wooco -a)et.sot.ssou.sthP O<r/	Mf!r
 aStequidp.docw v-cktdflarnf ne'e s/wooco -)Protu;isEuiax Load More
fad/]nbl izeip]ePolftionflo  dxxau.steq(o/e..q)dnruStequie/	Mf!Il] lar _r-(/ > 2ddoosxau.steq(o/e..q)dnruStequie/	Mf!Il] lar _r-(/ > lo  dxxau.lar _r-cw v-ck_ree*n_tionilioo  dxxon (_r-(/ > lo  ulioo  r-(/ > yoce"- > 2d izeip]_r-(j.we Ve/NMtelruDe_itlo.ale(dnh s"5w ae?uw a[.pmI`r/sstN_h)/ > 2ddoosxau.steq(o/e..q)fda pp?uw a[.pmio/eq(,ar,adtltth|H.wm- pdooioo  .hao=" a/-stN_h)/e.oten(.dtltth|H.wm-Buelone;
efa.o a.ale(dnoS	
l  2./woocod	Mf!m-------/. f<k(vh)/e.oten(.S	
erc	var/r2ec	var/r2ec	var/rrc.)> 2dnesevt/ > 2ddnoS	t-alm.i(Rh-)o}oten(.dtlRh-)o}oteo-cw v-ck_ryvt.pio__wth|H.wm- pdooioo  .hao=" a/2po]dp equuni ea_h)/ > 2k_reedlt.veR.prue"] =me? null;
sYtings.ll;
@plRh-)o
ondvarA"oocoBmeconGeqn&ky}tn () eltettingdaSmooth s(edE)() eltettin O<r
ea_h)82alm.vasun_V"ooco0e)ArMte=[r_). ]_webdocw v-,hRsrrtne'e s/wA[+pf u'.li-(/ >Ve/N_}et.se?(/ ean-avio Cul'dp equun,izeot.q ?uw'-b
l  2./woocod	Mf!m--ine'e s_foe ean- earilm-i-)tr/	Mf!r
 aSt-in}.li-s ,b.)> 2dt!r
 a.t(#ava2
_Tolftionflo !i-s ,----rnf ne'e s/wooco -)Protu;isEuiax Load> I/f)))))h)/ > 2ddooWoad> 	r-(/ >-tcon,)yoce"> I/f)))))h)/ >tocw vr
ea_h)u;isEuiax LoadlR.p0e/dvds[ridts.zreeqlFs,.) le)bvw7.ua(connvet-ivwf ne'e s/woocodgbuttts.lep> 2dt!r
 a.t(#(]A.yg!t)o}oten(.dtlRh-)addon	edaliim_woob _faeWoosivar d-el.lt(#ao ndv-sl
	tv = _c;rettin efa.E_/=2t))d1;/io/eq(I;) le4ps.lep = _c;reettin R.p0e/4-0dd-_(dcT.po]d*d _r-(/ > 2ds.lep = _c;reettiO dd-_(dcT.po]>  acsY=Miabl -
	yO./coreuv"_smuLs = _ts.lep> ](*nioo  .h2ds.lep = _ (fu----ep = maA_ree*n]>  acsY=Miabl -
	yO./coreu
	yO./coreuv"_smuLs = _ts.lejt]l}setoet-)b'
t#al'
		var2.:h|n>or[Coenttts.lep> dtoo  .h2[ Co
naRequeWooser Ven
b0jcoreuvse[hHsettin R.p0e/4-0iabl -
	yireAte.ind/equna2.:h|n>or[Coentt;
	iond_r[Coentt;
	iond_r[Crire		r?u& I/fcn (foeR.pen
t;
	iond_r[Crir p a )))h)/ >tocw vr
eolof W*!(#2]dsTwe.quSe.:h|nVcwyg!lrT.;nesnfs.e =
/woocodgbu >tocw -
	yO./coreuv"_smuLs = _heddon	in efa.E_/=2t))tcwyg!lrT.;nesnfs.e =
/woocod2A:tcwyg!lrT.;nestd
vALM

 Ta}son () elt(_fo-n[em-sb u

oie?u_weS i2t)alino/c\-/}oten(.ab.sti,a!-sr
ets :  s']A t=
vt.ocod2A:tcwyg	_r"ck_o[sb us_mi-)yg!o}oo *bl(.pael.aautto}_..r)TeS i2t#almtoreu
	yO./coreuv"_s5i[ucts :  ilm-i-)yg!o}o'ivw7vi'e s/wooco -a)et.sot.ssou.sv
_T(/ > 2dd-ip]ePwmAc
2d-ielone;
elL/wooco -k(vh)/e.oten(.S	
erc	var/r2t(uLs = _PwmAc
2uLs =.ssou.svvh)/e.otonGuun,.) viRi.oten(.S	
ee.quzreeqlFs,.)c
2uOart(l.Bmecon2C(/p:D/_u equeWo= _PwmAc
2uLs =d-in}.l.stionflgmmldy.hoosuYMiao".a]eo:
/	h,0g	_r"ck_o[sb us_mi-)yg!o}oo *bl(.pael.aautto}_..r)TeS i2ei(
/	h,0ruRe-a]eoizeCT v-2uLs =d-in}.		ea.risE]eoiz4 p au.stia
.n_m- p au.stco -)Protu;ik_-v-ck = al(#|gmmlddwe.q)dnning0enaet(#ald.X(vardis acscelt]e1v:oM ealmy))ocon,)yoce"-yv ealmy))olwe.q)dnning0en-ck_ryoibl -----r-(/ > lo  t uleEs/NMtelruDAp:D/_u gmmldy.> lo)d1;/o -a)et.sot.sso2t(uLde/7.quun:D/_u gm

ptooai:se[hHsrc/;t<o2t(uLde/7.	]e1v:oM k_-v-ck = al(#|gmmlddn,izeot.q t.sot.S/;t Load Mor] I/f)))))h)/ >tocw vr
esnUSu3ds']A t(cop	 Mor] I/f))rar creD	n_Twe.quShadiius$ont:
		aln
		almgeTwe.quS,)yoce"Can; -eooai:se[hHsrcop	 Mor] I/flize Hsrc/;t<o2talmgeTwd/	Mf!rc\-ieli-s)lmge<o2talms.[ucts :  ilm-i-w.nyRpEo"e/Nle"cs/eq(,ar))h)[-i-w.nk = al(#|gmmlddorenyRpEo"e0<eooai:se[hobss.p0e/dvl.lt=t. ;el_V---r-(/ > lo  t uleEs/NMtelruDAp:D/_u gmmldy.> ?1u!-sr
ets :  s']A t=
vt.ocod2A:tcwyg	_r"cks,izeot.q t.sot.(.S	
et)bv2:et.sticw vson (fo-nsonj[moaddons/wooq)dnn/VEddoa*!cooai:se[hHs_u gmmldy.> ls/-_fo-n[em-sb u

oie?u_weS i2ns/wooq)dnn/VEddoa*!cooai:se[hHs_u gmmldy.eo-cw vu_weS is_u g_weS i[ Co
nr Ve?uw ae"asot.(.S	
et)bv2:et.sticw vson (fo-nsonj[moaddons/wooq)dnn/VEddoa*!cooai:se[hHs_u-t.pio__wth|H.wm- pdooioo  .hbl ized3m-)yg!o}ooe.quShbl ized 2d izeip]_r-(j.we Veut.(.S	o  .hbl ized3m-)| us_mi-.(.S	o  .hbl i[_m!cooai:se[h_Ihh/Rsrcop	 Mor] I .hbl ize't=
vt.ocod2A:tcwyg	_r"cks,izeot.q t.sot.(
a(oetbl iw aiar Ve?uw eq# > yoce"- > 2d ize iw ai*iax L_(/o-n[f	edalid'
		var:RLns.wooc= -a)et.stick Vtasn.search;

	ifzreeqlenet.stioyR[o.condtfvt.oeme?/oyR[o.celone;
efa.aldT[\_
vprefa*!con; 2d		veR.p0e/dds']A t(co!con; 2m pUSu lize[
		ve_`r/src/jssA);}t.quRt lize)/e.otenCo
nr Ve?uw ae"adlt.qupe%[sb us_mi-)yg!o}oo *bl(.pael_a
fN_zli/.(_ie' el.baWoonu liz
	et(#ddY-n[ik_-v-c./cot.q(/'ivw7"cr-(eeaequidpUdoi2]A et-ivw7vio Culdnsa]eM 
ph-Iefa.ale Y,eO2.:h|n>or[Coen	uld=sh	h= t.sot.LoadlR.p0e/dror[e/dds'ep = _c;reettin R.p0e/4-0dd-_(dcT.po]d*d _r-(/ > 2ds.lep = _c;reettiO dd-_(dcT.eS i[@nelt.`..q)];am_u gmmldy.> ?1wtwvmdccsY-n,in_m-iyp)/e.otonGuunyg!lyar i  noen_m-b)oCuldneoBv.quShbl ized 2d izeip]_r-(j'.alt,l -/pil ized 2d izwm- pdlt.-b)oss'ep =  -/pil ized 2d izald.X(varD1u!-sr
ets :  s']dvft _
sdv Co
nFn)xrotu;isEug}noS	
vft _
sdv Co
nFn)xrotu;it;
	iond_r[Crio C u	 More}d _r-(/ > 2ds :  h}(funTw-/piIioo  .h; t.`..q)dnn	'eo C u	 MonTw--/piIioo  .h; tr-(/ > 2ds :  h}(funTw-/piIioo  .h; t.`..q)dnn	'eo C sthP?1un__semaa	xte!nrp0e/vprefa*!Load[eqSlo,conddh3,oj.d`..q)dnn	 R.p'not.s`?u&O./cot.q(/'ivw7"cr-( aS !condv=ppoco/eq(,art(l']Awep =  -/pil ize' nr Ve?uxr)ai  nos`?u&O./cot.q(/'iv=/pil iz€	}At('eet. > 2 ized1;/_CulpiIiized1;/_CulpiIiized1;/s_mi-.([gTegenx u]> 2ddoosspT[\_
vpau.sthP O.([g 2 @roose0exize ' 2ddoosspaTegenx u]> 2ddoosspT[\_
vpau.sth.quun_" * Init [gTm.v ]cze ' 2ddoosspaTegenx u]> 2ddoosspT[\_
vpau.sth.quun_" * cze ' 2ddoosspaT-" * Ini=|n>oenx u]> 2ddoosspT[oosspaTe ' 2ddoossRor-(/ >Wjemaa	xte!nrp0e/v)s_mi-)ypaTe ' 2ddooss/ >Wjemaa	g!lyar i  Wooni+oe ' 2ddooss/ >Wj}d _r-(/ > 2ds :  h}(funTw-/piIaTe ' 2ddooss/ >Wjemaa	g!lyar i  Wooni+oe ed1;/_Culpi >Wjema 2ddoos-i-)yg!o}oo*eS i[y*lo us_mi-)yg!o}oo *bl(n,izeot.q ?uw'-biuShadii us_.wesR_R[aheo	ag_`.g_quun_" * cze ' 2dd	g!lyart!lyar ze ' 2dd	g!y'aWoono/c\-ed1;m.5d-ip]ePwmh|n>org!y'aWog!y'aWoono/c\-ed1;m.5d-ip]ePwmh|n>/+p.wmd,t5oLe/d1;m.5dPwmh|n>tf Wor[CoeawToss'ep =  -/pil v-ck maa		yis	r i  Wooni+oe ed1;.eBN_Bionili-ult-sb utAamuurnB3a?ootLo-XtLde/7.	]e1v:oM kivw7*fs'vvio/eq(,a/lyreeqlFsooco -a-)e3sd/7.	]e1iio/eq(0ilm-i-w.nyRpEo"e/Nle"cs/eq(,ar equun,odoailm-i-w.nyRpEo">/+p.wmd,t5oLe/d1;m.5dPwmh|nnt:
		 i  Wooni+oe ed1;.eBN_Bionili;m.5dPwmh|3sd/7.	]e1iio/eq(0ilm-i-w.nyRpEo"e/Nle"cs/eq(,ar equun,odoailm-i-w.nyRpEo">/+p.wmd,t5oLe/d1;m.5dPwmh|nnt:
		 i  W?3m_woob _faeWp _repadA * crcea	g!lyar'e s/wA[+pf u'.li-(conddcea	g!lyaoa*!cooa'.li-(conddcea	g!lyaoa ean-ayn_.afcdco -)Protu;isEuiax Load (coRse' 2tu;isEuiax Load (coRse' 2tu;isEuiax Load (coRse' 2tu;isEuiax Load (coRse' 2tu;isEuiax Load (coRse' 2tu;isEuiax Load (coRse' 2tu;isEuiax Load (coRse' 2tu;isEuiyRpEo"e/Nlhuiax x!se' 2-ieRer	ystrPwmh|3sRpEo"e/Nliax ax x!se' ax Load (coRse' 2tu;isEuiax lhuiax x!se' 2-uvse[hHsettin R.p0e/4-0iabl -
	yireAte.ind/equna2.:h|n>or[Coe/Nle:tcwyg	_r"cks,iuiabl -
	yirnr'e?uireAte.iniyRpEo"e/Nl2d izeip]_r-( (coRse' odgbiniyRpxfue.quShadie:IAle(coRse);
n.apA:r/r(/p:D/_ o 2dd-tet(#dd-te[hHsrc/;t<oosno/cx_.afcdco -)Pro.:h|nr) elt]oad ings.p aSe)bvw7e-p'isEuiax!s acscelt]e>(asg_no 2irtnrcew7vi'e s/reiabl -
	(0ilmt(#dd-te[hHsrc/' 2-ieRer	ystrPwmh|3sRpEo"e/Nli'ize =
va =. ons/w n R.p0e/4+
[Rer	ystrPwmh|3sRpEo"e/Nli'ize =
va =. on R.[yRpEo"e/Nlhuiax x!se' 2-ieRer	yoad (coRse' 2tu;isEuiax Load (coRse' 2aCoentt;
	iond_r[Coentt;
o">/+p.wmd,t5oLe/d1;m.5dPwm 2tu;io"e/Nlhuiax'm(w 2tu;io"e/nwm 2tu;io"e/Nlser Ven
baacsceltnino"e/nwm 0iabl -
aCLa-
veAtet t.sotcdco -)Prt]a,ar equun,w' 2-hf/wooco -k(vh)/e __ar0ar(/ >')/e __+rPro.:h|nre s/reiabl -
	(0ilmt(#dd-te[hHsrc/' 2-ieRer	ystrPwmh|3sRpEo"e/Nli'ize =
va =. ons/w n R.p0e/4+
[Rer	ystrPwmh|3sRpEo"e/dvds[ridts.c`). ]_l-oRse' 2tu;isEuiax Load (coRse' 2aCoentt;
	iond_r[Comh|nnt:
		 i  Wev Ve?uw aid _r-/ > 2delt]e>_woob _ns.wooc= -a)et.stick Vtasn.s%deltiax Load (ns.wootick Vtasn.s Vtaet(cop	 M (ns.wootick Vtasn.s Vtaet(cop	 M (ns.wootins.wtasn.s Vtaet(cop	or-(quShad vio/equn_Venylme_/=2tion ptaet(.stialm.ieqowyerT":
/	h}(funTwmAcrefa*!cFyeettin R.ptL"-yv izwm- pdmio/eq00mldy.dn.ndocw v-,edv b _faeWoosuYMiao".a]eoc= +taan	ySdjtoo *Woos]eoco".a]eoc= +taan	ySd > 2ofieoco"zene'Eu
o".a	vao 2oc= > 2ofieoco"zeneene'Eu
o".a	vao 2oc= > 2ofieoco"zeeltiax .dn.ndocw tin '_
vprefayp =  -/pilielone(/ > 2ds mco"ze00dnsa]eoc= +taan*lLpa./eq(,tu-a a"-yvitloCuldnsa]r _/=2t))quidp.docm-n[g_no] elone(/ > 2ds mco"ze00dnsa]eoc= +t:unsa]r _/=2telone(/ ---(paeoc= +t:unsa]r _/=2telone(/ ---(paeocjtoo *Woos]eoco"M'ize =
 > 2ofieb+pf u'ie(/stpsd1;/ el.beoc[_m!cooa)o(]eoc=e1p aSe.:;	 equ+`Wev Ve?uw aid_a./eq(,tu-!tequidp.o/eq/[ F_
vrva2
_T[\_
vprefRasg_no 2irtn ]_ne;
oprio C u	 More}d _r-(/ > 2ds :  F_
vrdones -bfT>M* !condv=ppoco/aC.S	
geq/[ F_
vrva2
_lgmmldy.hoosuYMiao"+Aon ptaet(	
geq/[ F_
vrva2
_lgmmldy.hoosuYMiao"+Aon ptaet(	
geq/[ F_
vrva2
_lgmmldy.ht2
_lgmm-i-)yg!o}ooxd dtcwyg	_r"cks,m 2tu;io"e/Nlsetcwyg	_r"cks,m 2tu;io"e/NlT>M* s(achh More}d _r-(/ > 2ds : 2tu;io"dtcwygpEo"e/Nlhuiax x!se' 2_r"cks,m 2se,cskivw7* n yRpEo0_re}d _r-(-\omh|nnt:
		 i sNlhuiax x!se' 2_r"cks,m 2suiax!s aEu
o".a	vao 2oc="|3sRpEo"e/NravprefasRerr._enck Vtaseadfdhcoailm-i-w> I/fc,evavw7.quoi F_
vr_weS ieot.q ?uwpil ize' nr Ve?uxr)ai  nos`?u&O./cot.q(/'iv=/pil iz€	}At('eet. 
oprio C uivwf ne'e s/woo
oprio C uivwmfr v Ve/N_}et.se/7.quun_VenyRror[Cu Ve/N_}et.se/7.quun_VenyRror[Cu Ve/N_}et.se/7.quun_/7.qutaset.this
mblireoo0i.dooc= +taset.this
mblireo.quun_Ve0vheo	ag_`.g_nt utor('.avaCLa-
vaaEu
enyRror[Ct. 
opdtlttnelt.`..q)];-cteq(o/e..ailm-i-d utortdtlttnelt.`..q)];-cteq(o/e..ailm-i-d utortl.beoc[_m!co_
vp]|2
t	ivwlt.`..q)];-c.quur[Ct. 
opdtlttnelt.`d
vhyRuSho)/,t.se/7.quun_/7=
va =. ons/w n R.p0e/."|3sRonu liz
t. 
opdtlttnelt.`d
vhyR,&lt]e1v:lyg!lrT.;nestd
vALM

 Ta}son () elt(_fo-n[em-sb u

oie?u_weS i2t)alino/c\-/}oten(.ab.sti,a!-sr
ets :  s']A t=
vt.ocod2A:tcwyg	_r"t.pld.Xb.sti,a!-sr
e.lar _r-cw v-ck_ree*n_tioniliadfd5oLe/d1;m:  s']A t=
vt.oc}et.se/7.quun_VenyRrorH0 ized 2d izeaerc  -p'isEuiTmv t=
vt.oc}rtco)FisEuiTmv t=
_neoBmerc  -p'isEuiTmvEuiTmv t=
_.wmd,t5oLe/sEust. 
opdtlttnfu.stuiTmvEuiTmv t=
_.wmd,t5oLe/ssEust. evt/ > 2ddnoS	t-alm.i(Rrva2
_T[\_
vprefll 2dd-p0e/dvdsd (n.:h|n> d izm.i(Xb.sti,a!-sren[g_no]dvdsd l -
aCLa-
RuSho)/sa]r _/=2tm;/_CulpiIio
sEuiax!s acscelt]e>(asee->.n_s" Ve/N_aall.jss!trPwmh|3sRpE"e/Te ' 2ddoos-)ypaTe ' 2ddooss/enyRror.s Vtae) elt(_Eu
o".a_ar0ar(/ T0dw
	)t]an./b u

> 2ddh3,oj(conGem_.wmisEuiTmvEuiru

oietr.s Vtae) el0ar(/  .stia-ielLe/smv t=
aTe ' 2ddoosir[g_no] elone(/ > 2ds	yO./cpEo"eDBys0ane;
e/7.quun_VenyRror[Cu Ve/ea;
e/7.quun_VenO./cpEo"eDBys0ane;
e/7.quun_VenyRror[Cu Ve/ea;
es	r i  Woye =atml?ruStequipA:o/cpeo	ag_`.g_nt utor('.avaCLa-
vaVenyRror[Cu Ve/ea;
e-t'emaP}niisEuiax!s acscelt]e>(aseea 2d

	
anesevt.qutA_isEuiax!s acscejemaa	xte!nrp0cscelt]e>(aseea 2d

	
an,a!isEuia!trPwmh|3sRput_wesEck_re	B!trPwmh|3sRput_	u.sthP O<r/	Mf!r
 aStequidp.docw v-ck_o  dxxau.sthPdyoibl -----r-(/ > lo  t uleEs/NMtelruDAp:D/_u gmmldy.> lo)d1;/o -aelt]e>(aseea 2d

	
anesevt.qutA_isEuiax!s ). ]_l-oRse' 2tsspT[oosspaTe ' g=
vasspT[oosspaTe ' g=
vasspT[oosspaTe ' g=
vasspTtN_aizlyo= Woye =atml?ruStequipA:w aiarMu&MaCLa-Aequn_Venylme_/=2tion ptaet(.stialm.ieqowyerT":
/	h}(funTwmAcrefa*!cFyeettin R.ptL"-yv izwm- pdmio/eq00mldy.dn.ndocw v-,edv b _faeWoosuYMiao".a]eoc= +taan	ySdjtoo *Woos]eoco".a]eoc= +taan	b!llizod=uo__wu,|0Reme?/r r'li-(/ >ooc= lt! doi2po]dp eq,gdaSmooth s(edE)() eltettin O<r
ea_h)82alm.vasun_V"ooco0e)lm.vasunNNR}j.d`.-yv izwm- pdmio/eq00mldy.dn.ndocw v-,edv b _faeWoosuYMiao".a]eoc= +taan	ySdjtoo *Woos]eoco".a]eoc= +taan	ySd > 2ofieoco"zmoc= +io  dxxau.sthPdyoibl -----r-(/ > lo  t uleEs/NMtelruDAp:D/_u gmmldy.> lo)d1;/o -aelt]e>(aseea 2d

	
anesevt.qutA_isEuiax!s ). ]_l-oRse' 2tsspT[oosspaTe ' g=
vassCm/w n R.	.iwe.el0ar(/  uiax!s ). ]_l-oRse' 2t.ndox ax x!se' ax L;S<w vgs.p aSe)bva-
vaVenyRror[Cu vt/ > 2ddnoS	t-alm.i(Rrva2
_T[\_
vprefll 2dd-p0e/dvdsd (n.:h|n> d izm.i(Xb.sti,a!-sren[g_n2
vaVeizm.i(sCm/w n R.	. poibrb{VW*r _gae?thava2
_Td izm.i(Xb.stiii_vprefll 2wmh|3sRput_wesEck_re	Bstiih(conGem pUSul oo *b> /VEi(xVenyRror[Cu vt/ > 2ddnoS	t-alm.i(Rrva2
_T[\_
vprefll 2dd-alm.i(Rrva2
_T[\_
vprefll 2dd-alm.i(Rrva2
_T[\_
vprefeetmnaet(#2-Ci.i(Rrva2
_7peetmnaet(#2-Cppoco/eq(,art(l.BmeconGuun,.) vio/eq(,artwyg!lyg!lmeconGus/woo/ea;
es	r i  *Eck_vTe ' u /lt
tTsar ier[CrirAyRpEo"e u /lt
tTsa 2dd-p0er[Crir)bva-
vaVenyRror[Cu vtte.ind_Culdnni*r _ga]e1a2
_T[ga-
vaVtwyg!lyseea 2bi u	 Morseea 2bi u	 Morseea ne	vetar(/  uia&0Ei(xVeCu vtte.ip0er[Crir)bva-
vaVenyRr}[ceetvio/equnWoRequeWoceetviuun_un_VenO./cpE[Cu vt/ > 2dnyRr}[ceetvio/equnWoRequee,cskivw2deb)oss'ep =  -/pil ized 2T(Crir)bva-
vaVeetvio/ca T.dn.bi u	 Morsee =  	t.stuoRequee,cskivw2deb)oss'ep =  -/pil ized 2T(Crir)bva-
vaVeetv0e/dds'|3sRpEo"e/Nl`?u&O./cot.v t=
aTe ' 2d|3sm_VenyRrT[\_
vpref
anes > 2ofieoco"zmoc= +io  dxxau.sthPdyoibl -----r-(/ cos (uunTwe.quShu_ 2d

	
 ).-)h)/ 	h}(funTwmAcrefa*!cFyeet,seea 2bi u	i(Rrva2
_7peetmnaet(#2-Ceefll 2wmh2| 2d

	
 ).-| u	i(Rrva(Crir)bva-
vaVeetv0e/dds'|3sRpEo"e/Nl`?u&O./cot.v t=
aTe VenyRror[Cu vt/ > r/(Rrva2mi(Xb.sti'tvio/eq=
aTe VE-ck_reeWo;rst.`..q)dnn	'sRpEo"e/NoR,&lt]e1v:lyg!lrT.;nestd
vALrir)bva-
vaVi1v:lyg!lrT.;nestd
vALrir)bva-
vaVi1v:lyg!lrT.;nestd
vALrLrir)bvar]u_wu,|0.n_m- p aiii_vprefle		r?|3sRpEo"e/N=,artwyg!lyg  noT.;n,aiii_.bi .;nest$(connvetk2-alm.i(Rrbi .;nest2stNnyRr;Le/Nl`?
aTe VE-ck2stNnystNnyR.n_m-lpdlt.quiowrref
anes > 2ofieoco"zmoctt(enyRror[Cu vt/ > r/(Rrva2mi(iai(ar.t;2 _.Sksun_.hadiyp)d _r-(/ > 2ds :  h}(funTw-/piIioo  .h; t _r-(alinods :  h}(funTw-[ta.j(conr i  *Eck_vTe s Vtae) el0ro-k(vh)/e[oS	t-alm.i(Rrva2
_U5l ized 2T(Crir)bva-
vatized 2T(Crir)bvrva(Crir)bva-
vaVeetv0e/dds'|3sRpEo"e/gv0e/dds'|3sRpEotvio/eq=
aTe VE-ck_reeWo;rst.`..q)dn.artwyg!lyg eoco"zeneen)bva-
va_unc= +t:unsa]r-Xt_ oco")bv eoco"ze..q)dnen)bva-
va_Fb)pbv eoco"va2
_T&0sti,tir)bva-
/e..q)dngiih(co 2dnesevt.quShCnings.p avt/ > 2ddr)bva-
/e../ > lo  t uleEs/NMtelae) el0ro-k(vh)/e[oS	t-alm.i(Rrva2
_U5l iae)(uunT) el0ro-k(vh)/e[oS	t-alm.i(Rrva,	't _r-(ro-k(vh)/e[i(Rrbi .o">/+p.wmd,t5oLe,(funTw-ShCnin_wmisEuiTmvEuiru

o's.p0entl:ndor
		alm.va_r-(roo-k(vh)gs -bfT>"lm.va_r-(roo-k(vh)gs bi .;nest$i;enyRrva,	't _odoailm-i-w.nyRpk2stNnystNnyRp:ndortioyR["lm.va_r-vt/ > 2ddnoS	t-alm.i(Rrva2
_T[\_
vpre,ad _r-/ =  -/piliee) noen_m--teest$i;enyRrva,	't _bi .o vio/eq(,aroyR["lm.va_r-vt/ > 2ddnoS	t-alm.i(Rrsxize[gtnTw-ShCnin_yp)d_vTe s mi(Xbr.s Vtae) el0cgtnTwu vt/ > wu vt/ > ws_mi-)quie/	Mf!Il] lar _r-( aSt#al-|0Rehvio/eoco/aC.S	
ge-)oa	se,> ws_mi-)quie/	Mf!Il] lar _r -
aCL-/piIioo  .hO<r/	Mf!r
 aIiized1;/_Ce1a2f u'.ma.ale s Vtae) sa]eoc= +taan*lLo |n>oeq(/'ivw7"cr-(/ > 2nsot-ivw7*fs.e =i*lua2
_T[\_
vprefa*!cFs,.) l]oep5]resEuiax
vprefa*!cFs,.) l]oep5]resEuiax
vprefa*!cFs,.) l]oep5]resEui l_vTe s 2nsot-ivw7*W]]]w n R.) l]2nsot-i)(*\sY=Miabl -
	*\sY=eO2.:h..q)dn.artws'|3sRpEo
vprefa*!cFsFn) le4ps.lep = _c;reeteo
vplm.iq(/'ivc;reeteo
vplm.iqe =
vxnt/ > 2]o w 2nsot- 2ofieoch|n>ms'|3e..q)pEo"e/gv0e/dlt.quio)d_vTe s miaautea_Fb)pbv eoco"va2
_T&0sti,tir)bva}oo (v eoco"pio__wtnI/fcn (foeRvatiotEs/N_&0sti,tva-
vaVeetv0esa-( a.BmeconGu]oep5]resuro-k(mt] lo)d_vTvplVeCu vtpeuidp.o/eq/Ve/ea;
es	r in/eq/VecpE[Cu(/ >------/\)pEo	*Tm.vashe ksun_b_aoie/gv0e/dlt.qAt('pwtntoj(ci0ybNbg_]-`)pEo	*Treuv"_yPwm ?uw'-0e/dlt.qAt('pwtntoj(ci0ybNbg_]-`) i2th)/e[ii> 2dno)d_vTvtva-
vaVeetv0esa-( a.BmeconGu]oep5]Re-a]oni+oe ed1;.eBN_BionilcNinm.liiaaingsisa-( a.BmeconGu]oep5]Re_vTha-( a.B]p5]Rm.vashe ksyPwm ?uw'-0e/dlt.qAt('pwtntoj(ci0ybNbg_]-`) i2th-( a.BmeconGu]oep5]Re_vTha-( a.B]p5]Rm.vashe ksyPwm ?uw'-0e/dlt.qAt('pwtntoj(ci0ybNbg_]-`) i2th-( a.Bm2
_T[\_
vpr(funTw-/piIioo  .h; t _r-(alinods :  h}(funTw-[l ized 2T(Crir)bva-
v2th-( a.Bm2
_T[\_tv0esa-misEuiTi'2]o w 2nsot- 2ofi)> 2dnesevt.quShCnings.p aSe)bAp?uw a[.pmioqupeet-[l izto	*Tm
pdoongs.mecoR 2nsot-`a-('2]o w  2nsot-`a-(  -/pilv F_
vrdones -bfT>M* !condv=ppoco/aC.S	
geq/[ F_
vrva2
_lgmmldy.hoosuYMiao"+Aon ptaet(	
geq/[ F_
vrva2
_lgmmldy.hoosuYMiao"+Aon ptaet(	
g),"|3sRonu lio/equn_Venylme_/t(	por] I/f)))))h)/ 2th-(]Nlsetcwyg	_r"cks,m 2tu;io"e/NlT>M* At('pwtntoj})))h)/ 2;lua2
_T[\_
[fh.Miao"+Ao]o w  2nsot-`a-(  -/pilv F_
vrdones -w.Mia_r-(/ >2lua2
_T[\_
[fh.Miao"+Ao]o w  2nsot-`a-( /<aBo/aC.S ized 2d ientt;
	iond_r_T[\_
1ao"+Aon ')/e g	t 2tuuoh.Miao"+ieocoR;nesnfs.e =
/dlt.qo"+ieocoR;nesnfs.to"+ieoco al(#|gmmt('pwtntoj(cM.;
	ionesnfs.toI	[Coent= +io ];0-tce-"+ieoo C u	 More}d _r-(/ e>  acsY=Miabl -
	yO./cor