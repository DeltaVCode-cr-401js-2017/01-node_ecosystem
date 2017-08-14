exports.add = (a, b) => {
  if(isNaN(a) || isNaN(b)){
    return null;
  }
  else{
    return a + b;
  }
};

exports.sub = (a,b) => {
  if(isNaN(a) || isNaN(b)){
    return null;
  }
  else{
    return a - b;
  }
};
