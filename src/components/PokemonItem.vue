<!-- childcomponent -->
<template>
    <div class="bg-white p-4 rounded-lg shadow cursor-pointer" @click="handleClick">
      <img :src="image" alt="" class="w-32 h-32 mx-auto mb-4">
      <h2 class="text-xl font-semibold">{{ name }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      image: String,
      pokemon: Object // Tambahkan properti untuk seluruh objek Pokémon
    },
    methods: {
      handleClick() {
        this.$emit('select', this.pokemon); // Emit event dengan data Pokémon yang diklik
      }
    }
  };
  </script>
  