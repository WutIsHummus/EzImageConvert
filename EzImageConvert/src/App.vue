<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import RangeSlider from './components/RangeSlider.vue';


const settingsDefault = {
  optimization: 0,
}
const settingsState = useStorage('vue-use-local-storage', settingsDefault)


</script>


<template>
  <header>
    <h1>Settings</h1>
    <div class="wrapper">
      <hr width="1" size="500"/>
    </div>
  </header>

  <main>
    <div class="settings-container">
      <div class="option">
        <RangeSlider v-model="settingsState.optimization"/>
        <p>Optimization: {{ settingsState.optimization }}%</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 17vw;
  line-height: 1.5;
}

header .wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}


.settings-container {
  max-width: 50vw; 
  margin: 0 auto; 
  padding: 20px;
}

.option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
}

.option p {
  white-space: nowrap;
  flex-shrink: 0;
  margin-bottom: 5px;
}
</style>