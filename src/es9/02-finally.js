//Que pasa cuando finaliza la promesa
const anotherFuncion = () => {
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Hey!!')
        }else{
            reject('Whoooops!');
        }
    })
}
anotherFuncion()
 .then(response =>console.log(response))
 .catch(err => console.log(err))
 .finally(()=>console.log('Finnaly'));// si el servidor no responde debe entregar la respuesta de que no ha terminado de procesos un error o el resultado esperado.