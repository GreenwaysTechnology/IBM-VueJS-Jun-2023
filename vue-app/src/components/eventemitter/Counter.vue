<!-- Child Component which emits events -->
<script setup>
import { ref } from 'vue';

//declare custom event
const emit = defineEmits(['onRequest'])

const counter = ref(0)
//listener to emit event
const onSend = () => {
    counter.value++
    //emit event along with data
    emit('onRequest', counter.value)
}
</script>
<template>
    <button @click="onSend">Send To Parent</button>
    <!-- Access emit method inside template refered with $ -->
    <button @click="$emit('onRequest', counter++)">Send To Parent</button>
</template>