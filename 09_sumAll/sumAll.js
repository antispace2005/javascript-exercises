const sumAll = function(start,end) {
    let result = 0
    if (start > end){
        let holder = start;
        start = end;
        end = holder;
    }
    if (start <0 || end < 0 || start % 1 || end %1 || typeof start != 'number' || typeof end != 'number'){
        return "ERROR"
    }
    for(; start<=end;start++){
        result += start;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
