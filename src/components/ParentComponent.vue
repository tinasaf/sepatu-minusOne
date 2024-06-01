<template>
    <div class="p-4">
      <h1 class="text-2xl text-blue-500 mb-4">Parent Component</h1>
      <ChildComponent @change-text="handleTextChanged" />
      <p class="mt-4 text-blue-500">{{ text }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  const text = ref('This is Hindia');
  
  function handleTextChanged(newText) {
    text.value = newText;
  }
  </script>
  