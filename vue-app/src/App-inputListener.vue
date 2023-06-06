<script setup>
const getInput = ()=>{
  console.log('event is triggered')    
}
</script>
<template>
    <h1>Forms</h1>
    <input @input="getInput" />
</template>
<style>

</style>