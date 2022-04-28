const palindromes = function (string) {
  //string manipulation
  const cleanString = string.split('').filter(char => !(char.search(/[^A-Za-z]/) != -1)).join('').toLowerCase()

  return cleanString ===  cleanString.split('').reverse().join('')

};

// Do not edit below this line
module.exports = palindromes;
