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
/******/ 	return __webpack_require__(__webpack_require__.s = 240);
/******/ })
/************************************************************************/
/******/ ({

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(241)
__webpack_require__(245)
var $app_template$ = __webpack_require__(249)
var $app_style$ = __webpack_require__(250)
var $app_script$ = __webpack_require__(251)

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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(242)
var $app_style$ = __webpack_require__(243)
var $app_script$ = __webpack_require__(244)

$app_define$('@app-component/reader_paihang_component_searchbar', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "div_search"
      ],
      "events": {
        "click": "clickToSearch"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.searchbar}
          },
          "classList": [
            "image_search"
          ]
        },
        {
          "type": "text",
          "attr": {},
          "classList": [
            "place_holder"
          ],
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return this.placeholder}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".div_search": {
    "backgroundColor": "#f2f2f2",
    "width": "684px",
    "height": "64px",
    "marginLeft": "33px",
    "marginRight": "33px",
    "borderRadius": "8px",
    "alignItems": "center"
  },
  ".image_search": {
    "width": "33px",
    "height": "33px",
    "marginTop": "17px",
    "marginRight": "17px",
    "marginBottom": "17px",
    "marginLeft": "17px"
  },
  ".place_holder": {
    "width": "500px",
    "height": "40px",
    "fontSize": "27px",
    "color": "#1A1A1A",
    "opacity": 0.3
  }
}

/***/ }),

