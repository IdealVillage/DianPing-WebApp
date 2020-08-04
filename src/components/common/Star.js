import React from "react";

const Star = ({ percent, width, height }) => (
  <p>
    <span className="star-bg">
      <i className="star" style={{ width: percent || "0%" }} />
    </span>
    <style jsx>{`
      .star-bg {
        background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/detail-star0.png)
          center 0 no-repeat;
        width: ${width || "86px"};
        height: ${height || "16px"};
        background-size: 100% 100%;
        display: flex;
      }
      .star {
        background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/detail-star.png)
          no-repeat;
        height: ${height||"16px"};
        background-size: auto 100%;
        display: inline-block;
      }
    `}</style>
  </p>
);

export default Star;
