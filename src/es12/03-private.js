class user {
    //constructor
    constructor(name, age){
        this.name=name;
        this.age=age;
        console.log(age);
    }
    //metodos provados solo peuden ser accedidos dentro de la misma clase
    
    #speak(){
        return 'Hello' ;
    }
    greetng(){
        return `${this.speak()} ${this.name}`;
    }

get #uAge(){ //privado
    return this.age;
}

set #uAge(n){ //privado
this.age = n;
}
}

const bebeloper1 = new user('David',15); // asigna los valores en el constructor

console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=20);

