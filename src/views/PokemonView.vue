<template>
    <div class="min-h-screen bg-sky-200 p-12">
      <PokemonList :pokemons="pokemons" @select="selectPokemon" />
      <div v-if="selectedPokemon" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg text-left w-64 md:w-80">
          <h2 class="text-xl md:text-2xl font-bold mb-2 md:mb-4">{{ selectedPokemon.name }}</h2>
          <img :src="selectedPokemon.sprites.front_default" alt="" class="w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 md:mb-4">
          <p class="text-sm md:text-base">Height: {{ selectedPokemon.height }}</p>
          <p class="text-sm md:text-base">Weight: {{ selectedPokemon.weight }}</p>
          <button @click="selectedPokemon = null" class="mt-2 md:mt-4 bg-sky-400 text-white py-1 px-3 md:py-2 md:px-4 rounded">Close</button>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import PokemonList from '../components/PokemonList.vue';
  import PokemonItem from '../components/PokemonItem.vue';
  
  const pokemons = ref([]);
  const selectedPokemon = ref(null);
  
  const selectPokemon = (pokemon) => {
    selectedPokemon.value = pokemon;
  };
  
  onMounted(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=18')
      .then(response => {
        const pokemonPromises = response.data.results.map(pokemon => axios.get(pokemon.url));
        Promise.all(pokemonPromises).then(responses => {
          pokemons.value = responses.map(r => r.data);
        });
      });
  });
  </script>
  