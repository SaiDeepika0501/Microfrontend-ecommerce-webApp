const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    publicPath: "auto",
    // publicPath: 'https://your-app-domain/',

  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        './CartApp': './src/App.jsx', 
        './CartShow': './src/CartShow',
         "./cartState": "./src/cartState",// 👈 Expose the UI component
      },
      shared: {
  react: {
    singleton: true,
    requiredVersion: "^18.2.0",
    strictVersion: true,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: "^18.2.0",
    strictVersion: true,
  },
  "react-router-dom": {
    singleton: true,
    requiredVersion: "^6.22.3",
  },
},

    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
  patterns: [
    { from: path.resolve(__dirname, 'public/_redirects'), to: path.resolve(__dirname, 'dist') },
  ],
}),

  ],
};
