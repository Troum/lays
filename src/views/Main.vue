<template>
    <div class="w-100">
        <b-col v-if="!isMobile" id="home" class="m-0 p-0" cols="12">
            <div class="lays-home-column blue-block"></div>
            <div class="lays-home-column yellow-block">
                <div class="slogan">
                    <img src="~@/assets/slogan.png" alt="Lays Слоган" class="img-fluid">
                </div>
                <div class="mechanic">
                    <div class="mechanic-item">
                        <img src="~@/assets/mechanic/1.png" alt="Lays 1 шаг" class="img-fluid">
                    </div>
                    <div class="mechanic-item">
                        <img src="~@/assets/mechanic/2.png" alt="Lays 1 шаг" class="img-fluid">
                    </div>
                    <div class="mechanic-item with-slider">
                        <vueper-slides class="no-shadow"
                                       :visible-slides="1"
                                       :arrowsOutside="true"
                                       :bullets="false"
                                       :slide-ratio="1 / 4">
                            <vueper-slide v-for="item in $store.getters.prizes"
                                          :key="item.value" :image="`./prizes/${item.image}`"></vueper-slide>
                        </vueper-slides>
                        <img src="~@/assets/mechanic/3.png" alt="Lays 1 шаг" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="lays-home-column">
                <div class="lays-home-block red-block"></div>
                <div class="lays-home-block green-block"></div>
            </div>
        </b-col>
        <b-col v-else id="home-mobile" class="m-0 p-0" cols="12">
            <b-row class="m-0 p-0">
                <b-col class="m-0 p-4" cols="12">
                    <img src="@/assets/mechanic-mobile.png" alt="Lays Mechanic" class="img-fluid">
                    <b-row class="m-0 p-0">
                        <b-col cols="5" class="lays-mobile-slider">
                            <vueper-slides class="no-shadow"
                                           :visible-slides="1"
                                           :arrowsOutside="true"
                                           :bullets="false"
                                           :slide-ratio="1 / 2">
                                <vueper-slide v-for="item in $store.getters.prizes"
                                              :key="item.value" :image="`./mobile-prizes/${item.image}`"></vueper-slide>
                            </vueper-slides>
                        </b-col>
                        <b-col cols="7" class="d-flex align-items-center pl-5">
                            <img src="@/assets/3-mobile.png" alt="Lays 3 Step" class="img-fluid">
                        </b-col>
                        <b-col cols="12" class="d-flex justify-content-center align-items-center mt-5">
                            <b-button @click="uploadCheck" class="lays-register-check" type="button">Загрузи чек</b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col id="mobile-prizes" class="m-0 p-0" cols="12">
                    <img src="@/assets/prizes-mobile.png" alt="Lays Prizes" class="img-fluid">
                </b-col>
                <b-col class="m-0 p-0 pl-4 pt-2" cols="12">
                    <span style="font-size: 2.5rem; font-weight: bold;" class="lays-text">FAQ</span>
                </b-col>
                <b-col id="faq" class="my-3 mx-auto" cols="12">
                    <b-row class="m-0 p-0">
                        <b-col class="mx-auto p-1" cols="12">
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="text-left" block v-b-toggle.accordion-1 variant="info">
                                        Кто может принимать участие в рекламной игре?
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="text-white text-light">
                                            Все граждане Республики Беларусь, постоянно проживающие в Республике Беларусь,<br>
                                            а также иностранные граждане и лица без гражданства, имеющие вид на жительство<br>
                                            на территории Республики Беларусь и постоянно проживающие в Республике Беларусь.
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="text-left" block v-b-toggle.accordion-2 variant="info">
                                        Как можно принять участие в рекламной игре?
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="text-white text-light">
                                            Необходимо купить 2 любые упаковки чипсов Lay’s в одном чеке, зарегистрироваться<br>
                                            на сайте, загрузить чек и внести дату и время совершения покупки.<br>
                                            Важно! Покупать чипсы и регистрировать чеки необходимо вовремя:
                                        </b-card-text>
                                        <b-card-text>
                                            <img class="img-fluid" src="@/assets/table.png" alt="Lays Table">
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="text-left" block v-b-toggle.accordion-3 variant="info">
                                        Что надо купить для участия в рекламной игре?
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="text-white text-light">
                                            Две ЛЮБЫЕ пачки чипсов Lay’s в любом дизайне.
                                        </b-card-text>
                                        <b-card-text>
                                            <img class="img-fluid" src="@/assets/chips-line.png" alt="Lays Table">
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="text-left" block v-b-toggle.accordion-4 variant="info">
                                        Как присваивается порядковый номер участника?
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="text-white text-light">
                                            Номера участников присваиваются автоматически при загрузке чека на сайт, в зависимости от даты и времени регистрации.
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button class="text-left" block v-b-toggle.accordion-5 variant="info">
                                        Когда проходят розыгрыши?
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <img class="img-fluid" src="@/assets/schedule.png" style="max-width: 40%" alt="Lays Table">
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <b-card v-if="show" no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button class="text-left" block v-b-toggle.accordion-6 variant="info">
                                            Какие призы разыгрываются?
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text class="text-white text-light">
                                                Первая тысяча участников получит промокоды 3 BYN на Яндекс.Такси.<br><br>

                                                А также мы разыграем:<br>
                                                - 10 денежных призов по 5000 BYN,<br>
                                                - 10 смартфонов Apple Iphone 11 64 Gb (черного цвета)<br>
                                                - 20 электросамокатов Xiaomi Mi Electric Scooter (10 белых и 10 черных)<br>
                                                - 15 игровых приставок Sony PS 4 Pro 1TB Black Dualshock 4 в комплекте с игрой Fortnite VCH<br>
                                                - 15 квадрокоптеров Syma X8SW-D (с барометром и Wi-fi камерой)
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <b-card v-if="show" no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button class="text-left" block v-b-toggle.accordion-7 variant="info">
                                            Как узнать, что я выиграл?
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text class="text-white text-light">
                                                Для получения Призов (смартфон, приставка, самокат, квадрокоптер) Победитель должен предоставить свои паспортные данные (копию стр. 25, стр. 31-33 паспорта для граждан Республики Беларусь или копию стр. 3, стр. 15-17 вида на жительство - для лиц, имеющих
                                                вид на жительство на территории Республики Беларусь) любым из предложенных способов в срок до 20 августа 2020 года (включительно):<br>
                                                <br>
                                                а) письмом на электронный почтовый ящик lays@yaskrava.by;<br><br>
                                                б) лично по адресу Организатора: Республика Беларусь, 220037, г. Минск, ул. Ольшевского, 22, оф.902 (по будним дням с 10:00 до 17:00);<br><br>
                                                в) письмом по почте по адресу Организатора: Республика Беларусь, 220037, г. Минск,<br><br>
                                                ул. Ольшевского, 22, оф.902.

                                                Для получения Денежного приза Победитель должен предоставить Организатору номер карт-счета, открытого в белорусских рублях в любом отделении ЗАО «Альфа-Банк» или З<br>
                                                АО «МТБанк», а также паспортные данные, в соответствии с п.п.12.2. Правил рекламной игры.

                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <b-card v-if="show" no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button class="text-left" block v-b-toggle.accordion-8 variant="info">
                                            Нужно ли что-то хранить до окончания рекламной игры?
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text class="text-white text-light">
                                                Пачки хранить не нужно, а вот чеки сохраняйте до конца рекламной игры!
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <b-card v-if="show" no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button class="text-left" block v-b-toggle.accordion-9 variant="info">
                                            Сколько раз я могу принять участие в игре?
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text class="text-white text-light">
                                                Каждый Участник может принимать участие в рекламной игре неограниченное количество раз при условии покупки Игрового продукта и выполнения условий, необходимых для участия в рекламной игре.
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </transition>
                            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                <b-card v-if="show" no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button class="text-left" block v-b-toggle.accordion-10 variant="info">
                                            Если я куплю сразу 4 Игровых продукта в LAY’S в одном чеке, то могу ли я
                                            зарегистрировать чек дважды?
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text class="text-white text-light">
                                                Нет, 1 чек=1 регистрация. В одном чеке должно быть не меньше двух игровых продуктов.
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </transition>
                        </b-col>
                    </b-row>
                    <b-row class="m-0 p-0 my-3">
                        <b-col class="mx-auto text-center" cols="10">
                            <span @click="show = !show" class="text-white text-uppercase font-weight-bold" style="text-decoration: underline">Другие вопросы</span>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </div>
</template>

<script>
    export default {
        name: "Main",
        props: {
            isMobile: null
        },
        data() {
            return {
                show: false
            }
        },
        mounted() {
            if(window.location.hash.includes('auth')) {
                this.$root.$emit('success-modal',
                    {success: 'Ты успешно верифицировал аккаунт. Проверь почту: тебе был отправлен пароль для входа.'})
            }
        },
        methods: {
            uploadCheck() {
                if(this.$jwt.token()) {
                    this.$bvModal.show('check-modal')
                } else {
                    this.$store.commit('emitted', {status: true, content: {error: 'Ты не авторизован'}})
                    this.$root.$emit('error-modal')
                }
            }
        }
    }
</script>

<style scoped>

</style>
