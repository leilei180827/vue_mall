<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
      <slot></slot>
    </div>
    <div class="indicator" v-if="showIndicator && slideCount >1">
      <div
        class="indicator-item"
        v-for="(item,index) in slideCount"
        :class="{active: index===currentIndex-1}"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper"
};
</script>

<style>
</style>