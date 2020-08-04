import React from "react";
import Title from "./Title";

const MoreCity = ({ words }) => (
  <div>
    <Title title="更多城市" />
    <div className="container">
      {words.map((word, index) => (
        <div className="cell" key={index}>
          {word}
        </div>
      ))}
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-wrap: wrap;
      }
      .cell {
        width: 20%;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        color: #323232;
        border-bottom: 1px solid #ededed;
        border-right: 1px solid #ededed;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default MoreCity