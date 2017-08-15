const assert = require('assert');

const greet = require('../lib/greet.js');
describe('Greet', function() {
  describe('#greet()', function() {
    it('should return \'hello world! when passed \'world!\'', function (){
      assert.strictEqual(greet.greet('world!'), 'hello world!');
    });
    it('should return null when not passed a string', function() {
      assert.strictEqual(greet.greet(12345765), null);
    });
  });
});

const operators = require('../lib/arithmetic.js');

describe('Arithmetic', function(){
  describe('#add', function(){
    it('should return 2 when passed params 1, 1', function(){
      assert.strictEqual(operators.add(1, 1), 2);
    });
    it('should return null if passed non-numbers', function(){
      assert.equal(operators.add('1', 1), null);
    });
  });
});

describe('Arithmetic', function(){
  describe('#sub', function(){
    it('should return 0 when passed params 1, 1', function(){
      assert.strictEqual(operators.sub(1, 1), 0);
    });
    it('should return null if passed non-numbers', function(){
      assert.equal(operators.sub('1', 1), null);
    });
  });
});
