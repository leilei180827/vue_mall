<template>
  <div class="wrapper">
    <div class="message">
      <img src="~assets/img/profile/message.png" alt="" />
      <span>message</span>
    </div>
    <div class="redeem">
      <img src="~assets/img/profile/redeem.png" alt="" />
      <span>redeem</span>
    </div>
    <div class="membership">
      <img src="~assets/img/profile/membership.png" alt="" />
      <span>membership</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  margin-top: 20px;
}
.wrapper div {
  width: 100%;
  padding: 0 10px;
  height: 40px;
}
.wrapper div img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  vertical-align: middle;
}
.wrapper div span {
  font-size: 18px;
  text-transform: capitalize;
}
</style>
