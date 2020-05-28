<template>
    <b-col cols="12" xl="10" class="lays-container lays-cabinet mx-auto">
        <b-row class="m-0 p-0">
            <b-col class="m-0 p-0" cols="12">
                <b-table v-if="items.length > 0" :fields="fields" :items="items"
                         :per-page="pagination.perPage"
                         :current-page="pagination.current">
                    <template v-slot:cell(bet)="data">
                        {{ data.value | bet }}
                    </template>
                    <template v-slot:cell(status)="data">
                        {{ data.value | status }}
                    </template>
                </b-table>
                <b-pagination class="mt-2 lays-pagination" v-if="items.length > 0"
                              first-number last-number
                              v-model="pagination.current" align="center" :total-rows="rows"
                              :per-page="pagination.perPage" aria-controls="participants">
                    <template v-slot:prev-text>
                        <font-awesome-icon :icon="['fas', 'caret-left']"></font-awesome-icon>
                    </template>
                    <template v-slot:next-text>
                        <font-awesome-icon :icon="['fas', 'caret-right']"></font-awesome-icon>
                    </template>
                </b-pagination>
                <b-form-group class="text-center">
                    <b-button class="lays-register-check"
                              @click="$bvModal.show('check-modal')"
                              type="button">зарегистрировать новый чек</b-button>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="m-0 p-0">
            <b-col class="m-0 p-0" cols="12">
                <p class="text-center font-weight-bold text-white">
                    Призы, участвующие в ближайшем розыгрыше 16.06.2020
                </p>
                <b-form-group class="pl-5 pr-5">
                    <b-row class="m-0 p-4 pl-5 pr-5">
                        <b-col class="d-flex justify-content-center align-items-center"
                               cols="3"
                               v-for="prize in $store.getters.prizes"
                               :style="`background: ${prize.color} url('./prizes/${prize.circle}') center no-repeat; background-size: 150%`"
                               :key="prize.image">
                            <img :src="`./prizes/${prize.image}`" :alt="prize.image" class="img-fluid"
                                 style="filter: drop-shadow(-10px 5px 8px rgba(0, 0, 0, .34))">
                        </b-col>
                    </b-row>
                </b-form-group>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    export default {
        name: "Cabinet",
        data() {
            return {
                items: [],
                fields: [
                    {
                        key: 'bought_date',
                        label: 'Дата',
                        sortable: false
                    },
                    {
                        key: 'bought_time',
                        label: 'Время',
                        sortable: false
                    },
                    {
                        key: 'bet',
                        label: 'Ставка',
                        sortable: false
                    },
                    {
                        key: 'status',
                        label: 'Статус модерации',
                        sortable: false
                    }
                ],
                pagination: {
                    current: 1,
                    perPage: 3
                }
            }
        },
        filters: {
          bet(value) {
              switch (value) {
                  case '1':
                      return 'Электросамокат Xiaomi';
                  case '2':
                      return 'Смартфон Apple iPhone';
                  case '3':
                      return 'Квадрокоптер Syma';
                  case '4':
                      return 'Приставка XBox';
                  case '5':
                      return 'Денежный приз 5000';
              }
          },
            status(value) {
                switch (value) {
                    case 0:
                        return 'На модерации';
                    case 1:
                        return 'Одобрена';
                    case 2:
                        return 'Отклонена';
                }
            }
        },
        mounted() {
          this.bets();
          this.$root.$on('reload', () => {
              this.bets();
          });
        },
        methods: {
            bets() {
                this.$httpService.get('api/v1/auth/bets')
                    .then(response => {
                        this.items = [...response.data.bets];
                    })
            }
        },
        computed: {
            rows() {
                return this.items.length
            }
        }
    }
</script>

<style scoped>

</style>
