<template>
  <div class="cart">
    <Menu />
    <div class="overlay-black"></div>
    <div class="overlay-white">
        <h1>Din beställning</h1>
        <CartItems />
        <footer>
          <div class="total">
            <span class="total">Total</span>
            <span class="price">{{ total }}</span>
            <span class="info">inkl moms + drönarleverans</span>
          </div>
            <button>Take my money!</button>
        </footer>
      </div>
  </div>
</template>

<script>
import Menu from './Menu.vue' // Using the main view and just adding an overlay here
import CartItems from '../components/CartItems.vue'

export default {
  components: {
    Menu,
    CartItems
  },
  computed: {
    total() {
      return this.$store.getters.cartTotalPrice + ' kr';
    }
  }
}
</script>

<style scoped>
div.cart {
  width: 100%;
  height: 100%;
  color: #2F2926;
}
div.overlay-black {
  background-color: rgba(0, 0, 0, 0.5);
  width: 375px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
}
::v-deep div.button.cart {
  z-index: 1;
}
div.overlay-white {
  background-color: #FFF;
  width: calc(375px - 2rem);
  position: fixed;
  top: 72px;
  right: 0;
  bottom: 1rem;
  left: 0;
  margin: 0 auto;
  z-index: 2;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
div.overlay-white::after {
  content: '';
  width: 22px;
  height: 22px;
  position: absolute;
  transform: rotate(45deg);
  background-color: #FFF;
  right: 19px;
  top: -5px;
  z-index: 2;
}
h1 {
  font-family: 'PT Serif', serif;
  text-align: center;
}
footer {
  width: 100%;
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer div.total {
  width: 100%;
  padding: 1rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: auto max-content;
}
footer span {
  font-family: 'PT Serif', serif;
  font-size: 23px;
}
footer span.info {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
}
footer span.total {
  overflow: hidden;
  position: relative;
}
footer span.total::after {
  content: '';
  display: inline-block;
  position: absolute;
  bottom: 5px;
  width: 100%;
  margin-left: 0.5rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
}
footer span.price {
  margin-left: 0.5rem;
}
footer button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: 'PT Serif', serif;
  font-size: 24px;
  color: #FFF;
  background-color: #2F2926;
  padding: 0.8rem 1.7rem;
  border: 0;
  outline: 0;
  border-radius: 999px;
  cursor: pointer;

}
</style>