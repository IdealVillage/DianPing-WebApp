import React from "react";
import BackArrow from "../common/BackArrow";

const LoginHeader = ({ config, text }) => (
  <div className="container">
    <BackArrow config={config} />
    <span className="text">{text}</span>
    <style jsx global>{`
        body{
            background-color: rgb(240, 240, 240);
        }
    `}</style>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #f63;
        background-color: rgb(252 252 252);
        line-height: 45px;
      }
      .text {
        flex: 1;
        text-align: center;
        font-size: 18px;
      }
    `}</style>
  </div>
);

export default LoginHeader