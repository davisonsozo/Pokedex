


const pokemonList = document.getElementById('lista')
const loadMoreButton = document.getElementById('loadmore')
const newPage  = document.getElementById('newpage')

const limit = 8;
let offset = 0;


function loadPokemonItens (offset, limit) {
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => { 
        const newHtml = pokemons.map((pokemon) => `
        <li class="${pokemon.type}" id="conteiner">
        <span id="pokename">${pokemon.name}</span>
        <input type="button" value="Description" id="searchbtn" onclick="newwindow() " class="${pokemon.type} ${pokemon.name}">
        <ol id="atributool">
        ${pokemon.types.map((type) => `<li  class="atributo ${type}">${type}</li>`).join("")}
        </ol>
        <img src="imagens/pokebola.png" alt="imagem pokebola" id="pokebola">
        <img src="${pokemon.photo}" alt="${pokemon.name}"   id="newpage">
        </li>
    `).join('')
        pokemonList.innerHTML += newHtml

    })  
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset +=limit
    loadPokemonItens(offset, limit)
})

//efeitos popup
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.getElementById('closebtn')
const divDescription =document.querySelector('popup-content')



function newwindow () {
    popup.style.display = 'block'
    const botaoPesquisa = document.getElementById('searchbtn')
    const teste = botaoPesquisa.classList
    console.log(teste)
    

};









 closeButton.addEventListener('click', ()=> {
        popup.style.display = 'none'
 })
    
    
/*
 `
 <span  id="pokenamepopup">
    
 </span>
 <span id="pokenumber">#001</span>
 <ol class="atributopopol">
 <li class="atributopopli">Grass</li>
 <li class="atributopopli">Poison</li>
 </ol>
 <img src="imagens/pokebola.png" alt="imagem pokebola" id="pokebola">
 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=""   id="popupimg">
 </div>
 <div id="description">
 <div id="spancontent" >
     <h3>Ability</h3>
     <h5>Overgrow</h5>
     <h5>Chlorophyll</h5>
     <h3>Weight</h3>
     <h5>69Kg</h5>
 </div>
 `*/


/*
function newwindow () {
    popup.style.display = 'block'
    divDescription.innerHTML = `
    <span  id="pokenamepopup">
    ${pokemon.name}   
    </span>
    <span id="pokenumber">#001</span>
    <ol class="atributopopol">
    <li class="atributopopli">Grass</li>
    <li class="atributopopli">Poison</li>
    </ol>
    <img src="imagens/pokebola.png" alt="imagem pokebola" id="pokebola">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=""   id="popupimg">
    </div>
    <div id="description">
    <div id="spancontent" >
        <h3>Ability</h3>
        <h5>Overgrow</h5>
        <h5>Chlorophyll</h5>
        <h3>Weight</h3>
        <h5>69Kg</h5>
    </div>
    `}

*/













//caso precise que debbugar colocando este comando deixando o devtools aberto no navegardor ele gera um break point nesta função
//  --> debugger  <---