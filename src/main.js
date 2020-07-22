import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Swipe, SwipeItem } from "vant";
import "vant/lib/index.css";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require("assets/img/common/placeholder.png"),
});
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
