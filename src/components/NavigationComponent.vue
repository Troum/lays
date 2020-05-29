<template>
    <b-row class="m-0 p-0">
        <b-sidebar v-if="isMobile"
                   sidebar-class="lays-sidebar"
                   backdrop
                   id="sidebar" width="20vw" shadow>
            <div class="py-2 h-100">
                <b-navbar class="lays-navbar" style="z-index: 4">
                        <b-navbar-nav>
                                <b-nav-item class="d-flex justify-content-start" v-for="(item, i) in $store.getters.menu"
                                            active-class="underline"
                                            @click="scrollTo(item.anchor)"
                                            :key="i">
                                    <img class="lays-icon" :src="item.icon" :alt="item.title">
                                </b-nav-item>
                        </b-navbar-nav>
                </b-navbar>
            </div>
        </b-sidebar>
        <b-col class="m-0 p-0" cols="12">
            <b-navbar class="lays-navbar shadow-sm" toggleable="lg" style="z-index: 4">
                <b-container>
                    <b-navbar-toggle target="" class="border-0 lays-text-dark" v-b-toggle.sidebar></b-navbar-toggle>
                    <b-navbar-brand v-if="isMobile" class="mx-auto"
                                    @click="openAuthorization"
                                    active-class="underline">
                        <small class="text-uppercase font-weight-bold mr-1 lays-text-dark d-inline-block border-bottom red">
                            {{ $jwt.token() ? 'кабинет' : 'войти' }}
                        </small>
                        <img class="lays-icon" src="@/assets/enter.svg" alt="Войти">
                    </b-navbar-brand>
                    <b-collapse v-if="!isMobile" id="nav-collapse" is-nav>
                        <b-navbar-nav class="d-flex justify-content-between w-60 mx-auto">
                            <b-nav-item v-for="(item, i) in $store.getters.menu"
                                        active-class="underline"
                                        @click="$router.push({name: item.route}).catch(()=>{})"
                                        :key="i">
                                <img class="lays-icon" :src="item.icon" :alt="item.title">
                                <small>{{ item.title }}</small>
                            </b-nav-item>
                            <b-nav-item class="lays-auth ml-3"
                                        @click="openAuthorization"
                                        active-class="underline">
                                <small class="text-uppercase font-weight-bold mr-1">
                                    {{ $jwt.token() ? 'кабинет' : 'войти' }}
                                </small>
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
        props: {
          isMobile: Boolean
        },
        methods: {
            openAuthorization() {
                if (this.$jwt.token()) {
                    this.$router.push({name: 'cabinet'});
                } else {
                    this.$bvModal.show('modal')
                }
            },
            scrollTo(id) {
                if (this.$route.name.includes('cabinet')) {
                    this.$router.push({name: 'main'})
                } else {
                    document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"});
                }

            }
        }
    }
</script>

<style lang="scss">

</style>
