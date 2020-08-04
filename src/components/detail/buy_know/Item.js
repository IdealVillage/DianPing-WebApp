import React from "react";
import { Line } from "../../common";

const Item = ({ head, content }) => (
  <div className="item">
    <span className="head">{head}</span>
    <span className="content">{content}</span>
    <Line />
    <style jsx>{`
      .item {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-family: Helvetica;
      }
      .head {
        margin-bottom: 10px;
        color: #999;
        font-size: 13px;
      }
      .content {
        margin-bottom: 10px;
        color: #666;
        font-size: 14px;
      }
      .content::before {
        content: "•";
        color: #999;
        position: absolute;
        left: 2px;
      }
    `}</style>
  </div>
);

export default Item;
