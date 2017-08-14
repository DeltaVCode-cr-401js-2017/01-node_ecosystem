const assert = require('assert');
const greet = require('../lib/greet');

describe('greet', function(){
  describe('#greet', function(){
    it(`should return "hello ,<name>" with name being passed variable.`, function (){
      assert.strictEqual(greet.greet('world!'), 'hello world!');
    });
    it(`should return null without variable.`, function(){
      assert.strictEqual(greet.greet(), null);
    });
  });
});
