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