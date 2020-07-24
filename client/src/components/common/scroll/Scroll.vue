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
      default: 1
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      scroll: {}
    };
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      if (!this.$refs.scrollWrapper) return;

      this.scroll = new Bscroll(this.$refs.scrollWrapper, {
        click: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType
      });
      this.scroll.on("scroll", pos => {
        this.$emit("scroll", pos);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullingUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  },
  watch: {
    data: function() {
      setTimeout(this.refresh, 20);
    }
  }
};
</script>

<style></style>
