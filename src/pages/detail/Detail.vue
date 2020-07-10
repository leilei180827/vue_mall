<template>
  <div id="detail">
    <DetailNavBar
      @tabItemClick="tabItemClick"
      :titles="titles"
      :currentIndex="currentIndex"
    ></DetailNavBar>
    <Scroll
      :probeType="3"
      :pullUpLoad="true"
      ref="scrollArea"
      @scroll="scrollMove"
      class="scroll-area"
    >
      <div>
        <Swiper
          class="detail-swiper"
          :swiperImages="swiperImages"
          @imageLoad="imageLoad"
          ref="gallery"
        ></Swiper>
        <ProductBasicInfo :info="basicInfo"></ProductBasicInfo>
        <ShopInfo :info="shop"></ShopInfo>
        <ProductDetailInfo :info="detailInfo"></ProductDetailInfo>
        <ProductSizeInfo :info="sizeInfo" ref="detail"></ProductSizeInfo>
        <CommentInfo :info="commentInfo" ref="comment"></CommentInfo>
        <RecommendInfo :info="recommendList" ref="similar"></RecommendInfo>
      </div>
    </Scroll>
    <BackToTop
      class="backtop-area"
      v-show="isShowBackTop"
      @backToTop="backToTop"
    >
      <img src="~assets/img/common/top.png" alt />
    </BackToTop>
    <BottomBar class="bottom-bar" @addToCart="addToCart"></BottomBar>
  </div>
</template>

<script>
import DetailNavBar from "./detailChildren/DetailNavBar";
import ProductBasicInfo from "./detailChildren/ProductBasicInfo";
import ProductDetailInfo from "./detailChildren/ProductDetailInfo";
import ProductSizeInfo from "./detailChildren/ProductSizeInfo";
import ShopInfo from "./detailChildren/ShopInfo";
import CommentInfo from "./detailChildren/CommentInfo";
import RecommendInfo from "./detailChildren/RecommendInfo";
import BottomBar from "./detailChildren/BottomBar";
import Swiper from "components/common/swiper/Swiper.vue";
import BackToTop from "components/content/backToTop/BackToTop";
import Scroll from "components/common/scroll/Scroll";

import {
  getDetail,
  getRecommend,
  BasicInfo,
  SizeDetail,
  ShopDetail,
} from "network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    ProductBasicInfo,
    ProductDetailInfo,
    ProductSizeInfo,
    ShopInfo,
    CommentInfo,
    RecommendInfo,
    BottomBar,
    Swiper,
    BackToTop,
    Scroll,
  },
  data() {
    return {
      id: "",
      titles: ["gallery", "detail", "comment", "similar"],
      swiperImages: [],
      basicInfo: {},
      sizeInfo: {},
      detailInfo: {},
      shop: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      currentIndex: 0,
      isShowBackTop: false,
      showBackTopBoundary: 1000,
    };
  },
  methods: {
    tabItemClick(type) {
      this.$refs.scrollArea.scrollTo(0, -this.$refs[type].$el.offsetTop, 10);
    },
    getDetail(iid) {
      getDetail(iid)
        .then(({ result }) => {
          console.log(result);
          this.swiperImages = result.itemInfo.topImages;
          this.basicInfo = new BasicInfo(
            result.itemInfo,
            result.columns,
            result.shopInfo.services
          );
          this.shop = new ShopDetail(result.shopInfo);
          this.detailInfo = result.detailInfo;
          this.sizeInfo = new SizeDetail(
            result.itemParams.info,
            result.itemParams.rule
          );
          if (result.rate.list) {
            this.commentInfo = result.rate.list[0];
          }
        })
        .catch((err) => console.log(err));
    },
    getRecommend() {
      getRecommend()
        .then(({ data }) => {
          console.log(data);
          this.recommendList = data.list;
        })
        .catch((err) => console.log(err));
    },
    imageLoad() {
      console.log("image loaded");
    },
    backToTop() {
      this.$refs.scrollArea.scrollTo(0, 0, 10);
    },
    scrollMove(pos) {
      this.isShowBackTop = pos.y < -1 * this.showBackTopBoundary;
      this.jumpToTheme(Math.abs(pos.y));
    },
    jumpToTheme(y) {
      for (let i = 0; i < this.themeTops.length - 1; i++) {
        if (y >= this.themeTops[i] && y < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    addToCart() {
      const product = {
        iid: this.iid,
        imgUrl: this.swiperImages[0],
        title: this.basicInfo.title,
        desc: this.basicInfo.desc,
        price: this.basicInfo.nowPrice,
        count: 1,
      };
      this.$store.dispatch("add_to_cart", product).then((res) => {
        console.log(res);
      });
    },
    collectThemeTops() {
      this.themeTops = [];
      this.titles.map((item) => {
        this.themeTops.push(this.$refs[item].$el.offsetTop);
      });
      this.themeTops.push(Number.MAX_VALUE);
      console.log(this.themeTops);
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail(this.$route.params.iid);
    this.getRecommend();
  },
  mounted() {
    this.collectThemeTops();
  },
  updated() {
    this.collectThemeTops();
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 1;
  height: 100vh;
  background: #fff;
}
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
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
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  z-index: 1;
  background: #fff;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
}
</style>
