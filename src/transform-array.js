const CustomError = require("../extensions/custom-error");
const DISCARD_NEXT = '--discard-next'
const DISCARD_PREV = '--discard-prev'
const DOUBLE_NEXT = '--double-next'
const DOUBLE_PREV = '--double-prev'
module.exports = function transform(array) {
    let controlArray = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]
    if (!Array.isArray(array)) throw Error;
    let newArray = array.slice();
    newArray.forEach(function (item, i) {
        if (Object.is(item, DISCARD_NEXT) && i < newArray.length - 1) {
            newArray[i + 1] = DISCARD_PREV;
        }
        if (Object.is(item, DISCARD_PREV) && i > 0) {
            newArray[i - 1] = DISCARD_PREV;
        }
        if (Object.is(item, DOUBLE_NEXT) && i < newArray.length - 1 && controlArray.indexOf(newArray[i + 1]) === -1) {
            newArray[i] = newArray[i + 1];
        }
        if (Object.is(item, DOUBLE_PREV) && i > 0 && controlArray.indexOf(newArray[i - 1]) === -1) {
            newArray[i] = newArray[i - 1];
        }
    })
    return newArray.filter(value => controlArray.indexOf(value) === -1);
};

