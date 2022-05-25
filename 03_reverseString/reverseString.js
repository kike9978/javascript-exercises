const reverseString = function(string) {
    let stringReversed = "";
    longitud = string.length-1;
    for(let i= 0; i<string.length;i++){
        stringReversed += string.slice(longitud);
        longitud --;
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
