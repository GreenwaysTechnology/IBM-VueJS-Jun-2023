<script setup>
import { ref } from 'vue'
//declare variable and makes reactive
const counter = ref(10)
const inc = (evt) => {
    counter.value++
}
</script>
<template>
    <h1>Counter : {{ counter }}</h1>
    <button @click="inc">+</button>
</template>