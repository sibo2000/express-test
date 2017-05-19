var expect = require('chai').expect;

describe('Basic test to pass', function(){
    it('should return true', function(){
        expect('abc').to.be.equal('abc');
    });
})