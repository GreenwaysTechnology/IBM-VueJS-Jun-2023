<!-- Props inside Compostion api using setup attribute -->
<script setup>
// const props = defineProps(['title'])
// const { title } = defineProps(['title'])
const props = defineProps({
    title: {
        type:String,
        default: 'Default Props'
    }
})
props.title = 'Customer Page'
</script>

<template>
    <h1>{{props.title}}</h1>
    <!-- <h1>{{ title }}</h1> -->
</template>