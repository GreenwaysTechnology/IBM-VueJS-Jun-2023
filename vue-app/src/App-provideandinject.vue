<script setup>
import { provide, ref } from 'vue';
import Child1 from './components/propsdrilling/Child1.vue';

//state to be provided , so that we can access without passing as prop
const message = ref('Hello')
//provide api to share data to childrens
provide("message", message)
</script>
<template>
    <h1>Parent</h1>
    <Child1></Child1>
</template>
<style></style>