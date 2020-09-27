const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date instanceof Date){
        const month = date.getMonth() + 1;
        console.log(month)
        if (month < 3 || month === 12) return 'winter'
        if (month >= 3 && month < 6) return 'spring'
        if (month >= 6 && month < 9) return 'summer'
        if (month >= 9 && month < 12) return 'autumn'
    } else {
        return 'Unable to determine the time of year!'
    }
};
