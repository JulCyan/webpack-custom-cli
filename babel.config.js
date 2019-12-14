module.exports = {
  presets: [
    [
      "@babel/env",
      {
        // transform browser targetList
        // targets: {
        //   edge: "17",
        //   firefox: "60",
        //   chrome: "67",
        //   safari: "11.1",
        // },
        // 只导入用到的 polyfill(按需导入)
        useBuiltIns: "usage",
      },
    ],
  ]
}