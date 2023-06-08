<script setup>
// import composable 
import { useMouseTracker } from './composable/useMouseTracker'
const { x, y } = useMouseTracker()
</script>
<template>
    Mouse position is at: {{ x }}, {{ y }}
</template>