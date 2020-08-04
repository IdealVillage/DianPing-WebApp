import React from "react";
import { withRouter } from "react-router";

const DownloadWelfare = ({ history }) => (
  <div className="bg">
    <div className="info">
      <span>免费领取美食福利</span>
      <span className="line2">200元优惠及各种大奖等你来</span>
      <div onClick={() => history.push("/welfare")}>去领取</div>
    </div>
    <style jsx>{`
      .bg {
        background-image: url(//www.dpfile.com/app/app-m-module/static/9863055c881ed7eff8c35ab0b57fdb33.png);
        display: flex;
        height: 106px;
        background-position: center;
        background-size: 100% 100%;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 26%;
        flex: 1;
      }
      .info span {
        display: inline-block;
      }
      .info span:first-child {
        font-size: 18px;
        color: #333;
        font-weight: bold;
      }
      .line2 {
        color: #777;
        font-size: 12px;
      }
      .info div {
        font-size: 13px;
        margin-top: 10px;
      }
    `}</style>
  </div>
);

export default withRouter(DownloadWelfare);
