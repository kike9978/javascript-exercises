const reverseString = function (string) {
    let stringReversed = "";
    longitud = string.length;
    for (let i = 0; i < string.length; i++) {
        stringReversed += string.slice(longitud-1,longitud);
        longitud--;
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;

