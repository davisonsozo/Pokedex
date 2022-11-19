

const pokeApi = {}


function convertPokeApiDetailToPokemon (pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)//funçao para mapear os slots
    const [type] = types // pegando o primeiro indice do slot  array desistructuring

    pokemon.types = types   
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

pokeApi.getPokemonDetail = (pokemon) => {
    // aqui dentro ele faz o fectch com as urls da lista depois converte e retorna  a lista inteira em json com detalhes
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)          
}


pokeApi.getPokemons = (offset , limit ) => {
  
const url = `https:\\pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` 


return fetch(url)
//primeiro fetch retorna lista inicial
.then((response) => response.json())
//converte em json
.then((jsonBody) => jsonBody.results)
//acessa a lista de pokemons dentro do jsonbody faz um map e pega todas as urls dentro para preparar a lista de detalhes
.then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
.then((detailRequests) => Promise.all (detailRequests))
.then ((pokemonsDetails) => pokemonsDetails)//aqui <---



}