<script setup>
const onMouseEnter = (evt) => {
    console.log(evt)
    console.log('mouse enter')
}
const onMouseLeave = () => console.log('mouse leave')
</script>
<template>
    <div v-on="{mouseenter:onMouseEnter,mouseleave:onMouseLeave}">
        Touch
    </div>
    <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        Mouse 
    </div>
</template>
<style>

</style>