import React from "react";

const CheapHeader = () => (
  <div className="container">
    <span className="text" />
    <span className="more">
      更多优惠
      <i className="arrowLeft" />
    </span>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      .text {
        height: 30px;
        width: 75px;
        background-size: 200px;
        background-position: 0 -29px;
        background-image: url(http://www.dpfile.com/app/app-m-module/static/a4af59210e26080ea9403fff6e56e6b1.png);
      }
      .more {
        font-size: 12px;
        color: #bbb;
        margin-right: 12px;
        margin-top: 12px;
      }
      .arrowLeft {
        position: absolute;
        border: 2px solid #bbb;
        transform: rotate(45deg);
        width: 8px;
        height: 8px;
        border-bottom: none;
        border-left: none;
        -webkit-transform: rotate(45deg);
      }
    `}</style>
  </div>
);

export default CheapHeader;
