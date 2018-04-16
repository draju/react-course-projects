
class Person {

	constructor(name='Anonymous', age=0) {
		this.name = name;
		this.age = age;
	}

	getGreeting(){
		return `Hello.  I am ${this.name}!`;
	}

	getDescription(){
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {

	constructor(name, age, major){
		super(name, age);
		this.major = major;
	}

	hasMajor(){
		return !!this.major;
	}

	//Overriding method from parent class
	getDescription(){
		let description = super.getDescription();
		if(this.hasMajor()){
			description += ` Their major is ${this.major}.`;
		}
		return description;
	}
}

class Traveler extends Person {

	constructor(name, age, homeLocation){
		super(name,age);
		this.homeLocation = homeLocation;
	}

	hasHomeLocation(){
		return !!this.homeLocation;
	}

	getGreeting(){
		let greeting = super.getGreeting();
		if(this.hasHomeLocation()){
			greeting += ` I am visiting from ${this.homeLocation}`;
		}
		return greeting;
	}
}

const me = new Student('Joe',35,'Math');
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());

const traveler = new Traveler('Alexis',26,'Paris');
console.log(traveler.getGreeting());

const homeBody = new Traveler('George',45);
console.log(homeBody.getGreeting());