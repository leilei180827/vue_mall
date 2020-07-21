<template>
  <div class="product-item" @click="productClick">
    <!-- <img  :src="getImage" alt /> -->
    <img v-lazy="getImage" :key="getImage" alt />
    <div class="product-text">
      <p>{{ productItem.title }}</p>
      <span class="price">￥{{ productItem.price }}</span>
      <span class="like">{{ productItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    getImage() {
      console.log(this.productItem);
      return (
        this.productItem.img ||
        this.productItem.image ||
        this.productItem.show.img
      );
    },
  },
  methods: {
    productClick() {
      console.log(this.productItem.iid);
      this.$router.push("/detail/" + this.productItem.iid);
    },
  },
};
</script>

<style scoped>
.product-item {
  position: relative;
  padding-bottom: 40px;
}
.product-item img {
  width: 100%;
}
.product-text {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
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
