<script setup lang="ts">
    defineProps()
</script>

<script lang="ts">
    import NearbyCard, { ItemProps } from './NearbyCard.vue'
    import { locate } from '../data/locate'
    import { findNearbyPlaces } from  '../data/places'


    // const items:ItemProps[] = [
    //     {   
    //         name: 'Donut Shop',
    //         address: '555 Main St, 90210',
    //         bearing: 'SE',
    //         distance: 22.4
    //     },
    //     {
    //         name: 'Coffee Shop',
    //         address: '555 1st St, 90210',
    //         bearing: 'N',
    //         distance: 5.2
    //     },

    // ]

    const categories = [ 'Coffee Shop' ]
    export default {
        components: {
            NearbyCard
        },
        data() {
            return {
                items: []
            }
        },
        async mounted() {
            const latlon = await locate()
            const response = await findNearbyPlaces(latlon, categories)
            console.log("🚀 ~ file: Home.vue ~ line 40 ~ mounted ~ response", response)
            
        }
    }

</script>

<template>
    <div class="card-container">
        <calcite-list 
            v-for="{ name, address, distance, bearing } in items"
           >
        <NearbyCard 
            :name="name"
            :address="address"
            :distance="distance"
            :bearing="bearing"></NearbyCard>
        </calcite-list>
    </div>
</template>

<style scoped>
    .search-container {
        width: 100%;
    }
    .card-container {
        width: 100%;
    }
</style>
