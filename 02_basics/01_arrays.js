/**
 * 2 ways to create array:
 *   - using []
 *   - using Array constructor
 */

const arr_1 = [1,2,3,4,"Pawan"]
const arr_2 = new Array(1,2,3,"Pawan")

// console.log(arr_2[0]);

// methods in Arrays
arr_2.push(6) // add element to the end of array
arr_2.pop() // removed the last element of the array

arr_2.unshift(0) // adds element to the start of the array. very time consuming as it shifts all the array elements and then adds to the start
arr_2.shift() // removes element from the start of array
// console.log(arr_2)

// console.log(arr_2.includes(2)) // checks if the element is present in the array or not
// console.log(arr_2.indexOf(2)) // returns the index of element in the array, if not present returns -1

// console.log(arr_2.join()); // join() reutns the string version of array by concatinating the elements using the delimeter passed to join. By default will join using ,

/**
 * SLICE VS SPLICE
 * 
 * slice:
 *  - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 * 
 * splice:
 *  - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 *  
 */
console.log("A", arr_2);
const new_arr = arr_2.slice(1,3)
console.log(new_arr)
console.log("B", arr_2)

const new_arr_1 = arr_2.splice(1,3)
console.log(new_arr_1)
console.log("C", arr_2)