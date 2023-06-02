<script setup>
import { reactive } from 'vue'
import TODOS from './mock-data/todos'
//Array reactive
const todos = reactive(TODOS)

</script>
<template>
    <div>
        <ul>
            <li v-for="(todo,index) in todos">
                <span>index {{index}} {{ todo.title }}</span>
            </li>
        </ul>

    </div>
</template>
