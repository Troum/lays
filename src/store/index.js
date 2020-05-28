import * as menu from '../static/navigation.json';
import Vue from 'vue';
import Vuex from 'vuex';
import JWT from "../services/jwt-token.service";


Vue.use(JWT);
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brand: "Рекламная игра",
    authentication: !!Vue.prototype.$jwt.token(),
    menu: menu.menu,
    prizes: [
      {
        value: 1,
        image: 'scooter.png',
        color: '#FFD301',
        circle: 'yellow.png'
      },
      {
        value: 2,
        image: 'apple.png',
        color: '#00954B',
        circle: 'green.png'
      },
      {
        value: 3,
        image: 'copter.png',
        color: '#B02324',
        circle: 'red.png'
      },
      {
        value: 4,
        image: 'xbox.png',
        color: '#0592DA',
        circle: 'blue.png'
      }
    ]
  },
  mutations: {
    authentication(state, data) {
      state.authentication = data;
    }
  },
  actions: {
  },
  getters: {
    authentication(state) {
      return state.authentication;
    },
    menu(state) {
      return state.menu;
    },
    brand(state) {
      return state.brand;
    },
    prizes(state) {
      return state.prizes;
    }
  }
})
