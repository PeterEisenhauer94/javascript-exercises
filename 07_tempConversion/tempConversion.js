const ftoc = function(num) {
  let result = (num - 32) * .5556;
  if (result%1===0){
    return result;
  } else {
    return +result.toFixed(1);
  }
};

const ctof = function(num) {
  let result = (num*1.8) + 32;
  if (result%1===0){
    return result;
  } else {
    return +result.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
