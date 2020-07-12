<template>
  <img
    class="checkButton"
    :class="{active:isSelected}"
    @click="tickClick"
    src="~assets/img/cart/tick.svg"
    alt
  />
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isSelected: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    tickClick() {
      this.$emit("tickClick");
    }
  }
};
</script>

<style scoped>
img {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
}
.active {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>