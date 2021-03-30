<template>
  <div class="button" @click="toggleCart">
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
  },
  methods: {
    toggleCart() {
      const path = this.$route.path;
      if (path === '/cart') {
        this.$router.push('/menu');
      } else {
        this.$router.push('/cart');
      }
    }
  }
}
</script>

<style scoped>
div.button {
  width: 60px;
  height: 60px;
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
  top: -4px;
  right: 0;
  display: grid;
  place-items: center;
}
span {
  font-family: 'PT Serif', serif;
  font-weight: 700;
  color: #FFF;
}
</style>