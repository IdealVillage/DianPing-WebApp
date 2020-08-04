import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="title">
        <a>我的</a>
        <em>|</em>
        <a>最近浏览</a>
        <em>|</em>
        <a>网站地图</a>
        <em>|</em>
        <a>添加商户</a>
        <em>|</em>
        <a>意见反馈</a>
      </div>
      <div className="end">
        <a>电脑版</a>
        <em>|</em>
        <a>客户端</a>
      </div>
      <span>copyright ©2018 IdealVillage.test</span>
    </div>
    <style jsx>{`
      footer {
        background: #efefef;
        display: flex;
        justify-content: center;
        padding: 30px;
      }
      .container {
        display: flex;
        flex-direction: column;
      }
      .container div,
      .container span {
        color: #999;
        font-size: 12px;
        margin-top: 10px;
      }
      em {
        margin-left: 3px;
        margin-right: 3px;
      }
      .end {
        text-align: center;
      }
      .container span {
        text-align: center;
        margin-top: 10px;
      }
    `}</style>
  </footer>
);

export default Footer;
