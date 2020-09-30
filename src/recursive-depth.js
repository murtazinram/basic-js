const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                depth++
                return this.calculateDepth(arr.flat(), depth)
            }
        }
        return depth
    }
};