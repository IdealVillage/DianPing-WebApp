import React from "react";

const SubmitBtn = ({ handleClick }) => (
  <div className="container">
    <span className="submit-btn" onClick={handleClick}>
      提交订单
    </span>
    <style jsx>{`
      .container{
          display: flex;
          justify-content: center;
      }
      .submit-btn {
        margin-top: 20px;
        display: inline-block;
        width: 90%;
        text-align: center;
        color: white;
        background: #f63;
        padding: 8px 0;
      }
    `}</style>
  </div>
);

export default SubmitBtn;
