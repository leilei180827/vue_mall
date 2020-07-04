<template>
  <div class="swiper">
    <van-swipe :autoplay="4000" indicator-color="#ff5777">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="" @load="imageLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.loaded) {
        this.$emit("imageLoad");
        this.loaded = true;
      }
      return;
    },
  },
};
</script>

<style scoped>
/* .van-swipe__indicators is where to style indicators */
.swiper {
  width: 100%;
  overflow: hidden;
}
.swiper img {
  width: 100%;
}
</style>
