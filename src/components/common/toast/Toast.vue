<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      message: ""
    };
  },
  methods: {
    show(content, duration = 1000) {
      this.isShow = true;
      this.message = content;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  padding: 5px 10px;
  text-align: center;
  background-color: #333;
  border: 1px solid #222;
  color: #fff;
  text-transform: capitalize;
}
</style>