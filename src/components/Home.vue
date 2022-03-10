<script setup lang="ts">
import { defineCustomElements } from '@esri/calcite-components/dist/custom-elements';
import Search from '@arcgis/core/widgets/Search'
import NearbyList from './NearbyList.vue'
// import { ItemProps } from '../interface'

import {defineComponent, Prop} from 'vue'
import { PropType, onMounted, ref } from 'vue'
import { ItemProps } from '../interfaces';


defineCustomElements();

defineProps({
    items: Array as PropType<ItemProps[]>
})

const searchRef = ref<HTMLDivElement>()

onMounted(() => {
     const search = new Search({
                    container: searchRef.value,
                })
})

</script>

<script lang="ts">
    
    export default {
        components: {
            NearbyList,
        },
       props: {
           items: {
               type: Array as PropType<ItemProps[]>
           }
       },
    }

</script>

<template>
    <div class="search-container"></div>
    <div class="card-container">
        <!-- if isMap == true then <WebMapView /> else <NearbyList /> -->
        <NearbyList :items="items"/>
    </div>
</template>

<style scoped>
    .search-container {
        width: 100%;
    }
    .card-container {
        width: 100%;
        margin-bottom: 40px;
    }
</style>
