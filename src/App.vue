<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <v-app>
    <v-app-bar :elevation="24">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="42" />
      <v-card width="80%">
        <v-tabs v-model="tab" stacked align-tabs="center" center-active>
          <router-link :to="item.link" v-for="item in data">
            <v-tab :value="item.value">
              <v-icon role="img" size="default" :icon="item.icon" />
              {{item.name}}
            </v-tab>
          </router-link>
        </v-tabs>
      </v-card>
    </v-app-bar>
    <RouterView />
    <v-footer :elevation="12" class="bg-indigo-lighten-1 text-center d-flex flex-column opacity" :app="true">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="30" />
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    tab: "one",
    data: [
      {
        link: "/home",
        icon: "mdi-home",
        value: "one",
        name:"首页"
      },
      {
        link: "/about",
        icon: "mdi-apps",
        value: "two",
        name:"关于"
      },
      {
        link: "/about",
        icon: "mdi-tooltip-account",
        value: "three",
        name:"我的"
      },
    ],
  }),
};
</script>
<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
.opacity{
  background-color: rgba(0, 0, 0, 0.4) !important;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}
.v-card--variant-elevated {
  box-shadow: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
