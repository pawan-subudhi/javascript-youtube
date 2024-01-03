let my_date = new Date() // current instance of date and time

console.log(my_date, typeof my_date)

/**
 * Date : Date is an object in javascript. 
    JavaScript stores dates as number of milliseconds since January 01, 1970
    const myDate = new Date();
    console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
    
    - We can use various methods to convert this date into more readable value.
    console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

    console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
    console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
    console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

    console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
    console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

    console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
    console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z
 */
// console.log(my_date.toString()) // We can use various methods to convert this date into more readable value.


/**
 * the Date constructor takes paeram:
 *  - year
 *  - month : which starts from 0
 *  - date
 *  - hour
 *  - minute
 *  - seconds
 *  and many more can refer docs
 */
let custom_date = new Date(2023, 0, 23) 
// console.log(custom_date.toString())

let custom_date_1 = new Date(2023, 0, 23, 5, 10) 
// console.log(custom_date_1.toString())

/**
 * We have many other ways to declaere date
 *  - "YYYY-MM-DD"
 *  - "MM-DD-YYYY"
 */
let custom_date_3 = new Date("2024-01-03") 
// console.log(custom_date_3.toString())
let custom_date_4 = new Date("01-14-2024") 
// console.log(custom_date_4.toString())

let myTimeStamp = Date.now() // will return the timestamp(i.e. the milliseconds value till now staring from the Jan1 of some year refer docs)and not the proper date and time format unlike new Date()
console.log(myTimeStamp)
console.log(custom_date.getTime()) // will return the timestamp 
console.log(Math.floor(Date.now()/1000)) // convert the time stamp (in ms) to seconds