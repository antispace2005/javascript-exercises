const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum,current)=>sum += current,0)
};

const multiply = function(arr) {
	return arr.reduce((product,current)=>product *= current,1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	if (a == 0 ) return 1;
  if (a<0) return "ERROR";
  let fact = 1
  for (;a > 1;a--) fact *=a;
  return fact;
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
