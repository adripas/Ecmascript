// Tenemos un numero y queremos regresar un valor por defecto
const anotherNumber = null;
const validate = anotherNumber ?? 5;  // si este valor es nulo decirle que haga algo en este caso qeu ponga un 5
console.log(validate);