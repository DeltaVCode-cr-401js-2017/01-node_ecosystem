const assert = require('assert');
const {expect} = require('chai');
const arithmetic = require('../lib/arithmetic');

describe('arithmetic', function(){
  describe('#add', function(){
    it('should return an number', function (){
      expect(arithmetic.add(10,1)).to.be.a('number');
    });
    it('should return null if params are NaN', function(){
      assert.strictEqual(arithmetic.add('cat',7), null);
    });
    it('should math correctly', function(){
      assert.strictEqual(arithmetic.add(1,2), 3);
    });
  });
  describe('#sub', function(){
    it('should return an number', function (){
      expect(arithmetic.sub(10,1)).to.be.a('number');
    });
    it('should return null if params are NaN', function(){
      assert.strictEqual(arithmetic.sub('cat',7), null);
    });
    it('should math correctly', function(){
      assert.strictEqual(arithmetic.sub(10,1), 9);
    });
  });
});
