const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.separator === undefined) options.separator = "+";
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if (options.addition===undefined) options.additionRepeatTimes = 0;
    if (options.additionSeparator === undefined) options.additionSeparator = "|";
    if (str === undefined){
        throw new Error('not found str')
    }
    // if (typeof str !== "string") str.toString()
    // if (typeof options.addition !== "string") options.addition.toString()
    let builder = ''
    for (let i = 0; i < options.repeatTimes; i++) {
        builder += str
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            builder += options.addition
            if (j < options.additionRepeatTimes - 1) builder += options.additionSeparator
        }
        if (i < options.repeatTimes - 1) builder += options.separator
    }
    return builder
};
  