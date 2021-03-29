<template>
  <main>
    <img class="svg header" src="@/assets/graphics-header.svg" alt="">
      <div class="main">
        <section class="navigation">
          <NavigationButton />
          Hej
        </section>
        <h1>Meny</h1>
      </div>
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
  width: 100vw;
  height: 100vh;
  background-color: #F3E4E1;
  display: flex;
  justify-content: center;
}
div.main {
  width: 414px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 414px;
  position: absolute;
}
img.svg.header {
  top: 0;
}
img.svg.footer {
  bottom: 0;
}
</style>