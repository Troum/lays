<template>
    <b-modal id="error-modal"
             @hidden="onClose"
             v-model="$store.getters.emitted.status"
             :dialog-class="isMobile ? 'w-96' : 'w-30'" hide-footer centered>
        <div class="mb-5 text-center">
            {{ $store.getters.emitted.status ? $store.getters.emitted.content.error : ''  }}
        </div>
    </b-modal>
</template>

<script>
    export default {
        name: "ErrorModal",
        props: {
            isMobile: Boolean
        },
        mounted() {
            this.$root.$on('error-modal', () => {
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
