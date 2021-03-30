<template>
  <li>
    <span class="title">{{ item.title }}</span>
    <span class="price">{{ price }}</span>
    <div class="count">
      <div class="button" @click="increaseCount">
        <img src="@/assets/arrow-up.svg" alt="">
      </div>
      <span>{{ item.count }}</span>
      <div class="button" @click="decreaseCount">
        <img src="@/assets/arrow-down.svg" alt="">
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    price() {
      return (this.item.price * this.item.count) + ' kr' 
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount', this.item.id);
    },
    decreaseCount() {
      this.$store.commit('decreaseCount', this.item.id);
    }
  }
}
</script>

<style scoped>
li {
  display: grid;
  grid-template-columns: auto 30px;
  margin: 0 1rem 1rem 1rem;
  color: #2F2926;
}
span.title {
  overflow: hidden;
  position: relative;
  font-family: 'PT Serif', serif;
  font-weight: 700;
  font-size: 20px;
}
span.title::after {
  content: '';
  display: inline-block;
  position: absolute;
  bottom: 5px;
  width: 100%;
  margin-left: 0.5rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
}
span.price {
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
}
div.count {
  margin-left: 0.5rem;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
div.button {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
}
div.count span {
  padding: 0 0.1rem;
}
</style>