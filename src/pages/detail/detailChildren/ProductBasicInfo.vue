<template>
  <div class="product-basic-info">
    <div class="title">{{info.title}}</div>
    <div class="prices">
      <span class="current-price">{{info.newPrice}}</span>
      <span class="previous-price">{{info.oldPrice}}</span>
      <span class="discount">{{info.discount}}</span>
    </div>
    <div class="info-others">
      <div class="info-other" v-for="(item,index) in info.columns" :key="index">{{item}}</div>
    </div>
    <div class="services">
      <div class="service" v-for="(item,index) in info.services" :key="index">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBasicInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      columns: []
    };
  },
  mounted() {
    console.log(this.info);
  }
};
</script>

<style scoped>
.product-basic-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  font-weight: 600;
  margin: 5px 0 10px;
  color: var(--color-text);
}
.prices {
  margin-bottom: 10px;
}
.current-price {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-high-text);
  margin-right: 8px;
}
.previous-price {
  font-size: 12px;
  text-decoration: line-through;
  margin-right: 8px;
}
.discount {
  background-color: var(--color-high-text);
  color: #fff;
  border-radius: 5px 5px;
}
.info-others {
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
  line-height: 30px;
}
.info-other {
  flex: 1;
}
.info-other:last-child {
  text-align: end;
}
.services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
}
.service {
  width: fit-content;
}
.service img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.service span {
  font-size: 13px;
  color: var(--color-text);
}
</style>