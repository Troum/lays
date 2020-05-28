<template>
    <validation-observer ref="observer" v-slot="{ passes }">
        <b-form @submit.prevent="passes(submit)">
            <b-row class="m-0 p-0">
                <b-col class="m-0 p-0" cols="6">
                    <b-row style="margin-top: 24px">
                        <b-col class="mx-auto my-2 p-0" cols="10">
                            <validation-provider name="Фамилия" rules="required" v-slot="{errors}">
                                <b-form-group label-for="surname">
                                    <b-form-input id="surname" type="text" placeholder="фамилия*" autocomplete="off"
                                                  :class="errors[0] ? 'border-danger lays-input' : 'lays-input'" v-model="form.surname"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <validation-provider name="Имя" rules="required" v-slot="{errors}">
                                <b-form-group label-for="name">
                                    <b-form-input id="name" type="text" placeholder="имя*" autocomplete="off"
                                                  :class="errors[0] ? 'border-danger lays-input' : 'lays-input'" v-model="form.name"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <b-form-group label-for="second-name">
                                <b-form-input id="second-name" placeholder="отчество*"
                                              class="lays-input"
                                              autocomplete="off" v-model="form.secondName"></b-form-input>
                            </b-form-group>

                            <b-form-group class="lays-sex">
                                <label class="text-uppercase d-block font-weight-bold" style="color: #DB2A1E">Пол:</label>
                                <p-radio name="sex" class="p-svg p-curve p-bigger" @click.native="setSex"
                                         v-model="sex.male" :value="sex.male">
                                    <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
                                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                              style="stroke: #DB2A1E;fill: none"></path>
                                    </svg>
                                    <span class="font-weight-bold pt-1">Мужской</span>
                                </p-radio>
                                <p-radio name="sex" class="p-svg p-curve p-bigger" @click.native="setSex"
                                         v-model="sex.female" :value="sex.female">
                                    <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
                                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                              style="stroke: #DB2A1E;fill: none"></path>
                                    </svg>
                                    <span class="font-weight-bold">женский</span>
                                </p-radio>
                            </b-form-group>
                            <b-form-group label-for="birthday">
                                <b-form-input class="lays-input" id="birthday" type="text"
                                              v-mask="{mask: '99.99.9999', greedy: true}"
                                              placeholder="дата рождения"
                                              autocomplete="off"
                                              v-model="form.login"></b-form-input>
                            </b-form-group>
                            <validation-provider name="Номер телефона" rules="required" v-slot="{errors}">
                                <b-form-group label-for="phone">
                                    <b-form-input id="phone" type="text"
                                                  v-mask="{mask: '+375 99 999 99 99', greedy: true}"
                                                  placeholder="+375 YY XXX XX XX*"
                                                  autocomplete="off" :class="errors[0] ? 'border-danger lays-input' : 'lays-input'"
                                                  v-model="form.phone"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <validation-provider name="Адрес e-mail" rules="required" v-slot="{errors}">
                                <b-form-group label-for="email">
                                    <b-form-input id="email" type="email"
                                                  placeholder="адрес электронной почты*"
                                                  autocomplete="off" :class="errors[0] ? 'border-danger lays-input' : 'lays-input'"
                                                  v-model="form.email"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <b-form-group class="lays-rules-agreement">
                                <p-check class="p-svg p-curve p-bigger" v-model="agreement">
                                    <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
                                        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                              style="stroke: #DB2A1E;fill: none"></path>
                                    </svg>
                                    <span>
                                        ознакомлен с <a class="lays-rules-agreement" href="#">&nbsp;правилами</a>
                                    </span>
                                </p-check>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="m-0 p-0" cols="6">
                    <p class="text-uppercase mb-0 ml-4 font-weight-bold lays-post-address" style="color: #DB2A1E">почтовый адрес:</p>
                    <b-row class="mb-0">
                        <b-col class="mx-auto my-2 p-0" cols="10">
                            <b-form-group label-for="postcode">
                                <b-form-input id="postcode" type="text"
                                              v-mask="{mask: '999999', greedy: true}"
                                              class="lays-input"
                                              placeholder="почтовый индекс"
                                              autocomplete="off" v-model="form.postcode"></b-form-input>
                            </b-form-group>
                            <validation-provider name="Область" rules="required" v-slot="{errors}">
                                <b-form-group label-for="region">
                                    <b-form-input id="region" type="text"
                                                  placeholder="область*" autocomplete="off"
                                                  :class="errors[0] ? 'border-danger lays-input' : 'lays-input'" v-model="form.region"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <b-form-group label-for="district">
                                <b-form-input id="district" type="text"
                                              class="lays-input"
                                              placeholder="район"
                                              autocomplete="off" v-model="form.district"></b-form-input>
                            </b-form-group>
                            <validation-provider name="Населенный пункт" rules="required" v-slot="{errors}">
                                <b-form-group label-for="place">
                                    <b-form-input id="place" type="text"
                                                  placeholder="населенный пункт*"
                                                  autocomplete="off" :class="errors[0] ? 'border-danger lays-input' : 'lays-input'"
                                                  v-model="form.place"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <validation-provider name="Улица" rules="required" v-slot="{errors}">
                                <b-form-group label-for="street">
                                    <b-form-input id="street" type="text" placeholder="улица*"
                                                  autocomplete="off" :class="errors[0] ? 'border-danger lays-input' : 'lays-input'"
                                                  v-model="form.street"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <validation-provider name="Номер дома" rules="required" v-slot="{errors}">
                                <b-form-group label-for="house">
                                    <b-form-input id="house" type="text" placeholder="дом*"
                                                  autocomplete="off" :class="errors[0] ? 'border-danger lays-input' : 'lays-input'"
                                                  v-model="form.house"></b-form-input>
                                </b-form-group>
                                <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <div class="text-danger"><small>{{ errors[0] }}</small></div>
                                </transition>
                            </validation-provider>
                            <b-form-group label-for="building">
                                <b-form-input id="building" type="text" class="lays-input"
                                              placeholder="корпус" autocomplete="off" v-model="form.building"></b-form-input>
                            </b-form-group>
                            <b-form-group label-for="apartment">
                                <b-form-input id="apartment" type="text" class="lays-input"
                                              placeholder="номер квартиры" autocomplete="off" v-model="form.apartment"></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <small class="text-lowercase" style="color: #DB2A1E">
                                    <strong>* обязательное поле для заполнения</strong>
                                </small>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="m-0" cols="12">
                    <b-form-group class="text-center my-2">
                        <b-button :disabled="!agreement"
                                  type="submit" class="lays-register">Зарегистрироваться</b-button>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
    </validation-observer>
</template>

<script>
    import PrettyRadio from 'pretty-checkbox-vue/radio';
    import PrettyCheck from 'pretty-checkbox-vue/check';
    export default {
        name: "RegisterFormComponent",
        components: {
          'p-radio': PrettyRadio,
          'p-check': PrettyCheck,
        },
        data() {
            return {
                formatted: '',
                sex: {
                    female: 1,
                    male: 2
                },
                agreement: false,
                form: {
                    email: null,
                    password: null,
                    password_confirmation: null,
                    phone: null,
                    name: null,
                    surname: null,
                    secondName: null,
                    postcode: null,
                    region: null,
                    district: null,
                    place: null,
                    street: null,
                    house: null,
                    building: null,
                    apartment: null,
                    birth: null,
                    sex: null,
                }
            }
        },
        methods: {
            submit() {
                this.$httpService.post('api/v1/auth/register', this.$fdService.fill(this.form))
                .then(response => {
                    this.$root.$emit('success-modal', response.data.success);
                })
                .catch(error => {
                    this.$root.$emit('error-modal', error.response.data.error);
                })
            },
            setSex(event) {
                this.form.sex = event.target.value;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-link {
        color: #28a745;
    }
</style>
