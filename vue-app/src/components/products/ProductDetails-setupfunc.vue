<!-- Props reading in Composition api using setup function -->
<script>
export default {
    props: ['title'],
    setup(props) {
       //how to access title prop inside setup function
       //state variable's initial value is based on the prop
       console.log(props.title)
    
    }
}
</script>
<template>
    <h2>{{ title }}</h2>
</template>