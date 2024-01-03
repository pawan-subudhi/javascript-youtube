const name = "Pawan"
const repo_count = 50

// console.log(name + repo_count + " random"); // outdated syntax

// the modern way to concatinate strings is using `` (this modern ways helps with - string interpolation i.e. gives placeholder using ${} and inject the variables directly)
console.log(`Hello my name is ${name} and my repo conunt is ${repo_count}`);


/**
 * There are 2 ways to declare a string in JS
 * 1. const name = "Pawan"
 *  - It simply returns a string
 * 
 * 2. const name_again = new String("Pawan")
 *  - this approach returns a String object, where the string which we have passed each letter will be a key-value pair
 *  - where key is index and value is letter
 *  - It will have many other properties like length and many methods which will be present inside prototype
 *  - Knowing these methods will help in excelling the String
 */

const game_name = String("pawanc")
console.log(game_name[0]);
console.log(game_name.toUpperCase());
console.log(game_name.charAt(0));
console.log(game_name.indexOf('c'));

console.log(game_name.split(''));

const new_string = game_name.substring(0, 4) // start is inclusive and end is exclusive
console.log(new_string);

/**
 * Unlike slice the substring doesn't take negative values
 * 
 * In JavaScript, both `substring` and `slice` are string methods used for extracting portions of a string. However, they have some differences in terms of how they handle the start and end indices.

    ### `slice(startIndex, endIndex)`:
    - The `slice` method extracts a section of a string and returns a new string.
    - The `startIndex` is the index at which extraction begins.
    - The `endIndex` is the index (exclusive) at which extraction ends. If `endIndex` is omitted, or if it's greater than the string's length, it extracts up to the end of the string.
    - It can accept negative indices, where `-1` refers to the last character, `-2` refers to the second-to-last character, and so on.
  
    Example:
    ```javascript
    const str = 'abcdefgh';
    console.log(str.slice(2, 5)); // Outputs: 'cde'
    console.log(str.slice(-3));  // Outputs: 'fgh'
    ```

    ### `substring(startIndex, endIndex)`:
    - The `substring` method is similar to `slice` but has some differences in how it handles indices.
    - The `startIndex` is the index at which extraction begins.
    - The `endIndex` is the index (exclusive) at which extraction ends. If `endIndex` is omitted or is greater than `startIndex`, it is treated as if it were `startIndex`.
    - It does not accept negative indices.

    Example:
    ```javascript
    const str = 'abcdefgh';
    console.log(str.substring(2, 5)); // Outputs: 'cde'
    console.log(str.substring(5, 2)); // Outputs: 'cde' (startIndex is treated as endIndex)
    ```

    ### Summary of Differences:
    - Both methods return a new string.
    - `slice` accepts negative indices, allowing extraction from the end of the string.
    - `substring` does not accept negative indices.
    - If `startIndex` is greater than `endIndex`:
    - `slice` returns an empty string.
    - `substring` swaps the values of `startIndex` and `endIndex`.

    In most cases, either method can be used, but the choice depends on the specific requirements of your use case.
 */
const another_new_string = game_name.slice(-3, -1)
console.log(another_new_string);


const new_string_1 = "    pawan  "
console.log(new_string_1.trim())

const url = "https://pawan.com/pawan%20kumar"
console.log(url.replace('%20', ' '))
console.log(url.includes('pawan'))