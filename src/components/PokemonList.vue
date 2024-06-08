<!-- parentcomponent -->
<template>
    <div>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="pokemon in pokemons" :key="pokemon.name">
          <PokemonItem :name="pokemon.name" :image="pokemon.sprites.front_default" :pokemon="pokemon" @select="handleSelect" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import PokemonItem from './PokemonItem.vue';
  
  export default defineComponent({
    components: {
      PokemonItem
    },
    props: {
      pokemons: {
        type: Array,
        required: true
      }
    },
    emits: ['select'], // Emit event untuk memilih Pokémon
    methods: {
      handleSelect(pokemon) {
        this.$emit('select', pokemon); // Emit event ke komponen induk dengan data Pokémon yang dipilih
      }
    }
  });
  </script>
  