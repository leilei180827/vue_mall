<template>
  <div class="detail-navbar">
    <NavBar>
      <div class="nav-left" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center">
        <TabControl
          :titles="titles"
          @tabItemClick="tabItemClick"
          :customTextStyling="customTextStyling"
        ></TabControl>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
export default {
  name: "DetailNavBar",
  components: { NavBar, TabControl },
  props: {
    titles: {
      type: Array,
      default() {
        return ["images", "details", "comments", "similars"];
      }
    }
  },
  data() {
    return {
      customTextStyling: {
        fontSize: "14px",
        padding: "2px",
        textTransform: "capitalize"
      }
    };
  },
  methods: {
    tabItemClick(type) {
      this.$emit("tabItemClick", type);
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.detail-navbar {
  padding-top: 2px;
}
.nav-left {
  margin-top: 6px;
}
</style>