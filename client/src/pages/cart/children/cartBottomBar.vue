<template>
  <div class="bottom-bar">
    <div class="all">
      <CheckButton @tickClick="tickClick" :isSelected="isAllSelected"></CheckButton>
      <span>All</span>
    </div>
    <div class="prices">Total:￥{{totalPrice}}</div>
    <div class="checkout">checkout({{selectedProducts}})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "./CheckButton";
export default {
  name: "CartBottomBar",
  components: { CheckButton },

  computed: {
    ...mapGetters(["productsInCart"]),
    totalPrice: function() {
      return this.productsInCart
        .filter(item => item.isSelected)
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    selectedProducts: function() {
      return this.productsInCart.filter(item => item.isSelected).length;
    },

    isAllSelected: function() {
      return !this.productsInCart.find(item => !item.isSelected);
    }
  },
  methods: {
    tickClick() {
      if (this.isAllSelected) {
        this.productsInCart.map(item => {
          item.isSelected = false;
        });
        this.$toast.show("nothing selected");
      } else {
        this.productsInCart.map(item => {
          item.isSelected = true;
        });
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  background: #fff;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-around;

  line-height: 40px;
  text-align: center;
  text-transform: capitalize;
  border: 1px solid rgba(100, 100, 100, 0.2);
}
.all,
.prices,
.checkout {
  width: fit-content;
}
.all {
  display: flex;
  align-items: center;
}
.checkout {
  background-color: var(--color-tint);
  border: 1px solid var(--color--tint);
  color: #fff;
  padding: 2px 5px;
}
</style>