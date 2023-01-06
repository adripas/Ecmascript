//pasar de un array a un objeto
const entries = new Map([["name","Adri"],["age",34]]);
console.log(entries);
console.log(Object.fromEntries(entries));