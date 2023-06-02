<script setup>
import ProductDetails from './ProductDetails.vue';

const producttitle= "This is Product Page!"
const numberTitle=13
</script>
<template>
    <h2>Product Master</h2>
    <hr>
    <!-- title is prop -->
    <ProductDetails title="Product Details Page"/>
    <!-- No Prop is supplied -->
    <ProductDetails/>
    <!-- Pass prop as variable -->
    <ProductDetails :title="producttitle" />
    <ProductDetails :title="numberTitle" />


</template>