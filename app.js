let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(nombreAmigo == false) {
        alert("Debes añadir un amigo");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderAmigos();
}

function renderAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

//Siguiente bloque deshabilitado para uso de Splice
/*
function sortearAmigo(){
    if (amigo.length === 0){
        alert("No ingresaste amigos para el sorteo");
        return;
  
    }
    let amigoSecreto = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `EL amigo sorteado es: ${amigoSecreto}`;
}

*/
function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No quedan amigos por sortear");
        return;
    }

    let indice = Math.floor(Math.random() * amigo.length);
    let amigoSecreto = amigo.splice(indice, 1)[0]; // Extrae y elimina el amigo sorteado

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSecreto}`;
    
    renderAmigos(); // Actualiza la lista visible para reflejar los cambios
