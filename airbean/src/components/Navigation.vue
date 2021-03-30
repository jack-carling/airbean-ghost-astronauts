<template>
  <div class="nav-page">
      <div class="close-button">
        <img src="../assets/close.svg" alt="" class="close-x">
        
      </div>
      <div class="nav-menu">
        <h1>Meny</h1>
        <div class="line"></div>
        <h1>Vårt kaffe</h1>
        <div class="line"></div>
        <h1>Min Profil</h1>
        <div class="line"></div>
        <h1>Orderstatus</h1>
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

}

.close-x{
  width: 26px;
  height: 26px;
}                         

h1{
  color: #FFFFFF;
  font-family: 'PT Serif', serif;
  text-align: center;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
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