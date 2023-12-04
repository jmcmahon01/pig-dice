## Tests
Description: rollDice();
Test: "Function should generate a random number between 1 (inclusive) and 6 (inclusive) each time function is called"
Code: const roll = new Dice()
      roll.rollDice();
Output: Any number from 1 to 6

Test: "Function should add cumulative total of rolls each time it is called"
code:        const roll = new Dice ();
             roll.rollDice();
Output:      > roll; 
             > 3
             roll.rollDice();
             > 5
             roll;
             > 8

Describe: getTotal();
Test: "should return total sum of all previous roll values"
code: const roll = new Dice(); 
      first roll = 3
      second roll = 5
      roll.getTotal();
Output: 8
