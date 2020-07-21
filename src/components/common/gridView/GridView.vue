<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: {
    cols: {
      type: Number,
      default: 2
    },
    wMargin: {
      type: Number,
      default: 8
    },
    hMargin: {
      type: Number,
      default: 8
    },
    itemSpace: {
      type: Number,
      default: 8
    },
    lineSpace: {
      type: Number,
      default: 8
    }
  },
  mounted:function() {
    setTimeout(() => {
      this.autolayout();
    }, 20);
  },
  updated:function() {
    this.autolayout();
  },
  methods: {
    autolayout() {
      console.log("autolayout");
      //   find the grid-view elment and its children
      let gridView = this.$refs.gridView;
      let gridViewChildren = gridView.children;
      //style grid-view
      gridView.style.padding = `${this.wMargin}px ${this.hMargin}px`;
      let itemWidth =
        (gridView.clientWidth -
          2 * this.wMargin -
          (this.cols - 1) * this.itemSpace) /
        this.cols;
      for (let i = 0; i < gridViewChildren.length; i++) {
        let child = gridViewChildren[i];
        child.style.width = `${itemWidth}px`;
        //   add space between items
        if ((i + 1) % 2 !== 0) {
          child.style.marginRight = `${this.itemSpace}px`;
        }
        //add space between lines
        if (i > this.cols - 1) {
          child.style.marginTop = `${this.lineSpace}px`;
        }
      }
    }
  }
};
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>