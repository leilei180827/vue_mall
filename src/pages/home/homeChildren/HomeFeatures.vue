<template>
  <div class="features">
    <div class="feature-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeatures",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.loaded) {
        this.$emit("imageLoad");
        this.loaded = true;
      }
      return;
    },
  },
};
</script>

<style scoped>
.features {
  display: flex;

  margin-top: 5px;
}
.feature-item {
  flex: 1;
  text-align: center;
}
.feature-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}
.feature-item span {
  display: block;
  font-size: 12px;
}
</style>
