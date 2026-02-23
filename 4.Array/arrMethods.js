const order=[
     {dish:"momo",price:14,spicy:false,qty:3},
     {dish:"pizza",price:8,spicy:true,qty:2},
     {dish:"samosa",price:9,spicy:false,qty:1},
     {dish:"pasta",price:18,spicy:true,qty:2},
     {dish:"Frenchfries",price:12,spicy:true,qty:3},
];

//forEach
// forEach apne andar callback(fn) accept karta hia
const myData=order.forEach((order,idx)=>{
     console.log(`#${idx+1}: ${order.qty} x ${order.dish}`);
     
})
console.log(myData);// indefined ForEach kuch bhi return nahi karta hia

//map
const receipt=order.map(o=>`${o.dish}: ${o.price} x ${o.qty} = ${o.price*o.qty}`)
console.log(receipt);

//Filter
const SpicyOrder=order.filter(o =>o.spicy)
console.log(SpicyOrder);// return only true value

//reduce

const totalRevenue=order.reduce((sum,order)=>{
     
},0)
