<template>
  <div class="product-item" @click="productClick">
    <img :src="productItem.show.img" alt />
    <div class="product-text">
      <p>{{productItem.title}}</p>
      <span class="price">￥{{productItem.price}}</span>
      <span class="like">{{productItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProductItem",
  props: {
    productItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    productClick() {
      console.log(this.productItem.iid);
      this.$router.push("/detail/" + this.productItem.iid);
    }
  }
};
</script>

<style scoped>
.product-item img {
  width: 100%;
  margin-bottom: 10px;
}
.product-text {
  text-align: center;
  font-size: 14px;
}
.product-text p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.product-text .price {
  color: var(--color-tint);
  margin-right: 20px;
}
.like {
  position: relative;
}
.like::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0px;
  height: 14px;
  width: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>