<template>
    <b-row class="m-0 p-0">
        <b-col class="m-0 p-0" cols="12">
            <b-navbar class="lays-navbar shadow" fixed="top" toggleable="lg">
                <b-container>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav="is-nav">
                        <b-navbar-nav class="d-flex justify-content-between w-60 mx-auto">
                            <b-nav-item v-for="(item, i) in $store.getters.menu"
                                        active-class="underline"
                                        @click="$router.push({name: item.route}).catch(()=>{})"
                                        :key="i">
                                <img class="lays-icon" :src="`./icons/${item.icon}`" :alt="item.icon">
                                <small>{{ item.title }}</small>
                            </b-nav-item>
                            <b-nav-item class="lays-auth ml-3"
                                        @click="openAuthorization"
                                        active-class="underline">
                                <small class="text-uppercase font-weight-bold mr-1">войти</small>
                                <img class="lays-icon" src="@/assets/enter.svg" alt="Войти">
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-container>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "NavigationComponent",
        methods: {
            openAuthorization() {
                if (this.$jwt.token()) {
                    this.$handler.warning({response: {data: {warning: 'Вы уже авторизовались'}}})
                } else {
                    this.$bvModal.show('modal')
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
