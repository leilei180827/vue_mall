<template>
  <div id="home">
    <HomeNavBar />
    <TabControl
      class="tabControlFixed"
      :titles="Object.keys(products)"
      @tabItemClick="tabItemClick"
      v-show="isTabControlFixed"
    ></TabControl>
    <Scroll
      class="scroll-area"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scrollMove"
      @pullingUp="scrollPullingUp"
      ref="scrollArea"
      :data="products[currentType].list"
    >
      <div>
        <Swiper :swiperImages="banners" @imageLoad="compsImageLoad"></Swiper>
        <HomeFeatures :recommends="features" @imageLoad="compsImageLoad"></HomeFeatures>
        <HomeRecommend></HomeRecommend>
        <TabControl :titles="['pop','sell','new']" @tabItemClick="tabItemClick" ref="tabControl"></TabControl>
        <Products :products="products[currentType].list"></Products>
      </div>
    </Scroll>
    <BackToTop class="backtop-area" v-show="isShowBackTop" @backToTop="backToTop">
      <img src="~assets/img/common/top.png" alt />
    </BackToTop>
  </div>
</template>

<script>
import HomeNavBar from "./homeChildren/HomeNavBar";
import HomeFeatures from "./homeChildren/HomeFeatures";
import HomeRecommend from "./homeChildren/HomeRecommend";
import Swiper from "components/common/swiper/Swiper.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import Products from "components/content/products/Products";
import BackToTop from "components/content/backToTop/BackToTop.vue";
import TabControl from "components/content/tabControl/TabControl.vue";

import { getMultiData, getProductsData } from "network/home.js";
import { POP, SELL, NEW } from "common/constants";
import { itemImageLoadListener } from "common/mixin.js";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeFeatures,
    HomeRecommend,
    Swiper,
    Scroll,
    Products,
    BackToTop,
    TabControl
  },
  mixins: [itemImageLoadListener],
  data() {
    return {
      banners: [],
      features: [],
      products: {
        pop: { page: 1, list: [] },
        sell: { page: 1, list: [] },
        new: { page: 1, list: [] }
      },
      currentType: POP,
      currentIndex: 0,
      isShowBackTop: false,
      showBackTopBoundary: 1000,
      isTabControlFixed: false
    };
  },
  created() {
    this.getMultiData();
    Object.keys(this.products).map(item => this.getProductsData(item));
  },
  deactivated() {
    this.$bus.$off("itemImageLoad", this.imageLoadListener);
  },
  methods: {
    getMultiData() {
      getMultiData()
        .then(({ data }) => {
          data.banner.list.map(item => this.banners.push(item.image));
          data.recommend.list.map(item =>
            this.features.push({
              image: item.image,
              title: item.title,
              link: item.link
            })
          );
        })
        .catch(err => console.log(err));
    },
    getProductsData(type) {
      getProductsData(type, this.products[type].page)
        .then(({ data: { list } }) => {
          this.products[type].page += 1;
          this.products[type].list.push(...list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    tabItemClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = SELL;
          break;
        case 2:
          this.currentType = NEW;
          break;
        default:
          break;
      }
    },

    backToTop() {
      this.$refs.scrollArea.scrollTo(0, 0, 10);
    },
    scrollMove(pos) {
      this.isShowBackTop = pos.y < -1 * this.showBackTopBoundary;
      this.isTabControlFixed = pos.y < -1 * this.$refs.tabControl.$el.offsetTop;
    },
    scrollPullingUp() {
      this.getProductsData(this.currentType);
      this.$refs.scrollArea.finishPullingUp();
      setTimeout(() => {
        this.$refs.scrollArea.refresh();
      }, 20);
    },
    compsImageLoad() {
      this.$refs.scrollArea.refresh();
    }
  }
};
</script>

<style scoped>
#home {
  /* position: relative; */
  height: 100vh;
}
.tabControlFixed {
  position: relative;
  background: #fff;
  z-index: 1;
}
/* .tabControlFixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 10;
  background:#fff
} */
.scroll-area {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.backtop-area {
  position: absolute;
  right: 10px;
  bottom: 60px;
  z-index: 1;
}
</style>
