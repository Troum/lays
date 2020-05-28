<template>
    <b-modal id="error-modal"
             @hidden="onClose"
             v-model="$store.getters.emitted.status"
             dialog-class="w-30" hide-footer centered>
        <div class="mb-3">
            {{ $store.getters.emitted.status ? $store.getters.emitted.content.error : content.error }}
        </div>
    </b-modal>
</template>

<script>
    export default {
        name: "ErrorModal",
        data() {
            return {
                content: ''
            }
        },
        mounted() {
            this.$root.$on('error-modal', (data) => {
                this.content = data;
                this.$bvModal.show('error-modal')
            })
        },
        methods: {
            onClose() {
                this.$store.commit('emitted', {status: false, content: ''})
            }
        }
    }
</script>

<style scoped>

</style>
