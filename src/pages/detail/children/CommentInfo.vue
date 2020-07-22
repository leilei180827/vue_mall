<template>
<!--when there isn't any comment, need an empty div to collect themeTop -->
  <div>
    <div v-if="Object.keys(info).length!==0" class="comment-info">
      <div class="title">
        <span>comments</span>
        <span>more</span>
      </div>
      <div class="user">
        <img :src="user.avatar" alt />
        <span>{{user.uname}}</span>
      </div>
      <div class="comment">
        <span>{{info.content}}</span>
      </div>
      <div class="purchase-track">
        <span class="date">{{info.created | showDate}}</span>
        <span>{{info.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils.js";
export default {
  name: "CommentInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    user: function() {
      return this.info.user;
    }
  },
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy/MM/dd");
    }
  }
};
</script>

<style scoped>
.comment-info {
  margin-bottom: 15px;
  padding: 0 8px 5px;
  border-bottom: 3px solid var(--color-border-bottom);
}
.comment-info .title {
  display: flex;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-title);
  margin: 10px 0;
  justify-content: space-between;
  text-transform: capitalize;
}
.user {
  display: flex;
  align-items: center;
}
.user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.user span {
  margin-left: 10px;
  vertical-align: center;
  font-weight: 600;
  color: var(--color-title);
}
.purchase-track {
  margin-top: 5px;
}
.purchase-track .date {
  margin-right: 10px;
}
</style>