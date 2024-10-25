// singleton  ---->  constructor se banega
// Object.create       ||

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Umesh",
    "full name": "Umesh Rajput",
    [mySym] : "myKey1",
    age: 18,
    location: "Jaipur",
    email: "umesh@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])     // ways to access objects
// console.log(JsUser["full  name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "vivek@google.com"
// Object.freeze(JsUser)

// JsUser.email = "manish@google.com"
// JsUser.age = 20
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting)  
console.log(JsUser.greeting())  
console.log(JsUser.greeting2())  


