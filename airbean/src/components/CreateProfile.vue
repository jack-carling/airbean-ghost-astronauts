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
      <span v-if="errors.name" class="error"><i class="material-icons">error</i>{{errors.name}}</span>
      <label for="email">Epost</label>
      <input
        class="signup__form-text-input"
        type="text"
        name="email"
        placeholder="epost@exempel.com"
        v-model="profile.email"
      />
      <span v-if="errors.email" class="error"><i class="material-icons">error</i>{{errors.email}}</span>
      <footer class="signup__footer">
        <input type="radio" class="okGDPR" v-model="gdpr" value="ok" />
        <label for="okGDPR">GDPR Ok!</label>
      </footer>
      <span v-if="errors.gdpr" class="error"><i class="material-icons">error</i>{{errors.gdpr}}</span>
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
      gdpr: "",
      errors: {
        name: "",
        email: "",
        gdpr: ""
      }
    };
  },
  methods: {
    saveProfile() {
      if (this.profile.name.length !== 0) {
        this.errors.name = '';
      } else {
        this.errors.name = 'Detta fältet kan inte lämnas tomt.';
      }
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.profile.email)) {
        this.errors.email = '';
      } else {
        this.errors.email = 'Fyll i en giltig e-postadress.'
      }
      if (this.gdpr === 'ok') {
        this.errors.gdpr = '';
      } else {
        this.errors.gdpr = 'GDPR måste godkännas.';
      }
      const allErrors = Object.values(this.errors);
      const allEmpty = allErrors.every(error => error === '');
      if (allEmpty) {
        this.$store.dispatch("setProfile", this.profile);
      }
    },
  },
};
</script>

<style scoped>
.createProfile {
  margin-top: 100px;
  position: fixed;
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

.error {
  color: #E5674E;
  display: flex;
  font-size: 14px;
  margin: 0.2rem 0;
}
.error i {
  font-size: 16px;
  margin-right: 0.2rem;
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

input[type="radio"] {
  margin: 20px 0.2rem 0 0;
}

label {
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
}

label:nth-of-type(2) {
  margin-top: 20px;
  display: inline-block;
}

.signup__form-text-input {
  border: 1px solid #2f2926;
  box-sizing: border-box;
  border-radius: 6px;
  width: 305px;
  height: 48px;
  left: 33px;
  padding: 3%;
  background-color: #f3e4e1;
  outline: 0;
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
  bottom: 2rem;
  outline: 0;
}

footer {
  display: flex;
  align-items: flex-end;
}
</style>
