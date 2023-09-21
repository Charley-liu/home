<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <v-app>
    <v-app-bar :elevation="24">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="50" />
      <v-card width="100%">
        <v-tabs v-model="tab" stacked align-tabs="center" center-active>
          <router-link to="/">
            <v-tab value="one"> 首页 </v-tab>
          </router-link>
          <router-link to="/about">
            <v-tab value="two"> 产品 </v-tab>
          </router-link>
          <router-link to="/about">
            <v-tab value="three">
              关于
              <v-icon role="img" size="large"
              icon="mdi-home"/>
            </v-tab>
          </router-link>
        </v-tabs>
      </v-card>
    </v-app-bar>
    <RouterView />
    <v-footer :elevation="12" :app="true">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="40" />
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    tab: "one",
  }),
};
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 10vh;
}

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

nav a.router-link-exact-active {
  color: var(--color-text);
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
