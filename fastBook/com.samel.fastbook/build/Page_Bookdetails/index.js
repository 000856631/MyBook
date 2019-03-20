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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17)
__webpack_require__(21)
__webpack_require__(25)
__webpack_require__(29)
var $app_template$ = __webpack_require__(33)
var $app_style$ = __webpack_require__(34)
var $app_script$ = __webpack_require__(35)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerName:'fa-toolkit', packagerVersion: '1.1.1-Stable.301'})

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(18)
var $app_style$ = __webpack_require__(19)
var $app_script$ = __webpack_require__(20)

$app_define$('@app-component/cover', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "single-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "single-product"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.list.image}
              },
              "classList": [
                "single-image"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "single-description"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "description_title"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.list.title}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "strats"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "img/strat_light.png"
                  },
                  "repeat": {
                    "exp": function () {return this.starts},
                    "value": "item"
                  },
                  "classList": [
                    "strat_image"
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "img/start_grey.png"
                  },
                  "classList": [
                    "strat_image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "description_score"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "9.4分"
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "description_peapel"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": function () {return this.list.score+'人评分'}
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "single-brief"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return '作者  '+this.list.author}
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "single-brief"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return '字数  '+this.list.words}
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "description_content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {},
          "classList": [
            "content_title"
          ],
          "children": [
            {
              "type": "span",
              "attr": {
                "value": "内容简介"
              }
            }
          ]
        },
        {
          "type": "text",
          "attr": {},
          "classList": [
            "whole_content_text"
          ],
          "events": {
            "click": "changePresentationClass"
          },
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return this.list.presentation}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "seperate_line"
      ]
    }
  ]
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  ".single-container": {
    "flexDirection": "column"
  },
  ".single-product": {
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px",
    "backgroundColor": "#fff8dc"
  },
  ".single-description": {
    "flexDirection": "column",
    "width": "434px",
    "alignSelf": "center"
  },
  ".strats": {
    "alignItems": "center",
    "marginBottom": "21px"
  },
  ".strat_image": {
    "width": "25px",
    "alignItems": "center"
  },
  ".single-image": {
    "width": "217px",
    "height": "289px",
    "marginRight": "50px",
    "marginLeft": "67px",
    "borderRadius": "8px"
  },
  ".description_title": {
    "color": "#000000",
    "fontSize": "37.5px",
    "marginBottom": "9px"
  },
  ".description_score": {
    "alignItems": "center",
    "fontSize": "25px",
    "color": "#FFBF00",
    "marginLeft": "4px",
    "marginRight": "9px"
  },
  ".description_peapel": {
    "fontSize": "25px",
    "opacity": 0.5
  },
  ".single-brief": {
    "color": "#1A1A1A",
    "fontSize": "25px",
    "marginBottom": "8px"
  },
  ".description_content": {
    "marginTop": "42px",
    "paddingLeft": "34px",
    "flexDirection": "column"
  },
  ".content_title": {
    "height": "100px",
    "paddingTop": "41px",
    "color": "#000000",
    "opacity": 1,
    "fontSize": "31.3px",
    "fontWeight": "bold"
  },
  ".content_text": {
    "color": "#000000",
    "fontSize": "27.1px",
    "width": "650px",
    "lines": 3,
    "lineHeight": "43.75px",
    "textOverflow": "ellipsis"
  },
  ".whole_content_text": {
    "color": "#000000",
    "fontSize": "27.1px",
    "width": "650px",
    "lineHeight": "43.75px",
    "textOverflow": "ellipsis"
  },
  ".key-words": {
    "marginTop": "20px",
    "marginLeft": "33px"
  },
  ".key-words-text": {
    "fontSize": "25px",
    "color": "#000000",
    "height": "50px",
    "paddingTop": "0px",
    "paddingRight": "17px",
    "paddingBottom": "0px",
    "paddingLeft": "17px",
    "backgroundColor": "rgba(80,96,117,0.1)",
    "borderRadius": "8.3px",
    "marginRight": "17px"
  },
  ".bottom_footer": {
    "width": "695px",
    "marginTop": "50px",
    "marginLeft": "33px",
    "justifyContent": "space-between"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "alignSelf": "center",
    "marginRight": "14px"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".swiper-main-title": {
    "height": "100px",
    "fontSize": "31.3px",
    "color": "#1A1A1A",
    "alignSelf": "center"
  },
  ".seperate_line": {
    "width": "100%",
    "height": "17px",
    "backgroundColor": "#F2F2F2",
    "marginTop": "20px"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	props: ['list', 'param'],
	data: {
		starts: [],
		presentationClass: "content_text",
		wholePresentation: true
	},

	onInit: function onInit() {
		for (var i = 0; i < 4; i++) {
			this.starts.push(i);
		}
	},
	changePresentationClass: function changePresentationClass() {
		this.wholePresentation = !this.wholePresentation;
		this.presentationClass = this.wholePresentation ? "content_text" : 'whole_content_text';
	}
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能使函数，请使用对象');
    }
  });
}}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(22)
var $app_style$ = __webpack_require__(23)
var $app_script$ = __webpack_require__(24)

