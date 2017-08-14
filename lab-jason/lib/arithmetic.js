exports.add = function (x,y){
  if (isNaN(x,y)){
    return null;
  }
  else {
    return x+y;
  }
};
exports.sub = function (x,y){
  if (isNaN(x,y)){
    return null;
  }
  else {
    return x-y;
  }
};
