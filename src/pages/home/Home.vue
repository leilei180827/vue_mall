<template>
  <div id="home">
    <HomeNavBar />
    <Scroll
      class="scroll-area"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scrollMove"
      @pullingUp="scrollPullingUp"
      ref="scrollArea"
    >
      <div>
        <Swiper :banners="banners" @imageLoad="imageLoad"></Swiper>
        <HomeFeatures
          :recommends="features"
          @imageLoad="imageLoad"
        ></HomeFeatures>
        <HomeRecommend></HomeRecommend>
        <TabControl
          :titles="Object.keys(products)"
          @tabItemClick="tabItemClick"
          ref="tabControl"
        ></TabControl>
        <HomeProducts :products="products[currentType].list"></HomeProducts>
      </div>
    </Scroll>
  </div>
</template>

<script>
import HomeNavBar from "./homeChildren/HomeNavBar";
import HomeFeatures from "./homeChildren/HomeFeatures";
import HomeRecommend from "./homeChildren/HomeRecommend";
import HomeProducts from "./homeChildren/HomeProducts";
import Swiper from "components/common/swiper/Swiper.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";

import { getMultiData, getProductsData } from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeFeatures,
    HomeRecommend,
    HomeProducts,
    Swiper,
    Scroll,
    TabControl,
  },
  data() {
    return {
      banners: [],
      features: [],
      products: {
        pop: { page: 1, list: [] },
        sell: { page: 1, list: [] },
        new: { page: 1, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getMultiData();
    Object.keys(this.products).map((item) => this.getProductsData(item));
  },
  methods: {
    getMultiData() {
      getMultiData()
        .then(({ data }) => {
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
        })
        .catch((err) => console.log(err));
    },
    getProductsData(type) {
      getProductsData(type, this.products[type].page)
        .then(({ data: { list } }) => {
          this.products[type].page += 1;
          this.products[type].list.push(...list);
          console.log(this.products[type].list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tabItemClick(type) {
      this.currentType = type;
    },
    scrollMove(pos) {
      console.log(pos);
    },
    scrollPullingUp() {
      console.log("upload");
      this.getProductsData(this.currentType);
      this.$refs.scrollArea.finishPullingUp();
      setTimeout(() => {
        this.$refs.scrollArea.refresh();
      }, 20);
    },
    imageLoad() {
      console.log("image loaded");
    },
  },
};
</script>

<style scoped>
#home {
  /* position: relative; */
  height: 100vh;
}
.scroll-area {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
