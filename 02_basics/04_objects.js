// Will see how to create objects using Constructor / Singelton way
const tinder_user = new Object()
const tinder_user_1 = {}

// console.log({tinder_user, tinder_user_1}); // no difference in the output of both the ways, just keep in mind constructor way creates a singelton and non constructor way created non singelton objects

tinder_user.id = '123abc'
tinder_user.name = 'Samy'
tinder_user.is_logged_in = false

// console.log(tinder_user);

const regular_user = {
    email: "random@gmail.com",
    full_name: {
        user_full_name: {
            first_name: 'Pawan',
            last_name: 'kumar'
        }
    }
}
// console.log(regular_user.full_name.user_full_name);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// Lets combine / merge objects
// const obj3 = {obj1, obj2} // its the same issue which we saw for arrays. 
// console.log({obj3}); // {obj3: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }}

/**
 * Lets see some correct and better ways of merging objects just like arrays:
 *  1. assign - Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
 * const obj3 = Object.assign(obj1, obj2) // first param is the target and other paerams passes will be source, all the source objects will be iterated and merged to target object
 * const obj3 = Object.assign({}, obj1, obj2) // this is a better way, we assigned a {} as target object and all the source params will be iterated and merged to {}
 * 
 * The output will be the same in above both the ways, just the target result object is different in both the first will add elememts to the obj1 and in the second it will add results to brand new {} object
 * 
 *  
 * 
 * 2. spread operator - just like we used in arrays, we can use it here. And this way is highly used ****
 * const obj4 = {...obj1, ...obj2}
 */
const obj3 = Object.assign({}, obj1, obj2)
// console.log({obj3});

const obj4 = {...obj1, ...obj2} // using spread operator
// console.log({obj4});

// WIDELY USED OBJECT FUNCTIONS
console.log(Object.keys(obj4)); // Since Object.keys() won't know on which object we need to operate so we are passing the object. It returns the array of keys
console.log((Object.values(obj4))); // returns array of values
console.log(Object.entries(obj4)) // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ] it returns list of list where the list is nothing but key value pair of object
console.log(tinder_user.hasOwnProperty('is_logged'))// Determines whether an object has a property with the specified name