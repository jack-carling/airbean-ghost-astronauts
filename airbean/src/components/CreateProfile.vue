<template>
  <div class="createProfile">
    <section class="header__main">
      <img class="logo__dark" src="@/assets/airbean-logo-dark.svg" />
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
    </section>
    <section class="signup__form">
      <label for="name">Namn</label>
      <input
        class="signup__form-text-input"
        type="text"
        name="name"
        placeholder="Namn"
        v-model="profile.name"
      />
      <label for="email">Epost</label>
      <input
        class="signup__form-text-input"
        type="text"
        name="email"
        placeholder="epost@exempel.com"
        v-model="profile.email"
      />

      <footer class="signup__footer">
        <input type="radio" class="okGDPR" v-model="gdpr" />
        <label for="okGDPR">GDPR Ok!</label>
      </footer>
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
  methods: {
    saveProfile() {
      this.$store.dispatch("setProfile", this.profile);
    },
  },
};
</script>

<style scoped>
.createProfile {
  margin-top: 100px;
  position: fixed;
  z-index: 900;
  background-color: #f3e4e1;
  border-radius: 0.5%;
  border: 2px, solid #2f2926;
  height: 88%;
  width: 341px;
  transform: translateY(30px);
}
.header__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

h1 {
  font-family: PT Serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
}

p {
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 20px;
}

.logo__dark {
  margin-top: 10%;
}

.signup__form {
  margin-left: 20px;
}

label {
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
}

.signup__form-text-input {
  border: 1px solid #2f2926;
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 20px;
  width: 305px;
  height: 48px;
  left: 33px;
  padding: 3%;
  background-color: #f3e4e1;
}

button {
  background: #2f2926;
  border-radius: 50px;
  position: absolute;
  width: 184px;
  height: 55px;
  border: none;
  cursor: pointer;
  font-family: "PT Serif", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  bottom: 5rem;
  outline: 0;
}

footer {
  display: flex;
  align-items: flex-end;
}
</style>
