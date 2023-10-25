<template>
  <v-app>
    <v-header>
      <v-app-bar id="target">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="100"
          height="42"
        />
        <v-card id="target">
          <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="end"
          >
            <router-link :to="item.link" v-for="item in data">
              <v-tab :value="item.value">
                {{ item.name }}
              </v-tab>
            </router-link>
          </v-tabs>
        </v-card>
      </v-app-bar>
    </v-header>
    <RouterView />
    <v-footer :elevation="12">
      <div class="footercontent">
          <v-row align="center" no-gutters class="contact">
            <v-col
              align-self="start"
              class="mb-6"
              style="
                height: 140px;
                position: relative;
                float: left;
                background-color: rgba(0, 0, 0, 0.2);
              "
            >
              <div class="footertitle" style="text-align: center">办公地址</div>
              <div class="footertext" style="text-align: center">北京市房山区</div>
            </v-col>
            <v-col
              align-self="center"
              class="mb-6"
              style="
                height: 140px;
                position: relative;
                float: left;
                background-color: rgba(0, 0, 0, 0.4);
              "
            >
              <div class="footertitle" style="text-align: center">商务合作</div>
              <div class="footertext" style="text-align: center">
                Tel：010-53616906 / 13810814092（米女士）<br />e-mail：<a
                  href="mailto:huituyanxue@huitu-trip.com"
                  >huituyanxue@huitu-trip.com</a
                >
              </div>
            </v-col>
            <v-col
            class="mb-6"
              align-self="end"
              style="
                height: 140px;
                position: relative;
                float: left;
                background-color: rgba(0, 0, 0, 0.2);
              "
            >
              <div class="footertitle" style="text-align: center">加入惠途</div>
              <div class="footertext" style="text-align: center">
                e-mail：<a href="mailto:huituyanxue@huitu-trip.com"
                  >huituyanxue@huitu-trip.com</a
                >
              </div>
            </v-col>
          </v-row>
          <v-row class="copy">
            <v-col>
              ©2023 北京惠途旅游有限责任公司&nbsp;&nbsp;京ICP备11031713号
              京公网备案11010802009073
            </v-col>
          </v-row>
      </div>
    </v-footer>
  </v-app>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data: () => ({
    tab: null,
    data: [
      {
        link: "/home",
        value: "one",
        name: "首页",
      },
      {
        link: "/product",
        value: "two",
        name: "产品",
      },
      {
        link: "/about",
        value: "three",
        name: "关于",
      },
    ],
  }),
  mounted: () => {
    var target = document.getElementById("target");
    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY;
      var windowHeight = window.innerHeight;
      var documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      var scrollPosition = (scrollTop + windowHeight) / documentHeight;
      target.style.backgroundColor =
        "rgba(255, 255, 255, " + scrollPosition.toFixed(2) + ")";
    });
  },
};
</script>
<style scoped>
#target {
  background-color: rgba(255, 255, 255, 0);
  
}
.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
}
.opacity {
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
footer {
  float: left;
  width: 100%;
  height: 640px;
  background-color: #222;
}
footer .footercontent {
  width: 100%;
  position: relative;
  margin: 0px auto;
}
footer .footertitle {
  font-size: 16px;
  color: #fff;
  line-height: 16px;
  margin: 30px 0px 20px 0px;
}
footer .footertext {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 24px;
  font-weight: 300;
}
footer a {
  color: #9f9f9f;
}
footer a:hover {
  color: #fff;
}
footer .contact {
  width: 100%;
  position: relative;
  float: left;
  margin: 80px auto 30px auto;
}
footer .content {
  height: 320px;
  position: relative;
  float: left;
  margin: 0px auto 0px auto;
  display: block;
}
footer .copy {
  width: 100%;
  position: relative;
  float: left;
  margin: 0px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  line-height: 60px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
}

footer .newslist {
  width: 740px;
  float: left;
  margin-bottom: 20px;
}
footer .newslist .newstitle {
  width: 500px;
  display: block;
  float: left;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 14px;
  margin: 0px 0px 10px 20px;
  font-weight: 300;
}
footer .newslist .newscontent {
  width: 500px;
  display: block;
  float: left;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 24px;
  margin: 0px 0px 10px 20px;
  font-weight: 300;
}
</style>
