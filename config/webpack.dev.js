
const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");

const baseConfig = require("./webpack.base.js");

module.exports = merge(baseConfig, {
  mode: "development",
  target: "web",
  plugins: [new ESLintPlugin({ extensions: ["js", "ts", "vue"] })],
  devServer: {
    hot: true,
    open: true,
  },
});
