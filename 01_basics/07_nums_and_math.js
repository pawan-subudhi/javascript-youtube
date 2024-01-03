const score = 123
/**
 * The above score variable the js also considers or infers the variable to be number data type but in the bottom way approach we are explicitly mentioning to be Number type
 * Same as String it will create a Number object
 */
const balance = new Number(123)

console.log(balance.toString(), typeof balance.toString());
console.log(balance.toFixed(2)); // it will have fixed precision(i.e. digits after decimal) on lenght 2. In this case 123.00


const random_number = 1234344565
console.log(random_number.toLocaleString()) // bydefault the placement of , will be based on US standards
console.log(random_number.toLocaleString('en-IN')) // add , based on indian standards


// *********************************** MATHS *****************************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3)); // will give top value
console.log(Math.floor(4.3)); // will give the bottom value
console.log(Math.min(1,2,3,4,5));

/**
 * Math.random() - the value of this will range [0, 1)
 * 
 */
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log((Math.floor(Math.random() * 10) + 1));

/**
The below code generates a random integer within the inclusive range between `min` and `max` using the `Math.random()` function and some mathematical operations.

Let's break down the code step by step:

```javascript
const min = 10;
const max = 20;
```

Here, you've defined two variables, `min` and `max`, representing the minimum and maximum values for the desired range.

```javascript
console.log(Math.floor((Math.random() * (max - min + 1))) + min);
```

1. `Math.random()`: Generates a pseudo-random floating-point number in the range [0, 1). This is the base random value.

2. `(max - min + 1)`: Calculates the range of possible values. Adding 1 accounts for the inclusive upper bound.

3. `Math.random() * (max - min + 1)`: Multiplies the base random value by the range to get a new random value within the desired range.

4. `Math.floor(...)`: Rounds down the result to the nearest integer. This ensures that the final result is an integer.

5. `+ min`: Adds the minimum value to the result, effectively shifting the range from [0, max - min] to [min, max].

So, the entire expression generates a random integer within the inclusive range [min, max]. The `Math.floor()` ensures that the result is an integer, and the addition of `min` adjusts the range accordingly.
 */
const min = 10
const max = 20 

console.log(Math.floor((Math.random() * (max-min +1)))+min)