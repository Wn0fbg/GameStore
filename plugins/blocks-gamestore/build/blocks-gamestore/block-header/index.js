/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks-gamestore/block-header/edit.js"
/*!***************************************************!*\
  !*** ./src/blocks-gamestore/block-header/edit.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks-gamestore/block-header/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Edit({
  attributes,
  setAttributes
}) {
  const {
    memberLink,
    cartLink
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Member Links",
          value: memberLink,
          onChange: value => setAttributes({
            memberLink: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Cart Link",
          value: cartLink,
          onChange: value => setAttributes({
            cartLink: value
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "inner-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "right-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "header-search",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
              viewBox: "0 0 36 36",
              xmlns: "http://www.w3.org/2000/svg",
              width: "36.000000",
              height: "36.000000",
              fill: "none",
              customFrame: "#000000",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath", {
                  id: "clipPath_1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                    width: "24.000000",
                    height: "24.000000",
                    x: "6.000000",
                    y: "6.000000",
                    fill: "rgb(255,255,255)"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                id: "search-normal",
                width: "36.000000",
                height: "36.000000",
                x: "0.000000",
                y: "0.000000",
                fill: "rgb(255,255,255)",
                "fill-opacity": "0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
                id: "2199092_search_find_glass_magnifier_zoom_icon 1",
                "clip-path": "url(#clipPath_1)",
                customFrame: "url(#clipPath_1)",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                  id: "2199092_search_find_glass_magnifier_zoom_icon 1",
                  width: "24.000000",
                  height: "24.000000",
                  x: "6.000000",
                  y: "6.000000",
                  fill: "rgb(255,255,255)",
                  "fill-opacity": "0"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g", {
                  id: "Layer_2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
                    id: "Layer_3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                      id: "Vector",
                      d: "M28.29 27.66L23.61 22.95C26.97 19.2 26.7 13.44 22.95 10.05C19.2 6.66002 13.44 6.96002 10.05 10.71C6.66002 14.46 6.96002 20.22 10.71 23.61C14.19 26.76 19.5 26.76 22.98 23.61L27.69 28.32L28.29 27.66ZM16.83 25.05C12.3 25.05 8.61002 21.36 8.61002 16.83C8.61002 12.27 12.3 8.61002 16.83 8.61002C21.36 8.61002 25.05 12.3 25.05 16.83C25.05 21.36 21.36 25.05 16.83 25.05Z",
                      fill: "var(--action-main, rgba(14, 13, 15, 0.64))",
                      "fill-rule": "nonzero"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                      id: "Vector",
                      d: "M16.8301 9.83984L16.8301 10.7398C20.1901 10.7398 22.9201 13.4698 22.9201 16.8298L23.8201 16.8298C23.8201 12.9598 20.7001 9.83984 16.8301 9.83984Z",
                      fill: "var(--action-main, rgba(14, 13, 15, 0.64))",
                      "fill-rule": "nonzero"
                    })]
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "header-mode-switcher",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
              viewBox: "0 0 36 36",
              xmlns: "http://www.w3.org/2000/svg",
              width: "36.000000",
              height: "36.000000",
              fill: "none",
              customFrame: "url(#clipPath_0)",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath", {
                  id: "clipPath_0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                    width: "36.000000",
                    height: "36.000000",
                    x: "0.000000",
                    y: "0.000000",
                    rx: "18.000000",
                    fill: "rgb(255,255,255)"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                id: "IconButton / switch theme",
                width: "36.000000",
                height: "36.000000",
                x: "0.000000",
                y: "0.000000",
                rx: "18.000000",
                fill: "rgb(255,255,255)",
                "fill-opacity": "0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
                id: "Group 64",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M12 0L0 0",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-opacity": "0.639999986",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000",
                  transform: "matrix(0,1,-1,0,21,12)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M9 18L12 18",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-opacity": "0.639999986",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M12.5098 9.51025L14.6398 11.6403",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-opacity": "0.639999986",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M0 0L3 0",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-opacity": "0.639999986",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000",
                  transform: "matrix(0,1,-1,0,21,6)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M3 0L0 0",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-opacity": "0.639999986",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000",
                  transform: "matrix(0,1,-1,0,21,27)"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M12.5098 26.4899L14.6398 24.3599",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-opacity": "0.639999986",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M21 24C17.6863 24 15 21.3137 15 18C15 14.6863 17.6863 12 21 12C24.3137 12 27 14.6863 27 18C27 21.3137 24.3137 24 21 24Z",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-opacity": "0.639999986",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                })]
              })]
            })
          }), cartLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "header-cart-link",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
              viewBox: "0 0 36 36",
              xmlns: "http://www.w3.org/2000/svg",
              width: "36.000000",
              height: "36.000000",
              fill: "none",
              customFrame: "url(#clipPath_2)",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath", {
                  id: "clipPath_2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                    width: "36.000000",
                    height: "36.000000",
                    x: "0.000000",
                    y: "0.000000",
                    rx: "18.000000",
                    fill: "rgb(255,255,255)"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
                id: "IconButton / switch theme",
                width: "36.000000",
                height: "36.000000",
                x: "0.000000",
                y: "0.000000",
                rx: "18.000000",
                fill: "rgb(255,255,255)",
                "fill-opacity": "0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
                id: "Group 63",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M7.71436 14.5713L9.42864 26.5713L26.5715 26.5713L28.2858 14.5713",
                  "fill-rule": "nonzero",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M12.8574 16.2859L14.5717 9.42871",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M23.143 16.2859L21.4287 9.42871",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  id: "Vector",
                  d: "M6 14.5713L30 14.5713",
                  stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "1.000000"
                })]
              })]
            })
          }), memberLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "header-member-link",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: memberLink,
              children: "Member Link"
            })
          })]
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/blocks-gamestore/block-header/index.js"
/*!****************************************************!*\
  !*** ./src/blocks-gamestore/block-header/index.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks-gamestore/block-header/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks-gamestore/block-header/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks-gamestore/block-header/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks-gamestore/block-header/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks-gamestore/block-header/save.js"
/*!***************************************************!*\
  !*** ./src/blocks-gamestore/block-header/save.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    memberLink,
    cartLink
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "inner-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "right-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "header-search",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            viewBox: "0 0 36 36",
            xmlns: "http://www.w3.org/2000/svg",
            width: "36.000000",
            height: "36.000000",
            fill: "none",
            customFrame: "#000000",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("clipPath", {
                id: "clipPath_1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                  width: "24.000000",
                  height: "24.000000",
                  x: "6.000000",
                  y: "6.000000",
                  fill: "rgb(255,255,255)"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
              id: "search-normal",
              width: "36.000000",
              height: "36.000000",
              x: "0.000000",
              y: "0.000000",
              fill: "rgb(255,255,255)",
              "fill-opacity": "0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
              id: "2199092_search_find_glass_magnifier_zoom_icon 1",
              "clip-path": "url(#clipPath_1)",
              customFrame: "url(#clipPath_1)",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                id: "2199092_search_find_glass_magnifier_zoom_icon 1",
                width: "24.000000",
                height: "24.000000",
                x: "6.000000",
                y: "6.000000",
                fill: "rgb(255,255,255)",
                "fill-opacity": "0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
                id: "Layer_2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
                  id: "Layer_3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    id: "Vector",
                    d: "M28.29 27.66L23.61 22.95C26.97 19.2 26.7 13.44 22.95 10.05C19.2 6.66002 13.44 6.96002 10.05 10.71C6.66002 14.46 6.96002 20.22 10.71 23.61C14.19 26.76 19.5 26.76 22.98 23.61L27.69 28.32L28.29 27.66ZM16.83 25.05C12.3 25.05 8.61002 21.36 8.61002 16.83C8.61002 12.27 12.3 8.61002 16.83 8.61002C21.36 8.61002 25.05 12.3 25.05 16.83C25.05 21.36 21.36 25.05 16.83 25.05Z",
                    fill: "var(--action-main, rgba(14, 13, 15, 0.64))",
                    "fill-rule": "nonzero"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    id: "Vector",
                    d: "M16.8301 9.83984L16.8301 10.7398C20.1901 10.7398 22.9201 13.4698 22.9201 16.8298L23.8201 16.8298C23.8201 12.9598 20.7001 9.83984 16.8301 9.83984Z",
                    fill: "var(--action-main, rgba(14, 13, 15, 0.64))",
                    "fill-rule": "nonzero"
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "header-mode-switcher",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            viewBox: "0 0 36 36",
            xmlns: "http://www.w3.org/2000/svg",
            width: "36.000000",
            height: "36.000000",
            fill: "none",
            customFrame: "url(#clipPath_0)",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("clipPath", {
                id: "clipPath_0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                  width: "36.000000",
                  height: "36.000000",
                  x: "0.000000",
                  y: "0.000000",
                  rx: "18.000000",
                  fill: "rgb(255,255,255)"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
              id: "IconButton / switch theme",
              width: "36.000000",
              height: "36.000000",
              x: "0.000000",
              y: "0.000000",
              rx: "18.000000",
              fill: "rgb(255,255,255)",
              "fill-opacity": "0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
              id: "Group 64",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M12 0L0 0",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-opacity": "0.639999986",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000",
                transform: "matrix(0,1,-1,0,21,12)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M9 18L12 18",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-opacity": "0.639999986",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M12.5098 9.51025L14.6398 11.6403",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-opacity": "0.639999986",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M0 0L3 0",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-opacity": "0.639999986",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000",
                transform: "matrix(0,1,-1,0,21,6)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M3 0L0 0",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-opacity": "0.639999986",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000",
                transform: "matrix(0,1,-1,0,21,27)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M12.5098 26.4899L14.6398 24.3599",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-opacity": "0.639999986",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M21 24C17.6863 24 15 21.3137 15 18C15 14.6863 17.6863 12 21 12C24.3137 12 27 14.6863 27 18C27 21.3137 24.3137 24 21 24Z",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-opacity": "0.639999986",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              })]
            })]
          })
        }), cartLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "header-cart-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            viewBox: "0 0 36 36",
            xmlns: "http://www.w3.org/2000/svg",
            width: "36.000000",
            height: "36.000000",
            fill: "none",
            customFrame: "url(#clipPath_2)",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("clipPath", {
                id: "clipPath_2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                  width: "36.000000",
                  height: "36.000000",
                  x: "0.000000",
                  y: "0.000000",
                  rx: "18.000000",
                  fill: "rgb(255,255,255)"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
              id: "IconButton / switch theme",
              width: "36.000000",
              height: "36.000000",
              x: "0.000000",
              y: "0.000000",
              rx: "18.000000",
              fill: "rgb(255,255,255)",
              "fill-opacity": "0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
              id: "Group 63",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M7.71436 14.5713L9.42864 26.5713L26.5715 26.5713L28.2858 14.5713",
                "fill-rule": "nonzero",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M12.8574 16.2859L14.5717 9.42871",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M23.143 16.2859L21.4287 9.42871",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                id: "Vector",
                d: "M6 14.5713L30 14.5713",
                stroke: "var(--action-main, rgba(14, 13, 15, 0.64))",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.000000"
              })]
            })]
          })
        }), memberLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "header-member-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: memberLink,
            children: "Member Link"
          })
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/blocks-gamestore/block-header/editor.scss"
/*!*******************************************************!*\
  !*** ./src/blocks-gamestore/block-header/editor.scss ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks-gamestore/block-header/style.scss"
/*!******************************************************!*\
  !*** ./src/blocks-gamestore/block-header/style.scss ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "./src/blocks-gamestore/block-header/block.json"
/*!******************************************************!*\
  !*** ./src/blocks-gamestore/block-header/block.json ***!
  \******************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blocks-gamestore/block-header","version":"0.1.0","title":"Header","category":"gamestore","icon":"layout","description":"Site Header Block.","supports":{"html":false},"attributes":{"memberLink":{"type":"string"},"cartLink":{"type":"string"}},"textdomain":"blocks-gamestore","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"blocks-gamestore/block-header/index": 0,
/******/ 			"blocks-gamestore/block-header/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkblocks_gamestore"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks-gamestore/block-header/style-index"], () => (__webpack_require__("./src/blocks-gamestore/block-header/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map