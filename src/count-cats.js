const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const CAT = "^^";
  let count = 0;
  for (const iter of matrix) {
    for (const iterElement of iter) {
      if (iterElement === CAT){
        count++;
      }
    }
  }
  return count;
};
