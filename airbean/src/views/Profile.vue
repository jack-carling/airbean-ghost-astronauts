<template>
  <section class="main__wrapper">
    <section class="header">
      <NavigationButton class="navigation" />
      <img class="graphics__header" src="@/assets/graphics-header.svg" />
    </section>

    <div class="profile__details">
      <img class="display__image" src="@/assets/profile.svg" />

      <h1 class="header__main">{{ profile.name }}</h1>
      <!-- {{ profile.name }} --->
      <!-- Sixten Kaffelöver --->
      <h2 class="profile__email">{{ profile.email }}</h2>
      <!-- {{ profile.email }} --->
      <!-- sixten.kaffelover@zocom.se --->
    </div>

    <createProfile v-show="openSignUp" />

    <h1 class="header__main--space">Orderhistorik</h1>

    <li
      class="purchase__history"
      v-for="purchase in purchaseHistory"
      :key="purchase.purchaseNum"
    >
      <span class="reference__number">{{ purchase.purchaseNumber }}</span>
      <span class="purchase__date">{{ purchase.date }}</span>
      <span class="summary__title">total ordersumma</span>
      <span class="purchase__price">{{ purchase.total }}</span>
    </li>

    <li class="grand__total">
      <p>Total spenderat</p>
      <p>{{ totalCost }}kr</p>
    </li>
  </section>
</template>


<script>
import NavigationButton from "@/components/NavigationButton.vue";
import createProfile from "@/components/CreateProfile";

export default {
  components: {
    NavigationButton,
    createProfile,
  },

  methods: {
    createProfile() {
      this.$store.dispatch("toggleSignUp");
    },
  },
  computed: {
    openSignUp() {
      return this.$store.state.openSignUp;
    },
    profile() {
      return this.$store.state.profile;
    },
    purchaseHistory() {
      return this.$store.state.purchaseHistory;
    },
    totalCost() {
      return this.$store.getters.totalCost;
    },
  },
  created() {
    if (this.profile.id) {
      this.$store.dispatch("getPurchases", this.profile.id);
    } else {
      this.$store.dispatch("setId");
    }
  },
};
</script>

<style scoped>
.navigation {
  position: absolute;
  left: 0;
  top: 0;
}

.main__wrapper {
  background-color: #2f2926;
  height: 100vh;
  position: relative;
}

.header {
  position: relative;
}

.profile__details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header__main {
  font-family: "PT Serif", serif;
  font-weight: 500;
  color: #ffff;
  font-size: 24px;
  line-height: 28.8px;
  margin-bottom: 0;
}

.header__main--space {
  text-align: left;
  color: #ffff;
  margin-left: 6%;
}

.profile__email {
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  color: #ffff;
  opacity: 80%;
  font-size: 14px;
  line-height: 16.8px;
}

.past__orders {
  display: grid;
  grid-template-columns: 50% 50%;
}

span {
  font-size: 14px;
  margin-bottom: 0;
  color: #ffff;
  background-color: #2f2926;
  margin: 0 10%;
  width: 90%;
}

.reference__number {
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.purchase__date {
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5%;
}

.summary__title {
  font-family: Work Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 5%;
  margin-bottom: 5%;
}

.purchase__price {
  font-family: Work Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: right;
  padding-bottom: 5%;
  margin-bottom: 5%;
}

span:nth-child(even) {
  text-align: right;
  margin-left: 0;
}

span:nth-child(n + 3):nth-child(-n + 4) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

span:nth-child(odd) {
  text-align: left;
}

.grand__total {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  margin: 5%;
  flex-direction: row;
  justify-content: space-between;
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  color: #ffff;
}
</style>
