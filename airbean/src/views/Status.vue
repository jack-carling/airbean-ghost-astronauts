<template>
<div class="statuspage">
  <p>Ordernummer #12DV456</p>
  <img src="../assets/drone.svg" alt="drone" class="drone">
  <h1>Din Beställning <br> är på väg!</h1>
  <h2>13 minuter</h2>
  <button class="cool">Ok, cool!</button>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.statuspage {
  background: #E5674E;
  height: 667px;
  position: relative;
  color: #FFFFFF;
  position: relative;
}

p{
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin: 0;
}

.drone{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
}

h1{
  text-align: center;
  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
  margin-top: 60px;
}

h2{
  text-align: center;
  font-family: 'Work Sans', sans-serif;
}

.cool{
  background: #FFFFFF;
  border-radius: 50px;
  position: absolute;
  width: 184px;
  height: 55px;
  border: none;
  cursor: pointer;
  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #2F2926;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  
}


</style>