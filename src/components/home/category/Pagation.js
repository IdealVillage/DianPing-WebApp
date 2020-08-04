import React from "react";
import PagationDot from "./PagationDot";

const Pagation = ({ num, style, activeStyle, activeIndex }) => (
  <div className="container">
    {new Array(num)
      .fill(0)
      .map((item, index) => (
        <PagationDot
          style={style}
          activeStyle={activeStyle}
          active={activeIndex === index ? true : false}
          key={index}
        />
      ))}
    <style jsx>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10px;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Pagation;
