const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 5
let offset = 0;


function loadPokemonItens(offset, limit) {
    return pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <button class="charButton"><li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </div>
        </li></button>
    `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else{
        loadPokemonItens(offset, limit)
    }

})

loadPokemonItens(offset, limit).then(() => {
    const modal = document.getElementById('modalCharPokemon')
    const charButtons = document.getElementsByClassName('charButton')
    const closeWindow = document.getElementsByClassName('close')[0];


    for (let i=0; i < charButtons.length; i++) {
        charButtons[i].onclick = function() {
        modal.style.display = 'block';
        };
    }

    closeWindow.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(clickOutside) {
        if (clickOutside.target == modal) {
            modal.style.display = 'none';
        }
    };
});