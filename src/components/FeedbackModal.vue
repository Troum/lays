<template>
    <b-modal id="feedback"
             centered
             :dialog-class="isMobile ? 'w-96' : 'w-60'"
             hide-header hide-footer>
        <b-row class="m-0 p-0">
            <b-col class="m-0 p-2 pt-4 text-center">
                <p class="font-weight-bold text-uppercase lays-text">
                    <span class="border-bottom red">
                        Обратная связь
                    </span>
                </p>
            </b-col>
        </b-row>
        <b-row class="m-0 p-0">
            <b-col class="m-0 p-3" cols="5">
                <validation-observer ref="observer" v-slot="{ passes }">
                    <b-form @submit.prevent="passes(submit)">
                        <validation-provider name="Имя" rules="required" v-slot="{ errors }">
                            <b-form-group>
                                <b-form-input
                                        v-model="form.name"
                                        class="lays-input" type="text"
                                        placeholder="Имя*"></b-form-input>
                            </b-form-group>
                            <transition v-if="errors" enter-active-class="animated fadeIn"
                                        leave-active-class="animated fadeOut">
                                <div class="text-danger"><small>{{ errors[0] }}</small></div>
                            </transition>
                        </validation-provider>
                        <validation-provider name="E-mail" rules="required|email" v-slot="{ errors }">
                            <b-form-group>
                                <b-form-input
                                        v-model="form.email"
                                        class="lays-input" type="email"
                                        placeholder="E-Mail*"></b-form-input>
                            </b-form-group>
                            <transition v-if="errors" enter-active-class="animated fadeIn"
                                        leave-active-class="animated fadeOut">
                                <div class="text-danger"><small>{{ errors[0] }}</small></div>
                            </transition>
                        </validation-provider>
                        <b-form-group>
                            <b-form-input
                                    v-model="form.phone"
                                    class="lays-input" type="text"
                                    v-mask="{mask: '+375 99 999 99 99', greedy: true}"
                                    placeholder="Телефон +375 YY XXX XX XX"></b-form-input>
                        </b-form-group>
                        <validation-provider name="E-mail" rules="required|max:300" v-slot="{ errors }">
                            <b-form-group>
                                <b-form-textarea
                                        rows="6"
                                        v-model="form.message"
                                        class="lays-textarea"
                                        placeholder="Сообщение (0/300 символов)"></b-form-textarea>
                            </b-form-group>
                            <transition v-if="errors" enter-active-class="animated fadeIn"
                                        leave-active-class="animated fadeOut">
                                <div class="text-danger"><small>{{ errors[0] }}</small></div>
                            </transition>
                        </validation-provider>
                        <b-form-group class="text-center">
                            <b-button class="lays-feedback" type="submit">отправить</b-button>
                        </b-form-group>
                    </b-form>
                </validation-observer>
            </b-col>
            <b-col class="d-flex justify-content-center align-items-center m-0 p-3" cols="7">
                <img class="img-fluid" src="@/assets/chips.png" alt="Lays Feedback" style="max-width: 80%">
            </b-col>
        </b-row>
    </b-modal>
</template>

<script>
    export default {
        name: "FeedbackModal",
        props: {
            isMobile: Boolean
        },
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    phone: null,
                    message: null
                }
            }
        },
        mounted() {
            this.$root.$on('feedback', () => {
                this.$bvModal.show('feedback');
            })
        },
        methods: {
            submit() {

            }
        }
    }
</script>

<style scoped>

</style>
