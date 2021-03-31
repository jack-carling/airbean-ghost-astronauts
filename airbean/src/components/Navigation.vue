<template>
  <div class="nav-page">
      <div class="close-button" @click="$emit('close-nav')">
        <img src="../assets/close.svg" alt="" class="close-x">
      </div>

      <div class="nav-menu">
        <button class="menu-button" @click="goToPage('/menu')">Meny</button>
        <div class="line"></div>
        <button class="menu-button" @click="goToPage('/about')">Vårt kaffe</button>
        <div class="line"></div>
        <button class="menu-button" @click="goToPage('/profile')">Min Profil</button>
        <div class="line"></div>
        <button class="menu-button" @click="goToPage('/status')">Orderstatus</button>
      </div>

  </div>
</template>

<script>
export default {
  methods: {
    goToPage(page) {
      const currentPage = this.$route.path;
      if (currentPage === page) {
        this.$emit('close-nav');
      } else {
        this.$router.push(page);
      }
    }
  }
}
</script>

<style scoped>

.nav-page{
  background: #2F2926;
  position: fixed;
  display: flex;
  z-index: 900;
  height: 100%;
  width: 375px;
  top: 0;
}

.close-button{
  background-color: #FFFFFF;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  outline: 0;
}

.close-x{
  width: 26px;
  height: 26px;
}                         

.menu-button{
  color: #FFFFFF;
  font-family: 'PT Serif', serif;
  text-align: center;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  cursor: pointer;
  padding: 20px;
  background-color:  #2F2926;
  border: none;
  outline: 0;
}

.line{
  width: 48px;
  height: 1px;
  background-color: white;;opacity:0.2;
}

.nav-menu{
  display: grid;
  place-items: center;
  position: absolute;
  margin-top: 200px;
  width: 100%;
  margin: 200px 0 0 auto;
}





</style>