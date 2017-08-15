const assert = require('assert');

const greet = require('../lib/greet.js');
describe('Greet Function', function() {
  describe('#greetUser()', function() {
    it('should return \'hello world! when passed \'world!\'', function (){
      assert.strictEqual(greet.greetUser('world!'), 'hello world!');
    });
    it('should return null when not passed a string', function() {
      assert.strictEqual(greet.greetUser(12345765), null);
    });
  });
});

const operators = require('../lib/arithmetic.js');

describe('Operator Functions', function(){
  describe('#add', function(){
    it('should return 2 when passed params 1, 1', function(){
      assert.strictEqual(operators.add(1, 1), 2);
    });
    it('should return null if passed non-numbers', function(){
      assert.equal(operators.add('1', 1), null);
    });
  });
});

describe('Operator Functions', function(){
  describe('#sub', function(){
    it('should return 0 when passed params 1, 1', function(){
      assert.strictEqual(operators.sub(1, 1), 0);
    });
    it('should return null if passed non-numbers', function(){
      assert.equal(operators.sub('1', 1), null);
    });
  });
});
