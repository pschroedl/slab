var assert = require('chai').assert;
var expect = require('chai').expect;
var jsdom = require('mocha-jsdom')

describe('client index.js', function(){
	jsdom();
	it('should have a function named onReady', function(){
		var slateApp = require('../../src/client/index.js');
		expect(typeof slateApp.onReady).to.equal('function');
	});
});