<script setup>
const update = (message,evt)=>{
    console.log(message)
}
</script>
<template>
 <button @click="update('hello',$event)">Pass Data</button>
</template>