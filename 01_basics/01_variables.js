const account_id = 123 // const - can't be modified further
/**
 * In JS for const we have only 1 way to declare, for variables we have 2 ways to declare i.e. let and var
 * 
 * var is not used anymore because in the earlier versions of js, js wasn't having any idea of scope (block and function)
 * and to overcome this issue of scope in the newer versions of JS let was introduces to resolve the scope issue
 * 
 * Note:
 *  Prefer not to use var, because of block and function scope
 */
let account_email = "pawan@gmail.com"
var account_password = "qwe123"
let account_state // in js if we just declare and not define, then js assigns undefined value

account_city = "bbsr" // in js not defining whether its const / var / let is also allowed but its not recommended way

// account_id = 234 // NOT ALLOWED - since its cont js won't allow to do so
account_email = "kumar@gmail.com"
account_password = "1243"
account_city = "blr"

console.log(account_id)
console.table([account_id, account_email, account_password, account_city, account_state])