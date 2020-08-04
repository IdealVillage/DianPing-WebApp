import React from "react";
import { withRouter } from "react-router-dom";

const LoginBtn = ({ easy, history,handleClick,userInfo }) => (
  <div className="container">
    <a className="btn" onClick={()=>handleClick(userInfo)}>
      登录
    </a>
    <div className={easy ? "easy" : "account"}>
      <span onClick={easy ? () => history.push("/login/account") : () => {}}>
        {easy ? "账号密码登录" : "忘记密码?"}
      </span>
    </div>
    <style jsx>{`
      .container {
        text-align: center;
        margin-top: 10px;
      }
      .btn {
        background: #f63;
        font-size: 14px;
        line-height: 40px;
        border-radius: 4px;
        width: 90%;
        display: inline-block;
        color: #fff;
      }
      .easy {
        color: #466889;
        font-size: 14px;
        display: inline-block;
        width: 80%;
        text-align: right;
        margin-top: 10px;
      }
      .account {
        color: #466889;
        font-size: 14px;
        display: inline-block;
        width: 80%;
        text-align: left;
      }
    `}</style>
  </div>
);

export default withRouter(LoginBtn);
