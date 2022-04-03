/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    return this.number1 + this.number2;
  };
  this.subtraction = function (number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    return this.number1 - this.number2;
  };
  this.multiplication = function (number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    return this.number1 * this.number2;
  };
  this.division = function (number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    return this.number1 / this.number2;
  };
}

const calculator1 = new Calculator();

const calSum = calculator1.sum(80, 20);
console.log("calSum", calSum);

const calSubtraction = calculator1.subtraction(80, 20);
console.log("calSubtraction", calSubtraction);

const calMultiplication = calculator1.multiplication(80, 20);
console.log("calMultiplication", calMultiplication);

const calDivision = calculator1.division(80, 20);
console.log("calDivision", calDivision);
