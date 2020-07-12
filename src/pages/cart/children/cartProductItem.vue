<template>
  <div class="cart-product-item">
    <CheckButton class="selector" @tickClick="tickClick" :isSelected="isSelected"></CheckButton>

    <!-- <div class="selector" @click="itemTicked" :class="{active:isSelected}">
      <img src="~assets/img/cart/tick.svg" alt />
    </div>-->
    <div class="image">
      <img :src="product.imgUrl" alt @load="imageLoad" />
    </div>
    <div class="infos">
      <div class="title">{{product.title}}</div>
      <div class="desc">Details:{{product.desc}}</div>
      <div class="numbers">
        <span class="price">￥{{product.price}}</span>
        <span class="count">*{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "CartProductItem",
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    isSelected: function() {
      return this.product.isSelected;
    }
  },
  methods: {
    imageLoad() {
      console.log("image load");
    },
    tickClick() {
      this.product.isSelected = !this.product.isSelected;
    }
  }
};
</script>

<style scoped>
.cart-product-item {
  width: 100%;
  display: flex;
  margin-bottom: 5px;
}
.selector {
  display: flex;
  justify-self: center;
  align-self: center;
  margin: 0 3px;
}
/* .selector img {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
} */
.image img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.infos {
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.title,
.desc {
  margin: 5px 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  font-size: 12px;
}
.numbers {
  display: flex;
  justify-content: space-between;
}
.active img {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>