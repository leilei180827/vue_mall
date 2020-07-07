<template>
  <div id="detail">
    <DetailNavBar @tabItemClick="tabItemClick" :titles="titles"></DetailNavBar>
    <Swiper class="detail-swiper" :swiperImages="swiperImages" @imageLoad="imageLoad"></Swiper>
    <ProductBasicInfo :info="basicInfo"></ProductBasicInfo>
  </div>
</template>

<script>
import DetailNavBar from "./detailChildren/DetailNavBar";
import ProductBasicInfo from "./detailChildren/ProductBasicInfo";
import Swiper from "components/common/swiper/Swiper.vue";

import {
  getDetail,
  BasicInfo,
  SizeDetail,
  ShopDetail
} from "network/detail.js";
export default {
  name: "Detail",
  components: { DetailNavBar, ProductBasicInfo, Swiper },
  data() {
    return {
      titles: ["images", "details", "comments", "similars"],
      swiperImages: [],
      basicInfo: {},
      sizeInfo: {},
      detailInfo: {},
      shop: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      currentIndex: 0
    };
  },
  methods: {
    tabItemClick(type) {
      console.log(type);
    },
    getDetail(iid) {
      getDetail(iid)
        .then(({ result }) => {
          this.swiperImages = result.itemInfo.topImages;
          this.basicInfo = new BasicInfo(
            result.itemInfo,
            result.columns,
            result.shopInfo.services
          );
          console.log(this.basicInfo);
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
        .catch(err => console.log(err));
    },
    imageLoad() {
      console.log("image loaded");
    }
  },
  created() {
    this.getDetail(this.$route.params.iid);
  }
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
</style>
