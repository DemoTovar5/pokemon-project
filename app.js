function getPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
            console.log(pokeData)
        })
}