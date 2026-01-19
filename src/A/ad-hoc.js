// ~/src/A/ad-hoc.js
// node --watch ad-hoc.js
const log = console.log;

log('Ad-Hoc JavaScript Review');

// Create a constant called person
// and assign it the value of an
// object literal with two properties
// two getter functions
// and another function
const person = {
    firstName: 'Stewart',
    lastName: 'Dent',
    // A "getter" is a function that returns
    // information.
    // Inside of the object, it is a function
    // with a set of instructions, but
    // when used from outside the object, we
    // access it like it's just a property/variable
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    get formalName() {
        return `${this.lastName}, ${this.firstName}`;
    },
    // The following function has a default value
    // for the toSomeone parameter
    sayHello(toSomeone = 'World') {
        return `Hello ${toSomeone}`;
    }
}

log(person);
log(`${person.fullName} says ${person.sayHello('class')}`);

// Just as we can create objects by structuring
// their values with an object literal syntax,
// JavaScript allows us to "unpack" or de-structure
// objects into simple variables.
const {firstName, lastName, fullName} = person;
/*
const firstName = person.firstName;
const lastName = person.lastName;
*/
log(`firstName is ${firstName}`);
log(firstName, lastName, fullName);

log()

// We can also use destructuring with Arrays
const names = ['Stew Dent', 'Anna Lyst', 'Phoe Nominal', person];

const [client, analyst, programmer] = names;
// Destructuring an array "unpacks" the values
// in the names array based on their POSITION.
log(analyst, 'and', programmer, 'are working for', client);
log();

// The spread operator is another way of "unpacking" an array
const useInfo = (first, second, third, fourth) => {
    log(`${fourth}, ${second}`);
}
// Spreading out an array as an argument to a
// function will unpack each element in the array
// to each parameter in the function
useInfo(...names); // ... is the spread operator
// useInfo(names[0], names[1], names[2], names[3]);

// A rest parameter appears in a function declaration. It's a way to allow an indefinite number of parameter to be sent in.
// function declaration:
function sum(...values) {
    // Because the parameter values is declared
    // as a rest parameter, that means it will
    // be an array of values.
    let total = 0;
    for (const singleValue of values) {
        total += singleValue;
    }
    return total;
}
// function call:
let result = sum(5, 3, 2, 7);
console.log(result);