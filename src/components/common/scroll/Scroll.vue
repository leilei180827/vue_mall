<template>
  <div ref="scrollWrapper">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scroll: {},
    };
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 20);
  },
  methods: {
    initScroll() {
      if (!this.$refs.scrollWrapper) return;

      this.scroll = new Bscroll(this.$refs.scrollWrapper, {
        click: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType,
      });
      console.log(this.scroll);
      this.scroll.on("scroll", (pos) => {
        this.$emit("scroll", pos);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullingUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>

<style></style>
