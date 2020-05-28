<template>
    <b-modal id="success-modal"
             class="w-30" centered>
        {{ content.success }}
    </b-modal>
</template>

<script>
    export default {
        name: "SuccessModal",
        data() {
            return {
                content: ''
            }
        },
        mounted() {
            this.$root.$on('success-modal', (data) => {
                this.content = data;
                this.$bvModal.show('success-modal')
            })
        }
    }
</script>

<style scoped>

</style>
