const my_arr = ["pawan","sameer","sofia"]
const my_arr_1 = ["rishit","sheetal","raheel"]

// my_arr.push(my_arr_1) // push generally adds passed element to the end of arr. my_arr_1 to the end og my_arr as new element
// console.log(my_arr);

console.log(my_arr.concat(my_arr_1)) // concats: It concates the elements of passed array to base array as single level. And the concat function returns new array instead of modifying existing array unlike push

// Alternative of concat function is spread operator. Spread is more widely used than concat
const new_array = [...my_arr_1, ...my_arr]
console.log(new_array);



/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *  - Generally its recommeded to pass a finite depth
 *  - But if unaware then can pass Infinity to go to the extreme depth
 */
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


/**
 * If we want to convert something to array data type we can use - from()
 * - If something we have passed and from is not able to convert into array then will return []
 * 
 * Note: ****
 *  from method is designed to create a new array from an iterable object or an array-like structure
 */
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting - since we have not passed what we need to convert to array i.e. the keys or the values. So it will return []


/**
 * We can face a case where we have multiple variables or arrays.
 * of moethod returns a new array from a set of elements.
 */

let score1 = 100
let score2 = 200
let score3 = 300

/**
 * The Array.from method is designed to create a new array from an iterable object or an array-like structure, not from multiple separate values as arguments. In your code, you are passing three separate values (score1, score2, and score3) directly to Array.from, which is not the correct usage.
 * As a result the below will not work so use of
 */
// console.log(Array.from(score1, score2, score3)); 
console.log(Array.of(score1, score2, score3)); 
