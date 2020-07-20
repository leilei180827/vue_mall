<template>
  <Scroll class="wrapper">
    <div class="side-menu">
      <div
        class="side-menu-item"
        :class="{active:currentIndex === index}"
        v-for="(item,index) in categories"
        :key="index"
        @click="itemClick(index)"
      >{{item.title}}</div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "SideMenu",
  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("sideMenuClick", index);
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100px;
  height: 100%;
  border-right: 1px solid rgba(100, 100, 100, 0.3);
}
.side-menu-item {
  padding: 0 3px;
  line-height: 45px;
  height: 45px;
  text-align: center;
  border-left: 3px solid #fff;
}
.side-menu-item.active {
  border-left-color: var(--color-high-text);
  color: var(--color-high-text);
  font-weight: 700;
}
</style>