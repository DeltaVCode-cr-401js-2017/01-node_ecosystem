const assert = require('assert');
const greet = require('../lib/greet.js');
const arithmetic = require ('../lib/arithmetic.js');


describe('greet', function() {
  describe('#greet()', function() {

    it('should return "Hello World!"', function() {
      // this test will be run
    });

    it('should return NULL if an argument that is not a string is passed' , function() {
      // this test will also be run
    });

  });
});

describe('arithmetic', function() {

  describe('#add()', function() {

    it('should return 17 when passed 8 and 9', function() {
      // this test will be run
    });

    it('should return NULL when either argument is not a number', function() {
      // this test will also be run
    });

  });

  describe('#sub()', function() {

    it('should return 17 when passed 8 and 9', function() {
      // this test will be run
    });

    it('should return NULL when either argument is not a number', function() {
      // this test will also be run
    });

  });
});
