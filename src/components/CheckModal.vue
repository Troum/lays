<template>
    <b-overlay
            spinner-variant="danger"
            spinner-type="grow"
            spinner-small
            :show="$store.getters.loading" rounded="sm">
        <b-modal id="check-modal" hide-header-close hide-footer centered dialog-class="w-80">
            <template v-slot:modal-header>
                <p class="d-block mx-auto mt-4 mb-0 font-weight-bold text-uppercase border-bottom red">Регистрация нового чека</p>
            </template>
            <validation-observer ref="observer" v-slot="{ passes }">
                <b-form @submit.prevent="passes( submit )" class="pl-2 pr-2">
                    <validation-provider name="Фото чека" rules="required" v-slot="{errors, validate}">
                        <b-form-group class="lays-file">
                            <b-form-file
                                    @input="addFile"
                                    @change="validate"
                                    accept="image/*"
                                    class="lays-input"
                                    v-model="form.file"
                                    :state="Boolean(form.file)"
                                    placeholder="Загрузить фото чека*"
                            ></b-form-file>
                            <div class="lays-file-icon">
                                <font-awesome-icon :icon="['fas', 'camera']" ></font-awesome-icon>
                            </div>
                        </b-form-group>
                        <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                            <div class="text-danger"><small>{{ errors[0] }}</small></div>
                        </transition>
                    </validation-provider>
                    <validation-provider name="Дата совершения покупки" rules="required" v-slot="{errors}">
                        <b-form-group class="lays-date">
                            <datepicker ref="programaticDate"
                                        format="dd.MM.yyyy"
                                        v-model="form.bought_date"
                                        placeholder="дата совершения покупки*" input-class="lays-input" :language="ru"></datepicker>
                            <div @click="openDate" class="lays-dropdown-icon">
                                <font-awesome-icon :icon="['fas', 'caret-down']" ></font-awesome-icon>
                            </div>
                        </b-form-group>
                        <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                            <div class="text-danger"><small>{{ errors[0] }}</small></div>
                        </transition>
                    </validation-provider>
                    <validation-provider name="Время совершения покупки" rules="required" v-slot="{errors}">
                        <b-form-group class="lays-time">
                            <vue-timepicker
                                    @close="setTime"
                                    v-model="form.bought_time"
                                    close-on-complete hide-clear-button
                                    hour-label="Часы" minute-label="Минуты" second-label="Секунды"
                                    placeholder="время совершения покупки" input-class="lays-input" format="HH:mm:ss"></vue-timepicker>
                            <div class="lays-dropdown-icon">
                                <font-awesome-icon :icon="['fas', 'caret-down']" ></font-awesome-icon>
                            </div>
                        </b-form-group>
                        <transition v-if="errors" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                            <div class="text-danger"><small>{{ errors[0] }}</small></div>
                        </transition>
                    </validation-provider>
                    <b-form-group class="lays-rules-agreement text-center">
                        <p-check class="p-svg p-curve p-bigger" v-model="agreement">
                            <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
                                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                      style="stroke: #DB2A1E;fill: none"></path>
                            </svg>
                            <span class="font-weight-bold">ознакомлен с <a class="lays-rules-agreement" href="#">&nbsp;правилами</a></span>
                        </p-check>
                    </b-form-group>
                    <b-form-group>
                        <p class="d-block text-center font-weight-bold" style="color: #9F0024">Выбрать приз:</p>
                        <b-row class="m-0 p-4">
                            <b-col class="d-flex justify-content-center align-items-center"
                                   cols="3"
                                   :id="`prize-${i}`"
                                   v-for="(prize, i) in $store.getters.prizes"
                                   :data-prize="prize.value"
                                   :style="`background: ${prize.color} url('./prizes/${prize.circle}') center no-repeat; background-size: 150%`"
                                   :key="prize.image" @click="checkPrize(i)"
                            >
                                <img :src="`./prizes/${prize.image}`" :alt="prize.image" class="img-fluid" style="filter: drop-shadow(-10px 5px 8px rgba(0, 0, 0, .34))">
                            </b-col>
                        </b-row>
                    </b-form-group>
                    <b-form-group class="text-center">
                        <b-button class="lays-register-check" type="submit">
                            Зарегистрировать чек
                        </b-button>
                    </b-form-group>
                </b-form>
            </validation-observer>
        </b-modal>
    </b-overlay>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import VueTimepicker from 'vue2-timepicker'
    import { ru } from 'vuejs-datepicker/dist/locale'
    import PrettyCheck from "pretty-checkbox-vue/check";
    export default {
        name: "CheckModal",
        components: {
            Datepicker,
            VueTimepicker,
            'p-check': PrettyCheck,
        },
        data() {
            return {
                agreement: false,
                form: {
                    file: null,
                    bought_date: null,
                    bought_time: null,
                    bet: null
                },
                ru: ru
            }
        },
        methods: {
            submit() {
                this.setDate();
                this.$store.commit('loading', true);
                this.$httpService.post('api/v1/auth/bet', this.$fdService.fill(this.form))
                    .then(response => {
                        this.$bvModal.hide('check-modal');
                        this.$root.$emit('success-modal', response.data);
                        this.$root.$emit('reload');
                        this.$fdService.reset(this.form);
                    })
                    .finally(() => {
                        this.$store.commit('loading', false);
                    })
            },
            openDate() {
                this.$refs.programaticDate.showCalendar();
            },
            checkPrize(i) {
                const selected = document.getElementById(`prize-${i}`);
                selected.classList.add('lays-chosen-prize');
                this.form.bet = selected.dataset.prize;
                document.querySelectorAll('.lays-chosen-prize').forEach(item => {
                    if (item.getAttribute('id') !== `prize-${i}`) {
                        item.classList.remove('lays-chosen-prize');
                    }
                })
            },
            addFile(file) {
                this.form.file = file;
            },
            setTime() {
                this.form.bought_time = `${this.form.bought_time.HH}:${this.form.bought_time.mm}:${this.form.bought_time.ss}`;
            },
            setDate() {
                this.form.bought_date = new Date(this.form.bought_date).toLocaleDateString('ru');
            }
        }
    }
</script>

<style scoped>

</style>
