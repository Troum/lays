<template>
    <b-modal id="modal"
             class="rounded-0"
             centered
             :dialog-class="isMobile ? 'w-96' : 'w-48'"
             hide-header-close
             hide-footer>
        <b-tabs content-class="mt-3"
                class="lays-tabs"
                align="center">
            <b-tab title="Войти в личный кабинет" active>
                <b-card :class="isMobile ? 'bg-transparent border-0 pl-1 pr-1 w-100 mx-auto' : 'bg-transparent border-0 pl-4 pr-4 w-80 mx-auto'">
                    <login-form-component></login-form-component>
                </b-card>
            </b-tab>
            <b-tab title="регистрация">
                <b-card class="bg-transparent border-0">
                    <register-form-component :isMobile="isMobile"></register-form-component>
                </b-card>
            </b-tab>
        </b-tabs>
    </b-modal>
</template>

<script>
    import LoginFormComponent from "./LoginFormComponent";
    import RegisterFormComponent from "./RegisterFormComponent";
    export default {
        name: "ModalComponent",
        props: {
            isMobile: Boolean
        },
        components: {RegisterFormComponent, LoginFormComponent},
    }
</script>
<style scoped lang="scss">

</style>
