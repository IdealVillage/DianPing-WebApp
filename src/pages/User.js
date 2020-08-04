import React from "react";
import { UserHeader, UserTab, UserDetail } from "../components/user";
import { actions } from "../ducks/home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


@connect(
  state => ({
    tab: state.userInfo.tab
  }),
  dispatch => ({
    switchTab: bindActionCreators(actions.userTabSwitch, dispatch)
  })
)
class User extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(tab) {
    this.props.switchTab(tab);
  }
  render() {
    const tabArr = [
      "all 全部",
      "wait 待付款",
      "canUse 可使用",
      "refund_afterWork 退款/售后"
    ];
    const { tab } = this.props;
    return <div>
        <UserHeader />
        <div className="tab-container">
          {tabArr.map((item, i) => {
            let tmp = item.split(" ");
            return <UserTab id={tmp[0]} text={tmp[1]} selected={tab === tmp[0]} key={i} handleClick={this._handleClick} />;
          })}
        </div>
        <UserDetail main="您还没有相关订单" sub="去逛逛看还有哪些想买的"/>
        <style jsx global>{`
          body{
            background-color: #f0f0f0;
          }
          `}</style>
        <style jsx>{`
          .tab-container {
            display: flex;
            height: 46px;
            justify-content: center;
            align-items: center;
          }`}</style>
      </div>;
  }
}

export default User;
