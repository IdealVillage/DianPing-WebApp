import React from "react";

const ShopBtn = () => (
  <div className="btn">
    <a>
      <div className="write-comment item" />
      写点评
    </a>
    <a>
      <div className="upload item" />
      传图片
    </a>
    <style jsx>{`
      .btn {
        display: flex;
      }
      .btn a {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        font-size: 12px;
      }
      .btn a:first-child {
        border-right: 1px solid #f0f0f0;
      }
      .write-comment {
        background: url(//www.dpfile.com/app/app-m-module/static/1690f8356613e0366afca46da9d14da8.png) -1px
          0 no-repeat;
      }
      .upload {
        background: url(//www.dpfile.com/app/app-m-module/static/1690f8356613e0366afca46da9d14da8.png) -1px -43px
          no-repeat;
      }
      .item {
        width: 30px;
        height: 27px;
        background-size: 68px;
      }
    `}</style>
  </div>
);

export default ShopBtn;
