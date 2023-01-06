//declarando una clase:
class User{

};
//instancia de una clase va a usar a new user como función
//const newUser = new User();

class user {
    //metodos
    greeting(){
        return 'Hello';
    }
};
const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting())

// cosntructor: se inicalizan elemnetos de una clase

class user{ // cuando se crea una instancia va ejecutar o inicialaizar los elementos que están en el constructor.
    //Constructor 
    constructor(){
        console.log('Nuevo Usuario');
    }

    greeting(){
        return 'Hello';
    }
}

const david = new user(); // llama el cosntructor que inicialza o ejecuta los elementos contenidos en el


// this hace referencia al elemento padre que lo contiene.

class user {
    constructor(name){
        this.name = name;
    }

    //metodos

    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

//setters getters

class user {
    //constructor
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //metodos
    speak(){
        return 'Hello' ;
    }
    greetng(){
        return `${this.speak()} ${this.name}`;
    }

get uAge(){
    return this.age;
}

set uAge(n){
this.age = n;
}
}

const bebeloper1 = new user('David',15); // asigna los valores en el constructor

console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=20);




