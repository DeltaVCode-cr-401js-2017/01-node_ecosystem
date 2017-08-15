function add (a, b) {
  if (typeof a !== 'number') {
    if(typeof b !== 'number') {
      return null;
    }
  } else {
    return a + b;
  }
}

exports.add = add;
