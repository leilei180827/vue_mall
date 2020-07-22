<template>
  <div class="profile-balance">
    <div
      class="profile-balance-item"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="value">
        {{ getUnit(item) }}
        <span>{{ getValue(item) }}</span>
      </div>
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Balance",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    getUnit: (item) => {
      if (item.name === "balance") {
        return "$";
      }
      return "";
    },
    getValue: (item) => {
      if (item.name === "balance") {
        return item.value.toFixed(2);
      }
      return item.value;
    },
  },
};
</script>

<style scoped>
.profile-balance {
  display: flex;
  margin: 20px 10px 10px 0;
  justify-content: space-evenly;
  text-align: center;
}
.profile-balance-item {
  flex: 0 0 33%;
}
.value span {
  font-weight: 700;
  color: var(--color-high-text);
  font-size: 20px;
}
.profile-balance-item .name {
  text-transform: capitalize;
}
</style>
