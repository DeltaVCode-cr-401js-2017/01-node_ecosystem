const assert = require('assert');

const greet = require('../lib/greet.js');

describe('Greet Fucntion', function() {
  describe('#greetfunction()', function() {
    it(`should return 'hello world!' when passed 'world!'`, function() {
      assert.strictEqual(greet.greetFunction('world!'), 'hello world!');
    });
    it('should return null when function is not passed a string', function() {
      assert.equal(greet.greetFunction(3), null);
    });
    it('should return null when function is not passed a string', function() {
      assert.equal(greet.greetFunction(true), null);
    });
  });
});
//==================================//
const operators = require('../lib/arithmetic.js');

describe('Operator Functions', function(){
  describe('#addFunction', function(){
    it('should return 2 when passed params 1, 1', function(){
      assert.strictEqual(operators.addFunction(1,1), 2);
    });
    it('should return null if passed non-number', function(){
      assert.equal(operators.addFunction('3',3), null);
    });
    it('should return null if passed NaN', function(){
      assert.equal(operators.addFunction(NaN, 3), null);
    });
  });
});

describe('Operator Functions', function(){
  describe('#subFunction', function(){
    it('', function(){
      assert.strictEqual(operators.subFunction(1,1), 0);
    });
    it('should return null if passed non-number', function(){
      assert.equal(operators.subFunction('3',3), null);
    });
    it('should return null if passed NaN', function(){
      assert.equal(operators.subFunction(NaN, 3), null);
    });
  });
});
