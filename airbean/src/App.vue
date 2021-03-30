<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Rufina:wght@400;700&family=Work+Sans:wght@600;700&display=swap');
/*
font-family: 'PT Serif', serif; // font-weight: 400 or 600
font-family: 'Rufina', serif; // font-weight: 700
font-family: 'Work Sans', sans-serif; // font-weight: 600 or 700
*/
* {
  box-sizing: border-box;
}
html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 375px;
}
@media screen and (max-width: 375px) {
  #app {
    width: 100vw;
  }
}
</style>
