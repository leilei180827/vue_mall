<template>
  <div class="mainTabBar">
    <TabBar>
      <TabBarItem :link="'/home'" >
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">Home</div>
      </TabBarItem>
      <TabBarItem :link="'/category'">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">Category</div>
      </TabBarItem>
      <TabBarItem :link="'/cart'">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/cart_active.svg"
          alt=""
        />
        <div slot="item-text">Cart</div>
      </TabBarItem>
      <TabBarItem :link="'/profile'">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">Profile</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar.vue";
import TabBarItem from "components/common/tabBar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: { TabBar, TabBarItem },
};
</script>

<style scoped></style>
