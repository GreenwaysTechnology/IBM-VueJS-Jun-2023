<script setup>
import { ref } from 'vue';
import Layout from './components/slots/DynamicLayout.vue'

const mySlot =ref('header')

</script>
<template>
    <h1>Vue Application</h1>
    <Layout>
        <template #[mySlot]>
            <!-- Slot content -->
            <h1>Header</h1>
        </template>
        <template #default>
            <p>This is body</p>
        </template>
        <template #footer>
            <h3>Footer</h3>
        </template>
    </Layout>
</template>