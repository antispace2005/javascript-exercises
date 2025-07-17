const fibonacci = function(count) {
    if (count <0) return 'OOPS'
    let start = [0,1]
    for (let i = 2 ; i <= count ; i++){
        start[i] = start[i-1] + start [i-2]
    }

    return start[count]
};

// Do not edit below this line
module.exports = fibonacci;
