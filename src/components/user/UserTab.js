import React from "react";

const UserTab = ({ text, id, selected, handleClick }) => (
  <div
    className={`tab ${selected && "selected"}`}
    onClick={() => handleClick(id)}
  >
    <span className="text">{text}</span>
    <style jsx>{`
      .tab {
        flex: 1;
        height: 100%;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
        color: #111;
        background-color: #fff;
      }
      .selected {
        color: #f63;
        border-bottom: 1px solid #f63;
      }
    `}</style>
  </div>
);

export default UserTab;
