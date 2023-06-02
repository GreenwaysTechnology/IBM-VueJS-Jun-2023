<script setup>
import { reactive } from 'vue'
import TODOS from './mock-data/todos'
//Array reactive
const todos = reactive(TODOS)

</script>
<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <span>{{ todo.title }}</span>
            </li>
        </ul>

    </div>
</template>
