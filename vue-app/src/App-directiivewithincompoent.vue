<!-- Custom Directives -->
<script setup>
//Directive is plain javascript object,having directive lifecycle methods.
//Directive is used for dom mainpulation
//Directives are registered with "v-Directive" on any dom element

//simple directive
const vFocus = {
    //can have life cycle methods
    mounted: (element) => {
        //we can get dom element here, what ever you want you can do
        console.log(element)
        element.focus()
    }
}

</script>
<template>
    <input v-focus/>
</template>