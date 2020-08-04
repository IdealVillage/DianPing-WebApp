import React from "react";

const ThirdParty = () => (
  <div>
    <div className="head">
      <div className="line" />
      <div className="text">第三方账号登录</div>
      <div className="line" />
    </div>
    <div className="icons">
      <div className="icon icon-qq" />
      <div className="icon icon-weibo" />
    </div>
    <style jsx>{`
      .head {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 75px;
      }
      .line {
        height: 1px;
        background: #d7d7d7;
        width: 105px;
      }
      .text {
        color: #999;
        font-size: 15px;
        margin: 0 20px;
      }
      .icons {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      .icon {
        background: url(//www.dpfile.com/mod/app-m-login/0.1.36/css/img/oauth.png);
        height: 35px;
        width: 35px;
        background-size: 35px 105px;
        border-radius: 4.5px;
      }
      .icon-qq {
        background-position: 0 0;
      }
      .icon-weibo {
        background-position: 0 -35px;
        margin-left: 80px;
      }
    `}</style>
  </div>
);

export default ThirdParty;
