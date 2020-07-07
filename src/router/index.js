import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = () => import("pages/home/Home.vue");
const Profile = () => import("pages/profile/Profile.vue");
const Category = () => import("pages/category/Category.vue");
const Cart = () => import("pages/cart/Cart.vue");
const Detail = () => import("pages/detail/Detail.vue");
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/profile", component: Profile },
  { path: "/cart", component: Cart },
  { path: "/category", component: Category },
  { path: "/detail/:iid", component: Detail },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