$app_define$('@app-component/more', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "swiper-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "swiper-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "swiper-main-title"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.banner.title}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "swiper-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "swiper-link"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.banner.link}
                  }
                }
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.banner.image}
              },
              "classList": [
                "swiper-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "swiper-list"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.list},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "prod"
              },
              "events": {
                "click": function (evt){this.goToPage(this.$item,evt)}
              },
              "classList": [
                "swiper-list-item"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "classList": [
                    "swiper-stack"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.image}
                      },
                      "classList": [
                        "swiper-image"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "swiper-image"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.icon}
                          },
                          "classList": [
                            "swiper-icon"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "swiper-title"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": function () {return this.$item.title}
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "swiper-people"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": function () {return this.$item.people+'W+在读'}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  ".swiper-container": {
    "height": "487px",
    "flexDirection": "column"
  },
  ".swiper-head": {
    "justifyContent": "space-between",
    "marginTop": "0px",
    "marginRight": "33px",
    "marginBottom": "0px",
    "marginLeft": "33px"
  },
  ".swiper-main-title": {
    "height": "100px",
    "fontSize": "31px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "marginRight": "14px",
    "alignSelf": "center"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".swiper-stack": {
    "marginTop": "21px",
    "marginRight": "17px",
    "marginBottom": "15px",
    "marginLeft": "0px",
    "height": "380px"
  },
  ".swiper-image": {
    "width": "217px",
    "height": "290px",
    "borderRadius": "8px",
    "marginBottom": "16px"
  },
  ".swiper-list": {
    "flexDirection": "row",
    "height": "380px",
    "marginLeft": "33px"
  },
  ".swiper-list-item": {
    "flexDirection": "column"
  },
  ".swiper-icon": {
    "width": "33px",
    "height": "33px",
    "marginTop": "138px",
    "marginLeft": "17px",
    "borderRadius": "5px"
  },
  ".swiper-title": {
    "fontSize": "27px",
    "color": "#1A1A1A",
    "marginLeft": "8px"
  },
  ".swiper-people": {
    "fontSize": "20.8px",
    "color": "rgba(0,0,0,0.5)",
    "marginLeft": "8px"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	props: ['list', 'banner'],
	data: {},
	onInit: function onInit() {},
	goToPage: function goToPage(item) {
		_system2.default.push({
			uri: '/Page_Bookdetails',
			params: { item: item }
		});
	}
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能使函数，请使用对象');
    }
  });
}}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(26)
var $app_style$ = __webpack_require__(27)
var $app_script$ = __webpack_require__(28)

$app_define$('@app-component/other', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "single-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "swiper-head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "swiper-main-title"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.list.title}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "swiper-link"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.list.subtitle}
                  }
                }
              ]
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.list.arrow}
              },
              "classList": [
                "swiper-arrow"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "single-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "repeat": {
            "exp": function () {return this.list.list},
            "value": "item"
          },
          "classList": [
            "single-product"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "events": {
                "click": function (evt){this.goToPage(this.item,evt)}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.image}
                      },
                      "classList": [
                        "single-image"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "single-description"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "single-title"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": function () {return this.item.title}
                          }
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "single-brief"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": function () {return this.item.brief}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "single-bottom"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "children": [
                            {
                              "type": "text",
                              "attr": {},
                              "classList": [
                                "single-author"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "single-div-clazz"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {},
                              "repeat": function () {return this.item.clazz},
                              "classList": [
                                "single-clazz"
                              ],
                              "children": [
                                {
                                  "type": "span",
                                  "attr": {
                                    "value": function () {return this.$item}
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  ".single-container": {
    "flexDirection": "column"
  },
  ".swiper-head": {
    "justifyContent": "space-between",
    "marginBottom": "30px",
    "marginTop": "50px"
  },
  ".swiper-main-title": {
    "fontSize": "31.3px",
    "color": "#1A1A1A",
    "fontWeight": "bold",
    "alignSelf": "center"
  },
  ".swiper-link": {
    "fontSize": "27px",
    "color": "#8D8D8D",
    "alignSelf": "center",
    "marginRight": "14px"
  },
  ".swiper-arrow": {
    "width": "16px",
    "height": "28px",
    "alignSelf": "center"
  },
  ".single-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  ".single-product": {
    "height": "317px"
  },
  ".single-description": {
    "flexDirection": "column",
    "width": "434px",
    "height": "90%",
    "alignSelf": "center",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f2f2f2"
  },
  ".single-image": {
    "width": "217px",
    "height": "290px",
    "marginRight": "33px",
    "borderRadius": "8px"
  },
  ".single-title": {
    "color": "#000000",
    "opacity": 1,
    "fontSize": "31.3px",
    "lineHeight": "40.6px",
    "marginBottom": "16px"
  },
  ".single-brief": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "lineHeight": "34.9px",
    "marginBottom": "49px"
  },
  ".single-bottom": {
    "justifyContent": "space-between"
  },
  ".single-author": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "alignSelf": "center"
  },
  ".single-div-clazz": {
    "justifyContent": "flex-end"
  },
  ".single-clazz": {
    "color": "#000000",
    "opacity": 0.5,
    "fontSize": "16.7px",
    "lineHeight": "24px",
    "backgroundColor": "rgba(0,0,0,0.1)",
    "borderRadius": "8.3px",
    "alignSelf": "center",
    "marginLeft": "10px",
    "textAlign": "center",
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "10px",
    "paddingLeft": "20px"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: {
		props: ['list']
	},

	onInit: function onInit() {},
	goToPage: function goToPage(item) {
		_system2.default.push({
			uri: '/Page_Bookdetails',
			params: { item: item }
		});
	}
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能使函数，请使用对象');
    }
  });
}}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(30)
var $app_style$ = __webpack_require__(31)
var $app_script$ = __webpack_require__(32)

