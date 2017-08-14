const assert = require('assert');

const greet = require('../lib/greet.js');

assert.strictEqual(greet.greetFunction('world!'), 'hello world!');
assert.equal(greet.greetFunction(3), null);
assert.equal(greet.greetFunction(true), null);
console.log('all tests passed');
