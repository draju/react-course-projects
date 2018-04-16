var nameVar = 'Andrew';
var nameVar = 'Mike';       
console.log('nameVar',nameVar);  // valid with var based variable

let name = 'John';
//let name = 'Jim';  //Babel would give error

//let allows re-assignment but not re-definition
//const does not allow re-assignment or re-definition
//let and const are block level scoped, var is only function level scoped

//if you need to change a variable within a different code block, define it outside the code block first:
let firstName;         // initially undefined
if(fullName){
  firstName = fullName.split(' ')[0];
}
console.log(firstName) //picks up new value

