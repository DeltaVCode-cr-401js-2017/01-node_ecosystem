function greetFunction(name) {
  if (typeof name !== 'string'){
    return null;
  }
  return 'hello ' + name;
}

exports.greetFunction = greetFunction;
