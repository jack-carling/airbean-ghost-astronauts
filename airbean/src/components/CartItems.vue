<template>
<main>
<ul v-for="item in items" :key="item.id">
  <CartItem :item="item" />
</ul>
</main>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
  components: {
    CartItem
  },
  computed: {
    items() {
      return this.$store.state.cart;
    }
  }
}
</script>

<style scoped>
ul {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>