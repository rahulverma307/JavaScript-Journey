//Object is a collection of key:value pairs

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

