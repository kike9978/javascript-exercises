
// ask for 2 integers
const sumAll = function (num1, num2) {
    // escape NaNs and bellow negatives
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    sum = 0;
    // Check which is higher
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    // loop betwen the first number given until the last
    for (let i = num1; i <= num2; i++) {
        // add the number in the iteration to the sum
        sum += i;
    }

    // return sum
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
