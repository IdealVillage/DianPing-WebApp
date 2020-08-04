import React from "react";

const RedirectBtn = ({ text, linkTo,children,mergeStyles }) => (
  <a className="fit" onClick={linkTo} style={{...mergeStyles}}>
    {text}
    {children}
    <p className="up-btn" />
    <style jsx>{`
      .fit {
        color: #999;
        font-size: 14px;
        display: flex;
        align-items: center;
        height: 40px;
        position: relative;
        margin-left: 10px;
        padding: 10px;
      }
      .up-btn {
        border-right: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
        width: 8px;
        height: 8px;
        display: inline-block;
        position: absolute;
        right: 15px;
        transform: rotate(-45deg);
      }
    `}</style>
  </a>
);

export default RedirectBtn;
