import React from "react";
import { BackArrow, SwitchBtn } from "../common";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../ducks/login";

@connect(
  null,
  dispatch => ({
    logout: bindActionCreators(actions.reqLogout, dispatch)
  })
)
class UserHeader extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="container">
        <BackArrow
          text="首页"
          linkTo={() => history.push("/")}
          config={{
            width: "12px",
            height: "12px",
            border: "1px solid #777",
            color: "#777"
          }}
        />
        <SwitchBtn mainhead="订单" secondhead="抵用卷" />
        <a onClick={() => this.props.logout()} className="logout">
          注销
        </a>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logout {
            font-size: 13px;
            color: #777;
            position: absolute;
            right: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(UserHeader);
