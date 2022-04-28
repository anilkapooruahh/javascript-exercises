const help = (prev, next) => {
  if (prev['yearOfDeath'] === undefined) {
    prev['yearOfDeath'] = Date().slice(11,15) - 0
  }  
  if (next['yearOfDeath'] === undefined) {
    next['yearOfDeath'] = Date().slice(11,15) - 0
  }
  
  return (prev['yearOfDeath'] - prev['yearOfBirth']) < (next['yearOfDeath'] - next['yearOfBirth']) ? next : prev;
   
}  
const findTheOldest = function(people) {
  const oldest = people.reduce(help)

  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
