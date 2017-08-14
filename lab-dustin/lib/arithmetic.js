function addFunction(num1,num2) {
  if (typeof num1 !== 'number'
    || typeof num2 !== 'number'
    || isNaN(num1)
    || isNaN(num2)
  ){
    return null;
  }
  return num1 + num2;
}

function subFunction(num1,num2) {
  if (typeof num1 !== 'number'
    || typeof num2 !== 'number'
    || isNaN(num1)
    || isNaN(num2)
){
    return null;
  }
  return num1 - num2;
}

exports.addFunction = addFunction;
exports.subFunction = subFunction;
