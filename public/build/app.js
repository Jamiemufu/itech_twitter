(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/vuetify */ "./assets/js/plugins/vuetify.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log("loaded");
/**
 * Imports and consts
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


/**
 * Components
 */

vue__WEBPACK_IMPORTED_MODULE_1__["default"].component('twitterfeed', __webpack_require__(/*! ./components/Twitterfeed */ "./assets/js/components/Twitterfeed.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component('card', __webpack_require__(/*! ./components/Card */ "./assets/js/components/Card.vue")["default"]);
/**
 * Create a fresh Vue Application instance
 */

new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__["default"]
}).$mount('#app');

/***/ }),

/***/ "./assets/js/components/BottomButtons.vue":
/*!************************************************!*\
  !*** ./assets/js/components/BottomButtons.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BottomButtons_vue_vue_type_template_id_7324f0f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomButtons.vue?vue&type=template&id=7324f0f6& */ "./assets/js/components/BottomButtons.vue?vue&type=template&id=7324f0f6&");
/* harmony import */ var _BottomButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BottomButtons.vue?vue&type=script&lang=js& */ "./assets/js/components/BottomButtons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BottomButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BottomButtons_vue_vue_type_template_id_7324f0f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BottomButtons_vue_vue_type_template_id_7324f0f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardSubtitle"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/BottomButtons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/BottomButtons.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/BottomButtons.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomButtons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BottomButtons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/BottomButtons.vue?vue&type=template&id=7324f0f6&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/BottomButtons.vue?vue&type=template&id=7324f0f6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomButtons_vue_vue_type_template_id_7324f0f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BottomButtons.vue?vue&type=template&id=7324f0f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BottomButtons.vue?vue&type=template&id=7324f0f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomButtons_vue_vue_type_template_id_7324f0f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomButtons_vue_vue_type_template_id_7324f0f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Card.vue":
/*!***************************************!*\
  !*** ./assets/js/components/Card.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_694216b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=694216b1& */ "./assets/js/components/Card.vue?vue&type=template&id=694216b1&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./assets/js/components/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_694216b1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_694216b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_6__["VImg"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_7__["VProgressLinear"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Card.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./assets/js/components/Card.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Card.vue?vue&type=template&id=694216b1&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/Card.vue?vue&type=template&id=694216b1& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_694216b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=694216b1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Card.vue?vue&type=template&id=694216b1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_694216b1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_694216b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Profile.vue":
/*!******************************************!*\
  !*** ./assets/js/components/Profile.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_077073d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=077073d0& */ "./assets/js/components/Profile.vue?vue&type=template&id=077073d0&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./assets/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_077073d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_077073d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardSubtitle"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./assets/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Profile.vue?vue&type=template&id=077073d0&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/Profile.vue?vue&type=template&id=077073d0& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_077073d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=077073d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Profile.vue?vue&type=template&id=077073d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_077073d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_077073d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Reply.vue":
/*!****************************************!*\
  !*** ./assets/js/components/Reply.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reply_vue_vue_type_template_id_933b1ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reply.vue?vue&type=template&id=933b1ece& */ "./assets/js/components/Reply.vue?vue&type=template&id=933b1ece&");
/* harmony import */ var _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reply.vue?vue&type=script&lang=js& */ "./assets/js/components/Reply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reply_vue_vue_type_template_id_933b1ece___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reply_vue_vue_type_template_id_933b1ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardSubtitle"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_5__["VExpandTransition"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Reply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Reply.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./assets/js/components/Reply.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reply.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Reply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Reply.vue?vue&type=template&id=933b1ece&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Reply.vue?vue&type=template&id=933b1ece& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_933b1ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reply.vue?vue&type=template&id=933b1ece& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Reply.vue?vue&type=template&id=933b1ece&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_933b1ece___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_933b1ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Twitterfeed.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/Twitterfeed.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Twitterfeed_vue_vue_type_template_id_67aca380_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true& */ "./assets/js/components/Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true&");
/* harmony import */ var _Twitterfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Twitterfeed.vue?vue&type=script&lang=js& */ "./assets/js/components/Twitterfeed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Twitterfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Twitterfeed_vue_vue_type_template_id_67aca380_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Twitterfeed_vue_vue_type_template_id_67aca380_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67aca380",
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Twitterfeed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Twitterfeed.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Twitterfeed.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitterfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Twitterfeed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Twitterfeed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitterfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./assets/js/components/Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitterfeed_vue_vue_type_template_id_67aca380_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitterfeed_vue_vue_type_template_id_67aca380_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Twitterfeed_vue_vue_type_template_id_67aca380_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/plugins/vuetify.js":
/*!**************************************!*\
  !*** ./assets/js/plugins/vuetify.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]({}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BottomButtons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BottomButtons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bottom-buttons',
  props: {
    display: {},
    retweetNames: {},
    tweet: {},
    update: {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Card.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Reply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reply */ "./assets/js/components/Reply.vue");
