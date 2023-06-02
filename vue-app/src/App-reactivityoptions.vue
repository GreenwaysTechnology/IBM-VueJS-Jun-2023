<!-- Options api with state and mutation -->
<script>
export default {
    data() {
        //return state: reactive state
        return {
            counter: 0
        }
    },
    methods: {
        //listener which updates reactive state 
        inc() {
            return this.counter++
        }
    }
}
</script>
<template>
    <h1>Counter : {{ counter }}</h1>
    <button @click="inc">+</button>
</template>