<template>
  <div id="categories">
    <CategoryNavBar></CategoryNavBar>
    <div class="content">
      <SideMenu :categories="categories" @sideMenuClick="sideMenuClick" />
      <Scroll class="sub-menu">
        <div>
          <SubMenuCategory :subCategories="showSubCategories"></SubMenuCategory>
          <TabControl
          :titles="['sell','pop','new']"
          :currentIndex="currentTabIndex"
          @tabItemClick="tabItemClick"
          ref="tabControl"
        ></TabControl>
          <SubMenuDetail ></SubMenuDetail>
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
      currentTabIndex:0,
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
              pop: [],
              sell: [],
              new: []
            },
            isRequested: false
          };
        }
        this._getSubCategory(0);
      });
    },
    _getSubCategory(index) {
      this.currentIndex = index;
      getSubCategory(this.categories[index].maitKey)
        .then(({ data }) => {
          console.log(data);
          console.log("sub categories success");
          this.categoryData[index].subCategories = data.list;
          this.categoryData = { ...this.categoryData };
          // this.subCategories[index].isRequested = true;
          // this.subCategories = { ...this.subCategories };
          // this._getSubCategoryDetail(index, "pop");
          // this._getSubCategoryDetail(index, "sell");
          // this._getSubCategoryDetail(index, "new");
        })
        .catch(err => {
          console.log(err);
          console.log("sub categories failure");
        });
    },
    _getSubCategoryDetail(index, type) {
      getSubCategoryDetail(this.categories[index].miniWallkey, type)
        .then(res => {
          this.categoryData[index].categoryDetails[type] = res;
          this.categoryData = { ...this.categoryData };
        })
        .catch(err => {
          console.log(err);
          console.log("subcategory detail failure");
        });
    },
    sideMenuClick(index) {
      console.log("index change");

      if (!this.categoryData[index].isRequested) {
        console.log("data request");
        this._getSubCategory[index];
      }
    },
    tabItemClick(type,index){
      this.currentTabIndex=index;
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
