/**
 * In JS we have 2 ways to declare:
 *  1. Literal
 *  2. Constructor / Singelton
 */

// Object Literals
const js_user = {
    name: "Pawan", // JS internally converts / wraps the key of object to string by "name"
    age: 18,
    location: "Berhampur",
    email: "pawan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"],
    "full name": "Pawan Kumar"
}
// how to access the object
// console.log(js_user.age) // when accessed with . operator no need to consider the key as string
// console.log(js_user["isLoggedIn"]) // Since we discussed above that JS internally changes the key to string if not passed as string

// The . operator can't be used in some cases, as if the key is having value sperated by spaces then the 2nd way is recommended
// console.log(js_user["full name"])


/**
 * There is a catch, generally in interviews they ask to create a symbol and pass the symbol as a key to object
 * 
 * lets see how to do and access sym keys
 */
const my_sym = Symbol("key1")
const my_dict = {
    my_sym: "random_value", // the difference is this line will create a simple key "my_sum" unlike the requirement so the below one is the correct way
    [my_sym]: "my_key1" // this will create the actual symbol as key as per the requirement - [Symbol(key1)] will be the key
}
// console.log(my_dict[my_sym])


// Update the value of a dict
js_user.email = 'pawan.kumar@gmail.com'
// console.log(js_user)

// freeze method is used to freeze the changes to be applied on the object. If we try to make any changes it won't give error and it won't let the changes happed
// Object.freeze(js_user)

js_user.email = 'pawan.kumar.subudhi@gmail.com'
// console.log(js_user)

js_user.greeting = function(){
    console.log("Hello JS user")
}

js_user.greeting_two = function(){
    console.log(`Hello JS user ${this.age}`) // this helps to refer the current object to see all the available properties
}

console.log(js_user.greeting) // we are getting the function reference. - Function (anonymous)]
console.log(js_user.greeting()) //it will execute the function - Hello JS user
console.log(js_user.greeting_two())