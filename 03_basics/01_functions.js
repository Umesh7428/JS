
function sayMyName(){
    console.log("U");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()

// function addTwoNumbers(x,y){

//     console.log(x + y);
// }


function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,4)
// console.log(result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Umesh"));

function calculateCartPrize(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrize(200, 400, 500, 2000));

const user = {
    username: "Manish",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)    //you can directly define user here also

//Array function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

