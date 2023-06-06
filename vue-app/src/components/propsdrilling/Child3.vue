<script setup>
import { inject } from 'vue';
//access the data provided by parent component
const message = inject('message')
const companyName = inject('companyName','Your Company')
</script>
<template>
    <h1>Child3</h1>
    <h1>Data From the Parent {{message}} </h1>
    <h1>Global Data : {{ companyName }}</h1>
</template>
<style>

</style>