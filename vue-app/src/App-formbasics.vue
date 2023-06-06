<script setup>
import { ref } from 'vue';
const name = ref('default Name')
const mail = ref('')
const values = ref([])
const choice = ref("Male")

</script>
<template>
    <h1>Forms</h1>
    <p>{{ name }}</p>
    <input v-model="name" />
    <div>
        <h2>{{ mail }}</h2>
        <label id="mail">Mail</label>
        <textarea v-model="mail" />
    </div>
    <div>
        <h1>Course Information</h1>

        <input type="checkbox" id="frontend" value="frontEnd" v-model="values" />
        <label for="frontend">Front End</label>
        <input type="checkbox" id="backend" value="BackEnd" v-model="values" />
        <label for="backend">Back End</label>
        <input type="checkbox" id="devops" value="Dev Ops" v-model="values" />
        <label for="devoops">Dev Ops</label>
    </div>
    <div>
        {{ values }}
    </div>
    <div>
        <h1>Select any One</h1>
        <input type="radio" id="Male" value="Male" checked v-model="choice" />
        <label for="Male">Male</label>
        <input type="radio" id="Female" value="Female" v-model="choice" />
        <label for="Female">FeMale</label>
    </div>
    <div>
        {{ choice }}
    </div>
</template>
