//  Primitive (Call by value - i.e. the actual value or reference is not passed instead the copy of value is passed. And any changes are done, done to the copied value)
//  7 types : String, Number, Boolearn, null (empty), undefined (variable declared but not defined), Symbol (uniqueness), BigInt (scientific or very larger values we use this)
// Memory is allocated in stack

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
// Array, Objects, Functions (the type of all the non-primitive data types are broadly called as object)
// Memory is allocated in heap

const heros = ["shaktiman", "naagraj", "doga"]; // object
let myObj = {
    name: "pawan",
    age: 22,
} // object

const myFunction = function(){
    console.log("Hello world");
} // type of - function object or just function or just object, we can call it anything

console.log(typeof anotherId);

/**
 * https://262.ecma-international.org/5.1/#sec-11.4.3
 * 
 * Return type of variables in JavaScript
 * 1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
       
    2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */