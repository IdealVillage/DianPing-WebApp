import React from "react";

const ForwardArrow = ({config,linTo}) => (
  <p className="arrow" onClick={linTo?linTo:()=>{}}>
    <style jsx>{`
      .arrow {
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
  </p>
);

export default ForwardArrow