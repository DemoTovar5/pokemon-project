function getPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function(allpokemon){
            allpokemon.results.forEach(function(pokemon){
                getPokemonData(pokemon);
            })
        })
}

