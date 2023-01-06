// Se instala libreria npm install node-fetch par apoder usar fetch
import fetch from "node-fetch";
const response = await fetch('htpps://api.escuelajs.co/api/v1/products'); // se genera constante peticion para obtener datos.
const products = await response.json();   //resultante dle llamado, lo qeu recibimos lo transformamos en un objeto json
export {products}; // se exportan lso productos para usarlo en otro documento, volviendolo un modulo para usarse donde sea necesario

// ya no es necesario usar la palabra async, antes se tenia que encapsular una funcion que s epudiera llamar get prouct hacer logica y retorna product y exportar la funcion para poderla llamar y poder usar asyn y await 