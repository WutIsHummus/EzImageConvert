<template>
  <div class="slider-container">
    <input type="range" :value="modelValue" @input="handleInput" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';


const props = defineProps({
  modelValue: Number,
  mainColor: String,

});
const emits = defineEmits(['update:modelValue']);

// Handler function that emits an update event
function handleInput(event: Event) {
  const input = event.target as HTMLInputElement;
  emits('update:modelValue', Number(input.value));
}
</script>

  
  <style scoped>
  input {
    --c:rgb(0, 220, 130);
    --g: 6px; 
    --l: 2px; 
    --s: 15px; 

    width: 150px;
    height: var(--s + 5); 
    --_c: color-mix(in srgb, var(--c), #000 var(--p,0%));
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    cursor: pointer;
    overflow: hidden;
  }
  
  input:focus-visible,
  input:hover {
    --p: 25%;
  }
  
  input:active,
  input:focus-visible {
    --_b: var(--s);
  }
  

  input[type="range" i]::-webkit-slider-thumb {
    height: var(--s);
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 0 0 0 var(--_b, var(--l)) inset var(--_c);
    border-image: linear-gradient(90deg, var(--_c) 50%, #ababab 0) 0 1/calc(50% - var(--l)/2) 100vw/0 calc(100vw + var(--g));
    -webkit-appearance: none;
    appearance: none;
    transition: .3s;
  }



  

  input[type="range"]::-moz-range-thumb {
    height: var(--s);
    width: var(--s);
    background: none;
    border-radius: 50%;
    box-shadow: 0 0 0 var(--_b, var(--l)) inset var(--_c);
    border-image: linear-gradient(90deg, var(--_c) 50%, #ababab 0) 0 1/calc(50% - var(--l)/2) 100vw/0 calc(100vw + var(--g));
    -moz-appearance: none;
    appearance: none;
    transition: .3s;
  }
  
  @supports not (color: color-mix(in srgb, red, red)) {
    input {
      --_c: var(--c);
    }
  }
  body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    gap: 40px;
    place-content: center;
    background: repeating-linear-gradient(-45deg, #fff 0 20px, #f9f9f9 0 40px);
  }
  </style>
  