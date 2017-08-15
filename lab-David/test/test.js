const assert = require('assert');

const greet = require('../lib/greet.js');
describe('Greet Function', function() {
  describe('#greetUser()', function() {
    it('should return \'hello world! when passed \'world!\'', function (){
      assert.strictEqual(greet.greetUser('world!'), 'hello world!');
    });
  });
});
