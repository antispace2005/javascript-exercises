const repeatString = function (word, numOfRepeations) {
    repeatedString = ""
    if (numOfRepeations<0){
        return 'ERROR';
    }
    for (; numOfRepeations > 0; numOfRepeations--) {
        repeatedString += word
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
