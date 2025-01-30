const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(item){
//    console.log(item);
    
// } )          // callback fnc me name nhi hota


// // Arrow fnct
// coding.forEach( (item) => {
//       console.log(item);

// })

//or you can give reference of function
// function printMe(item){
//     console.log(item); 
// }

// coding.forEach(printMe)      //reference of func

  
// +++++++++  u can use index or arr also in for each loop
// coding.forEach(  (item, index,arr) => {
//     console.log(item, index, arr );
    
// })


const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "jv"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item);        //it will give individual obj 
    console.log(item.langName);
})
