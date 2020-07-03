<template>
  <div class="tab-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon-active" v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :class="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      default: "",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive ? 'active' : ''
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.link);
    },
  },
};
</script>

<style scoped>
.tab-item {
  flex: 1;
}
.tab-item .item-text {
  margin-top: 1px;
  margin-bottom: 1px;
}
.item-icon img,
.item-icon-active img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: var(--color-tint);
}
</style>
