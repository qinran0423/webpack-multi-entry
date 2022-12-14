const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "none",
  entry: {
    index: "./src/index.js",
    album: "./src/album.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Multi Entry",
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      title: "Multi Entry",
      template: "./src/album.html",
      filename: "album.html",
      chunks: ["album"]
    })
  ]
}
