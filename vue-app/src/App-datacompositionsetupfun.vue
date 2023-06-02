<!-- Composition api using setup function -->
<script>
export default {
    setup() {
        //declare variables
        const firstName = 'Subramanian'
        const lastName = 'Murugan';
        const sayWelcome = () => {
            return "Hello"
        }
        const address = {
            city: 'Coimbatore',
            state: 'Tamil Nadu'
        }
        //must return state object
        return {
            firstName, lastName, sayWelcome, address
        }
    }
}
</script>
<template>
    <h3> {{ sayWelcome() }} {{ firstName }} {{ lastName }}</h3>
    <h3>Address {{ address.city }} , {{ address.state }}</h3>
</template>