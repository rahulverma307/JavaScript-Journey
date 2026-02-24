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
console.log(myData);//Undefined ForEach kuch bhi return nahi karta hia

//map
const receipt=order.map(o=>`${o.dish}: ${o.price} x ${o.qty} = ${o.price*o.qty}`)
console.log(receipt);

//Filter
const SpicyOrder=order.filter(o =>o.spicy)
console.log(SpicyOrder);// return only true value
const Highprice=order.filter(o=>o.price>16)
console.log(Highprice);

//reduce-convert a array into single value
//Ex.1
const totalRevenue=order.reduce((sum,order)=>{
     return sum + order.qty*order.price;
},0)
console.log(totalRevenue);

//Ex.2
const grouped=order.reduce((acc,order)=>{
    const category= order.spicy?"spicy":"mild";
     acc[category].push(order.dish) 
     return acc;
},{spicy:[],mild:[]})
console.log(grouped);
