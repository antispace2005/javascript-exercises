const palindromes = function (str) {
    const letters = 'abcdefghijklmnopqrstuvwxyz1234567890'
    cleaned_str = str.toLowerCase().split('').filter((char)=>letters.includes(char)).join('');

    reversed = cleaned_str.split("").reverse().join("");
    return reversed == cleaned_str;

};

// Do not edit below this line
module.exports = palindromes;
