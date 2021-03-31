<template>
<div v-if="pending" class="main">
  <div class="status loading" v-if="loading">
    <img src="@/assets/loader.png" alt="">
  </div>
  <div class="status info" v-else>
    <p>Ordernummer #{{ purchaseNum }}</p>
    <img src="@/assets/drone.svg" alt="drone" class="drone">
    <h1>Din beställning <br> är på väg!</h1>
    <h2>{{ eta }} minuter</h2>
    <button class="cool" @click="$router.push('/menu')">Ok, cool!</button>
  </div>
</div>
<div v-else class="status info">
  <h1>Har du lagt en beställning än?</h1>
  <img src="@/assets/loader.png" class="waiting" alt="">
  <button class="cool" @click="$router.push('/menu')">Till menyn!</button>
</div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.status.loading;
    },
    purchaseNum() {
      return this.$store.state.status.purchaseNum;
    },
    eta() {
      return this.$store.state.status.eta;
    },
    pending() {
      return this.$store.state.status.pending;
    }
  }
}
</script>

<style scoped>
.main {
  height: 100%;
}
.status {
  background: #E5674E;
  height: 100%;
  color: #FFFFFF;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.waiting {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
p{
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin: 60px 0;
}

.drone{
  display: block;
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
  bottom: 5rem;
  outline: 0;
}
</style>