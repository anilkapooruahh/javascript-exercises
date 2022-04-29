
const shifted = (char, shift) => {
  const code = char.charCodeAt()

  if (code >= 65 && code <= 90) {
    if (shift < 0) {
      const shiftedChar  = code + (shift % 26) < 65 ? (90 - ((65 - 1) % (code + (shift % 26)))) : code + (shift % 26)
      return String.fromCharCode(parseInt(shiftedChar))
    }
    const shiftedChar = code + (shift % 26) > 90 ? ((code + (shift % 26)) % 90) + 65 - 1 : code + (shift % 26)
    return String.fromCharCode(parseInt(shiftedChar))
  }
  if (code >= 97 && code <= 122 ) {
    if (shift < 0) {
      const shiftedChar  = code + (shift % 26) < 97 ? (122 - ((97 - 1) % (code + (shift % 26)))) : code + (shift % 26)
      return String.fromCharCode(parseInt(shiftedChar))
    }
    const shiftedChar = code + (shift % 26) > 122 ? ((code + (shift % 26)) % 122) + 97 - 1: code + (shift % 26)
    return String.fromCharCode(parseInt(shiftedChar))
  }
  return char
}

const caesar = function(str, shift) {
  return str.split('').map(char => shifted(char, shift)).join('')
};

// Do not edit below this line
module.exports = caesar;
