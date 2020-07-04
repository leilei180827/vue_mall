<template>
  <div id="home">
    <HomeNavBar />
    <Swiper :banners="banners" @imageLoad="imageLoad"></Swiper>
    <HomeFeatures :recommends="features" @imageLoad="imageLoad"></HomeFeatures>
  </div>
</template>

<script>
import HomeNavBar from "./homeChildren/HomeNavBar";
import Swiper from "components/common/swiper/Swiper.vue";
import HomeFeatures from "./homeChildren/HomeFeatures";
import { getMultiData } from "network/home.js";

export default {
  name: "Home",
  components: { HomeNavBar, HomeFeatures, Swiper },
  data() {
    return {
      banners: [],
      features: [],
    };
  },
  created() {
    this.getMultiData();
  },
  methods: {
    getMultiData() {
      getMultiData().then(({ data }) => {
        console.log(data);
        data.banner.list.map((item) => this.banners.push(item.image));
        // this.banners = data.banner.list;
        data.recommend.list.map((item) =>
          this.features.push({
            image: item.image,
            title: item.title,
            link: item.link,
          })
        );
        // this.recommends = data.recommend.list;
      });
    },
    imageLoad() {
      console.log("image loaded");
    },
  },
};
</script>

<style></style>
