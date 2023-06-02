<!-- State declaration inside options Api -->
<script>
export default {
    //state declaration using data function
    data() {
        // must return object
        return {
            firstName: 'Subramanian',
            lastName: 'Murugan'
        }
    }
}
</script>
<template>
    <!-- State binding Using interpolation -->
    <h2>Name {{firstName }} {{lastName }}</h2>
</template>