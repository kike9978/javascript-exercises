
// ask for 2 integers
const sumAll = function (num1, num2) {
    // escape NaNs
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        const message = "ERROR";
        return message;
    }
    sum = 0;
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            // add the number in the iteration to the sum
            sum += i;
        }
    } else {
        // loop betwen the first number given until the last
        for (let i = num1; i <= num2; i++) {
            // add the number in the iteration to the sum
            sum += i;
        }
    }
    // return sum
    return sum;
    // Check which is higher






};

// Do not edit below this line
module.exports = sumAll;
