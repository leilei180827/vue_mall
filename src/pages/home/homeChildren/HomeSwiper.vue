<template>
  <div class="homeSwiper">
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
          <img :src="item.image" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "components/commom/swiper/Swiper.vue";
import SwiperItem from "components/commom/swiper/SwiperItem.vue";
export default {
  name: "HomeSwiper",
  components: { Swiper, SwiperItem },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>