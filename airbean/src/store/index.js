import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const URL = 'http://localhost:5000/api/beans';

export default new Vuex.Store({
  state: {
    menu: [],
    cart: []
  },
  mutations: {
    addToCart(state, payload) {
      const count = {count: 1};
      const item = Object.assign(count, payload);
      const index = state.cart.findIndex(item => item.id === payload.id);
      if (index === -1) { // Check if item already in cart
        state.cart.push(item);
      } else {
        state.cart[index].count++;
      }
      console.log(state.cart[index]);
    }
  },
  actions: {
    async getMenu({state}) {
      const response = await fetch(URL);
      const data = await response.json();
      state.menu = data.menu;
    }
  },
  getters: {
    cartTotal: (state) => {
        return state.cart.reduce((total, item) => {
          return item.count + total
        }, 0) || 0;
    }
  }
});