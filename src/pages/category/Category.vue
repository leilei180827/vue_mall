<template>
  <div id="categories">
    <CategoryNavBar></CategoryNavBar>
    <div class="content">
      <SideMenu :categories="categories" @sideMenuClick="sideMenuClick" />
      <Scroll class="sub-menu">
        <div>
          <SubMenuCategory :subCategories="showSubCategories"></SubMenuCategory>
          <TabControl
            :titles="titles"
            :currentIndex="currentTabIndex"
            @tabItemClick="tabItemClick"
            ref="tabControl"
          ></TabControl>
          <SubMenuDetail :products="showSubCategoryDetail"></SubMenuDetail>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import {
  CategoryNavBar,
  SubMenuCategory,
  SubMenuDetail,
  SideMenu
} from "./children";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import { POP, SELL, NEW } from "utils/constants";
import {
  getCategory,
  getSubCategory,
  getSubCategoryDetail
} from "network/category.js";
export default {
  name: "Category",
  components: {
    CategoryNavBar,
    SubMenuCategory,
    SubMenuDetail,
    SideMenu,
    Scroll,
    TabControl
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentTabIndex: 0,
      titles: [POP, SELL, NEW]
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubCategories: function() {
      if (this.currentIndex === -1) return [];
      console.log(this.categoryData[this.currentIndex]);
      return this.categoryData[this.currentIndex].subCategories;
    },
    showSubCategoryDetail: function() {
      if (
        this.categoryData[this.currentIndex] &&
        this.categoryData[this.currentIndex].subCategoryDetails
      ) {
        return this.categoryData[this.currentIndex].subCategoryDetails[
          this.titles[this.currentTabIndex]
        ];
      } else {
        return [];
      }
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(({ data }) => {
        console.log(data);
        this.categories = data.category.list;
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subCategories: [],
            subCategoryDetails: {
              [POP]: [],
              [SELL]: [],
              [NEW]: []
            }
          };
        }
        this._getSubCategory(0);
      });
    },
    _getSubCategory(index) {
      this.currentIndex = index;
      console.log(this.categories[index].maitKey);
      getSubCategory(this.categories[index].maitKey)
        .then(res => {
          console.log(res);
          console.log("sub categories success");
          this.categoryData[index].subCategories = res.data.list;
          this.categoryData = { ...this.categoryData };
          this._getSubCategoryDetail(index, POP);
          this._getSubCategoryDetail(index, SELL);
          this._getSubCategoryDetail(index, NEW);
        })
        .catch(err => {
          console.log(err);
          console.log("sub categories failure");
        });
    },
    _getSubCategoryDetail(index, type) {
      getSubCategoryDetail(this.categories[index].miniWallkey, type)
        .then(res => {
          console.log("subCategory detail");
          console.log(res);
          this.categoryData[index].subCategoryDetails[type] = res;
          this.categoryData = { ...this.categoryData };
        })
        .catch(err => {
          console.log(err);
          this.categoryData[index].subCategoryDetails[type] = [];
          this.categoryData = { ...this.categoryData };
          console.log("subcategory detail failure");
        });
    },
    sideMenuClick(index) {
      this.currentIndex = index;
      if (this.categoryData[index].subCategories.length === 0) {
        this._getSubCategory(index);
      }
    },
    tabItemClick(type, tabIndex) {
      this.currentTabIndex = tabIndex;
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
.sub-menu {
  flex: 1;
  height: 100%;
}
</style>
