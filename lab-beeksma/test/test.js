const assert = require('assert');
const greet = require('../lib/greet.js');
const arithmetic = require ('../lib/arithmetic.js');


describe('greet', function() {
  describe('#greet()', function() {

    it('should return "Hello World!"', function() {
      assert.strictEqual(greet.greet('World!'), 'Hello World!');
    });

    it('should return NULL if an argument that is not a string is passed' , function() {
      assert.strictEqual(greet.greet(true), null);
    });

  });
});

describe('arithmetic', function() {

  describe('#add()', function() {

    it('should return 17 when passed 8 and 9', function() {
      assert.strictEqual(arithmetic.add(8,9), 17);
    });

    it('should return NULL when either argument is not a number', function() {
      assert.strictEqual(arithmetic.add(8,'donkey'), null);
    });

  });

  describe('#sub()', function() {

    it('should return 1 when passed 8 and 9', function() {
      assert.strictEqual(arithmetic.add(8,9), 17);
    });

    it('should return NULL when either argument is not a number', function() {
      assert.strictEqual(arithmetic.add('mule',9), null);
    });

  });
});
