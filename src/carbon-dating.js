const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "string" || !Number.isInteger(sampleActivity)) {
        return false
    }
    const halfLife = 0.693 / HALF_LIFE_PERIOD
    const time = Math.log(MODERN_ACTIVITY / sampleActivity) / halfLife

    return Math.ceil(time)
};
