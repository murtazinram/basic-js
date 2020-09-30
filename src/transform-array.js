const CustomError = require("../extensions/custom-error");
const DISCARD_NEXT = '--discard-next'
const DISCARD_PREV = '--discard-prev'
const DOUBLE_NEXT = '--double-next'
const DOUBLE_PREV = '--double-prev'
module.exports = function transform(array) {
    if (!Array.isArray(array)) throw Error;
    let newArray = array.slice();
    newArray.forEach(function (item, i) {
        switch (item) {
            case DISCARD_NEXT:{
                newArray[i + 1] = DISCARD_PREV
                break
            }
            case DISCARD_PREV:{
                newArray[i - 1] = DISCARD_NEXT
                break
            }
            case DOUBLE_NEXT:{
                if (i < newArray.length - 1)
                    newArray[i] = newArray[i + 1]
                break
            }
            case DOUBLE_PREV:{
                if (i > 0)
                    newArray[i] = newArray[i - 1]
                break
            }
        }
    })
    return newArray.filter(value => {
        return value !== DOUBLE_NEXT && value !== DOUBLE_PREV && value !== DISCARD_PREV && value !== DISCARD_NEXT;
    });
};

