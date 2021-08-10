$("catch-btn").click(function (){
    getPokemon(Math.floor(Math.random()* 100)+1)
});

function addPokemon (data){
    $("poke-container").append(`
    <div class="pokemon">
    <h3>${data.name}<br></h3>
    Type: ${data.types[0].type.name}<br>
    Top moves: <br> ${data.moves[0].move.name} <br>
    ${data.moves[1].move.name} <br>
    ${data.moves[2].move.name} <br>
    </div>      
    `)
}