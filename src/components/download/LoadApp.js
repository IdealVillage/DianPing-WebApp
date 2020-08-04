import React from "react";

const LoadApp = () => (
  <div className="container">
    <div className="title">
      <div className="logo">
        <img
          src="http://p0.meituan.net/mobileossweb/0148361773fb510d6a4497a9e7d1c03f11093.png"
          alt="logo"
        />
      </div>
      <a className="download">下载大众点评客户端</a>
    </div>
    <style jsx>{`
        .container{
            position: absolute;
            width: 100%;
            min-height: 100%;
            background: #eeeeee;
        }
        .title{
          padding: 82px 30px 330px 30px;
          text-align: center;
        }
        .logo{
          margin-bottom: 30px;
        }
        .title img{
          height: 46px;
        }
        .download{
            display:block;
            line-height: 40px;
            font-size:16px;
            height: 40px;
            background-color: #f63;
            color: #fff;
            margin:0 auto;
            border-radius: 4px;
        }
    `}</style>
  </div>
);

export default LoadApp