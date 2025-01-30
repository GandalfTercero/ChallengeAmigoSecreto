// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista donde se va a almacenar los nombres.
let amigos = [];
 //Función para que el usuario pueda ingresar nombres y añadirlo a la lista.
function agregarAmigo(){
    //Me di cuenta que se pueden agegar espacios, voy a corregir eso agregando trim()
    let usuarioAmigos = document.getElementById('amigo').value.trim();
    
    //El return detiene la ejecución de la función en el punto en el que se encuentra. Cualquier código
    //  que venga después del return nunca se ejecutará.
    //return

    //Verificar si el input está vacío tanto en el valor como en el tipo de dato.
    if (usuarioAmigos === ""){
        alert("Por favor inserte un nombre.");
        return;
    }

    //Agregar los nombres a la lista
    amigos.push(usuarioAmigos);
    //Se llama a la función para que limpie la cajita.
    limpiarCaja();
    console.log(usuarioAmigos);
    return;
 }

 //Se crea esta función para que se limpie la caja cada vez que se da click a "agregar", se utilizó otra
 //  forma de llamar por el id del input.
function limpiarCaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value = '';
}