/***/ 244:
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
        placeholder: '设计中的设计'
    },
    props: ['url', 'placeholder', 'searchbar'],
    onInit: function onInit() {},
    clickToSearch: function clickToSearch() {
        _system2.default.push({ uri: '/Page_Search' });
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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(246)
var $app_style$ = __webpack_require__(247)
var $app_script$ = __webpack_require__(248)

$app_define$('@app-component/paihanglist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 246:
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
        "single-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "repeat": function () {return this.list[this.contentType]},
          "classList": function () {return [this.$idx===0?'first-single-product':'single-product']},
          "events": {
            "click": function (evt){this.goToPage(this.$item,evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.image}
              },
              "classList": [
                "single-image"
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
                        "value": function () {return this.$item.title}
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
                        "value": function () {return this.$item.presentation}
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
                          ],
                          "children": [
                            {
                              "type": "span",
                              "attr": {
                                "value": function () {return this.$item.writer}
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
                        "single-div-clazz"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {},
                          "classList": [
                            "single-clazz"
                          ],
                          "children": [
                            {
                              "type": "span",
                              "attr": {
                                "value": function () {return this.$item.novelType}
                              }
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {},
                          "classList": [
                            "single-clazz"
                          ],
                          "children": [
                            {
                              "type": "span",
                              "attr": {
                                "value": function () {return this.$item.evaluation}
                              }
                            }
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
                    "line"
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

/***/ 247:
/***/ (function(module, exports) {

module.exports = {
  ".single-container": {
    "height": "100%",
    "marginTop": "0px",
    "marginRight": "33px",
    "marginBottom": "0px",
    "marginLeft": "33px",
    "flexDirection": "column"
  },
  ".single-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  ".first-single-product": {
    "width": "533px",
    "height": "192px",
    "justifyContent": "space-between"
  },
  ".single-product": {
    "marginTop": "17px",
    "width": "533px",
    "height": "192px",
    "justifyContent": "space-between"
  },
  ".single-image": {
    "width": "125px",
    "height": "167px",
    "borderRadius": "8px"
  },
  ".single-description": {
    "flexDirection": "column",
    "justifyContent": "space-around",
    "marginLeft": "33px",
    "width": "375px"
  },
  ".single-title": {
    "color": "#1A1A1A",
    "opacity": 1,
    "fontSize": "31.3px",
    "marginTop": "11px",
    "marginBottom": "17px"
  },
  ".single-brief": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "marginBottom": "17px"
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
    "textAlign": "center",
    "color": "#000000",
    "opacity": 0.5,
    "fontSize": "20px",
    "lineHeight": "24px",
    "backgroundColor": "rgba(118,118,118,0.1)",
    "borderRadius": "5px",
    "alignSelf": "center",
    "marginLeft": "10px",
    "paddingTop": "5px",
    "paddingRight": "15px",
    "paddingBottom": "5px",
    "paddingLeft": "15px"
  },
  ".line": {
    "width": "100%",
    "height": "1px",
    "backgroundColor": "rgba(24,34,51,0.2)",
    "marginTop": "40px"
  }
}

/***/ }),

/***/ 248:
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
		props: ['list', 'contentType']
	},

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

/***/ 249:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "paihang-box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "mallClassification-wrap"
      ],
      "children": [
        {
          "type": "reader_paihang_component_searchbar",
          "attr": {
            "url": "Page_RecentSearch",
            "searchbar": function () {return this.novelDatas.searchbar}
          }
        }
      ]
    },
    {
      "type": "tabs",
      "attr": {},
      "classList": [
        "tabs"
      ],
      "events": {
        "change": "changeTabactive"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.novelDatas.list},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-item"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "style": {
                        "color": function () {return this.$item.color},
                        "fontWeight": function () {return this.$item.font_weight}
                      },
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
                      "type": "div",
                      "attr": {},
                      "shown": function () {return this.$item.show_line},
                      "classList": [
                        "line"
                      ],
                      "style": {
                        "backgroundColor": function () {return this.novelDatas.color_active}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab-content"
          ],
          "style": {
            "height": function () {return this.screenHeight+'px'}
          },
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.novelDatas.list},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "container-text"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "mallClassification-left"
                      ],
                      "style": {
                        "height": function () {return this.screenHeight+'px'}
                      },
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "verticaltab-content"
                          ],
                          "children": [
                            {
                              "type": "list",
                              "attr": {},
                              "children": [
                                {
                                  "type": "list-item",
                                  "attr": {
                                    "type": "tab-item"
                                  },
                                  "repeat": function () {return this.tabArray},
                                  "children": [
                                    {
                                      "type": "text",
                                      "attr": {},
                                      "events": {
                                        "click": function (evt){this.detail(this.$idx,evt)}
                                      },
                                      "classList": function () {return [this.contentType==this.$idx?'verticaltab-active':'verticaltab-text']},
                                      "children": [
                                        {
                                          "type": "span",
                                          "attr": {
                                            "value": function () {return this.$item.title}
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
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "mallClassification-right"
                      ],
                      "children": [
                        {
                          "type": "list",
                          "attr": {},
                          "children": [
                            {
                              "type": "list-item",
                              "attr": {
                                "type": "content-item"
                              },
                              "children": [
                                {
                                  "type": "paihanglist",
                                  "attr": {
                                    "list": function () {return this.novelDatas.novelList[this.$idx]},
                                    "contentType": function () {return this.contentType}
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

/***/ 250:
/***/ (function(module, exports) {

module.exports = {
  ".paihang-box": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "marginBottom": "100px"
  },
  ".mallClassification-wrap": {
    "width": "683px",
    "marginTop": "17px",
    "marginRight": "34px",
    "marginBottom": "36px",
    "marginLeft": "34px"
  },
  ".tab-bar": {
    "marginLeft": "244px",
    "marginRight": "256px",
    "height": "100px"
  },
  ".tab-item": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".tab-item text": {
    "opacity": 0.5,
    "marginBottom": "12px",
    "fontSize": "31.3px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    },
    "fontSize:active": "31.3px",
    "marginBottom:active": "8px",
    "opacity:active": 1
  },
  ".line": {
    "width": "100px",
    "height": "4px"
  },
  ".container-text": {
    "width": "100%"
  },
  ".mallClassification-left": {
    "height": "100%",
    "width": "25%",
    "marginTop": "20px",
    "backgroundColor": "rgba(0,0,0,0.03)"
  },
  ".verticaltab-content": {
    "width": "151px",
    "marginBottom": "30px",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".verticaltab-text": {
    "paddingTop": "35px",
    "paddingBottom": "30px",
    "color": "#4A4A4A",
    "fontSize": "27.1px",
    "width": "100%",
    "textAlign": "center"
  },
  ".verticaltab-active": {
    "paddingTop": "35px",
    "paddingBottom": "30px",
    "color": "#CD2325",
    "fontSize": "27.1px",
    "width": "100%",
    "backgroundColor": "#ffffff",
    "textAlign": "center"
  },
  ".mallClassification-right": {
    "height": "100%",
    "marginTop": "20px",
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.device');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  data: {
    screenHeight: 0,
    tabArray: [{
      'title': '畅销周榜',
      'select': true
    }, {
      'title': '读者评分',
      'select': false
    }, {
      'title': '特价好书',
      'select': false
    }, {
      'title': '人气新书',
      'select': false
    }, {
      'title': '豆瓣评分',
      'select': false
    }, {
      'title': '当当人气',
      'select': false
    }],
    contentType: 0,
    sexType: "boy",
    novelDatas: {
      color_normal: '#1A1A1A',
      color_active: '#CD2325',

      searchbar: "./img/c_search_search.png",
      list: [{ title: '男生', show_line: false, color: '#1A1A1A', font_weight: 400 }, { title: '女生', show_line: false, color: '#1A1A1A', font_weight: 400 }],
      novelList: [[[{ image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '神墓', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '辰东', novelType: '玄幻', evaluation: '4.1万热度' }], [{ image: './TO_DELETE/p_youth.png', title: '这个大神有点痞', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '网文', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '这个大神有点痞', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '网文', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '这个大神有点痞', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '网文', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '这个大神有点痞', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '网文', evaluation: '4.1万热度' }], [{ image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_arc_of_war.png', title: '我们仨', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '杨绛', novelType: '文学', evaluation: '4.1万热度' }], [{ image: './TO_DELETE/p_youth.png', title: '斗破苍穹', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '天蚕土豆', novelType: '爽文', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '斗破苍穹', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '天蚕土豆', novelType: '爽文', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '斗破苍穹', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '天蚕土豆', novelType: '爽文', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '斗破苍穹', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '天蚕土豆', novelType: '爽文', evaluation: '4.1万热度' }], [{ image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_word.png', title: '射雕英雄传', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '金庸', novelType: '武侠', evaluation: '4.1万热度' }], [{ image: './TO_DELETE/p_youth.png', title: '经济管理学', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '经济', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '经济管理学', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '经济', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '经济管理学', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '经济', evaluation: '4.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '经济管理学', presentation: '一九九七年早春，阿瑗去世。一九九八年岁末，钟书去世。我们三人就此失散了。就这么轻易地失散了。 “世间好物不坚牢，彩云易散琉璃脆”。现在，只剩下了我一人。我清醒地看到以前当做“我们家”的寓所，只是旅途上的客栈而已。家在哪里，我不知道，我还在寻觅归途。', writer: '某某', novelType: '经济', evaluation: '4.1万热度' }]], [[{ image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '谁的青春不疯狂', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }], [{ image: './TO_DELETE/p_word.png', title: '悲伤逆流成河', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '悲伤逆流成河', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '悲伤逆流成河', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '悲伤逆流成河', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }], [{ image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '小王子', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }], [{ image: './TO_DELETE/p_word.png', title: '何以笙箫默', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '何以笙箫默', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '何以笙箫默', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '何以笙箫默', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }], [{ image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_youth.png', title: '微微一笑很倾城', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }], [{ image: './TO_DELETE/p_word.png', title: '泡沫之夏', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '泡沫之夏', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '泡沫之夏', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }, { image: './TO_DELETE/p_word.png', title: '泡沫之夏', presentation: '现在我们三个失散了。剩下的这个我，再也找不到他们了。我只能把我们一同生活的岁月，重温一遍，和他们再聚聚。', writer: '青春陌生', novelType: '青春', evaluation: '5.1万热度' }]]]
    }
  },

  onInit: function onInit() {
    this.$page.setTitleBar({
      textColor: '#1a1a1a',
      backgroundColor: '#f2f2f2',
      text: '排行',
      menu: true
    });

    var that = this;
    _system2.default.getInfo({
      success: function success(ret) {
        var height = ret.screenHeight;
        that.screenHeight = height - 230;
      }
    });
  },


  changeTabactive: function changeTabactive(e) {
    if (e.index === 0) {
      this.sexType = "boy";
    } else {
      this.sexType = "girl";
    }
    for (var i = 0; i < this.novelDatas.list.length; i++) {
      var element = this.novelDatas.list[i];
      element.show_line = false;
      element.color = this.novelDatas.color_normal;
      if (i === e.index) {
        element.show_line = true;
        element.color = this.novelDatas.color_active;
        element.font_weight = 500;
      } else {
        element.font_weight = 400;
      }
    }
  },

  detail: function detail(index) {
    this.contentType = index;
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvUGFnZV9QYWloYW5nL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDU3YjA5MzgwOWVkMTA4ZTY0OGQzIiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9Db21wb25lbnRfU2VhcmNoQmFyLnV4P2MzNTYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eD9mZjVkIiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXg/NzIzYiIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9jX3BhaWhhbmdfbGlzdC51eCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9jX3BhaWhhbmdfbGlzdC51eD82MzAyIiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvY29tcG9uZW50L2NfcGFpaGFuZ19saXN0LnV4P2ZiM2IiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvY19wYWloYW5nX2xpc3QudXg/Y2UzYiIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2luZGV4LnV4PzY5N2QiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9pbmRleC51eD9hZDI1Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvaW5kZXgudXg/NmI2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3YjA5MzgwOWVkMTA4ZTY0OGQzIiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9Db21wb25lbnRfU2VhcmNoQmFyLnV4P25hbWU9cmVhZGVyX3BhaWhhbmdfY29tcG9uZW50X3NlYXJjaGJhclwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX3BhaWhhbmdfbGlzdC51eD9uYW1lPXBhaWhhbmdsaXN0XCIpXG52YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2luZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2luZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMS4xLjEtU3RhYmxlLjMwMSd9KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9pbmRleC51eFxuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL0NvbXBvbmVudF9TZWFyY2hCYXIudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eCEuL0NvbXBvbmVudF9TZWFyY2hCYXIudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vQ29tcG9uZW50X1NlYXJjaEJhci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3JlYWRlcl9wYWloYW5nX2NvbXBvbmVudF9zZWFyY2hiYXInLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9Db21wb25lbnRfU2VhcmNoQmFyLnV4P25hbWU9cmVhZGVyX3BhaWhhbmdfY29tcG9uZW50X3NlYXJjaGJhclxuLy8gbW9kdWxlIGlkID0gMjQxXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJkaXZfc2VhcmNoXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJjbGlja1RvU2VhcmNoXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWFyY2hiYXJ9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImltYWdlX3NlYXJjaFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInBsYWNlX2hvbGRlclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eFxuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5kaXZfc2VhcmNoXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcIndpZHRoXCI6IFwiNjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE3cHhcIlxuICB9LFxuICBcIi5wbGFjZV9ob2xkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC4zXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvQ29tcG9uZW50X1NlYXJjaEJhci51eCEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXghL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9Db21wb25lbnRfU2VhcmNoQmFyLnV4XG4vLyBtb2R1bGUgaWQgPSAyNDNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N5c3RlbSA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXInKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3lzdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICforr7orqHkuK3nmoTorr7orqEnXG4gICAgfSxcbiAgICBwcm9wczogWyd1cmwnLCAncGxhY2Vob2xkZXInLCAnc2VhcmNoYmFyJ10sXG4gICAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fSxcbiAgICBjbGlja1RvU2VhcmNoOiBmdW5jdGlvbiBjbGlja1RvU2VhcmNoKCkge1xuICAgICAgICBfc3lzdGVtMi5kZWZhdWx0LnB1c2goeyB1cmk6ICcvUGFnZV9TZWFyY2gnIH0pO1xuICAgIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvY29tcG9uZW50L0NvbXBvbmVudF9TZWFyY2hCYXIudXhcbi8vIG1vZHVsZSBpZCA9IDI0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX3BhaWhhbmdfbGlzdC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9jX3BhaWhhbmdfbGlzdC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvY19wYWloYW5nX2xpc3QudXghLi9jX3BhaWhhbmdfbGlzdC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX3BhaWhhbmdfbGlzdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3BhaWhhbmdsaXN0JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvY19wYWloYW5nX2xpc3QudXg/bmFtZT1wYWloYW5nbGlzdFxuLy8gbW9kdWxlIGlkID0gMjQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJzaW5nbGUtY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2luZ2xlLWxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0W3RoaXMuY29udGVudFR5cGVdfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFt0aGlzLiRpZHg9PT0wPydmaXJzdC1zaW5nbGUtcHJvZHVjdCc6J3NpbmdsZS1wcm9kdWN0J119LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5nb1RvUGFnZSh0aGlzLiRpdGVtLGV2dCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNpbmdsZS1pbWFnZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNpbmdsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtYnJpZWZcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wcmVzZW50YXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1hdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS53cml0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWRpdi1jbGF6elwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1jbGF6elwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5vdmVsVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtY2xhenpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5ldmFsdWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImxpbmVcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvY29tcG9uZW50L2NfcGFpaGFuZ19saXN0LnV4XG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnNpbmdsZS1jb250YWluZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zaW5nbGUtbGlzdFwiOiB7XG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCIuZmlyc3Qtc2luZ2xlLXByb2R1Y3RcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MzNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTkycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLnNpbmdsZS1wcm9kdWN0XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIndpZHRoXCI6IFwiNTMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE5MnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5zaW5nbGUtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMjVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTY3cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1kZXNjcmlwdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzc1cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtdGl0bGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTFweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1icmllZlwiOiB7XG4gICAgXCJsaW5lc1wiOiAxLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1ib3R0b21cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCIuc2luZ2xlLWF1dGhvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxQTFBMUFcIixcbiAgICBcIm9wYWNpdHlcIjogMC41LFxuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNpbmdsZS1kaXYtY2xhenpcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1jbGF6elwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyNHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDExOCwxMTgsMTE4LDAuMSlcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVweFwiLFxuICAgIFwiYWxpZ25TZWxmXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNXB4XCJcbiAgfSxcbiAgXCIubGluZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjFweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNCwzNCw1MSwwLjIpXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHB4XCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9jX3BhaWhhbmdfbGlzdC51eCEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvY29tcG9uZW50L2NfcGFpaGFuZ19saXN0LnV4IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9jb21wb25lbnQvY19wYWloYW5nX2xpc3QudXhcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7J3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N5c3RlbSA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXInKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3lzdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXHRkYXRhOiB7XG5cdFx0cHJvcHM6IFsnbGlzdCcsICdjb250ZW50VHlwZSddXG5cdH0sXG5cblx0Z29Ub1BhZ2U6IGZ1bmN0aW9uIGdvVG9QYWdlKGl0ZW0pIHtcblx0XHRfc3lzdGVtMi5kZWZhdWx0LnB1c2goe1xuXHRcdFx0dXJpOiAnL1BhZ2VfQm9va2RldGFpbHMnLFxuXHRcdFx0cGFyYW1zOiB7IGl0ZW06IGl0ZW0gfVxuXHRcdH0pO1xuXHR9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2NvbXBvbmVudC9jX3BhaWhhbmdfbGlzdC51eFxuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJwYWloYW5nLWJveFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hbGxDbGFzc2lmaWNhdGlvbi13cmFwXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlYWRlcl9wYWloYW5nX2NvbXBvbmVudF9zZWFyY2hiYXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ1cmxcIjogXCJQYWdlX1JlY2VudFNlYXJjaFwiLFxuICAgICAgICAgICAgXCJzZWFyY2hiYXJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5vdmVsRGF0YXMuc2VhcmNoYmFyfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGFic1wiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogXCJjaGFuZ2VUYWJhY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGFiLWJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYi1iYXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5vdmVsRGF0YXMubGlzdH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRhYi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jb2xvcn0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnRXZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmZvbnRfd2VpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zaG93X2xpbmV9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ub3ZlbERhdGFzLmNvbG9yX2FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0YWItY29udGVudFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYi1jb250ZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNjcmVlbkhlaWdodCsncHgnfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5vdmVsRGF0YXMubGlzdH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRhaW5lci10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hbGxDbGFzc2lmaWNhdGlvbi1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNjcmVlbkhlaWdodCsncHgnfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsdGFiLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0YWItaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiQXJyYXl9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5kZXRhaWwodGhpcy4kaWR4LGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gW3RoaXMuY29udGVudFR5cGU9PXRoaXMuJGlkeD8ndmVydGljYWx0YWItYWN0aXZlJzondmVydGljYWx0YWItdGV4dCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFsbENsYXNzaWZpY2F0aW9uLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGFpaGFuZ2xpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ub3ZlbERhdGFzLm5vdmVsTGlzdFt0aGlzLiRpZHhdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbnRlbnRUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIucGFpaGFuZy1ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5tYWxsQ2xhc3NpZmljYXRpb24td3JhcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY4M3B4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjM0cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjM2cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzNHB4XCJcbiAgfSxcbiAgXCIudGFiLWJhclwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjQ0cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjU2cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIudGFiLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRhYi1pdGVtIHRleHRcIjoge1xuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFiLWl0ZW1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJ0XCIsXG4gICAgICAgICAgXCJuXCI6IFwidGV4dFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiZm9udFNpemU6YWN0aXZlXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b206YWN0aXZlXCI6IFwiOHB4XCIsXG4gICAgXCJvcGFjaXR5OmFjdGl2ZVwiOiAxXG4gIH0sXG4gIFwiLmxpbmVcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIuY29udGFpbmVyLXRleHRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIubWFsbENsYXNzaWZpY2F0aW9uLWxlZnRcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwid2lkdGhcIjogXCIyNSVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4wMylcIlxuICB9LFxuICBcIi52ZXJ0aWNhbHRhYi1jb250ZW50XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTUxcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi52ZXJ0aWNhbHRhYi10ZXh0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzNXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNEE0QTRBXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi52ZXJ0aWNhbHRhYi1hY3RpdmVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjM1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNDRDIzMjVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLm1hbGxDbGFzc2lmaWNhdGlvbi1yaWdodFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2luZGV4LnV4IS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUGFpaGFuZy9pbmRleC51eCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1BhaWhhbmcvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7J3VzZSBzdHJpY3QnO1xuXG52YXIgX3N5c3RlbSA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5kZXZpY2UnKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3lzdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBzY3JlZW5IZWlnaHQ6IDAsXG4gICAgdGFiQXJyYXk6IFt7XG4gICAgICAndGl0bGUnOiAn55WF6ZSA5ZGo5qacJyxcbiAgICAgICdzZWxlY3QnOiB0cnVlXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ+ivu+iAheivhOWIhicsXG4gICAgICAnc2VsZWN0JzogZmFsc2VcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAn54m55Lu35aW95LmmJyxcbiAgICAgICdzZWxlY3QnOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICfkurrmsJTmlrDkuaYnLFxuICAgICAgJ3NlbGVjdCc6IGZhbHNlXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ+ixhueTo+ivhOWIhicsXG4gICAgICAnc2VsZWN0JzogZmFsc2VcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAn5b2T5b2T5Lq65rCUJyxcbiAgICAgICdzZWxlY3QnOiBmYWxzZVxuICAgIH1dLFxuICAgIGNvbnRlbnRUeXBlOiAwLFxuICAgIHNleFR5cGU6IFwiYm95XCIsXG4gICAgbm92ZWxEYXRhczoge1xuICAgICAgY29sb3Jfbm9ybWFsOiAnIzFBMUExQScsXG4gICAgICBjb2xvcl9hY3RpdmU6ICcjQ0QyMzI1JyxcblxuICAgICAgc2VhcmNoYmFyOiBcIi4vaW1nL2Nfc2VhcmNoX3NlYXJjaC5wbmdcIixcbiAgICAgIGxpc3Q6IFt7IHRpdGxlOiAn55S355SfJywgc2hvd19saW5lOiBmYWxzZSwgY29sb3I6ICcjMUExQTFBJywgZm9udF93ZWlnaHQ6IDQwMCB9LCB7IHRpdGxlOiAn5aWz55SfJywgc2hvd19saW5lOiBmYWxzZSwgY29sb3I6ICcjMUExQTFBJywgZm9udF93ZWlnaHQ6IDQwMCB9XSxcbiAgICAgIG5vdmVsTGlzdDogW1tbeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+elnuWikycsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfovrDkuJwnLCBub3ZlbFR5cGU6ICfnjoTlubsnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn56We5aKTJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+i+sOS4nCcsIG5vdmVsVHlwZTogJ+eOhOW5uycsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICfnpZ7lopMnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn6L6w5LicJywgbm92ZWxUeXBlOiAn546E5bm7JywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+elnuWikycsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfovrDkuJwnLCBub3ZlbFR5cGU6ICfnjoTlubsnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn56We5aKTJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+i+sOS4nCcsIG5vdmVsVHlwZTogJ+eOhOW5uycsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICfnpZ7lopMnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn6L6w5LicJywgbm92ZWxUeXBlOiAn546E5bm7JywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+elnuWikycsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfovrDkuJwnLCBub3ZlbFR5cGU6ICfnjoTlubsnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn56We5aKTJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+i+sOS4nCcsIG5vdmVsVHlwZTogJ+eOhOW5uycsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH1dLCBbeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICfov5nkuKrlpKfnpZ7mnInngrnnl54nLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn5p+Q5p+QJywgbm92ZWxUeXBlOiAn572R5paHJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICfov5nkuKrlpKfnpZ7mnInngrnnl54nLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn5p+Q5p+QJywgbm92ZWxUeXBlOiAn572R5paHJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICfov5nkuKrlpKfnpZ7mnInngrnnl54nLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn5p+Q5p+QJywgbm92ZWxUeXBlOiAn572R5paHJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICfov5nkuKrlpKfnpZ7mnInngrnnl54nLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn5p+Q5p+QJywgbm92ZWxUeXBlOiAn572R5paHJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfV0sIFt7IGltYWdlOiAnLi9UT19ERUxFVEUvcF9hcmNfb2Zfd2FyLnBuZycsIHRpdGxlOiAn5oiR5Lus5LuoJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+adqOe7mycsIG5vdmVsVHlwZTogJ+aWh+WtpicsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX2FyY19vZl93YXIucG5nJywgdGl0bGU6ICfmiJHku6zku6gnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn5p2o57ubJywgbm92ZWxUeXBlOiAn5paH5a2mJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfYXJjX29mX3dhci5wbmcnLCB0aXRsZTogJ+aIkeS7rOS7qCcsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfmnajnu5snLCBub3ZlbFR5cGU6ICfmloflraYnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF9hcmNfb2Zfd2FyLnBuZycsIHRpdGxlOiAn5oiR5Lus5LuoJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+adqOe7mycsIG5vdmVsVHlwZTogJ+aWh+WtpicsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX2FyY19vZl93YXIucG5nJywgdGl0bGU6ICfmiJHku6zku6gnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn5p2o57ubJywgbm92ZWxUeXBlOiAn5paH5a2mJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfYXJjX29mX3dhci5wbmcnLCB0aXRsZTogJ+aIkeS7rOS7qCcsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfmnajnu5snLCBub3ZlbFR5cGU6ICfmloflraYnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF9hcmNfb2Zfd2FyLnBuZycsIHRpdGxlOiAn5oiR5Lus5LuoJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+adqOe7mycsIG5vdmVsVHlwZTogJ+aWh+WtpicsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX2FyY19vZl93YXIucG5nJywgdGl0bGU6ICfmiJHku6zku6gnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn5p2o57ubJywgbm92ZWxUeXBlOiAn5paH5a2mJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfV0sIFt7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+aWl+egtOiLjeepuScsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICflpKnompXlnJ/osYYnLCBub3ZlbFR5cGU6ICfniL3mlocnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+aWl+egtOiLjeepuScsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICflpKnompXlnJ/osYYnLCBub3ZlbFR5cGU6ICfniL3mlocnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+aWl+egtOiLjeepuScsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICflpKnompXlnJ/osYYnLCBub3ZlbFR5cGU6ICfniL3mlocnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+aWl+egtOiLjeepuScsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICflpKnompXlnJ/osYYnLCBub3ZlbFR5cGU6ICfniL3mlocnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9XSwgW3sgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICflsITpm5Xoi7Hpm4TkvKAnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn6YeR5bq4Jywgbm92ZWxUeXBlOiAn5q2m5L6gJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+WwhOmbleiLsembhOS8oCcsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfph5HlurgnLCBub3ZlbFR5cGU6ICfmrabkvqAnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5bCE6ZuV6Iux6ZuE5LygJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+mHkeW6uCcsIG5vdmVsVHlwZTogJ+atpuS+oCcsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICflsITpm5Xoi7Hpm4TkvKAnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn6YeR5bq4Jywgbm92ZWxUeXBlOiAn5q2m5L6gJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+WwhOmbleiLsembhOS8oCcsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfph5HlurgnLCBub3ZlbFR5cGU6ICfmrabkvqAnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5bCE6ZuV6Iux6ZuE5LygJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+mHkeW6uCcsIG5vdmVsVHlwZTogJ+atpuS+oCcsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICflsITpm5Xoi7Hpm4TkvKAnLCBwcmVzZW50YXRpb246ICfkuIDkuZ3kuZ3kuIPlubTml6nmmKXvvIzpmL/nkZfljrvkuJbjgILkuIDkuZ3kuZ3lhavlubTlsoHmnKvvvIzpkp/kuabljrvkuJbjgILmiJHku6zkuInkurrlsLHmraTlpLHmlaPkuobjgILlsLHov5nkuYjovbvmmJPlnLDlpLHmlaPkuobjgIIg4oCc5LiW6Ze05aW954mp5LiN5Z2a54mi77yM5b2p5LqR5piT5pWj55CJ55KD6ISG4oCd44CC546w5Zyo77yM5Y+q5Ymp5LiL5LqG5oiR5LiA5Lq644CC5oiR5riF6YaS5Zyw55yL5Yiw5Lul5YmN5b2T5YGa4oCc5oiR5Lus5a624oCd55qE5a+T5omA77yM5Y+q5piv5peF6YCU5LiK55qE5a6i5qCI6ICM5bey44CC5a625Zyo5ZOq6YeM77yM5oiR5LiN55+l6YGT77yM5oiR6L+Y5Zyo5a+76KeF5b2S6YCU44CCJywgd3JpdGVyOiAn6YeR5bq4Jywgbm92ZWxUeXBlOiAn5q2m5L6gJywgZXZhbHVhdGlvbjogJzQuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+WwhOmbleiLsembhOS8oCcsIHByZXNlbnRhdGlvbjogJ+S4gOS5neS5neS4g+W5tOaXqeaYpe+8jOmYv+eRl+WOu+S4luOAguS4gOS5neS5neWFq+W5tOWygeacq++8jOmSn+S5puWOu+S4luOAguaIkeS7rOS4ieS6uuWwseatpOWkseaVo+S6huOAguWwsei/meS5iOi9u+aYk+WcsOWkseaVo+S6huOAgiDigJzkuJbpl7Tlpb3niankuI3lnZrniaLvvIzlvankupHmmJPmlaPnkInnkoPohIbigJ3jgILnjrDlnKjvvIzlj6rliankuIvkuobmiJHkuIDkurrjgILmiJHmuIXphpLlnLDnnIvliLDku6XliY3lvZPlgZrigJzmiJHku6zlrrbigJ3nmoTlr5PmiYDvvIzlj6rmmK/ml4XpgJTkuIrnmoTlrqLmoIjogIzlt7LjgILlrrblnKjlk6rph4zvvIzmiJHkuI3nn6XpgZPvvIzmiJHov5jlnKjlr7vop4XlvZLpgJTjgIInLCB3cml0ZXI6ICfph5HlurgnLCBub3ZlbFR5cGU6ICfmrabkvqAnLCBldmFsdWF0aW9uOiAnNC4x5LiH54Ot5bqmJyB9XSwgW3sgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn57uP5rWO566h55CG5a2mJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+afkOafkCcsIG5vdmVsVHlwZTogJ+e7j+a1jicsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn57uP5rWO566h55CG5a2mJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+afkOafkCcsIG5vdmVsVHlwZTogJ+e7j+a1jicsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn57uP5rWO566h55CG5a2mJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+afkOafkCcsIG5vdmVsVHlwZTogJ+e7j+a1jicsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn57uP5rWO566h55CG5a2mJywgcHJlc2VudGF0aW9uOiAn5LiA5Lmd5Lmd5LiD5bm05pep5pil77yM6Zi/55GX5Y675LiW44CC5LiA5Lmd5Lmd5YWr5bm05bKB5pyr77yM6ZKf5Lmm5Y675LiW44CC5oiR5Lus5LiJ5Lq65bCx5q2k5aSx5pWj5LqG44CC5bCx6L+Z5LmI6L275piT5Zyw5aSx5pWj5LqG44CCIOKAnOS4lumXtOWlveeJqeS4jeWdmueJou+8jOW9qeS6keaYk+aVo+eQieeSg+iEhuKAneOAgueOsOWcqO+8jOWPquWJqeS4i+S6huaIkeS4gOS6uuOAguaIkea4hemGkuWcsOeci+WIsOS7peWJjeW9k+WBmuKAnOaIkeS7rOWutuKAneeahOWvk+aJgO+8jOWPquaYr+aXhemAlOS4iueahOWuouagiOiAjOW3suOAguWutuWcqOWTqumHjO+8jOaIkeS4jeefpemBk++8jOaIkei/mOWcqOWvu+inheW9kumAlOOAgicsIHdyaXRlcjogJ+afkOafkCcsIG5vdmVsVHlwZTogJ+e7j+a1jicsIGV2YWx1YXRpb246ICc0LjHkuIfng63luqYnIH1dXSwgW1t7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+iwgeeahOmdkuaYpeS4jeeWr+eLgicsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn6LCB55qE6Z2S5pil5LiN55av54uCJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICfosIHnmoTpnZLmmKXkuI3nlq/ni4InLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+iwgeeahOmdkuaYpeS4jeeWr+eLgicsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn6LCB55qE6Z2S5pil5LiN55av54uCJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICfosIHnmoTpnZLmmKXkuI3nlq/ni4InLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+iwgeeahOmdkuaYpeS4jeeWr+eLgicsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn6LCB55qE6Z2S5pil5LiN55av54uCJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfV0sIFt7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5oKy5Lyk6YCG5rWB5oiQ5rKzJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+aCsuS8pOmAhua1geaIkOaysycsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICfmgrLkvKTpgIbmtYHmiJDmsrMnLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5oKy5Lyk6YCG5rWB5oiQ5rKzJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfV0sIFt7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+Wwj+eOi+WtkCcsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn5bCP546L5a2QJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICflsI/njovlrZAnLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+Wwj+eOi+WtkCcsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn5bCP546L5a2QJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICflsI/njovlrZAnLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+Wwj+eOi+WtkCcsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn5bCP546L5a2QJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfV0sIFt7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5L2V5Lul56yZ566r6buYJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+S9leS7peesmeeuq+m7mCcsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICfkvZXku6XnrJnnrqvpu5gnLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5L2V5Lul56yZ566r6buYJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfV0sIFt7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+W+ruW+ruS4gOeskeW+iOWAvuWfjicsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn5b6u5b6u5LiA56yR5b6I5YC+5Z+OJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICflvq7lvq7kuIDnrJHlvojlgL7ln44nLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+W+ruW+ruS4gOeskeW+iOWAvuWfjicsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn5b6u5b6u5LiA56yR5b6I5YC+5Z+OJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3BfeW91dGgucG5nJywgdGl0bGU6ICflvq7lvq7kuIDnrJHlvojlgL7ln44nLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF95b3V0aC5wbmcnLCB0aXRsZTogJ+W+ruW+ruS4gOeskeW+iOWAvuWfjicsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3lvdXRoLnBuZycsIHRpdGxlOiAn5b6u5b6u5LiA56yR5b6I5YC+5Z+OJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfV0sIFt7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5rOh5rKr5LmL5aSPJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfSwgeyBpbWFnZTogJy4vVE9fREVMRVRFL3Bfd29yZC5wbmcnLCB0aXRsZTogJ+azoeayq+S5i+WkjycsIHByZXNlbnRhdGlvbjogJ+eOsOWcqOaIkeS7rOS4ieS4quWkseaVo+S6huOAguWJqeS4i+eahOi/meS4quaIke+8jOWGjeS5n+aJvuS4jeWIsOS7luS7rOS6huOAguaIkeWPquiDveaKiuaIkeS7rOS4gOWQjOeUn+a0u+eahOWygeaciO+8jOmHjea4qeS4gOmBje+8jOWSjOS7luS7rOWGjeiBmuiBmuOAgicsIHdyaXRlcjogJ+mdkuaYpemZjOeUnycsIG5vdmVsVHlwZTogJ+mdkuaYpScsIGV2YWx1YXRpb246ICc1LjHkuIfng63luqYnIH0sIHsgaW1hZ2U6ICcuL1RPX0RFTEVURS9wX3dvcmQucG5nJywgdGl0bGU6ICfms6HmsqvkuYvlpI8nLCBwcmVzZW50YXRpb246ICfnjrDlnKjmiJHku6zkuInkuKrlpLHmlaPkuobjgILliankuIvnmoTov5nkuKrmiJHvvIzlho3kuZ/mib7kuI3liLDku5bku6zkuobjgILmiJHlj6rog73miormiJHku6zkuIDlkIznlJ/mtLvnmoTlsoHmnIjvvIzph43muKnkuIDpgY3vvIzlkozku5bku6zlho3ogZrogZrjgIInLCB3cml0ZXI6ICfpnZLmmKXpmYznlJ8nLCBub3ZlbFR5cGU6ICfpnZLmmKUnLCBldmFsdWF0aW9uOiAnNS4x5LiH54Ot5bqmJyB9LCB7IGltYWdlOiAnLi9UT19ERUxFVEUvcF93b3JkLnBuZycsIHRpdGxlOiAn5rOh5rKr5LmL5aSPJywgcHJlc2VudGF0aW9uOiAn546w5Zyo5oiR5Lus5LiJ5Liq5aSx5pWj5LqG44CC5Ymp5LiL55qE6L+Z5Liq5oiR77yM5YaN5Lmf5om+5LiN5Yiw5LuW5Lus5LqG44CC5oiR5Y+q6IO95oqK5oiR5Lus5LiA5ZCM55Sf5rS755qE5bKB5pyI77yM6YeN5rip5LiA6YGN77yM5ZKM5LuW5Lus5YaN6IGa6IGa44CCJywgd3JpdGVyOiAn6Z2S5pil6ZmM55SfJywgbm92ZWxUeXBlOiAn6Z2S5pilJywgZXZhbHVhdGlvbjogJzUuMeS4h+eDreW6picgfV1dXVxuICAgIH1cbiAgfSxcblxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicsXG4gICAgICB0ZXh0OiAn5o6S6KGMJyxcbiAgICAgIG1lbnU6IHRydWVcbiAgICB9KTtcblxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBfc3lzdGVtMi5kZWZhdWx0LmdldEluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJldC5zY3JlZW5IZWlnaHQ7XG4gICAgICAgIHRoYXQuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0IC0gMjMwO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG5cbiAgY2hhbmdlVGFiYWN0aXZlOiBmdW5jdGlvbiBjaGFuZ2VUYWJhY3RpdmUoZSkge1xuICAgIGlmIChlLmluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLnNleFR5cGUgPSBcImJveVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNleFR5cGUgPSBcImdpcmxcIjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vdmVsRGF0YXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vdmVsRGF0YXMubGlzdFtpXTtcbiAgICAgIGVsZW1lbnQuc2hvd19saW5lID0gZmFsc2U7XG4gICAgICBlbGVtZW50LmNvbG9yID0gdGhpcy5ub3ZlbERhdGFzLmNvbG9yX25vcm1hbDtcbiAgICAgIGlmIChpID09PSBlLmluZGV4KSB7XG4gICAgICAgIGVsZW1lbnQuc2hvd19saW5lID0gdHJ1ZTtcbiAgICAgICAgZWxlbWVudC5jb2xvciA9IHRoaXMubm92ZWxEYXRhcy5jb2xvcl9hY3RpdmU7XG4gICAgICAgIGVsZW1lbnQuZm9udF93ZWlnaHQgPSA1MDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmZvbnRfd2VpZ2h0ID0gNDAwO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkZXRhaWw6IGZ1bmN0aW9uIGRldGFpbChpbmRleCkge1xuICAgIHRoaXMuY29udGVudFR5cGUgPSBpbmRleDtcbiAgfVxuXG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9QYWloYW5nL2luZGV4LnV4XG4vLyBtb2R1bGUgaWQgPSAyNTFcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==