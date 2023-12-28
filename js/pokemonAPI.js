
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
     
      switch (pokemonTypeName.innerHTML) {
        case 'grass':
          iconPerfil.src = "img/type-background/grama-icon.svg";
          backgroundPerfil.src = "img/type-background/grama-type.svg";
          backgroundType.style.background = 'var(--corGrama)';
          pokemonTypeIcon.src = 'img/type-description-icons/grama-icon.svg';
          break;

        case 'electric':
          iconPerfil.src = "img/type-background/eletrico-icon.svg";
          backgroundPerfil.src = "img/type-background/eletrico-type.svg";
          backgroundType.style.background = 'var(--corEletrico)';
          pokemonTypeIcon.src = 'img/type-description-icons/eletrico-icon.svg';
          break;
      
        case 'fire':
          iconPerfil.src = "img/type-background/fogo-icon.svg";
          backgroundPerfil.src = "img/type-background/fogo-type.svg";
          backgroundType.style.background = 'var(--corFogo)';
          pokemonTypeIcon.src = 'img/type-description-icons/fogo-icon.svg';
          break;

        case 'water':
          iconPerfil.src = "img/type-background/agua-icon.svg";
          backgroundPerfil.src = "img/type-background/agua-type.svg";
          backgroundType.style.background = 'var(--corAgua)';
          pokemonTypeIcon.src = 'img/type-description-icons/agua-icon.svg';
          break;
      
        case 'bug':
          iconPerfil.src = "img/type-background/inseto-icon.svg";
          backgroundPerfil.src = "img/type-background/inseto-type.svg";
          backgroundType.style.background = 'var(--corInseto)';
          pokemonTypeIcon.src = 'img/type-description-icons/inseto-icon.svg';
          break;

        case 'fairy':
          iconPerfil.src = "img/type-background/fada-icon.svg";
          backgroundPerfil.src = "img/type-background/fada-type.svg";
          backgroundType.style.background = 'var(--corFada)';
          pokemonTypeIcon.src = 'img/type-description-icons/fada-icon.svg';
          break;

        case 'ground':
          iconPerfil.src = "img/type-background/terrestre-icon.svg";
          backgroundPerfil.src = "img/type-background/terrestre-type.svg";
          backgroundType.style.background = 'var(--corTerrestre)';
          pokemonTypeIcon.src = 'img/type-description-icons/terrestre-icon.svg';
          break;

        case 'rock':
          iconPerfil.src = "img/type-background/pedra-icon.svg";
          backgroundPerfil.src = "img/type-background/pedra-type.svg";
          backgroundType.style.background = 'var(--corPedra)';
          pokemonTypeIcon.src = 'img/type-description-icons/pedra-icon.svg';
          break;

        case 'normal':
          iconPerfil.src = "img/type-background/normal-icon.svg";
          backgroundPerfil.src = "img/type-background/normal-type.svg";
          backgroundType.style.background = 'var(--corNormal)';
          pokemonTypeIcon.src = 'img/type-description-icons/normal-icon.svg';
          break;

        case 'poison':
          iconPerfil.src = "img/type-background/venenoso-icon.svg";
          backgroundPerfil.src = "img/type-background/venenoso-type.svg";
          backgroundType.style.background = 'var(--corVenenoso)';
          pokemonTypeIcon.src = 'img/type-description-icons/venenoso-icon.svg';
          break;

        case 'psychic':
          iconPerfil.src = "img/type-background/psiquico-icon.svg";
          backgroundPerfil.src = "img/type-background/psiquico-type.svg";
          backgroundType.style.background = 'var(--corPsiquico)';
          pokemonTypeIcon.src = 'img/type-description-icons/psiquico-icon.svg';
          break;

        case 'steel':
          iconPerfil.src = "img/type-background/metal-icon.svg";
          backgroundPerfil.src = "img/type-background/metal-type.svg";
          backgroundType.style.background = 'var(--corMetal)';
          pokemonTypeIcon.src = 'img/type-description-icons/metal-icon.svg';
          break;

        case 'dragon':
          iconPerfil.src = "img/type-background/dragao-icon.svg";
          backgroundPerfil.src = "img/type-background/dragao-type.svg";
          backgroundType.style.background = 'var(--corDragao)';
          pokemonTypeIcon.src = 'img/type-description-icons/dragao-icon.svg';
          break;

        case 'fighting':
          iconPerfil.src = "img/type-background/lutador-icon.svg";
          backgroundPerfil.src = "img/type-background/lutador-type.svg";
          backgroundType.style.background = 'var(--corLutador)';
          pokemonTypeIcon.src = 'img/type-description-icons/lutador-icon.svg';
          break;

        case 'dark':
          iconPerfil.src = "img/type-background/noturno-icon.svg";
          backgroundPerfil.src = "img/type-background/noturno-type.svg";
          backgroundType.style.background = 'var(--corNoturno)';
          pokemonTypeIcon.src = 'img/type-description-icons/noturno-icon.svg';
          break;
       
       
        case 'ghost':
          iconPerfil.src = "img/type-background/fantasma-icon.svg";
          backgroundPerfil.src = "img/type-background/fantasma-type.svg";
          backgroundType.style.background = 'var(--corFantasma)';
          pokemonTypeIcon.src = 'img/type-description-icons/fantasma-icon.svg';
          break;

        case 'ice':
          iconPerfil.src = "img/type-background/gelo-icon.svg";
          backgroundPerfil.src = "img/type-background/gelo-type.svg";
          backgroundType.style.background = 'var(--corGelo)';
          pokemonTypeIcon.src = 'img/type-description-icons/gelo-icon.svg';
          break;

          
          
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
