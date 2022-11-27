const add = function(num1,num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1,num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(array) {
	let results = 0;
  for (i in array){
    results+=array[i];
  }
  return parseInt(results);
};

const multiply = function(array) {
  let results = array[0];
  for (let i=1; i<array.length;i++){
    results*=array[i];
  }
  return results;
};

const power = function(num1,num2) {
	let result = num1;
  for (let i=1;i<num2;i++){
    result*=num1;
  }
  return result;
};

const factorial = function(num) {
	if (num===0){
    return 1;
  }

  let result = num;
  for (i=num-1;i>0;i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
