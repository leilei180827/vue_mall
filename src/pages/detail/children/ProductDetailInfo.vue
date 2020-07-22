 <template>
  <div v-if="Object.keys(info).length!==0" class="product-detail-info">
    <div class="product-desc clearfix">
      <div class="start"></div>
      <div class="text">{{info.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="title">{{descImages}}</div>
    <div class="modal-shows">
      <img v-lazy="item" v-for="(item,index) in images" :key="index" @load="itemImageLoad" />
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "ProductDetailInfo",
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
      imageLoadCounter: 0
    };
  },
  computed: {
    images: function() {
      return this.info.detailImage[0].list;
    },
    descImages: function() {
      return this.info.detailImage[0].key;
    }
  },
  methods: {
    itemImageLoad() {
      this.$bus.$emit("itemImageLoad");
    }
  }
};
</script>
 
 <style scoped>
.product-detail-info {
  margin-top: 15px;
  padding: 0 8px 5px;
  border-bottom: 3px solid var(--color-border-bottom);
}
.product-desc {
  margin-bottom: 5px;
}
.product-desc .text {
  padding: 20px 0;
}
.product-desc .start,
.product-desc .end {
  height: 1px;
  width: 20%;
  background-color: #a3a3a5;
  position: relative;
}
.product-desc .start::before,
.product-desc .end::before {
  content: "";
  height: 5px;
  width: 5px;
  position: absolute;
  bottom: 0;
  background: #000;
}
.product-desc .start::before {
  left: 0;
}
.product-desc .end::before {
  right: 0;
}
.start {
  float: left;
}
.end {
  float: right;
}
.title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-title);
  margin: 8px 0;
}
.modal-shows img {
  width: 100%;
  margin-bottom: 5px;
}
</style>