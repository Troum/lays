<template lang="pug">
    
</template>

<script>
    export default {
        name: "Main",
        mounted() {
            window.location.hash.includes('auth') ? this.$bvModal.show('modal') : null;
        }
    }
</script>

<style scoped>

</style>
