var assert = require('chai').assert;
var expect = require('chai').expect;
var slateApp = require('../../src/client/index.js');

describe('client index.js', function(){
	it('should have a function named onLoad', function(){
		expect(typeof slateApp.toString).to.equal('function');
	});
});