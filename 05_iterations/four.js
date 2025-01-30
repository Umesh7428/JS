const myObj = {
    js : "javascript",
    cpp : "C++",
    swift : "swift by apple"
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js", "rb", "py", "java"]
for (const key in programming) {
//    console.log(key);     //it will give indexes as keys 
console.log(programming[key]);

   
}


//using for in for map checking if it works or not   --- not work because map is not iterable
const m = new Map()
m.set('IN', "India")
m.set('USA', "America")
m.set('Fr', "France")
m.set('IN', "India")

for (const key in m) {
   console.log(key);
   
}