//  var c =400

let a =50

if(true){
    let a = 10
    const b = 20       // block scope
    var c = 30
    console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);      //global scope
console.log(a);


// const arr = [1,2,3,5,7,8];
// for(let i =0; i < arr.length; i++){
//     const el = arr[i];
//     console.log(el);
// }


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);      //it cannot be access because child can take icecream from you but you can't

    two()
}

// one()


if(true){
    const username = "Umesh"
    if(username === "Umesh"){
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



//  +++++++++++++++++++++   interesting   +++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num +1;
}



addTwo(5)                //hoisting  here can't be access before declaration of function as it is store in variable 
const addTwo = function(num){
     return num +2
}





