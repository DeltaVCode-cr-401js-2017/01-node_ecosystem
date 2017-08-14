const assert = require('assert');

const greet = require('../lib/greet.js');

assert.strictEqual(greet.greetFunction('world!'), 'hello world!');
assert.equal(greet.greetFunction(3), null);
assert.equal(greet.greetFunction(true), null);

//==================================//
const operators = require('../lib/arithmetic.js');

assert.strictEqual(operators.addFunction(1,1), 2);
assert.strictEqual(operators.subFunction(1,1), 0);

assert.equal(operators.addFunction('3',3), null);
assert.equal(operators.subFunction('3',3), null);
console.log('all tests passed');
