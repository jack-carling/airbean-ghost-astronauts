<template>
  <main>
    <img class="svg header" src="@/assets/graphics-header.svg" alt="">
        <section class="navigation">
          <NavigationButton /> 
        </section>
        <h1>Meny</h1>
    <img class="svg footer" src="@/assets/graphics-footer.svg" alt="">
  </main>
</template>

<script>
import NavigationButton from '../components/NavigationButton.vue'

export default {
  components: {
    NavigationButton
  }
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F3E4E1;
}
section.navigation {
  display: flex;
  justify-content: space-between;
}
h1 {
  font-family: 'PT Serif', serif;
  font-weight: 700;
  font-size: 2.6rem;
  margin: 2.5rem 0;
}
img.svg {
  position: absolute;
}
img.svg.header {
  top: 0;
}
img.svg.footer {
  bottom: 0;
}
</style>