<template>
  <div class="nav-page">
      <button class="close-button" @click="$router.push('/About')">
        <img src="../assets/close.svg" alt="" class="close-x">
      </button>

      <div class="nav-menu">
        <button class="menu-button">Meny</button>
        <div class="line"></div>
        <button class="menu-button">Vårt kaffe</button>
        <div class="line"></div>
        <button class="menu-button">Min Profil</button>
        <div class="line"></div>
        <button class="menu-button">Orderstatus</button>
      </div>

  </div>
</template>

<script>
export default {

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