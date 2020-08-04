import React from "react";
import { RedirectBtn, Line } from "../../common";

const Item = ({ info, last }) => {
  const borderBottom = last ? "" : "0.5px solid #e1e1e1";
  return (
    <RedirectBtn mergeStyles={{ padding: "20px", borderBottom }}>
      <div className="container">
        <img src={info.image} />
        <span className="content">
          <span className="text">{info.text}</span>
          <span className="price">
            <span>￥{info.price}</span>
            <span>￥{info.exPrice}</span>
          </span>
        </span>
        <span className="soldout">
          已售
          {info.soldout}
        </span>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-around;
            width: 100%;
          }
          img {
            width: 60px;
            height: 45px;
          }
          .content {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-left: 10px;
          }
          .content span {
            display: inline-block;
          }
          .soldout {
            color: #999;
            font-size: 12px;
            margin-top: 25px;
            margin-right: 20px;
          }
          .text {
            color: #323232;
            font-size: 14px;
            margin-bottom: 10px;
          }
          .price span:first-child {
            color: #f63;
            font-size: 18px;
            margin-right: 10px;
          }
          .price span:last-child {
            color: #323232;
            font-size: 12px;
            text-decoration: line-through;
          }
        `}</style>
      </div>
    </RedirectBtn>
  );
};

export default Item;
