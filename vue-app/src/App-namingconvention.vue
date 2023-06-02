<!-- Compostion api pattern using setup attribute -->
<script>
import Hello from './components/greeter/Hello.vue'
export default {
    components: { Hello }
}
</script>
<template>
    <!-- Pascal case -->
    <Hello></Hello>
    <StatusBar></StatusBar>
    <!-- Keb-case -->
    <hello/>
    <status-bar/>
</template>