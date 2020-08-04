const webpack = require("webpack");
const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const path = require("path");
const Mock = require("mockjs");
const Random = Mock.Random;
const resData = require("../serverData/resData");
const userConfig = require("./config");
const bodyParser = require("body-parser");

const config = merge.smart(baseConfig, {
  devtool: "source-map",
  devServer: {
    port: "1024",
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    before(app) {
      let recommendNum = 90;
      app.use(bodyParser());
      app.get("/api/getLocation", (req, res) => {
        const city = Mock.mock("@city");
        res.json({ code: 200, message: { cityName: city } });
      });
      app.get("/api/cities", (req, res) => {
        res.json({ code: 200, message: resData.cities });
      });
      app.get("/api/cheaps", (req, res) => {
        res.json({ code: 200, message: resData.cheaps });
      });
      app.get("/api/guessULike", (req, res) => {
        res.json({ code: 200, message: resData.guessULike });
      });
      app.get("/api/searchIntro", (req, res) => {
        res.json({ code: 200, message: resData.searchIntro });
      });
      app.post("/api/login", (req, res) => {
        const { phoneNumber, password } = req.body;
        if (
          phoneNumber === userConfig.phoneNumber &&
          password === userConfig.password
        ) {
          res.json({
            code: 200,
            message: {
              info: {
                order: {
                  all: null,
                  wait: null,
                  canUse: null,
                  refund_afterWork: null
                },
                ticket: null
              },
              username: "user1",
              phoneNumber: "135****5678"
            }
          });
        } else {
          res.json({
            code: 404,
            error: "Please enter correct phoneNumber and password!"
          });
        }
      });
      app.get("/api/delicious", (req, res) => {
        res.json({ code: 200, message: resData.business });
      });
      app.get("/api/detail/destination", (req, res) => {
        const destination = resData.business.commonStreet.slice(1);
        res.json({ code: 200, message: destination });
      });
      app.post("/api/detail/recommend", (req, res) => {
        const { curName } = JSON.parse(req.body.body);
        const commend = resData.guessULike
          .filter(item => item.name !== curName)
          .slice(0, 3);
        res.json({ code: 200, message: commend });
      });
      app.get("/api/shop/comment", (req, res) => {
        const commentNumber = Math.floor(Math.random() * 50) + 5;
        let comments = [];
        for (let i = 0; i < 3; i++) {
          let mockComment = {
            //头像
            head: Random.image("50x50", Random.color(), "mock"), //人均消费
            per_capita: Math.floor(Math.random() * 30) + 20, //等级
            level: Math.ceil(Math.random() * 6), //用户名
            username: Random.first(), //评分
            grade: Math.ceil(Math.random() * 5) * 20, //照片
            photos: {
              url: Random.image("98x98", "#00BCD4", "content"),
              num: 3
            }, //评论创建日期
            created_at: Random.date()
              .split("-")
              .filter((item, i) => i !== 0)
              .join("-"), //被浏览次数
            seen: Math.ceil(Math.random() * 200),
            content: Random.paragraph()
          };
          comments.push(mockComment);
        }
        res.json({ code: 200, message: comments });
      });
      app.get("/api/shop/groupInfo", (req, res) => {
        let groupInfos = [];
        const image = Random.image("60x45", "#cc6699", "mock");
        for (let i = 0; i < 3; i++) {
          if (i === 0) {
            groupInfos[i] = {
              text: "代金券一张,全场通用",
              image,
              exPrice: 20,
              price: 17,
              soldout: Math.ceil(Math.random() * 200) + 20
            };
          } else {
            let randomPrice = Math.ceil(Math.random() * 20) + 5;
            groupInfos[i] = {
              text: Random.cword(3, 5),
              image,
              exPrice: randomPrice,
              price: randomPrice - 3,
              soldout: Math.ceil(Math.random() * 200) + 20
            };
          }
        }
        res.json({ code: 200, message: groupInfos });
      });
      app.get("/api/shop/recommend", (req, res) => {
        let recommend = {
          recommendNum,
          titleRecommend: [],
          content: []
        };
        for (let i = 0; i < 10; i++) {
          recommend.titleRecommend.push({
            text: Random.cword(3, 5),
            num: Math.ceil(Math.random() * 20) + 5,
            image: Random.image("94X85", Random.color(), "dish")
          });
          recommend.content.push(Random.cword(3, 5));
        }
        res.json({ code: 200, message: recommend });
      });
      app.get("/api/shop/ad", (req, res) => {
        const address = ["大寺", "人民广场", "五大道", "中央广场", "小白楼"];
        const types = ["甜品", "饮料", "蛋糕", "烧烤", "火锅"];
        let ads = [];
        for (let i = 0; i < 10; i++) {
          let randomPrice = Math.ceil(Math.random() * 20) + 5;
          let randomNum = Math.floor(Math.random() * 5);
          let ad = {
            shopName: Random.cword(3, 6),
            per_capita: Math.floor(Math.random() * 30) + 20,
            grade: Math.ceil(Math.random() * 5) * 20,
            address: address[randomNum],
            type: types[randomNum],
            distance: randomNum
          };
          let ticket = Random.boolean();
          if (ticket) {
            ad.ticket = {
              image: Random.image("94x70", Random.color(), "Ad"),
              text: "代金券1张",
              exPrice: randomPrice,
              price: randomPrice - 3,
              sold: Math.ceil(Math.random() * 20) + 5
            };
            ads.push(ad);
          } else {
            ads.push(ad);
          }
        }
        res.json({ code: 200, message: ads });
      });
      app.get("/api/shop/relation", (req, res) => {
        let result = {};
        result.relative = [
          "大寺",
          "人民广场",
          "五大道",
          "中央广场",
          "小白楼",
          "和平路",
          "北京路",
          "南京路"
        ];
        result.hot = ["星巴克", "哈根达斯", "喜茶", "贡茶"];
        res.json({ code: 200, message: result });
      });
      app.get("/api/photos/:selector", (req, res) => {
        let selector = req.params.selector;
        let result = [];
        for (let i = 0; i < 4; i++) {
          result.push({
            image: Random.image("188x160", "#ff9800", selector)
          });
        }
        res.json({
          code: 200,
          message: result
        });
      });
    }
  }
});

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(
  new OpenBrowserPlugin({
    url: "http://localhost:1024"
  })
);

module.exports = config;
