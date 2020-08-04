import React from "react";

const SubmitHead = ({ info }) => (
  <div className="container">
    {`${info}代金券`}
    <p>x1</p>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 29px 10px 15px;
        color: #999;
        font-size: 14px;
        background-color: #f0f0f0;
      }
    `}</style>
  </div>
);

export default SubmitHead;
