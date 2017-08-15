function greetUser (name) {
  if (typeof name !== 'string') {
    return null;
  } else {
    return 'hello ' + name;
  }
}

exports.greetUser = greetUser;
