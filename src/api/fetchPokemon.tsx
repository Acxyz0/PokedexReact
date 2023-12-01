// https://pokeapi.co/api/v2/pokemon/bulbasaur

import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/utils";

// Primero, obtén una lista de todos los Pokémon
export async function fetchAllPokemon(limit: number): Promise<any> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

// Luego, obtén los detalles de un Pokémon específico
export async function fetchPokemonDetails(url: string): Promise<PokemonDetails> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();

  const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
        result.name.toLowerCase()
      )}.gif`,
    hp: result.stats[0]?.base_stat,
    attack: result.stats[1]?.base_stat,
    defense: result.stats[2]?.base_stat,
  };
  return pokemon;
}

// Ahora puedes usar estas funciones para obtener todos los Pokémon
async function getAllPokemonDetails() {
  const allPokemon = await fetchAllPokemon(898); // Ajusta este número según la cantidad de Pokémon que desees obtener

  // Y luego obtener los detalles de cada uno
  const allPokemonDetails = await Promise.all(
    allPokemon.results.map((pokemon: any) => fetchPokemonDetails(pokemon.url))
  );
  return allPokemonDetails;
}

getAllPokemonDetails().then((allPokemonDetails) => {
  console.log(allPokemonDetails);
});

