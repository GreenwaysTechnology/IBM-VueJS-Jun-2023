<script setup>
import ChildSlot from './components/slots/ChildSlot.vue';
import Counter from './components/Counter.vue';

</script>
<template>
    <h2>Parent Component</h2>
    <!-- <ChildSlot/> -->
    <ChildSlot>
        <!-- Pass Plain Html Element -->
        <div>
            <h1>Slot content</h1>
        </div>
        <!-- Passing Component as Prop -->
        <Counter :counter="10"/>
    </ChildSlot>
    <!-- What if i dont pass any element as prop -->
    <ChildSlot>

    </ChildSlot>
</template>