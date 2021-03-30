<template>
  <main>
    <img class="svg header" src="@/assets/graphics-header.svg" alt="">
          <NavigationButton class="navigation" />
          <CartButton class="cart" />
        <h1>Meny</h1>
        <MenuItems />
    <img class="svg footer" src="@/assets/graphics-footer.svg" alt="">
  </main>
</template>

<script>
import NavigationButton from '../components/NavigationButton.vue'
import CartButton from '../components/CartButton.vue'
import MenuItems from '../components/MenuItems.vue'

export default {
  components: {
    NavigationButton,
    CartButton,
    MenuItems
  },
  created() {
    this.$store.dispatch('getMenu');
  }
}
</script>

<style scoped>
main {
  width: 100%;
  min-height: 100%;
  background-color: #F3E4E1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.navigation {
  position: absolute;
  top: 0;
  left: 0;
}
.cart {
  position: absolute;
  top: 0;
  right: 0;
}
h1 {
  font-family: 'PT Serif', serif;
  font-weight: 700;
  font-size: 2.6rem;
  margin-top: 120px;
  color: #2F2926;
}
img.svg {
  position: absolute;
  width: 100%;
}
img.svg.header {
  top: 0;
}
img.svg.footer {
  bottom: 0;
}
</style>