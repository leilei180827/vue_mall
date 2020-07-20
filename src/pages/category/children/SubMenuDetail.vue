<template>
  <div class="sub-menu-item">this is submenu item</div>
</template>

<script>
export default {
  name: "SubMenuDetail",
  props: {
    subCategoryDetails: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
</style>