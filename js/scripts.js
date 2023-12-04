function Dice() {
  this.total = 0;
}

Dice.prototype.rollDice = function () {
  const result = Math.floor(Math.random() * 6) + 1;
  if (result === 1) {
    this.total = 0;
    console.log("you rolled a 1, no points for you!")
  } else {
    this.total += result;
  }
  if (this.total >= 10) {
    console.log("You win the game!")
  }
  return result;
};

Dice.prototype.getTotal = function () {
  return this.total;
};


