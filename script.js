const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

//fetch the data from pokemon api
let container = document.getElementById('container');
let pokemonProp;

function fetchPokemonProp(url){
    fetch(url)
    .then(data=>data.json())
    .then(json=>pokemonProp = json)
    .then(()=>{
        container.innerHTML += `
        <div class='pokemon'>
          <img src='${pokemonProp.sprites['front_default']}'>
          <h2>${pokemonProp.id}. ${pokemonProp.name}</h2>
          <ul>
          <li><strong>Weight</strong>: ${pokemonProp.weight}kg</li>
          <li><strong>Height</strong>: ${pokemonProp.height}m</li>
          </ul>
       <div>
          `
    });
    
}

fetch(url)
  .then(response=>response.json())
  .then(pokemon=>pokemon.results.forEach((poke, index)=>{
    fetchPokemonProp(poke.url);
}));

