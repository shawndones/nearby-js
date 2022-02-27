

<script setup lang="ts">

    // Setup gives access to global define props
    export interface ItemProps {
        name: string;
        address: string;
        bearing: string;
        distance: number;
    }

    // expect to get properties to this component based on interace of ItemProps
    defineProps<ItemProps>();

</script>

<template>
     <calcite-card>
         <span slot="title">{{ name }}</span>
         <span slot="subtitle">
             {{ bearing }}
             <small>{{ distance.toFixed(2) }}m</small>
             <small>{{ address }}</small>
         </span>
    </calcite-card>
</template>
<style scoped>
    
</style>