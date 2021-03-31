import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const URL = 'http://localhost:5000/api/beans';

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    profile: {loggedIn: false},
    status: {loading: false, pending: false},
    purchaseHistory: []
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
    },
    increaseCount(state, id) {
      const index = state.cart.findIndex(item => item.id === id);
      state.cart[index].count++;
    },
    decreaseCount(state, id) {
      const index = state.cart.findIndex(item => item.id === id);
      if (state.cart[index].count === 1) { // Instead of count being 0 or negative, remove from array
        state.cart.splice(index, 1);
      } else {
        state.cart[index].count--;
      }
    },
    saveStatus(state, data) {
      state.status.eta = data.eta;
      state.status.purchaseNum = data.orderNr;
      state.status.loading = false;
      state.cart = []; // Clear cart when placing order
    },
    saveProfile(state, data) {
      state.profile.name = data.name;
      state.profile.email = data.email;
      state.profile.loggedIn = true;
    },
    setPurchases(state, data) {
      state.purchaseHistory = data;
    }
  },
  actions: {
    async getMenu({state}) {
      const response = await fetch(URL);
      const data = await response.json();
      state.menu = data.menu;
    },
    async placeOrder({commit, state}, payload) {
      state.status.loading = true;
      state.status.pending = true;
      const query = `?total=${payload.total}&date=${payload.date}&email=${payload.email}`;
      const response = await fetch(URL + query, { method: 'POST' });
      const data = await response.json();
      commit('saveStatus', data);
    },
    async setProfile({dispatch, commit}, profile) {
      const query = `/profiles?name=${profile.name}&email=${profile.email}`
      const response = await fetch(URL + query, { method: 'POST' });
      const data = await response.json();
      if (data.success) {
        commit('saveProfile', profile);
        dispatch('getPurchases', profile.email);
      }
    },
    async getPurchases({commit}, email) {
      const response = await fetch(URL + '/purchases?email=' + email);
      const data = await response.json();
      commit('setPurchases', data);
    }
  },
  getters: {
    cartTotal: (state) => {
        return state.cart.reduce((total, item) => {
          return item.count + total
        }, 0) || 0;
    },
    cartTotalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        return (item.price * item.count) + total
      }, 0) || 0;
    }
  }
});