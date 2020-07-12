<template>
  <div id="categories">
    <CategoryNavBar></CategoryNavBar>
    <div class="content">
      <SideMenu :categories="categories" />
      <SubMenu />
    </div>
  </div>
</template>

<script>
import { CategoryNavBar, SubMenu, SideMenu } from "./children";
import { getCategory } from "network/category.js";
export default {
  name: "Category",
  components: { CategoryNavBar, SubMenu, SideMenu },
  data() {
    return {
      categories: []
    };
  },
  created() {
    this._getCategory();
  },
  methods: {
    _getCategory() {
      getCategory().then(({ data }) => {
        this.categories = data.category.list;
      });
    }
  }
};
</script>

<style scoped>
#categories {
  height: 100vh;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
</style>
