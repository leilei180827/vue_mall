<template>
  <div class="shop-info">
    <div class="logo">
      <img :src="info.logo" alt />
      <span>{{info.name}}</span>
    </div>
    <div class="details">
      <div class="sales">
        <span class="value">{{info.sells}}</span>
        <span class="desc">sold</span>
      </div>
      <div class="sales">
        <span class="value">{{info.goodsCount}}</span>
        <span class="desc">goods</span>
      </div>
      <table>
        <tr class="score" v-for="(item,index) in info.score" :key="index">
          <td class="desc">{{item.name}}</td>
          <td class="number" :class="item.isBetter ? 'highNumber':'lowNumber'">{{item.score}}</td>
          <td v-if="item.isBetter">
            <span class="high">high</span>
          </td>
          <td v-else>
            <span class="low">low</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    console.log(this.info);
  }
};
</script>

<style scoped>
.shop-info {
  margin-top: 15px;
  padding: 0 8px 5px;
  border-bottom: 3px solid var(--color-border-bottom);
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.logo span {
  vertical-align: center;
  padding-left: 10px;
  font-size: 18px;
}
.details {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.sales,
.stock {
  width: fit-content;
}
.sales span {
  display: block;
}
.sales .value {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
}
.sales .desc {
  font-size: 12px;
  text-transform: uppercase;
}
table {
  border-spacing: 5px;
}
table td {
  text-align: center;
  font-size: 12px;
}
.highNumber {
  color: var(--color-high-text);
}
.lowNumber {
  color: var(--color-low);
}
.low,
.high {
  color: #fff;
  text-align: end;
}
.low {
  background-color: var(--color-low);
}
.high {
  background-color: var(--color-high-text);
}
</style>