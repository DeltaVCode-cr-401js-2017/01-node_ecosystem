const assert = require('assert');

const greet = require('../lib/greet.js');

assert.equal(greet.greetFunction('world'), 'hello world!');
