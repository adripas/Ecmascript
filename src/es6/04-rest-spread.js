// Existen dos tipos las de los objetos y la de lso arrays
//arrays destructuring
let fruits = ['Apple','Banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);

//object destructuring
let user = {username:'Oscar', age :34};
let {username, age} = user;
console.log(username, user.age);


//spread operator  para objeto  unir dos objetos sin modificar el original

let person = {name:'Oscar', age:28};
let country ='MX';

let data ={...person, country};

console.log(data);

// rest en una función

function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,1,2,3);