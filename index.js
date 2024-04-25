//constantes btn y div para 

const btn = document.getElementById('bntFetchCharacters');
const div = document.getElementById( 'characters' );

btn.addEventListener( 'click', () => {
    fetch('https://rickandmortyapi.com/api/character') //fetch es una peticion asincrona a la api de rick and morty 
    // decidimos como tratar la respuesta
        .then((response) => response.json())  // "then" o "luego" hacemos optenenos la respuesta en formato json
        .then((data) => renderCharacter(data.results)); // luego agarramos los datos que estan en json y llamamos a una funcion renderCharacter pasandole la data.results
});
// Insertamos imagenes por cada personaje
function renderCharacter ( characters ) { // la funcion tiene como parametro el array de personajes.
    characters.forEach(ch => { //recorremos  con un forEach los elementos del array en cada ch
        div.innerHTML += `<img src="${ch.image}" alt="${ch.name}"/>`; // en cada recorrido se agregara a la consatnte div una imagen de personajes mediante el "." y su clave image
    });
}