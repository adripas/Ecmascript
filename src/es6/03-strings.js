// normal
let hello = 'Hello';
let world ='World';
let epicPhrase = hello + ' ' + world + '!';
//console.log(epicPhrase);

// template literals

let epicPhrase2 = ` ${hello} ${world}! `;
console.log(epicPhrase2);

//Multi-line string  forma en la qeu se peude trabajar ocn multiples lineas asignadas en un string para poder hacer saltos

let lorem = 'esto es string  \n' + 'esto es otra linea'; // no es amigble
//con es6:
let lorem2 = `Esta es una frase epica
la continuación de esa frase epica
`;
console.log(lorem);
console.log(lorem2);