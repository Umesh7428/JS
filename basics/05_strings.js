const name = "umesh"
const repoCount= 50

// console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherStr = gameName.slice(-8, 4)
console.log(anotherStr);

const newStringOne = "   Umesh   "
console.log(newStringOne)
console.log(newStringOne.trim())     // removes all the spaces
console.log(newStringOne.trimStart()) 
console.log(newStringOne.trimEnd())   

const url = "https://umesh.com/umesh%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('sem'))

console.log(gameName.split("-"))





