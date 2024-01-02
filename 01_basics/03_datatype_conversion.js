let age = "25"
console.log(typeof age)

let age_in_number = Number(age)
console.log(typeof age_in_number)

let invalid_age = "23abc"
// the catch is the age is invalid and js successfully converts it into Number type but the catch is the value is Nan (Not a number)
console.table([invalid_age, Number(invalid_age), typeof(Number(invalid_age))])

/**
 * Note: Value conversion to Number
 *  "33" => 33
 *  "33abc" => Nan (Not an number)
 *  true => 1
 *  false => 0
 *  null => 0
 *  undefied => Nan
 */


let is_loggedin = 1
let boolean_is_loggedin = Boolean(is_loggedin)

console.table([is_loggedin, typeof is_loggedin,boolean_is_loggedin, typeof boolean_is_loggedin])

/**
 * Note: Value conversion to Boolean
 *  1 => true
 *  0 => false
 *  "" => false
 *  "pawan" => true
 */

// *************************************** OPERATIONS *****************************************************

let value = 3
let negative_value = -value

console.log(negative_value);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) // power operation
// console.log(2/2)
// console.log(2%2)


let str1 = "hello"
let str2 = "Pawan"

// console.log(str1 + str2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"