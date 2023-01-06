// Con esto se peuede validar diferentes filtros o reglas, validar contraseñas cumplan un objetivo, en un input tengamos un correo electronico valido Es una expresión regular.
const regex = /\b(Apple)+\b/g;  // filtrar una palabra, buscar la palabra apple dentro de un string
const fruit = 'Apple, banana kiwi, Apple, orange, ect. ect. ect.';

for (const match of fruit.matchAll(regex)){ // validar que ahi se encuentre n veces la palabra apple 
    console.log(match);
}