<!-- Default Slot -->
<script setup>
import Layout from './components/slots/DefaultLayout.vue'
</script>
<template>
    <h1>Vue Application</h1>
    <Layout>
           
      <template #default>
            <h1>Header</h1>
        </template>
        <template #main>
            <p>This is body</p>
        </template>
        <template #footer>
            <h3>Footer</h3>
        </template>
    </Layout>
</template>
<style>

</style>