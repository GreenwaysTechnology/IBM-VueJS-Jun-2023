<script setup>
import { reactive } from 'vue'
import PERSONS from './mock-data/persons'
const list = reactive(PERSONS)
</script>
<template>
    <div>
        <ul>
            <li v-for="person in list">
                <span>{{ person.name }}</span>
                <!-- <Friends :friends="person.friends" /> -->
                <ul>
                    <li v-for="friend of person.friends">
                        <span>{{ friend.name }}</span>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>