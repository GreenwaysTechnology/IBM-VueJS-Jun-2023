<script setup>
import { ref } from 'vue';
const toggle = ref('')
const truthyValue="Yes"
const falsyValue="No"
</script>
<template>
    <div>
        <input type="checkbox" :true-value="truthyValue" checked :false-value="falsyValue" v-model="toggle" />
        <label for="Toggle">Toggle</label>
    </div>
    <div>
        {{ toggle }}
    </div>
</template>