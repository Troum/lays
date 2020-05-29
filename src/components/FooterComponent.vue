<template>
    <b-row class="m-0 p-0 lays-footer" >
        <b-col v-if="!isMobile" class="m-0 pl-0 pt-3 pb-3 mx-auto" cols="11">
            <b-row class="m-0 p-0">
                <b-col class="m-0 p-0" cols="8">
                    <div class="d-flex justify-content-start align-items-center">
                        <small class="hotline">
                            Телефон "горячей" линии:
                            <a href="tel:+375336961716">+375 (33) 696 17 16</a>,
                            <small>c 10.00 до 16.00 (в будние дни); с 12.00 до 15.00 (в субботу)</small>
                        </small>
                    </div>
                    <div class="d-flex justify-content-start align-items-center mt-2" style="line-height: 1; color: #494949; font-family: 'Raleway ExtraLight', arial">
                        <small>
                            <small>
                            Рекламная игра “Лови призы с Lay’s”. Срок проведения с 30 мая по 10 сентября 2020.<br>
                            Свидетельство о гос.регистрации №3784 от 18.05.2020 выдано Министерством антимонопольного<br> регулирования
                            и торговли РБ. Внешний вид и цвет призов могут отличаться от их изображений на сайте и в рекламных материалах.</small>
                        </small>
                    </div>
                </b-col>
                <b-col class="d-flex justify-content-around align-items-center m-0" cols="4">
                    <div class="d-inline-block m-0 p-0 w-50">
                        <a @click="$router.push({name: 'rules'})" class="lays-footer-link">полные правила</a>
                        <a @click="$root.$emit('feedback')" class="lays-footer-link">обратная связь</a>
                    </div>
                    <div class="d-inline-flex justify-content-start w-50">
                        <a class="lays-footer-link">
                            <img class="social-icon" src="~@/assets/icon/inst.svg" alt="Lays Instagram">
                        </a>
                        <a class="lays-footer-link">
                            <img class="social-icon" src="~@/assets/icon/fb.svg" alt="Lays Facebook">
                        </a>
                        <a class="lays-footer-link">
                            <img class="social-icon" src="~@/assets/icon/vk.svg" alt="Lays VK">
                        </a>
                    </div>
                </b-col>
            </b-row>
        </b-col>
        <b-col v-else class="m-0 pl-0 pt-3 pb-3 " cols="12">
            <b-row class="m-0 p-0 mx-auto w-100">
                <b-col class="m-0 mx-auto" cols="12">
                    <div class="d-flex justify-content-around align-items-center mb-2">
                        <a @click="$router.push({name: 'rules'})" class="lays-footer-link">полные правила</a>
                        <a @click="$root.$emit('feedback')" class="lays-footer-link">обратная связь</a>
                    </div>
                    <div class="d-flex justify-content-center align-items-center text-center">
                        <small class="hotline">
                            Телефон "горячей" линии:
                            <a href="tel:+375336961716">+375 (33) 696 17 16</a>,
                            <small class="d-block text-center">c 10.00 до 16.00 (в будние дни);<br> с 12.00 до 15.00 (в субботу)</small>
                        </small>
                    </div>
                    <div class="d-flex justify-content-center align-items-center text-center mt-2" style="line-height: 0.8">
                        <small>
                            <small style="font-size: 70%">
                                Рекламная игра “Лови призы с Lay’s”. Срок проведения с 30 мая по 10 сентября 2020.
                                Свидетельство о гос.регистрации №3784 от 18.05.2020 выдано Министерством антимонопольного регулирования
                                и торговли РБ. Внешний вид и цвет призов могут отличаться от их изображений на сайте и в рекламных материалах.
                            </small>
                        </small>
                    </div>
                    <div class="d-flex justify-content-center align-items-center mt-2">
                        <a class="lays-footer-link">
                            <img class="social-icon" src="~@/assets/icon/inst.svg" alt="Lays Instagram">
                        </a>
                        <a class="lays-footer-link">
                            <img class="social-icon" src="~@/assets/icon/fb.svg" alt="Lays Facebook">
                        </a>
                        <a class="lays-footer-link">
                            <img class="social-icon" src="~@/assets/icon/vk.svg" alt="Lays VK">
                        </a>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        props: {
          isMobile: Boolean
        },
        name: "FooterComponent"
    }
</script>

<style scoped>

</style>
