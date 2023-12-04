function Dice() {
  this.total = 0;
}
Dice.prototype.rollDice = function () {
  const result = Math.floor(Math.random() * 6) + 1;

  if (result === 1) {
    this.total = 0;
  } else {
    this.total += result;
  }

  return result;
};

Dice.prototype.getTotal = function () {
  return this.total;
};


