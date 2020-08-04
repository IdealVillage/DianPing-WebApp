import React from "react";

const Line = ({ width, height, align }) => (
  <div className={!align ? "justify" : "align"}>
    <style jsx>{`
      .justify {
        height: 1px;
        background: #f0f0f0;
        width: ${width || "100%"};
        margin: 0 auto;
      }
      .align {
        width: 1px;
        background: #f0f0f0;
        height: ${height || "100%"};
        margin: auto 0;
      }
    `}</style>
  </div>
);

export default Line;
