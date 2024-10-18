const accountId = 144553
let accountEmail = "umesh@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState ;

// accountId = 2     // not allowed

accountEmail = "hhsg@gmail.com"
accountPassword ="98766"
accountCity = "goa"
console.log("accountId");

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

