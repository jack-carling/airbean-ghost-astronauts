import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'
import Menu from '../views/Menu.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Status from '../views/Status.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    component: Landing
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/status',
    component: Status
  },
  {
    path: '/profile',
    component: Profile
  }
];

export default new VueRouter({ routes });