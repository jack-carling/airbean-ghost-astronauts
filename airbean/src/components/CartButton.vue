<template>
  <div class="button" @click="$emit('toggle-cart')">
    <img src="@/assets/bag.svg" alt="">
    <div class="count">
      <span>{{ counter }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.cartTotal;
    }
  }
}
</script>

<style scoped>
div.button {
  width: 50px;
  height: 50px;
  background-color: #2F2926;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 1rem;
  cursor: pointer;
}
div.count {
  width: 22px;
  height: 22px;
  background-color: #E5674E;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
  display: grid;
  place-items: center;
}
span {
  font-family: 'PT Serif', serif;
  font-weight: 700;
  color: #FFF;
}
</style>