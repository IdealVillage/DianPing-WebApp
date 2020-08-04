import React from "react";

const Flag = ({ text }) => (
  <div className="container">
    <i className="flag" />
    <p className="text">{text}</p>
    <style jsx>{`
      .container{
        display: flex;
        margin-top: 10px;
      }
      .flag {
        width: 16px;
        height: 14px;
        background: url(//www.dpfile.com/mod/app-m-tuangou-order/0.2.24/img/icon.png);
        background-position: center -83px;
        background-size: 25px auto;
      }
      .text {
        color: #65c07a;
        font-size: 12px;
      }
    `}</style>
  </div>
);

export default Flag;
