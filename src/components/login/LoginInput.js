import React from "react";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      password: ""
    };
    this._watchPassword = this._watchPassword.bind(this);
    this._watchPhoneNum = this._watchPhoneNum.bind(this);
  }
  componentWillUnmount() {
    this.setState({ phoneNumber: "", password: "" });
  }
  _watchPhoneNum(e) {
    this.setState({
      ...this.state,
      phoneNumber: e.target.value
    });
  }
  _watchPassword(e) {
    this.setState({
      ...this.state,
      password: e.target.value
    });
  }
  render() {
    const { isEasy } = this.props;
    return (
      <div style={{ background: "white" }}>
        <div className="inputContainer">
          <div className="aside">
            86
            <div className="line" />
          </div>
          <div className="phoneInput">
            <input
              type="text"
              placeholder={isEasy ? "请输入手机号" : "手机号"}
              onChange={this._watchPhoneNum}
              value={this.state.phoneNumber}
            />
            {isEasy && <a className="sendBtn">发送验证码</a>}
          </div>
        </div>
        <div className="inputContainer">
          <div className="aside">{isEasy ? "验证码" : "密码"}</div>
          <div>
            <input
              type="password"
              placeholder={isEasy ? "请输入验证码" : "密码"}
              onChange={this._watchPassword}
              value={this.state.password}
            />
          </div>
        </div>
        <style jsx>{`
          .inputContainer {
            display: flex;
            line-height: 45px;
            height: 45px;
          }
          .aside {
            width: 60px;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 10px;
          }
          .line {
            height: 20px;
            border: 0.8px solid #e0e0e0;
            margin-right: 10px;
          }
          .inputContainer input {
            border: none;
            font-size: 15px;
            color: #333;
            font-family: Microsoft YaHei;
          }
          input:focus {
            outline: none;
          }
          .sendBtn {
            border: 1px solid #bbb;
            border-radius: 5px;
            border-radius: 5px;
            font-size: 14px;
            padding: 5px 10px;
            margin-left: 20px;
          }
        `}</style>
      </div>
    );
  }
}

export default LoginInput;
