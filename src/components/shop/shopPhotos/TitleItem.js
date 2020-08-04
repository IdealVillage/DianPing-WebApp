import React from "react";

const TitleItem = ({ info, show, handleClick }) => (
  <div className="item" onClick={() => handleClick(info.en)}>
    <a className={show ? "on" : ""}>{info.ch}</a>
    <style jsx>{`
      .item {
        width: 25%;
        line-height: 45px;
        font-size: 14px;
      }
      .on {
        color: #f63;
      }
    `}</style>
  </div>
);

export default TitleItem;
