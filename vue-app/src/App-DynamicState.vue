<!-- State as prop -->
<script setup>
import { ref } from 'vue';
import  Counter  from './components/Counter.vue'
//state 
const counter = ref(10)
const inc = () => counter.value++
</script>
<template>
    <div>
        <!-- pass state and listener as prop -->
        <Counter :counter="counter" :inc="inc" />
    </div>
</template>
