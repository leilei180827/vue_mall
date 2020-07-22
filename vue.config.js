module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets",
        network: "@/network",
        pages: "@/pages",
        router: "@/router",
        common: "@/common",
        content: "components/content",
      },
    },
  },
};
