const CustomError = require("../extensions/custom-error");

class HanoiTower {
  constructor(turns, seconds) {
    this.turns = turns
    this.seconds = seconds
  }
}

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SPEED = turnsSpeed / 3600
  const turns = Math.pow(2, disksNumber) - 1
  const seconds = Math.floor(turns / SPEED)
  return new HanoiTower(turns, seconds)
};
