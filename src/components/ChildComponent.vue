<template>
  <div class="px-4 py-2 shadow-blue-100">
    <input 
      type="text" 
      v-model="inputText" 
      placeholder="Change sesuai your mind" 
      class="px-4 py-2 border rounded w-80 mr-2"
    />
        <button @click="changeText" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Change Brow
        </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['change-text']);
const inputText = ref('');

function changeText() {
  emit('change-text', inputText.value);
  inputText.value = ''; // Mengosongkan input text setelah mengirim nilai
}
</script>
