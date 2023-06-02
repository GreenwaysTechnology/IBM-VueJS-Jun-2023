<!-- Options api event handling -->
<script>
export default {
    //  Listener 
    methods: {
        hello() {
            console.log('button is clicked')
        }
    }
}
</script>
<template>
    <button v-on:click="hello">Hello</button>
    <button @click="hello">Hai</button>
</template>