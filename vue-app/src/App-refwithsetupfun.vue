<script>
import { ref } from 'vue'

export default {
    setup() {
        //declare variable
        let counter = ref(10)
        console.log(counter)
        console.log(counter.value)
        const inc = (evt)=> {
               counter.value++
        }
        return {
            counter,inc 
        }
    }
}
</script>
<template>
    <h1>Counter : {{ counter }}</h1>
    <button @click="inc">+</button>
</template>