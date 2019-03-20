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
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
/******/ })
/************************************************************************/
/******/ ({

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(257)
var $app_template$ = __webpack_require__(261)
var $app_style$ = __webpack_require__(262)
var $app_script$ = __webpack_require__(263)

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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(258)
var $app_style$ = __webpack_require__(259)
var $app_script$ = __webpack_require__(260)

$app_define$('@app-component/novelcover', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 258:
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
        "container_cover"
      ],
      "shown": function () {return this.display},
      "events": {
        "click": "clickToHide"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "center"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "center_text"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": " 点击中间"
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "center_text"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": " 呼出菜单"
                      }
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.novelcover.point}
                  },
                  "classList": [
                    "center_image"
                  ],
                  "events": {
                    "click": "clickToHide"
                  }
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.novelcover.hand}
                  },
                  "classList": [
                    "center_hand_image"
                  ],
                  "events": {
                    "click": "clickToHide"
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

/***/ 259:
/***/ (function(module, exports) {

module.exports = {
  ".container_cover": {
    "position": "fixed",
    "width": "100%",
    "flexDirection": "column",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".content": {
    "height": "100%",
    "marginTop": "0px",
    "marginRight": "42px",
    "marginBottom": "0px",
    "marginLeft": "42px",
    "justifyContent": "space-between"
  },
  ".center_hand_image": {
    "position": "fixed",
    "left": "371px",
    "top": "530px"
  },
  ".center": {
    "flexDirection": "column",
    "width": "30%",
    "paddingTop": "360px",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  ".center_image": {
    "width": "50%",
    "marginTop": "40px"
  },
  ".left": {
    "flexDirection": "column",
    "marginTop": "517px",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "40px"
  },
  ".right": {
    "flexDirection": "column",
    "marginTop": "517px",
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  },
  ".center_text": {
    "color": "#ffffff",
    "fontSize": "31.3px"
  },
  ".left_text": {
    "color": "#ffffff",
    "fontSize": "31.3px",
    "marginTop": "40px"
  },
  ".right_text": {
    "color": "#ffffff",
    "fontSize": "31.3px",
    "marginTop": "40px"
  }
}

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

module.exports = {
  props: ['novelcover'],
  data: {
    display: true
  },

  clickToHide: function clickToHide() {
    this.display = false;
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

/***/ 261:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "read"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['content', this.contentClassName]},
      "events": {
        "click": "showSetting"
      },
      "children": [
        {
          "type": "text",
          "attr": {},
          "classList": function () {return ['chapter-title', this.chapterTitleClassName]},
          "style": {
            "fontSize": function () {return this.changedFontSize}
          },
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return '第'+this.catalogueNumber+'章 '+this.title}
              }
            }
          ]
        },
        {
          "type": "text",
          "attr": {},
          "classList": function () {return ['chapter-content', this.chapterContentClassName]},
          "style": {
            "fontSize": function () {return this.fontsize}
          },
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return this.content}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.settingStatus},
      "classList": [
        "hide-cover"
      ],
      "events": {
        "click": "hideSetting"
      }
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.settingStatus&&!this.readSettingStatus},
      "classList": [
        "show-setting",
        "setting"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "setting-bottom"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "setting-bottom-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.lastChapter}
                  }
                },
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "上一章"
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
                "setting-bottom-item"
              ],
              "events": {
                "click": "clickToList"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.list}
                  }
                },
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "章节目录"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "shown": function () {return this.backgroundColor=='day'},
              "classList": [
                "setting-bottom-item"
              ],
              "events": {
                "click": function (evt){this.changeBackgroundColor('night',evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.moon}
                  }
                },
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "日夜模式"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "shown": function () {return !(this.backgroundColor=='day')},
              "classList": [
                "setting-bottom-item"
              ],
              "events": {
                "click": function (evt){this.changeBackgroundColor('day',evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.sun}
                  }
                },
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "日夜模式"
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
                "setting-bottom-item"
              ],
              "events": {
                "click": "readSetting"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.setting}
                  }
                },
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "阅读设置"
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
                "setting-bottom-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.img.nextChapter}
                  }
                },
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "下一章"
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
      "shown": function () {return this.readSettingStatus},
      "classList": [
        "show-setting",
        "setting"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "read-setting-top"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "read-size"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "read-size-small"
                  ],
                  "events": {
                    "click": function (evt){this.changefontsize('reduce',evt)}
                  },
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "A -"
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "read-size-middle"
                  ],
                  "events": {
                    "click": function (evt){this.changefontsize('middle',evt)}
                  },
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": function () {return this.fontsize}
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "read-size-large"
                  ],
                  "events": {
                    "click": function (evt){this.changefontsize('release',evt)}
                  },
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "A +"
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
            "read-setting-bottom"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "one"
              ],
              "style": {
                "backgroundColor": "#66cc99"
              },
              "events": {
                "click": function (evt){this.changeBackgroundColor('green',evt)}
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.backgroundColorName.name1}
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "two"
              ],
              "style": {
                "backgroundColor": "#faebd7"
              },
              "events": {
                "click": function (evt){this.changeBackgroundColor('yellow',evt)}
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.backgroundColorName.name2}
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "three"
              ],
              "style": {
                "backgroundColor": "#555555"
              },
              "events": {
                "click": function (evt){this.changeBackgroundColor('gray',evt)}
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.backgroundColorName.name3}
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "four"
              ],
              "style": {
                "backgroundColor": "#FFF5EE"
              },
              "events": {
                "click": function (evt){this.changeBackgroundColor('day',evt)}
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.backgroundColorName.name4}
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
      "shown": function () {return !this.readSettingStatus},
      "classList": [
        "no-setting",
        "setting"
      ]
    },
    {
      "type": "novelcover",
      "attr": {
        "novelcover": function () {return this.novelcover}
      }
    }
  ]
}

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = {
  ".read": {
    "flexDirection": "column",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".read-top": {
    "position": "fixed",
    "width": "100%",
    "height": "100px",
    "backgroundColor": "#262626",
    "alignItems": "center"
  },
  ".read-top image": {
    "width": "50px",
    "height": "50px",
    "marginTop": "25px",
    "marginRight": "25px",
    "marginBottom": "25px",
    "marginLeft": "25px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "read-top"
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
  ".content": {
    "flexDirection": "column",
    "paddingTop": "20px",
    "paddingRight": "30px",
    "paddingBottom": "20px",
    "paddingLeft": "30px"
  },
  ".day-content": {
    "backgroundColor": "rgb(230,217,186)",
    "color": "rgb(26,26,26)"
  },
  ".night-content": {
    "backgroundColor": "#2b2b2b",
    "color": "rgba(255,255,255,0.5)"
  },
  ".green-content": {
    "backgroundColor": "#66cc99",
    "color": "rgb(26,26,26)"
  },
  ".yellow-content": {
    "backgroundColor": "rgb(230,217,186)",
    "color": "rgb(26,26,26)"
  },
  ".gray-content": {
    "backgroundColor": "#555555",
    "color": "rgba(255,255,255,0.5)"
  },
  ".chapter-title": {
    "width": "100%",
    "fontSize": "31.3px",
    "borderBottomWidth": "3px",
    "marginBottom": "50px"
  },
  ".day-chapter-title": {
    "color": "rgba(26,26,26,0.7)",
    "borderBottomColor": "rgba(26,26,26,0.7)"
  },
  ".night-chapter-title": {
    "color": "rgba(255,255,255,0.5)",
    "borderBottomColor": "rgba(255,255,255,0.5)"
  },
  ".green-chapter-title": {
    "color": "rgba(26,26,26,0.7)",
    "borderBottomColor": "rgba(26,26,26,0.7)"
  },
  ".yellow-chapter-title": {
    "color": "rgba(26,26,26,0.7)",
    "borderBottomColor": "rgba(26,26,26,0.7)"
  },
  ".gray-chapter-title": {
    "color": "rgba(255,255,255,0.5)",
    "borderBottomColor": "rgba(255,255,255,0.5)"
  },
  ".day-chapter-content": {
    "color": "rgba(255,255,255,0.5)"
  },
  ".night-chapter-content": {
    "color": "rgba(255,255,255,0.5)"
  },
  ".green-chapter-content": {
    "color": "rgba(26,26,26,0.7)"
  },
  ".yellow-chapter-content": {
    "color": "rgba(26,26,26,0.7)"
  },
  ".gray-chapter-content": {
    "color": "rgba(255,255,255,0.5)"
  },
  ".show-cover": {
    "position": "fixed",
    "top": "100px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px",
    "height": "100%",
    "justifyContent": "space-around",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".hide-cover": {
    "position": "fixed",
    "top": "100px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px"
  },
  ".cover-left": {
    "width": "25%",
    "height": "100%"
  },
  ".cover-center": {
    "width": "35%",
    "height": "100%"
  },
  ".cover-right": {
    "width": "25%",
    "height": "100%"
  },
  ".show-setting": {
    "width": "100%",
    "backgroundColor": "#262626"
  },
  ".no-setting": {
    "height": "0px",
    "display": "none",
    "width": "100%"
  },
  ".setting": {
    "position": "fixed",
    "bottom": "0px",
    "flexDirection": "column"
  },
  ".item-content": {
    "marginTop": "20px",
    "width": "65%"
  },
  ".slider": {
    "width": "100%",
    "selectedColor": "#EE5C42",
    "color": "#666666"
  },
  ".setting-bottom": {
    "marginTop": "13px",
    "marginRight": "34px",
    "marginBottom": "4px",
    "marginLeft": "34px",
    "height": "117px",
    "justifyContent": "space-around",
    "alignItems": "center",
    "alignContent": "center"
  },
  ".setting-bottom-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "171px",
    "height": "100px"
  },
  ".setting-bottom-item image": {
    "width": "50px",
    "height": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "setting-bottom-item"
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
  ".setting-bottom-item text": {
    "color": "#E6E6E6",
    "opacity": 0.5,
    "fontSize": "20.8px",
    "marginTop": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "setting-bottom-item"
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
  ".read-setting-top": {
    "alignItems": "center",
    "width": "90%",
    "height": "150px"
  },
  ".read-size": {
    "width": "384px",
    "height": "67px",
    "justifyContent": "space-between",
    "borderTopWidth": "2.1px",
    "borderRightWidth": "2.1px",
    "borderBottomWidth": "2.1px",
    "borderLeftWidth": "2.1px",
    "borderTopColor": "rgba(255,255,255,0.5)",
    "borderRightColor": "rgba(255,255,255,0.5)",
    "borderBottomColor": "rgba(255,255,255,0.5)",
    "borderLeftColor": "rgba(255,255,255,0.5)",
    "borderRadius": "8.3px",
    "backgroundColor": "rgba(51,51,51,0.3)",
    "marginLeft": "30px"
  },
  ".read-size text": {
    "width": "33%",
    "height": "100%",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "read-size"
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
  ".read-size-small": {
    "color": "#A8A8A8",
    "fontSize": "27.1px"
  },
  ".read-size-middle": {
    "borderLeftColor": "rgba(255,255,255,0.5)",
    "borderLeftWidth": "2.1px",
    "fontSize": "31.3px",
    "color": "#E6E6E6"
  },
  ".read-size-large": {
    "color": "#A8A8A8",
    "fontSize": "27.1px",
    "borderLeftColor": "rgba(255,255,255,0.5)",
    "borderLeftWidth": "2.1px"
  },
  ".read-paging": {
    "borderRadius": "10px",
    "height": "45%",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "fontSize": "25px",
    "color": "#f0ffff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#a9a9a9",
    "borderRightColor": "#a9a9a9",
    "borderBottomColor": "#a9a9a9",
    "borderLeftColor": "#a9a9a9"
  },
  ".read-paging-active": {
    "borderRadius": "10px",
    "height": "45%",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "fontSize": "25px",
    "color": "#EE5C42",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#EE5C42",
    "borderRightColor": "#EE5C42",
    "borderBottomColor": "#EE5C42",
    "borderLeftColor": "#EE5C42"
  },
  ".read-setting-bottom": {
    "alignItems": "center",
    "marginTop": "0px",
    "marginRight": "33px",
    "marginBottom": "10px",
    "marginLeft": "33px",
    "height": "150px",
    "borderBottomColor": "rgba(216,216,216,0.15)",
    "borderBottomWidth": "2px"
  },
  ".read-setting-bottom text": {
    "borderRadius": "60px",
    "width": "13%",
    "height": "60%",
    "fontSize": "25px",
    "marginRight": "60px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "read-setting-bottom"
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
  }
}

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    protected: {
        item: '' },
    public: {
        catalogueNumber: 1,
        title: '朝气蓬勃',
        content: ' \u591C\u5DF2\u6DF1\uFF0C\u6F06\u9ED1\u4E00\u7247\uFF0C\u666F\u7269\u4E0D\u53EF\u89C1\u3002\u4F46\u5C71\u4E2D\u5E76\u4E0D\u5B81\u9759\uFF0C\u731B\u517D\u5486\u54EE\uFF0C\u9707\u52A8\u5C71\u6CB3\uFF0C\u4E07\u6728\u6447\u98A4\uFF0C\u4E71\u53F6\u7C0C\u7C0C\u5760\u843D\u3002\n\n    \u7FA4\u5C71\u4E07\u58D1\u95F4\uFF0C\u6D2A\u8352\u731B\u517D\u6A2A\u884C\uFF0C\u592A\u53E4\u9057\u79CD\u51FA\u6CA1\uFF0C\u5404\u79CD\u53EF\u6015\u7684\u58F0\u97F3\u5728\u9ED1\u6697\u4E2D\u6B64\u8D77\u5F7C\u4F0F\uFF0C\u76F4\u6B32\u88C2\u5F00\u8FD9\u5929\u5730\u3002\n\n    \u5C71\u8109\u4E2D\uFF0C\u8FDC\u8FDC\u671B\u53BB\u6709\u4E00\u56E2\u67D4\u548C\u7684\u5149\u9690\u73B0\uFF0C\u5728\u8FD9\u9ED1\u6697\u65E0\u5C3D\u7684\u591C\u5E55\u4E0B\u4E0E\u4E07\u5C71\u95F4\u72B9\u5982\u4E00\u70B9\u70DB\u706B\u5728\u6447\u66F3\uFF0C\u968F\u65F6\u4F1A\u7184\u706D\u3002\n\n    \u6E10\u6E10\u63A5\u8FD1\uFF0C\u53EF\u4EE5\u770B\u6E05\u90A3\u91CC\u6709\u534A\u622A\u5DE8\u5927\u7684\u67AF\u6728\uFF0C\u6811\u5E72\u76F4\u5F84\u8DB3\u6709\u5341\u51E0\u7C73\uFF0C\u901A\u4F53\u7126\u9ED1\u3002\u9664\u5374\u534A\u622A\u4E3B\u5E72\u5916\uFF0C\u5B83\u53EA\u5269\u4E0B\u4E86\u4E00\u6761\u67D4\u5F31\u7684\u679D\u6761\uFF0C\u4F46\u5374\u5728\u6563\u53D1\u7740\u751F\u673A\uFF0C\u679D\u53F6\u6676\u83B9\u5982\u7EFF\u7389\u523B\u6210\uFF0C\u70B9\u70B9\u67D4\u548C\u7684\u5149\u6269\u6563\uFF0C\u5C06\u4E00\u4E2A\u6751\u5B50\u7B3C\u7F69\u3002\n\n    \u786E\u5207\u7684\u8BF4\uFF0C\u8FD9\u662F\u4E00\u682A\u96F7\u51FB\u6728\uFF0C\u5728\u5F88\u591A\u5E74\u524D\u66FE\u7ECF\u906D\u9047\u8FC7\u901A\u5929\u7684\u95EA\u7535\uFF0C\u8001\u67F3\u6811\u5DE8\u5927\u7684\u6811\u51A0\u4E0E\u65FA\u76DB\u7684\u751F\u673A\u88AB\u6467\u6BC1\u4E86\u3002\u5982\u4ECA\u5730\u8868\u4E0A\u53EA\u5269\u4E0B**\u7C73\u9AD8\u7684\u4E00\u6BB5\u6811\u6869\uFF0C\u7C97\u7684\u60CA\u4EBA\uFF0C\u800C\u90A3\u4EC5\u6709\u7684\u4E00\u6761\u67F3\u679D\u5982\u7EFF\u971E\u795E\u94FE\u822C\uFF0C\u5149\u6655\u5F25\u6F2B\uFF0C\u7B3C\u7F69\u4E0E\u5B88\u62A4\u4F4F\u4E86\u6574\u4E2A\u6751\u5B50\uFF0C\u4EE4\u8FD9\u7247\u6816\u5C45\u5730\u6726\u6726\u80E7\u80E7\uFF0C\u72B9\u82E5\u4E00\u7247\u4ED9\u4E61\uFF0C\u5728\u8FD9\u5927\u8352\u4E2D\u663E\u5F97\u5F88\u795E\u79D8\u3002\n\n    \u6751\u4E2D\u5404\u6237\u90FD\u662F\u77F3\u5C4B\uFF0C\u591C\u6DF1\u4EBA\u9759\uFF0C\u8FD9\u91CC\u7965\u548C\u800C\u5B89\u8C27\uFF0C\u50CF\u662F\u4E0E\u5916\u754C\u7684\u9ED1\u6697\u8FD8\u6709\u517D\u543C\u9694\u7EDD\u4E86\u3002\n\n    \u201C\u545C\u2026\u2026\u201D\n\n    \u4E00\u9635\u72C2\u98CE\u5439\u8FC7\uFF0C\u4E00\u7247\u5DE8\u5927\u7684\u4E4C\u4E91\u6A2A\u7A7A\uFF0C\u906E\u4F4F\u4E86\u6574\u7247\u591C\u7A7A\uFF0C\u6321\u4F4F\u4E86\u90A3\u4EC5\u6709\u7684\u4E00\u70B9\u661F\u534E\uFF0C\u5C71\u8109\u4E2D\u66F4\u52A0\u9ED1\u6697\u4E86\u3002\n\n    \u4E00\u58F0\u51F6\u623E\u7684\u79BD\u9E23\u81EA\u9AD8\u5929\u4F20\u6765\uFF0C\u7A7F\u91D1\u88C2\u77F3\uFF0C\u7ADF\u6E90\u81EA\u90A3\u7247\u4E4C\u4E91\uFF0C\u7EC6\u770B\u5B83\u5C45\u7136\u662F\u4E00\u53EA\u5E9E\u5927\u5230\u4E0D\u53EF\u601D\u8BAE\u7684\u5DE8\u9E1F\uFF0C\u906E\u5929\u853D\u6708\uFF0C\u957F\u4E5F\u4E0D\u77E5\u591A\u5C11\u91CC\u3002\n\n    \u8DEF\u8FC7\u77F3\u6751\uFF0C\u5B83\u4FEF\u89C6\u4E0B\u65B9\uFF0C\u4E24\u53EA\u773C\u775B\u5B9B\u82E5\u4E24\u8F6E\u8840\u6708\u822C\uFF0C\u51F6\u6C14\u6ED4\u5929\uFF0C\u76EF\u7740\u8001\u67F3\u6728\u770B\u4E86\u7247\u523B\uFF0C\u6700\u7EC8\u98DE\u5411\u4E86\u5C71\u8109\u6700\u6DF1\u5904\u3002\n\n    \u5E73\u9759\u4E86\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\uFF0C\u76F4\u5230\u540E\u534A\u591C\uFF0C\u5927\u5730\u98A4\u52A8\u4E86\u8D77\u6765\uFF0C\u4E00\u6761\u6A21\u7CCA\u7684\u8EAB\u5F71\u4ECE\u8FDC\u65B9\u8D70\u6765\uFF0C\u7ADF\u4E0E\u7FA4\u5C71\u9F50\u9AD8\uFF01\n\n    \u83AB\u540D\u6C14\u606F\u6563\u53D1\uFF0C\u7FA4\u5C71\u4E07\u58D1\u6B7B\u4E00\u822C\u7684\u5BC2\u9759\uFF0C\u51F6\u79BD\u731B\u517D\u7686\u86F0\u4F0F\uFF0C\u4E0D\u6562\u53D1\u51FA\u4E00\u70B9\u58F0\u97F3\u3002\n\n    \u8FD1\u4E86\uFF0C\u8FD9\u662F\u4E00\u4E2A\u62E5\u6709\u4EBA\u5F62\u7684\u751F\u7269\uFF0C\u76F4\u7ACB\u884C\u8D70\uFF0C\u5E9E\u5927\u7684\u60CA\u4EBA\uFF0C\u8EAB\u9AD8\u6BD4\u80A9\u5C71\u5CB3\uFF0C\u6D51\u8EAB\u6CA1\u6709\u6BDB\u53D1\uFF0C\u901A\u4F53\u5BC6\u5E03\u7740\u91D1\u8272\u7684\u9CDE\u7247\uFF0C\u71A0\u71A0\u751F\u8F89\u3002\u9762\u90E8\u5F88\u5E73\uFF0C\u53EA\u6709\u4E00\u53EA\u7AD6\u773C\uFF0C\u5F00\u5408\u95F4\u50CF\u662F\u4E00\u9053\u91D1\u8272\u7684\u95EA\u7535\u5212\u8FC7\uFF0C\u7280\u5229\u6151\u4EBA\u3002\u6574\u4F53\u8840\u6C14\u5982\u6D77\uFF0C\u5B9B\u5982\u4E00\u5C0A\u795E\u9B54\uFF01\n\n    \u5B83\u8DEF\u8FC7\u6B64\u5730\uFF0C\u770B\u4E86\u4E00\u773C\u8001\u67F3\u6728\uFF0C\u7A0D\u4F5C\u505C\u7559\u540E\uFF0C\u4F3C\u4E4E\u6025\u4E8E\u8D76\u8DEF\uFF0C\u6700\u7EC8\u5FEB\u901F\u8FDC\u53BB\uFF0C\u8BB8\u591A\u5C71\u5CF0\u88AB\u5176\u811A\u6B65\u9707\u7684\u8F70\u9E23\uFF0C\u5C71\u5730\u5267\u70C8\u98A4\u6296\u3002\n\n    \u9ECE\u660E\uFF0C\u4E00\u6761\u5341\u7C73\u957F\u3001\u6C34\u6876\u7C97\u3001\u94F6\u5149\u707F\u707F\u7684\u8708\u86A3\u5728\u5C71\u4E2D\u873F\u8712\u800C\u884C\uFF0C\u50CF\u662F\u767D\u94F6\u6D47\u94F8\u800C\u6210\uFF0C\u6BCF\u4E00\u8282\u90FD\u9503\u4EAE\u800C\u72F0\u72DE\uFF0C\u5212\u8FC7\u5C71\u77F3\u65F6\u94FF\u9535\u4F5C\u54CD\uFF0C\u706B\u661F\u98DE\u6E85\u3002\u4F46\u6700\u7EC8\u5B83\u5374\u907F\u8FC7\u4E86\u77F3\u6751\uFF0C\u6CA1\u6709\u4FB5\u5165\uFF0C\u6240\u8FC7\u4E4B\u5904\u9ED1\u96FE\u7FFB\u817E\uFF0C\u4E07\u517D\u907F\u9000\u3002\n\n    \u4E00\u6839\u6563\u53D1\u7740\u83B9\u83B9\u7EFF\u971E\u7684\u67D4\u5F31\u67F3\u6761\u5728\u98CE\u4E2D\u8F7B\u8F7B\u6447\u66F3\u2026\u2026\n    \u77F3\u6751\uFF0C\u4F4D\u4E8E\u82CD\u83BD\u5C71\u8109\u4E2D\uFF0C\u56DB\u5468\u9AD8\u5CF0\u5927\u58D1\uFF0C\u832B\u832B\u7FA4\u5C71\u5DCD\u5CE8\u3002\n\n    \u6E05\u6668\uFF0C\u671D\u971E\u707F\u707F\uFF0C\u4EFF\u82E5\u788E\u91D1\u4E00\u822C\u6D12\u843D\uFF0C\u6C90\u6D74\u5728\u4EBA\u8EAB\u4E0A\u6696\u6D0B\u6D0B\u3002\n\n    \u4E00\u7FA4\u5B69\u5B50\uFF0C\u4ECE\u56DB\u4E94\u5C81\u5230\u5341\u51E0\u5C81\u4E0D\u7B49\uFF0C\u80FD\u6709\u6570\u5341\u4EBA\uFF0C\u5728\u6751\u524D\u7684\u7A7A\u5730\u4E0A\u8FCE\u7740\u671D\u971E\uFF0C\u6B63\u5728\u54FC\u54C8\u6709\u58F0\u7684\u953B\u70BC\u4F53\u9B44\u3002\u4E00\u5F20\u5F20\u7A1A\u5AE9\u7684\u5C0F\u8138\u6EE1\u662F\u8BA4\u771F\u4E4B\u8272\uFF0C\u5927\u4E00\u4E9B\u7684\u5B69\u5B50\u864E\u864E\u751F\u98CE\uFF0C\u5C0F\u4E00\u4E9B\u7684\u4E5F\u6BD4\u5212\u7684\u6709\u6A21\u6709\u6837\u3002\n\n    \u4E00\u4E2A\u808C\u4F53\u5F3A\u5065\u5982\u864E\u8C79\u7684\u4E2D\u5E74\u7537\u5B50\uFF0C\u7A7F\u7740\u517D\u76AE\u8863\uFF0C\u76AE\u80A4\u5448\u53E4\u94DC\u8272\uFF0C\u9ED1\u53D1\u62AB\u6563\uFF0C\u70AF\u70AF\u6709\u795E\u7684\u773C\u7738\u626B\u8FC7\u6BCF\u4E00\u4E2A\u5B69\u5B50\uFF0C\u6B63\u5728\u8BA4\u771F\u6307\u70B9\u4ED6\u4EEC\u3002\n\n    \u201C\u592A\u9633\u521D\u5347\uFF0C\u4E07\u7269\u521D\u59CB\uFF0C\u751F\u4E4B\u6C14\u6700\u76DB\uFF0C\u867D\u4E0D\u80FD\u5982\u4F20\u8BF4\u4E2D\u90A3\u822C\u9910\u971E\u98DF\u6C14\uFF0C\u4F46\u8FD9\u6837\u8FCE\u971E\u953B\u4F53\u81EA\u4E5F\u6709\u83AB\u5927\u597D\u5904\uFF0C\u53EF\u5145\u76C8\u4EBA\u4F53\u751F\u673A\u3002\u4E00\u5929\u4E4B\u8BA1\u5728\u4E8E\u6668\uFF0C\u6BCF\u65E5\u65E9\u8D77\u591A\u7528\u529F\uFF0C\u5F3A\u7B4B\u58EE\u9AA8\uFF0C\u6D3B\u8840\u70BC\u7B4B\uFF0C\u5C06\u6765\u624D\u80FD\u5728\u8FD9\u82CD\u83BD\u5C71\u8109\u4E2D\u6709\u6D3B\u547D\u7684\u672C\u94B1\u3002\u201D\u7AD9\u5728\u524D\u65B9\u3001\u6307\u70B9\u4E00\u7FA4\u5B69\u5B50\u7684\u4E2D\u5E74\u7537\u5B50\u4E00\u8138\u4E25\u8083\uFF0C\u8BA4\u771F\u544A\u8BEB\uFF0C\u800C\u540E\u53C8\u559D\u9053\uFF1A\u201C\u4F60\u4EEC\u660E\u767D\u5417\uFF1F\u201D\n\n    \u201C\u660E\u767D\uFF01\u201D\u4E00\u7FA4\u5B69\u5B50\u4E2D\u6C14\u5341\u8DB3\uFF0C\u5927\u58F0\u56DE\u5E94\u3002\n\n    \u5C71\u4E2D\u591A\u53F2\u524D\u751F\u7269\u51FA\u6CA1\uFF0C\u65F6\u6709\u906E\u853D\u5929\u7A7A\u4E4B\u5DE8\u7FFC\u6A2A\u8FC7\uFF0C\u5728\u5730\u4E0A\u6295\u4E0B\u5927\u7247\u7684\u9634\u5F71\uFF0C\u4EA6\u6709\u8352\u517D\u7ACB\u4E8E\u5CF0\u4E0A\uFF0C\u541E\u6708\u800C\u5578\uFF0C\u66F4\u5C11\u4E0D\u4E86\u5404\u79CD\u6BD2\u866B\u4F0F\u884C\uFF0C\u5F02\u5E38\u53EF\u6016\u3002\n\n    \u201C\u660E\u767D\u5440\u3002\u201D\u4E00\u4E2A\u660E\u663E\u8D70\u795E\u3001\u6162\u4E86\u534A\u62CD\u7684\u5C0F\u5BB6\u4F19\u5976\u58F0\u5976\u6C14\u7684\u53EB\u9053\u3002\n\n    \u8FD9\u662F\u4E00\u4E2A\u5F88\u5C0F\u7684\u5B69\u5B50\uFF0C\u53EA\u6709\u4E00\u4E24\u5C81\u7684\u6837\u5B50\uFF0C\u521A\u5B66\u4F1A\u8D70\u8DEF\u6CA1\u51E0\u4E2A\u6708\uFF0C\u4E5F\u5728\u8DDF\u7740\u953B\u70BC\u4F53\u9B44\u3002\u663E\u7136\uFF0C\u4ED6\u662F\u81EA\u5DF1\u51D1\u8FC7\u6765\u7684\uFF0C\u6DF7\u5728\u4E86\u5E74\u957F\u7684\u5B69\u5B50\u4E2D\uFF0C\u5206\u660E\u8FD8\u4E0D\u5E94\u8BE5\u51FA\u73B0\u5728\u8FD9\u4E2A\u961F\u4F0D\u91CC\u3002\n\n    \u201C\u54FC\u54FC\u54C8\u563F\uFF01\u201D\u5C0F\u5BB6\u4F19\u53E3\u4E2D\u53D1\u58F0\uFF0C\u5AE9\u5AE9\u7684\u5C0F\u624B\u81C2\u5356\u529B\u7684\u6325\u52A8\u7740\uFF0C\u6548\u4EFF\u5927\u5B69\u5B50\u4EEC\u7684\u52A8\u4F5C\uFF0C\u53EF\u662F\u4ED6\u592A\u8FC7\u5E7C\u5C0F\uFF0C\u52A8\u4F5C\u6B6A\u6B6A\u626D\u626D\uFF0C\u4E14\u6B65\u5C65\u8E52\u8DDA\uFF0C\u6447\u6447\u6446\u6446\uFF0C\u518D\u52A0\u4E0A\u5634\u89D2\u95F4\u6B8B\u7559\u7684\u767D\u8272\u5976\u6E0D\uFF0C\u5F15\u4EBA\u53D1\u7B11\u3002\n\n    \u4E00\u7FA4\u5927\u5B69\u5B50\u770B\u7740\u4ED6\uFF0C\u7686\u6324\u7709\u5F04\u773C\uFF0C\u8BA9\u539F\u672C\u4E25\u8083\u7684\u6668\u7EC3\u6C14\u6C1B\u8F7B\u7F13\u4E86\u4E0D\u5C11\u3002\n\n    \u5C0F\u4E0D\u70B9\u957F\u7684\u5F88\u767D\u5AE9\u4E0E\u6F02\u4EAE\uFF0C\u5927\u773C\u775B\u4E4C\u6E9C\u6E9C\u7684\u8F6C\u52A8\uFF0C\u6574\u4E2A\u4EBA\u50CF\u662F\u4E2A\u767D\u74F7\u5A03\u5A03\uFF0C\u5F88\u53EF\u7231\uFF0C\u7A1A\u5AE9\u7684\u52A8\u4F5C\uFF0C\u53E3\u4E2D\u54BF\u54BF\u5440\u5440\uFF0C\u61A8\u6001\u53EF\u63AC\u3002\u8FD9\u8BA9\u53E6\u4E00\u7247\u573A\u5730\u4E2D\u76D8\u5750\u5728\u4E00\u5757\u5757\u5DE8\u77F3\u4E0A\u6B63\u5728\u541E\u5410\u5929\u7CBE\u7684\u4E00\u4E9B\u8001\u4EBA\u4E5F\u90FD\u9732\u51FA\u7B11\u5BB9\u3002\n\n    \u5C31\u662F\u90A3\u4E9B\u8EAB\u6750\u9AD8\u5927\u9B41\u68A7\u3001\u4E0A\u534A\u8EAB**\u3001\u808C\u8171\u5149\u4EAE\u5E76\u9686\u8D77\u7684\u6210\u5E74\u7537\u5B50\u4EEC\uFF0C\u4E5F\u90FD\u671B\u4E86\u8FC7\u6765\uFF0C\u5E26\u7740\u7B11\u610F\u3002\u4ED6\u4EEC\u662F\u6751\u4E2D\u6700\u5F3A\u58EE\u7684\u4EBA\uFF0C\u662F\u72E9\u730E\u4E0E\u5B88\u62A4\u8FD9\u4E2A\u6751\u843D\u7684\u6700\u91CD\u8981\u529B\u91CF\uFF0C\u4E5F\u90FD\u5728\u953B\u4F53\uFF0C\u6709\u4EBA\u63E1\u7740\u4E0D\u77E5\u540D\u7684\u5DE8\u517D\u9AA8\u9ABC\u6253\u78E8\u800C\u6210\u7684\u767D\u9AA8\u5927\u68D2\uFF0C\u4E5F\u6709\u4EBA\u6301\u7740\u9ED1\u8272\u91D1\u5C5E\u94F8\u6210\u7684\u9614\u5251\uFF0C\u7528\u529B\u821E\u52A8\uFF0C\u98CE\u58F0\u5982\u96F7\u3002\n\n    \u751F\u5B58\u73AF\u5883\u6781\u5176\u6076\u52A3\uFF0C\u591A\u6D2A\u8352\u731B\u517D\u6BD2\u866B\uFF0C\u4E3A\u4E86\u98DF\u7269\uFF0C\u4E3A\u4E86\u751F\u5B58\uFF0C\u5F88\u591A\u7537\u5B50\u8FD8\u672A\u6210\u5E74\u5C31\u8FC7\u65E9\u592D\u6298\u5728\u4E86\u5927\u8352\u4E2D\uFF0C\u60F3\u8981\u6D3B\u4E0B\u53BB\uFF0C\u552F\u6709\u5F3A\u58EE\u5DF1\u8EAB\u3002\u6E05\u6668\u7528\u529F\uFF0C\u65E0\u8BBA\u662F\u6210\u5E74\u4EBA\uFF0C\u4EA6\u6216\u662F\u8001\u4EBA\u4E0E\u5B69\u5B50\uFF0C\u8FD9\u662F\u6BCF\u4E00\u4E2A\u4EBA\u81EA\u5E7C\u5C31\u5DF2\u517B\u6210\u7684\u4E60\u60EF\u3002\n\n    \u201C\u6536\u5FC3\uFF01\u201D\u8D1F\u8D23\u7763\u4FC3\u4E0E\u6307\u5BFC\u5B69\u5B50\u7EC3\u529F\u7684\u4E2D\u5E74\u7537\u5B50\u5927\u58F0\u558A\u9053\u3002\u4E00\u7FA4\u5B69\u5B50\u8D76\u7D27\u8BA4\u771F\u4E86\u8D77\u6765\uFF0C\u7EE7\u7EED\u5728\u67D4\u548C\u4E0E\u707F\u70C2\u7684\u671D\u971E\u4E2D\u953B\u70BC\u3002\n\n    \u201C\u547C\u2026\u2026\u54BF\u5440\uFF0C\u7D2F\u4E86\u3002\u201D\u5C0F\u4E0D\u70B9\u957F\u51FA\u4E86\u4E00\u53E3\u6C14\uFF0C\u4E00\u5C41\u58A9\u513F\u5750\u5728\u4E86\u5730\u4E0A\uFF0C\u770B\u7740\u5927\u5B69\u5B50\u4EEC\u953B\u70BC\u4F53\u9B44\u3002\u53EF\u4EC5\u4E00\u4F1A\u513F\u5DE5\u592B\u4ED6\u5C31\u88AB\u5206\u6563\u4E86\u6CE8\u610F\u529B\uFF0C\u7AD9\u8D77\u8EAB\u6765\uFF0C\u6447\u6447\u6446\u6446\uFF0C\u51B2\u5411\u4E0D\u8FDC\u5904\u4E00\u53EA\u6B63\u5728\u8E66\u8E66\u8DF3\u8DF3\u7684\u4E94\u8272\u96C0\uFF0C\u7ED3\u679C\u78D5\u78D5\u7ECA\u7ECA\uFF0C\u8FDE\u6454\u4E86\u51E0\u4E2A\u5C41\u58A9\u513F\uFF0C\u5012\u4E5F\u4E0D\u54ED\uFF0C\u6C14\u547C\u547C\uFF0C\u54FC\u54FC\u5527\u5527\u722C\u8D77\u6765\u518D\u8FFD\u3002\n\n    \u201C\u597D\u4E86\uFF0C\u6536\u529F\uFF01\u201D\n\n    \u968F\u7740\u4E00\u58F0\u5927\u559D\uFF0C\u6240\u6709\u5B69\u5B50\u90FD\u4E00\u9635\u6B22\u547C\uFF0C\u63C9\u4E86\u63C9\u9178\u75BC\u7684\u624B\u811A\uFF0C\u800C\u540E\u4E00\u54C4\u800C\u6563\uFF0C\u51B2\u5411\u5404\u81EA\u7684\u5BB6\u4E2D\uFF0C\u51C6\u5907\u5403\u65E9\u996D\u3002\n\n    \u8001\u4EBA\u4EEC\u90FD\u7B11\u4E86\uFF0C\u81EA\u5DE8\u77F3\u4E0A\u8D77\u8EAB\u3002\u800C\u90A3\u4E9B\u8EAB\u6750\u5065\u58EE\u5982\u864E\u7684\u6210\u5E74\u4EBA\u5219\u662F\u4E00\u9635\u7B11\u9A82\uFF0C\u6570\u843D\u7740\u81EA\u5DF1\u7684\u5B69\u5B50\uFF0C\u62CE\u7740\u9AA8\u68D2\u4E0E\u9614\u5251\u4E5F\u5FEB\u6B65\u5411\u81EA\u5BB6\u4E2D\u8D70\u53BB\u3002\n\n    \u77F3\u6751\u4E0D\u662F\u5F88\u5927\uFF0C\u7537\u5973\u8001\u5C11\u52A0\u8D77\u6765\u80FD\u6709\u4E09\u767E\u591A\u4EBA\uFF0C\u5C4B\u5B50\u90FD\u662F\u5DE8\u77F3\u780C\u6210\u7684\uFF0C\u7B80\u6734\u800C\u81EA\u7136\u3002\n\n    \u5728\u6751\u5934\u6709\u4E00\u622A\u5DE8\u5927\u7684\u96F7\u51FB\u6728\uFF0C\u76F4\u5F84\u5341\u51E0\u7C73\uFF0C\u6B64\u65F6\u4E3B\u5E72\u4E0A\u552F\u4E00\u7684\u67F3\u6761\u5DF2\u7ECF\u5728\u671D\u971E\u4E2D\u63A9\u53BB\u4E86\u83B9\u5149\uFF0C\u53D8\u5F97\u666E\u666E\u901A\u901A\u4E86\u3002\n\n    \u201C\u5662\uFF0C\u5C45\u7136\u6709\u571F\u9F99\u8089\uFF0C\u7ED9\u6211\u4E00\u5757\uFF01\u201D\n\n    \u8FD9\u4E9B\u5B69\u5B50\u90FD\u5F88\u6D3B\u6CFC\u4E0E\u597D\u52A8\uFF0C\u5373\u4FBF\u5403\u996D\u65F6\u4E5F\u90FD\u4E0D\u592A\u8001\u5B9E\uFF0C\u4E0D\u5C11\u4EBA\u62B1\u7740\u9676\u7897\u4ECE\u81EA\u5BB6\u51FA\u6765\uFF0C\u51D1\u5230\u4E86\u4E00\u8D77\u3002\n\n    \u77F3\u6751\u5468\u56F4\u8349\u6728\u4E30\u8302\uFF0C\u731B\u517D\u4F17\u591A\uFF0C\u53EF\u5B88\u7740\u5927\u5C71\uFF0C\u6751\u4EBA\u7684\u98DF\u7269\u76F8\u5BF9\u6765\u8BF4\u5374\u7B97\u4E0D\u4E0A\u4E30\u76DB\uFF0C\u53EA\u662F\u4E00\u4E9B\u7C97\u9EA6\u997C\u3001\u91CE\u679C\u4EE5\u53CA\u5B69\u5B50\u4EEC\u7897\u4E2D\u5C11\u91CF\u7684\u8089\u98DF\u3002\n\n    \u4E8B\u5B9E\u4E0A\uFF0C\u98DF\u7269\u4E0D\u5145\u88D5\u5BF9\u4E8E\u77F3\u6751\u6765\u8BF4\u4E00\u76F4\u662F\u4E00\u4E2A\u5F88\u4E25\u91CD\u7684\u95EE\u9898\u3002\u5C71\u8109\u4E2D\u5341\u5206\u5371\u9669\uFF0C\u90A3\u4E9B\u5F02\u517D\u51F6\u79BD\u8FC7\u4E8E\u5F3A\u5927\u4E0E\u6050\u6016\uFF0C\u6BCF\u4E00\u6B21\u53BB\u72E9\u730E\u90FD\u53EF\u80FD\u4F1A\u6709\u4EBA\u4E22\u6389\u6027\u547D\u3002\n\n    \u5982\u679C\u6709\u9009\u62E9\uFF0C\u6751\u4EBA\u662F\u4E0D\u613F\u8FDB\u5C71\u7684\u3002\u56E0\u4E3A\u8FDB\u5C71\u5C31\u610F\u5473\u7740\u53EF\u80FD\u4F1A\u6709\u6D41\u8840\u4E0E\u727A\u7272\u3002\n\n    \u98DF\u7269\u5BF9\u4E8E\u4ED6\u4EEC\u6765\u8BF4\u975E\u5E38\u5B9D\u8D35\uFF0C\u5BB9\u4E0D\u5F97\u6D6A\u8D39\uFF0C\u6BCF\u4E00\u4E2A\u5B69\u5B50\u4ECE\u5C0F\u5C31\u61C2\u5F97\u8FD9\u4E00\u70B9\uFF0C\u9965\u997F\u3001\u98DF\u7269\u3001\u72E9\u730E\u3001\u6027\u547D\u3001\u9C9C\u8840\u8FD9\u4E9B\u662F\u76F8\u8FDE\u7684\u3002\n\n    \u6751\u5934\u662F\u8001\u65CF\u957F\u77F3\u4E91\u5CF0\u7684\u9662\u843D\uFF0C\u7531\u5DE8\u77F3\u5806\u780C\u800C\u6210\uFF0C\u7D27\u6328\u7740\u7126\u9ED1\u800C\u5DE8\u5927\u7684\u67F3\u6728\u3002\u9662\u5185\u7684\u7076\u53F0\u524D\uFF0C\u9676\u7F50\u5185\u767D\u8272\u6C41\u6DB2\u6CB8\u817E\uFF0C\u5976\u9999\u6251\u9F3B\uFF0C\u4ED6\u6B63\u5728\u71AC\u716E\u517D\u5976\uFF0C\u6B64\u5916\u4E0D\u65F6\u5C06\u4E00\u4E9B\u836F\u8349\u7B49\u6295\u653E\u8FDB\u53BB\uFF0C\u4EE5\u6728\u52FA\u6162\u6162\u6405\u52A8\u3002\n\n    \u4E0D\u591A\u65F6\uFF0C\u8001\u4EBA\u558A\u9053\uFF1A\u201C\u5C0F\u4E0D\u70B9\uFF0C\u8FC7\u6765\u5403\u4E1C\u897F\u3002\u201D\n\n    \u5C0F\u4E0D\u70B9\u5728\u534A\u5C81\u65F6\u5C31\u5931\u53BB\u4E86\u7236\u6BCD\uFF0C\u662F\u5403\u767E\u517D\u5976\u957F\u5927\u7684\uFF0C\u800C\u4ECA\u5DF2\u7ECF\u4E00\u5C81\u96F6\u51E0\u4E2A\u6708\u4E86\uFF0C\u82E5\u662F\u5BFB\u5E38\u7684\u5B69\u5B50\u65E9\u8BE5\u65AD\u5976\u4E86\uFF0C\u800C\u4ED6\u5374\u4F9D\u65E7\u5403\u7684\u5F88\u9999\u751C\uFF0C\u4E0D\u80AF\u65AD\u6389\uFF0C\u5E38\u88AB\u5927\u4E00\u4E9B\u7684\u5B69\u5B50\u53D6\u7B11\u3002\n\n    \u201C\u54BF\u5440\uFF0C\u547C\u2026\u2026\u8DD1\u4E0D\u52A8\u4E86\u3002\u201D\u4ED6\u4E00\u76F4\u5728\u9532\u800C\u4E0D\u820D\u5730\u8FFD\u90A3\u53EA\u4E94\u8272\u96C0\uFF0C\u65E9\u5DF2\u6C14\u5598\u5401\u5401\uFF0C\u6B64\u65F6\u4E00\u5C41\u80A1\u5750\u5728\u4E86\u5730\u4E0A\u3002\n\n    \u201C\u5C0F\u4E0D\u70B9\u5403\u5976\u55BD\uFF01\u201D\u4E00\u7FA4\u5927\u5B69\u5B50\u8D77\u54C4\u3002\n\n    \u201C\u4F60\u4EEC\u8FD9\u7FA4\u5C0F\u76AE\u7334\u5B50\uFF0C\u8FD8\u4E0D\u90FD\u662F\u4ECE\u4ED6\u8FD9\u4E2A\u5E74\u9F84\u8FC7\u6765\u7684\u3002\u201D\u8001\u65CF\u957F\u7B11\u9A82\u9053\u3002\n\n    \u201C\u6211\u4EEC\u53EF\u6CA1\u6709\u5728\u4E00\u5C81\u534A\u65F6\u8FD8\u5728\u5403\u5976\uFF0C\u563F\u563F\u3002\u201D\n\n    \u9762\u5BF9\u5927\u5B69\u5B50\u7684\u53D6\u7B11\uFF0C\u5C0F\u4E0D\u70B9\u61A8\u61A8\u7684\u7B11\u7740\uFF0C\u9ED1\u4EAE\u7684\u5927\u773C\u772F\u6210\u4E86\u6708\u7259\u72B6\uFF0C\u6BEB\u4E0D\u5728\u4E4E\uFF0C\u5750\u5728\u9676\u7F50\u524D\u7528\u6728\u52FA\u8200\u5976\uFF0C\u5403\u7684\u5F88\u9999\u751C\u3002\n\n    \u65E9\u996D\u8FC7\u540E\uFF0C\u6751\u4E2D\u51E0\u540D\u5E74\u5C81\u5F88\u5927\u7684\u8001\u4EBA\u4E00\u8D77\u6765\u5230\u65CF\u957F\u77F3\u4E91\u5CF0\u7684\u9662\u5B50\u4E2D\uFF0C\u867D\u7136\u65E9\u5DF2\u987B\u53D1\u7686\u767D\uFF0C\u4F46\u7CBE\u6C14\u795E\u90FD\u8FD8\u5F88\u8DB3\u3002\n\n    \u201C\u6700\u8FD1\u4E0D\u592A\u5BF9\u52B2\u554A\uFF0C\u6DF1\u591C\u603B\u662F\u6709\u5927\u5BB6\u4F19\u8DEF\u8FC7\uFF0C\u52A8\u9759\u5B9E\u5728\u592A\u5927\u4E86\uFF0C\u8FD9\u5C71\u8109\u6DF1\u5904\u4E00\u5B9A\u53D1\u751F\u4E86\u4EC0\u4E48\u3002\u201D\n\n    \u201C\u5514\uFF0C\u6628\u5929\u591C\u91CC\u6211\u88AB\u60CA\u9192\u4E86\u51E0\u6B21\uFF0C\u76AE\u9AA8\u53D1\u5BD2\uFF0C\u4E00\u5B9A\u662F\u6709\u4EC0\u4E48\u6D2A\u8352\u51F6\u517D\u4E0E\u5927\u866B\u4ECE\u8FD9\u91CC\u8DEF\u8FC7\u3002\u201D\n\n    \u51E0\u540D\u8001\u4EBA\u5148\u540E\u5F00\u53E3\uFF0C\u4ED6\u4EEC\u6216\u8E59\u7709\u6216\u6DF1\u601D\uFF0C\u8BA8\u8BBA\u6700\u8FD1\u7684\u4E00\u4E9B\u5371\u9669\u5F81\u5146\uFF0C\u89C9\u5F97\u6709\u4E0D\u540C\u5BFB\u5E38\u7684\u4E8B\u60C5\u53D1\u751F\u4E86\u3002\n\n    \u201C\u6211\u89C9\u5F97\u8FD9\u5927\u8352\u6DF1\u5904\u53EF\u80FD\u51FA\u4E86\u4E86\u4E0D\u5F97\u7684\u4E1C\u897F\uFF0C\u5F15\u8D77\u4E86\u5468\u56F4\u5730\u57DF\u4E00\u4E9B\u592A\u53E4\u9057\u79CD\u7684\u6CE8\u610F\uFF0C\u7EB7\u7EB7\u8D76\u8FC7\u53BB\u4E86\u3002\u201D\u8001\u65CF\u957F\u77F3\u4E91\u5CF0\u601D\u5FD6\u540E\u8BF4\u9053\u3002\n\n    \u201C\u8BE5\u4E0D\u4F1A\u662F\u51FA\u4E86\u5C71\u5B9D\u5427\uFF1F\u201D\u4E00\u4E2A\u8001\u4EBA\u987F\u65F6\u77AA\u5706\u4E86\u773C\u775B\uFF0C\u987B\u53D1\u7686\u5F20\uFF0C\u9732\u51FA\u60CA\u5BB9\u3002\n\n    \u5176\u4ED6\u4EBA\u4E5F\u90FD\u9732\u51FA\u5F02\u8272\uFF0C\u773C\u795E\u706B\u70ED\uFF0C\u4F46\u5F88\u5FEB\u53C8\u90FD\u7184\u706D\u4E86\u7738\u4E2D\u7684\u706B\u7130\uFF0C\u90A3\u79CD\u4E1C\u897F\u4E0D\u662F\u4ED6\u4EEC\u80FD\u5F97\u5230\u7684\uFF0C\u8FDC\u5728\u5C71\u8109\u6700\u6DF1\u5904\uFF0C\u6CA1\u4EBA\u8FDB\u7684\u53BB\u3002\n\n    \u8FD9\u4E48\u591A\u5E74\u6765\u4ECE\u672A\u6709\u4EBA\u80FD\u6D3B\u7740\u8FDB\u51FA\u4E00\u8D9F\uFF0C\u5C71\u4E2D\u5404\u79CD\u5F3A\u6A2A\u7269\u79CD\u51FA\u6CA1\uFF0C\u5373\u4FBF\u77F3\u6751\u6240\u6709\u4EBA\u9F50\u95EF\uFF0C\u4E5F\u8FDE\u4E00\u6735\u6D6A\u82B1\u90FD\u4E0D\u4F1A\u6CDB\u8D77\u3002\n\n    \u201C\u65CF\u957F\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E9B\u65E5\u5B50\u6CA1\u6709\u8FDB\u5C71\u4E86\u3002\u201D\u5C31\u5728\u8FD9\u65F6\uFF0C\u4E00\u4E2A\u96C4\u58EE\u7684\u6210\u5E74\u7537\u5B50\u8D70\u8FDB\u9662\u4E2D\uFF0C\u4ED6\u662F\u72E9\u730E\u961F\u4F0D\u7684\u5934\u9886\uFF0C\u4E5F\u5C06\u662F\u77F3\u6751\u7684\u4E0B\u4EFB\u65CF\u957F\u3002\n\n    \u201C\u6700\u8FD1\u6709\u4E9B\u4E0D\u592A\u5E73\u554A\u3002\u201D\u8001\u65CF\u957F\u77F3\u4E91\u5CF0\u76B1\u7709\u3002\n\n    \u201C\u53EF\u662F\u98DF\u7269\u771F\u7684\u4E0D\u591A\u4E86\u3002\u201D\u77F3\u6797\u864E\u9053\uFF0C\u4ED6\u8EAB\u6750\u6781\u4E3A\u9AD8\u5927\uFF0C\u4E24\u7C73\u6709\u4F59\uFF0C\u80CC\u7740\u4E00\u53E3\u4E09\u767E\u4F59\u65A4\u7684\u9614\u5251\uFF0C\u6574\u4E2A\u4EBA\u58EE\u7684\u5982\u540C\u4E00\u5934\u4EBA\u718A\uFF0C\u6D51\u8EAB\u53E4\u94DC\u8272\u7684\u808C\u8089\u4E00\u5757\u5757\uFF0C\u5982\u4E00\u6761\u6761\u86C7\u87D2\u5728\u6E38\u52A8\u3002\n\n    \u201C\u5A03\u5B50\u4EEC\u9700\u8981\u957F\u8EAB\u4F53\uFF0C\u4E0D\u80FD\u997F\u7740\uFF0C\u5F97\u60F3\u4E9B\u529E\u6CD5\u3002\u201D\u6709\u8001\u4EBA\u5F00\u53E3\u3002\n\n    \u201C\u867D\u7136\u591C\u91CC\u4E0D\u5E73\u9759\uFF0C\u4F46\u767D\u5929\u5012\u662F\u6CA1\u6709\u4EC0\u4E48\u5F02\u5E38\uFF0C\u6211\u5E26\u4E9B\u4EBA\u51FA\u53BB\uFF0C\u5C0F\u5FC3\u4E00\u70B9\u5E94\u8BE5\u6CA1\u95EE\u9898\u3002\u201D\u77F3\u6797\u864E\u9053\u3002\n\n    \u6700\u540E\uFF0C\u51E0\u5341\u540D\u9752\u58EE\u5E74\u7537\u5B50\u5728\u6751\u5934\u96C6\u5408\uFF0C\u7531\u65CF\u957F\u77F3\u4E91\u5CF0\u5E26\u7740\u6765\u5230\u65C1\u8FB9\u7684\u96F7\u51FB\u6728\u524D\uFF0C\u5BF9\u7740\u8001\u67F3\u6811\u8BA4\u771F\u7948\u7977\u3002\n\n    \u201C\u796D\u7075\uFF0C\u8BF7\u4FDD\u4F51\u65CF\u4EBA\uFF0C\u8BA9\u5B69\u5B50\u4EEC\u6253\u5230\u80A5\u7F8E\u7684\u730E\u7269\uFF0C\u5E73\u5B89\u5F52\u6765\u3002\u6211\u4EEC\u5C06\u4EE5\u8654\u8BDA\u7684\u5FC3\uFF0C\u4E16\u4EE3\u796D\u7940\u4E0E\u4F9B\u517B\u4F60\u3002\u201D\n\n    \u5F00\u59CB\u4E0A\u4F20\u4E86\uFF0C\u6BCF\u4E00\u4E2A\u70B9\u51FB\u3001\u63A8\u8350\u3001\u6536\u85CF\u90FD\u5BF9\u8FD9\u672C\u65B0\u4E66\u5F88\u91CD\u8981\uFF0C\u8BA9\u672C\u4E66\u51B2\u8D77\uFF0C\u79BB\u4E0D\u5F00\u6BCF\u4E00\u4F4D\u5144\u5F1F\u59D0\u59B9\uFF0C\u9700\u8981\u5927\u5BB6\u7684\u652F\u6301\u3002\u53E6\u5916\uFF0C\u4ECA\u5929\u665A\u4E0A\u516B\u70B9\u5927\u5BB6\u53EF\u4EE5\u6765\u6B6A\u6B6A2579\u73A9\uFF0C\u6211\u4E5F\u53BB\u3002\u8FD8\u6709\uFF0C\u8C22\u8C22\u98D8\u7EA2\u4E0E\u6253\u8D4F\u7684\u6240\u6709\u5144\u5F1F\u59D0\u59B9\uFF01\n    ',
        currentValue: 0,
        isLight: true,
        fontsize: 40,
        titleStatus: false,
        settingStatus: false,
        readSettingStatus: false,
        backgroundColor: 'day',

        contentClassName: '',

        chapterTitleClassName: '',

        chapterContentClassName: '',

        pageModel: 'vertical',

        img: {
            "lastChapter": "/Page_Read/img/last_chapter.png",
            "back": "/Page_Read/img/back.png",
            "list": "/Page_Read/img/list.png",
            "moon": "/Page_Read/img/moon.png",
            "setting": "/Page_Read/img/setting.png",
            "sun": "/Page_Read/img/sun.png",
            "nextChapter": "/Page_Read/img/next_chapter.png"
        },
        novelcover: {
            "hand": "/Page_Read/img/hand.png",
            "left_arrows": "/Page_Read/img/left_arrows.png",
            "point": "/Page_Read/img/point.png",
            "right_arrows": "/Page_Read/img/right_arrows.png"
        },

        backgroundColorName: {
            name1: '护眼',
            name2: '羊皮纸',
            name3: '夜之魅',
            name4: '纸之灵'
        }
    },
    onInit: function onInit() {
        this.$page.setTitleBar({
            textColor: '#1a1a1a',
            backgroundColor: '#f2f2f2',
            text: '阅读',
            menu: true
        });

        if (this.item) {
            this.item = JSON.parse(this.item);
        }
        if (this.item.catalogueTitle) {
            this.title = this.item.catalogueTitle;
            this.catalogueNumber = this.item.catalogueNumber;
        }
    },
    showSetting: function showSetting() {
        this.titleStatus = true;
        this.settingStatus = true;

        this.$page.setTitleBar({
            textColor: 'rgba(255,255,255,0.5)',
            backgroundColor: '#262626'
        });
    },
    hideSetting: function hideSetting() {
        this.titleStatus = false;
        this.settingStatus = false;
        this.readSettingStatus = false;

        this.$page.setTitleBar({
            textColor: '#1a1a1a'
        });

        if (this.backgroundColor === 'day') {
            this.$page.setTitleBar({
                backgroundColor: '#ffffff'
            });
        } else if (this.backgroundColor === 'night') {
            this.$page.setTitleBar({
                backgroundColor: '#2b2b2b'
            });
        } else if (this.backgroundColor === 'green') {
            this.$page.setTitleBar({
                backgroundColor: '#66cc99'
            });
        } else if (this.backgroundColor === 'yellow') {
            this.$page.setTitleBar({
                backgroundColor: '#e6d9ba'
            });
        } else if (this.backgroundColor === 'gray') {
            this.$page.setTitleBar({
                backgroundColor: '#555555'
            });
        }
    },
    changelight: function changelight() {
        this.isLight = !this.isLight;
        this.titleStatus = false;

        if (this.backgroundColor === 'day') {
            this.$page.setTitleBar({
                textColor: '#1a1a1a',
                backgroundColor: '#ffffff'
            });
        } else if (this.backgroundColor === 'night') {
            this.$page.setTitleBar({
                textColor: 'rgba(255,255,255,0.5)',
                backgroundColor: '#2b2b2b'
            });
        }
    },
    readSetting: function readSetting() {
        this.readSettingStatus = true;
        this.titleStatus = false;
    },
    changefontsize: function changefontsize(value) {
        if (value === "reduce") {
            this.fontsize = this.fontsize - 1;
        } else if (value === "release") {
                this.fontsize = this.fontsize + 1;
            }
    },
    changePagingModel: function changePagingModel(pagingModel) {
        this.pageModel = pagingModel;
    },
    changeBackgroundColor: function changeBackgroundColor(backgroundColor) {
        this.titleStatus = false;
        this.backgroundColor = backgroundColor;

        if (backgroundColor === 'day') {
            this.contentClassName = 'content';
            this.chapterTitleClassName = 'chapter-title';
            this.chapterContentClassName = 'chapter-content';
        } else if (backgroundColor === 'night') {
            this.contentClassName = 'night-content';
            this.chapterTitleClassName = 'night-chapter-title';
            this.chapterContentClassName = 'night-chapter-content';
        } else if (backgroundColor === 'green') {
            this.contentClassName = 'green-content';
            this.chapterTitleClassName = 'green-chapter-title';
            this.chapterContentClassName = 'green-chapter-content';
        } else if (backgroundColor === 'yellow') {
            this.contentClassName = 'yellow-content';
            this.chapterTitleClassName = 'yellow-chapter-title';
            this.chapterContentClassName = 'yellow-chapter-content';
        } else if (backgroundColor === 'gray') {
            this.contentClassName = 'gray-content';
            this.chapterTitleClassName = 'gray-chapter-title';
            this.chapterContentClassName = 'gray-chapter-content';
        } else if (backgroundColor === 'day') {
            this.contentClassName = 'content';
            this.chapterTitleClassName = 'chapter-title';
            this.chapterContentClassName = 'chapter-content';
        }

        if (this.backgroundColor === 'day') {
            this.$page.setTitleBar({
                textColor: '#1a1a1a',
                backgroundColor: '#ffffff'
            });
        } else if (this.backgroundColor === 'night') {
            this.$page.setTitleBar({
                textColor: '#f2f2f2',
                backgroundColor: '#2b2b2b'
            });
        } else if (this.backgroundColor === 'green') {
            this.$page.setTitleBar({
                textColor: '#1a1a1a',
                backgroundColor: '#66cc99'
            });
        } else if (this.backgroundColor === 'yellow') {
            this.$page.setTitleBar({
                textColor: '#1a1a1a',
                backgroundColor: '#e6d9ba'
            });
        } else if (this.backgroundColor === 'gray') {
            this.$page.setTitleBar({
                textColor: '#f2f2f2',
                backgroundColor: '#555555'
            });
        }
    },


    getValue: function getValue(name, e) {
        this[name] = e.progress;
    },

    clickToBack: function clickToBack() {
        _system2.default.back();
    },
    clickToList: function clickToList() {
        _system2.default.push({
            uri: '/Page_Catalogue',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvUGFnZV9SZWFkL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDU3YjA5MzgwOWVkMTA4ZTY0OGQzIiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9jb21wb25lbnQvY19ub3ZlbF9jb3Zlci51eCIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9SZWFkL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4PzhkMjAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9jb21wb25lbnQvY19ub3ZlbF9jb3Zlci51eD8yN2Q5Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvY29tcG9uZW50L2Nfbm92ZWxfY292ZXIudXg/ZGVjYSIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9SZWFkL2luZGV4LnV4PzBmYjUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9pbmRleC51eD9iNTg3Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvaW5kZXgudXg/ZWUzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3YjA5MzgwOWVkMTA4ZTY0OGQzIiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4P25hbWU9bm92ZWxjb3ZlclwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9pbmRleC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9pbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzEuMS4xLVN0YWJsZS4zMDEnfSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY19ub3ZlbF9jb3Zlci51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9SZWFkL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9SZWFkL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4IS4vY19ub3ZlbF9jb3Zlci51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX25vdmVsX2NvdmVyLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvbm92ZWxjb3ZlcicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvY29tcG9uZW50L2Nfbm92ZWxfY292ZXIudXg/bmFtZT1ub3ZlbGNvdmVyXG4vLyBtb2R1bGUgaWQgPSAyNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250YWluZXJfY292ZXJcIlxuICAgICAgXSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRpc3BsYXl9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2tUb0hpZGVcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNlbnRlcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIiDngrnlh7vkuK3pl7RcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNlbnRlcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIiDlkbzlh7roj5zljZVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ub3ZlbGNvdmVyLnBvaW50fVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjZW50ZXJfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9IaWRlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubm92ZWxjb3Zlci5oYW5kfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjZW50ZXJfaGFuZF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2tUb0hpZGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvY29tcG9uZW50L2Nfbm92ZWxfY292ZXIudXhcbi8vIG1vZHVsZSBpZCA9IDI1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lcl9jb3ZlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5jb250ZW50XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5jZW50ZXJfaGFuZF9pbWFnZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IFwiMzcxcHhcIixcbiAgICBcInRvcFwiOiBcIjUzMHB4XCJcbiAgfSxcbiAgXCIuY2VudGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiMzAlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzYwcHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC40KVwiXG4gIH0sXG4gIFwiLmNlbnRlcl9pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmxlZnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTE3cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnJpZ2h0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUxN3B4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5jZW50ZXJfdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCJcbiAgfSxcbiAgXCIubGVmdF90ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5yaWdodF90ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMS4zcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcHhcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvY29tcG9uZW50L2Nfbm92ZWxfY292ZXIudXghL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9SZWFkL2NvbXBvbmVudC9jX25vdmVsX2NvdmVyLnV4IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9jb21wb25lbnQvY19ub3ZlbF9jb3Zlci51eFxuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7J3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFsnbm92ZWxjb3ZlciddLFxuICBkYXRhOiB7XG4gICAgZGlzcGxheTogdHJ1ZVxuICB9LFxuXG4gIGNsaWNrVG9IaWRlOiBmdW5jdGlvbiBjbGlja1RvSGlkZSgpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ+mhtemdolZN5a+56LGh5Lit5bGe5oCnZGF0YeS4jeWPr+S4jnB1YmxpYywgcHJvdGVjdGVkLCBwcml2YXRl5ZCM5pe25a2Y5Zyo77yM6K+35L2/55SocHVibGlj5pu/5LujZGF0Ye+8gScpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCfpobXpnaJWTeWvueixoeS4reeahOWxnuaApycgKyBhY2MgKyAn55qE5YC85LiN6IO95L2/5Ye95pWw77yM6K+35L2/55So5a+56LGhJyk7XG4gICAgfVxuICB9KTtcbn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWI/cHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtc3RhZ2UtMyZwbHVnaW5zW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9jb21wb25lbnQvY19ub3ZlbF9jb3Zlci51eFxuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicmVhZFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2NvbnRlbnQnLCB0aGlzLmNvbnRlbnRDbGFzc05hbWVdfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcInNob3dTZXR0aW5nXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2NoYXB0ZXItdGl0bGUnLCB0aGlzLmNoYXB0ZXJUaXRsZUNsYXNzTmFtZV19LFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJmb250U2l6ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY2hhbmdlZEZvbnRTaXplfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+esrCcrdGhpcy5jYXRhbG9ndWVOdW1iZXIrJ+eroMKgJyt0aGlzLnRpdGxlfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnY2hhcHRlci1jb250ZW50JywgdGhpcy5jaGFwdGVyQ29udGVudENsYXNzTmFtZV19LFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJmb250U2l6ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZm9udHNpemV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbnRlbnR9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2V0dGluZ1N0YXR1c30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaGlkZS1jb3ZlclwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiaGlkZVNldHRpbmdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZXR0aW5nU3RhdHVzJiYhdGhpcy5yZWFkU2V0dGluZ1N0YXR1c30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwic2hvdy1zZXR0aW5nXCIsXG4gICAgICAgIFwic2V0dGluZ1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZXR0aW5nLWJvdHRvbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2V0dGluZy1ib3R0b20taXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLmxhc3RDaGFwdGVyfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLkuIrkuIDnq6BcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2V0dGluZy1ib3R0b20taXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2tUb0xpc3RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmltZy5saXN0fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnq6DoioLnm67lvZVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yPT0nZGF5J30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNldHRpbmctYm90dG9tLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KXt0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcignbmlnaHQnLGV2dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLm1vb259XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaXpeWknOaooeW8j1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gISh0aGlzLmJhY2tncm91bmRDb2xvcj09J2RheScpfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2V0dGluZy1ib3R0b20taXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldnQpe3RoaXMuY2hhbmdlQmFja2dyb3VuZENvbG9yKCdkYXknLGV2dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nLnN1bn1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pel5aSc5qih5byPXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNldHRpbmctYm90dG9tLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlYWRTZXR0aW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbWcuc2V0dGluZ31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6ZiF6K+76K6+572uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNldHRpbmctYm90dG9tLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmltZy5uZXh0Q2hhcHRlcn1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LiL5LiA56ugXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVhZFNldHRpbmdTdGF0dXN9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNob3ctc2V0dGluZ1wiLFxuICAgICAgICBcInNldHRpbmdcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVhZC1zZXR0aW5nLXRvcFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicmVhZC1zaXplXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInJlYWQtc2l6ZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldnQpe3RoaXMuY2hhbmdlZm9udHNpemUoJ3JlZHVjZScsZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkEgLVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicmVhZC1zaXplLW1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldnQpe3RoaXMuY2hhbmdlZm9udHNpemUoJ21pZGRsZScsZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZm9udHNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicmVhZC1zaXplLWxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5jaGFuZ2Vmb250c2l6ZSgncmVsZWFzZScsZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkEgK1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVhZC1zZXR0aW5nLWJvdHRvbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm9uZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzY2Y2M5OVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldnQpe3RoaXMuY2hhbmdlQmFja2dyb3VuZENvbG9yKCdncmVlbicsZXZ0KX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yTmFtZS5uYW1lMX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0d29cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYWViZDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KXt0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcigneWVsbG93JyxldnQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3JOYW1lLm5hbWUyfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRocmVlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNTU1NTU1XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5jaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoJ2dyYXknLGV2dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvck5hbWUubmFtZTN9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZm91clwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjVFRVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldnQpe3RoaXMuY2hhbmdlQmFja2dyb3VuZENvbG9yKCdkYXknLGV2dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvck5hbWUubmFtZTR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5yZWFkU2V0dGluZ1N0YXR1c30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibm8tc2V0dGluZ1wiLFxuICAgICAgICBcInNldHRpbmdcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibm92ZWxjb3ZlclwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJub3ZlbGNvdmVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ub3ZlbGNvdmVyfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnJlYWRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucmVhZC10b3BcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI2MjYyNlwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnJlYWQtdG9wIGltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjVweFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwicmVhZC10b3BcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJ0XCIsXG4gICAgICAgICAgXCJuXCI6IFwiaW1hZ2VcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuZGF5LWNvbnRlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDIzMCwyMTcsMTg2KVwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2IoMjYsMjYsMjYpXCJcbiAgfSxcbiAgXCIubmlnaHQtY29udGVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMmIyYjJiXCIsXG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG4gIH0sXG4gIFwiLmdyZWVuLWNvbnRlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzY2Y2M5OVwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2IoMjYsMjYsMjYpXCJcbiAgfSxcbiAgXCIueWVsbG93LWNvbnRlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDIzMCwyMTcsMTg2KVwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2IoMjYsMjYsMjYpXCJcbiAgfSxcbiAgXCIuZ3JheS1jb250ZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCIuY2hhcHRlci10aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLmRheS1jaGFwdGVyLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNiwyNiwyNiwwLjcpXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC43KVwiXG4gIH0sXG4gIFwiLm5pZ2h0LWNoYXB0ZXItdGl0bGVcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCIuZ3JlZW4tY2hhcHRlci10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC43KVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDI2LDI2LDI2LDAuNylcIlxuICB9LFxuICBcIi55ZWxsb3ctY2hhcHRlci10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC43KVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDI2LDI2LDI2LDAuNylcIlxuICB9LFxuICBcIi5ncmF5LWNoYXB0ZXItdGl0bGVcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCIuZGF5LWNoYXB0ZXItY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG4gIH0sXG4gIFwiLm5pZ2h0LWNoYXB0ZXItY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG4gIH0sXG4gIFwiLmdyZWVuLWNoYXB0ZXItY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjYsMjYsMjYsMC43KVwiXG4gIH0sXG4gIFwiLnllbGxvdy1jaGFwdGVyLWNvbnRlbnRcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDI2LDI2LDI2LDAuNylcIlxuICB9LFxuICBcIi5ncmF5LWNoYXB0ZXItY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG4gIH0sXG4gIFwiLnNob3ctY292ZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IFwiMTAwcHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcImxlZnRcIjogXCIwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCIuaGlkZS1jb3ZlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogXCIxMDBweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibGVmdFwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLmNvdmVyLWxlZnRcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNSVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5jb3Zlci1jZW50ZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNSVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5jb3Zlci1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI1JVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnNob3ctc2V0dGluZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyNjI2MjZcIlxuICB9LFxuICBcIi5uby1zZXR0aW5nXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnNldHRpbmdcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuaXRlbS1jb250ZW50XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjUlXCJcbiAgfSxcbiAgXCIuc2xpZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiNFRTVDNDJcIixcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiXG4gIH0sXG4gIFwiLnNldHRpbmctYm90dG9tXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEzcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTE3cHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zZXR0aW5nLWJvdHRvbS1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE3MXB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiXG4gIH0sXG4gIFwiLnNldHRpbmctYm90dG9tLWl0ZW0gaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MHB4XCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJzZXR0aW5nLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwidFwiLFxuICAgICAgICAgIFwiblwiOiBcImltYWdlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuc2V0dGluZy1ib3R0b20taXRlbSB0ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0U2RTZFNlwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJmb250U2l6ZVwiOiBcIjIwLjhweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNHB4XCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJzZXR0aW5nLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwidFwiLFxuICAgICAgICAgIFwiblwiOiBcInRleHRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5yZWFkLXNldHRpbmctdG9wXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiOTAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNTBweFwiXG4gIH0sXG4gIFwiLnJlYWQtc2l6ZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM4NHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2N3B4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMi4xcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIyLjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIyLjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMi4xcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSg1MSw1MSw1MSwwLjMpXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnJlYWQtc2l6ZSB0ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzMlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInJlYWQtc2l6ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcInRcIixcbiAgICAgICAgICBcIm5cIjogXCJ0ZXh0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIucmVhZC1zaXplLXNtYWxsXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0E4QThBOFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNy4xcHhcIlxuICB9LFxuICBcIi5yZWFkLXNpemUtbWlkZGxlXCI6IHtcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMi4xcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNFNkU2RTZcIlxuICB9LFxuICBcIi5yZWFkLXNpemUtbGFyZ2VcIjoge1xuICAgIFwiY29sb3JcIjogXCIjQThBOEE4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIyLjFweFwiXG4gIH0sXG4gIFwiLnJlYWQtcGFnaW5nXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ1JVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2YwZmZmZlwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2E5YTlhOVwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNhOWE5YTlcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2E5YTlhOVwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2E5YTlhOVwiXG4gIH0sXG4gIFwiLnJlYWQtcGFnaW5nLWFjdGl2ZVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0NSVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNFRTVDNDJcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNFRTVDNDJcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjRUU1QzQyXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNFRTVDNDJcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNFRTVDNDJcIlxuICB9LFxuICBcIi5yZWFkLXNldHRpbmctYm90dG9tXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTUwcHhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwicmdiYSgyMTYsMjE2LDIxNiwwLjE1KVwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIlxuICB9LFxuICBcIi5yZWFkLXNldHRpbmctYm90dG9tIHRleHRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMyVcIixcbiAgICBcImhlaWdodFwiOiBcIjYwJVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjYwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwicmVhZC1zZXR0aW5nLWJvdHRvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcInRcIixcbiAgICAgICAgICBcIm5cIjogXCJ0ZXh0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9SZWFkL2luZGV4LnV4IS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfUmVhZC9pbmRleC51eCEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxudmFyIF9zeXN0ZW0gPSAkYXBwX3JlcXVpcmUkKCdAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyJyk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5c3RlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHByb3RlY3RlZDoge1xuICAgICAgICBpdGVtOiAnJyB9LFxuICAgIHB1YmxpYzoge1xuICAgICAgICBjYXRhbG9ndWVOdW1iZXI6IDEsXG4gICAgICAgIHRpdGxlOiAn5pyd5rCU6JOs5YuDJyxcbiAgICAgICAgY29udGVudDogJyBcXHU1OTFDXFx1NURGMlxcdTZERjFcXHVGRjBDXFx1NkYwNlxcdTlFRDFcXHU0RTAwXFx1NzI0N1xcdUZGMENcXHU2NjZGXFx1NzI2OVxcdTRFMERcXHU1M0VGXFx1ODlDMVxcdTMwMDJcXHU0RjQ2XFx1NUM3MVxcdTRFMkRcXHU1RTc2XFx1NEUwRFxcdTVCODFcXHU5NzU5XFx1RkYwQ1xcdTczMUJcXHU1MTdEXFx1NTQ4NlxcdTU0RUVcXHVGRjBDXFx1OTcwN1xcdTUyQThcXHU1QzcxXFx1NkNCM1xcdUZGMENcXHU0RTA3XFx1NjcyOFxcdTY0NDdcXHU5OEE0XFx1RkYwQ1xcdTRFNzFcXHU1M0Y2XFx1N0MwQ1xcdTdDMENcXHU1NzYwXFx1ODQzRFxcdTMwMDJcXG5cXG4gICAgXFx1N0ZBNFxcdTVDNzFcXHU0RTA3XFx1NThEMVxcdTk1RjRcXHVGRjBDXFx1NkQyQVxcdTgzNTJcXHU3MzFCXFx1NTE3RFxcdTZBMkFcXHU4ODRDXFx1RkYwQ1xcdTU5MkFcXHU1M0U0XFx1OTA1N1xcdTc5Q0RcXHU1MUZBXFx1NkNBMVxcdUZGMENcXHU1NDA0XFx1NzlDRFxcdTUzRUZcXHU2MDE1XFx1NzY4NFxcdTU4RjBcXHU5N0YzXFx1NTcyOFxcdTlFRDFcXHU2Njk3XFx1NEUyRFxcdTZCNjRcXHU4RDc3XFx1NUY3Q1xcdTRGMEZcXHVGRjBDXFx1NzZGNFxcdTZCMzJcXHU4OEMyXFx1NUYwMFxcdThGRDlcXHU1OTI5XFx1NTczMFxcdTMwMDJcXG5cXG4gICAgXFx1NUM3MVxcdTgxMDlcXHU0RTJEXFx1RkYwQ1xcdThGRENcXHU4RkRDXFx1NjcxQlxcdTUzQkJcXHU2NzA5XFx1NEUwMFxcdTU2RTJcXHU2N0Q0XFx1NTQ4Q1xcdTc2ODRcXHU1MTQ5XFx1OTY5MFxcdTczQjBcXHVGRjBDXFx1NTcyOFxcdThGRDlcXHU5RUQxXFx1NjY5N1xcdTY1RTBcXHU1QzNEXFx1NzY4NFxcdTU5MUNcXHU1RTU1XFx1NEUwQlxcdTRFMEVcXHU0RTA3XFx1NUM3MVxcdTk1RjRcXHU3MkI5XFx1NTk4MlxcdTRFMDBcXHU3MEI5XFx1NzBEQlxcdTcwNkJcXHU1NzI4XFx1NjQ0N1xcdTY2RjNcXHVGRjBDXFx1OTY4RlxcdTY1RjZcXHU0RjFBXFx1NzE4NFxcdTcwNkRcXHUzMDAyXFxuXFxuICAgIFxcdTZFMTBcXHU2RTEwXFx1NjNBNVxcdThGRDFcXHVGRjBDXFx1NTNFRlxcdTRFRTVcXHU3NzBCXFx1NkUwNVxcdTkwQTNcXHU5MUNDXFx1NjcwOVxcdTUzNEFcXHU2MjJBXFx1NURFOFxcdTU5MjdcXHU3Njg0XFx1NjdBRlxcdTY3MjhcXHVGRjBDXFx1NjgxMVxcdTVFNzJcXHU3NkY0XFx1NUY4NFxcdThEQjNcXHU2NzA5XFx1NTM0MVxcdTUxRTBcXHU3QzczXFx1RkYwQ1xcdTkwMUFcXHU0RjUzXFx1NzEyNlxcdTlFRDFcXHUzMDAyXFx1OTY2NFxcdTUzNzRcXHU1MzRBXFx1NjIyQVxcdTRFM0JcXHU1RTcyXFx1NTkxNlxcdUZGMENcXHU1QjgzXFx1NTNFQVxcdTUyNjlcXHU0RTBCXFx1NEU4NlxcdTRFMDBcXHU2NzYxXFx1NjdENFxcdTVGMzFcXHU3Njg0XFx1Njc5RFxcdTY3NjFcXHVGRjBDXFx1NEY0NlxcdTUzNzRcXHU1NzI4XFx1NjU2M1xcdTUzRDFcXHU3NzQwXFx1NzUxRlxcdTY3M0FcXHVGRjBDXFx1Njc5RFxcdTUzRjZcXHU2Njc2XFx1ODNCOVxcdTU5ODJcXHU3RUZGXFx1NzM4OVxcdTUyM0JcXHU2MjEwXFx1RkYwQ1xcdTcwQjlcXHU3MEI5XFx1NjdENFxcdTU0OENcXHU3Njg0XFx1NTE0OVxcdTYyNjlcXHU2NTYzXFx1RkYwQ1xcdTVDMDZcXHU0RTAwXFx1NEUyQVxcdTY3NTFcXHU1QjUwXFx1N0IzQ1xcdTdGNjlcXHUzMDAyXFxuXFxuICAgIFxcdTc4NkVcXHU1MjA3XFx1NzY4NFxcdThCRjRcXHVGRjBDXFx1OEZEOVxcdTY2MkZcXHU0RTAwXFx1NjgyQVxcdTk2RjdcXHU1MUZCXFx1NjcyOFxcdUZGMENcXHU1NzI4XFx1NUY4OFxcdTU5MUFcXHU1RTc0XFx1NTI0RFxcdTY2RkVcXHU3RUNGXFx1OTA2RFxcdTkwNDdcXHU4RkM3XFx1OTAxQVxcdTU5MjlcXHU3Njg0XFx1OTVFQVxcdTc1MzVcXHVGRjBDXFx1ODAwMVxcdTY3RjNcXHU2ODExXFx1NURFOFxcdTU5MjdcXHU3Njg0XFx1NjgxMVxcdTUxQTBcXHU0RTBFXFx1NjVGQVxcdTc2REJcXHU3Njg0XFx1NzUxRlxcdTY3M0FcXHU4OEFCXFx1NjQ2N1xcdTZCQzFcXHU0RTg2XFx1MzAwMlxcdTU5ODJcXHU0RUNBXFx1NTczMFxcdTg4NjhcXHU0RTBBXFx1NTNFQVxcdTUyNjlcXHU0RTBCKipcXHU3QzczXFx1OUFEOFxcdTc2ODRcXHU0RTAwXFx1NkJCNVxcdTY4MTFcXHU2ODY5XFx1RkYwQ1xcdTdDOTdcXHU3Njg0XFx1NjBDQVxcdTRFQkFcXHVGRjBDXFx1ODAwQ1xcdTkwQTNcXHU0RUM1XFx1NjcwOVxcdTc2ODRcXHU0RTAwXFx1Njc2MVxcdTY3RjNcXHU2NzlEXFx1NTk4MlxcdTdFRkZcXHU5NzFFXFx1Nzk1RVxcdTk0RkVcXHU4MjJDXFx1RkYwQ1xcdTUxNDlcXHU2NjU1XFx1NUYyNVxcdTZGMkJcXHVGRjBDXFx1N0IzQ1xcdTdGNjlcXHU0RTBFXFx1NUI4OFxcdTYyQTRcXHU0RjRGXFx1NEU4NlxcdTY1NzRcXHU0RTJBXFx1Njc1MVxcdTVCNTBcXHVGRjBDXFx1NEVFNFxcdThGRDlcXHU3MjQ3XFx1NjgxNlxcdTVDNDVcXHU1NzMwXFx1NjcyNlxcdTY3MjZcXHU4MEU3XFx1ODBFN1xcdUZGMENcXHU3MkI5XFx1ODJFNVxcdTRFMDBcXHU3MjQ3XFx1NEVEOVxcdTRFNjFcXHVGRjBDXFx1NTcyOFxcdThGRDlcXHU1OTI3XFx1ODM1MlxcdTRFMkRcXHU2NjNFXFx1NUY5N1xcdTVGODhcXHU3OTVFXFx1NzlEOFxcdTMwMDJcXG5cXG4gICAgXFx1Njc1MVxcdTRFMkRcXHU1NDA0XFx1NjIzN1xcdTkwRkRcXHU2NjJGXFx1NzdGM1xcdTVDNEJcXHVGRjBDXFx1NTkxQ1xcdTZERjFcXHU0RUJBXFx1OTc1OVxcdUZGMENcXHU4RkQ5XFx1OTFDQ1xcdTc5NjVcXHU1NDhDXFx1ODAwQ1xcdTVCODlcXHU4QzI3XFx1RkYwQ1xcdTUwQ0ZcXHU2NjJGXFx1NEUwRVxcdTU5MTZcXHU3NTRDXFx1NzY4NFxcdTlFRDFcXHU2Njk3XFx1OEZEOFxcdTY3MDlcXHU1MTdEXFx1NTQzQ1xcdTk2OTRcXHU3RUREXFx1NEU4NlxcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTU0NUNcXHUyMDI2XFx1MjAyNlxcdTIwMURcXG5cXG4gICAgXFx1NEUwMFxcdTk2MzVcXHU3MkMyXFx1OThDRVxcdTU0MzlcXHU4RkM3XFx1RkYwQ1xcdTRFMDBcXHU3MjQ3XFx1NURFOFxcdTU5MjdcXHU3Njg0XFx1NEU0Q1xcdTRFOTFcXHU2QTJBXFx1N0E3QVxcdUZGMENcXHU5MDZFXFx1NEY0RlxcdTRFODZcXHU2NTc0XFx1NzI0N1xcdTU5MUNcXHU3QTdBXFx1RkYwQ1xcdTYzMjFcXHU0RjRGXFx1NEU4NlxcdTkwQTNcXHU0RUM1XFx1NjcwOVxcdTc2ODRcXHU0RTAwXFx1NzBCOVxcdTY2MUZcXHU1MzRFXFx1RkYwQ1xcdTVDNzFcXHU4MTA5XFx1NEUyRFxcdTY2RjRcXHU1MkEwXFx1OUVEMVxcdTY2OTdcXHU0RTg2XFx1MzAwMlxcblxcbiAgICBcXHU0RTAwXFx1NThGMFxcdTUxRjZcXHU2MjNFXFx1NzY4NFxcdTc5QkRcXHU5RTIzXFx1ODFFQVxcdTlBRDhcXHU1OTI5XFx1NEYyMFxcdTY3NjVcXHVGRjBDXFx1N0E3RlxcdTkxRDFcXHU4OEMyXFx1NzdGM1xcdUZGMENcXHU3QURGXFx1NkU5MFxcdTgxRUFcXHU5MEEzXFx1NzI0N1xcdTRFNENcXHU0RTkxXFx1RkYwQ1xcdTdFQzZcXHU3NzBCXFx1NUI4M1xcdTVDNDVcXHU3MTM2XFx1NjYyRlxcdTRFMDBcXHU1M0VBXFx1NUU5RVxcdTU5MjdcXHU1MjMwXFx1NEUwRFxcdTUzRUZcXHU2MDFEXFx1OEJBRVxcdTc2ODRcXHU1REU4XFx1OUUxRlxcdUZGMENcXHU5MDZFXFx1NTkyOVxcdTg1M0RcXHU2NzA4XFx1RkYwQ1xcdTk1N0ZcXHU0RTVGXFx1NEUwRFxcdTc3RTVcXHU1OTFBXFx1NUMxMVxcdTkxQ0NcXHUzMDAyXFxuXFxuICAgIFxcdThERUZcXHU4RkM3XFx1NzdGM1xcdTY3NTFcXHVGRjBDXFx1NUI4M1xcdTRGRUZcXHU4OUM2XFx1NEUwQlxcdTY1QjlcXHVGRjBDXFx1NEUyNFxcdTUzRUFcXHU3NzNDXFx1Nzc1QlxcdTVCOUJcXHU4MkU1XFx1NEUyNFxcdThGNkVcXHU4ODQwXFx1NjcwOFxcdTgyMkNcXHVGRjBDXFx1NTFGNlxcdTZDMTRcXHU2RUQ0XFx1NTkyOVxcdUZGMENcXHU3NkVGXFx1Nzc0MFxcdTgwMDFcXHU2N0YzXFx1NjcyOFxcdTc3MEJcXHU0RTg2XFx1NzI0N1xcdTUyM0JcXHVGRjBDXFx1NjcwMFxcdTdFQzhcXHU5OERFXFx1NTQxMVxcdTRFODZcXHU1QzcxXFx1ODEwOVxcdTY3MDBcXHU2REYxXFx1NTkwNFxcdTMwMDJcXG5cXG4gICAgXFx1NUU3M1xcdTk3NTlcXHU0RTg2XFx1NUY4OFxcdTk1N0ZcXHU0RTAwXFx1NkJCNVxcdTY1RjZcXHU5NUY0XFx1RkYwQ1xcdTc2RjRcXHU1MjMwXFx1NTQwRVxcdTUzNEFcXHU1OTFDXFx1RkYwQ1xcdTU5MjdcXHU1NzMwXFx1OThBNFxcdTUyQThcXHU0RTg2XFx1OEQ3N1xcdTY3NjVcXHVGRjBDXFx1NEUwMFxcdTY3NjFcXHU2QTIxXFx1N0NDQVxcdTc2ODRcXHU4RUFCXFx1NUY3MVxcdTRFQ0VcXHU4RkRDXFx1NjVCOVxcdThENzBcXHU2NzY1XFx1RkYwQ1xcdTdBREZcXHU0RTBFXFx1N0ZBNFxcdTVDNzFcXHU5RjUwXFx1OUFEOFxcdUZGMDFcXG5cXG4gICAgXFx1ODNBQlxcdTU0MERcXHU2QzE0XFx1NjA2RlxcdTY1NjNcXHU1M0QxXFx1RkYwQ1xcdTdGQTRcXHU1QzcxXFx1NEUwN1xcdTU4RDFcXHU2QjdCXFx1NEUwMFxcdTgyMkNcXHU3Njg0XFx1NUJDMlxcdTk3NTlcXHVGRjBDXFx1NTFGNlxcdTc5QkRcXHU3MzFCXFx1NTE3RFxcdTc2ODZcXHU4NkYwXFx1NEYwRlxcdUZGMENcXHU0RTBEXFx1NjU2MlxcdTUzRDFcXHU1MUZBXFx1NEUwMFxcdTcwQjlcXHU1OEYwXFx1OTdGM1xcdTMwMDJcXG5cXG4gICAgXFx1OEZEMVxcdTRFODZcXHVGRjBDXFx1OEZEOVxcdTY2MkZcXHU0RTAwXFx1NEUyQVxcdTYyRTVcXHU2NzA5XFx1NEVCQVxcdTVGNjJcXHU3Njg0XFx1NzUxRlxcdTcyNjlcXHVGRjBDXFx1NzZGNFxcdTdBQ0JcXHU4ODRDXFx1OEQ3MFxcdUZGMENcXHU1RTlFXFx1NTkyN1xcdTc2ODRcXHU2MENBXFx1NEVCQVxcdUZGMENcXHU4RUFCXFx1OUFEOFxcdTZCRDRcXHU4MEE5XFx1NUM3MVxcdTVDQjNcXHVGRjBDXFx1NkQ1MVxcdThFQUJcXHU2Q0ExXFx1NjcwOVxcdTZCREJcXHU1M0QxXFx1RkYwQ1xcdTkwMUFcXHU0RjUzXFx1NUJDNlxcdTVFMDNcXHU3NzQwXFx1OTFEMVxcdTgyNzJcXHU3Njg0XFx1OUNERVxcdTcyNDdcXHVGRjBDXFx1NzFBMFxcdTcxQTBcXHU3NTFGXFx1OEY4OVxcdTMwMDJcXHU5NzYyXFx1OTBFOFxcdTVGODhcXHU1RTczXFx1RkYwQ1xcdTUzRUFcXHU2NzA5XFx1NEUwMFxcdTUzRUFcXHU3QUQ2XFx1NzczQ1xcdUZGMENcXHU1RjAwXFx1NTQwOFxcdTk1RjRcXHU1MENGXFx1NjYyRlxcdTRFMDBcXHU5MDUzXFx1OTFEMVxcdTgyNzJcXHU3Njg0XFx1OTVFQVxcdTc1MzVcXHU1MjEyXFx1OEZDN1xcdUZGMENcXHU3MjgwXFx1NTIyOVxcdTYxNTFcXHU0RUJBXFx1MzAwMlxcdTY1NzRcXHU0RjUzXFx1ODg0MFxcdTZDMTRcXHU1OTgyXFx1NkQ3N1xcdUZGMENcXHU1QjlCXFx1NTk4MlxcdTRFMDBcXHU1QzBBXFx1Nzk1RVxcdTlCNTRcXHVGRjAxXFxuXFxuICAgIFxcdTVCODNcXHU4REVGXFx1OEZDN1xcdTZCNjRcXHU1NzMwXFx1RkYwQ1xcdTc3MEJcXHU0RTg2XFx1NEUwMFxcdTc3M0NcXHU4MDAxXFx1NjdGM1xcdTY3MjhcXHVGRjBDXFx1N0EwRFxcdTRGNUNcXHU1MDVDXFx1NzU1OVxcdTU0MEVcXHVGRjBDXFx1NEYzQ1xcdTRFNEVcXHU2MDI1XFx1NEU4RVxcdThENzZcXHU4REVGXFx1RkYwQ1xcdTY3MDBcXHU3RUM4XFx1NUZFQlxcdTkwMUZcXHU4RkRDXFx1NTNCQlxcdUZGMENcXHU4QkI4XFx1NTkxQVxcdTVDNzFcXHU1Q0YwXFx1ODhBQlxcdTUxNzZcXHU4MTFBXFx1NkI2NVxcdTk3MDdcXHU3Njg0XFx1OEY3MFxcdTlFMjNcXHVGRjBDXFx1NUM3MVxcdTU3MzBcXHU1MjY3XFx1NzBDOFxcdTk4QTRcXHU2Mjk2XFx1MzAwMlxcblxcbiAgICBcXHU5RUNFXFx1NjYwRVxcdUZGMENcXHU0RTAwXFx1Njc2MVxcdTUzNDFcXHU3QzczXFx1OTU3RlxcdTMwMDFcXHU2QzM0XFx1Njg3NlxcdTdDOTdcXHUzMDAxXFx1OTRGNlxcdTUxNDlcXHU3MDdGXFx1NzA3RlxcdTc2ODRcXHU4NzA4XFx1ODZBM1xcdTU3MjhcXHU1QzcxXFx1NEUyRFxcdTg3M0ZcXHU4NzEyXFx1ODAwQ1xcdTg4NENcXHVGRjBDXFx1NTBDRlxcdTY2MkZcXHU3NjdEXFx1OTRGNlxcdTZENDdcXHU5NEY4XFx1ODAwQ1xcdTYyMTBcXHVGRjBDXFx1NkJDRlxcdTRFMDBcXHU4MjgyXFx1OTBGRFxcdTk1MDNcXHU0RUFFXFx1ODAwQ1xcdTcyRjBcXHU3MkRFXFx1RkYwQ1xcdTUyMTJcXHU4RkM3XFx1NUM3MVxcdTc3RjNcXHU2NUY2XFx1OTRGRlxcdTk1MzVcXHU0RjVDXFx1NTRDRFxcdUZGMENcXHU3MDZCXFx1NjYxRlxcdTk4REVcXHU2RTg1XFx1MzAwMlxcdTRGNDZcXHU2NzAwXFx1N0VDOFxcdTVCODNcXHU1Mzc0XFx1OTA3RlxcdThGQzdcXHU0RTg2XFx1NzdGM1xcdTY3NTFcXHVGRjBDXFx1NkNBMVxcdTY3MDlcXHU0RkI1XFx1NTE2NVxcdUZGMENcXHU2MjQwXFx1OEZDN1xcdTRFNEJcXHU1OTA0XFx1OUVEMVxcdTk2RkVcXHU3RkZCXFx1ODE3RVxcdUZGMENcXHU0RTA3XFx1NTE3RFxcdTkwN0ZcXHU5MDAwXFx1MzAwMlxcblxcbiAgICBcXHU0RTAwXFx1NjgzOVxcdTY1NjNcXHU1M0QxXFx1Nzc0MFxcdTgzQjlcXHU4M0I5XFx1N0VGRlxcdTk3MUVcXHU3Njg0XFx1NjdENFxcdTVGMzFcXHU2N0YzXFx1Njc2MVxcdTU3MjhcXHU5OENFXFx1NEUyRFxcdThGN0JcXHU4RjdCXFx1NjQ0N1xcdTY2RjNcXHUyMDI2XFx1MjAyNlxcbiAgICBcXHU3N0YzXFx1Njc1MVxcdUZGMENcXHU0RjREXFx1NEU4RVxcdTgyQ0RcXHU4M0JEXFx1NUM3MVxcdTgxMDlcXHU0RTJEXFx1RkYwQ1xcdTU2REJcXHU1NDY4XFx1OUFEOFxcdTVDRjBcXHU1OTI3XFx1NThEMVxcdUZGMENcXHU4MzJCXFx1ODMyQlxcdTdGQTRcXHU1QzcxXFx1NURDRFxcdTVDRThcXHUzMDAyXFxuXFxuICAgIFxcdTZFMDVcXHU2NjY4XFx1RkYwQ1xcdTY3MURcXHU5NzFFXFx1NzA3RlxcdTcwN0ZcXHVGRjBDXFx1NEVGRlxcdTgyRTVcXHU3ODhFXFx1OTFEMVxcdTRFMDBcXHU4MjJDXFx1NkQxMlxcdTg0M0RcXHVGRjBDXFx1NkM5MFxcdTZENzRcXHU1NzI4XFx1NEVCQVxcdThFQUJcXHU0RTBBXFx1NjY5NlxcdTZEMEJcXHU2RDBCXFx1MzAwMlxcblxcbiAgICBcXHU0RTAwXFx1N0ZBNFxcdTVCNjlcXHU1QjUwXFx1RkYwQ1xcdTRFQ0VcXHU1NkRCXFx1NEU5NFxcdTVDODFcXHU1MjMwXFx1NTM0MVxcdTUxRTBcXHU1QzgxXFx1NEUwRFxcdTdCNDlcXHVGRjBDXFx1ODBGRFxcdTY3MDlcXHU2NTcwXFx1NTM0MVxcdTRFQkFcXHVGRjBDXFx1NTcyOFxcdTY3NTFcXHU1MjREXFx1NzY4NFxcdTdBN0FcXHU1NzMwXFx1NEUwQVxcdThGQ0VcXHU3NzQwXFx1NjcxRFxcdTk3MUVcXHVGRjBDXFx1NkI2M1xcdTU3MjhcXHU1NEZDXFx1NTRDOFxcdTY3MDlcXHU1OEYwXFx1NzY4NFxcdTk1M0JcXHU3MEJDXFx1NEY1M1xcdTlCNDRcXHUzMDAyXFx1NEUwMFxcdTVGMjBcXHU1RjIwXFx1N0ExQVxcdTVBRTlcXHU3Njg0XFx1NUMwRlxcdTgxMzhcXHU2RUUxXFx1NjYyRlxcdThCQTRcXHU3NzFGXFx1NEU0QlxcdTgyNzJcXHVGRjBDXFx1NTkyN1xcdTRFMDBcXHU0RTlCXFx1NzY4NFxcdTVCNjlcXHU1QjUwXFx1ODY0RVxcdTg2NEVcXHU3NTFGXFx1OThDRVxcdUZGMENcXHU1QzBGXFx1NEUwMFxcdTRFOUJcXHU3Njg0XFx1NEU1RlxcdTZCRDRcXHU1MjEyXFx1NzY4NFxcdTY3MDlcXHU2QTIxXFx1NjcwOVxcdTY4MzdcXHUzMDAyXFxuXFxuICAgIFxcdTRFMDBcXHU0RTJBXFx1ODA4Q1xcdTRGNTNcXHU1RjNBXFx1NTA2NVxcdTU5ODJcXHU4NjRFXFx1OEM3OVxcdTc2ODRcXHU0RTJEXFx1NUU3NFxcdTc1MzdcXHU1QjUwXFx1RkYwQ1xcdTdBN0ZcXHU3NzQwXFx1NTE3RFxcdTc2QUVcXHU4ODYzXFx1RkYwQ1xcdTc2QUVcXHU4MEE0XFx1NTQ0OFxcdTUzRTRcXHU5NERDXFx1ODI3MlxcdUZGMENcXHU5RUQxXFx1NTNEMVxcdTYyQUJcXHU2NTYzXFx1RkYwQ1xcdTcwQUZcXHU3MEFGXFx1NjcwOVxcdTc5NUVcXHU3Njg0XFx1NzczQ1xcdTc3MzhcXHU2MjZCXFx1OEZDN1xcdTZCQ0ZcXHU0RTAwXFx1NEUyQVxcdTVCNjlcXHU1QjUwXFx1RkYwQ1xcdTZCNjNcXHU1NzI4XFx1OEJBNFxcdTc3MUZcXHU2MzA3XFx1NzBCOVxcdTRFRDZcXHU0RUVDXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NTkyQVxcdTk2MzNcXHU1MjFEXFx1NTM0N1xcdUZGMENcXHU0RTA3XFx1NzI2OVxcdTUyMURcXHU1OUNCXFx1RkYwQ1xcdTc1MUZcXHU0RTRCXFx1NkMxNFxcdTY3MDBcXHU3NkRCXFx1RkYwQ1xcdTg2N0RcXHU0RTBEXFx1ODBGRFxcdTU5ODJcXHU0RjIwXFx1OEJGNFxcdTRFMkRcXHU5MEEzXFx1ODIyQ1xcdTk5MTBcXHU5NzFFXFx1OThERlxcdTZDMTRcXHVGRjBDXFx1NEY0NlxcdThGRDlcXHU2ODM3XFx1OEZDRVxcdTk3MUVcXHU5NTNCXFx1NEY1M1xcdTgxRUFcXHU0RTVGXFx1NjcwOVxcdTgzQUJcXHU1OTI3XFx1NTk3RFxcdTU5MDRcXHVGRjBDXFx1NTNFRlxcdTUxNDVcXHU3NkM4XFx1NEVCQVxcdTRGNTNcXHU3NTFGXFx1NjczQVxcdTMwMDJcXHU0RTAwXFx1NTkyOVxcdTRFNEJcXHU4QkExXFx1NTcyOFxcdTRFOEVcXHU2NjY4XFx1RkYwQ1xcdTZCQ0ZcXHU2NUU1XFx1NjVFOVxcdThENzdcXHU1OTFBXFx1NzUyOFxcdTUyOUZcXHVGRjBDXFx1NUYzQVxcdTdCNEJcXHU1OEVFXFx1OUFBOFxcdUZGMENcXHU2RDNCXFx1ODg0MFxcdTcwQkNcXHU3QjRCXFx1RkYwQ1xcdTVDMDZcXHU2NzY1XFx1NjI0RFxcdTgwRkRcXHU1NzI4XFx1OEZEOVxcdTgyQ0RcXHU4M0JEXFx1NUM3MVxcdTgxMDlcXHU0RTJEXFx1NjcwOVxcdTZEM0JcXHU1NDdEXFx1NzY4NFxcdTY3MkNcXHU5NEIxXFx1MzAwMlxcdTIwMURcXHU3QUQ5XFx1NTcyOFxcdTUyNERcXHU2NUI5XFx1MzAwMVxcdTYzMDdcXHU3MEI5XFx1NEUwMFxcdTdGQTRcXHU1QjY5XFx1NUI1MFxcdTc2ODRcXHU0RTJEXFx1NUU3NFxcdTc1MzdcXHU1QjUwXFx1NEUwMFxcdTgxMzhcXHU0RTI1XFx1ODA4M1xcdUZGMENcXHU4QkE0XFx1NzcxRlxcdTU0NEFcXHU4QkVCXFx1RkYwQ1xcdTgwMENcXHU1NDBFXFx1NTNDOFxcdTU1OURcXHU5MDUzXFx1RkYxQVxcdTIwMUNcXHU0RjYwXFx1NEVFQ1xcdTY2MEVcXHU3NjdEXFx1NTQxN1xcdUZGMUZcXHUyMDFEXFxuXFxuICAgIFxcdTIwMUNcXHU2NjBFXFx1NzY3RFxcdUZGMDFcXHUyMDFEXFx1NEUwMFxcdTdGQTRcXHU1QjY5XFx1NUI1MFxcdTRFMkRcXHU2QzE0XFx1NTM0MVxcdThEQjNcXHVGRjBDXFx1NTkyN1xcdTU4RjBcXHU1NkRFXFx1NUU5NFxcdTMwMDJcXG5cXG4gICAgXFx1NUM3MVxcdTRFMkRcXHU1OTFBXFx1NTNGMlxcdTUyNERcXHU3NTFGXFx1NzI2OVxcdTUxRkFcXHU2Q0ExXFx1RkYwQ1xcdTY1RjZcXHU2NzA5XFx1OTA2RVxcdTg1M0RcXHU1OTI5XFx1N0E3QVxcdTRFNEJcXHU1REU4XFx1N0ZGQ1xcdTZBMkFcXHU4RkM3XFx1RkYwQ1xcdTU3MjhcXHU1NzMwXFx1NEUwQVxcdTYyOTVcXHU0RTBCXFx1NTkyN1xcdTcyNDdcXHU3Njg0XFx1OTYzNFxcdTVGNzFcXHVGRjBDXFx1NEVBNlxcdTY3MDlcXHU4MzUyXFx1NTE3RFxcdTdBQ0JcXHU0RThFXFx1NUNGMFxcdTRFMEFcXHVGRjBDXFx1NTQxRVxcdTY3MDhcXHU4MDBDXFx1NTU3OFxcdUZGMENcXHU2NkY0XFx1NUMxMVxcdTRFMERcXHU0RTg2XFx1NTQwNFxcdTc5Q0RcXHU2QkQyXFx1ODY2QlxcdTRGMEZcXHU4ODRDXFx1RkYwQ1xcdTVGMDJcXHU1RTM4XFx1NTNFRlxcdTYwMTZcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU2NjBFXFx1NzY3RFxcdTU0NDBcXHUzMDAyXFx1MjAxRFxcdTRFMDBcXHU0RTJBXFx1NjYwRVxcdTY2M0VcXHU4RDcwXFx1Nzk1RVxcdTMwMDFcXHU2MTYyXFx1NEU4NlxcdTUzNEFcXHU2MkNEXFx1NzY4NFxcdTVDMEZcXHU1QkI2XFx1NEYxOVxcdTU5NzZcXHU1OEYwXFx1NTk3NlxcdTZDMTRcXHU3Njg0XFx1NTNFQlxcdTkwNTNcXHUzMDAyXFxuXFxuICAgIFxcdThGRDlcXHU2NjJGXFx1NEUwMFxcdTRFMkFcXHU1Rjg4XFx1NUMwRlxcdTc2ODRcXHU1QjY5XFx1NUI1MFxcdUZGMENcXHU1M0VBXFx1NjcwOVxcdTRFMDBcXHU0RTI0XFx1NUM4MVxcdTc2ODRcXHU2ODM3XFx1NUI1MFxcdUZGMENcXHU1MjFBXFx1NUI2NlxcdTRGMUFcXHU4RDcwXFx1OERFRlxcdTZDQTFcXHU1MUUwXFx1NEUyQVxcdTY3MDhcXHVGRjBDXFx1NEU1RlxcdTU3MjhcXHU4RERGXFx1Nzc0MFxcdTk1M0JcXHU3MEJDXFx1NEY1M1xcdTlCNDRcXHUzMDAyXFx1NjYzRVxcdTcxMzZcXHVGRjBDXFx1NEVENlxcdTY2MkZcXHU4MUVBXFx1NURGMVxcdTUxRDFcXHU4RkM3XFx1Njc2NVxcdTc2ODRcXHVGRjBDXFx1NkRGN1xcdTU3MjhcXHU0RTg2XFx1NUU3NFxcdTk1N0ZcXHU3Njg0XFx1NUI2OVxcdTVCNTBcXHU0RTJEXFx1RkYwQ1xcdTUyMDZcXHU2NjBFXFx1OEZEOFxcdTRFMERcXHU1RTk0XFx1OEJFNVxcdTUxRkFcXHU3M0IwXFx1NTcyOFxcdThGRDlcXHU0RTJBXFx1OTYxRlxcdTRGMERcXHU5MUNDXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NTRGQ1xcdTU0RkNcXHU1NEM4XFx1NTYzRlxcdUZGMDFcXHUyMDFEXFx1NUMwRlxcdTVCQjZcXHU0RjE5XFx1NTNFM1xcdTRFMkRcXHU1M0QxXFx1NThGMFxcdUZGMENcXHU1QUU5XFx1NUFFOVxcdTc2ODRcXHU1QzBGXFx1NjI0QlxcdTgxQzJcXHU1MzU2XFx1NTI5QlxcdTc2ODRcXHU2MzI1XFx1NTJBOFxcdTc3NDBcXHVGRjBDXFx1NjU0OFxcdTRFRkZcXHU1OTI3XFx1NUI2OVxcdTVCNTBcXHU0RUVDXFx1NzY4NFxcdTUyQThcXHU0RjVDXFx1RkYwQ1xcdTUzRUZcXHU2NjJGXFx1NEVENlxcdTU5MkFcXHU4RkM3XFx1NUU3Q1xcdTVDMEZcXHVGRjBDXFx1NTJBOFxcdTRGNUNcXHU2QjZBXFx1NkI2QVxcdTYyNkRcXHU2MjZEXFx1RkYwQ1xcdTRFMTRcXHU2QjY1XFx1NUM2NVxcdThFNTJcXHU4RERBXFx1RkYwQ1xcdTY0NDdcXHU2NDQ3XFx1NjQ0NlxcdTY0NDZcXHVGRjBDXFx1NTE4RFxcdTUyQTBcXHU0RTBBXFx1NTYzNFxcdTg5RDJcXHU5NUY0XFx1NkI4QlxcdTc1NTlcXHU3Njg0XFx1NzY3RFxcdTgyNzJcXHU1OTc2XFx1NkUwRFxcdUZGMENcXHU1RjE1XFx1NEVCQVxcdTUzRDFcXHU3QjExXFx1MzAwMlxcblxcbiAgICBcXHU0RTAwXFx1N0ZBNFxcdTU5MjdcXHU1QjY5XFx1NUI1MFxcdTc3MEJcXHU3NzQwXFx1NEVENlxcdUZGMENcXHU3Njg2XFx1NjMyNFxcdTc3MDlcXHU1RjA0XFx1NzczQ1xcdUZGMENcXHU4QkE5XFx1NTM5RlxcdTY3MkNcXHU0RTI1XFx1ODA4M1xcdTc2ODRcXHU2NjY4XFx1N0VDM1xcdTZDMTRcXHU2QzFCXFx1OEY3QlxcdTdGMTNcXHU0RTg2XFx1NEUwRFxcdTVDMTFcXHUzMDAyXFxuXFxuICAgIFxcdTVDMEZcXHU0RTBEXFx1NzBCOVxcdTk1N0ZcXHU3Njg0XFx1NUY4OFxcdTc2N0RcXHU1QUU5XFx1NEUwRVxcdTZGMDJcXHU0RUFFXFx1RkYwQ1xcdTU5MjdcXHU3NzNDXFx1Nzc1QlxcdTRFNENcXHU2RTlDXFx1NkU5Q1xcdTc2ODRcXHU4RjZDXFx1NTJBOFxcdUZGMENcXHU2NTc0XFx1NEUyQVxcdTRFQkFcXHU1MENGXFx1NjYyRlxcdTRFMkFcXHU3NjdEXFx1NzRGN1xcdTVBMDNcXHU1QTAzXFx1RkYwQ1xcdTVGODhcXHU1M0VGXFx1NzIzMVxcdUZGMENcXHU3QTFBXFx1NUFFOVxcdTc2ODRcXHU1MkE4XFx1NEY1Q1xcdUZGMENcXHU1M0UzXFx1NEUyRFxcdTU0QkZcXHU1NEJGXFx1NTQ0MFxcdTU0NDBcXHVGRjBDXFx1NjFBOFxcdTYwMDFcXHU1M0VGXFx1NjNBQ1xcdTMwMDJcXHU4RkQ5XFx1OEJBOVxcdTUzRTZcXHU0RTAwXFx1NzI0N1xcdTU3M0FcXHU1NzMwXFx1NEUyRFxcdTc2RDhcXHU1NzUwXFx1NTcyOFxcdTRFMDBcXHU1NzU3XFx1NTc1N1xcdTVERThcXHU3N0YzXFx1NEUwQVxcdTZCNjNcXHU1NzI4XFx1NTQxRVxcdTU0MTBcXHU1OTI5XFx1N0NCRVxcdTc2ODRcXHU0RTAwXFx1NEU5QlxcdTgwMDFcXHU0RUJBXFx1NEU1RlxcdTkwRkRcXHU5NzMyXFx1NTFGQVxcdTdCMTFcXHU1QkI5XFx1MzAwMlxcblxcbiAgICBcXHU1QzMxXFx1NjYyRlxcdTkwQTNcXHU0RTlCXFx1OEVBQlxcdTY3NTBcXHU5QUQ4XFx1NTkyN1xcdTlCNDFcXHU2OEE3XFx1MzAwMVxcdTRFMEFcXHU1MzRBXFx1OEVBQioqXFx1MzAwMVxcdTgwOENcXHU4MTcxXFx1NTE0OVxcdTRFQUVcXHU1RTc2XFx1OTY4NlxcdThENzdcXHU3Njg0XFx1NjIxMFxcdTVFNzRcXHU3NTM3XFx1NUI1MFxcdTRFRUNcXHVGRjBDXFx1NEU1RlxcdTkwRkRcXHU2NzFCXFx1NEU4NlxcdThGQzdcXHU2NzY1XFx1RkYwQ1xcdTVFMjZcXHU3NzQwXFx1N0IxMVxcdTYxMEZcXHUzMDAyXFx1NEVENlxcdTRFRUNcXHU2NjJGXFx1Njc1MVxcdTRFMkRcXHU2NzAwXFx1NUYzQVxcdTU4RUVcXHU3Njg0XFx1NEVCQVxcdUZGMENcXHU2NjJGXFx1NzJFOVxcdTczMEVcXHU0RTBFXFx1NUI4OFxcdTYyQTRcXHU4RkQ5XFx1NEUyQVxcdTY3NTFcXHU4NDNEXFx1NzY4NFxcdTY3MDBcXHU5MUNEXFx1ODk4MVxcdTUyOUJcXHU5MUNGXFx1RkYwQ1xcdTRFNUZcXHU5MEZEXFx1NTcyOFxcdTk1M0JcXHU0RjUzXFx1RkYwQ1xcdTY3MDlcXHU0RUJBXFx1NjNFMVxcdTc3NDBcXHU0RTBEXFx1NzdFNVxcdTU0MERcXHU3Njg0XFx1NURFOFxcdTUxN0RcXHU5QUE4XFx1OUFCQ1xcdTYyNTNcXHU3OEU4XFx1ODAwQ1xcdTYyMTBcXHU3Njg0XFx1NzY3RFxcdTlBQThcXHU1OTI3XFx1NjhEMlxcdUZGMENcXHU0RTVGXFx1NjcwOVxcdTRFQkFcXHU2MzAxXFx1Nzc0MFxcdTlFRDFcXHU4MjcyXFx1OTFEMVxcdTVDNUVcXHU5NEY4XFx1NjIxMFxcdTc2ODRcXHU5NjE0XFx1NTI1MVxcdUZGMENcXHU3NTI4XFx1NTI5QlxcdTgyMUVcXHU1MkE4XFx1RkYwQ1xcdTk4Q0VcXHU1OEYwXFx1NTk4MlxcdTk2RjdcXHUzMDAyXFxuXFxuICAgIFxcdTc1MUZcXHU1QjU4XFx1NzNBRlxcdTU4ODNcXHU2NzgxXFx1NTE3NlxcdTYwNzZcXHU1MkEzXFx1RkYwQ1xcdTU5MUFcXHU2RDJBXFx1ODM1MlxcdTczMUJcXHU1MTdEXFx1NkJEMlxcdTg2NkJcXHVGRjBDXFx1NEUzQVxcdTRFODZcXHU5OERGXFx1NzI2OVxcdUZGMENcXHU0RTNBXFx1NEU4NlxcdTc1MUZcXHU1QjU4XFx1RkYwQ1xcdTVGODhcXHU1OTFBXFx1NzUzN1xcdTVCNTBcXHU4RkQ4XFx1NjcyQVxcdTYyMTBcXHU1RTc0XFx1NUMzMVxcdThGQzdcXHU2NUU5XFx1NTkyRFxcdTYyOThcXHU1NzI4XFx1NEU4NlxcdTU5MjdcXHU4MzUyXFx1NEUyRFxcdUZGMENcXHU2MEYzXFx1ODk4MVxcdTZEM0JcXHU0RTBCXFx1NTNCQlxcdUZGMENcXHU1NTJGXFx1NjcwOVxcdTVGM0FcXHU1OEVFXFx1NURGMVxcdThFQUJcXHUzMDAyXFx1NkUwNVxcdTY2NjhcXHU3NTI4XFx1NTI5RlxcdUZGMENcXHU2NUUwXFx1OEJCQVxcdTY2MkZcXHU2MjEwXFx1NUU3NFxcdTRFQkFcXHVGRjBDXFx1NEVBNlxcdTYyMTZcXHU2NjJGXFx1ODAwMVxcdTRFQkFcXHU0RTBFXFx1NUI2OVxcdTVCNTBcXHVGRjBDXFx1OEZEOVxcdTY2MkZcXHU2QkNGXFx1NEUwMFxcdTRFMkFcXHU0RUJBXFx1ODFFQVxcdTVFN0NcXHU1QzMxXFx1NURGMlxcdTUxN0JcXHU2MjEwXFx1NzY4NFxcdTRFNjBcXHU2MEVGXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NjUzNlxcdTVGQzNcXHVGRjAxXFx1MjAxRFxcdThEMUZcXHU4RDIzXFx1Nzc2M1xcdTRGQzNcXHU0RTBFXFx1NjMwN1xcdTVCRkNcXHU1QjY5XFx1NUI1MFxcdTdFQzNcXHU1MjlGXFx1NzY4NFxcdTRFMkRcXHU1RTc0XFx1NzUzN1xcdTVCNTBcXHU1OTI3XFx1NThGMFxcdTU1OEFcXHU5MDUzXFx1MzAwMlxcdTRFMDBcXHU3RkE0XFx1NUI2OVxcdTVCNTBcXHU4RDc2XFx1N0QyN1xcdThCQTRcXHU3NzFGXFx1NEU4NlxcdThENzdcXHU2NzY1XFx1RkYwQ1xcdTdFRTdcXHU3RUVEXFx1NTcyOFxcdTY3RDRcXHU1NDhDXFx1NEUwRVxcdTcwN0ZcXHU3MEMyXFx1NzY4NFxcdTY3MURcXHU5NzFFXFx1NEUyRFxcdTk1M0JcXHU3MEJDXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NTQ3Q1xcdTIwMjZcXHUyMDI2XFx1NTRCRlxcdTU0NDBcXHVGRjBDXFx1N0QyRlxcdTRFODZcXHUzMDAyXFx1MjAxRFxcdTVDMEZcXHU0RTBEXFx1NzBCOVxcdTk1N0ZcXHU1MUZBXFx1NEU4NlxcdTRFMDBcXHU1M0UzXFx1NkMxNFxcdUZGMENcXHU0RTAwXFx1NUM0MVxcdTU4QTlcXHU1MTNGXFx1NTc1MFxcdTU3MjhcXHU0RTg2XFx1NTczMFxcdTRFMEFcXHVGRjBDXFx1NzcwQlxcdTc3NDBcXHU1OTI3XFx1NUI2OVxcdTVCNTBcXHU0RUVDXFx1OTUzQlxcdTcwQkNcXHU0RjUzXFx1OUI0NFxcdTMwMDJcXHU1M0VGXFx1NEVDNVxcdTRFMDBcXHU0RjFBXFx1NTEzRlxcdTVERTVcXHU1OTJCXFx1NEVENlxcdTVDMzFcXHU4OEFCXFx1NTIwNlxcdTY1NjNcXHU0RTg2XFx1NkNFOFxcdTYxMEZcXHU1MjlCXFx1RkYwQ1xcdTdBRDlcXHU4RDc3XFx1OEVBQlxcdTY3NjVcXHVGRjBDXFx1NjQ0N1xcdTY0NDdcXHU2NDQ2XFx1NjQ0NlxcdUZGMENcXHU1MUIyXFx1NTQxMVxcdTRFMERcXHU4RkRDXFx1NTkwNFxcdTRFMDBcXHU1M0VBXFx1NkI2M1xcdTU3MjhcXHU4RTY2XFx1OEU2NlxcdThERjNcXHU4REYzXFx1NzY4NFxcdTRFOTRcXHU4MjcyXFx1OTZDMFxcdUZGMENcXHU3RUQzXFx1Njc5Q1xcdTc4RDVcXHU3OEQ1XFx1N0VDQVxcdTdFQ0FcXHVGRjBDXFx1OEZERVxcdTY0NTRcXHU0RTg2XFx1NTFFMFxcdTRFMkFcXHU1QzQxXFx1NThBOVxcdTUxM0ZcXHVGRjBDXFx1NTAxMlxcdTRFNUZcXHU0RTBEXFx1NTRFRFxcdUZGMENcXHU2QzE0XFx1NTQ3Q1xcdTU0N0NcXHVGRjBDXFx1NTRGQ1xcdTU0RkNcXHU1NTI3XFx1NTUyN1xcdTcyMkNcXHU4RDc3XFx1Njc2NVxcdTUxOERcXHU4RkZEXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1NTk3RFxcdTRFODZcXHVGRjBDXFx1NjUzNlxcdTUyOUZcXHVGRjAxXFx1MjAxRFxcblxcbiAgICBcXHU5NjhGXFx1Nzc0MFxcdTRFMDBcXHU1OEYwXFx1NTkyN1xcdTU1OURcXHVGRjBDXFx1NjI0MFxcdTY3MDlcXHU1QjY5XFx1NUI1MFxcdTkwRkRcXHU0RTAwXFx1OTYzNVxcdTZCMjJcXHU1NDdDXFx1RkYwQ1xcdTYzQzlcXHU0RTg2XFx1NjNDOVxcdTkxNzhcXHU3NUJDXFx1NzY4NFxcdTYyNEJcXHU4MTFBXFx1RkYwQ1xcdTgwMENcXHU1NDBFXFx1NEUwMFxcdTU0QzRcXHU4MDBDXFx1NjU2M1xcdUZGMENcXHU1MUIyXFx1NTQxMVxcdTU0MDRcXHU4MUVBXFx1NzY4NFxcdTVCQjZcXHU0RTJEXFx1RkYwQ1xcdTUxQzZcXHU1OTA3XFx1NTQwM1xcdTY1RTlcXHU5OTZEXFx1MzAwMlxcblxcbiAgICBcXHU4MDAxXFx1NEVCQVxcdTRFRUNcXHU5MEZEXFx1N0IxMVxcdTRFODZcXHVGRjBDXFx1ODFFQVxcdTVERThcXHU3N0YzXFx1NEUwQVxcdThENzdcXHU4RUFCXFx1MzAwMlxcdTgwMENcXHU5MEEzXFx1NEU5QlxcdThFQUJcXHU2NzUwXFx1NTA2NVxcdTU4RUVcXHU1OTgyXFx1ODY0RVxcdTc2ODRcXHU2MjEwXFx1NUU3NFxcdTRFQkFcXHU1MjE5XFx1NjYyRlxcdTRFMDBcXHU5NjM1XFx1N0IxMVxcdTlBODJcXHVGRjBDXFx1NjU3MFxcdTg0M0RcXHU3NzQwXFx1ODFFQVxcdTVERjFcXHU3Njg0XFx1NUI2OVxcdTVCNTBcXHVGRjBDXFx1NjJDRVxcdTc3NDBcXHU5QUE4XFx1NjhEMlxcdTRFMEVcXHU5NjE0XFx1NTI1MVxcdTRFNUZcXHU1RkVCXFx1NkI2NVxcdTU0MTFcXHU4MUVBXFx1NUJCNlxcdTRFMkRcXHU4RDcwXFx1NTNCQlxcdTMwMDJcXG5cXG4gICAgXFx1NzdGM1xcdTY3NTFcXHU0RTBEXFx1NjYyRlxcdTVGODhcXHU1OTI3XFx1RkYwQ1xcdTc1MzdcXHU1OTczXFx1ODAwMVxcdTVDMTFcXHU1MkEwXFx1OEQ3N1xcdTY3NjVcXHU4MEZEXFx1NjcwOVxcdTRFMDlcXHU3NjdFXFx1NTkxQVxcdTRFQkFcXHVGRjBDXFx1NUM0QlxcdTVCNTBcXHU5MEZEXFx1NjYyRlxcdTVERThcXHU3N0YzXFx1NzgwQ1xcdTYyMTBcXHU3Njg0XFx1RkYwQ1xcdTdCODBcXHU2NzM0XFx1ODAwQ1xcdTgxRUFcXHU3MTM2XFx1MzAwMlxcblxcbiAgICBcXHU1NzI4XFx1Njc1MVxcdTU5MzRcXHU2NzA5XFx1NEUwMFxcdTYyMkFcXHU1REU4XFx1NTkyN1xcdTc2ODRcXHU5NkY3XFx1NTFGQlxcdTY3MjhcXHVGRjBDXFx1NzZGNFxcdTVGODRcXHU1MzQxXFx1NTFFMFxcdTdDNzNcXHVGRjBDXFx1NkI2NFxcdTY1RjZcXHU0RTNCXFx1NUU3MlxcdTRFMEFcXHU1NTJGXFx1NEUwMFxcdTc2ODRcXHU2N0YzXFx1Njc2MVxcdTVERjJcXHU3RUNGXFx1NTcyOFxcdTY3MURcXHU5NzFFXFx1NEUyRFxcdTYzQTlcXHU1M0JCXFx1NEU4NlxcdTgzQjlcXHU1MTQ5XFx1RkYwQ1xcdTUzRDhcXHU1Rjk3XFx1NjY2RVxcdTY2NkVcXHU5MDFBXFx1OTAxQVxcdTRFODZcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU1NjYyXFx1RkYwQ1xcdTVDNDVcXHU3MTM2XFx1NjcwOVxcdTU3MUZcXHU5Rjk5XFx1ODA4OVxcdUZGMENcXHU3RUQ5XFx1NjIxMVxcdTRFMDBcXHU1NzU3XFx1RkYwMVxcdTIwMURcXG5cXG4gICAgXFx1OEZEOVxcdTRFOUJcXHU1QjY5XFx1NUI1MFxcdTkwRkRcXHU1Rjg4XFx1NkQzQlxcdTZDRkNcXHU0RTBFXFx1NTk3RFxcdTUyQThcXHVGRjBDXFx1NTM3M1xcdTRGQkZcXHU1NDAzXFx1OTk2RFxcdTY1RjZcXHU0RTVGXFx1OTBGRFxcdTRFMERcXHU1OTJBXFx1ODAwMVxcdTVCOUVcXHVGRjBDXFx1NEUwRFxcdTVDMTFcXHU0RUJBXFx1NjJCMVxcdTc3NDBcXHU5Njc2XFx1Nzg5N1xcdTRFQ0VcXHU4MUVBXFx1NUJCNlxcdTUxRkFcXHU2NzY1XFx1RkYwQ1xcdTUxRDFcXHU1MjMwXFx1NEU4NlxcdTRFMDBcXHU4RDc3XFx1MzAwMlxcblxcbiAgICBcXHU3N0YzXFx1Njc1MVxcdTU0NjhcXHU1NkY0XFx1ODM0OVxcdTY3MjhcXHU0RTMwXFx1ODMwMlxcdUZGMENcXHU3MzFCXFx1NTE3RFxcdTRGMTdcXHU1OTFBXFx1RkYwQ1xcdTUzRUZcXHU1Qjg4XFx1Nzc0MFxcdTU5MjdcXHU1QzcxXFx1RkYwQ1xcdTY3NTFcXHU0RUJBXFx1NzY4NFxcdTk4REZcXHU3MjY5XFx1NzZGOFxcdTVCRjlcXHU2NzY1XFx1OEJGNFxcdTUzNzRcXHU3Qjk3XFx1NEUwRFxcdTRFMEFcXHU0RTMwXFx1NzZEQlxcdUZGMENcXHU1M0VBXFx1NjYyRlxcdTRFMDBcXHU0RTlCXFx1N0M5N1xcdTlFQTZcXHU5OTdDXFx1MzAwMVxcdTkxQ0VcXHU2NzlDXFx1NEVFNVxcdTUzQ0FcXHU1QjY5XFx1NUI1MFxcdTRFRUNcXHU3ODk3XFx1NEUyRFxcdTVDMTFcXHU5MUNGXFx1NzY4NFxcdTgwODlcXHU5OERGXFx1MzAwMlxcblxcbiAgICBcXHU0RThCXFx1NUI5RVxcdTRFMEFcXHVGRjBDXFx1OThERlxcdTcyNjlcXHU0RTBEXFx1NTE0NVxcdTg4RDVcXHU1QkY5XFx1NEU4RVxcdTc3RjNcXHU2NzUxXFx1Njc2NVxcdThCRjRcXHU0RTAwXFx1NzZGNFxcdTY2MkZcXHU0RTAwXFx1NEUyQVxcdTVGODhcXHU0RTI1XFx1OTFDRFxcdTc2ODRcXHU5NUVFXFx1OTg5OFxcdTMwMDJcXHU1QzcxXFx1ODEwOVxcdTRFMkRcXHU1MzQxXFx1NTIwNlxcdTUzNzFcXHU5NjY5XFx1RkYwQ1xcdTkwQTNcXHU0RTlCXFx1NUYwMlxcdTUxN0RcXHU1MUY2XFx1NzlCRFxcdThGQzdcXHU0RThFXFx1NUYzQVxcdTU5MjdcXHU0RTBFXFx1NjA1MFxcdTYwMTZcXHVGRjBDXFx1NkJDRlxcdTRFMDBcXHU2QjIxXFx1NTNCQlxcdTcyRTlcXHU3MzBFXFx1OTBGRFxcdTUzRUZcXHU4MEZEXFx1NEYxQVxcdTY3MDlcXHU0RUJBXFx1NEUyMlxcdTYzODlcXHU2MDI3XFx1NTQ3RFxcdTMwMDJcXG5cXG4gICAgXFx1NTk4MlxcdTY3OUNcXHU2NzA5XFx1OTAwOVxcdTYyRTlcXHVGRjBDXFx1Njc1MVxcdTRFQkFcXHU2NjJGXFx1NEUwRFxcdTYxM0ZcXHU4RkRCXFx1NUM3MVxcdTc2ODRcXHUzMDAyXFx1NTZFMFxcdTRFM0FcXHU4RkRCXFx1NUM3MVxcdTVDMzFcXHU2MTBGXFx1NTQ3M1xcdTc3NDBcXHU1M0VGXFx1ODBGRFxcdTRGMUFcXHU2NzA5XFx1NkQ0MVxcdTg4NDBcXHU0RTBFXFx1NzI3QVxcdTcyNzJcXHUzMDAyXFxuXFxuICAgIFxcdTk4REZcXHU3MjY5XFx1NUJGOVxcdTRFOEVcXHU0RUQ2XFx1NEVFQ1xcdTY3NjVcXHU4QkY0XFx1OTc1RVxcdTVFMzhcXHU1QjlEXFx1OEQzNVxcdUZGMENcXHU1QkI5XFx1NEUwRFxcdTVGOTdcXHU2RDZBXFx1OEQzOVxcdUZGMENcXHU2QkNGXFx1NEUwMFxcdTRFMkFcXHU1QjY5XFx1NUI1MFxcdTRFQ0VcXHU1QzBGXFx1NUMzMVxcdTYxQzJcXHU1Rjk3XFx1OEZEOVxcdTRFMDBcXHU3MEI5XFx1RkYwQ1xcdTk5NjVcXHU5OTdGXFx1MzAwMVxcdTk4REZcXHU3MjY5XFx1MzAwMVxcdTcyRTlcXHU3MzBFXFx1MzAwMVxcdTYwMjdcXHU1NDdEXFx1MzAwMVxcdTlDOUNcXHU4ODQwXFx1OEZEOVxcdTRFOUJcXHU2NjJGXFx1NzZGOFxcdThGREVcXHU3Njg0XFx1MzAwMlxcblxcbiAgICBcXHU2NzUxXFx1NTkzNFxcdTY2MkZcXHU4MDAxXFx1NjVDRlxcdTk1N0ZcXHU3N0YzXFx1NEU5MVxcdTVDRjBcXHU3Njg0XFx1OTY2MlxcdTg0M0RcXHVGRjBDXFx1NzUzMVxcdTVERThcXHU3N0YzXFx1NTgwNlxcdTc4MENcXHU4MDBDXFx1NjIxMFxcdUZGMENcXHU3RDI3XFx1NjMyOFxcdTc3NDBcXHU3MTI2XFx1OUVEMVxcdTgwMENcXHU1REU4XFx1NTkyN1xcdTc2ODRcXHU2N0YzXFx1NjcyOFxcdTMwMDJcXHU5NjYyXFx1NTE4NVxcdTc2ODRcXHU3MDc2XFx1NTNGMFxcdTUyNERcXHVGRjBDXFx1OTY3NlxcdTdGNTBcXHU1MTg1XFx1NzY3RFxcdTgyNzJcXHU2QzQxXFx1NkRCMlxcdTZDQjhcXHU4MTdFXFx1RkYwQ1xcdTU5NzZcXHU5OTk5XFx1NjI1MVxcdTlGM0JcXHVGRjBDXFx1NEVENlxcdTZCNjNcXHU1NzI4XFx1NzFBQ1xcdTcxNkVcXHU1MTdEXFx1NTk3NlxcdUZGMENcXHU2QjY0XFx1NTkxNlxcdTRFMERcXHU2NUY2XFx1NUMwNlxcdTRFMDBcXHU0RTlCXFx1ODM2RlxcdTgzNDlcXHU3QjQ5XFx1NjI5NVxcdTY1M0VcXHU4RkRCXFx1NTNCQlxcdUZGMENcXHU0RUU1XFx1NjcyOFxcdTUyRkFcXHU2MTYyXFx1NjE2MlxcdTY0MDVcXHU1MkE4XFx1MzAwMlxcblxcbiAgICBcXHU0RTBEXFx1NTkxQVxcdTY1RjZcXHVGRjBDXFx1ODAwMVxcdTRFQkFcXHU1NThBXFx1OTA1M1xcdUZGMUFcXHUyMDFDXFx1NUMwRlxcdTRFMERcXHU3MEI5XFx1RkYwQ1xcdThGQzdcXHU2NzY1XFx1NTQwM1xcdTRFMUNcXHU4OTdGXFx1MzAwMlxcdTIwMURcXG5cXG4gICAgXFx1NUMwRlxcdTRFMERcXHU3MEI5XFx1NTcyOFxcdTUzNEFcXHU1QzgxXFx1NjVGNlxcdTVDMzFcXHU1OTMxXFx1NTNCQlxcdTRFODZcXHU3MjM2XFx1NkJDRFxcdUZGMENcXHU2NjJGXFx1NTQwM1xcdTc2N0VcXHU1MTdEXFx1NTk3NlxcdTk1N0ZcXHU1OTI3XFx1NzY4NFxcdUZGMENcXHU4MDBDXFx1NEVDQVxcdTVERjJcXHU3RUNGXFx1NEUwMFxcdTVDODFcXHU5NkY2XFx1NTFFMFxcdTRFMkFcXHU2NzA4XFx1NEU4NlxcdUZGMENcXHU4MkU1XFx1NjYyRlxcdTVCRkJcXHU1RTM4XFx1NzY4NFxcdTVCNjlcXHU1QjUwXFx1NjVFOVxcdThCRTVcXHU2NUFEXFx1NTk3NlxcdTRFODZcXHVGRjBDXFx1ODAwQ1xcdTRFRDZcXHU1Mzc0XFx1NEY5RFxcdTY1RTdcXHU1NDAzXFx1NzY4NFxcdTVGODhcXHU5OTk5XFx1NzUxQ1xcdUZGMENcXHU0RTBEXFx1ODBBRlxcdTY1QURcXHU2Mzg5XFx1RkYwQ1xcdTVFMzhcXHU4OEFCXFx1NTkyN1xcdTRFMDBcXHU0RTlCXFx1NzY4NFxcdTVCNjlcXHU1QjUwXFx1NTNENlxcdTdCMTFcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU1NEJGXFx1NTQ0MFxcdUZGMENcXHU1NDdDXFx1MjAyNlxcdTIwMjZcXHU4REQxXFx1NEUwRFxcdTUyQThcXHU0RTg2XFx1MzAwMlxcdTIwMURcXHU0RUQ2XFx1NEUwMFxcdTc2RjRcXHU1NzI4XFx1OTUzMlxcdTgwMENcXHU0RTBEXFx1ODIwRFxcdTU3MzBcXHU4RkZEXFx1OTBBM1xcdTUzRUFcXHU0RTk0XFx1ODI3MlxcdTk2QzBcXHVGRjBDXFx1NjVFOVxcdTVERjJcXHU2QzE0XFx1NTU5OFxcdTU0MDFcXHU1NDAxXFx1RkYwQ1xcdTZCNjRcXHU2NUY2XFx1NEUwMFxcdTVDNDFcXHU4MEExXFx1NTc1MFxcdTU3MjhcXHU0RTg2XFx1NTczMFxcdTRFMEFcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU1QzBGXFx1NEUwRFxcdTcwQjlcXHU1NDAzXFx1NTk3NlxcdTU1QkRcXHVGRjAxXFx1MjAxRFxcdTRFMDBcXHU3RkE0XFx1NTkyN1xcdTVCNjlcXHU1QjUwXFx1OEQ3N1xcdTU0QzRcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU0RjYwXFx1NEVFQ1xcdThGRDlcXHU3RkE0XFx1NUMwRlxcdTc2QUVcXHU3MzM0XFx1NUI1MFxcdUZGMENcXHU4RkQ4XFx1NEUwRFxcdTkwRkRcXHU2NjJGXFx1NEVDRVxcdTRFRDZcXHU4RkQ5XFx1NEUyQVxcdTVFNzRcXHU5Rjg0XFx1OEZDN1xcdTY3NjVcXHU3Njg0XFx1MzAwMlxcdTIwMURcXHU4MDAxXFx1NjVDRlxcdTk1N0ZcXHU3QjExXFx1OUE4MlxcdTkwNTNcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU2MjExXFx1NEVFQ1xcdTUzRUZcXHU2Q0ExXFx1NjcwOVxcdTU3MjhcXHU0RTAwXFx1NUM4MVxcdTUzNEFcXHU2NUY2XFx1OEZEOFxcdTU3MjhcXHU1NDAzXFx1NTk3NlxcdUZGMENcXHU1NjNGXFx1NTYzRlxcdTMwMDJcXHUyMDFEXFxuXFxuICAgIFxcdTk3NjJcXHU1QkY5XFx1NTkyN1xcdTVCNjlcXHU1QjUwXFx1NzY4NFxcdTUzRDZcXHU3QjExXFx1RkYwQ1xcdTVDMEZcXHU0RTBEXFx1NzBCOVxcdTYxQThcXHU2MUE4XFx1NzY4NFxcdTdCMTFcXHU3NzQwXFx1RkYwQ1xcdTlFRDFcXHU0RUFFXFx1NzY4NFxcdTU5MjdcXHU3NzNDXFx1NzcyRlxcdTYyMTBcXHU0RTg2XFx1NjcwOFxcdTcyNTlcXHU3MkI2XFx1RkYwQ1xcdTZCRUJcXHU0RTBEXFx1NTcyOFxcdTRFNEVcXHVGRjBDXFx1NTc1MFxcdTU3MjhcXHU5Njc2XFx1N0Y1MFxcdTUyNERcXHU3NTI4XFx1NjcyOFxcdTUyRkFcXHU4MjAwXFx1NTk3NlxcdUZGMENcXHU1NDAzXFx1NzY4NFxcdTVGODhcXHU5OTk5XFx1NzUxQ1xcdTMwMDJcXG5cXG4gICAgXFx1NjVFOVxcdTk5NkRcXHU4RkM3XFx1NTQwRVxcdUZGMENcXHU2NzUxXFx1NEUyRFxcdTUxRTBcXHU1NDBEXFx1NUU3NFxcdTVDODFcXHU1Rjg4XFx1NTkyN1xcdTc2ODRcXHU4MDAxXFx1NEVCQVxcdTRFMDBcXHU4RDc3XFx1Njc2NVxcdTUyMzBcXHU2NUNGXFx1OTU3RlxcdTc3RjNcXHU0RTkxXFx1NUNGMFxcdTc2ODRcXHU5NjYyXFx1NUI1MFxcdTRFMkRcXHVGRjBDXFx1ODY3RFxcdTcxMzZcXHU2NUU5XFx1NURGMlxcdTk4N0JcXHU1M0QxXFx1NzY4NlxcdTc2N0RcXHVGRjBDXFx1NEY0NlxcdTdDQkVcXHU2QzE0XFx1Nzk1RVxcdTkwRkRcXHU4RkQ4XFx1NUY4OFxcdThEQjNcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU2NzAwXFx1OEZEMVxcdTRFMERcXHU1OTJBXFx1NUJGOVxcdTUyQjJcXHU1NTRBXFx1RkYwQ1xcdTZERjFcXHU1OTFDXFx1NjAzQlxcdTY2MkZcXHU2NzA5XFx1NTkyN1xcdTVCQjZcXHU0RjE5XFx1OERFRlxcdThGQzdcXHVGRjBDXFx1NTJBOFxcdTk3NTlcXHU1QjlFXFx1NTcyOFxcdTU5MkFcXHU1OTI3XFx1NEU4NlxcdUZGMENcXHU4RkQ5XFx1NUM3MVxcdTgxMDlcXHU2REYxXFx1NTkwNFxcdTRFMDBcXHU1QjlBXFx1NTNEMVxcdTc1MUZcXHU0RTg2XFx1NEVDMFxcdTRFNDhcXHUzMDAyXFx1MjAxRFxcblxcbiAgICBcXHUyMDFDXFx1NTUxNFxcdUZGMENcXHU2NjI4XFx1NTkyOVxcdTU5MUNcXHU5MUNDXFx1NjIxMVxcdTg4QUJcXHU2MENBXFx1OTE5MlxcdTRFODZcXHU1MUUwXFx1NkIyMVxcdUZGMENcXHU3NkFFXFx1OUFBOFxcdTUzRDFcXHU1QkQyXFx1RkYwQ1xcdTRFMDBcXHU1QjlBXFx1NjYyRlxcdTY3MDlcXHU0RUMwXFx1NEU0OFxcdTZEMkFcXHU4MzUyXFx1NTFGNlxcdTUxN0RcXHU0RTBFXFx1NTkyN1xcdTg2NkJcXHU0RUNFXFx1OEZEOVxcdTkxQ0NcXHU4REVGXFx1OEZDN1xcdTMwMDJcXHUyMDFEXFxuXFxuICAgIFxcdTUxRTBcXHU1NDBEXFx1ODAwMVxcdTRFQkFcXHU1MTQ4XFx1NTQwRVxcdTVGMDBcXHU1M0UzXFx1RkYwQ1xcdTRFRDZcXHU0RUVDXFx1NjIxNlxcdThFNTlcXHU3NzA5XFx1NjIxNlxcdTZERjFcXHU2MDFEXFx1RkYwQ1xcdThCQThcXHU4QkJBXFx1NjcwMFxcdThGRDFcXHU3Njg0XFx1NEUwMFxcdTRFOUJcXHU1MzcxXFx1OTY2OVxcdTVGODFcXHU1MTQ2XFx1RkYwQ1xcdTg5QzlcXHU1Rjk3XFx1NjcwOVxcdTRFMERcXHU1NDBDXFx1NUJGQlxcdTVFMzhcXHU3Njg0XFx1NEU4QlxcdTYwQzVcXHU1M0QxXFx1NzUxRlxcdTRFODZcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU2MjExXFx1ODlDOVxcdTVGOTdcXHU4RkQ5XFx1NTkyN1xcdTgzNTJcXHU2REYxXFx1NTkwNFxcdTUzRUZcXHU4MEZEXFx1NTFGQVxcdTRFODZcXHU0RTg2XFx1NEUwRFxcdTVGOTdcXHU3Njg0XFx1NEUxQ1xcdTg5N0ZcXHVGRjBDXFx1NUYxNVxcdThENzdcXHU0RTg2XFx1NTQ2OFxcdTU2RjRcXHU1NzMwXFx1NTdERlxcdTRFMDBcXHU0RTlCXFx1NTkyQVxcdTUzRTRcXHU5MDU3XFx1NzlDRFxcdTc2ODRcXHU2Q0U4XFx1NjEwRlxcdUZGMENcXHU3RUI3XFx1N0VCN1xcdThENzZcXHU4RkM3XFx1NTNCQlxcdTRFODZcXHUzMDAyXFx1MjAxRFxcdTgwMDFcXHU2NUNGXFx1OTU3RlxcdTc3RjNcXHU0RTkxXFx1NUNGMFxcdTYwMURcXHU1RkQ2XFx1NTQwRVxcdThCRjRcXHU5MDUzXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1OEJFNVxcdTRFMERcXHU0RjFBXFx1NjYyRlxcdTUxRkFcXHU0RTg2XFx1NUM3MVxcdTVCOURcXHU1NDI3XFx1RkYxRlxcdTIwMURcXHU0RTAwXFx1NEUyQVxcdTgwMDFcXHU0RUJBXFx1OTg3RlxcdTY1RjZcXHU3N0FBXFx1NTcwNlxcdTRFODZcXHU3NzNDXFx1Nzc1QlxcdUZGMENcXHU5ODdCXFx1NTNEMVxcdTc2ODZcXHU1RjIwXFx1RkYwQ1xcdTk3MzJcXHU1MUZBXFx1NjBDQVxcdTVCQjlcXHUzMDAyXFxuXFxuICAgIFxcdTUxNzZcXHU0RUQ2XFx1NEVCQVxcdTRFNUZcXHU5MEZEXFx1OTczMlxcdTUxRkFcXHU1RjAyXFx1ODI3MlxcdUZGMENcXHU3NzNDXFx1Nzk1RVxcdTcwNkJcXHU3MEVEXFx1RkYwQ1xcdTRGNDZcXHU1Rjg4XFx1NUZFQlxcdTUzQzhcXHU5MEZEXFx1NzE4NFxcdTcwNkRcXHU0RTg2XFx1NzczOFxcdTRFMkRcXHU3Njg0XFx1NzA2QlxcdTcxMzBcXHVGRjBDXFx1OTBBM1xcdTc5Q0RcXHU0RTFDXFx1ODk3RlxcdTRFMERcXHU2NjJGXFx1NEVENlxcdTRFRUNcXHU4MEZEXFx1NUY5N1xcdTUyMzBcXHU3Njg0XFx1RkYwQ1xcdThGRENcXHU1NzI4XFx1NUM3MVxcdTgxMDlcXHU2NzAwXFx1NkRGMVxcdTU5MDRcXHVGRjBDXFx1NkNBMVxcdTRFQkFcXHU4RkRCXFx1NzY4NFxcdTUzQkJcXHUzMDAyXFxuXFxuICAgIFxcdThGRDlcXHU0RTQ4XFx1NTkxQVxcdTVFNzRcXHU2NzY1XFx1NEVDRVxcdTY3MkFcXHU2NzA5XFx1NEVCQVxcdTgwRkRcXHU2RDNCXFx1Nzc0MFxcdThGREJcXHU1MUZBXFx1NEUwMFxcdThEOUZcXHVGRjBDXFx1NUM3MVxcdTRFMkRcXHU1NDA0XFx1NzlDRFxcdTVGM0FcXHU2QTJBXFx1NzI2OVxcdTc5Q0RcXHU1MUZBXFx1NkNBMVxcdUZGMENcXHU1MzczXFx1NEZCRlxcdTc3RjNcXHU2NzUxXFx1NjI0MFxcdTY3MDlcXHU0RUJBXFx1OUY1MFxcdTk1RUZcXHVGRjBDXFx1NEU1RlxcdThGREVcXHU0RTAwXFx1NjczNVxcdTZENkFcXHU4MkIxXFx1OTBGRFxcdTRFMERcXHU0RjFBXFx1NkNEQlxcdThENzdcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU2NUNGXFx1OTU3RlxcdUZGMENcXHU2MjExXFx1NEVFQ1xcdTVERjJcXHU3RUNGXFx1NjcwOVxcdTRFOUJcXHU2NUU1XFx1NUI1MFxcdTZDQTFcXHU2NzA5XFx1OEZEQlxcdTVDNzFcXHU0RTg2XFx1MzAwMlxcdTIwMURcXHU1QzMxXFx1NTcyOFxcdThGRDlcXHU2NUY2XFx1RkYwQ1xcdTRFMDBcXHU0RTJBXFx1OTZDNFxcdTU4RUVcXHU3Njg0XFx1NjIxMFxcdTVFNzRcXHU3NTM3XFx1NUI1MFxcdThENzBcXHU4RkRCXFx1OTY2MlxcdTRFMkRcXHVGRjBDXFx1NEVENlxcdTY2MkZcXHU3MkU5XFx1NzMwRVxcdTk2MUZcXHU0RjBEXFx1NzY4NFxcdTU5MzRcXHU5ODg2XFx1RkYwQ1xcdTRFNUZcXHU1QzA2XFx1NjYyRlxcdTc3RjNcXHU2NzUxXFx1NzY4NFxcdTRFMEJcXHU0RUZCXFx1NjVDRlxcdTk1N0ZcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU2NzAwXFx1OEZEMVxcdTY3MDlcXHU0RTlCXFx1NEUwRFxcdTU5MkFcXHU1RTczXFx1NTU0QVxcdTMwMDJcXHUyMDFEXFx1ODAwMVxcdTY1Q0ZcXHU5NTdGXFx1NzdGM1xcdTRFOTFcXHU1Q0YwXFx1NzZCMVxcdTc3MDlcXHUzMDAyXFxuXFxuICAgIFxcdTIwMUNcXHU1M0VGXFx1NjYyRlxcdTk4REZcXHU3MjY5XFx1NzcxRlxcdTc2ODRcXHU0RTBEXFx1NTkxQVxcdTRFODZcXHUzMDAyXFx1MjAxRFxcdTc3RjNcXHU2Nzk3XFx1ODY0RVxcdTkwNTNcXHVGRjBDXFx1NEVENlxcdThFQUJcXHU2NzUwXFx1Njc4MVxcdTRFM0FcXHU5QUQ4XFx1NTkyN1xcdUZGMENcXHU0RTI0XFx1N0M3M1xcdTY3MDlcXHU0RjU5XFx1RkYwQ1xcdTgwQ0NcXHU3NzQwXFx1NEUwMFxcdTUzRTNcXHU0RTA5XFx1NzY3RVxcdTRGNTlcXHU2NUE0XFx1NzY4NFxcdTk2MTRcXHU1MjUxXFx1RkYwQ1xcdTY1NzRcXHU0RTJBXFx1NEVCQVxcdTU4RUVcXHU3Njg0XFx1NTk4MlxcdTU0MENcXHU0RTAwXFx1NTkzNFxcdTRFQkFcXHU3MThBXFx1RkYwQ1xcdTZENTFcXHU4RUFCXFx1NTNFNFxcdTk0RENcXHU4MjcyXFx1NzY4NFxcdTgwOENcXHU4MDg5XFx1NEUwMFxcdTU3NTdcXHU1NzU3XFx1RkYwQ1xcdTU5ODJcXHU0RTAwXFx1Njc2MVxcdTY3NjFcXHU4NkM3XFx1ODdEMlxcdTU3MjhcXHU2RTM4XFx1NTJBOFxcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTVBMDNcXHU1QjUwXFx1NEVFQ1xcdTk3MDBcXHU4OTgxXFx1OTU3RlxcdThFQUJcXHU0RjUzXFx1RkYwQ1xcdTRFMERcXHU4MEZEXFx1OTk3RlxcdTc3NDBcXHVGRjBDXFx1NUY5N1xcdTYwRjNcXHU0RTlCXFx1NTI5RVxcdTZDRDVcXHUzMDAyXFx1MjAxRFxcdTY3MDlcXHU4MDAxXFx1NEVCQVxcdTVGMDBcXHU1M0UzXFx1MzAwMlxcblxcbiAgICBcXHUyMDFDXFx1ODY3RFxcdTcxMzZcXHU1OTFDXFx1OTFDQ1xcdTRFMERcXHU1RTczXFx1OTc1OVxcdUZGMENcXHU0RjQ2XFx1NzY3RFxcdTU5MjlcXHU1MDEyXFx1NjYyRlxcdTZDQTFcXHU2NzA5XFx1NEVDMFxcdTRFNDhcXHU1RjAyXFx1NUUzOFxcdUZGMENcXHU2MjExXFx1NUUyNlxcdTRFOUJcXHU0RUJBXFx1NTFGQVxcdTUzQkJcXHVGRjBDXFx1NUMwRlxcdTVGQzNcXHU0RTAwXFx1NzBCOVxcdTVFOTRcXHU4QkU1XFx1NkNBMVxcdTk1RUVcXHU5ODk4XFx1MzAwMlxcdTIwMURcXHU3N0YzXFx1Njc5N1xcdTg2NEVcXHU5MDUzXFx1MzAwMlxcblxcbiAgICBcXHU2NzAwXFx1NTQwRVxcdUZGMENcXHU1MUUwXFx1NTM0MVxcdTU0MERcXHU5NzUyXFx1NThFRVxcdTVFNzRcXHU3NTM3XFx1NUI1MFxcdTU3MjhcXHU2NzUxXFx1NTkzNFxcdTk2QzZcXHU1NDA4XFx1RkYwQ1xcdTc1MzFcXHU2NUNGXFx1OTU3RlxcdTc3RjNcXHU0RTkxXFx1NUNGMFxcdTVFMjZcXHU3NzQwXFx1Njc2NVxcdTUyMzBcXHU2NUMxXFx1OEZCOVxcdTc2ODRcXHU5NkY3XFx1NTFGQlxcdTY3MjhcXHU1MjREXFx1RkYwQ1xcdTVCRjlcXHU3NzQwXFx1ODAwMVxcdTY3RjNcXHU2ODExXFx1OEJBNFxcdTc3MUZcXHU3OTQ4XFx1Nzk3N1xcdTMwMDJcXG5cXG4gICAgXFx1MjAxQ1xcdTc5NkRcXHU3MDc1XFx1RkYwQ1xcdThCRjdcXHU0RkREXFx1NEY1MVxcdTY1Q0ZcXHU0RUJBXFx1RkYwQ1xcdThCQTlcXHU1QjY5XFx1NUI1MFxcdTRFRUNcXHU2MjUzXFx1NTIzMFxcdTgwQTVcXHU3RjhFXFx1NzY4NFxcdTczMEVcXHU3MjY5XFx1RkYwQ1xcdTVFNzNcXHU1Qjg5XFx1NUY1MlxcdTY3NjVcXHUzMDAyXFx1NjIxMVxcdTRFRUNcXHU1QzA2XFx1NEVFNVxcdTg2NTRcXHU4QkRBXFx1NzY4NFxcdTVGQzNcXHVGRjBDXFx1NEUxNlxcdTRFRTNcXHU3OTZEXFx1Nzk0MFxcdTRFMEVcXHU0RjlCXFx1NTE3QlxcdTRGNjBcXHUzMDAyXFx1MjAxRFxcblxcbiAgICBcXHU1RjAwXFx1NTlDQlxcdTRFMEFcXHU0RjIwXFx1NEU4NlxcdUZGMENcXHU2QkNGXFx1NEUwMFxcdTRFMkFcXHU3MEI5XFx1NTFGQlxcdTMwMDFcXHU2M0E4XFx1ODM1MFxcdTMwMDFcXHU2NTM2XFx1ODVDRlxcdTkwRkRcXHU1QkY5XFx1OEZEOVxcdTY3MkNcXHU2NUIwXFx1NEU2NlxcdTVGODhcXHU5MUNEXFx1ODk4MVxcdUZGMENcXHU4QkE5XFx1NjcyQ1xcdTRFNjZcXHU1MUIyXFx1OEQ3N1xcdUZGMENcXHU3OUJCXFx1NEUwRFxcdTVGMDBcXHU2QkNGXFx1NEUwMFxcdTRGNERcXHU1MTQ0XFx1NUYxRlxcdTU5RDBcXHU1OUI5XFx1RkYwQ1xcdTk3MDBcXHU4OTgxXFx1NTkyN1xcdTVCQjZcXHU3Njg0XFx1NjUyRlxcdTYzMDFcXHUzMDAyXFx1NTNFNlxcdTU5MTZcXHVGRjBDXFx1NEVDQVxcdTU5MjlcXHU2NjVBXFx1NEUwQVxcdTUxNkJcXHU3MEI5XFx1NTkyN1xcdTVCQjZcXHU1M0VGXFx1NEVFNVxcdTY3NjVcXHU2QjZBXFx1NkI2QTI1NzlcXHU3M0E5XFx1RkYwQ1xcdTYyMTFcXHU0RTVGXFx1NTNCQlxcdTMwMDJcXHU4RkQ4XFx1NjcwOVxcdUZGMENcXHU4QzIyXFx1OEMyMlxcdTk4RDhcXHU3RUEyXFx1NEUwRVxcdTYyNTNcXHU4RDRGXFx1NzY4NFxcdTYyNDBcXHU2NzA5XFx1NTE0NFxcdTVGMUZcXHU1OUQwXFx1NTlCOVxcdUZGMDFcXG4gICAgJyxcbiAgICAgICAgY3VycmVudFZhbHVlOiAwLFxuICAgICAgICBpc0xpZ2h0OiB0cnVlLFxuICAgICAgICBmb250c2l6ZTogNDAsXG4gICAgICAgIHRpdGxlU3RhdHVzOiBmYWxzZSxcbiAgICAgICAgc2V0dGluZ1N0YXR1czogZmFsc2UsXG4gICAgICAgIHJlYWRTZXR0aW5nU3RhdHVzOiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZGF5JyxcblxuICAgICAgICBjb250ZW50Q2xhc3NOYW1lOiAnJyxcblxuICAgICAgICBjaGFwdGVyVGl0bGVDbGFzc05hbWU6ICcnLFxuXG4gICAgICAgIGNoYXB0ZXJDb250ZW50Q2xhc3NOYW1lOiAnJyxcblxuICAgICAgICBwYWdlTW9kZWw6ICd2ZXJ0aWNhbCcsXG5cbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICBcImxhc3RDaGFwdGVyXCI6IFwiL1BhZ2VfUmVhZC9pbWcvbGFzdF9jaGFwdGVyLnBuZ1wiLFxuICAgICAgICAgICAgXCJiYWNrXCI6IFwiL1BhZ2VfUmVhZC9pbWcvYmFjay5wbmdcIixcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIi9QYWdlX1JlYWQvaW1nL2xpc3QucG5nXCIsXG4gICAgICAgICAgICBcIm1vb25cIjogXCIvUGFnZV9SZWFkL2ltZy9tb29uLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXR0aW5nXCI6IFwiL1BhZ2VfUmVhZC9pbWcvc2V0dGluZy5wbmdcIixcbiAgICAgICAgICAgIFwic3VuXCI6IFwiL1BhZ2VfUmVhZC9pbWcvc3VuLnBuZ1wiLFxuICAgICAgICAgICAgXCJuZXh0Q2hhcHRlclwiOiBcIi9QYWdlX1JlYWQvaW1nL25leHRfY2hhcHRlci5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICBub3ZlbGNvdmVyOiB7XG4gICAgICAgICAgICBcImhhbmRcIjogXCIvUGFnZV9SZWFkL2ltZy9oYW5kLnBuZ1wiLFxuICAgICAgICAgICAgXCJsZWZ0X2Fycm93c1wiOiBcIi9QYWdlX1JlYWQvaW1nL2xlZnRfYXJyb3dzLnBuZ1wiLFxuICAgICAgICAgICAgXCJwb2ludFwiOiBcIi9QYWdlX1JlYWQvaW1nL3BvaW50LnBuZ1wiLFxuICAgICAgICAgICAgXCJyaWdodF9hcnJvd3NcIjogXCIvUGFnZV9SZWFkL2ltZy9yaWdodF9hcnJvd3MucG5nXCJcbiAgICAgICAgfSxcblxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JOYW1lOiB7XG4gICAgICAgICAgICBuYW1lMTogJ+aKpOecvCcsXG4gICAgICAgICAgICBuYW1lMjogJ+e+iuearue6uCcsXG4gICAgICAgICAgICBuYW1lMzogJ+WknOS5i+mthScsXG4gICAgICAgICAgICBuYW1lNDogJ+e6uOS5i+eBtSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgICAgdGV4dENvbG9yOiAnIzFhMWExYScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyxcbiAgICAgICAgICAgIHRleHQ6ICfpmIXor7snLFxuICAgICAgICAgICAgbWVudTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5pdGVtKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBKU09OLnBhcnNlKHRoaXMuaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXRlbS5jYXRhbG9ndWVUaXRsZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuaXRlbS5jYXRhbG9ndWVUaXRsZTtcbiAgICAgICAgICAgIHRoaXMuY2F0YWxvZ3VlTnVtYmVyID0gdGhpcy5pdGVtLmNhdGFsb2d1ZU51bWJlcjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd1NldHRpbmc6IGZ1bmN0aW9uIHNob3dTZXR0aW5nKCkge1xuICAgICAgICB0aGlzLnRpdGxlU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nU3RhdHVzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgICAgIHRleHRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjYyNjI2J1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhpZGVTZXR0aW5nOiBmdW5jdGlvbiBoaWRlU2V0dGluZygpIHtcbiAgICAgICAgdGhpcy50aXRsZVN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHRpbmdTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWFkU2V0dGluZ1N0YXR1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgICAgdGV4dENvbG9yOiAnIzFhMWExYSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnZGF5Jykge1xuICAgICAgICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnbmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2NmNjOTknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlNmQ5YmEnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ2dyYXknKSB7XG4gICAgICAgICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTU1NTU1J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5nZWxpZ2h0OiBmdW5jdGlvbiBjaGFuZ2VsaWdodCgpIHtcbiAgICAgICAgdGhpcy5pc0xpZ2h0ID0gIXRoaXMuaXNMaWdodDtcbiAgICAgICAgdGhpcy50aXRsZVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ2RheScpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ25pZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlYWRTZXR0aW5nOiBmdW5jdGlvbiByZWFkU2V0dGluZygpIHtcbiAgICAgICAgdGhpcy5yZWFkU2V0dGluZ1N0YXR1cyA9IHRydWU7XG4gICAgICAgIHRoaXMudGl0bGVTdGF0dXMgPSBmYWxzZTtcbiAgICB9LFxuICAgIGNoYW5nZWZvbnRzaXplOiBmdW5jdGlvbiBjaGFuZ2Vmb250c2l6ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwicmVkdWNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZm9udHNpemUgPSB0aGlzLmZvbnRzaXplIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJyZWxlYXNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnRzaXplID0gdGhpcy5mb250c2l6ZSArIDE7XG4gICAgICAgICAgICB9XG4gICAgfSxcbiAgICBjaGFuZ2VQYWdpbmdNb2RlbDogZnVuY3Rpb24gY2hhbmdlUGFnaW5nTW9kZWwocGFnaW5nTW9kZWwpIHtcbiAgICAgICAgdGhpcy5wYWdlTW9kZWwgPSBwYWdpbmdNb2RlbDtcbiAgICB9LFxuICAgIGNoYW5nZUJhY2tncm91bmRDb2xvcjogZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZENvbG9yKGJhY2tncm91bmRDb2xvcikge1xuICAgICAgICB0aGlzLnRpdGxlU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICdkYXknKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRDbGFzc05hbWUgPSAnY29udGVudCc7XG4gICAgICAgICAgICB0aGlzLmNoYXB0ZXJUaXRsZUNsYXNzTmFtZSA9ICdjaGFwdGVyLXRpdGxlJztcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlckNvbnRlbnRDbGFzc05hbWUgPSAnY2hhcHRlci1jb250ZW50JztcbiAgICAgICAgfSBlbHNlIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09ICduaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudENsYXNzTmFtZSA9ICduaWdodC1jb250ZW50JztcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlclRpdGxlQ2xhc3NOYW1lID0gJ25pZ2h0LWNoYXB0ZXItdGl0bGUnO1xuICAgICAgICAgICAgdGhpcy5jaGFwdGVyQ29udGVudENsYXNzTmFtZSA9ICduaWdodC1jaGFwdGVyLWNvbnRlbnQnO1xuICAgICAgICB9IGVsc2UgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50Q2xhc3NOYW1lID0gJ2dyZWVuLWNvbnRlbnQnO1xuICAgICAgICAgICAgdGhpcy5jaGFwdGVyVGl0bGVDbGFzc05hbWUgPSAnZ3JlZW4tY2hhcHRlci10aXRsZSc7XG4gICAgICAgICAgICB0aGlzLmNoYXB0ZXJDb250ZW50Q2xhc3NOYW1lID0gJ2dyZWVuLWNoYXB0ZXItY29udGVudCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYmFja2dyb3VuZENvbG9yID09PSAneWVsbG93Jykge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50Q2xhc3NOYW1lID0gJ3llbGxvdy1jb250ZW50JztcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlclRpdGxlQ2xhc3NOYW1lID0gJ3llbGxvdy1jaGFwdGVyLXRpdGxlJztcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlckNvbnRlbnRDbGFzc05hbWUgPSAneWVsbG93LWNoYXB0ZXItY29udGVudCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYmFja2dyb3VuZENvbG9yID09PSAnZ3JheScpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudENsYXNzTmFtZSA9ICdncmF5LWNvbnRlbnQnO1xuICAgICAgICAgICAgdGhpcy5jaGFwdGVyVGl0bGVDbGFzc05hbWUgPSAnZ3JheS1jaGFwdGVyLXRpdGxlJztcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlckNvbnRlbnRDbGFzc05hbWUgPSAnZ3JheS1jaGFwdGVyLWNvbnRlbnQnO1xuICAgICAgICB9IGVsc2UgaWYgKGJhY2tncm91bmRDb2xvciA9PT0gJ2RheScpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudENsYXNzTmFtZSA9ICdjb250ZW50JztcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlclRpdGxlQ2xhc3NOYW1lID0gJ2NoYXB0ZXItdGl0bGUnO1xuICAgICAgICAgICAgdGhpcy5jaGFwdGVyQ29udGVudENsYXNzTmFtZSA9ICdjaGFwdGVyLWNvbnRlbnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnZGF5Jykge1xuICAgICAgICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiAnIzFhMWExYScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnbmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICcjZjJmMmYyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2NmNjOTknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogJyMxYTFhMWEnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlNmQ5YmEnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ2dyYXknKSB7XG4gICAgICAgICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6ICcjZjJmMmYyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTU1NTU1J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUobmFtZSwgZSkge1xuICAgICAgICB0aGlzW25hbWVdID0gZS5wcm9ncmVzcztcbiAgICB9LFxuXG4gICAgY2xpY2tUb0JhY2s6IGZ1bmN0aW9uIGNsaWNrVG9CYWNrKCkge1xuICAgICAgICBfc3lzdGVtMi5kZWZhdWx0LmJhY2soKTtcbiAgICB9LFxuICAgIGNsaWNrVG9MaXN0OiBmdW5jdGlvbiBjbGlja1RvTGlzdCgpIHtcbiAgICAgICAgX3N5c3RlbTIuZGVmYXVsdC5wdXNoKHtcbiAgICAgICAgICAgIHVyaTogJy9QYWdlX0NhdGFsb2d1ZScsXG4gICAgICAgICAgICBwYXJhbXM6IHsgdGVzdElkOiAndGVzdElkJyB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX1JlYWQvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDI2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==