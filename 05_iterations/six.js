// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {          // forEach loop doesn't return anything
//     // console.log(item);                          //  and can't declare like this 
//     return item;
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )  

// const newNums = myNums.filter( (num) => {        // when you declare scope you have to type return
//     if(num > 4){
//         return num               // return num > 4
//     }
// } )

const newNums = []

// myNums.forEach( (num) => {
//        if(num > 4){
//          newNums.push(num)
//        }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One' , genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book 2' , genre: 'Non-Fiction', publish: 1971, edition: 2006},
    { title: 'Book 3' , genre: 'History', publish: 1985, edition: 2008},
    { title: 'Book 4' , genre: 'Science', publish: 1987, edition: 2009},
    { title: 'Book 5' , genre: 'thriller', publish: 1991, edition: 2010},
    { title: 'Book 6' , genre: 'History', publish: 2002, edition: 2011},
    { title: 'Book 7' , genre: 'Action', publish: 2000, edition: 2007}
]

let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == "History"
})

console.log(userBooks);


