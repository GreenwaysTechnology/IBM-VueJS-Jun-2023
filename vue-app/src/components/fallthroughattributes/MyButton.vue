<!-- Disabling attribute inheritance using extra script block  -->
<script>
export default {
     inheritAttrs:true
}
</script>
<script setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log(attrs)
</script>
<template>
    <!-- <div> -->
    <button class="large">Click</button>
    <!-- </div> -->
    <!-- Access attributes inside template -->
    <!-- <div>{{ $attrs }}</div> -->
</template>
<!-- scoped attribute allows to override child specific styles -->
<style scoped>
/* .fancy-btn {
    color:red
} */
.large {
    color: rgb(78, 228, 188);
}
</style>
