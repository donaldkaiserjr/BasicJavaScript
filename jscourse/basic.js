
//This prints hello in the console of the webpage
console.log("Hello");


// Variables and Constants :  store data inside of a variable
// Keywords -> letters and constant    (constants can store values but you cant change the value)

//CREATE a variable using let keyword
let name = "Donald";
console.log(name);


name = "Donald R. Kaiser";
console.log(name);



//Create Constant
const age = 42;
console.log(age);


//This makes an error
//   age = 22;



// Data Types :  STring, Number, Boolean, null(empty), undefined(means it hasn't been defined yet)

const myName = "Donald Kaiser";
const myInteger = 78;
const myDecimal = 90.98;

const myBool = true;
const myNull = null;

const myUndefinedConst = undefined;
let x;  //this is also a way to say something is undefined.

console.log(myName);




// Strings and different functions
// var and let are both used for variable declaration but the difference between them is that var is function scoped and let is block scoped. 
var firstName = "Goulash";
var lastName = "Red";
var fullname = firstName + " " + lastName;  // + " " +  adds a space between the two names
console.log(fullname);

var fullname2 = `${firstName} ${lastName} is my full name.`;   // This also allows a space betwen the two names
console.log(fullname2);

console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());

console.log(fullname.length);

var message = 'It\'s ok';
console.log(message);



// ARRAYS:  Stores multiple data inside them. 
const friends = ['Sam', 'John', 'Ron'];
console.log(friends);
const fruits = ['Apple', 'Mango', 'Banana'];
console.log(fruits);

let firstPerson = ['Sammy', 18, false];

friends.push('Harry');  //'Push' Adds a new friend, Harry, at the end of the friends array.
console.log(friends);
friends.unshift('David');  //'Unshift' Adds new friend to the start of the list
console.log(friends);

friends.shift();   //Shift took the first name out of the list
console.log(friends)

console.log(friends.length)  // Shows the length of the list....4

console.log(friends[3]);  // indexing is the same as in Python, starts with 0.

console.log(Array.isArray(friends));   //True   friends is an array.
console.log(Array.isArray(8)); // False. 8 isn't an array



// Object literals  Like dictionaries in python, these are the variables that can store many values in key-value pairs.

let person = {
    firstName: 'Peter',
    lastName: 'Rabbit', 
    age: 18,
    hobbies: ['Chess', 'Coding', 'Video making'],
    address: {
        city: 'Los Angeles',
        state: 'CA'
    }
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies[1]);

person.email = 'peterrabbit@zmail.com'
console.log(person);
console.log(person['firstName']);

console.log(person.address.city);



// Array of Object Literals

let persons = [
    {
        name: "Donald Kaiser",
        isCoder: true,
        age: 18
    },
    {
        name: "Ron Kaiser",
        isCoder: true,
        age: 22
    },
    {
        name: "David Kaiser",
        isCoder: false,
        age: 20
    },
];

console.log(persons[1].name);
console.log(persons[2].isCoder);




// If-Else Statements

let aged = 12;
let xx = 13;

if (aged === 10 || age === 11) {
    console.log('Value is 10/11');
} else if (aged === 12 && xx === 13) {
    console.log('Value of age is 12 and value of xx is 13');
} else if (aged === 14) {
    console.log('Value is 14');
} else {
    console.log('Value is not 10')
}

// > <  >=  <=  !=   ===     Use these the same as Python except === (is equal to)





// Switch statement   If you have an if/else statment that's gone on for many lines, you use switch to simplify it.
let age2 = 20
switch(age) {
    case 10:
        console.log('Value is 10');
        break;
    case 20:
        console.log('Value is 20');
        break;
    case 30:
        console.log('Value is 30');
        break;
    default:
        console.log('Value is something else');
}


// Loops
//For Loop

for(let i = 0; i < 10; i++) {
    console.log(i);
}
// This is saying:  i equals 0. for n in i, increment by 1.   i++ is the same as i+=1 in Python


for(let i = 0; i < persons.length; i++) {
    console.log(persons[i].name);
}
// This prints each person in the persons list we had furthur above in this script.


// WHILE LOOP
let a = 0;
while(a < persons.length) {
    console.log(persons[a].name);
    a++;
}


// this is similar to Python: for n in persons print(n)
for(person of persons) {
    console.log(person.name);
}




//Functions

function fullNames() {
    const firstName = "Jack";
    const lastName = "Hickory";
    console.log(`Full Name is ${firstName} ${lastName}. Thanks so much!`);
}

fullNames();


function fullNames2(firstName = 'John', lastName) {
    //console.log(`Full Name is ${firstName} ${lastName}`);
    return firstName + ' ' + lastName;
}


const myNames = fullNames2('Mac', 'Daddy');
console.log(myNames);




function getSums(x, y) {
    return x + y;
}

mySums = getSums(250, 900);
console.log(mySums);



// Arrow Functions  These allow us to write shorter function syntax.  (think of Lambda, no return statement needed)
const getSum = (num1, num2) => num1 + num2

console.log(getSum(3, 3));


// You can also console.log on the same line
const getSumed = (num1, num2) => console.log(num1 + num2)
getSumed(500,500);

const newFunc = namer => console.log(namer);
newFunc('DdBoo');