"use strict"; // treat all the JS code as newer version. But by default this is true irrespective we mention or not

/**
 * simply, alert("Hello")
 *  - The above won't work if we are trying to run it using node.js
 *  - Generally, this works because we do alert either creating a js file and binding it to html and spinning up and test or opening the console and running there
 *      - there it works because whatever we write it binds or resides inside document. And js engine is hid inside the browser
 * 
 * Note:
 *  For making this work in node.js we have different syntax 
 */
// alert("Hello") // we are using node.js and not browser

let name = "Pawan"
let age = 25
let is_loggedin = false
let state = null

/**
 * List of datatypes:
 * 1. Primitive Datatypes:
 *  int // range till 2^53
 *  bigint
 *  string // written in ""
 *  boolean // true / false
 * 
 *  null // its a standalone value. It also helps to represents empty value
 *  undefined // its assigned if the variable is declared but value is not passed
 * 
 *  symbol // to find uniqueness symbol is used. Mostly used while developing react apps
 * 
 * 2. Non primitive datatypes:
 *  object
 */

console.log(typeof null) // null is an object
console.log(typeof undefined)