
fetch('https://pokeapi.co/api/v2/pokemon') 
.then((response) => {



if(response.status != 200) {
console.log ('oops.. tidak kena'+ response.status)
return
}
response.json().then(function(data) {   
const pokemons = data.results 
pokemons.forEach(pokemon => { 
document.getElementById('pokemonList')
.insertAdjacentHTML('beforeend',
`<li> ${pokemon.name} </li>`
)
})
})
}
)
promise1.catch((error) => {
    console.error(error);
  });