/* harmony import */ var _BottomButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BottomButtons */ "./assets/js/components/BottomButtons.vue");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Profile */ "./assets/js/components/Profile.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Profile: _Profile__WEBPACK_IMPORTED_MODULE_6__["default"],
    BottomButtons: _BottomButtons__WEBPACK_IMPORTED_MODULE_5__["default"],
    Reply: _Reply__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  // passing in tweet, show and update function to update
  props: ["tweet", "show", "update"],
  data: function data() {
    return {
      tweets: '',
      display: false,
      // create empty object so we can loop through names and get generated uri
      retweets: [],
      retweetNames: []
    };
  },
  methods: {
    getRetweetNames: function getRetweetNames() {
      // get a match on '@' from tweet text body
      var name = this.tweet.text.match(/@\S+/g);
      this.retweetNames = name;
    },
    generateRewteetUri: function generateRewteetUri() {
      if (this.retweetNames) {
        for (var i = 0; i < this.retweetNames.length; i++) {
          // generate uri and filter name
          // chaining replaces found use cases where 's would slip through
          var obj = {
            name: this.retweetNames[i].replace(":", ""),
            uri: "http://twitter.com/" + this.retweetNames[i].replace(",", "").replace(":", "").replace("'", " ").replace("@", "").split(" ")[0]
          };
          this.retweets.push(obj);
        }
      }
    }
  },
  mounted: function mounted() {
    this.getRetweetNames();
    this.generateRewteetUri();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile',
  props: {
    tweet: {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Reply.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Reply.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'reply',
  props: {
    display: {},
    retweetNames: {},
    retweets: {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Twitterfeed.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Twitterfeed.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      tweets: '',
      //show is used to show the loading bar ontop of tweets
      show: false
    };
  },
  created: function created() {
    //create component with request ready
    this.fetch();
  },
  mounted: function mounted() {
    // refresh the data in the component every hour
    this.refresh();
  },
  methods: {
    update: function update() {
      var _this = this;

      //immediately update and refresh cache
      axios.post('/twitter_feed').then(function (response) {
        // if error log response
        if (response.data.error) {
          console.log("Error: " + response.data.error);
        } else {
          //set show to false, as we will be loading...
          // save response to this instance of tweets
          _this.tweets = response.data;
          _this.show = true;
          setTimeout(function () {
            return _this.show = false;
          }, 2000);
        }
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    },
    fetch: function fetch() {
      var _this2 = this;

      //get request will hit cache
      //set show to false, as we will be loading...
      axios.get('/twitter_feed').then(function (response) {
        if (response.data.error) {
          console.log("Error: " + response.data.error);
        } else {
          _this2.tweets = response.data;
          _this2.show = true;
          setTimeout(function () {
            return _this2.show = false;
          }, 2000);
        }
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    },
    //call update every hour - inline with server cache refresh
    refresh: function refresh() {
      var _this3 = this;

      setInterval(function () {
        _this3.update();
      }, 1000 * 60 * 60);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/BottomButtons.vue?vue&type=template&id=7324f0f6&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/BottomButtons.vue?vue&type=template&id=7324f0f6& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card-subtitle",
    { staticClass: "card-subtitle__links--container" },
    [
      _c("div", { staticClass: "card-subtitle__links" }, [
        _vm.retweetNames
          ? _c(
              "div",
              { staticClass: "card-dropdown__arrow" },
              [
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "", color: "blue" },
                        on: {
                          click: function($event) {
                            _vm.display = !_vm.display
                          }
                        }
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v(
                            _vm._s(
                              _vm.display
                                ? "mdi-chevron-up"
                                : "mdi-chevron-down"
                            )
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "v-btn",
              {
                attrs: {
                  icon: "",
                  color: "white",
                  href: _vm.tweet.link,
                  target: "_blank"
                }
              },
              [_c("v-icon", [_vm._v("mdi-link-variant")])],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "v-btn",
              {
                attrs: { icon: "", color: "white" },
                on: { click: _vm.update }
              },
              [_c("v-icon", [_vm._v("mdi-refresh")])],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Card.vue?vue&type=template&id=694216b1&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Card.vue?vue&type=template&id=694216b1& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "card", attrs: { "max-width": "300", raised: "" } },
    [
      _c("v-progress-linear", {
        attrs: {
          active: _vm.show,
          indeterminate: _vm.show,
          absolute: "",
          height: "7",
          top: "",
          color: "red"
        }
      }),
      _vm._v(" "),
      _c(
        "v-card-title",
        { staticClass: "card--title" },
        [
          _c("v-icon", { attrs: { color: "white" } }, [
            _vm._v("\n            mdi-twitter\n        ")
          ]),
          _vm._v(" "),
          _c("h2", [_vm._v("Twitter")])
        ],
        1
      ),
      _vm._v(" "),
      _vm.tweet.media
        ? _c(
            "div",
            [
              _c("v-img", {
                staticClass: "card--image",
                attrs: { height: "100px", src: _vm.tweet.media }
              })
            ],
            1
          )
        : _c(
            "div",
            [
              _c("v-img", {
                staticClass: "card--image",
                attrs: { height: "100px", src: _vm.tweet.profile_banner }
              })
            ],
            1
          ),
      _vm._v(" "),
      _c("v-card-title", { staticClass: "card--body__text" }, [
        _vm._v("\n        " + _vm._s(_vm.tweet.text) + "\n    ")
      ]),
      _vm._v(" "),
      _c("profile", { attrs: { tweet: _vm.tweet } }),
      _vm._v(" "),
      _c("bottom-buttons", {
        attrs: {
          display: _vm.display,
          "retweet-names": _vm.retweetNames,
          tweet: _vm.tweet,
          update: _vm.update
        }
      }),
      _vm._v(" "),
      _c("reply", {
        attrs: {
          display: _vm.display,
          "retweet-names": _vm.retweetNames,
          retweets: _vm.retweets
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Profile.vue?vue&type=template&id=077073d0&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Profile.vue?vue&type=template&id=077073d0& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-card-subtitle", { staticClass: "card-subtitle__profile" }, [
    _c("div", { staticClass: "card-subtitle__profile--container" }, [
      _c("div", [_c("img", { attrs: { src: _vm.tweet.profile_image_url } })]),
      _vm._v(" "),
      _c("div", [_c("p", [_vm._v("@" + _vm._s(_vm.tweet.screen_name))])])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-subtitle__icon--container" }, [
      _c(
        "div",
        {},
        [
          _c("v-icon", { attrs: { color: "red" } }, [_vm._v("mdi-heart")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.tweet.favorite_count))])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {},
        [
          _c("v-icon", { attrs: { color: "white" } }, [
            _vm._v("mdi-undo-variant")
          ]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.tweet.retweet_count))])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Reply.vue?vue&type=template&id=933b1ece&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Reply.vue?vue&type=template&id=933b1ece& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.retweetNames
    ? _c(
        "div",
        [
          _c("v-expand-transition", [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.display,
                    expression: "display"
                  }
                ]
              },
              [
                _c("v-card-subtitle", { staticClass: "card-dropdown" }, [
                  _c("div", { staticClass: "card-dropdown__replies" }, [
                    _vm.retweetNames
                      ? _c("div", [
                          _c(
                            "div",
                            { staticClass: "card-dropdown__replies" },
                            [
                              _c("span", [_vm._v("Replying to: ")]),
                              _vm._v(" "),
                              _vm._l(_vm.retweets, function(retweet) {
                                return _c("div", [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: retweet.uri,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(retweet.name) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ])
                              })
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ])
                ])
              ],
              1
            )
          ])
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Twitterfeed.vue?vue&type=template&id=67aca380&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-app",
        _vm._l(_vm.tweets, function(item) {
          return _c("div", [
            _c(
              "div",
              { staticClass: "card--container" },
              [
                _c("card", {
                  attrs: { tweet: item, show: _vm.show, update: _vm.update }
                })
              ],
              1
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("div", [
        _c("button", { on: { click: _vm.update } }, [_vm._v("Update")])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQm90dG9tQnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQm90dG9tQnV0dG9ucy52dWU/NTIxYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb3R0b21CdXR0b25zLnZ1ZT8yODUyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhcmQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhcmQudnVlPzhjN2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2FyZC52dWU/ZWRjNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9maWxlLnZ1ZT85ODU3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2ZpbGUudnVlPzQyNTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVwbHkudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlcGx5LnZ1ZT84YTg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlcGx5LnZ1ZT9iNTFiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1R3aXR0ZXJmZWVkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ud2l0dGVyZmVlZC52dWU/ODk0NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ud2l0dGVyZmVlZC52dWU/Mzc1YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy92dWV0aWZ5LmpzIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Cb3R0b21CdXR0b25zLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2ZpbGUudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9SZXBseS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL1R3aXR0ZXJmZWVkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb3R0b21CdXR0b25zLnZ1ZT9hMmFhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhcmQudnVlPzYxMDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvZmlsZS52dWU/OTNjNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZXBseS52dWU/NjI3ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ud2l0dGVyZmVlZC52dWU/YTJmMCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYXhpb3MiLCJyZXF1aXJlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiVnVlIiwiY29tcG9uZW50IiwidnVldGlmeSIsIiRtb3VudCIsInVzZSIsIlZ1ZXRpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0NBR0E7QUFDQTs7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUVBOzs7O0FBR0FDLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlQyxtQkFBTyxDQUFDLDRDQUFELENBQXRCO0FBQ0FGLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRSxRQUFiLENBQXNCQyxPQUF0QixDQUE4QkMsTUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlDQUFpQztBQUNoRDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNLG9CQUFvQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG5cbi8qKlxuICogSW1wb3J0cyBhbmQgY29uc3RzXG4gKi9cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgdnVldGlmeSBmcm9tICcuL3BsdWdpbnMvdnVldGlmeSdcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cblZ1ZS5jb21wb25lbnQoJ3R3aXR0ZXJmZWVkJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL1R3aXR0ZXJmZWVkJykuZGVmYXVsdCk7XG5WdWUuY29tcG9uZW50KCdjYXJkJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0NhcmQnKS5kZWZhdWx0KTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmcmVzaCBWdWUgQXBwbGljYXRpb24gaW5zdGFuY2VcbiAqL1xubmV3IFZ1ZSh7XG4gICAgdnVldGlmeSxcbn0pLiRtb3VudCgnI2FwcCcpXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0JvdHRvbUJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczMjRmMGY2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JvdHRvbUJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Cb3R0b21CdXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQnRuLFZDYXJkQWN0aW9ucyxWQ2FyZFN1YnRpdGxlLFZJY29ufSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9tbnQvYy93ZWJfZGV2L2l0ZWNoX3R3aXR0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzMyNGYwZjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzMyNGYwZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzMyNGYwZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0JvdHRvbUJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczMjRmMGY2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzczMjRmMGY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9Cb3R0b21CdXR0b25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTE1LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb3R0b21CdXR0b25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMTUtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JvdHRvbUJ1dHRvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS0xNS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm90dG9tQnV0dG9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzMyNGYwZjYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5NDIxNmIxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSW1nJztcbmltcG9ydCB7IFZQcm9ncmVzc0xpbmVhciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlByb2dyZXNzTGluZWFyJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZDYXJkLFZDYXJkVGl0bGUsVkljb24sVkltZyxWUHJvZ3Jlc3NMaW5lYXJ9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL21udC9jL3dlYl9kZXYvaXRlY2hfdHdpdHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OTQyMTZiMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTQyMTZiMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTQyMTZiMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk0MjE2YjEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjk0MjE2YjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0NhcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMTUtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS0xNS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTE1LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTQyMTZiMSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc3MDczZDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQ2FyZFN1YnRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkljb24nO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkNhcmRTdWJ0aXRsZSxWSWNvbn0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvbW50L2Mvd2ViX2Rldi9pdGVjaF90d2l0dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3NzA3M2QwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3NzA3M2QwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3NzA3M2QwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzcwNzNkMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNzcwNzNkMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvZmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS0xNS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTE1LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMTUtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3NzA3M2QwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZXBseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTMzYjFlY2UmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVwbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXBseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZDYXJkU3VidGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZFeHBhbmRUcmFuc2l0aW9uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy90cmFuc2l0aW9ucyc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQ2FyZFN1YnRpdGxlLFZFeHBhbmRUcmFuc2l0aW9ufSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9tbnQvYy93ZWJfZGV2L2l0ZWNoX3R3aXR0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTMzYjFlY2UnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTMzYjFlY2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTMzYjFlY2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlcGx5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MzNiMWVjZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MzNiMWVjZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVwbHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMTUtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcGx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMTUtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcGx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMTUtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcGx5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MzNiMWVjZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVHdpdHRlcmZlZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YWNhMzgwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1R3aXR0ZXJmZWVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVHdpdHRlcmZlZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2N2FjYTM4MFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBcHAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHAnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvbW50L2Mvd2ViX2Rldi9pdGVjaF90d2l0dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3YWNhMzgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3YWNhMzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3YWNhMzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ud2l0dGVyZmVlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdhY2EzODAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjdhY2EzODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL1R3aXR0ZXJmZWVkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTE1LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ud2l0dGVyZmVlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTE1LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ud2l0dGVyZmVlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTE1LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ud2l0dGVyZmVlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdhY2EzODAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV0aWZ5IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuXG5WdWUudXNlKFZ1ZXRpZnkpXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV0aWZ5KHtcblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPHYtY2FyZC1zdWJ0aXRsZSBjbGFzcz1cImNhcmQtc3VidGl0bGVfX2xpbmtzLS1jb250YWluZXJcIj5cbiAgICAgICAgPCEtLWxpbmtzIGFuZCByZWZyZXNoIGJ1dHRvbi0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zdWJ0aXRsZV9fbGlua3NcIj5cbiAgICAgICAgICAgIDwhLS1zdGFydCBvZiBkcm9wZG93biBhcnJvdy0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZHJvcGRvd25fX2Fycm93XCIgdi1pZj1cInJldHdlZXROYW1lc1wiPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gY29sb3I9XCJibHVlXCIgQGNsaWNrPVwiZGlzcGxheSA9ICFkaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwid2hpdGVcIj57eyBkaXNwbGF5ID8gJ21kaS1jaGV2cm9uLXVwJyA6ICdtZGktY2hldnJvbi1kb3duJyB9fTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS1lbmQgZHJvcCBkb3duIGFycm93LS0+XG4gICAgICAgICAgICA8IS0tbGluayBpY29uLS0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIGNvbG9yPVwid2hpdGVcIiB2LWJpbmQ6aHJlZj1cInR3ZWV0LmxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktbGluay12YXJpYW50PC92LWljb24+XG4gICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLXJlZnJlc2ggaWNvbi0tPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBjb2xvcj1cIndoaXRlXCIgQGNsaWNrPVwidXBkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLXJlZnJlc2g8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdi1jYXJkLXN1YnRpdGxlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnYm90dG9tLWJ1dHRvbnMnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGlzcGxheToge30sXG4gICAgICAgICAgICByZXR3ZWV0TmFtZXM6IHt9LFxuICAgICAgICAgICAgdHdlZXQ6IHt9LFxuICAgICAgICAgICAgdXBkYXRlOiB7fVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDx2LWNhcmQgY2xhc3M9XCJjYXJkXCIgbWF4LXdpZHRoPVwiMzAwXCIgcmFpc2VkPlxuICAgICAgICA8IS0tbG9hZGVyLS0+XG4gICAgICAgIDx2LXByb2dyZXNzLWxpbmVhclxuICAgICAgICAgICAgICAgIDphY3RpdmU9XCJzaG93XCJcbiAgICAgICAgICAgICAgICA6aW5kZXRlcm1pbmF0ZT1cInNob3dcIlxuICAgICAgICAgICAgICAgIGFic29sdXRlXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiN1wiXG4gICAgICAgICAgICAgICAgdG9wXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICA+PC92LXByb2dyZXNzLWxpbmVhcj5cblxuICAgICAgICA8IS0tY2FyZCB0aXRsZS0tPlxuICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiY2FyZC0tdGl0bGVcIj5cbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIG1kaS10d2l0dGVyXG4gICAgICAgICAgICA8L3YtaWNvbj5cbiAgICAgICAgICAgIDxoMj5Ud2l0dGVyPC9oMj5cbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XG5cbiAgICAgICAgPCEtLWlmIHR3ZWV0IGNvbnRhaW5zIG1lZGlhIGRpc3BsYXkgaXQgb3IgZGlzcGxheSBwcm9maWxlIGJhbm5lci0tPlxuICAgICAgICA8ZGl2IHYtaWY9XCJ0d2VldC5tZWRpYVwiPlxuICAgICAgICAgICAgPHYtaW1nIGhlaWdodD1cIjEwMHB4XCIgdi1iaW5kOnNyYz1cInR3ZWV0Lm1lZGlhXCIgY2xhc3M9XCJjYXJkLS1pbWFnZVwiPjwvdi1pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tZWxzZS0tPlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgIDx2LWltZyBoZWlnaHQ9XCIxMDBweFwiIHYtYmluZDpzcmM9XCJ0d2VldC5wcm9maWxlX2Jhbm5lclwiIGNsYXNzPVwiY2FyZC0taW1hZ2VcIj48L3YtaW1nPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tdHdlZXQgdGV4dC0tPlxuICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiY2FyZC0tYm9keV9fdGV4dFwiPlxuICAgICAgICAgICAge3t0d2VldC50ZXh0fX1cbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XG5cbiAgICAgICAgPCEtLXByb2ZpbGUgcGljdHVyZS9zY3JlZW5fbmFtZS0tPlxuICAgICAgICA8cHJvZmlsZSA6dHdlZXQ9XCJ0d2VldFwiLz5cbiAgICAgICAgPGJvdHRvbS1idXR0b25zIDpkaXNwbGF5PVwiZGlzcGxheVwiIDpyZXR3ZWV0LW5hbWVzPVwicmV0d2VldE5hbWVzXCIgOnR3ZWV0PVwidHdlZXRcIiA6dXBkYXRlPVwidXBkYXRlXCIvPlxuICAgICAgICA8IS0tZHJvcGRvd24tLT5cbiAgICAgICAgPCEtLWlmIHRoZXJlIGFyZSByZXR3ZWV0IG5hbWVzIHRoZW4gc2hvdyBkcm9wIGRvd24tLT5cbiAgICAgICAgPHJlcGx5IDpkaXNwbGF5PVwiZGlzcGxheVwiIDpyZXR3ZWV0LW5hbWVzPVwicmV0d2VldE5hbWVzXCIgOnJldHdlZXRzPVwicmV0d2VldHNcIi8+XG4gICAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBSZXBseSBmcm9tIFwiLi9SZXBseVwiO1xuICAgIGltcG9ydCBCb3R0b21CdXR0b25zIGZyb20gXCIuL0JvdHRvbUJ1dHRvbnNcIjtcbiAgICBpbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9Qcm9maWxlXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9maWxlLCBCb3R0b21CdXR0b25zLCBSZXBseX0sXG4gICAgICAgIC8vIHBhc3NpbmcgaW4gdHdlZXQsIHNob3cgYW5kIHVwZGF0ZSBmdW5jdGlvbiB0byB1cGRhdGVcbiAgICAgICAgcHJvcHM6IFtcInR3ZWV0XCIsIFwic2hvd1wiLCBcInVwZGF0ZVwiXSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHdlZXRzOiAnJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgZW1wdHkgb2JqZWN0IHNvIHdlIGNhbiBsb29wIHRocm91Z2ggbmFtZXMgYW5kIGdldCBnZW5lcmF0ZWQgdXJpXG4gICAgICAgICAgICAgICAgcmV0d2VldHM6IFtdLFxuICAgICAgICAgICAgICAgIHJldHdlZXROYW1lczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFJldHdlZXROYW1lcygpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgYSBtYXRjaCBvbiAnQCcgZnJvbSB0d2VldCB0ZXh0IGJvZHlcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9ICh0aGlzLnR3ZWV0LnRleHQubWF0Y2goL0BcXFMrL2cpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHdlZXROYW1lcyA9IG5hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VuZXJhdGVSZXd0ZWV0VXJpKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldHdlZXROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmV0d2VldE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZW5lcmF0ZSB1cmkgYW5kIGZpbHRlciBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGFpbmluZyByZXBsYWNlcyBmb3VuZCB1c2UgY2FzZXMgd2hlcmUgJ3Mgd291bGQgc2xpcCB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucmV0d2VldE5hbWVzW2ldLnJlcGxhY2UoXCI6XCIsIFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogXCJodHRwOi8vdHdpdHRlci5jb20vXCIgKyB0aGlzLnJldHdlZXROYW1lc1tpXS5yZXBsYWNlKFwiLFwiLCBcIlwiKS5yZXBsYWNlKFwiOlwiLCBcIlwiKS5yZXBsYWNlKFwiJ1wiLCBcIiBcIikucmVwbGFjZShcIkBcIiwgXCJcIikuc3BsaXQoXCIgXCIpWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR3ZWV0cy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRSZXR3ZWV0TmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSZXd0ZWV0VXJpKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuIiwiPHRlbXBsYXRlPlxuICAgIDx2LWNhcmQtc3VidGl0bGUgY2xhc3M9XCJjYXJkLXN1YnRpdGxlX19wcm9maWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXN1YnRpdGxlX19wcm9maWxlLS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyB2LWJpbmQ6c3JjPVwidHdlZXQucHJvZmlsZV9pbWFnZV91cmxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPkB7e3R3ZWV0LnNjcmVlbl9uYW1lfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS1saWtlcyBhbmQgcmV3dGVldHMtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtc3VidGl0bGVfX2ljb24tLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJyZWRcIj5tZGktaGVhcnQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57e3R3ZWV0LmZhdm9yaXRlX2NvdW50fX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ3aGl0ZVwiPm1kaS11bmRvLXZhcmlhbnQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57e3R3ZWV0LnJldHdlZXRfY291bnR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3YtY2FyZC1zdWJ0aXRsZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ3Byb2ZpbGUnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdHdlZXQ6IHt9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwicmV0d2VldE5hbWVzXCI+XG4gICAgICAgIDwhLS1zdGFydCBvZiBkcm9wIGRvd24gY29udGVudC0tPlxuICAgICAgICA8di1leHBhbmQtdHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDwhLS1pZiBidG4gdG9nZ2xlZC0tPlxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJkaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1zdWJ0aXRsZSBjbGFzcz1cImNhcmQtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZHJvcGRvd25fX3JlcGxpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1zY3JhcGUgcmV0d2VldCBuYW1lcyBhbmQgZGlzcGxheSBhcyByZXBsaWVzLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJyZXR3ZWV0TmFtZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kcm9wZG93bl9fcmVwbGllc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZ2VuZXJpYyBsYXZlbC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZXBseWluZyB0bzogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZXMgYXJlIHNjcmFwZWQgZnJvbSB0d2VldCB0ZXh0LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJyZXR3ZWV0IGluIHJldHdlZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWJpbmQ6aHJlZj1cInJldHdlZXQudXJpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR3ZWV0Lm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWVuZCBvZiB2LWZvci0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tZW5kIHYtaWYtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC92LWV4cGFuZC10cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmVwbHknLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGlzcGxheToge30sXG4gICAgICAgICAgICByZXR3ZWV0TmFtZXM6IHt9LFxuICAgICAgICAgICAgcmV0d2VldHM6IHt9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8IS0tY2FyZHMtLT5cbiAgICAgICAgPHYtYXBwPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gdHdlZXRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tZm9yIGVhY2ggdHdlZXQgY3JlYXRlIGEgY2FyZCBjb21wb25lbnQgLSBhbmQgcGFzcyBpbiBjdXJyZW50IHR3ZWV0IGFuZCBzaG93IHByb3BzLS0+XG4gICAgICAgICAgICAgICAgICAgIDxjYXJkIDp0d2VldD1cIml0ZW1cIiA6c2hvdz1cInNob3dcIiA6dXBkYXRlPVwidXBkYXRlXCIgPjwvY2FyZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3YtYXBwPlxuICAgICAgICA8IS0tdXBkYXRlLS0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVwZGF0ZVwiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogW10sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR3ZWV0czogJycsXG4gICAgICAgICAgICAgICAgLy9zaG93IGlzIHVzZWQgdG8gc2hvdyB0aGUgbG9hZGluZyBiYXIgb250b3Agb2YgdHdlZXRzXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAvL2NyZWF0ZSBjb21wb25lbnQgd2l0aCByZXF1ZXN0IHJlYWR5XG4gICAgICAgICAgICB0aGlzLmZldGNoKClcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIC8vIHJlZnJlc2ggdGhlIGRhdGEgaW4gdGhlIGNvbXBvbmVudCBldmVyeSBob3VyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgLy9pbW1lZGlhdGVseSB1cGRhdGUgYW5kIHJlZnJlc2ggY2FjaGVcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvdHdpdHRlcl9mZWVkJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgZXJyb3IgbG9nIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyByZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCBzaG93IHRvIGZhbHNlLCBhcyB3ZSB3aWxsIGJlIGxvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHJlc3BvbnNlIHRvIHRoaXMgaW5zdGFuY2Ugb2YgdHdlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50d2VldHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5zaG93ID0gZmFsc2UpLCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmV0Y2goKSB7XG4gICAgICAgICAgICAgICAgLy9nZXQgcmVxdWVzdCB3aWxsIGhpdCBjYWNoZVxuICAgICAgICAgICAgICAgIC8vc2V0IHNob3cgdG8gZmFsc2UsIGFzIHdlIHdpbGwgYmUgbG9hZGluZy4uLlxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL3R3aXR0ZXJfZmVlZCcpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIHJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZXRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuc2hvdyA9IGZhbHNlKSwgMjAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vY2FsbCB1cGRhdGUgZXZlcnkgaG91ciAtIGlubGluZSB3aXRoIHNlcnZlciBjYWNoZSByZWZyZXNoXG4gICAgICAgICAgICByZWZyZXNoKCkge1xuICAgICAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDAgKiA2MCAqIDYwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZC1zdWJ0aXRsZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1zdWJ0aXRsZV9fbGlua3MtLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXN1YnRpdGxlX19saW5rc1wiIH0sIFtcbiAgICAgICAgX3ZtLnJldHdlZXROYW1lc1xuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1kcm9wZG93bl9fYXJyb3dcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiLCBjb2xvcjogXCJibHVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheSA9ICFfdm0uZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcIndoaXRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWRpLWNoZXZyb24tdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibWRpLWNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS50d2VldC5saW5rLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1saW5rLXZhcmlhbnRcIildKV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgY29sb3I6IFwid2hpdGVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBkYXRlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcmVmcmVzaFwiKV0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCIzMDBcIiwgcmFpc2VkOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInYtcHJvZ3Jlc3MtbGluZWFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBhY3RpdmU6IF92bS5zaG93LFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IF92bS5zaG93LFxuICAgICAgICAgIGFic29sdXRlOiBcIlwiLFxuICAgICAgICAgIGhlaWdodDogXCI3XCIsXG4gICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtLXRpdGxlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwid2hpdGVcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIG1kaS10d2l0dGVyXFxuICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIlR3aXR0ZXJcIildKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS50d2VldC5tZWRpYVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC0taW1hZ2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBoZWlnaHQ6IFwiMTAwcHhcIiwgc3JjOiBfdm0udHdlZXQubWVkaWEgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLS1pbWFnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxMDBweFwiLCBzcmM6IF92bS50d2VldC5wcm9maWxlX2Jhbm5lciB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLS1ib2R5X190ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50d2VldC50ZXh0KSArIFwiXFxuICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwcm9maWxlXCIsIHsgYXR0cnM6IHsgdHdlZXQ6IF92bS50d2VldCB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYm90dG9tLWJ1dHRvbnNcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGRpc3BsYXk6IF92bS5kaXNwbGF5LFxuICAgICAgICAgIFwicmV0d2VldC1uYW1lc1wiOiBfdm0ucmV0d2VldE5hbWVzLFxuICAgICAgICAgIHR3ZWV0OiBfdm0udHdlZXQsXG4gICAgICAgICAgdXBkYXRlOiBfdm0udXBkYXRlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicmVwbHlcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGRpc3BsYXk6IF92bS5kaXNwbGF5LFxuICAgICAgICAgIFwicmV0d2VldC1uYW1lc1wiOiBfdm0ucmV0d2VldE5hbWVzLFxuICAgICAgICAgIHJldHdlZXRzOiBfdm0ucmV0d2VldHNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LWNhcmQtc3VidGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXN1YnRpdGxlX19wcm9maWxlXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1zdWJ0aXRsZV9fcHJvZmlsZS0tY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0udHdlZXQucHJvZmlsZV9pbWFnZV91cmwgfSB9KV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfYyhcInBcIiwgW192bS5fdihcIkBcIiArIF92bS5fcyhfdm0udHdlZXQuc2NyZWVuX25hbWUpKV0pXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1zdWJ0aXRsZV9faWNvbi0tY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHt9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJyZWRcIiB9IH0sIFtfdm0uX3YoXCJtZGktaGVhcnRcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udHdlZXQuZmF2b3JpdGVfY291bnQpKV0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHt9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ3aGl0ZVwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwibWRpLXVuZG8tdmFyaWFudFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50d2VldC5yZXR3ZWV0X2NvdW50KSldKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5yZXR3ZWV0TmFtZXNcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LWV4cGFuZC10cmFuc2l0aW9uXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXN1YnRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1kcm9wZG93blwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1kcm9wZG93bl9fcmVwbGllc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJldHdlZXROYW1lc1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1kcm9wZG93bl9fcmVwbGllc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJSZXBseWluZyB0bzogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yZXR3ZWV0cywgZnVuY3Rpb24ocmV0d2VldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogcmV0d2VldC51cmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyZXR3ZWV0Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWFwcFwiLFxuICAgICAgICBfdm0uX2woX3ZtLnR3ZWV0cywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJjYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR3ZWV0OiBpdGVtLCBzaG93OiBfdm0uc2hvdywgdXBkYXRlOiBfdm0udXBkYXRlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0udXBkYXRlIH0gfSwgW192bS5fdihcIlVwZGF0ZVwiKV0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==