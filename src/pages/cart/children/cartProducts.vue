<template>
  <Scroll :probeType="3" :pullUpLoad="true" class="scroll-wrapper" ref="scrollArea">
    <div>
      <CartProductItem
        v-for="(item,index) in productsInCart"
        :key="index"
        :product="item"
        @itemTick="itemTick"
      ></CartProductItem>
    </div>
  </Scroll>
</template>

<script>
import CartProductItem from "./cartProductItem";
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "CartProducts",
  components: { CartProductItem, Scroll },
  data() {
    return {
      isAllSelected: true
    };
  },
  computed: {
    ...mapGetters(["productsInCart"])
  },
  methods: {
    itemTick() {
      this.isAllSelected = this.productsInCart.find(item => !item.isSelected)
        ? false
        : true;
    }
  }
};
</script>

<style scoped>
</style>