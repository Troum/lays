<template>
    <b-col id="faq" class="my-3 mx-auto" cols="10">
        <b-row class="m-0 p-0">
            <b-col class="mx-auto p-4" cols="10">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button class="text-left" block v-b-toggle.accordion-1 variant="info">
                            Кто может принимать участие в рекламной игре?
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
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
                <b-card no-body class="mb-1">
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
                <b-card no-body class="mb-1">
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
                <b-card no-body class="mb-1">
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
                <b-card no-body class="mb-1">
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
                <b-card no-body class="mb-1">
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
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    export default {
        name: "FAQ",
    }
</script>

<style scoped>

</style>
