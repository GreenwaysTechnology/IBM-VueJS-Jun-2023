<script setup>
import { ref } from 'vue';
const myvariable =ref('hello')
</script>
<template>
    <header>
        <slot name="header">
            <h1>Default Header</h1>
        </slot>
    </header>
    <main>
        <slot>
            <p>This is default Main</p>
        </slot>

    </main>
    <footer>
        <slot name="footer">
            <h1>Default Footer</h1>
        </slot>
    </footer>
</template>
<style>

</style>