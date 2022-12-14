var lastName="David";
lastName='Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit='kiwi';
console.log(fruit);

// no se peude reasignar un valor con const
const animal= 'Dog';
animal='cat';
console.log(animal);

const fruits = () =>{
    if (true){
        var fruit1 = 'Apple'; // function scope
        let fruit2 ='Kiwi'; // block scope solo pueden ser accedidas dentro del if.
        const fruit3 ='Banana'; // block scope solo pueden ser accedidas dentro del if.
    }
    console.log(fruit1);
    console.log(fruit2);  
    console.log(fruit3);
}

fruits();
