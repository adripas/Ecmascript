// Se instala libreria npm install node-fetch par apoder usar fetch
import fetch from "node-fetch";
const response =  fetch('https://api.escuelajs.co/api/v1/products'); // se genera constante peticion para obtener datos.
const products = response.json();   //resultante del llamado, lo que recibimos lo transformamos en un objeto json

export { products }; // se exportan los productos para usarlo en otro documento, volviendolo un modulo para usarse donde sea necesario
// ya no es necesario usar la palabra async, antes se tenia que encapsular una funcion que se pudiera llamar get product hacer logica y retorna product y exportar la funcion para poderla llamarla donde sea necesario  y poder usar asyn y await

//cuando llega esa logia o puede procesar la información, por esto await nos  ayuda a que espera a que regrese la repsuesta del  servidor y luego transforma a un objetos que podemos usar y mostramelos.
// y eso del top leve sin el uso directo de async