const btn = document.getElementById('bntFetchCharacters');
const div = document.getElementById( 'characters' );

btn.addEventListener( 'click', () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())  // Parse the JSON data
        .then((data) => renderCharacter(data.results));
});

function renderCharacter ( characters ) {
    characters.forEach(ch => {
        div.innerHTML += `<img src="${ch.image}" alt="${ch.name}"/>`;
    });
}