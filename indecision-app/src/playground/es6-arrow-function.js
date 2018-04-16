// verbose arrow function
const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
}
console.log(getFirstName('Mike Smith'));

// arrow expression syntax
const getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2('George Smith'));