<template>
  <div class="back-to-top" @click="backToTop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  methods: {
    backToTop() {
    //   console.log("click on backtotop");
      this.$emit("backToTop");
    }
  }
};
</script>

<style scoped>
.back-to-top img {
  width: 43px;
  height: 43px;
}
</style>