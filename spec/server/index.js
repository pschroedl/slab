var assert = require('chai').assert;
var expect = require('chai').expect;
var slateServer = require('../../src/server/index.js');

describe('server index.js', function(){
	it('should have a function named render', function(){
		expect(typeof slateServer.render).to.equal('function');
	});
});