const repeatString = function(string, number) {
  ans = ''
  if (number < 0) {
    return "ERROR"
  }

  for (let i = 0; i < number; i++) {
    ans += string
  }

  return ans
};

// Do not edit below this line
module.exports = repeatString;
