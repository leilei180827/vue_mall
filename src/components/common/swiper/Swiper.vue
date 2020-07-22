<template>
  <van-swipe :autoplay="4000" indicator-color="#ff5777">
    <van-swipe-item v-for="(item, index) in swiperImages" :key="index">
      <img :src="item" alt @load="imageLoad" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    swiperImages: {
      type: Array,
      default() {
        return [];
      }
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    }
  }
};
</script>

<style scoped>
/* .van-swipe__indicators is where to style indicators */
.van-swipe {
  width: 100%;
  overflow: hidden;
}
.van-swipe img {
  width: 100%;
}
</style>
