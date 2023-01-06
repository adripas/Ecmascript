const button = document.getElementById('btn');

// añadir una acción al botton
button.addEventListener("click", async function() { // funcion anonimala acción de clic cuando alguien le de clic//concepto de async y await para hacer el llamado de ese import
    const module = await import ('./module.js');
    console.log(module);
    module.hello(); //ejecutar su función hello
});