<script setup>
import { ref } from 'vue'
//reactive
let count = ref(0)
//listener
const inc = () => {
    count.value++
}
//listener
const dec = () => {
    count.value--
}
const incrBy = (incrementer, evt) => {
    count.value += incrementer
}
</script>
<template>
    <div>
        <h1>Reative State Using Composition Api</h1>
        <!-- Inside template ref Object's value property is resolve automatically, we dont need to use .value -->
        <h1>Counter : {{ count }}</h1>
        <button @click="inc">+</button>
        <button @click="dec">-</button>
        <button @click="incrBy(10, $event)">IncrBy</button>
        <!-- Inline -->
        <button @click="count++">Inline</button>

    </div>
</template>