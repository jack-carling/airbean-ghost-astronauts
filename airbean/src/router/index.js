import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    component: Landing
  }
];

export default new VueRouter({ routes });