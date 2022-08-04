const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const path = require("path");

const plugins = [
  new HtmlWebpackPlugin({
    title: "Smart platform",
    filename: "index.html",
    template: path.resolve(__dirname, "src", "pages/index", "index.pug"),
    chunks: ["shared", "index"],
  }),
  new HtmlWebpackPlugin({
    title: "Program 1",
    filename: "program1.html",
    template: path.resolve(__dirname, "src", "pages/program1", "program1.pug"),
    chunks: ["shared", "program1"],
  }),
  new HtmlWebpackPlugin({
    title: "Exercise",
    filename: "exercise.html",
    template: path.resolve(__dirname, "src", "pages/exercise", "exercise.pug"),
    chunks: ["shared", "exercise"],
  }),
  new HtmlWebpackPugPlugin(),
];

module.exports = {
  entry: {
    shared: path.resolve(__dirname, "src/shared", "shared.js"),
    index: path.resolve(__dirname, "src", "pages/index", "index.js"),
    program1: path.resolve(__dirname, "src", "pages/program1", "program1.js"),
    exercise: path.resolve(__dirname, "src", "pages/exercise", "exercise.js"),
  },
  output: {
    filename: "[name].[hash].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: plugins,

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },

    compress: true,
    port: 3001,
    open: true,
    liveReload: true,

    onListening: (server) => {
      if (!server) throw new Error("No webpack dev server specified");

      const port = server.server.address().port;
      console.log(`Listening on port:, ${port}`);
    },
    static: [path.resolve(__dirname, "src")],
  },
};
