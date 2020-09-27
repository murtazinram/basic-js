const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let teamName = '';
    if (members === null || typeof members !== "object" || !members[Symbol.iterator]) {
        return false
    }
    for (const member of members) {
        if (typeof member === "string") {
            teamName += member.trim().toUpperCase()[0]
        }
    }
    return teamName.split("").sort().join("")
};
