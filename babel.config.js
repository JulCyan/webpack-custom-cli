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
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-do-expressions",
    "@babel/plugin-proposal-export-default-from",
    // "@babel/plugin-proposal-export-namespace-from",
    // "@babel/plugin-proposal-function-bind",
    // "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    // "@babel/plugin-proposal-numeric-separator",
    // "@babel/plugin-proposal-optional-chaining",
    // "@babel/plugin-proposal-pipeline-operator",
    // "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-syntax-import-meta",
  ]
}