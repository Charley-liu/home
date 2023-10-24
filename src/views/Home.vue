<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <!-- 轮播 -->
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
    <!-- 简介 -->
    <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <template v-if="card.status">
              <v-card>
                <v-img
                  :src="card.src"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                  :height="card.height"
                  cover
                >
                  <v-card-title class="text-white" v-text="card.title"></v-card-title>
                </v-img>
  
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn append-icon="mdi-arrow-right" variant="text" color="blue-darken-4">
                    查看更多
                    <template v-slot:append>
                      <v-icon></v-icon>
                    </template>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
            <template v-else>
              <template v-for="card in card.list" :key="card.title">
                <v-card :style="'margin-top:'+card.margin">
                  <v-img
                    :src="card.src"
                    class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
                    :height="card.height"
                    cover
                  >
                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                  </v-img>
    
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn append-icon="mdi-arrow-right" variant="text" color="blue-darken-4">
                      查看更多
                      <template v-slot:append>
                        <v-icon></v-icon>
                      </template>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </template>
          </v-col>
        </v-row>
    </v-container>
    <!-- 宣传 -->
    <v-container> </v-container>
  </v-parallax>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    cards: [
      {
        title: "亲子研学",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6,
        height: "600px",
        status: 1,
      },
      {
        title: "北京深度游",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
        height: "250px",
        status: 0,
        list: [
          {
            title: "党建活动",
            src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
            flex: 6,
            height: "269px",
            status: 0,
          },
          {
            title: "北京深度游",
            src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            flex: 6,
            margin:'10px',
            height: "269px",
            status: 0
          },
        ],
      },
    ],
  }),
};
</script>
<style lang="scss">
.test {
  position: relative;
  margin: 0 auto;
}
</style>
