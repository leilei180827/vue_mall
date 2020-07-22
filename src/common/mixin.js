import { debounce } from "./utils";
export const itemImageLoadListener = {
  data() {
    return {
      imageLoadListener: null,
    };
  },
  mounted() {
    const refreshDebounce = debounce(this.$refs.scrollArea.refresh, 200);
    this.imageLoadListener = () => {
      refreshDebounce();
    };
    this.$bus.$on("itemImageLoad", this.imageLoadListener);
  },
};
