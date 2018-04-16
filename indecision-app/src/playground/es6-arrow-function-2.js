const multiplier = {
  numbers: [ 5, 10, 15],
  multiplyBy: 3,
  multiply() {
  	return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());