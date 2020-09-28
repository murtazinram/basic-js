const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!'
    }
    if (Object.prototype.toString.call(date) === '[object Date]') {
        const month = date.getMonth() + 1;
        if (month < 3 || month === 12) return 'winter'
        if (month >= 3 && month < 6) return 'spring'
        if (month >= 6 && month < 9) return 'summer'
        if (month >= 9 && month < 12) return 'autumn'
    } else {
        throw new Error("bad argument")
    }
};


