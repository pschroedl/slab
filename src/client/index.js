'use strict';

var $ = require('jquery');
var slateApp = {};

slateApp.onReady = function() {
	console.log('successfully loaded bundle.js');
};

$(document).ready(slateApp.onReady);
module.exports = slateApp;
