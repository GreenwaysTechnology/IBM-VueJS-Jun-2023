<script setup>
import { reactive } from 'vue'

//reactive object
const comments = reactive({
    like: 0,
    dislike: 0
})
//Proxy Object :which does not have property called "value" like ref
console.log(comments)
const onLike = () => {
    comments.like++
}

</script>
<template>
    <h1>Reactive State</h1>
    <h1>Like : {{ comments.like }} Dislike {{ comments.dislike }}</h1>
    <button @click="comments.like++">Like</button>
    <button @click="comments.dislike++">Dislike</button>
    <button @click="onLike">Like</button>

</template>