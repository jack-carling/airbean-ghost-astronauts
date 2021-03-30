<template>
  <li>
    <div class="button" @click="addToCart">
      <img src="@/assets/add.svg" alt="">
    </div>
    <span class="title">{{ item.title }}</span>
    <span class="description">{{ item.desc }}</span>
    <span class="price">{{ price }}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    price() {
      return this.item.price + ' kr'
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.item);
    }
  }
}
</script>

<style scoped>
div.button {
  width: 32px;
  height: 32px;
  background-color: #2F2926;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
}
img {
  width: 50%;
}
li {
  display: grid;
  grid-template-columns: min-content auto max-content;
  margin: 0 1rem 1rem 1rem;
}
span.description {
  grid-column: 1 / 3;
}
div.button {
  grid-row: 1 / 3;
  margin-right: 0.5rem;
  place-self: center;
}
span.title {
  overflow: hidden;
  position: relative;
}
span.title::after {
  content: '';
  display: inline-block;
  position: absolute;
  bottom: 5px;
  width: 100%;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
}
span.price {
  grid-row: 1 / 3;
  grid-column: 3 / 4;
  margin-left: 0.5rem;
}
span.title, span.price {
  font-family: 'PT Serif', serif;
  font-weight: 700;
  font-size: 23px;
  color: #2F2926;
}
span.description {
  font-family: 'Work Sans';
  font-weight: 400;
  grid-column: 2 / 3;
  font-size: 12px;
}
</style>