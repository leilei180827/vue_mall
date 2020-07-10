import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Swipe, SwipeItem } from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
