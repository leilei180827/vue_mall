<template>
  <div id="profile">
    <NavBar class="profile-navbar">
      <div slot="center">Fashion Capital</div>
    </NavBar>
    <UserInfo />
    <Balance :data="balanceInfos" />
    <ListView />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import { UserInfo, ListView, Balance } from "./children";
export default {
  name: "Profile",
  components: { NavBar, UserInfo, ListView, Balance },
  data: () => {
    return {
      balanceInfos: [
        {
          name: "balance",
          value: 0,
        },
        {
          name: "credit points",
          value: 0,
        },
        {
          name: "discount ticket",
          value: 0,
        },
      ],
      listInfos: ["message", "redeem", "membership"],
    };
  },
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
  position: relative;
  /* overflow:hidden */
}
.profile-navbar {
  background-color: var(--color-tint);
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
}
</style>
