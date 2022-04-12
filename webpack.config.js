const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  //   mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack5-ts-vue3",
      template: "./index.html",
    }),
  ],
};
