<template>
<main>
<ul v-for="item in items" :key="item.id">
  <MenuItem :item="item" />
</ul>
</main>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  components: {
    MenuItem
  },
  computed: {
    items() {
      return this.$store.state.menu;
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