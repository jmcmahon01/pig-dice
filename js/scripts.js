function Dice() {
  this.total = 0;
}
Dice.prototype.rollDice = function () {
  const result = Math.floor(Math.random() * 6) + 1;
  this.total += result;
  return result;
};
