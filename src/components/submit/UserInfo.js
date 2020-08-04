import React from "react";
import { connect } from "react-redux";
import LoginInput from "../login/LoginInput";
import { withRouter } from "react-router-dom";

@connect(state => ({
  loginStatus: state.loginStatus
}))
class UserInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this._logined = this._logined.bind(this);
  }
  _logined() {
    return (
      <div className="container">
        <p className="text">手机号码</p>
        <p className="phoneNumber">{this.props.loginStatus.phoneNumber}</p>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            background: white;
            padding: 10px;
          }
          .text {
            color: #999;
          }
        `}</style>
      </div>
    );
  }
  render() {
    const { loginStatus, history } = this.props;
    return (
      <div style={{ marginTop: "10px" }}>
        {!loginStatus.username && (
          <a onClick={() => history.push("/login")} className="quick-login">
            立即登录
          </a>
        )}
        {!loginStatus.username ? <LoginInput isEasy={true} /> : this._logined()}
        <style jsx>{`
          .quick-login {
            display: inline-block;
            color: #38b;
            font-size: 14px;
            margin-left: 5px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(UserInfo);
