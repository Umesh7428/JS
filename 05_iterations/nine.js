const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc, cur){
//     console.log(`acc: ${acc} and cur: ${cur}`);
    
//     return acc + cur;
// },0)

// by Arror fnct
const myTotal = myNums.reduce( (acc, cur) => acc + cur,0 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price ),0)
console.log(priceToPay);
