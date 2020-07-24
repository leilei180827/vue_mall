<template>
  <div class="wrapper">
    <div class="supports">
      <div class="customer-service">
        <img src="~assets/img/detail/customer_service.png" alt />
        <span>service</span>
      </div>
      <div class="shop">
        <img src="~assets/img/detail/shop.png" alt />
        <span>shop</span>
      </div>
      <div class="like">
        <img src="~assets/img/detail/like.png" alt />
        <span>like</span>
      </div>
    </div>
    <div class="purchase">
      <div class="add-cart" @click="addToCart">
        <span>add to cart</span>
      </div>
      <div class="checkout" @click="goToCart">
        <span>checkout</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  methods: {
    addToCart() {
      console.log("add to cart");
      this.$emit("addToCart");
    },
    goToCart(){
      this.$router.push("/cart");
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  text-align: center;
}
.supports,
.purchase {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.supports {
  padding-bottom: 5px;
}
.supports div,
.purchase div {
  flex: 1;
}
.supports img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
  margin: 5px 0;
}
.supports span {
  display: block;
  font-size: 12px;
  text-transform: capitalize;
}
.purchase {
  line-height: 49px;
}
.purchase .add-cart {
  background-color: #ffe817;
  color: #333;
}
.purchase .checkout {
  background-color: #f69;
}
.purchase span {
  text-transform: capitalize;
}
</style>
