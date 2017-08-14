const assert = require('assert');
const should = require('chai').should();
const arithmetic = require('../lib/arithmetic');

describe('arithmetic', function(){
  describe('#add', function(){
    it('should have an number as a variable', function (){
      let x = 1;
      let y = 1;
      x.should.be.a('number');
      y.should.be.a('number');
    });
    it('should math correctly', function(){
      assert.strictEqual(arithmetic.add(1,2), 3);
    });
  });
  describe('#sub', function(){
    it('should have an number as a variable', function (){
      let x = 1;
      let y = 1;
      x.should.be.a('number');
      y.should.be.a('number');
    });
    it('should math correctly', function(){
      assert.strictEqual(arithmetic.sub(10,1), 9);
    });
  });
});
