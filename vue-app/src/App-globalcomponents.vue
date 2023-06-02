<!-- Compostion api pattern using setup attribute -->
<script>
import Hello from './components/greeter/Hello.vue'
// import StatusBar from './components/global/StatusBar.vue'

export default {
    components: { Hello }
}
</script>
<template>
    <Hello></Hello>
    <StatusBar></StatusBar>
</template>