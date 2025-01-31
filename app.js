// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista donde se va a almacenar los nombres.
let amigos = [];
//Función para que el usuario pueda ingresar nombres y añadirlo a la lista.
function agregarAmigo(){
    //Para no agegar espacios, voy a corregir eso agregando trim()
    let nombre = document.getElementById('amigo').value.trim();
    
    //El return detiene la ejecución de la función en el punto en el que se encuentra. Cualquier código
    //  que venga después del return nunca se ejecutará.
    //return

    //Verificar si el input está vacío tanto en el valor como en el tipo de dato.
    if (nombre === ""){
        alert("Por favor inserte un nombre.");
        return;
    }

    //Verificar si el nombre ya existe en la lista.
    if (amigos.includes(nombre)){
        alert("Ya existe este nombre en sus amigos.");
    }

    //Agregar los nombres a la lista
    amigos.push(nombre);
    //Se llama a la función para que limpie la cajita.
    limpiarCaja();
    crearListaAmigos();
    console.log(nombre);
    return;
}

//Se crea esta función para que se limpie la caja cada vez que se da click a "agregar", se utilizó otra
//  forma de llamar por el id del input.
function limpiarCaja(){
    //let valorCaja=document.querySelector('#amigo');
    //valorCaja.value = '';
    document.querySelector('#amigo').value = "";
}

//Vamos ahora a mostrar los nombres en una lista html
function crearListaAmigos(){
    //obtener el elemento de la lista por medio del id de ul
    const lista = document.getElementById('listaAmigos');
    //Limpiar la lista existente cada vez que se agregue un nuevo elemento.
    lista.innerHTML = "";
    //Recorre toda la lista y la agrega a un elemento li
    for (let i = 0; i < amigos.length; i++) {
        //Creamos una caja con nombre li, y a esa caja cada elemento va  tener la etiqueta <li>
        const li = document.createElement('li');
        //Agregamos conetenido a la caja
        li.textContent = amigos[i];
        //Mostrar la lista en la página web.
        lista.appendChild(li);
      }
}


let resultado = document.getElementById('resultado');
//Función para sortear el amigo
function sortearAmigo(){
    //verificar si hay amigos en la lista, si no, notificarlo en la página.
    if (amigos.length === 0){
        resultado.textContent = "No hay más amigos para sortear."
	  return;
    }
    //Generar un índice aleatorio
	let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    // Obtener el nombre del amigo sorteado por medio de la posición de los amigos en la lista.
	let amigoSorteado = amigos[indiceAleatorio];
    //eliminar el amigo sorteado de la lista.
    amigos.splice(indiceAleatorio, 1);
    // Mostrar el resultado en el elemento HTML
	resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
}
