const webpack = require("webpack");
const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = merge.smart(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                // 压缩 jpeg 的配置
                progressive: true,
                quality: 65
              },
              optipng: {
                // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                enabled: false
              },
              pngquant: {
                // 使用 imagemin-pngquant 压缩 png
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                // 压缩 gif 的配置
                interlaced: false
              },
              webp: {
                // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                quality: 75
              }
            }
          }
        ]
      }
      // {
      //     test:/\.css$/,
      //     include:[
      //       path.resolve(__dirname,'../src')
      //     ],
      //     use:[
      //         'style-loader',
      //         {
      //             loader:'css-loader',
      //             options:{
      //                 minimize:true
      //             }
      //         }
      //     ]
      // }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        venders: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        },
        default: {
          minSize: 0,
          minChunks: 2,
          reuseExistingChunk: true,
          name: "utils"
        }
      }
    }
  }
});

config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
