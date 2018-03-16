/**
 * Super simple wysiwyg editor v@VERSION
 * http://summernote.org/
 *
 * summernote.js
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license./
 *
 * Date: @DATE
 */
(function (factory) {
  // Change by Jonathan Mares
  // Comment out this initializing logic and force using the global.$ version of
  // jquery. Every jquery extension must use the same version of jquery or we don't
  // things to run properly
  // /* global define */
  // if (typeof define === 'function' && define.amd) {
  //   // AMD. Register as an anonymous module.
  //   define(['jquery'], factory);
  // } else if (typeof module === 'object' && module.exports) {
  //   // Node/CommonJS
  //   module.exports = factory(require('jquery'));
  // } else {
    // Browser globals

    // initialize summernote with a global version of jquery
    factory(global.$);
  }
}(function ($) {
  'use strict';
