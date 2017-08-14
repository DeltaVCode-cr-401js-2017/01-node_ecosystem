exports.greet = (name) => {
  return typeof(name) === 'string' ? `Hello ${name}` : null;
};
