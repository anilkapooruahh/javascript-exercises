const removeFromArray = function(ar, ...args) {
    let arr = ar 

    for (let i = 0; i < args.length; i++) {
        const element = args[i]
        if (arr.includes(element)) {
        arr = arr.filter(ele => ele !== element )
        }      
    }
    return arr
};

console.log(removeFromArray([1,2,3,4],1,2,3))
// Do not edit below this line
module.exports = removeFromArray;
