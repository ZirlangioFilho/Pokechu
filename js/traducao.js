const axios = require('axios');
const translate = require('google-translate-api');

const getPokemonFlavorText = async (pokemonId) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
    const flavorText = response.data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;
    return flavorText;
  } catch (error) {
    console.error('Erro ao obter o flavor text:', error.message);
    return null;
  }
};

const translateToPortuguese = async (text) => {
  try {
    const translation = await translate(text, { to: 'pt' });
    return translation.text;
  } catch (error) {
    console.error('Erro na tradução:', error.message);
    return null;
  }
};

// Exemplo de uso:
const pokemonId = 1;  // Id do Pokémon desejado
const flavorText = await getPokemonFlavorText(pokemonId);
const translatedFlavorText = await translateToPortuguese(flavorText);

console.log('Flavor Text em Inglês:', flavorText);
console.log('Flavor Text Traduzido para o Português:', translatedFlavorText);
