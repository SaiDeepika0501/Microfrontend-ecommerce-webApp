const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3005,
    headers: {
    'Access-Control-Allow-Origin': '*',
  },

    historyApiFallback: true,
  },
  devtool: "source-map",
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
         test: /\.css$/i,
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
      name: "container",
      remotes: {
        products: "products@https://mfe-products-app.netlify.app/remoteEntry.js",
        cart: "cart@https://mfe-cart-app.netlify.app/remoteEntry.js",
        auth: 'auth@https://auth-store.netlify.app/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
        "react-router-dom": { singleton: true, requiredVersion: "^6.22.3" },
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
