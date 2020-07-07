<template>
  <div class="product-size-info" v-if="Object.keys(info).length!==0">
    <table class="sizes" v-for="(size,index) in sizes" :key="index">
      <tr v-for="(subSize,index) in size" :key="index">
        <td v-for="(item,index) in subSize" :key="index">{{item}}</td>
      </tr>
    </table>
    <table class="properties">
      <tr v-for="(item,index) in properties" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductSizeInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    sizes: function() {
      return this.info.sizes;
    },
    properties: function() {
      return this.info.infos;
    }
  }
};
</script>

<style scoped>
.product-size-info {
  margin-top: 15px;
  padding: 0 8px 5px;
  border-bottom: 3px solid var(--color-border-bottom);
}
.product-size-info table {
  width: 100%;
}
table,
tr,
td {
  border: 1px solid var(--color-text);
  border-collapse: collapse;
  text-align: center;
}
tr {
  line-height: 30px;
}
.sizes {
  margin-bottom: 8px;
}
.properties .key {
  min-width: 60px;
}
.properties .value {
  color: var(--color-high-text);
}
</style>