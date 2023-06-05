<!-- Parent Component which listens events from child -->
<script setup>
import { ref } from 'vue';
import Counter from './components/eventemitter/Counter.vue'

const parentValue = ref(0)

//Listener gets called when ever child component emits "onRequest" event
//We can access data in the listener 
const getData = (data) => {
    parentValue.value = data
}
</script>
<template>
    <h1>Parent</h1>
    <h2>Child Data {{parentValue}}</h2>
    <hr>
    <Counter @on-request="getData" />
</template>
<style>

</style>