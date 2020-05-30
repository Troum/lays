<template>
    <validation-observer ref="observer" v-slot="{ passes }">
        <b-form @submit.prevent="passes(submit)">
            <validation-provider name="Номер телефона" rules="required" v-slot="{errors}">
                <b-form-group label-for="login">
                    <b-form-input class="lays-input" id="login" type="text" v-mask="{mask: '+375 99 999 99 99', greedy: true}"
                                  placeholder="номер мобильного телефона"
                                  autocomplete="off" :class="errors[0] ? 'border-danger lays-input' : 'lays-input'"
                                  v-model="form.login"></b-form-input>
                </b-form-group>
                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                </transition>
            </validation-provider>
            <validation-provider name="Пароль" rules="required" v-slot="{errors}">
                <b-form-group class="my-2" label-for="password">
                    <b-form-input id="password" type="password"
                                  :class="errors[0] ? 'border-danger lays-input' : 'lays-input'"
                                  placeholder="пароль" v-model="form.password"></b-form-input>
                </b-form-group>
                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                </transition>
            </validation-provider>
            <b-form-group class="mt-4 text-center">
                <b-button class="lays-login" type="submit" variant="success">Войти</b-button>
            </b-form-group>
        </b-form>
    </validation-observer>
</template>

<script>
    export default {
        name: "LoginFormComponent",
        data() {
            return {
                form: {
                    login: null,
                    password: null
                }
            }
        },
        methods: {
            submit() {
                this.$httpService.post('api/v1/auth/login', this.$fdService.fill(this.form))
                    .then(response => {
                        this.$bvModal.hide('modal');
                        this.$handler.success(response);
                        this.$jwt.store(response.data.token);
                        this.$store.commit('authentication', response.data.token);
                        this.$router.push({name: 'cabinet'});
                        this.$root.$emit('loggedIn', true);
                    })
                    .catch(error => {
                        this.$handler.warning(error)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
