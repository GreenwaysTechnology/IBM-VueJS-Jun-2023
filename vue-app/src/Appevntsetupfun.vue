<script>
export default {
    setup() {
        //Listener es 5 syntax:
        // function hai() {
        //     console.log('button is clicked')
        // }
        //Listener es 6 syntax:
        const hai = ()=>console.log('button is clicked')
        //return listener
        return {
            hai
        }
    }
}
</script>
<template>
    <button @click="hai">Hai</button>
</template>