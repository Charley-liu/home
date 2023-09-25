<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
  <div class="test">
      <v-carousel cycle height="500">
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </v-parallax>
</template>
<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>
<style lang="scss">
.test {
  position: relative;
  top: 68px;
  width: 80vw;
  margin: 0 auto;
}
</style>
