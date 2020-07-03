<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
.tab {
  /* style of tab */
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  padding-left: 10px;
  padding-right: 10px;
  /* display flex */
  display: flex;
  justify-content: space-around;

  /* positioning */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  /* text center */
  text-align: center;
}
</style>
