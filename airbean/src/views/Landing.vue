<template>
  <div class="landingPage">
    <img class="designLeft" src="@/assets/intro-graphic-left.svg" />
    <img class="airbeanLogo" src="@/assets/airbean-landing.svg" />
    <img class="designRight" src="@/assets/intro-graphic-right.svg" />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/menu');
    }, 2000)
  }
};
</script>

<style scoped>
.landingPage {
  background: #38846d;
  height: 100%;
  display: grid;
  grid-auto-columns: 4fr 1fr 3fr;
  grid-template-areas: "designLeft airbeanLogo designRight";
}

.designLeft {
  grid-area: designLeft;
  height: 100%;
}

.airbeanLogo {
  position: absolute;
  grid-area: airbeanLogo;
  width: 230px;
  margin: 250px auto 0 auto;
  left: 0;
  right: 0;
}

.designRight {
  grid-area: designRight;
  height: 100%;
}
</style>