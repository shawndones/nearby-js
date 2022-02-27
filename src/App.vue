<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import '@arcgis/core/assets/esri/themes/light/main.css';
import '@esri/calcite-components/dist/calcite/calcite.css';
import Home from './components/Home.vue';

import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath(`${location.href}./assets/components/`);
defineCustomElements();

</script>

<template>
  <main>
    <Home
      :items="[]"
    />
    <footer>
      <aside>
        <nav>
          <calcite-button appearance="outline" width="full" label="Home">
              <calcite-icon icon="home"></calcite-icon>
          </calcite-button>
          <calcite-button appearance="outline" width="full" label="Map">
              <calcite-icon icon="layer"></calcite-icon>
          </calcite-button>
        </nav>
      </aside>
    </footer>
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

}
</style>
