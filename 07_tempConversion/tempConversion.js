const round = num => Math.round(Math.round(num * 100) /10) /10 

const ftoc = function(temp) {
  const result = (temp - 32) * (5/9)
  //Rounding to one decimal place
  return round(result)

};

const ctof = function(temp) {
  const result = (temp * (9/5)) + 32
  return round(result)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
