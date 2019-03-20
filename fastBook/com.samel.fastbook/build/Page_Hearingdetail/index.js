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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(77)
var $app_style$ = __webpack_require__(78)
var $app_script$ = __webpack_require__(79)

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

/***/ 77:
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
        "detail_content"
      ],
      "children": [
        {
          "type": "text",
          "attr": {},
          "classList": [
            "top_tittel"
          ],
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return this.tingshuData.chapterTitle}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "book_image"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.tingshuData.bookImage}
              },
              "classList": [
                "book_image_png"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {},
          "classList": [
            "book_name"
          ],
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return this.tingshuData.bookTitle}
              }
            }
          ]
        },
        {
          "type": "text",
          "attr": {},
          "classList": [
            "book_author"
          ],
          "children": [
            {
              "type": "span",
              "attr": {
                "value": function () {return this.tingshuData.author}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "book_evaluate"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.tingshuData.scoreImage}
              }
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "book_score"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.tingshuData.score}
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
            "middle_massege"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "repeat": function () {return this.tingshuData.list},
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "middle_massege_title"
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
                    "middle_massege_name"
                  ],
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
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "book_detail"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "detail_text"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.tingshuData.description}
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
        "buttom_audio"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "audio-content"
          ],
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
                    "audio-progress"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "audio-time"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": function () {return this.showTime}
                          }
                        }
                      ]
                    },
                    {
                      "type": "slider",
                      "attr": {
                        "value": function () {return this.time},
                        "max": function () {return this.total}
                      },
                      "classList": [
                        "slider"
                      ],
                      "style": {
                        "selectedColor": function () {return this.dynamicallyColor}
                      },
                      "events": {
                        "change": function (evt){this.getValue('time',evt)}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "audio-time"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": function () {return this.showTotal}
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
                "audio-control"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Page_Hearingdetail/img/add.png"
                  },
                  "classList": [
                    "audio-repeat"
                  ],
                  "events": {
                    "click": "loop"
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "pre_container"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.dynamicallyColor}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/pre.png"
                      },
                      "classList": [
                        "audio-last"
                      ],
                      "events": {
                        "click": "last"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "play_container"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.dynamicallyColor}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/play.png"
                      },
                      "shown": function () {return this.isPlayImg},
                      "classList": [
                        "audio-play"
                      ],
                      "events": {
                        "click": "play"
                      }
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/stop.png"
                      },
                      "shown": function () {return !this.isPlayImg},
                      "classList": [
                        "audio-pause"
                      ],
                      "events": {
                        "click": "pause"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "next_container"
                  ],
                  "style": {
                    "backgroundColor": function () {return this.dynamicallyColor}
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Page_Hearingdetail/img/next.png"
                      },
                      "classList": [
                        "audio-next"
                      ],
                      "events": {
                        "click": "next"
                      }
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Page_Hearingdetail/img/list.png"
                  },
                  "classList": [
                    "audio-more"
                  ],
                  "events": {
                    "click": "showCatalog"
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
      "classList": function () {return [this.catalogStatus===true?'hearing-shadow-show':'hearing-shadow-none']},
      "events": {
        "click": "closeCatalog"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return [this.catalogStatus===true?'hearing-catalog-show':'hearing-catalog-none']},
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "catalog-top"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return '目录 ('+this.music.length+')'}
                  }
                }
              ]
            },
            {
              "type": "list",
              "attr": {},
              "classList": [
                "catalog-list"
              ],
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "catalog-item"
                  },
                  "classList": [
                    "catalog-item"
                  ],
                  "repeat": {
                    "exp": function () {return this.music},
                    "value": "item"
                  },
                  "events": {
                    "click": function (evt){this.toHearing(this.item,this.$idx,evt)}
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "left"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "top"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {},
                              "classList": function () {return ['title_name', this.item.isHearing?'activate':'']},
                              "children": [
                                {
                                  "type": "span",
                                  "attr": {
                                    "value": function () {return this.item.chapterTitle}
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
                            "bottom"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": "/Page_Hearingdetail/img/clock.png"
                              },
                              "classList": [
                                "clock"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {},
                              "classList": [
                                "time"
                              ],
                              "children": [
                                {
                                  "type": "span",
                                  "attr": {
                                    "value": function () {return this.item.duration}
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
                        "right"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Page_Hearingdetail/img/ic_music_paly.png"
                          },
                          "classList": function () {return [this.item.isHearing?'music-paly-png':'music-paly-png-none']}
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
                "catalog-bottom"
              ],
              "events": {
                "click": "closeCatalog"
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "关闭"
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

/***/ 78:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "marginTop": "17px"
  },
  ".detail_content": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "75px"
  },
  ".top_tittel": {
    "textAlign": "center",
    "fontSize": "37.5px",
    "color": "#1a1a1a",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px"
  },
  ".book_image": {
    "justifyContent": "center",
    "marginTop": "46px",
    "marginBottom": "10px"
  },
  ".book_image_png": {
    "width": "217px",
    "height": "289px"
  },
  ".book_name": {
    "color": "#000000",
    "fontSize": "37.5px",
    "textAlign": "center",
    "marginBottom": "15px"
  },
  ".book_author": {
    "fontSize": "25px",
    "textAlign": "center",
    "color": "rgba(0,0,0,0.5)",
    "marginBottom": "13px",
    "opacity": 0.5
  },
  ".book_evaluate": {
    "marginBottom": "31px",
    "alignItems": "center"
  },
  ".book_score": {
    "fontSize": "25px",
    "color": "#FFBF00",
    "marginLeft": "10px"
  },
  ".middle_massege": {
    "alignItems": "center",
    "width": "548px",
    "flexWrap": "wrap"
  },
  ".middle_massege div": {
    "width": "273px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "middle_massege"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".middle_massege_title": {
    "fontSize": "25px",
    "color": "rgba(0,0,0,0.5)",
    "marginRight": "8px"
  },
  ".middle_massege_name": {
    "fontSize": "25px",
    "color": "rgba(0,0,0,1)"
  },
  ".book_detail": {
    "marginTop": "34px",
    "marginRight": "108px",
    "marginBottom": "3px",
    "marginLeft": "108px"
  },
  ".detail_text": {
    "lines": 10,
    "color": "#000000",
    "fontSize": "27.1px",
    "lineHeight": "44px"
  },
  ".buttom_audio": {
    "position": "absolute",
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "height": "270px"
  },
  ".content": {
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".audio-back": {
    "width": "100%",
    "height": "100px",
    "alignItems": "center"
  },
  ".audio-back image": {
    "marginLeft": "33px",
    "width": "50px",
    "height": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "audio-back"
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
  ".audio-content": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "34px",
    "paddingRight": "34px"
  },
  ".audio-title": {
    "color": "#1A1A1A",
    "fontSize": "37.5px",
    "marginTop": "16.7px"
  },
  ".audio-img": {
    "width": "467px",
    "height": "467px",
    "borderRadius": "233.5px",
    "marginBottom": "155px",
    "marginTop": "155px"
  },
  ".audio-progress": {
    "width": "680px",
    "justifyContent": "space-between"
  },
  ".audio-time": {
    "width": "60px",
    "height": "32px",
    "color": "#1A1A1A",
    "fontSize": "22.7px",
    "opacity": 0.75
  },
  ".slider": {
    "selectedColor": "#007DFF",
    "color": "#E5E5E5",
    "width": "500px",
    "paddingLeft": "22.4px",
    "paddingRight": "22.7px"
  },
  ".audio-control": {
    "width": "100%",
    "marginTop": "34px",
    "marginRight": "0px",
    "marginBottom": "58px",
    "marginLeft": "0px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".audio-repeat": {
    "width": "50px",
    "height": "50px"
  },
  ".play_container": {
    "width": "135px",
    "height": "135px",
    "marginTop": "0px",
    "marginRight": "65px",
    "marginBottom": "0px",
    "marginLeft": "65px",
    "borderRadius": "100px"
  },
  ".pre_container": {
    "width": "82px",
    "height": "82px",
    "marginLeft": "76px",
    "borderRadius": "40px"
  },
  ".next_container": {
    "width": "83px",
    "height": "83px",
    "borderRadius": "40px"
  },
  ".audio-last": {
    "width": "83px",
    "height": "83px",
    "resizeMode": "center"
  },
  ".audio-next": {
    "width": "83px",
    "height": "83px",
    "resizeMode": "center"
  },
  ".audio-play": {
    "width": "135px",
    "height": "135px"
  },
  ".audio-pause": {
    "width": "135px",
    "height": "135px"
  },
  ".audio-more": {
    "width": "50px",
    "height": "50px",
    "marginLeft": "76px"
  },
  ".hearing-shadow-show": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "width": "100%",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  ".hearing-shadow-none": {
    "display": "none"
  },
  ".hearing-catalog-show": {
    "position": "fixed",
    "flexDirection": "column",
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "width": "100%",
    "height": "883px",
    "backgroundColor": "#f0f8ff",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px"
  },
  ".hearing-catalog-none": {
    "display": "none"
  },
  ".catalog-list": {
    "paddingTop": "20px",
    "paddingLeft": "33px",
    "paddingRight": "33px"
  },
  ".catalog-item": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "130px",
    "paddingTop": "27px",
    "paddingBottom": "27px",
    "borderTopWidth": "0.5px",
    "borderTopColor": "rgba(0,0,0,0.2)"
  },
  ".left": {
    "flexDirection": "column"
  },
  ".title_num": {
    "fontSize": "31.3px",
    "color": "#1a1a1a"
  },
  ".title_name": {
    "fontSize": "31.3px",
    "color": "#1a1a1a",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".right": {
    "alignItems": "center",
    "marginLeft": "75px"
  },
  ".music-paly-png": {
    "width": "42px"
  },
  ".music-paly-png-none": {
    "display": "none"
  },
  ".bottom": {
    "marginTop": "3px",
    "alignItems": "center"
  },
  ".clock": {
    "width": "25px",
    "height": "25px"
  },
  ".time": {
    "fontSize": "27.1px",
    "color": "#1A1A1A",
    "opacity": 0.5,
    "marginLeft": "8px"
  },
  ".activate": {
    "color": "#ff0000"
  },
  ".catalog-top": {
    "width": "100%",
    "fontSize": "38px",
    "color": "#1A1A1A",
    "marginTop": "28.6px",
    "marginRight": "33px",
    "marginBottom": "17.8px",
    "marginLeft": "33px"
  },
  ".catalog-bottom": {
    "width": "100%",
    "height": "150px",
    "bottom": "0px",
    "textAlign": "center",
    "lineHeight": "50px",
    "color": "#ff0000",
    "fontSize": "28px",
    "backgroundColor": "#f0f8ff"
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.audio');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.image');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.device');

var _system6 = _interopRequireDefault(_system5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  data: {
    tingshuData: {
      chapterTitle: '第一回 命孤苦鬼节降草屋，家败落赌棚蒙羞辱',
      bookImage: '/Page_Hearingdetail/TO_DELETE/Group.png',
      bookTitle: '黑道教父杜月笙',
      author: '云中鹤',
      scoreImage: '/Page_Hearingdetail/img/star.png',
      score: '9.4分',
      list: [{
        title: '主播',
        name: '圣徒'
      }, {
        title: '状态',
        name: '连载中'
      }, {
        title: '集数',
        name: '150集'
      }, {
        title: '作者',
        name: '云中鹤'
      }],
      description: '1925年7月，杜月笙成立“三鑫公司”，垄断法租界鸦片提运。 斯特林.西格 老上海的黑帮大亨 老上海的黑帮大亨(3张) 雷夫在《宋家王朝》中描述了杜月笙鸦片销售这条通畅的“全球网络”。 同年，杜月笙出任法租界商会总联合会主席，兼纳税华人会监察。由于他在上海善待下台总统黎元洪，' + '黎元洪的秘书长特撰一副对联：“春申门下三千客，小杜城南五尺天”。他因此被其党羽吹捧为“当代春申君”。 大学者章太炎、名士杨度、名律师秦联奎都是他的座上客。由此，杜月笙的社会地位不断提升。'
    },

    dynamicallyColor: 'rgba(0, 0, 0,0.5)',
    title: '',
    minTimeGap: 0,
    image: 'TO_DELETE/Bitmap.png',
    select: 0,
    isPlayImg: false,
    isLoop: true,
    routeStatus: false,
    time: 0,
    showTime: '00:00',
    total: 0,
    showTotal: '00:00',
    music: [{ 'titleNum': 1, 'chapterTitle': "第一回 命孤苦鬼节降草屋，家败落赌棚蒙羞辱", 'image': '/Page_Hearingdetail/TO_DELETE/Group.png', 'isHearing': true, 'duration': '7\'45"', src: 'http://www.ytmp3.cn/down/43402.mp3' }, { 'titleNum': 2, 'chapterTitle': "第二回 求生计卖果拾旧习，寻出路木行把心依", 'image': '/Page_Hearingdetail/TO_DELETE/8.png', 'isHearing': false, 'duration': '7\'45"', src: 'http://www.ytmp3.cn/down/56628.mp3' }, { 'titleNum': 3, 'chapterTitle': "第三回，迷女色难耐欲中火，空妄想情场是非多", 'image': '/Page_Hearingdetail/TO_DELETE/Group.png', 'isHearing': false, 'duration': '7\'45"', src: 'http://www.ytmp3.cn/down/56343.mp3' }, { 'titleNum': 4, 'chapterTitle': "第四回，识阿姐受雇烟花弄，入八股机灵称霸王", 'image': '/Page_Hearingdetail/TO_DELETE/8.png', 'isHearing': false, 'duration': '7\'45"', src: 'http://www.ytmp3.cn/down/56174.mp3' }, { 'titleNum': 5, 'chapterTitle': "第五回，冒巡捕事败惹大祸，急救人九妹献玉身", 'image': '/Page_Hearingdetail/TO_DELETE/Group.png', 'isHearing': false, 'duration': '7\'45"', src: 'http://www.ytmp3.cn/down/47796.mp3' }, { 'titleNum': 6, 'chapterTitle': "第六回 八仙巧遇陈世昌，寻靠山进庙", 'image': '/Page_Hearingdetail/TO_DELETE/8.png', 'isHearing': false, 'duration': '7\'45"', src: 'http://www.ytmp3.cn/down/55671.mp3' }],
    catalogStatus: false
  },

  onInit: function onInit() {
    var _this2 = this;

    this.$page.setTitleBar({
      textColor: '##1A1A1A',
      backgroundColor: '#ffffff',
      menu: false
    });

    _system2.default.stop();
    this.title = this.music[this.select].title;
    _system2.default.src = this.music[this.select].src;

    this.routeStatus = false;

    if (this.item) {
      var currentAuidoItem = JSON.parse(this.item);
      _system2.default.src = currentAuidoItem.src;
      this.title = currentAuidoItem.title;
      this.image = currentAuidoItem.img;
    }

    _system2.default.autoplay = true;
    _system2.default.loop = true;
    _system2.default.currentTime = 0;

    _system2.default.ondurationchange = function () {
      _this2.total = _system2.default.duration;
      _this2.showTotal = _this2.changeTime(_this2.total);

      var percnettime = _system2.default.duration * 0.1;

      _this2.minTimeGap = percnettime > 10 ? percnettime : 10;
    };

    _system2.default.ontimeupdate = function () {
      _this2.showTime = _this2.changeTime(_system2.default.currentTime);
      _this2.time = _system2.default.currentTime;
      if (_system2.default.currentTime === _system2.default.duration) {
        _this2.next();
      }
    };
    var _this = this;
    _system6.default.getInfo({
      success: function success(data) {
        if (data.engineProvider === 'huawei') {
          _this.getColor();
        }
      }
    });
  },
  play: function play() {
    _system2.default.play();
    this.isPlayImg = false;
  },
  pause: function pause() {
    _system2.default.pause();
    this.isPlayImg = true;
  },
  last: function last() {
    if (this.select > 0) {
      this.select = this.select - 1;
      _system2.default.src = this.music[this.select].src;
      _system2.default.currentTime = 0;
      this.time = 0;
      _system2.default.play();
      this.isPlayImg = false;
      this.tingshuData.chapterTitle = this.music[this.select].chapterTitle;
      this.tingshuData.bookImage = this.music[this.select].image;

      this.music.forEach(function (element) {
        element.isHearing = false;
      });
      this.music[this.select].isHearing = true;
      var _this = this;
      _system6.default.getInfo({
        success: function success(data) {
          if (data.engineProvider === 'huawei') {
            _this.getColor();
          }
        }
      });
    } else {
      this.pause();
    }
  },
  next: function next() {
    if (this.select < this.music.length - 1) {
      this.select = this.select + 1;
      _system2.default.src = this.music[this.select].src;
      _system2.default.currentTime = 0;
      this.time = 0;
      _system2.default.play();
      this.isPlayImg = false;
      this.tingshuData.chapterTitle = this.music[this.select].chapterTitle;
      this.tingshuData.bookImage = this.music[this.select].image;

      this.music.forEach(function (element) {
        element.isHearing = false;
      });
      this.music[this.select].isHearing = true;
      var _this = this;
      _system6.default.getInfo({
        success: function success(data) {
          if (data.engineProvider === 'huawei') {
            _this.getColor();
          }
        }
      });
    } else {
      this.pause();
    }
  },
  loop: function loop() {
    this.isLoop = !this.isLoop;
    _system2.default.loop = this.isLoop;
  },
  getValue: function getValue(name, e) {
    var gap = Math.abs(e.progress - _system2.default.currentTime);
    if (gap > this.minTimeGap) {
      this.time = e.progress;
      _system2.default.currentTime = e.progress;
    }
  },
  changeTime: function changeTime(time) {
    var result = "00:00";
    if (time < 60) {
      time = time < 10 ? "0" + time : time;
      result = "00:" + time;
    } else if (time >= 60) {
      var minute = Math.floor(time / 60);
      var timeInt = 60 * minute;
      time = time % timeInt < 10 ? "0" + time % timeInt : time % timeInt;
      result = "0" + minute + ":" + time;
    }
    return result;
  },
  getColor: function getColor() {
    var _self = this;
    _system4.default.pickColor({
      uri: _self.music[_self.select].image,
      success: function success(data) {
        _self.dynamicallyColor = data.color;
      },
      fail: function fail(data, code) {
        console.log('handling fail, code = ' + code);
      },
      complete: function complete(data, code) {
        console.log('handling complete, code = ' + code);
      }
    });
  },
  showCatalog: function showCatalog() {
    this.catalogStatus = true;

    this.$page.setTitleBar({ menu: false, textColor: '#1A1A1A', backgroundColor: 'rgba(0,0,0,0.5)' });
  },
  closeCatalog: function closeCatalog() {
    this.catalogStatus = false;

    this.$page.setTitleBar({ menu: false, textColor: '#1A1A1A', backgroundColor: '#FFFFFF' });
  },
  toHearing: function toHearing(item, index) {
    _system2.default.stop();
    this.music.forEach(function (element) {
      element.isHearing = false;
    });
    item.isHearing = true;

    this.select = index;
    _system2.default.src = this.music[index].src;
    _system2.default.currentTime = 0;
    this.time = 0;
    _system2.default.play();
    this.isPlayImg = false;
    this.tingshuData.chapterTitle = this.music[index].chapterTitle;
    this.tingshuData.bookImage = this.music[index].image;
    var _this = this;
    _system6.default.getInfo({
      success: function success(data) {
        if (data.engineProvider === 'huawei') {
          _this.getColor();
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvUGFnZV9IZWFyaW5nZGV0YWlsL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDU3YjA5MzgwOWVkMTA4ZTY0OGQzIiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0hlYXJpbmdkZXRhaWwvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfSGVhcmluZ2RldGFpbC9pbmRleC51eD81YzE1Iiwid2VicGFjazovLy8vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0hlYXJpbmdkZXRhaWwvaW5kZXgudXg/ODdiMyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9IZWFyaW5nZGV0YWlsL2luZGV4LnV4PzhmYzYiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3YjA5MzgwOWVkMTA4ZTY0OGQzIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfSGVhcmluZ2RldGFpbC9pbmRleC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfSGVhcmluZ2RldGFpbC9pbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109L0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1zdGFnZS0zJnBsdWdpbnNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzEuMS4xLVN0YWJsZS4zMDEnfSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0hlYXJpbmdkZXRhaWwvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZGV0YWlsX2NvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRvcF90aXR0ZWxcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5jaGFwdGVyVGl0bGV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJib29rX2ltYWdlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5ib29rSW1hZ2V9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJvb2tfaW1hZ2VfcG5nXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJib29rX25hbWVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5ib29rVGl0bGV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYm9va19hdXRob3JcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5hdXRob3J9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJib29rX2V2YWx1YXRlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5zY29yZUltYWdlfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYm9va19zY29yZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpbmdzaHVEYXRhLnNjb3JlfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm1pZGRsZV9tYXNzZWdlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGluZ3NodURhdGEubGlzdH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJtaWRkbGVfbWFzc2VnZV90aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm1pZGRsZV9tYXNzZWdlX25hbWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJvb2tfZGV0YWlsXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZGV0YWlsX3RleHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW5nc2h1RGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbV9hdWRpb1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhdWRpby1jb250ZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYXVkaW8tcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF1ZGlvLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaG93VGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNsaWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5keW5hbWljYWxseUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5nZXRWYWx1ZSgndGltZScsZXZ0KX1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW8tdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3dUb3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYXVkaW8tY29udHJvbFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9QYWdlX0hlYXJpbmdkZXRhaWwvaW1nL2FkZC5wbmdcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhdWRpby1yZXBlYXRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImxvb3BcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicHJlX2NvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5keW5hbWljYWxseUNvbG9yfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvUGFnZV9IZWFyaW5nZGV0YWlsL2ltZy9wcmUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW8tbGFzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibGFzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwbGF5X2NvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5keW5hbWljYWxseUNvbG9yfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvUGFnZV9IZWFyaW5nZGV0YWlsL2ltZy9wbGF5LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1BsYXlJbWd9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXVkaW8tcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwicGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvUGFnZV9IZWFyaW5nZGV0YWlsL2ltZy9zdG9wLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMuaXNQbGF5SW1nfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF1ZGlvLXBhdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJwYXVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJuZXh0X2NvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5keW5hbWljYWxseUNvbG9yfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvUGFnZV9IZWFyaW5nZGV0YWlsL2ltZy9uZXh0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF1ZGlvLW5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL1BhZ2VfSGVhcmluZ2RldGFpbC9pbWcvbGlzdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhdWRpby1tb3JlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzaG93Q2F0YWxvZ1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gW3RoaXMuY2F0YWxvZ1N0YXR1cz09PXRydWU/J2hlYXJpbmctc2hhZG93LXNob3cnOidoZWFyaW5nLXNoYWRvdy1ub25lJ119LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xvc2VDYXRhbG9nXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFt0aGlzLmNhdGFsb2dTdGF0dXM9PT10cnVlPydoZWFyaW5nLWNhdGFsb2ctc2hvdyc6J2hlYXJpbmctY2F0YWxvZy1ub25lJ119LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2F0YWxvZy10b3BcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+ebruW9lSAoJyt0aGlzLm11c2ljLmxlbmd0aCsnKSd9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2F0YWxvZy1saXN0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYXRhbG9nLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRhbG9nLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm11c2ljfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KXt0aGlzLnRvSGVhcmluZyh0aGlzLml0ZW0sdGhpcy4kaWR4LGV2dCl9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGl0bGVfbmFtZScsIHRoaXMuaXRlbS5pc0hlYXJpbmc/J2FjdGl2YXRlJzonJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uY2hhcHRlclRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL1BhZ2VfSGVhcmluZ2RldGFpbC9pbWcvY2xvY2sucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL1BhZ2VfSGVhcmluZ2RldGFpbC9pbWcvaWNfbXVzaWNfcGFseS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFt0aGlzLml0ZW0uaXNIZWFyaW5nPydtdXNpYy1wYWx5LXBuZyc6J211c2ljLXBhbHktcG5nLW5vbmUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXRhbG9nLWJvdHRvbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiY2xvc2VDYXRhbG9nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWFs+mXrVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfSGVhcmluZ2RldGFpbC9pbmRleC51eFxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiXG4gIH0sXG4gIFwiLmRldGFpbF9jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI3NXB4XCJcbiAgfSxcbiAgXCIudG9wX3RpdHRlbFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzcuNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLmJvb2tfaW1hZ2VcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQ2cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5ib29rX2ltYWdlX3BuZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIxN3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyODlweFwiXG4gIH0sXG4gIFwiLmJvb2tfbmFtZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzcuNXB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1cHhcIlxuICB9LFxuICBcIi5ib29rX2F1dGhvclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEzcHhcIixcbiAgICBcIm9wYWNpdHlcIjogMC41XG4gIH0sXG4gIFwiLmJvb2tfZXZhbHVhdGVcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzFweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmJvb2tfc2NvcmVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkJGMDBcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIubWlkZGxlX21hc3NlZ2VcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI1NDhweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCIubWlkZGxlX21hc3NlZ2UgZGl2XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjczcHhcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcIm1pZGRsZV9tYXNzZWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwidFwiLFxuICAgICAgICAgIFwiblwiOiBcImRpdlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLm1pZGRsZV9tYXNzZWdlX3RpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIubWlkZGxlX21hc3NlZ2VfbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwxKVwiXG4gIH0sXG4gIFwiLmJvb2tfZGV0YWlsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjM0cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTA4cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjNweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwOHB4XCJcbiAgfSxcbiAgXCIuZGV0YWlsX3RleHRcIjoge1xuICAgIFwibGluZXNcIjogMTAsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjcuMXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDRweFwiXG4gIH0sXG4gIFwiLmJ1dHRvbV9hdWRpb1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcImxlZnRcIjogXCIwcHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNzBweFwiXG4gIH0sXG4gIFwiLmNvbnRlbnRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmF1ZGlvLWJhY2tcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmF1ZGlvLWJhY2sgaW1hZ2VcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMzcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiYXVkaW8tYmFja1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcInRcIixcbiAgICAgICAgICBcIm5cIjogXCJpbWFnZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmF1ZGlvLWNvbnRlbnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzRweFwiXG4gIH0sXG4gIFwiLmF1ZGlvLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNy41cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2LjdweFwiXG4gIH0sXG4gIFwiLmF1ZGlvLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ2N3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0NjdweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjMzLjVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTU1cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE1NXB4XCJcbiAgfSxcbiAgXCIuYXVkaW8tcHJvZ3Jlc3NcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODBweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCIuYXVkaW8tdGltZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjMycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzFBMUExQVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyMi43cHhcIixcbiAgICBcIm9wYWNpdHlcIjogMC43NVxuICB9LFxuICBcIi5zbGlkZXJcIjoge1xuICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiMwMDdERkZcIixcbiAgICBcImNvbG9yXCI6IFwiI0U1RTVFNVwiLFxuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMi40cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIyLjdweFwiXG4gIH0sXG4gIFwiLmF1ZGlvLWNvbnRyb2xcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzNHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNThweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5hdWRpby1yZXBlYXRcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIucGxheV9jb250YWluZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMzVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTM1cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI2NXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2NXB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBweFwiXG4gIH0sXG4gIFwiLnByZV9jb250YWluZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI4MnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNzZweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLm5leHRfY29udGFpbmVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODNweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmF1ZGlvLWxhc3RcIjoge1xuICAgIFwid2lkdGhcIjogXCI4M3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4M3B4XCIsXG4gICAgXCJyZXNpemVNb2RlXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYXVkaW8tbmV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgzcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgzcHhcIixcbiAgICBcInJlc2l6ZU1vZGVcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5hdWRpby1wbGF5XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTM1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEzNXB4XCJcbiAgfSxcbiAgXCIuYXVkaW8tcGF1c2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMzVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTM1cHhcIlxuICB9LFxuICBcIi5hdWRpby1tb3JlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjc2cHhcIlxuICB9LFxuICBcIi5oZWFyaW5nLXNoYWRvdy1zaG93XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiBcIjBweFwiLFxuICAgIFwibGVmdFwiOiBcIjBweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIlxuICB9LFxuICBcIi5oZWFyaW5nLXNoYWRvdy1ub25lXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCIuaGVhcmluZy1jYXRhbG9nLXNob3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4ODNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwZjhmZlwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjE2cHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLmhlYXJpbmctY2F0YWxvZy1ub25lXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCIuY2F0YWxvZy1saXN0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMzcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMzcHhcIlxuICB9LFxuICBcIi5jYXRhbG9nLWl0ZW1cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMzBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI3cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyN3B4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjAuNXB4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4yKVwiXG4gIH0sXG4gIFwiLmxlZnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnRpdGxlX251bVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWExYTFhXCJcbiAgfSxcbiAgXCIudGl0bGVfbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgXCJsaW5lc1wiOiAxLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIlxuICB9LFxuICBcIi5yaWdodFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNzVweFwiXG4gIH0sXG4gIFwiLm11c2ljLXBhbHktcG5nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDJweFwiXG4gIH0sXG4gIFwiLm11c2ljLXBhbHktcG5nLW5vbmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICB9LFxuICBcIi5ib3R0b21cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiM3B4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuY2xvY2tcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNXB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNXB4XCJcbiAgfSxcbiAgXCIudGltZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI3LjFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNSxcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5hY3RpdmF0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjAwMDBcIlxuICB9LFxuICBcIi5jYXRhbG9nLXRvcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzhweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyOC42cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTcuOHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiXG4gIH0sXG4gIFwiLmNhdGFsb2ctYm90dG9tXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTUwcHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmYwMDAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGY4ZmZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0hlYXJpbmdkZXRhaWwvaW5kZXgudXghL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL3NhbWVsL0RvY3VtZW50cy9mYXN0QXBwL2NvbS5zYW1lbC5mYXN0Ym9vay9zcmMvUGFnZV9IZWFyaW5nZGV0YWlsL2luZGV4LnV4IS9Vc2Vycy9zYW1lbC9Eb2N1bWVudHMvZmFzdEFwcC9jb20uc2FtZWwuZmFzdGJvb2svc3JjL1BhZ2VfSGVhcmluZ2RldGFpbC9pbmRleC51eFxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXsndXNlIHN0cmljdCc7XG5cbnZhciBfc3lzdGVtID0gJGFwcF9yZXF1aXJlJCgnQGFwcC1tb2R1bGUvc3lzdGVtLmF1ZGlvJyk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5c3RlbSk7XG5cbnZhciBfc3lzdGVtMyA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5pbWFnZScpO1xuXG52YXIgX3N5c3RlbTQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeXN0ZW0zKTtcblxudmFyIF9zeXN0ZW01ID0gJGFwcF9yZXF1aXJlJCgnQGFwcC1tb2R1bGUvc3lzdGVtLmRldmljZScpO1xuXG52YXIgX3N5c3RlbTYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeXN0ZW01KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICB0aW5nc2h1RGF0YToge1xuICAgICAgY2hhcHRlclRpdGxlOiAn56ys5LiA5ZueIOWRveWtpOiLpumsvOiKgumZjeiNieWxi++8jOWutui0peiQvei1jOajmuiSmee+nui+sScsXG4gICAgICBib29rSW1hZ2U6ICcvUGFnZV9IZWFyaW5nZGV0YWlsL1RPX0RFTEVURS9Hcm91cC5wbmcnLFxuICAgICAgYm9va1RpdGxlOiAn6buR6YGT5pWZ54i25p2c5pyI56yZJyxcbiAgICAgIGF1dGhvcjogJ+S6keS4rem5pCcsXG4gICAgICBzY29yZUltYWdlOiAnL1BhZ2VfSGVhcmluZ2RldGFpbC9pbWcvc3Rhci5wbmcnLFxuICAgICAgc2NvcmU6ICc5LjTliIYnLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgdGl0bGU6ICfkuLvmkq0nLFxuICAgICAgICBuYW1lOiAn5Zyj5b6SJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+eKtuaAgScsXG4gICAgICAgIG5hbWU6ICfov57ovb3kuK0nXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn6ZuG5pWwJyxcbiAgICAgICAgbmFtZTogJzE1MOmbhidcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfkvZzogIUnLFxuICAgICAgICBuYW1lOiAn5LqR5Lit6bmkJ1xuICAgICAgfV0sXG4gICAgICBkZXNjcmlwdGlvbjogJzE5MjXlubQ35pyI77yM5p2c5pyI56yZ5oiQ56uL4oCc5LiJ6ZGr5YWs5Y+44oCd77yM5Z6E5pat5rOV56ef55WM6bim54mH5o+Q6L+Q44CCIOaWr+eJueaely7opb/moLwg6ICB5LiK5rW355qE6buR5biu5aSn5LqoIOiAgeS4iua1t+eahOm7keW4ruWkp+S6qCgz5bygKSDpm7flpKvlnKjjgIrlrovlrrbnjovmnJ3jgIvkuK3mj4/ov7DkuobmnZzmnIjnrJnpuKbniYfplIDllK7ov5nmnaHpgJrnlYXnmoTigJzlhajnkIPnvZHnu5zigJ3jgIIg5ZCM5bm077yM5p2c5pyI56yZ5Ye65Lu75rOV56ef55WM5ZWG5Lya5oC76IGU5ZCI5Lya5Li75bit77yM5YW857qz56iO5Y2O5Lq65Lya55uR5a+f44CC55Sx5LqO5LuW5Zyo5LiK5rW35ZaE5b6F5LiL5Y+w5oC757uf6buO5YWD5rSq77yMJyArICfpu47lhYPmtKrnmoTnp5jkuabplb/nibnmkrDkuIDlia/lr7nogZTvvJrigJzmmKXnlLPpl6jkuIvkuInljYPlrqLvvIzlsI/mnZzln47ljZfkupTlsLrlpKnigJ3jgILku5blm6DmraTooqvlhbblhZrnvr3lkLnmjafkuLrigJzlvZPku6PmmKXnlLPlkJvigJ3jgIIg5aSn5a2m6ICF56ug5aSq54KO44CB5ZCN5aOr5p2o5bqm44CB5ZCN5b6L5biI56em6IGU5aWO6YO95piv5LuW55qE5bqn5LiK5a6i44CC55Sx5q2k77yM5p2c5pyI56yZ55qE56S+5Lya5Zyw5L2N5LiN5pat5o+Q5Y2H44CCJ1xuICAgIH0sXG5cbiAgICBkeW5hbWljYWxseUNvbG9yOiAncmdiYSgwLCAwLCAwLDAuNSknLFxuICAgIHRpdGxlOiAnJyxcbiAgICBtaW5UaW1lR2FwOiAwLFxuICAgIGltYWdlOiAnVE9fREVMRVRFL0JpdG1hcC5wbmcnLFxuICAgIHNlbGVjdDogMCxcbiAgICBpc1BsYXlJbWc6IGZhbHNlLFxuICAgIGlzTG9vcDogdHJ1ZSxcbiAgICByb3V0ZVN0YXR1czogZmFsc2UsXG4gICAgdGltZTogMCxcbiAgICBzaG93VGltZTogJzAwOjAwJyxcbiAgICB0b3RhbDogMCxcbiAgICBzaG93VG90YWw6ICcwMDowMCcsXG4gICAgbXVzaWM6IFt7ICd0aXRsZU51bSc6IDEsICdjaGFwdGVyVGl0bGUnOiBcIuesrOS4gOWbniDlkb3lraToi6bprLzoioLpmY3ojYnlsYvvvIzlrrbotKXokL3otYzmo5rokpnnvp7ovrFcIiwgJ2ltYWdlJzogJy9QYWdlX0hlYXJpbmdkZXRhaWwvVE9fREVMRVRFL0dyb3VwLnBuZycsICdpc0hlYXJpbmcnOiB0cnVlLCAnZHVyYXRpb24nOiAnN1xcJzQ1XCInLCBzcmM6ICdodHRwOi8vd3d3Lnl0bXAzLmNuL2Rvd24vNDM0MDIubXAzJyB9LCB7ICd0aXRsZU51bSc6IDIsICdjaGFwdGVyVGl0bGUnOiBcIuesrOS6jOWbniDmsYLnlJ/orqHljZbmnpzmi77ml6fkuaDvvIzlr7vlh7rot6/mnKjooYzmiorlv4Pkvp1cIiwgJ2ltYWdlJzogJy9QYWdlX0hlYXJpbmdkZXRhaWwvVE9fREVMRVRFLzgucG5nJywgJ2lzSGVhcmluZyc6IGZhbHNlLCAnZHVyYXRpb24nOiAnN1xcJzQ1XCInLCBzcmM6ICdodHRwOi8vd3d3Lnl0bXAzLmNuL2Rvd24vNTY2MjgubXAzJyB9LCB7ICd0aXRsZU51bSc6IDMsICdjaGFwdGVyVGl0bGUnOiBcIuesrOS4ieWbnu+8jOi/t+Wls+iJsumavuiAkOassuS4reeBq++8jOepuuWmhOaDs+aDheWcuuaYr+mdnuWkmlwiLCAnaW1hZ2UnOiAnL1BhZ2VfSGVhcmluZ2RldGFpbC9UT19ERUxFVEUvR3JvdXAucG5nJywgJ2lzSGVhcmluZyc6IGZhbHNlLCAnZHVyYXRpb24nOiAnN1xcJzQ1XCInLCBzcmM6ICdodHRwOi8vd3d3Lnl0bXAzLmNuL2Rvd24vNTYzNDMubXAzJyB9LCB7ICd0aXRsZU51bSc6IDQsICdjaGFwdGVyVGl0bGUnOiBcIuesrOWbm+Wbnu+8jOivhumYv+WnkOWPl+mbh+eDn+iKseW8hO+8jOWFpeWFq+iCoeacuueBteensOmcuOeOi1wiLCAnaW1hZ2UnOiAnL1BhZ2VfSGVhcmluZ2RldGFpbC9UT19ERUxFVEUvOC5wbmcnLCAnaXNIZWFyaW5nJzogZmFsc2UsICdkdXJhdGlvbic6ICc3XFwnNDVcIicsIHNyYzogJ2h0dHA6Ly93d3cueXRtcDMuY24vZG93bi81NjE3NC5tcDMnIH0sIHsgJ3RpdGxlTnVtJzogNSwgJ2NoYXB0ZXJUaXRsZSc6IFwi56ys5LqU5Zue77yM5YaS5beh5o2V5LqL6LSl5oO55aSn56W477yM5oCl5pWR5Lq65Lmd5aa554yu546J6LqrXCIsICdpbWFnZSc6ICcvUGFnZV9IZWFyaW5nZGV0YWlsL1RPX0RFTEVURS9Hcm91cC5wbmcnLCAnaXNIZWFyaW5nJzogZmFsc2UsICdkdXJhdGlvbic6ICc3XFwnNDVcIicsIHNyYzogJ2h0dHA6Ly93d3cueXRtcDMuY24vZG93bi80Nzc5Ni5tcDMnIH0sIHsgJ3RpdGxlTnVtJzogNiwgJ2NoYXB0ZXJUaXRsZSc6IFwi56ys5YWt5ZueIOWFq+S7meW3p+mBh+mZiOS4luaYjO+8jOWvu+mdoOWxsei/m+W6mVwiLCAnaW1hZ2UnOiAnL1BhZ2VfSGVhcmluZ2RldGFpbC9UT19ERUxFVEUvOC5wbmcnLCAnaXNIZWFyaW5nJzogZmFsc2UsICdkdXJhdGlvbic6ICc3XFwnNDVcIicsIHNyYzogJ2h0dHA6Ly93d3cueXRtcDMuY24vZG93bi81NTY3MS5tcDMnIH1dLFxuICAgIGNhdGFsb2dTdGF0dXM6IGZhbHNlXG4gIH0sXG5cbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHRDb2xvcjogJyMjMUExQTFBJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbWVudTogZmFsc2VcbiAgICB9KTtcblxuICAgIF9zeXN0ZW0yLmRlZmF1bHQuc3RvcCgpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS50aXRsZTtcbiAgICBfc3lzdGVtMi5kZWZhdWx0LnNyYyA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLnNyYztcblxuICAgIHRoaXMucm91dGVTdGF0dXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLml0ZW0pIHtcbiAgICAgIHZhciBjdXJyZW50QXVpZG9JdGVtID0gSlNPTi5wYXJzZSh0aGlzLml0ZW0pO1xuICAgICAgX3N5c3RlbTIuZGVmYXVsdC5zcmMgPSBjdXJyZW50QXVpZG9JdGVtLnNyYztcbiAgICAgIHRoaXMudGl0bGUgPSBjdXJyZW50QXVpZG9JdGVtLnRpdGxlO1xuICAgICAgdGhpcy5pbWFnZSA9IGN1cnJlbnRBdWlkb0l0ZW0uaW1nO1xuICAgIH1cblxuICAgIF9zeXN0ZW0yLmRlZmF1bHQuYXV0b3BsYXkgPSB0cnVlO1xuICAgIF9zeXN0ZW0yLmRlZmF1bHQubG9vcCA9IHRydWU7XG4gICAgX3N5c3RlbTIuZGVmYXVsdC5jdXJyZW50VGltZSA9IDA7XG5cbiAgICBfc3lzdGVtMi5kZWZhdWx0Lm9uZHVyYXRpb25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIudG90YWwgPSBfc3lzdGVtMi5kZWZhdWx0LmR1cmF0aW9uO1xuICAgICAgX3RoaXMyLnNob3dUb3RhbCA9IF90aGlzMi5jaGFuZ2VUaW1lKF90aGlzMi50b3RhbCk7XG5cbiAgICAgIHZhciBwZXJjbmV0dGltZSA9IF9zeXN0ZW0yLmRlZmF1bHQuZHVyYXRpb24gKiAwLjE7XG5cbiAgICAgIF90aGlzMi5taW5UaW1lR2FwID0gcGVyY25ldHRpbWUgPiAxMCA/IHBlcmNuZXR0aW1lIDogMTA7XG4gICAgfTtcblxuICAgIF9zeXN0ZW0yLmRlZmF1bHQub250aW1ldXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnNob3dUaW1lID0gX3RoaXMyLmNoYW5nZVRpbWUoX3N5c3RlbTIuZGVmYXVsdC5jdXJyZW50VGltZSk7XG4gICAgICBfdGhpczIudGltZSA9IF9zeXN0ZW0yLmRlZmF1bHQuY3VycmVudFRpbWU7XG4gICAgICBpZiAoX3N5c3RlbTIuZGVmYXVsdC5jdXJyZW50VGltZSA9PT0gX3N5c3RlbTIuZGVmYXVsdC5kdXJhdGlvbikge1xuICAgICAgICBfdGhpczIubmV4dCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBfc3lzdGVtNi5kZWZhdWx0LmdldEluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmVuZ2luZVByb3ZpZGVyID09PSAnaHVhd2VpJykge1xuICAgICAgICAgIF90aGlzLmdldENvbG9yKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgcGxheTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICBfc3lzdGVtMi5kZWZhdWx0LnBsYXkoKTtcbiAgICB0aGlzLmlzUGxheUltZyA9IGZhbHNlO1xuICB9LFxuICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgX3N5c3RlbTIuZGVmYXVsdC5wYXVzZSgpO1xuICAgIHRoaXMuaXNQbGF5SW1nID0gdHJ1ZTtcbiAgfSxcbiAgbGFzdDogZnVuY3Rpb24gbGFzdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3QgPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IHRoaXMuc2VsZWN0IC0gMTtcbiAgICAgIF9zeXN0ZW0yLmRlZmF1bHQuc3JjID0gdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uc3JjO1xuICAgICAgX3N5c3RlbTIuZGVmYXVsdC5jdXJyZW50VGltZSA9IDA7XG4gICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgX3N5c3RlbTIuZGVmYXVsdC5wbGF5KCk7XG4gICAgICB0aGlzLmlzUGxheUltZyA9IGZhbHNlO1xuICAgICAgdGhpcy50aW5nc2h1RGF0YS5jaGFwdGVyVGl0bGUgPSB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5jaGFwdGVyVGl0bGU7XG4gICAgICB0aGlzLnRpbmdzaHVEYXRhLmJvb2tJbWFnZSA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLmltYWdlO1xuXG4gICAgICB0aGlzLm11c2ljLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pc0hlYXJpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uaXNIZWFyaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBfc3lzdGVtNi5kZWZhdWx0LmdldEluZm8oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5lbmdpbmVQcm92aWRlciA9PT0gJ2h1YXdlaScpIHtcbiAgICAgICAgICAgIF90aGlzLmdldENvbG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfSxcbiAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3QgPCB0aGlzLm11c2ljLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5zZWxlY3QgKyAxO1xuICAgICAgX3N5c3RlbTIuZGVmYXVsdC5zcmMgPSB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5zcmM7XG4gICAgICBfc3lzdGVtMi5kZWZhdWx0LmN1cnJlbnRUaW1lID0gMDtcbiAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICBfc3lzdGVtMi5kZWZhdWx0LnBsYXkoKTtcbiAgICAgIHRoaXMuaXNQbGF5SW1nID0gZmFsc2U7XG4gICAgICB0aGlzLnRpbmdzaHVEYXRhLmNoYXB0ZXJUaXRsZSA9IHRoaXMubXVzaWNbdGhpcy5zZWxlY3RdLmNoYXB0ZXJUaXRsZTtcbiAgICAgIHRoaXMudGluZ3NodURhdGEuYm9va0ltYWdlID0gdGhpcy5tdXNpY1t0aGlzLnNlbGVjdF0uaW1hZ2U7XG5cbiAgICAgIHRoaXMubXVzaWMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlzSGVhcmluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm11c2ljW3RoaXMuc2VsZWN0XS5pc0hlYXJpbmcgPSB0cnVlO1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIF9zeXN0ZW02LmRlZmF1bHQuZ2V0SW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLmVuZ2luZVByb3ZpZGVyID09PSAnaHVhd2VpJykge1xuICAgICAgICAgICAgX3RoaXMuZ2V0Q29sb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9LFxuICBsb29wOiBmdW5jdGlvbiBsb29wKCkge1xuICAgIHRoaXMuaXNMb29wID0gIXRoaXMuaXNMb29wO1xuICAgIF9zeXN0ZW0yLmRlZmF1bHQubG9vcCA9IHRoaXMuaXNMb29wO1xuICB9LFxuICBnZXRWYWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUobmFtZSwgZSkge1xuICAgIHZhciBnYXAgPSBNYXRoLmFicyhlLnByb2dyZXNzIC0gX3N5c3RlbTIuZGVmYXVsdC5jdXJyZW50VGltZSk7XG4gICAgaWYgKGdhcCA+IHRoaXMubWluVGltZUdhcCkge1xuICAgICAgdGhpcy50aW1lID0gZS5wcm9ncmVzcztcbiAgICAgIF9zeXN0ZW0yLmRlZmF1bHQuY3VycmVudFRpbWUgPSBlLnByb2dyZXNzO1xuICAgIH1cbiAgfSxcbiAgY2hhbmdlVGltZTogZnVuY3Rpb24gY2hhbmdlVGltZSh0aW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFwiMDA6MDBcIjtcbiAgICBpZiAodGltZSA8IDYwKSB7XG4gICAgICB0aW1lID0gdGltZSA8IDEwID8gXCIwXCIgKyB0aW1lIDogdGltZTtcbiAgICAgIHJlc3VsdCA9IFwiMDA6XCIgKyB0aW1lO1xuICAgIH0gZWxzZSBpZiAodGltZSA+PSA2MCkge1xuICAgICAgdmFyIG1pbnV0ZSA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICAgIHZhciB0aW1lSW50ID0gNjAgKiBtaW51dGU7XG4gICAgICB0aW1lID0gdGltZSAlIHRpbWVJbnQgPCAxMCA/IFwiMFwiICsgdGltZSAlIHRpbWVJbnQgOiB0aW1lICUgdGltZUludDtcbiAgICAgIHJlc3VsdCA9IFwiMFwiICsgbWludXRlICsgXCI6XCIgKyB0aW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICBnZXRDb2xvcjogZnVuY3Rpb24gZ2V0Q29sb3IoKSB7XG4gICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICBfc3lzdGVtNC5kZWZhdWx0LnBpY2tDb2xvcih7XG4gICAgICB1cmk6IF9zZWxmLm11c2ljW19zZWxmLnNlbGVjdF0uaW1hZ2UsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgX3NlbGYuZHluYW1pY2FsbHlDb2xvciA9IGRhdGEuY29sb3I7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChkYXRhLCBjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGluZyBmYWlsLCBjb2RlID0gJyArIGNvZGUpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShkYXRhLCBjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGluZyBjb21wbGV0ZSwgY29kZSA9ICcgKyBjb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgc2hvd0NhdGFsb2c6IGZ1bmN0aW9uIHNob3dDYXRhbG9nKCkge1xuICAgIHRoaXMuY2F0YWxvZ1N0YXR1cyA9IHRydWU7XG5cbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHsgbWVudTogZmFsc2UsIHRleHRDb2xvcjogJyMxQTFBMUEnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknIH0pO1xuICB9LFxuICBjbG9zZUNhdGFsb2c6IGZ1bmN0aW9uIGNsb3NlQ2F0YWxvZygpIHtcbiAgICB0aGlzLmNhdGFsb2dTdGF0dXMgPSBmYWxzZTtcblxuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoeyBtZW51OiBmYWxzZSwgdGV4dENvbG9yOiAnIzFBMUExQScsIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnIH0pO1xuICB9LFxuICB0b0hlYXJpbmc6IGZ1bmN0aW9uIHRvSGVhcmluZyhpdGVtLCBpbmRleCkge1xuICAgIF9zeXN0ZW0yLmRlZmF1bHQuc3RvcCgpO1xuICAgIHRoaXMubXVzaWMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5pc0hlYXJpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpdGVtLmlzSGVhcmluZyA9IHRydWU7XG5cbiAgICB0aGlzLnNlbGVjdCA9IGluZGV4O1xuICAgIF9zeXN0ZW0yLmRlZmF1bHQuc3JjID0gdGhpcy5tdXNpY1tpbmRleF0uc3JjO1xuICAgIF9zeXN0ZW0yLmRlZmF1bHQuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMudGltZSA9IDA7XG4gICAgX3N5c3RlbTIuZGVmYXVsdC5wbGF5KCk7XG4gICAgdGhpcy5pc1BsYXlJbWcgPSBmYWxzZTtcbiAgICB0aGlzLnRpbmdzaHVEYXRhLmNoYXB0ZXJUaXRsZSA9IHRoaXMubXVzaWNbaW5kZXhdLmNoYXB0ZXJUaXRsZTtcbiAgICB0aGlzLnRpbmdzaHVEYXRhLmJvb2tJbWFnZSA9IHRoaXMubXVzaWNbaW5kZXhdLmltYWdlO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgX3N5c3RlbTYuZGVmYXVsdC5nZXRJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5lbmdpbmVQcm92aWRlciA9PT0gJ2h1YXdlaScpIHtcbiAgICAgICAgICBfdGhpcy5nZXRDb2xvcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhL0FwcGxpY2F0aW9ucy/ljY7kuLrlv6vlupTnlKggSURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT0vQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0c1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXN0YWdlLTMmcGx1Z2luc1tdPS9BcHBsaWNhdGlvbnMv5Y2O5Li65b+r5bqU55SoIElERS5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEvQXBwbGljYXRpb25zL+WNjuS4uuW/q+W6lOeUqCBJREUuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEvVXNlcnMvc2FtZWwvRG9jdW1lbnRzL2Zhc3RBcHAvY29tLnNhbWVsLmZhc3Rib29rL3NyYy9QYWdlX0hlYXJpbmdkZXRhaWwvaW5kZXgudXhcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=