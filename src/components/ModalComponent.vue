<template>
    <b-overlay
            spinner-variant="danger"
            spinner-type="grow"
            spinner-small
            :show="$store.getters.loading" rounded="sm">
        <b-modal id="modal"
                 class="rounded-0"
                 centered
                 dialog-class="w-48"
                 hide-header-close
                 hide-footer>
            <b-tabs content-class="mt-3"
                    class="lays-tabs"
                    align="center">
                <b-tab title="Войти в личный кабинет" active>
                    <b-card class="bg-transparent border-0 pl-4 pr-4 w-80 mx-auto">
                        <login-form-component></login-form-component>
                    </b-card>
                </b-tab>
                <b-tab title="регистрация">
                    <b-card class="bg-transparent border-0">
                        <register-form-component></register-form-component>
                    </b-card>
                </b-tab>
            </b-tabs>
        </b-modal>
    </b-overlay>
</template>

<script>
    import LoginFormComponent from "./LoginFormComponent";
    import RegisterFormComponent from "./RegisterFormComponent";
    export default {
        name: "ModalComponent",
        components: {RegisterFormComponent, LoginFormComponent},
    }
</script>
<style scoped lang="scss">

</style>
