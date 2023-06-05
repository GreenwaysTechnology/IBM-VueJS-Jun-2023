<script setup>
import { reactive,computed } from 'vue';

const author = reactive({
    name: 'Subramanian',
    trainings: [
        'Vue 3 Basic to intermediate',
        'MicroServices using Spring Cloud'
    ]
})
//Computed Properties are going to replace imperative logic inside template
const isTrainingHandled = computed(() => {
    console.log('computed property')
    return author.trainings.length > 0 ? 'Yes' : 'No'
})
//normal is called for every template binding
const isTrainingDone = () => {
    console.log('normal method property')
    return author.trainings.length > 0 ? 'Yes' : 'No'
}

</script>
<template>
    <!-- Imperative logic -->
    <!-- Here we are writing biz logic inside template: we must avoid -->
<h1>{{author.name}}  Has handled Trainings ? {{author.trainings.length > 0 ? 'Yes' : 'No'}}</h1> 
 <!--Computed Property Syntax  -->
 <h1>{{author.name}}  Has handled Trainings {{ isTrainingHandled }}</h1>
 <!-- Normal Method syntax -->
 <h1>{{author.name}}  Has handled Trainings {{ isTrainingDone() }}</h1>

</template>