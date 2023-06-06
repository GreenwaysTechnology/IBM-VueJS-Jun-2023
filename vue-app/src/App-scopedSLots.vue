<script setup>
import Message from './components/slots/ScopedSlot.vue';

</script>
<template>
    <h1>Scoped Slots</h1>
    <Message v-slot="slotprops">
        {{slotprops.message}}
    </Message>
</template>