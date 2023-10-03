const accountId=1212
let emailId="test@gmail.com"
var name="test"
accountState="active"
let address

// accountId = 125
// console.log(accountId);
/*
  Note: 
      TypeError: Assignment to constant variable.
      var is not prefer due to block scope issue and functional scope issue
*/

console.table([accountId,emailId,accountState,address])