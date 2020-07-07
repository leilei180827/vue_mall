<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in titles"
      :key="index"
      @click="tabItemClick(index)"
    >
      <span :style="customTextStyling">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    },
    customTextStyling: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index;
      this.$emit("tabItemClick", this.titles[index]);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  justify-content: space-around;
  background: #fff;
}
.tab-control-item {
  flex: 1;
  padding: 5px;
}
.tab-control-item span {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  padding: 2px;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
