//Manejo de errores
try{
    hello();
}catch(error){
    console.log(error);
}

//Error personalizado, Mensaje personalizado:
try {
    anotherFn();
}catch{
    console.log('Esto es un error')
}