// tipo especial de funcion que nos va a retornar una serie de valores segun el algoritmo definido

function* iterate(array){ // se identifica con *
    for (let value of array){ // iterando por cada uno de los elementos y los retorna con el yield, recordando su estado para mostrarlo con el next
        yield value; // retornar ese value
    }
}
const it = iterate (['Oscar', 'David', 'Ana','Ulises','Jennifer']); // generar una instancia de ese valor
console.log (it.next().value); // Mostrar valor  recuerda su estado (la primera vez ejecutó oscar y sigue al siguiente)
console.log (it.next().value);
console.log (it.next().value);
console.log (it.next().value);

// Ejercicio:

export function* getId() {
    // Tu código aquí 👈
    for (let value = 0; true; value++) {
      yield value;
      
    }
  }
  
  const id = getId();
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);