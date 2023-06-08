<!-- Api calls : Component life cycle methods -->
<script setup>
import { onMounted, ref } from 'vue';

//reactive variables to hold data
const data = ref(null)
const error = ref(null)

function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            //once data is ready, initalize the data variable
            data.value = todos
        }).catch(err => {
            console.log('error')
            //incase of error , initalize the error
            error.value = err
        })
}

onMounted(() => {
    //after dom ready,do api call
    fetchData();
})

</script>
<template>
    <div>
        <h1>Todo App : Api call</h1>
        <div v-if="error">Opps! Error Encountered</div>
        <div v-else-if="data">
            <div v-for="todo of data">
                <p>{{ todo.title }}</p>
            </div>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>