<template>
  <div id="categories">
    <CategoryNavBar></CategoryNavBar>
    <div class="content">
      <SideMenu :categories="categories" @sideMenuClick="sideMenuClick" class="side-menu" />
      <Scroll id="sub-menu-scroll" :data="[categoryData]" ref="scrollArea">
        <!-- <Scroll id="sub-menu-scroll"> -->
        <div>
          <SubMenuCategory :subCategories="showSubCategories"></SubMenuCategory>
          <TabControl :titles="titles" @tabItemClick="tabItemClick" ref="tabControl"></TabControl>
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
import { POP, SELL, NEW } from "common/constants";
import { itemImageLoadListener } from "common/mixin";
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
  mixins: [itemImageLoadListener],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentTabType: POP,
      titles: [POP, SELL, NEW]
    };
  },
  created() {
    this._getCategory();
  },
  deactivated(){
    this.$bus.$off("itemImageLoad",this.imageLoadListener)
  },
  computed: {
    showSubCategories: function() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].subCategories;
    },
    showSubCategoryDetail: function() {
      if (this.currentIndex === -1) return [];
      else {
        return this.categoryData[this.currentIndex].subCategoryDetails[
          this.currentTabType
        ];
      }
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(({ data }) => {
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
      getSubCategory(this.categories[index].maitKey)
        .then(({ data: { list } }) => {
          this.categoryData[index].subCategories = list;
          this.categoryData = { ...this.categoryData };
          this._getSubCategoryDetail(index, POP);
          this._getSubCategoryDetail(index, SELL);
          this._getSubCategoryDetail(index, NEW);
        })
        .catch(err => {
          console.log("sub categories failure:" + err);
        });
    },
    _getSubCategoryDetail(index, type) {
      getSubCategoryDetail(this.categories[index].miniWallkey, type)
        .then(res => {
          this.categoryData[index].subCategoryDetails[type] = res;
          this.categoryData = { ...this.categoryData };
        })
        .catch(err => {
          console.log("subcategory detail failure:" + err);
        });
    },
    sideMenuClick(index) {
      this.currentIndex = index;
      if (this.categoryData[index].subCategories.length === 0) {
        this._getSubCategory(index);
      }
    },
    tabItemClick(index) {
      switch (index) {
        case 0:
          this.currentTabType = POP;
          break;
        case 1:
          this.currentTabType = SELL;
          break;
        case 2:
          this.currentTabType = NEW;
          break;
        default:
          break;
      }
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
#sub-menu-scroll {
  flex: 1;
  height: 100%;
}
</style>
