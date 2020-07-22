<template>
  <div class="user-info">
    <div class="content">
      <img class="portrait" src="~assets/img/profile/user.png" alt="" />
      <div class="infos">
        <div class="sign">SignIn/SignUp</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.png" alt="" />
          <span>Update</span>
        </div>
      </div>
    </div>
    <img class="arrow-right" src="~assets/img/profile/arrow_right.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-info {
  background-color: var(--color-tint);
  color: #fff;
  padding: 0 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info .content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.user-info .arrow-right {
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.user-info .content .portrait {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.user-info .content .infos {
  flex: 1;
}
.phone {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.phone img {
  height: 20px;
  width: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
