<template>
    <b-modal id="success-modal"
             dialog-class="w-32" hide-footer centered>
        <div class="mb-3 text-center">
            <p class="lays-text">
                {{ content.title ? content.title : 'Успешно!' }}
            </p>
            <p class="lays-text-dark">
                {{ content.success }}
            </p>
        </div>
    </b-modal>
</template>

<script>
    export default {
        name: "SuccessModal",
        props: {
            isMobile: Boolean
        },
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
