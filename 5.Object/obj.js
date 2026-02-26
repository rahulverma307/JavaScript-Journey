//1.Object is a collection of key:value pairs

const hero={
    name:"Luna",
    level:12,
    mana:100
}
console.log(hero);// { name: 'Luna', level: 12, mana: 100 }
// all return array
const Keys=Object.keys(hero);
console.log(Keys); //[ 'name', 'level', 'mana' ]

const Values=Object.values(hero)
console.log(Values);//[ 'Luna', 12, 100 ]

const Enteries=Object.entries(hero)
console.log(Enteries);//[ [ 'name', 'Luna' ], [ 'level', 12 ], [ 'mana', 100 ] ]
// why all of these return array because objects directly loop-friendly nahi hote,
//  lekin arrays easily loop ho sakte hain map, filter, forEach,..

//2.Freeze
Object.freeze(hero)// We cannot change anything.
/**
 * no add
 * no delete
 * no edit
 */


//3.Object.seal=>we can  only edit  exiting property only

const dc={
    name:"Superman",
    level:100,
    mana:100
}
Object.seal(dc)
dc.name="Thor"
dc.age=45// no added
console.log(dc);


//4.Object.hasOwnProperty=>show property exist in object or not
console.log(dc.hasOwnProperty("mana"));//true

//5.Object.getOwnPropertyDescriptor()=>This Show property details.
 
console.log(Object.getOwnPropertyDescriptor(dc,"name"));
/**
 * {
  value: 'Thor',
  writable: true,=>mean edit hoga ya nahi
  enumerable: true,=>loop chalega ya nahi ye bata hai (Example-false-no loop,true-loop run)
  configurable: false=>can not delete
}
 */

//6. Object.defineProperty()=>we can add own property condiotion
let marvel={
name:"iron Man"
}

Object.defineProperty(marvel,"Details",{
    value:"High-power,Super-Fast",
    writable:false,
    enumerable:true,
    configurable:true
})
/**
 * writable:false → value cannot change
   enumerable:true → shows in loop
   configurable:false → cannot delete
 */
console.log(marvel);

//8 Convert Array → Object


const priceList=[
 ["A",3000],
 ["B",4000]
]

let priceListObj=Object.fromEntries(priceList)
console.log(priceListObj);//{ A: 3000, B: 4000 }
console.log(priceList);





