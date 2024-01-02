//  Primitive (Call by value - i.e. the actual value or reference is not passed instead the copy of value is passed. And any changes are done, done to the copied value)
//  7 types : String, Number, Boolearn, null (empty), undefined (variable declared but not defined), Symbol (uniqueness), BigInt (scientific or very larger values we use this)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// ******************************************************************************************************

// Non primitive (Call by reference - i.e. actualy value is passed and any changed made, is made to the original value)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "pawan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3