
const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImage = document.querySelector(".pokemon_sprite img")

const pokemonTypeName = document.querySelector(".name_type")
const pokemonTypeIcon = document.querySelector(".icon_type")

const backgroundType = document.querySelector('.block_description_text')
const backgroundPerfil = document.querySelector('.background_pokemon_type img')
const iconPerfil = document.querySelector('.icon_pokemon_type img')

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
      const respostaAPISpecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
      
      if (respostaAPI.status === 200) {
        const dados = await respostaAPI.json();
        const dadosSpecie = await respostaAPISpecie.json();
        
        return {
          dados: dados,
          dadosSpecie: dadosSpecie
        };
      } else {
        throw new Error(`Erro ao buscar dados do Pokémon. Código de status: ${respostaAPI.status}`);
      }
    } catch (erro) {
      console.error('Erro:', erro.message);
      return {};
    }
  }
  
  const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
  
    const data = await fetchPokemon(pokemon);
  
    if (Object.keys(data).length > 0) {
      // Se existirem dados
      pokemonImage.style.display = 'block';
      pokemonNumber.innerHTML = data.dados.id;
      pokemonName.innerHTML = data.dados.name;
      pokemonImage.src = data.dados.sprites.versions['generation-v']['black-white']['animated']['front_default'];
      input.value = '';
      searchPokemon = data.dados.id;
      pokemonPeso.innerHTML = data.dados.weight;
      pokemonAltura.innerHTML = data.dados.height;
      pokemonHabilidade.innerHTML = data.dados.abilities[0].ability.name;

      pokemonTypeName.innerHTML = data.dados.types[0].type.name
     
      if (pokemonTypeName.innerHTML == 'electric'){
        iconPerfil.src = "img/type-background/eletrico-icon.svg"
        backgroundPerfil.src = "img/type-background/eletrico-type.svg"  
        backgroundType.style.background = 'var(--yellow)'
        pokemonTypeIcon.src = 'img/type-description-icons/eletric_icon.svg'
      }else if(pokemonTypeName.innerHTML == 'fire'){
        
      }

      const categoriaConsumida = data.dadosSpecie.genera.find(entry => entry.language.name === 'en').genus;
      const categoria = categoriaConsumida.replace(/Pokémon/g, '')
      pokemonCategoria.innerHTML = categoria;



    } else {
      // Se não existirem dados
      pokemonImage.style.display = 'none';
      pokemonName.innerHTML = 'Not found';
      pokemonNumber.innerHTML = '';
    }
  }
  

form.addEventListener('submit', (e) => {
    e.preventDefault()
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
