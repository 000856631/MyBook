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
/******/ 	return __webpack_require__(__webpack_require__.s = 264);
/******/ })
/************************************************************************/
/******/ ({

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265)
__webpack_require__(269)
var $app_template$ = __webpack_require__(273)
var $app_style$ = __webpack_require__(274)
var $app_script$ = __webpack_require__(275)

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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(266)
var $app_style$ = __webpack_require__(267)
var $app_script$ = __webpack_require__(268)

$app_define$('@app-component/page10_1', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.list},
      "children": [
        {
          "type": "text",
          "attr": {},
          "classList": [
            "red"
          ],
          "shown": function () {return this.$item==this.prop2},
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return this.prop2}
              }
            }
          ]
        },
        {
          "type": "text",
          "attr": {},
          "shown": function () {return this.$item!=this.prop2},
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

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = {
  ".red": {
    "color": "rgb(187,17,17)"
  }
}

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['prop1', 'prop2'],
  data: {
    list: []
  },
  isNull: function isNull(str) {
    if (str === null || str === undefined || str === "") {
      return true;
    } else {
      return false;
    }
  },
  watchPropsChange: function watchPropsChange() {
    if (this.isNull(this.prop1) || this.isNull(this.prop2)) {
      return;
    }
    var source = this.prop1;
    var search = this.prop2;
    var ss1,
        tempArr = [],
        length = search.length;
    while (source.indexOf(search) !== -1) {
      if (0 !== source.indexOf(search)) {
        ss1 = source.substring(0, source.indexOf(search));
        source = source.substring(source.indexOf(search), source.length);
      } else {
        ss1 = source.substring(0, source.indexOf(search) + search.length);
        source = source.substring(source.indexOf(search) + length, source.length);
      }
      if (ss1 !== "") {
        tempArr.push(ss1);
      }
    }
    tempArr.push(source);
    this.list = tempArr;
  },
  onInit: function onInit() {
    this.watchPropsChange();
    this.$watch('prop2', 'watchPropsChange');
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

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(270)
var $app_style$ = __webpack_require__(271)
var $app_script$ = __webpack_require__(272)

$app_define$('@app-component/swi', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "swiper-container"
  ],
  "children": [
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
              "classList": [
                "swiper-list-item"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.img}
                      },
                      "classList": [
                        "swiper-image"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "swiper-number"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": function () {return this.$idx+1}
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

/***/ 271:
/***/ (function(module, exports) {

module.exports = {
  ".swiper-container": {
    "flexDirection": "column"
  },
  ".swiper-list": {
    "flexDirection": "row",
    "height": "269px"
  },
  ".swiper-list-item": {
    "height": "258px",
    "marginRight": "13px",
    "flexDirection": "column"
  },
  ".swiper-image": {
    "width": "158px",
    "height": "205px",
    "borderRadius": "8px"
  },
  ".swiper-number": {
    "width": "33px",
    "height": "33px",
    "borderRadius": "4.2px",
    "color": "#ffffff",
    "backgroundColor": "#FF0000",
    "textAlign": "center",
    "fontSize": "20.8px",
    "marginTop": "9px",
    "marginRight": "9px",
    "marginBottom": "9px",
    "marginLeft": "9px"
  },
  ".swiper-title": {
    "fontSize": "27.1px",
    "color": "#1A1A1A",
    "marginTop": "16px"
  }
}

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

module.exports = {
	data: {

		title: 'World!',
		banner: {
			title: '精选儿歌',
			link: '更多',
			uri: '../Common/img/swiper/arrow.png'
		},
		list: [{
			img: '../Common/img/swiper/1.png',
			icon: '../Common/img/swiper/icon.png',
			title: '交通规则要牢记'
		}, {
			img: '../Common/img/swiper/2.png',
			icon: '../Common/img/swiper/icon.png',
			title: '我的好朋友'
		}, {
			img: '../Common/img/swiper/1.png',
			icon: '../Common/img/swiper/icon.png',
			title: '交通规则要牢记'
		}, {
			img: '../Common/img/swiper/2.png',
			icon: '../Common/img/swiper/icon.png',
			title: '我的好朋友'
		}, {
			img: '../Common/img/swiper/1.png',
			icon: '../Common/img/swiper/icon.png',
			title: '交通规则要牢记'
		}, {
			img: '../Common/img/swiper/2.png',
			icon: '../Common/img/swiper/icon.png',
			title: '我的好朋友'
		}]
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

/***/ 273:
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
        "search_bar_container"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "image_search_back_div_search"
          ],
          "events": {
            "click": "back"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Page_Search/img/search_back.png"
              },
              "classList": [
                "image_search_back"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "search_close"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "image_search_back_div"
              ],
              "events": {
                "click": "search"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Page_Search/img/search.png"
                  },
                  "classList": [
                    "image_search_result"
                  ]
                }
              ]
            },
            {
              "type": "input",
              "attr": {
                "id": "search",
                "name": "search",
                "value": function () {return this.inputValue},
                "placeholder": "搜索书籍、作者"
              },
              "classList": [
                "search"
              ],
              "id": "search",
              "events": {
                "change": "updateValue"
              }
            },
            {
              "type": "div",
              "attr": {
                "show": function () {return this.inputValue!=''}
              },
              "classList": [
                "image_search_back_div"
              ],
              "events": {
                "click": "resetSearchValue"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Page_Search/img/search_close.png"
                  },
                  "classList": [
                    "image_search_result",
                    "close_size"
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
        "panel"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "shown": function () {return this.showPageType==='searchBar'},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "div_allsearch"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "change_search"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "all_find"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "大家都在看"
                          }
                        }
                      ]
                    },
                    {
                      "type": "a",
                      "attr": {},
                      "classList": [
                        "a_change_search"
                      ],
                      "events": {
                        "click": "changeSearchWord"
                      },
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "换一换"
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
                    "spare_bar"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "change_content"
                  ],
                  "children": [
                    {
                      "type": "block",
                      "attr": {},
                      "repeat": function () {return this.list},
                      "children": [
                        {
                          "type": "a",
                          "attr": {},
                          "classList": [
                            "a_item"
                          ],
                          "events": {
                            "click": function (evt){this.setInputValue(this.$item.name,evt)}
                          },
                          "children": [
                            {
                              "type": "span",
                              "attr": {
                                "value": function () {return this.$item.name}
                              }
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
                "div_allsearch"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "change_search"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "all_find"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "书籍热搜榜"
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
                    "spare_bar"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "shucheng-box-seven"
                  ],
                  "children": [
                    {
                      "type": "swi",
                      "attr": {
                        "list": function () {return this.subjectlist},
                        "banner": function () {return this.banner}
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
                "div_allsearch"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "change_search"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "all_find"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "搜索历史"
                          }
                        }
                      ]
                    },
                    {
                      "type": "a",
                      "attr": {},
                      "classList": [
                        "a_change_search"
                      ],
                      "events": {
                        "click": "clearHis"
                      },
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "清空"
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
                    "spare_bar"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "change_content"
                  ],
                  "children": [
                    {
                      "type": "block",
                      "attr": {},
                      "repeat": function () {return this.hisList},
                      "children": [
                        {
                          "type": "a",
                          "attr": {},
                          "classList": [
                            "a_item"
                          ],
                          "events": {
                            "click": function (evt){this.setInputValue(this.$item,evt)}
                          },
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
        },
        {
          "type": "block",
          "attr": {},
          "shown": function () {return this.showPageType==='result'},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "result_number"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "shown": function () {return this.searchResults.length>0},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": function () {return '找到'+this.searchResults.length+'本相关书籍'}
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "shown": function () {return !(this.searchResults.length>0)},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "没有找到相关书籍"
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
                "single-list"
              ],
              "children": [
                {
                  "type": "block",
                  "attr": {},
                  "repeat": function () {return this.searchResults},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "single-item"
                      ],
                      "events": {
                        "click": "clickToBookDetail"
                      },
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.$item.src}
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
                                    "value": function () {return this.$item.name}
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
                                    "value": "现代学生穿越三生三世十里桃花的世界，成为白浅的妹妹，保护白浅不吃苦，不经历伤情，成全墨渊与白浅"
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
                                  "type": "text",
                                  "attr": {},
                                  "classList": [
                                    "single-bottom-left"
                                  ],
                                  "children": [
                                    {
                                      "type": "span",
                                      "attr": {
                                        "value": "秋风雨"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {},
                                  "classList": [
                                    "single-bottom-right"
                                  ],
                                  "children": [
                                    {
                                      "type": "span",
                                      "attr": {
                                        "value": "今日16520在读"
                                      }
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
                        "single-line"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {}
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
          "type": "block",
          "attr": {},
          "shown": function () {return this.showPageType==='auto'},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "search-shujia"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "书架上找到2本书籍"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "search-shujia-book"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "shujia_hight_light_item"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Page_Search/TO_DELETE/author.png"
                          },
                          "classList": [
                            "shujia-book-image"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "shujia_search_text",
                            "margin_left"
                          ],
                          "children": [
                            {
                              "type": "page10_1",
                              "attr": {
                                "prop1": "三生三世十里桃花",
                                "prop2": function () {return this.inputValue}
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
                        "read-shujia"
                      ],
                      "events": {
                        "click": "clickToRead"
                      },
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "阅读"
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
                    "search-shujia-more"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "更多"
                          }
                        }
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Search/img/down_arrow.png"
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
                "high-light-line"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "auto_div"
              ],
              "children": [
                {
                  "type": "block",
                  "attr": {},
                  "repeat": function () {return this.autoList},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "hight_light_item"
                      ],
                      "events": {
                        "click": function (evt){this.directResultPage(this.$item.name,evt)}
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.src}
                          },
                          "classList": [
                            "rs_item_image"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "search_image_text",
                            "margin_left"
                          ],
                          "children": [
                            {
                              "type": "page10_1",
                              "attr": {
                                "prop1": function () {return this.$item.name},
                                "prop2": function () {return this.inputValue}
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

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".panel": {
    "width": "700px",
    "height": "100%",
    "marginLeft": "33px",
    "marginRight": "33px",
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".search_bar_container": {
    "alignItems": "center",
    "width": "696px",
    "height": "100px",
    "marginLeft": "17px",
    "marginRight": "33px"
  },
  ".search_close": {
    "backgroundColor": "#f2f2f2",
    "alignItems": "center",
    "borderRadius": "8px",
    "height": "64px",
    "width": "608px"
  },
  ".search": {
    "width": "440px",
    "height": "40px",
    "color": "#1a1a1a",
    "fontSize": "28px",
    "lineHeight": "40px",
    "marginRight": "33px"
  },
  ".image_search_back_div_search": {
    "width": "84px",
    "height": "100px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".image_search_back_div": {
    "width": "84px",
    "height": "100px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".image_search_back": {
    "width": "40px",
    "height": "40px"
  },
  ".search_text": {
    "color": "#cd853f",
    "fontSize": "30px"
  },
  ".div_image": {
    "width": "60px",
    "height": "60px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".div_allsearch": {
    "borderRadius": "5px",
    "flexDirection": "column"
  },
  ".change_search": {
    "width": "684px",
    "height": "30px",
    "marginTop": "41px",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  ".spare_bar": {
    "width": "684px",
    "height": "16px"
  },
  ".a_change_search": {
    "fontSize": "27.1px",
    "color": "#CD2325",
    "height": "34px",
    "lineHeight": "34px",
    "paddingLeft": "10px",
    "textAlign": "center"
  },
  ".all_find": {
    "fontSize": "31px",
    "color": "#1a1a1a",
    "height": "34px",
    "lineHeight": "34px"
  },
  ".change_content": {
    "width": "682px",
    "flexWrap": "wrap"
  },
  ".a_item": {
    "backgroundColor": "rgba(0,0,0,0.05)",
    "textAlign": "center",
    "height": "50px",
    "borderRadius": "8.3px",
    "lineHeight": "50px",
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "10px",
    "paddingLeft": "20px",
    "marginTop": "17px",
    "marginRight": "17px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "fontSize": "25px",
    "color": "#000000",
    "lines": 1
  },
  ".image_search_result": {
    "width": "33px",
    "height": "33px",
    "marginLeft": "17px",
    "marginRight": "17px"
  },
  ".search-shujia": {
    "flexDirection": "column",
    "marginTop": "60px"
  },
  ".search-shujia-book": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "width": "700px",
    "marginTop": "20px"
  },
  ".shujia_hight_light_item": {
    "width": "600px",
    "height": "134px",
    "textAlign": "center",
    "alignItems": "center"
  },
  ".shujia-book-image": {
    "width": "70px",
    "height": "70px"
  },
  ".shujia_search_text": {
    "width": "500px"
  },
  ".read-shujia": {
    "width": "117px",
    "height": "58px",
    "borderTopWidth": "2.1px",
    "borderRightWidth": "2.1px",
    "borderBottomWidth": "2.1px",
    "borderLeftWidth": "2.1px",
    "borderStyle": "solid",
    "borderTopColor": "#000000",
    "borderRightColor": "#000000",
    "borderBottomColor": "#000000",
    "borderLeftColor": "#000000",
    "borderRadius": "8.3px",
    "textAlign": "center"
  },
  ".search-shujia-more": {
    "justifyContent": "center",
    "height": "70px",
    "alignItems": "center"
  },
  ".search-shujia-more text": {
    "paddingTop": "10px",
    "paddingRight": "16px",
    "paddingBottom": "10px",
    "paddingLeft": "16px",
    "fontSize": "25px",
    "color": "#1A1A1A",
    "marginRight": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-shujia-more"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".search-shujia-more image": {
    "width": "33px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-shujia-more"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".high-light-line": {
    "width": "100%",
    "height": "0.5px",
    "marginTop": "17px",
    "backgroundColor": "#f2f2f2"
  },
  ".auto_div": {
    "width": "100%",
    "height": "100%",
    "alignItems": "flex-end",
    "flexDirection": "column"
  },
  ".auto_item": {
    "width": "620px",
    "height": "80px",
    "paddingLeft": "40px",
    "lineHeight": "80px"
  },
  ".border_bottom": {
    "width": "620px",
    "height": "1px",
    "backgroundColor": "#a9a9a9"
  },
  ".result_number": {
    "width": "700px",
    "fontSize": "20px",
    "marginBottom": "17px"
  },
  ".search_item_div": {
    "alignItems": "flex-start",
    "height": "317px",
    "width": "700px"
  },
  ".search_item_image": {
    "alignItems": "flex-start",
    "width": "217px",
    "height": "289px",
    "marginRight": "30px",
    "marginBottom": "11px"
  },
  ".rs_item_image": {
    "width": "70px",
    "height": "85px",
    "borderRadius": "6px"
  },
  ".rs_item_image_result": {
    "width": "217px",
    "height": "289px"
  },
  ".search_image_text": {
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "610px",
    "height": "120px",
    "borderBottomColor": "#182233",
    "borderBottomWidth": "0.5px"
  },
  ".search_image_text_result": {
    "flexDirection": "column",
    "width": "600px",
    "height": "289px",
    "borderBottomColor": "#182233",
    "borderBottomWidth": "0.5px"
  },
  ".result_title": {
    "width": "600px",
    "height": "40px",
    "marginTop": "15px"
  },
  ".result_content": {
    "width": "489px",
    "height": "210px",
    "flexDirection": "column",
    "marginTop": "24px"
  },
  ".result_content_main": {
    "width": "489px",
    "height": "175px",
    "marginBottom": "42px"
  },
  ".result_content_main_text": {
    "fontSize": "30px",
    "color": "#a9a9a9"
  },
  ".result_content_foot": {
    "width": "489px",
    "height": "35px",
    "justifyContent": "space-between"
  },
  ".result_content_foot_author": {
    "fontSize": "26px",
    "color": "#a9a9a9",
    "height": "35px",
    "lineHeight": "35px",
    "width": "100px"
  },
  ".result_content_foot_read": {
    "width": "140px",
    "height": "33px",
    "lineHeight": "33px",
    "textAlign": "center",
    "backgroundColor": "#f1f1f1",
    "color": "#a9a9a9",
    "fontSize": "18px",
    "borderRadius": "4.2px"
  },
  ".margin_left": {
    "marginLeft": "40px"
  },
  ".hight_light_item": {
    "width": "700px",
    "height": "120px",
    "alignItems": "center"
  },
  ".close_size": {
    "width": "30px",
    "height": "30px"
  },
  ".single-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  ".single-item": {
    "marginTop": "17px",
    "marginRight": "0px",
    "marginBottom": "11px",
    "marginLeft": "0px"
  },
  ".single-line": {
    "justifyContent": "flex-end"
  },
  ".single-line text": {
    "width": "434px",
    "height": "1px",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "single-line"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".single-product": {
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px"
  },
  ".single-description": {
    "flexDirection": "column",
    "width": "434px",
    "alignSelf": "center"
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
    "fontWeight": "bold",
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
  ".single-bottom-left": {
    "color": "#1A1A1A",
    "opacity": 0.5,
    "fontSize": "27.1px",
    "alignSelf": "center"
  },
  ".single-bottom-right": {
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

/***/ 275:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$("@app-module/system.router");

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: {
    key: "",
    inputValue: "",
    showPageType: "searchBar",
    isAutoClick: false,
    list: [],
    hisList: [],
    autoList: [],
    searchResults: [],
    subjectlist: [{
      img: './TO_DELETE/banner1.png',
      title: "活着活着就"
    }, {
      img: './TO_DELETE/banner2.png',
      title: "森林的秘密"
    }, {
      img: './TO_DELETE/banner1.png',
      title: "你就是我的"
    }, {
      img: './TO_DELETE/banner2.png',
      title: "皮囊"
    }, {
      img: './TO_DELETE/banner1.png',
      title: "小王子"
    }]
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      menu: false
    });

    this.list.push({ name: "悟空传" }, { name: "微微一笑很倾城" }, { name: "大明那些事儿" }, { name: "三生三世十里桃花" }, { name: "斗破苍穹" });

    this.autoList.push({ name: "三生三", src: './TO_DELETE/banner1.png' }, { name: "三生三世十里桃花", src: './TO_DELETE/banner2.png' }, { name: "三生三世十里桃花", src: './TO_DELETE/banner1.png' }, { name: "三生三世十里桃花", src: './TO_DELETE/banner2.png' });

    this.searchResults.push({ name: "三生三世十里菊花", src: './TO_DELETE/banner1.png' }, { name: "三生三世十里杏花", src: './TO_DELETE/banner2.png' }, { name: "三生三世十里荷花", src: './TO_DELETE/banner1.png' });
  },
  addHistory: function addHistory() {
    var isContain = false;
    for (var i = 0; i < this.hisList.length; i++) {
      if (this.hisList[i] === this.inputValue) {
        isContain = true;
        break;
      }
    }
    if (!isContain) {
      this.hisList.push(this.inputValue);
    }
  },
  find: function find() {
    if (this.inputValue === null || this.inputValue === undefined || this.inputValue === "") {
      return;
    }

    this.addHistory();
  },
  search: function search() {
    if (this.inputValue === null || this.inputValue === undefined || this.inputValue === "") {
      return;
    }
    this.showPageType = "result";
    this.isAutoClick = false;
    this.find();
  },
  updateValue: function updateValue(e) {
    this.inputValue = e.text;
    if (this.inputValue !== "" && this.inputValue !== undefined && this.inputValue !== null) {
      if (this.isAutoClick) {
        this.showPageType = "result";
        this.find();
      } else {
        this.showPageType = "auto";
      }

      this.isAutoClick = false;
    }
  },
  setInputValue: function setInputValue(text) {
    this.inputValue = text || "请输入搜索词汇";
  },
  changeSearchWord: function changeSearchWord() {
    this.list = [{ name: "无问西东" }, { name: "厉害了，我的国" }];
  },
  clearHis: function clearHis() {
    this.hisList = [];
  },
  back: function back() {
    _system2.default.back();
  },
  resetSearchValue: function resetSearchValue() {
    this.showPageType = "searchBar";
    this.inputValue = "";
  },
  directResultPage: function directResultPage(text) {
    this.isAutoClick = true;
    this.showPageType = "result";
    this.inputValue = text;
    this.find();
  },
  clickToBookDetail: function clickToBookDetail() {
    _system2.default.push({
      uri: '/Page_Bookdetails',
      params: { testId: 'testId' }
    });
  },
  clickToRead: function clickToRead() {
    _system2.default.push({
      uri: '/Page_Read',
      params: { testId: 'testId' }
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvUGFnZV9TZWFyY2gvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTdiMDkzODA5ZWQxMDhlNjQ4ZDMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2luZGV4LnV4Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9jb21wb25lbnQvY19oaWdodF9saWdodC51eCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvY29tcG9uZW50L2NfaGlnaHRfbGlnaHQudXg/NmNlOCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvY29tcG9uZW50L2NfaGlnaHRfbGlnaHQudXg/YTUzMiIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvY29tcG9uZW50L2NfaGlnaHRfbGlnaHQudXg/NTYyYiIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXg/MGM3NSIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4PzYzMDkiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eD8wNzc5Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9pbmRleC51eD9kYjc2Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9pbmRleC51eD9jOTEzIiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9pbmRleC51eD9mMDZjIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTdiMDkzODA5ZWQxMDhlNjQ4ZDMiLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfaGlnaHRfbGlnaHQudXg/bmFtZT1wYWdlMTBfMVwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eD9uYW1lPXN3aVwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2luZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcxLjEuMS1TdGFibGUuMzAxJ30pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX2hpZ2h0X2xpZ2h0LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9jb21wb25lbnQvY19oaWdodF9saWdodC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2hpZ2h0X2xpZ2h0LnV4IS4vY19oaWdodF9saWdodC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX2hpZ2h0X2xpZ2h0LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvcGFnZTEwXzEnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvY29tcG9uZW50L2NfaGlnaHRfbGlnaHQudXg/bmFtZT1wYWdlMTBfMVxuLy8gbW9kdWxlIGlkID0gMjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpc3R9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVkXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtPT10aGlzLnByb3AyfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnByb3AyfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbSE9dGhpcy5wcm9wMn0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9jb21wb25lbnQvY19oaWdodF9saWdodC51eFxuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5yZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMTg3LDE3LDE3KVwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2hpZ2h0X2xpZ2h0LnV4IS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2hpZ2h0X2xpZ2h0LnV4IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2hpZ2h0X2xpZ2h0LnV4XG4vLyBtb2R1bGUgaWQgPSAyNjdcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcHJvcHM6IFsncHJvcDEnLCAncHJvcDInXSxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFtdXG4gIH0sXG4gIGlzTnVsbDogZnVuY3Rpb24gaXNOdWxsKHN0cikge1xuICAgIGlmIChzdHIgPT09IG51bGwgfHwgc3RyID09PSB1bmRlZmluZWQgfHwgc3RyID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2hQcm9wc0NoYW5nZTogZnVuY3Rpb24gd2F0Y2hQcm9wc0NoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5pc051bGwodGhpcy5wcm9wMSkgfHwgdGhpcy5pc051bGwodGhpcy5wcm9wMikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMucHJvcDE7XG4gICAgdmFyIHNlYXJjaCA9IHRoaXMucHJvcDI7XG4gICAgdmFyIHNzMSxcbiAgICAgICAgdGVtcEFyciA9IFtdLFxuICAgICAgICBsZW5ndGggPSBzZWFyY2gubGVuZ3RoO1xuICAgIHdoaWxlIChzb3VyY2UuaW5kZXhPZihzZWFyY2gpICE9PSAtMSkge1xuICAgICAgaWYgKDAgIT09IHNvdXJjZS5pbmRleE9mKHNlYXJjaCkpIHtcbiAgICAgICAgc3MxID0gc291cmNlLnN1YnN0cmluZygwLCBzb3VyY2UuaW5kZXhPZihzZWFyY2gpKTtcbiAgICAgICAgc291cmNlID0gc291cmNlLnN1YnN0cmluZyhzb3VyY2UuaW5kZXhPZihzZWFyY2gpLCBzb3VyY2UubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNzMSA9IHNvdXJjZS5zdWJzdHJpbmcoMCwgc291cmNlLmluZGV4T2Yoc2VhcmNoKSArIHNlYXJjaC5sZW5ndGgpO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2Uuc3Vic3RyaW5nKHNvdXJjZS5pbmRleE9mKHNlYXJjaCkgKyBsZW5ndGgsIHNvdXJjZS5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgaWYgKHNzMSAhPT0gXCJcIikge1xuICAgICAgICB0ZW1wQXJyLnB1c2goc3MxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGVtcEFyci5wdXNoKHNvdXJjZSk7XG4gICAgdGhpcy5saXN0ID0gdGVtcEFycjtcbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy53YXRjaFByb3BzQ2hhbmdlKCk7XG4gICAgdGhpcy4kd2F0Y2goJ3Byb3AyJywgJ3dhdGNoUHJvcHNDaGFuZ2UnKTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ+mhtemdolZN5a+56LGh5Lit5bGe5oCnZGF0YeS4jeWPr+S4jnB1YmxpYywgcHJvdGVjdGVkLCBwcml2YXRl5ZCM5pe25a2Y5Zyo77yM6K+35L2/55SocHVibGlj5pu/5LujZGF0Ye+8gScpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCfpobXpnaJWTeWvueixoeS4reeahOWxnuaApycgKyBhY2MgKyAn55qE5YC85LiN6IO95L2/5Ye95pWw77yM6K+35L2/55So5a+56LGhJyk7XG4gICAgfVxuICB9KTtcbn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2hpZ2h0X2xpZ2h0LnV4XG4vLyBtb2R1bGUgaWQgPSAyNjhcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCEuL2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvc3dpJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eD9uYW1lPXN3aVxuLy8gbW9kdWxlIGlkID0gMjY5XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJzd2lwZXItY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInN3aXBlci1saXN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saXN0fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicHJvZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN3aXBlci1saXN0LWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGlkeCsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eFxuLy8gbW9kdWxlIGlkID0gMjcwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zd2lwZXItY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5zd2lwZXItbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNjlweFwiXG4gIH0sXG4gIFwiLnN3aXBlci1saXN0LWl0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjU4cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTNweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnN3aXBlci1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE1OHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuc3dpcGVyLW51bWJlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQuMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRjAwMDBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyMC44cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjlweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI5cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjlweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjlweFwiXG4gIH0sXG4gIFwiLnN3aXBlci10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNnB4XCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvY29tcG9uZW50L2NfaXRlbV9jb250YWluZXJfc3dpcGVyLnV4IS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9jb21wb25lbnQvY19pdGVtX2NvbnRhaW5lcl9zd2lwZXIudXhcbi8vIG1vZHVsZSBpZCA9IDI3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7J3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGF0YToge1xuXG5cdFx0dGl0bGU6ICdXb3JsZCEnLFxuXHRcdGJhbm5lcjoge1xuXHRcdFx0dGl0bGU6ICfnsr7pgInlhL/mrYwnLFxuXHRcdFx0bGluazogJ+abtOWkmicsXG5cdFx0XHR1cmk6ICcuLi9Db21tb24vaW1nL3N3aXBlci9hcnJvdy5wbmcnXG5cdFx0fSxcblx0XHRsaXN0OiBbe1xuXHRcdFx0aW1nOiAnLi4vQ29tbW9uL2ltZy9zd2lwZXIvMS5wbmcnLFxuXHRcdFx0aWNvbjogJy4uL0NvbW1vbi9pbWcvc3dpcGVyL2ljb24ucG5nJyxcblx0XHRcdHRpdGxlOiAn5Lqk6YCa6KeE5YiZ6KaB54mi6K6wJ1xuXHRcdH0sIHtcblx0XHRcdGltZzogJy4uL0NvbW1vbi9pbWcvc3dpcGVyLzIucG5nJyxcblx0XHRcdGljb246ICcuLi9Db21tb24vaW1nL3N3aXBlci9pY29uLnBuZycsXG5cdFx0XHR0aXRsZTogJ+aIkeeahOWlveaci+WPiydcblx0XHR9LCB7XG5cdFx0XHRpbWc6ICcuLi9Db21tb24vaW1nL3N3aXBlci8xLnBuZycsXG5cdFx0XHRpY29uOiAnLi4vQ29tbW9uL2ltZy9zd2lwZXIvaWNvbi5wbmcnLFxuXHRcdFx0dGl0bGU6ICfkuqTpgJrop4TliJnopoHniaLorrAnXG5cdFx0fSwge1xuXHRcdFx0aW1nOiAnLi4vQ29tbW9uL2ltZy9zd2lwZXIvMi5wbmcnLFxuXHRcdFx0aWNvbjogJy4uL0NvbW1vbi9pbWcvc3dpcGVyL2ljb24ucG5nJyxcblx0XHRcdHRpdGxlOiAn5oiR55qE5aW95pyL5Y+LJ1xuXHRcdH0sIHtcblx0XHRcdGltZzogJy4uL0NvbW1vbi9pbWcvc3dpcGVyLzEucG5nJyxcblx0XHRcdGljb246ICcuLi9Db21tb24vaW1nL3N3aXBlci9pY29uLnBuZycsXG5cdFx0XHR0aXRsZTogJ+S6pOmAmuinhOWImeimgeeJouiusCdcblx0XHR9LCB7XG5cdFx0XHRpbWc6ICcuLi9Db21tb24vaW1nL3N3aXBlci8yLnBuZycsXG5cdFx0XHRpY29uOiAnLi4vQ29tbW9uL2ltZy9zd2lwZXIvaWNvbi5wbmcnLFxuXHRcdFx0dGl0bGU6ICfmiJHnmoTlpb3mnIvlj4snXG5cdFx0fV1cblx0fVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ+mhtemdolZN5a+56LGh5Lit5bGe5oCnZGF0YeS4jeWPr+S4jnB1YmxpYywgcHJvdGVjdGVkLCBwcml2YXRl5ZCM5pe25a2Y5Zyo77yM6K+35L2/55SocHVibGlj5pu/5LujZGF0Ye+8gScpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCfpobXpnaJWTeWvueixoeS4reeahOWxnuaApycgKyBhY2MgKyAn55qE5YC85LiN6IO95L2/5Ye95pWw77yM6K+35L2/55So5a+56LGhJyk7XG4gICAgfVxuICB9KTtcbn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfU2VhcmNoL2NvbXBvbmVudC9jX2l0ZW1fY29udGFpbmVyX3N3aXBlci51eFxuLy8gbW9kdWxlIGlkID0gMjcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzZWFyY2hfYmFyX2NvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbWFnZV9zZWFyY2hfYmFja19kaXZfc2VhcmNoXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJiYWNrXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL1BhZ2VfU2VhcmNoL2ltZy9zZWFyY2hfYmFjay5wbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpbWFnZV9zZWFyY2hfYmFja1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2hfY2xvc2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImltYWdlX3NlYXJjaF9iYWNrX2RpdlwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL1BhZ2VfU2VhcmNoL2ltZy9zZWFyY2gucG5nXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2Vfc2VhcmNoX3Jlc3VsdFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbnB1dFZhbHVlfSxcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5pCc57Si5Lmm57GN44CB5L2c6ICFXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJ1cGRhdGVWYWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic2hvd1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSE9Jyd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImltYWdlX3NlYXJjaF9iYWNrX2RpdlwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwicmVzZXRTZWFyY2hWYWx1ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX1NlYXJjaC9pbWcvc2VhcmNoX2Nsb3NlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImltYWdlX3NlYXJjaF9yZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjbG9zZV9zaXplXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInBhbmVsXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3dQYWdlVHlwZT09PSdzZWFyY2hCYXInfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZGl2X2FsbHNlYXJjaFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNoYW5nZV9zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsbF9maW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWkp+WutumDveWcqOeci1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYV9jaGFuZ2Vfc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjaGFuZ2VTZWFyY2hXb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaNouS4gOaNolwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNwYXJlX2JhclwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VfY29udGVudFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KXt0aGlzLnNldElucHV0VmFsdWUodGhpcy4kaXRlbS5uYW1lLGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJkaXZfYWxsc2VhcmNoXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlX3NlYXJjaFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsX2ZpbmRcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Lmm57GN54Ot5pCc5qacXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3BhcmVfYmFyXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNodWNoZW5nLWJveC1zZXZlblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzd2lcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdWJqZWN0bGlzdH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhbm5lclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFubmVyfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZGl2X2FsbHNlYXJjaFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNoYW5nZV9zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsbF9maW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaQnOe0ouWOhuWPslwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYV9jaGFuZ2Vfc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGVhckhpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmuIXnqbpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFyZV9iYXJcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlX2NvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhpc0xpc3R9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYV9pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5zZXRJbnB1dFZhbHVlKHRoaXMuJGl0ZW0sZXZ0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2hvd1BhZ2VUeXBlPT09J3Jlc3VsdCd9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRfbnVtYmVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGg+MH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfmib7liLAnK3RoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGgrJ+acrOebuOWFs+S5puexjSd9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gISh0aGlzLnNlYXJjaFJlc3VsdHMubGVuZ3RoPjApfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5rKh5pyJ5om+5Yiw55u45YWz5Lmm57GNXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNpbmdsZS1saXN0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWFyY2hSZXN1bHRzfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9Cb29rRGV0YWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnNyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1icmllZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnjrDku6PlrabnlJ/nqb/otorkuInnlJ/kuInkuJbljYHph4zmoYPoirHnmoTkuJbnlYzvvIzmiJDkuLrnmb3mtYXnmoTlprnlprnvvIzkv53miqTnmb3mtYXkuI3lkIPoi6bvvIzkuI3nu4/ljobkvKTmg4XvvIzmiJDlhajloqjmuIrkuI7nmb3mtYVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWJvdHRvbS1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueni+mjjumbqFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWJvdHRvbS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLku4rml6UxNjUyMOWcqOivu1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaG93UGFnZVR5cGU9PT0nYXV0byd9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2gtc2h1amlhXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLkuabmnrbkuIrmib7liLAy5pys5Lmm57GNXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNlYXJjaC1zaHVqaWEtYm9va1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaHVqaWFfaGlnaHRfbGlnaHRfaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX1NlYXJjaC9UT19ERUxFVEUvYXV0aG9yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNodWppYS1ib29rLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2h1amlhX3NlYXJjaF90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5fbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhZ2UxMF8xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByb3AxXCI6IFwi5LiJ55Sf5LiJ5LiW5Y2B6YeM5qGD6IqxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcDJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWQtc2h1amlhXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGlja1RvUmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpmIXor7tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2gtc2h1amlhLW1vcmVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmm7TlpJpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvUGFnZV9TZWFyY2gvaW1nL2Rvd25fYXJyb3cucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJoaWdoLWxpZ2h0LWxpbmVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhdXRvX2RpdlwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYXV0b0xpc3R9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWdodF9saWdodF9pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5kaXJlY3RSZXN1bHRQYWdlKHRoaXMuJGl0ZW0ubmFtZSxldnQpfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnNyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnNfaXRlbV9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaF9pbWFnZV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5fbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhZ2UxMF8xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByb3AxXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5uYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wMlwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnBhbmVsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIuc2VhcmNoX2Jhcl9jb250YWluZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI2OTZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5zZWFyY2hfY2xvc2VcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YyZjJmMlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYwOHB4XCJcbiAgfSxcbiAgXCIuc2VhcmNoXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDQwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMWExYVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCJcbiAgfSxcbiAgXCIuaW1hZ2Vfc2VhcmNoX2JhY2tfZGl2X3NlYXJjaFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaF9iYWNrX2RpdlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaF9iYWNrXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnNlYXJjaF90ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2NkODUzZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuZGl2X2ltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5kaXZfYWxsc2VhcmNoXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmNoYW5nZV9zZWFyY2hcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDFweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCIuc3BhcmVfYmFyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjg0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5hX2NoYW5nZV9zZWFyY2hcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0NEMjMyNVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYWxsX2ZpbmRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcImhlaWdodFwiOiBcIjM0cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzNHB4XCJcbiAgfSxcbiAgXCIuY2hhbmdlX2NvbnRlbnRcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCIuYV9pdGVtXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4wNSlcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJsaW5lc1wiOiAxXG4gIH0sXG4gIFwiLmltYWdlX3NlYXJjaF9yZXN1bHRcIjoge1xuICAgIFwid2lkdGhcIjogXCIzM3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxN3B4XCJcbiAgfSxcbiAgXCIuc2VhcmNoLXNodWppYVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI2MHB4XCJcbiAgfSxcbiAgXCIuc2VhcmNoLXNodWppYS1ib29rXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI3MDBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnNodWppYV9oaWdodF9saWdodF9pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEzNHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zaHVqaWEtYm9vay1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcwcHhcIlxuICB9LFxuICBcIi5zaHVqaWFfc2VhcmNoX3RleHRcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MDBweFwiXG4gIH0sXG4gIFwiLnJlYWQtc2h1amlhXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTE3cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjU4cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMi4xcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIyLjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIyLjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMi4xcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNlYXJjaC1zaHVqaWEtbW9yZVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzBweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNlYXJjaC1zaHVqaWEtbW9yZSB0ZXh0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI4cHhcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInNlYXJjaC1zaHVqaWEtbW9yZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcInRcIixcbiAgICAgICAgICBcIm5cIjogXCJ0ZXh0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuc2VhcmNoLXNodWppYS1tb3JlIGltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzNweFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwic2VhcmNoLXNodWppYS1tb3JlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwidFwiLFxuICAgICAgICAgIFwiblwiOiBcImltYWdlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuaGlnaC1saWdodC1saW5lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMC41cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIlxuICB9LFxuICBcIi5hdXRvX2RpdlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmF1dG9faXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MHB4XCJcbiAgfSxcbiAgXCIuYm9yZGVyX2JvdHRvbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNhOWE5YTlcIlxuICB9LFxuICBcIi5yZXN1bHRfbnVtYmVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzAwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiXG4gIH0sXG4gIFwiLnNlYXJjaF9pdGVtX2RpdlwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzE3cHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzAwcHhcIlxuICB9LFxuICBcIi5zZWFyY2hfaXRlbV9pbWFnZVwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIyMTdweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjg5cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTFweFwiXG4gIH0sXG4gIFwiLnJzX2l0ZW1faW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4NXB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2cHhcIlxuICB9LFxuICBcIi5yc19pdGVtX2ltYWdlX3Jlc3VsdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIxN3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyODlweFwiXG4gIH0sXG4gIFwiLnNlYXJjaF9pbWFnZV90ZXh0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwid2lkdGhcIjogXCI2MTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcHhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiIzE4MjIzM1wiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIwLjVweFwiXG4gIH0sXG4gIFwiLnNlYXJjaF9pbWFnZV90ZXh0X3Jlc3VsdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYwMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyODlweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMTgyMjMzXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjAuNXB4XCJcbiAgfSxcbiAgXCIucmVzdWx0X3RpdGxlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE1cHhcIlxuICB9LFxuICBcIi5yZXN1bHRfY29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ4OXB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMTBweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjRweFwiXG4gIH0sXG4gIFwiLnJlc3VsdF9jb250ZW50X21haW5cIjoge1xuICAgIFwid2lkdGhcIjogXCI0ODlweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTc1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQycHhcIlxuICB9LFxuICBcIi5yZXN1bHRfY29udGVudF9tYWluX3RleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNhOWE5YTlcIlxuICB9LFxuICBcIi5yZXN1bHRfY29udGVudF9mb290XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDg5cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM1cHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLnJlc3VsdF9jb250ZW50X2Zvb3RfYXV0aG9yXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjZweFwiLFxuICAgIFwiY29sb3JcIjogXCIjYTlhOWE5XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzNXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzVweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDBweFwiXG4gIH0sXG4gIFwiLnJlc3VsdF9jb250ZW50X2Zvb3RfcmVhZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjFmMWYxXCIsXG4gICAgXCJjb2xvclwiOiBcIiNhOWE5YTlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMThweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNC4ycHhcIlxuICB9LFxuICBcIi5tYXJnaW5fbGVmdFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmhpZ2h0X2xpZ2h0X2l0ZW1cIjoge1xuICAgIFwid2lkdGhcIjogXCI3MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5jbG9zZV9zaXplXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1saXN0XCI6IHtcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiMwMDAwZmZcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcIi5zaW5nbGUtaXRlbVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTFweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLnNpbmdsZS1saW5lXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5zaW5nbGUtbGluZSB0ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDM0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjFweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjUpXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJzaW5nbGUtbGluZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcInRcIixcbiAgICAgICAgICBcIm5cIjogXCJ0ZXh0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuc2luZ2xlLXByb2R1Y3RcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLWRlc2NyaXB0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiNDM0cHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNpbmdsZS1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIxN3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyOTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtdGl0bGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjQwLjZweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zaW5nbGUtYnJpZWZcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzQuOXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0OXB4XCJcbiAgfSxcbiAgXCIuc2luZ2xlLWJvdHRvbVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5zaW5nbGUtYm90dG9tLWxlZnRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zaW5nbGUtYm90dG9tLXJpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2LjdweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI0cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4xKVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zcHhcIixcbiAgICBcImFsaWduU2VsZlwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9pbmRleC51eCEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9pbmRleC51eCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1NlYXJjaC9pbmRleC51eFxuLy8gbW9kdWxlIGlkID0gMjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zeXN0ZW0gPSAkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3lzdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkYXRhOiB7XG4gICAga2V5OiBcIlwiLFxuICAgIGlucHV0VmFsdWU6IFwiXCIsXG4gICAgc2hvd1BhZ2VUeXBlOiBcInNlYXJjaEJhclwiLFxuICAgIGlzQXV0b0NsaWNrOiBmYWxzZSxcbiAgICBsaXN0OiBbXSxcbiAgICBoaXNMaXN0OiBbXSxcbiAgICBhdXRvTGlzdDogW10sXG4gICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgc3ViamVjdGxpc3Q6IFt7XG4gICAgICBpbWc6ICcuL1RPX0RFTEVURS9iYW5uZXIxLnBuZycsXG4gICAgICB0aXRsZTogXCLmtLvnnYDmtLvnnYDlsLFcIlxuICAgIH0sIHtcbiAgICAgIGltZzogJy4vVE9fREVMRVRFL2Jhbm5lcjIucG5nJyxcbiAgICAgIHRpdGxlOiBcIuajruael+eahOenmOWvhlwiXG4gICAgfSwge1xuICAgICAgaW1nOiAnLi9UT19ERUxFVEUvYmFubmVyMS5wbmcnLFxuICAgICAgdGl0bGU6IFwi5L2g5bCx5piv5oiR55qEXCJcbiAgICB9LCB7XG4gICAgICBpbWc6ICcuL1RPX0RFTEVURS9iYW5uZXIyLnBuZycsXG4gICAgICB0aXRsZTogXCLnmq7lm4pcIlxuICAgIH0sIHtcbiAgICAgIGltZzogJy4vVE9fREVMRVRFL2Jhbm5lcjEucG5nJyxcbiAgICAgIHRpdGxlOiBcIuWwj+eOi+WtkFwiXG4gICAgfV1cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICBtZW51OiBmYWxzZVxuICAgIH0pO1xuXG4gICAgdGhpcy5saXN0LnB1c2goeyBuYW1lOiBcIuaCn+epuuS8oFwiIH0sIHsgbmFtZTogXCLlvq7lvq7kuIDnrJHlvojlgL7ln45cIiB9LCB7IG5hbWU6IFwi5aSn5piO6YKj5Lqb5LqL5YS/XCIgfSwgeyBuYW1lOiBcIuS4ieeUn+S4ieS4luWNgemHjOahg+iKsVwiIH0sIHsgbmFtZTogXCLmlpfnoLToi43nqblcIiB9KTtcblxuICAgIHRoaXMuYXV0b0xpc3QucHVzaCh7IG5hbWU6IFwi5LiJ55Sf5LiJXCIsIHNyYzogJy4vVE9fREVMRVRFL2Jhbm5lcjEucG5nJyB9LCB7IG5hbWU6IFwi5LiJ55Sf5LiJ5LiW5Y2B6YeM5qGD6IqxXCIsIHNyYzogJy4vVE9fREVMRVRFL2Jhbm5lcjIucG5nJyB9LCB7IG5hbWU6IFwi5LiJ55Sf5LiJ5LiW5Y2B6YeM5qGD6IqxXCIsIHNyYzogJy4vVE9fREVMRVRFL2Jhbm5lcjEucG5nJyB9LCB7IG5hbWU6IFwi5LiJ55Sf5LiJ5LiW5Y2B6YeM5qGD6IqxXCIsIHNyYzogJy4vVE9fREVMRVRFL2Jhbm5lcjIucG5nJyB9KTtcblxuICAgIHRoaXMuc2VhcmNoUmVzdWx0cy5wdXNoKHsgbmFtZTogXCLkuInnlJ/kuInkuJbljYHph4zoj4roirFcIiwgc3JjOiAnLi9UT19ERUxFVEUvYmFubmVyMS5wbmcnIH0sIHsgbmFtZTogXCLkuInnlJ/kuInkuJbljYHph4zmnY/oirFcIiwgc3JjOiAnLi9UT19ERUxFVEUvYmFubmVyMi5wbmcnIH0sIHsgbmFtZTogXCLkuInnlJ/kuInkuJbljYHph4zojbfoirFcIiwgc3JjOiAnLi9UT19ERUxFVEUvYmFubmVyMS5wbmcnIH0pO1xuICB9LFxuICBhZGRIaXN0b3J5OiBmdW5jdGlvbiBhZGRIaXN0b3J5KCkge1xuICAgIHZhciBpc0NvbnRhaW4gPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGlzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaGlzTGlzdFtpXSA9PT0gdGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICAgIGlzQ29udGFpbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzQ29udGFpbikge1xuICAgICAgdGhpcy5oaXNMaXN0LnB1c2godGhpcy5pbnB1dFZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLmlucHV0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmlucHV0VmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkZEhpc3RvcnkoKTtcbiAgfSxcbiAgc2VhcmNoOiBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLmlucHV0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmlucHV0VmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93UGFnZVR5cGUgPSBcInJlc3VsdFwiO1xuICAgIHRoaXMuaXNBdXRvQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLmZpbmQoKTtcbiAgfSxcbiAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGUpIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBlLnRleHQ7XG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSAhPT0gXCJcIiAmJiB0aGlzLmlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlucHV0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmlzQXV0b0NsaWNrKSB7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2VUeXBlID0gXCJyZXN1bHRcIjtcbiAgICAgICAgdGhpcy5maW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dQYWdlVHlwZSA9IFwiYXV0b1wiO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzQXV0b0NsaWNrID0gZmFsc2U7XG4gICAgfVxuICB9LFxuICBzZXRJbnB1dFZhbHVlOiBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlKHRleHQpIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB0ZXh0IHx8IFwi6K+36L6T5YWl5pCc57Si6K+N5rGHXCI7XG4gIH0sXG4gIGNoYW5nZVNlYXJjaFdvcmQ6IGZ1bmN0aW9uIGNoYW5nZVNlYXJjaFdvcmQoKSB7XG4gICAgdGhpcy5saXN0ID0gW3sgbmFtZTogXCLml6Dpl67opb/kuJxcIiB9LCB7IG5hbWU6IFwi5Y6J5a6z5LqG77yM5oiR55qE5Zu9XCIgfV07XG4gIH0sXG4gIGNsZWFySGlzOiBmdW5jdGlvbiBjbGVhckhpcygpIHtcbiAgICB0aGlzLmhpc0xpc3QgPSBbXTtcbiAgfSxcbiAgYmFjazogZnVuY3Rpb24gYmFjaygpIHtcbiAgICBfc3lzdGVtMi5kZWZhdWx0LmJhY2soKTtcbiAgfSxcbiAgcmVzZXRTZWFyY2hWYWx1ZTogZnVuY3Rpb24gcmVzZXRTZWFyY2hWYWx1ZSgpIHtcbiAgICB0aGlzLnNob3dQYWdlVHlwZSA9IFwic2VhcmNoQmFyXCI7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcbiAgfSxcbiAgZGlyZWN0UmVzdWx0UGFnZTogZnVuY3Rpb24gZGlyZWN0UmVzdWx0UGFnZSh0ZXh0KSB7XG4gICAgdGhpcy5pc0F1dG9DbGljayA9IHRydWU7XG4gICAgdGhpcy5zaG93UGFnZVR5cGUgPSBcInJlc3VsdFwiO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRleHQ7XG4gICAgdGhpcy5maW5kKCk7XG4gIH0sXG4gIGNsaWNrVG9Cb29rRGV0YWlsOiBmdW5jdGlvbiBjbGlja1RvQm9va0RldGFpbCgpIHtcbiAgICBfc3lzdGVtMi5kZWZhdWx0LnB1c2goe1xuICAgICAgdXJpOiAnL1BhZ2VfQm9va2RldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7IHRlc3RJZDogJ3Rlc3RJZCcgfVxuICAgIH0pO1xuICB9LFxuICBjbGlja1RvUmVhZDogZnVuY3Rpb24gY2xpY2tUb1JlYWQoKSB7XG4gICAgX3N5c3RlbTIuZGVmYXVsdC5wdXNoKHtcbiAgICAgIHVyaTogJy9QYWdlX1JlYWQnLFxuICAgICAgcGFyYW1zOiB7IHRlc3RJZDogJ3Rlc3RJZCcgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9TZWFyY2gvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9