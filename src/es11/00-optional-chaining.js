//poder validar y no romper el flujo de nuestra aplicación
const users = {
    gndx:{
        country:'MX'
    },
    ana:{
        country:'CO'
    }
}
//console.log(users.gndx);
console.log(users?.bebeloper?.country);//pregunta si existe la propiedad para validar y garantiza entregar el valor undefined si no existe