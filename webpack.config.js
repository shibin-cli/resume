const HtmlWebpackPlugin  = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')
/**@type {import('webpack').Configuration} */
module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        clean: true
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },  {
            test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
            loader: 'base64-inline-loader',
          },]
    },
    resolve: {
        // 加快搜索速度
        modules: [path.resolve(__dirname, 'node_modules')]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin()
    ]

}