const sumAll = function(start, end) {
    const s = start < end ? start : end
    const e = end < start ? start : end
    if (typeof(s) !== 'number' || s < 0) {
        return 'ERROR'
    }
    if (typeof(e) !== 'number' || e < 0) {
        return 'ERROR'
    }
    let ans = 0
    for (let i = s; i < (e + 1); i++) {
        ans += i
    }
    return ans
};

// Do not edit below this line
module.exports = sumAll;
