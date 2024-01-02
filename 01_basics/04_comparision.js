// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" >= 1); // true : as js implicitly does the type conversion
// console.log("02" >= 1); // true : as js implicitly does the type conversion

/**
 * The reason is that the equality check (==) and the comparision check (>, <, >=, <=) works differently
 * 
 * The expected output of `console.log(null == 0);` is `false`. Reason below:
 * In JavaScript, the `==` operator performs type coercion, which means it tries to convert operands to the same type before making the comparison. When comparing `null` and `0` using the `==` operator, they are not of the same type, but the operator still performs type coercion to make them comparable.
 * 
 * In this case, `null` gets coerced to `0` during the comparison, so the expression becomes `0 == 0`. As a result, the comparison is true, and the output would be `true`. However, there's an exception to this rule when comparing `null` or `undefined` to a number using the `==` operator. In such cases, the result is always `false`. Therefore, the output of `console.log(null == 0);` is `false`.
 * 
 * 
 * 
 * if null >= 0 is true then why null == 0 is false. Reason below:
 * Good question! The difference lies in how the equality (`==`) and greater than or equal to (`>=`) operators handle null during type coercion.
 * 
 * In the case of `0 == 0`, the equality operator (`==`) performs type coercion, but there's a specific rule for `null` and `undefined` when compared with a numeric value. When comparing `null` or `undefined` to a number using `==`, the result is always `false`. This is a special case designed to avoid unexpected behavior.
 * 
 * On the other hand, when using the greater than or equal to (`>=`) operator, it doesn't have the same special case for `null` and `undefined` when compared to a number. So, in `null >= 0`, `null` is coerced to `0`, and the comparison becomes `0 >= 0`, which is true.
 * 
 * In summary:
 *  - `0 == 0` returns `false` because of the special case handling for `null` in the equality operator.
 *  - `null >= 0` returns `true` because the greater than or equal to operator doesn't have the same special case and performs type coercion by converting `null` to `0`.
 */
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true


console.log(undefined == 0); // false