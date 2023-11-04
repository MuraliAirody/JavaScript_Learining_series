const nums = [1,2,3];

const total = nums.reduce(function(accumulator,currentValue){
      console.log(`Value stored in accumulator ${accumulator}`);
      return accumulator+currentValue
},1)

console.log("Total "+total);

const total2 = nums.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
console.log(total2);

//array of items added in a cart, at the bottom side display the total cart value
const shoppingCart = [
    {
        itemName: "Laptop",
        price: 50000
    },
    {
        itemName: "Jeans Pant",
        price: 999
    },
    {
        itemName: "mobile",
        price: 25000
    },
    {
        itemName: "Water Bottle",
        price: 129
    },
]
const totalAmount = shoppingCart.reduce((accumulator,item)=>accumulator+item.price,0)
console.log(totalAmount);

