<script setup>
import { ref } from 'vue';
const name = ref('Your Name')

</script>
<template>
    <h1>Forms</h1>
    <div>
        <h2>Name : {{name }}</h2>
    </div>
    <!-- Bind via inline Listener -->
    <input @input="evt=>name=evt.target.value" :value="name" />
</template>
<style></style>