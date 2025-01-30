// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log("Each char: "+greet);
}

//Maps

const m = new Map()
m.set('IN', "India")
m.set('USA', "America")
m.set('Fr', "France")
m.set('IN', "India")

// console.log(m);

for(const [key, value] of m){
    console.log(key, ':-', value);
    
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

// for (const [key , value] of myObj) {
//     console.log(key, ':-', value);             //this will not work in objects
    
// }


