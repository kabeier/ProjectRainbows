const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    mode: isProd ? "production" : "development",
    entry: "./src/index.tsx",

    output: {
      filename: "bundle.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      clean: true,

    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },

    devServer: isProd
      ? undefined
      : {
          host: "0.0.0.0",
          port: 8080,
          allowedHosts: "all",
          hot: true,
          historyApiFallback: true,
          static: {
            directory: path.join(__dirname, "public"),
          },
          client: {
            webSocketURL: "auto://0.0.0.0:0/ws",
          },
          watchFiles: ["src/**/*", "public/**/*"],
        },
    devtool: isProd ? "source-map" : "eval-cheap-module-source-map",
    optimization: isProd
        ? {
            splitChunks: { chunks: "all" },
            runtimeChunk: "single",
          }
        : undefined,
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
      ...(process.env.ANALYZE === "true" ? [new BundleAnalyzerPlugin()] : []),
    ],
  };
};
