module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets",
        network: "@/network",
        pages: "@/pages",
        router: "@/router",
        utils: "@/utils",
        content: "components/content",
      },
    },
  },
};
