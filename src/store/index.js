import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex);
const state = {
  productsInCart: [],
  count: 0,
};
const product = {
  iid: "1m7s9c4",
  imgUrl:
    "//s3.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg",
  desc: "新款",
  title: "秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装",
  price: "88.90",
  count: 1,
  isSelected: true,
};
state.productsInCart.push(product);
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
export default store;
