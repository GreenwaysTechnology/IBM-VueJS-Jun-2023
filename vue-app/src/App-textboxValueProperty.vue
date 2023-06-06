<script setup>
import { ref } from 'vue';
const name = ref('Your Name')

const getInput = evt => {
    const value = evt.target.value
    name.value  =value
}
</script>
<template>
    <h1>Forms</h1>
    <div>
        <h2>Name : {{name }}</h2>
    </div>
    <input @input="getInput" :value="name" />
</template>
<style></style>