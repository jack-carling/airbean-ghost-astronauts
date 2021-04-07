<template>
  <section class="main__wrapper">
    <section class="header">
      <NavigationButton @click.native="showNav = true" class="navigation" />
      <Navigation @close-nav="showNav = false" v-if="showNav" />
      <img class="graphics__header" src="@/assets/graphics-header.svg" />
    </section>

    <div class="profile__details">
      <img class="display__image" src="@/assets/profile.svg" />

      <h1 class="header__main">{{ profile.name }}</h1>
      <h2 class="profile__email">{{ profile.email }}</h2>
    </div>

    <CreateProfile v-if="!loggedIn" class="create__profile" />

    <h1 class="header__main--space">Orderhistorik</h1>

    <template v-if="purchaseHistory.length">
      <li
        class="purchase__history"
        v-for="purchase in purchaseHistory"
        :key="purchase.purchaseNum"
      >
        <span class="reference__number">#{{ purchase.purchaseNum }}</span>
        <span class="purchase__date">{{ styleDate(purchase.date) }}</span>
        <span class="summary__title">total ordersumma</span>
        <span class="purchase__price">{{ purchase.total }} kr</span>
      </li>

      <li class="grand__total">
        <p>Total spenderat</p>
        <p>{{ totalCost }} kr</p>
      </li>
    </template>
    <template v-else>
      <p class="zero">Du har inte lagt några beställningar än</p>
    </template>
  </section>
</template>


<script>
import NavigationButton from "@/components/NavigationButton.vue";
import Navigation from "../components/Navigation.vue";
import CreateProfile from "@/components/CreateProfile";

export default {
  components: {
    NavigationButton,
    Navigation,
    CreateProfile,
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    styleDate(date) {
      const displayDate = new Date(date);
      let year = displayDate.getFullYear();
      year = year.toString().slice(2);
      let month = (displayDate.getMonth() + 1).toString();
      if (month.length === 1) {
        month = "0" + month;
      }
      let day = displayDate.getDate().toString();
      if (day.length === 1) {
        day = "0" + day;
      }
      return `${day}/${month}/${year}`;
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.profile.loggedIn;
    },
    profile() {
      return this.$store.state.profile;
    },
    purchaseHistory() {
      const purchaseHistory = [...this.$store.state.purchaseHistory];
      return purchaseHistory.reverse();
    },
    totalCost() {
      const history = this.$store.state.purchaseHistory;
      if (history.length === 0) return;
      let total = 0;
      for (let i = 0; i < history.length; i++) {
        total += Number(history[i].total);
      }
      return total;
    },
  },
  mounted() {
    const email = this.$store.state.profile.email;
    if (email === undefined) return;
    this.$store.dispatch("getPurchases", email);
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
  min-height: 100%;
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

.zero {
  margin: 5%;
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  color: #ffff;
}

.header__main--space {
  text-align: left;
  color: #ffff;
  margin-left: 5%;
}

.profile__email {
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  color: #ffff;
  opacity: 80%;
  font-size: 14px;
  line-height: 16.8px;
}

.purchase__history {
  display: grid;
  grid-template-columns: 50% 50%;
}

span {
  font-size: 14px;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.8);
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
  border-top: 2px solid rgba(255, 255, 255, 0.6);
  margin-top: -10px;
  margin-left: 5%;
  margin-right: 5%;
  flex-direction: row;
  justify-content: space-between;
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.8);
  padding-top: 2.5%;
}

.grand__total p {
  margin: 0;
  padding-bottom: 2rem;
}

.create__profile {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
