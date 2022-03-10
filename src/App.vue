<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import '@esri/calcite-components/dist/calcite/calcite.css';
import '@arcgis/core/assets/esri/themes/light/main.css';
import config from '@arcgis/core/config'
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import WebMap from './components/WebMap.vue';
import { locate } from './data/locate'
import { findNearbyPlaces } from  './data/places'
import { onMounted } from 'vue'
import { useAppStore } from './store'
 
config.apiKey = import.meta.env.VITE_API_KEY as string

const app = useAppStore()

onMounted( async () => {
  const latlon = await locate();
  const response = await findNearbyPlaces(latlon, ['Coffee Shop']);
  // console.log("🚀 ~ file: App.vue ~ line 22 ~ onMounted ~ response", response)
  
  const items = response.map((a) => ({
      name: a.attributes['PlaceName'],
      address: a.attributes['Place_addr'],
      bearing: 'N',
      distance: 5,
      location: a.location
  }));
  app.items = items;
  // console.log("🚀 ~ file: App.vue ~ line 32 ~ onMounted ~ app.items", app.items)
})

</script>

<template>  
  <main>
    <section class="section">
      <WebMap v-if="app.isMap" />
      <Home v-else :items="app.items" />
    </section>
    <Footer />
  </main>
</template>

<style>
html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app, main, .section {
  height: 100%;
}
body {
  background: #333;
}
main {
  display: flex;
  flex-direction: column; 
  height: 100%;
}
nav {
  display: flex;
  width: 100%;

}
footer {
  flex-shrink: 0;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
