const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
    headers: {
    'Access-Control-Allow-Origin': '*',
  },

    historyApiFallback: true,
  },
  devtool: 'source-map',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js", // ← MUST be here!
      exposes: {
          './ProductList': './src/components/ProductList',
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
