import React from "react";
import { bindActionCreators } from "redux";
import { actions } from "../ducks/login";
import { connect } from "react-redux";
import pureRender from "pure-render-decorator";
import { LoginHeader, LoginForm, ThirdParty } from "../components/login";

@connect(
  null,
  dispatch => ({
    login: bindActionCreators(actions.startLogin, dispatch)
  })
)
@pureRender
class Login extends React.Component {
  constructor(props) {
    super(props);
    this._easyLogin = this._easyLogin.bind(this);
    this._passwordLogin = this._passwordLogin.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(userInfo) {
    this.props.login(userInfo);
  }
  _easyLogin() {
    return (
      <div>
        <LoginHeader
          config={{ width: "12px", height: "12px", border: "1px solid #f63" }}
          text="手机号快捷登录"
        />
        <LoginForm type="easy" handleClick={this._handleClick} />
        <div className="info">未注册的手机号码验证后自动创建点评账户</div>
        <ThirdParty />
        <style jsx>{`
          .info {
            font-size: 12px;
            line-height: 12px;
            color: #999;
            text-align: center;
            margin-top: 8px;
          }
        `}</style>
      </div>
    );
  }
  _passwordLogin() {
    return (
      <div>
        <LoginHeader
          config={{ width: "12px", height: "12px", border: "1px solid #f63" }}
          text="账号密码登录"
        />
        <LoginForm handleClick={this._handleClick} />
      </div>
    );
  }
  render() {
    const {
      location: { pathname }
    } = this.props;
    return pathname === "/login/account"
      ? this._passwordLogin()
      : this._easyLogin();
  }
}

export default Login;
