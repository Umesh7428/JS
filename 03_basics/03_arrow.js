
const user = {
    username: "Umesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to chai or code`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Manish"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Umesh"
//     console.log(this.username);         //not work here output - undefined
// }

// chai()

// const chai = function(){
//         let username = "Umesh"
//         console.log(this.username); 
// }


// //Arrow function
// const chai = ()  => {
//     let username = "Umesh"
//     console.log(this); 
// }

// chai()

//basic Arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))


// Imlicit return
// const addTwo = (num1, num2) =>  num1 + num2    // here no need to write return

// const addTwo = (num1, num2) => (num1 + num2)       // here no need to write return


const addTwo = (num1, num2) => ({username: "hitesh"})       // here no need to write return but for obj used parenthesis()


console.log(addTwo(3,4))

// const arr = [1,3,5,7,9]

// arr.forEach(() => {

// })