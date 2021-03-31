

<template>
  <div class="createProfile">
    <img class="logo__dark" src="@/assets/airbean-logo-dark.svg" />
    <h1 class="header__main">Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</p>
    <section class="signup__form">
      <input
        class="signup__form-text-input"
        type="text"
        name="name"
        placeholder="Namn"
        v-model="profile.name"
      />

      <input
        class="signup__form-text-input"
        type="text"
        name="email"
        placeholder="epost@exempel.com"
        v-model="profile.email"
      />
      <p>GDPR Ok!</p>

      <input type="radio" class="okGDPR" v-model="GDPR" />
      <button @click="saveProfile">Logga in</button>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      profile: {
        name: "",
        email: "",
      },
      gdpr: false,
    };
  },
  saveProfile() {
    this.$store.dispatch("setProfile", this.profile);
    this.$store.dispatch("toggleSignUp");
  },
};
</script>

<style scoped>
.createProfile {
  margin-top: 82px;
  position: fixed;
  z-index: 900;
  background-color: #3fe20d; /*Yikes*/
  border-radius: 3%;
  border: 2px, solid #2f2926;
  height: 100vh;
  width: 341px;
}

.signup__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
