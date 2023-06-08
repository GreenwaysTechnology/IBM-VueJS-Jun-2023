<script setup>
import { ref } from 'vue'
const color = ref('yellow')
</script>
<template>
<h1 v-highlight.value="color">Hello</h1>
</template>