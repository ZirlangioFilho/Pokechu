

const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImage = document.querySelector(".pokemon_sprite img")

const pokemonPeso = document.querySelector(".peso")
const pokemonAltura = document.querySelector(".altura")
const pokemonCategoria = document.querySelector(".categoria")
const pokemonHabilidade = document.querySelector(".habilidade")

const form = document.querySelector(".form")
const input = document.querySelector(".search")

const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
    try {
        const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        
        if (respostaAPI.status === 200) {
            const dados = await respostaAPI.json();
            return dados;
        } else {
            throw new Error(`Erro: Não foi possível obter os dados. Código de status: ${respostaAPI.status}`);
        }
    } catch (erro) {
        console.error(erro);
        // Você pode escolher lidar com o erro de uma maneira específica ou lançá-lo novamente
        throw erro;
    }
}


const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon)

    if(data){
    pokemonImage.style.display = 'block'
    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    input.value = ''
    searchPokemon = data.id
    pokemonPeso.innerHTML = data.weight
    pokemonAltura.innerHTML = data.height
    pokemonHabilidade.innerHTML = data['abilities']['0']['ability']['name']
   }else{
    pokemonImage.style.display = 'none'
    pokemonName.innerHTML = 'Not found'
    pokemonNumber.innerHTML = ''
   } 
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
   renderPokemon(input.value.toLowerCase())
})

btnPrev.addEventListener('click', () =>{
    if(searchPokemon > 1){
    searchPokemon -= 1
    renderPokemon(searchPokemon)
    }
})

btnNext.addEventListener('click', () =>{
    searchPokemon += 1
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)