$app_define$('@app-component/information', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "information_container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "information_head"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "information_main_title"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "图书更多信息"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "information_list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "information_number"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "left_text"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "书号"
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "right_text"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.list.isbnNum}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "information_statement"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "left_text"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "免责声明"
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "right_statement_text"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "仅支持线下完整阅读，本工具仅展现简介内容"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  ".information_container": {
    "height": "369px",
    "paddingTop": "0px",
    "paddingRight": "34px",
    "paddingBottom": "0px",
    "paddingLeft": "34px",
    "width": "100%",
    "flexDirection": "column"
  },
  ".information_head": {
    "height": "100px"
  },
  ".information_main_title": {
    "fontSize": "31.3px",
    "color": "#1A1A1A",
    "fontWeight": "bold"
  },
  ".information_list": {
    "flexDirection": "column",
    "marginTop": "17px"
  },
  ".left_text": {
    "color": "rgba(0,0,0,0.5)",
    "fontSize": "25px",
    "width": "25%"
  },
  ".right_text": {
    "color": "rgba(0,0,0,1)",
    "fontSize": "25px"
  },
  ".information_statement": {
    "alignItems": "flex-start"
  },
  ".right_statement_text": {
    "color": "rgba(0,0,0,1)",
    "fontSize": "25px",
    "width": "75%"
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	data: {
		props: ['list']
	}
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能使函数，请使用对象');
    }
  });
}}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "bookdetail-box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "bookdetail-box-desc"
      ],
      "children": [
        {
          "type": "cover",
          "attr": {
            "list": function () {return this.bookCover},
            "param": function () {return this.item}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "bookdetail-box-three"
      ],
      "children": [
        {
          "type": "information",
          "attr": {
            "list": function () {return this.bookCover}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "detail_bottom"
      ],
      "children": [
        {
          "type": "text",
          "attr": {},
          "classList": [
            "bottom_left_btn"
          ],
          "events": {
            "click": "addToBookshelf"
          },
          "children": [
            {
              "type": "span",
              "attr": {
                "value": "加入阅读计划"
              }
            }
          ]
        },
        {
          "type": "text",
          "attr": {},
          "classList": [
            "bottom_right_btn"
          ],
          "events": {
            "click": "toRead"
          },
          "children": [
            {
              "type": "span",
              "attr": {
                "value": "添加阅读提醒"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
  ".bookdetail-box": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".header": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "100px",
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "33px",
    "paddingBottom": "0px",
    "paddingLeft": "33px"
  },
  ".header_right": {
    "alignItems": "center"
  },
  ".header_shear": {
    "alignItems": "center",
    "width": "100px",
    "height": "100px"
  },
  ".header_manu": {
    "marginLeft": "12px",
    "width": "25px",
    "height": "50px"
  },
  ".back_img": {
    "width": "50px",
    "height": "50px"
  },
  ".shear_img": {
    "width": "50px",
    "height": "50px"
  },
  ".bookdetail-box-desc": {
    "paddingTop": "34px",
    "paddingRight": "34px",
    "paddingBottom": "0px",
    "paddingLeft": "33px"
  },
  ".bookdetail-box-one": {
    "marginTop": "17px",
    "marginRight": "33px",
    "marginBottom": "10px",
    "marginLeft": "33px"
  },
  ".bookdetail-box-two": {
    "marginTop": "15px"
  },
  ".bookdetail-box-three": {
    "marginTop": "15px",
    "marginRight": "0px",
    "marginBottom": "100px",
    "marginLeft": "0px"
  },
  ".maintab-shadow-bottom": {
    "width": "100%",
    "height": "100px"
  },
  ".detail_bottom": {
    "position": "fixed",
    "backgroundColor": "#ffffff",
    "height": "100px",
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "34px",
    "paddingBottom": "0px",
    "paddingLeft": "34px",
    "bottom": "0px",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".bottom_left_btn": {
    "height": "67px",
    "width": "316px",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "color": "#1a1a1a",
    "fontSize": "31.3px",
    "textAlign": "center",
    "borderRadius": "8.3px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#d4d4d4",
    "borderRightColor": "#d4d4d4",
    "borderBottomColor": "#d4d4d4",
    "borderLeftColor": "#d4d4d4"
  },
  ".bottom_right_btn": {
    "height": "67px",
    "width": "316px",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "color": "#ffffff",
    "fontSize": "31.3px",
    "backgroundColor": "#D00218",
    "textAlign": "center",
    "borderRadius": "8.3px"
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.storage');

var _system6 = _interopRequireDefault(_system5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  protected: {
    item: '',
    isbnNum: ''
  },
  public: {
    titleData: {
      backImage: "./img/back.png",
      shareImage: "./img/share.png",
      menuImage: "./img/"
    },
    bookCover: {
      title: "冰与火之歌",
      score: "234567",
      author: "村上村树",
      words: "61万字",
      chapter: '2544',
      type: "玄幻修仙",
      image: "./TO_DELETE/ice1.png",
      arrow: "./img/arrow.png",
      isbnNum: "",
      presentation: '这样确切的爱，一生只有一次。彭野，一个即使没有手表也能知道时间的男人，一个在草原上识别八十八个星座的男人，一个拥有神射手般枪法的男长，一个为了心爱的女人能屈能伸的男人，一个几乎无所不能的男人。程迦，一个在荒野中落单却淡定坐在车顶抽烟的女人，一个帮着羞涩小伙子**大胆示爱的女人，一个中了枪也一声不吭的女人，一个因为彭野而终于知道什么是爱情的女人。有风的地方，就会想起彭野，如狂风般强硬；有海的地方，就会想起程迦，如大海般柔软。仍记得，他指间一斜蓝天日出，鹰在穿梭。他对鹰说：“程迦，明天是个好天气。”他说是，就当然会是，因为——他知道风从哪个方向来。 '
    },

    listbyyouread: {
      title: "该作者其它作品",
      subtitle: "更多",
      arrow: "img/arrow.png",
      list: [{
        image: 'TO_DELETE/read1.png',
        title: '书生只见',
        brief: '结婚仿佛金漆的笼子，笼子外面的鸟想住进去，笼内的鸟想飞出来',
        author: '孟康',
        clazz: ['古典爱情', '文学']
      }, {
        image: 'TO_DELETE/read1.png',
        title: '只见书生',
        brief: '海归的高管，初入职场的乖乖女，犯傻的小职员，胡同里不能低下头的公主加上富二代的小奸商。',
        author: '孟康',
        clazz: ['古典爱情', '文学']
      }, {
        image: 'TO_DELETE/read1.png',
        title: '奈印',
        brief: '结婚仿佛金漆的笼子，笼子外面的鸟想住进去，笼内的鸟想飞出来',
        author: '孟康',
        clazz: ['古典爱情', '文学']
      }]
    },

    banner: {
      title: '喜欢这本书的人还喜欢',
      link: '更多',
      image: 'img/arrow.png'
    },
    subjectlist: [{
      image: 'TO_DELETE/ice1.png',
      title: '冰与火之歌1',
      people: 2301,
      author: "玲珑"
    }, {
      image: 'TO_DELETE/ice1.png',
      title: '冰与火之歌2',
      people: 2001,
      author: "玲珑"
    }, {
      image: 'TO_DELETE/ice1.png',
      title: '冰与火之歌3',
      people: 3001,
      author: "玲珑"
    }, {
      image: 'TO_DELETE/ice1.png',
      title: '冰与火之歌4',
      people: 3212,
      author: "玲珑"
    }, {
      image: 'TO_DELETE/ice1.png',
      title: '冰与火之歌5',
      people: 3121,
      author: "玲珑"
    }],
    moreInformation: {
      words: 42.3,
      time: '2018/9/14',
      publisher: '出版社',
      number: 85462364245,
      statement: '本书数字版权由"上海客服（出版）"提供，并由其授权掌阅科技股份有限公司制作发行，若书中含有不良信息，请书友积极告知客服。'
    }

  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      menu: true,
      textColor: '##000000',
      backgroundColor: '#ffffff'
    });

    console.log('获得的isbnNum' + this.isbnNum);
    var isbnNum = this.isbnNum;
    var that = this;
    if (this.isbnNum) {
      _system6.default.get({
        key: isbnNum,
        success: function success(data) {

          console.log("handling success" + JSON.stringify(data));
          var bookinfo = JSON.parse(data);
          that.bookCover.title = bookinfo.bookName;
          that.bookCover.author = bookinfo.authorName;
          that.bookCover.presentation = bookinfo.content;
          that.bookCover.image = bookinfo.bookLogoUrl;
          that.bookCover.isbnNum = isbnNum;
        },
        fail: function fail(data, code) {
          console.log("handling fail, code=" + code);
        }
      });
    }
  },
  onMenuPress: function onMenuPress() {
    _system4.default.showContextMenu({
      itemList: ['分享']
    });
  },
  back: function back() {
    _system2.default.back();
  },
  addToBookshelf: function addToBookshelf() {
    _system4.default.showContextMenu({
      itemList: ['已加入近期阅读计划']
    });
  },
  toRead: function toRead() {
    _system4.default.showToast({
      message: '添加阅读提醒成功',
      duration: 2000,
      gravity: 'center'
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能使函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvUGFnZV9Cb29rZGV0YWlscy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1N2IwOTM4MDllZDEwOGU2NDhkMyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9pbmRleC51eCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19ib29rX2NvdmVyLnV4Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2Jvb2tfY292ZXIudXg/ZjE4YyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19ib29rX2NvdmVyLnV4PzlkZDMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfYm9va19jb3Zlci51eD8wNjEwIiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXg/MTBkNCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXg/OGY3YyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXg/MjU3OCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19saXN0X3NpbmdsZS51eCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19saXN0X3NpbmdsZS51eD81N2Q3Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2xpc3Rfc2luZ2xlLnV4P2MzZmUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXg/NzVkMiIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19tb3JlX2luZm9ybWF0aW9uLnV4Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX21vcmVfaW5mb3JtYXRpb24udXg/ZDliMyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19tb3JlX2luZm9ybWF0aW9uLnV4PzAwN2QiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbW9yZV9pbmZvcm1hdGlvbi51eD82YWY2Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2luZGV4LnV4P2M5YTQiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvaW5kZXgudXg/YjJiYyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9pbmRleC51eD82ZDBmIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1N2IwOTM4MDllZDEwOGU2NDhkMyIsInJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvY19ib29rX2NvdmVyLnV4P25hbWU9Y292ZXJcIilcbnJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXg/bmFtZT1tb3JlXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXg/bmFtZT1vdGhlclwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX21vcmVfaW5mb3JtYXRpb24udXg/bmFtZT1pbmZvcm1hdGlvblwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvaW5kZXgudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2luZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMS4xLjEtU3RhYmxlLjMwMSd9KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NfYm9va19jb3Zlci51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19ib29rX2NvdmVyLnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19ib29rX2NvdmVyLnV4IS4vY19ib29rX2NvdmVyLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NfYm9va19jb3Zlci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2NvdmVyJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfYm9va19jb3Zlci51eD9uYW1lPWNvdmVyXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwic2luZ2xlLWNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNpbmdsZS1wcm9kdWN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5pbWFnZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2luZ2xlLWltYWdlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNpbmdsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uX3RpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN0cmF0c1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcImltZy9zdHJhdF9saWdodC5wbmdcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnN0YXJ0c30sXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RyYXRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaW1nL3N0YXJ0X2dyZXkucG5nXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RyYXRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uX3Njb3JlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjkuNOWIhlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25fcGVhcGVsXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5zY29yZSsn5Lq66K+E5YiGJ31cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzaW5nbGUtYnJpZWZcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+S9nOiAhcKgICcrdGhpcy5saXN0LmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzaW5nbGUtYnJpZWZcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+Wtl+aVsMKgICcrdGhpcy5saXN0LndvcmRzfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZGVzY3JpcHRpb25fY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudF90aXRsZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlhoXlrrnnroDku4tcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIndob2xlX2NvbnRlbnRfdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiY2hhbmdlUHJlc2VudGF0aW9uQ2xhc3NcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0LnByZXNlbnRhdGlvbn1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge31cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNlcGVyYXRlX2xpbmVcIlxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2Jvb2tfY292ZXIudXhcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zaW5nbGUtY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zaW5nbGUtcHJvZHVjdFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmY4ZGNcIlxuICB9LFxuICBcIi5zaW5nbGUtZGVzY3JpcHRpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCI0MzRweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3RyYXRzXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIxcHhcIlxuICB9LFxuICBcIi5zdHJhdF9pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI1cHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zaW5nbGUtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMTdweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjg5cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjY3cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiXG4gIH0sXG4gIFwiLmRlc2NyaXB0aW9uX3RpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNy41cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjlweFwiXG4gIH0sXG4gIFwiLmRlc2NyaXB0aW9uX3Njb3JlXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZCRjAwXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjlweFwiXG4gIH0sXG4gIFwiLmRlc2NyaXB0aW9uX3BlYXBlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcIm9wYWNpdHlcIjogMC41XG4gIH0sXG4gIFwiLnNpbmdsZS1icmllZlwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuZGVzY3JpcHRpb25fY29udGVudFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjM0cHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jb250ZW50X3RpdGxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcIi5jb250ZW50X3RleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwid2lkdGhcIjogXCI2NTBweFwiLFxuICAgIFwibGluZXNcIjogMyxcbiAgICBcImxpbmVIZWlnaHRcIjogXCI0My43NXB4XCIsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiLndob2xlX2NvbnRlbnRfdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjY1MHB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDMuNzVweFwiLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIlxuICB9LFxuICBcIi5rZXktd29yZHNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5rZXktd29yZHMtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTdweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxN3B4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDgwLDk2LDExNywwLjEpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxN3B4XCJcbiAgfSxcbiAgXCIuYm90dG9tX2Zvb3RlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5NXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWxpbmtcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4RDhEOERcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLWFycm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjhweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3dpcGVyLW1haW4tdGl0bGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNlcGVyYXRlX2xpbmVcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxN3B4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjJGMkYyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19ib29rX2NvdmVyLnV4IS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfYm9va19jb3Zlci51eCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2Jvb2tfY292ZXIudXhcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXsndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cdHByb3BzOiBbJ2xpc3QnLCAncGFyYW0nXSxcblx0ZGF0YToge1xuXHRcdHN0YXJ0czogW10sXG5cdFx0cHJlc2VudGF0aW9uQ2xhc3M6IFwiY29udGVudF90ZXh0XCIsXG5cdFx0d2hvbGVQcmVzZW50YXRpb246IHRydWVcblx0fSxcblxuXHRvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0dGhpcy5zdGFydHMucHVzaChpKTtcblx0XHR9XG5cdH0sXG5cdGNoYW5nZVByZXNlbnRhdGlvbkNsYXNzOiBmdW5jdGlvbiBjaGFuZ2VQcmVzZW50YXRpb25DbGFzcygpIHtcblx0XHR0aGlzLndob2xlUHJlc2VudGF0aW9uID0gIXRoaXMud2hvbGVQcmVzZW50YXRpb247XG5cdFx0dGhpcy5wcmVzZW50YXRpb25DbGFzcyA9IHRoaXMud2hvbGVQcmVzZW50YXRpb24gPyBcImNvbnRlbnRfdGV4dFwiIDogJ3dob2xlX2NvbnRlbnRfdGV4dCc7XG5cdH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2Jvb2tfY292ZXIudXhcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4IS4vY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9tb3JlJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4P25hbWU9bW9yZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInN3aXBlci1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzd2lwZXItaGVhZFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzd2lwZXItbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1tYWluLXRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN3aXBlci1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1saW5rXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyLmxpbmt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYW5uZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1hcnJvd1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzd2lwZXItbGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInByb2RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KXt0aGlzLmdvVG9QYWdlKHRoaXMuJGl0ZW0sZXZ0KX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3dpcGVyLWxpc3QtaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLXN0YWNrXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3aXBlci1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN3aXBlci10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN3aXBlci1wZW9wbGVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wZW9wbGUrJ1cr5Zyo6K+7J31cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zd2lwZXItY29udGFpbmVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQ4N3B4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWhlYWRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1tYWluLXRpdGxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnN3aXBlci1saW5rXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjdweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOEQ4RDhEXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE0cHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnN3aXBlci1hcnJvd1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE2cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjI4cHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnN3aXBlci1zdGFja1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM4MHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjE3cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjI5MHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zd2lwZXItbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzODBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5zd2lwZXItbGlzdC1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zd2lwZXItaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEzOHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTdweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNXB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjdweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLXBlb3BsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwLjhweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxudmFyIF9zeXN0ZW0gPSAkYXBwX3JlcXVpcmUkKCdAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyJyk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5c3RlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRwcm9wczogWydsaXN0JywgJ2Jhbm5lciddLFxuXHRkYXRhOiB7fSxcblx0b25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fSxcblx0Z29Ub1BhZ2U6IGZ1bmN0aW9uIGdvVG9QYWdlKGl0ZW0pIHtcblx0XHRfc3lzdGVtMi5kZWZhdWx0LnB1c2goe1xuXHRcdFx0dXJpOiAnL1BhZ2VfQm9va2RldGFpbHMnLFxuXHRcdFx0cGFyYW1zOiB7IGl0ZW06IGl0ZW0gfVxuXHRcdH0pO1xuXHR9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NfbGlzdF9zaW5nbGUudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2xpc3Rfc2luZ2xlLnV4IS4vY19saXN0X3NpbmdsZS51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX2xpc3Rfc2luZ2xlLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvb3RoZXInLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19saXN0X3NpbmdsZS51eD9uYW1lPW90aGVyXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwic2luZ2xlLWNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInN3aXBlci1oZWFkXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1tYWluLXRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItbGlua1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3Quc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0LmFycm93fVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItYXJyb3dcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzaW5nbGUtbGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3QubGlzdH0sXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNpbmdsZS1wcm9kdWN0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KXt0aGlzLmdvVG9QYWdlKHRoaXMuaXRlbSxldnQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWJyaWVmXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5icmllZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1ib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtYXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1kaXYtY2xhenpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5jbGF6en0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWNsYXp6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXhcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zaW5nbGUtY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zd2lwZXItaGVhZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5zd2lwZXItbWFpbi10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc3dpcGVyLWxpbmtcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4RDhEOERcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLWFycm93XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjhweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWxpc3RcIjoge1xuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1wcm9kdWN0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjMxN3B4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLWRlc2NyaXB0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiNDM0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjkwJVwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZjJmMmYyXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjE3cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjI5MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcIm9wYWNpdHlcIjogMSxcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDAuNnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLWJyaWVmXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM0LjlweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDlweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1ib3R0b21cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWF1dGhvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC41LFxuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNpbmdsZS1kaXYtY2xhenpcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1jbGF6elwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcIm9wYWNpdHlcIjogMC41LFxuICAgIFwiZm9udFNpemVcIjogXCIxNi43cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyNHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMSlcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjguM3B4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19saXN0X3NpbmdsZS51eCEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2xpc3Rfc2luZ2xlLnV4IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbGlzdF9zaW5nbGUudXhcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXsndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3lzdGVtID0gJGFwcF9yZXF1aXJlJCgnQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlcicpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeXN0ZW0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cdGRhdGE6IHtcblx0XHRwcm9wczogWydsaXN0J11cblx0fSxcblxuXHRvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHt9LFxuXHRnb1RvUGFnZTogZnVuY3Rpb24gZ29Ub1BhZ2UoaXRlbSkge1xuXHRcdF9zeXN0ZW0yLmRlZmF1bHQucHVzaCh7XG5cdFx0XHR1cmk6ICcvUGFnZV9Cb29rZGV0YWlscycsXG5cdFx0XHRwYXJhbXM6IHsgaXRlbTogaXRlbSB9XG5cdFx0fSk7XG5cdH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX2xpc3Rfc2luZ2xlLnV4XG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX21vcmVfaW5mb3JtYXRpb24udXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbW9yZV9pbmZvcm1hdGlvbi51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbW9yZV9pbmZvcm1hdGlvbi51eCEuL2NfbW9yZV9pbmZvcm1hdGlvbi51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX21vcmVfaW5mb3JtYXRpb24udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmZvcm1hdGlvbicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX21vcmVfaW5mb3JtYXRpb24udXg/bmFtZT1pbmZvcm1hdGlvblxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImluZm9ybWF0aW9uX2NvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImluZm9ybWF0aW9uX2hlYWRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW5mb3JtYXRpb25fbWFpbl90aXRsZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlm77kuabmm7TlpJrkv6Hmga9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW5mb3JtYXRpb25fbGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbmZvcm1hdGlvbl9udW1iZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsZWZ0X3RleHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Lmm5Y+3XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyaWdodF90ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdC5pc2JuTnVtfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImluZm9ybWF0aW9uX3N0YXRlbWVudFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImxlZnRfdGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlhY3otKPlo7DmmI5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInJpZ2h0X3N0YXRlbWVudF90ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS7heaUr+aMgee6v+S4i+WujOaVtOmYheivu++8jOacrOW3peWFt+S7heWxleeOsOeugOS7i+WGheWuuVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbW9yZV9pbmZvcm1hdGlvbi51eFxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmluZm9ybWF0aW9uX2NvbnRhaW5lclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzNjlweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzNHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5pbmZvcm1hdGlvbl9oZWFkXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIuaW5mb3JtYXRpb25fbWFpbl90aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwiLmluZm9ybWF0aW9uX2xpc3RcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiXG4gIH0sXG4gIFwiLmxlZnRfdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjI1JVwiXG4gIH0sXG4gIFwiLnJpZ2h0X3RleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDEpXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIlxuICB9LFxuICBcIi5pbmZvcm1hdGlvbl9zdGF0ZW1lbnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcIi5yaWdodF9zdGF0ZW1lbnRfdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMSlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NSVcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2NvbXBvbmVudC9jX21vcmVfaW5mb3JtYXRpb24udXghL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19tb3JlX2luZm9ybWF0aW9uLnV4IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvY29tcG9uZW50L2NfbW9yZV9pbmZvcm1hdGlvbi51eFxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcblx0ZGF0YToge1xuXHRcdHByb3BzOiBbJ2xpc3QnXVxuXHR9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9jb21wb25lbnQvY19tb3JlX2luZm9ybWF0aW9uLnV4XG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiYm9va2RldGFpbC1ib3hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJib29rZGV0YWlsLWJveC1kZXNjXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNvdmVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9va0NvdmVyfSxcbiAgICAgICAgICAgIFwicGFyYW1cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW19XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJib29rZGV0YWlsLWJveC10aHJlZVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbmZvcm1hdGlvblwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImxpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvb2tDb3Zlcn1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRldGFpbF9ib3R0b21cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJvdHRvbV9sZWZ0X2J0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiYWRkVG9Cb29rc2hlbGZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Yqg5YWl6ZiF6K+76K6h5YiSXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJib3R0b21fcmlnaHRfYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJ0b1JlYWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5re75Yqg6ZiF6K+75o+Q6YaSXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2luZGV4LnV4XG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuYm9va2RldGFpbC1ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmhlYWRlclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMzcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzNweFwiXG4gIH0sXG4gIFwiLmhlYWRlcl9yaWdodFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuaGVhZGVyX3NoZWFyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIuaGVhZGVyX21hbnVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMjVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLmJhY2tfaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLnNoZWFyX2ltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5ib29rZGV0YWlsLWJveC1kZXNjXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzNHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5ib29rZGV0YWlsLWJveC1vbmVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiXG4gIH0sXG4gIFwiLmJvb2tkZXRhaWwtYm94LXR3b1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNXB4XCJcbiAgfSxcbiAgXCIuYm9va2RldGFpbC1ib3gtdGhyZWVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIubWFpbnRhYi1zaGFkb3ctYm90dG9tXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5kZXRhaWxfYm90dG9tXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjM0cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5ib3R0b21fbGVmdF9idG5cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjdweFwiLFxuICAgIFwid2lkdGhcIjogXCIzMTZweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjguM3B4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZDRkNGQ0XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2Q0ZDRkNFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZDRkNGQ0XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZDRkNGQ0XCJcbiAgfSxcbiAgXCIuYm90dG9tX3JpZ2h0X2J0blwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2N3B4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMxNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNEMDAyMThcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zcHhcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0Jvb2tkZXRhaWxzL2luZGV4LnV4IS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfQm9va2RldGFpbHMvaW5kZXgudXghL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9pbmRleC51eFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxudmFyIF9zeXN0ZW0gPSAkYXBwX3JlcXVpcmUkKCdAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyJyk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5c3RlbSk7XG5cbnZhciBfc3lzdGVtMyA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHQnKTtcblxudmFyIF9zeXN0ZW00ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3lzdGVtMyk7XG5cbnZhciBfc3lzdGVtNSA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5zdG9yYWdlJyk7XG5cbnZhciBfc3lzdGVtNiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5c3RlbTUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcm90ZWN0ZWQ6IHtcbiAgICBpdGVtOiAnJyxcbiAgICBpc2JuTnVtOiAnJ1xuICB9LFxuICBwdWJsaWM6IHtcbiAgICB0aXRsZURhdGE6IHtcbiAgICAgIGJhY2tJbWFnZTogXCIuL2ltZy9iYWNrLnBuZ1wiLFxuICAgICAgc2hhcmVJbWFnZTogXCIuL2ltZy9zaGFyZS5wbmdcIixcbiAgICAgIG1lbnVJbWFnZTogXCIuL2ltZy9cIlxuICAgIH0sXG4gICAgYm9va0NvdmVyOiB7XG4gICAgICB0aXRsZTogXCLlhrDkuI7ngavkuYvmrYxcIixcbiAgICAgIHNjb3JlOiBcIjIzNDU2N1wiLFxuICAgICAgYXV0aG9yOiBcIuadkeS4iuadkeagkVwiLFxuICAgICAgd29yZHM6IFwiNjHkuIflrZdcIixcbiAgICAgIGNoYXB0ZXI6ICcyNTQ0JyxcbiAgICAgIHR5cGU6IFwi546E5bm75L+u5LuZXCIsXG4gICAgICBpbWFnZTogXCIuL1RPX0RFTEVURS9pY2UxLnBuZ1wiLFxuICAgICAgYXJyb3c6IFwiLi9pbWcvYXJyb3cucG5nXCIsXG4gICAgICBpc2JuTnVtOiBcIlwiLFxuICAgICAgcHJlc2VudGF0aW9uOiAn6L+Z5qC356Gu5YiH55qE54ix77yM5LiA55Sf5Y+q5pyJ5LiA5qyh44CC5b2t6YeO77yM5LiA5Liq5Y2z5L2/5rKh5pyJ5omL6KGo5Lmf6IO955+l6YGT5pe26Ze055qE55S35Lq677yM5LiA5Liq5Zyo6I2J5Y6f5LiK6K+G5Yir5YWr5Y2B5YWr5Liq5pif5bqn55qE55S35Lq677yM5LiA5Liq5oul5pyJ56We5bCE5omL6Iis5p6q5rOV55qE55S36ZW/77yM5LiA5Liq5Li65LqG5b+D54ix55qE5aWz5Lq66IO95bGI6IO95Ly455qE55S35Lq677yM5LiA5Liq5Yeg5LmO5peg5omA5LiN6IO955qE55S35Lq644CC56iL6L+m77yM5LiA5Liq5Zyo6I2S6YeO5Lit6JC95Y2V5Y205reh5a6a5Z2Q5Zyo6L2m6aG25oq954Of55qE5aWz5Lq677yM5LiA5Liq5biu552A576e5rap5bCP5LyZ5a2QKirlpKfog4bnpLrniLHnmoTlpbPkurrvvIzkuIDkuKrkuK3kuobmnqrkuZ/kuIDlo7DkuI3lkK3nmoTlpbPkurrvvIzkuIDkuKrlm6DkuLrlva3ph47ogIznu4jkuo7nn6XpgZPku4DkuYjmmK/niLHmg4XnmoTlpbPkurrjgILmnInpo47nmoTlnLDmlrnvvIzlsLHkvJrmg7Potbflva3ph47vvIzlpoLni4Lpo47oiKzlvLrnoazvvJvmnInmtbfnmoTlnLDmlrnvvIzlsLHkvJrmg7PotbfnqIvov6bvvIzlpoLlpKfmtbfoiKzmn5Tova/jgILku43orrDlvpfvvIzku5bmjIfpl7TkuIDmlpzok53lpKnml6Xlh7rvvIzpubDlnKjnqb/moq3jgILku5blr7npubDor7TvvJrigJznqIvov6bvvIzmmI7lpKnmmK/kuKrlpb3lpKnmsJTjgILigJ3ku5bor7TmmK/vvIzlsLHlvZPnhLbkvJrmmK/vvIzlm6DkuLrigJTigJTku5bnn6XpgZPpo47ku47lk6rkuKrmlrnlkJHmnaXjgIIgJ1xuICAgIH0sXG5cbiAgICBsaXN0Ynl5b3VyZWFkOiB7XG4gICAgICB0aXRsZTogXCLor6XkvZzogIXlhbblroPkvZzlk4FcIixcbiAgICAgIHN1YnRpdGxlOiBcIuabtOWkmlwiLFxuICAgICAgYXJyb3c6IFwiaW1nL2Fycm93LnBuZ1wiLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgaW1hZ2U6ICdUT19ERUxFVEUvcmVhZDEucG5nJyxcbiAgICAgICAgdGl0bGU6ICfkuabnlJ/lj6rop4EnLFxuICAgICAgICBicmllZjogJ+e7k+WpmuS7v+S9m+mHkea8hueahOesvOWtkO+8jOesvOWtkOWklumdoueahOm4n+aDs+S9j+i/m+WOu++8jOesvOWGheeahOm4n+aDs+mjnuWHuuadpScsXG4gICAgICAgIGF1dGhvcjogJ+Wtn+W6tycsXG4gICAgICAgIGNsYXp6OiBbJ+WPpOWFuOeIseaDhScsICfmloflraYnXVxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ1RPX0RFTEVURS9yZWFkMS5wbmcnLFxuICAgICAgICB0aXRsZTogJ+WPquingeS5pueUnycsXG4gICAgICAgIGJyaWVmOiAn5rW35b2S55qE6auY566h77yM5Yid5YWl6IGM5Zy655qE5LmW5LmW5aWz77yM54qv5YK755qE5bCP6IGM5ZGY77yM6IOh5ZCM6YeM5LiN6IO95L2O5LiL5aS055qE5YWs5Li75Yqg5LiK5a+M5LqM5Luj55qE5bCP5aW45ZWG44CCJyxcbiAgICAgICAgYXV0aG9yOiAn5a2f5bq3JyxcbiAgICAgICAgY2xheno6IFsn5Y+k5YW454ix5oOFJywgJ+aWh+WtpiddXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnVE9fREVMRVRFL3JlYWQxLnBuZycsXG4gICAgICAgIHRpdGxlOiAn5aWI5Y2wJyxcbiAgICAgICAgYnJpZWY6ICfnu5PlqZrku7/kvZvph5HmvIbnmoTnrLzlrZDvvIznrLzlrZDlpJbpnaLnmoTpuJ/mg7PkvY/ov5vljrvvvIznrLzlhoXnmoTpuJ/mg7Ppo57lh7rmnaUnLFxuICAgICAgICBhdXRob3I6ICflrZ/lurcnLFxuICAgICAgICBjbGF6ejogWyflj6TlhbjniLHmg4UnLCAn5paH5a2mJ11cbiAgICAgIH1dXG4gICAgfSxcblxuICAgIGJhbm5lcjoge1xuICAgICAgdGl0bGU6ICfllpzmrKLov5nmnKzkuabnmoTkurrov5jllpzmrKInLFxuICAgICAgbGluazogJ+abtOWkmicsXG4gICAgICBpbWFnZTogJ2ltZy9hcnJvdy5wbmcnXG4gICAgfSxcbiAgICBzdWJqZWN0bGlzdDogW3tcbiAgICAgIGltYWdlOiAnVE9fREVMRVRFL2ljZTEucG5nJyxcbiAgICAgIHRpdGxlOiAn5Yaw5LiO54Gr5LmL5q2MMScsXG4gICAgICBwZW9wbGU6IDIzMDEsXG4gICAgICBhdXRob3I6IFwi546y54+RXCJcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJ1RPX0RFTEVURS9pY2UxLnBuZycsXG4gICAgICB0aXRsZTogJ+WGsOS4jueBq+S5i+atjDInLFxuICAgICAgcGVvcGxlOiAyMDAxLFxuICAgICAgYXV0aG9yOiBcIueOsuePkVwiXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICdUT19ERUxFVEUvaWNlMS5wbmcnLFxuICAgICAgdGl0bGU6ICflhrDkuI7ngavkuYvmrYwzJyxcbiAgICAgIHBlb3BsZTogMzAwMSxcbiAgICAgIGF1dGhvcjogXCLnjrLnj5FcIlxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnVE9fREVMRVRFL2ljZTEucG5nJyxcbiAgICAgIHRpdGxlOiAn5Yaw5LiO54Gr5LmL5q2MNCcsXG4gICAgICBwZW9wbGU6IDMyMTIsXG4gICAgICBhdXRob3I6IFwi546y54+RXCJcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJ1RPX0RFTEVURS9pY2UxLnBuZycsXG4gICAgICB0aXRsZTogJ+WGsOS4jueBq+S5i+atjDUnLFxuICAgICAgcGVvcGxlOiAzMTIxLFxuICAgICAgYXV0aG9yOiBcIueOsuePkVwiXG4gICAgfV0sXG4gICAgbW9yZUluZm9ybWF0aW9uOiB7XG4gICAgICB3b3JkczogNDIuMyxcbiAgICAgIHRpbWU6ICcyMDE4LzkvMTQnLFxuICAgICAgcHVibGlzaGVyOiAn5Ye654mI56S+JyxcbiAgICAgIG51bWJlcjogODU0NjIzNjQyNDUsXG4gICAgICBzdGF0ZW1lbnQ6ICfmnKzkuabmlbDlrZfniYjmnYPnlLFcIuS4iua1t+Wuouacje+8iOWHuueJiO+8iVwi5o+Q5L6b77yM5bm255Sx5YW25o6I5p2D5o6M6ZiF56eR5oqA6IKh5Lu95pyJ6ZmQ5YWs5Y+45Yi25L2c5Y+R6KGM77yM6Iul5Lmm5Lit5ZCr5pyJ5LiN6Imv5L+h5oGv77yM6K+35Lmm5Y+L56ev5p6B5ZGK55+l5a6i5pyN44CCJ1xuICAgIH1cblxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIG1lbnU6IHRydWUsXG4gICAgICB0ZXh0Q29sb3I6ICcjIzAwMDAwMCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJ1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ+iOt+W+l+eahGlzYm5OdW0nICsgdGhpcy5pc2JuTnVtKTtcbiAgICB2YXIgaXNibk51bSA9IHRoaXMuaXNibk51bTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaXNibk51bSkge1xuICAgICAgX3N5c3RlbTYuZGVmYXVsdC5nZXQoe1xuICAgICAgICBrZXk6IGlzYm5OdW0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBzdWNjZXNzXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgdmFyIGJvb2tpbmZvID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICB0aGF0LmJvb2tDb3Zlci50aXRsZSA9IGJvb2tpbmZvLmJvb2tOYW1lO1xuICAgICAgICAgIHRoYXQuYm9va0NvdmVyLmF1dGhvciA9IGJvb2tpbmZvLmF1dGhvck5hbWU7XG4gICAgICAgICAgdGhhdC5ib29rQ292ZXIucHJlc2VudGF0aW9uID0gYm9va2luZm8uY29udGVudDtcbiAgICAgICAgICB0aGF0LmJvb2tDb3Zlci5pbWFnZSA9IGJvb2tpbmZvLmJvb2tMb2dvVXJsO1xuICAgICAgICAgIHRoYXQuYm9va0NvdmVyLmlzYm5OdW0gPSBpc2JuTnVtO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGNvZGU9XCIgKyBjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBvbk1lbnVQcmVzczogZnVuY3Rpb24gb25NZW51UHJlc3MoKSB7XG4gICAgX3N5c3RlbTQuZGVmYXVsdC5zaG93Q29udGV4dE1lbnUoe1xuICAgICAgaXRlbUxpc3Q6IFsn5YiG5LqrJ11cbiAgICB9KTtcbiAgfSxcbiAgYmFjazogZnVuY3Rpb24gYmFjaygpIHtcbiAgICBfc3lzdGVtMi5kZWZhdWx0LmJhY2soKTtcbiAgfSxcbiAgYWRkVG9Cb29rc2hlbGY6IGZ1bmN0aW9uIGFkZFRvQm9va3NoZWxmKCkge1xuICAgIF9zeXN0ZW00LmRlZmF1bHQuc2hvd0NvbnRleHRNZW51KHtcbiAgICAgIGl0ZW1MaXN0OiBbJ+W3suWKoOWFpei/keacn+mYheivu+iuoeWIkiddXG4gICAgfSk7XG4gIH0sXG4gIHRvUmVhZDogZnVuY3Rpb24gdG9SZWFkKCkge1xuICAgIF9zeXN0ZW00LmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6ICfmt7vliqDpmIXor7vmj5DphpLmiJDlip8nLFxuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICBncmF2aXR5OiAnY2VudGVyJ1xuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9Cb29rZGV0YWlscy9pbmRleC51eFxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9