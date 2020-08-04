import React from "react";

const Arrow = ({ direction,mergeStyles }) => {
  const map = {
    right: 1,
    top: 3,
    left: 5,
    bottom: 7
  };
  return (
    <div className="arrow" style={{...mergeStyles}}>
      <style jsx>{`
        .arrow {
          border-right: 2px solid #ccc;
          border-bottom: 2px solid #ccc;
          width: 8px;
          height: 8px;
          display: inline-block;
          transform: rotate(
            ${direction ? map[direction] * -45 + "deg" : "-45deg"}
          );
        }
      `}</style>
    </div>
  );
};

export default Arrow;
