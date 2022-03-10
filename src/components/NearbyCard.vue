
<script setup lang="ts">
import { PropType } from 'vue'
import { ItemProps, LatLon } from '../interfaces'
import { useAppStore } from '../store';

const app = useAppStore()

const props = defineProps({
    name: String,
    address: String,
    bearing: String,
    distance: Number,
    location: Object as PropType<LatLon>
})

function  onClickHandler() {
    app.selectedItem =  props as ItemProps
    app.isMap = true
}

</script>
<template>
     <calcite-card @click="onClickHandler">
         <span slot="title"><calcite-icon icon="beaker"></calcite-icon>{{ name }}</span>
         <span slot="subtitle">
             {{ bearing }} 
             <small>{{ distance?.toFixed(2) }}m</small>
             <small>{{ address }}</small>
         </span>
    </calcite-card>
</template>


<style scoped>
.calcite-card {
    cursor: pointer;
}
</style>