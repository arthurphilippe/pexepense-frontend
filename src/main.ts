import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";

import Config from "@/models/config.model";

Vue.config.productionTip = false;

Vue.use(Vuex);

declare module "vue/types/vue" {
  // 3. Declare augmentation for Vue
  interface Vue {
    $config: Config;
  }
}

Vue.use(Vue => {
  let config: Config = {
    apiUrl: "tptp"
  };
  Vue.prototype.$config = config;
});

const store = new Vuex.Store({
  state: {
    accessToken: undefined
  }
  // mutations: {
  //   login(state) {}
  // }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
