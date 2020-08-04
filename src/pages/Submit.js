import React from "react";
import { TopBar } from "../components/common";
import {
  SubmitHead,
  SubmitInfo,
  TicketBtn,
  Flag,
  SubmitBtn,
  UserInfo
} from "../components/submit";
import { Board } from "../components/common";
import { connect } from "react-redux";
import { actions } from "../ducks/button";
import { bindActionCreators } from "redux";

@connect(
  state => ({
    num: state.buttonStatus.num
  }),
  dispatch => ({
    updateNum: bindActionCreators(actions.inputUpdateNum, dispatch)
  })
)
class Submit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      location: { state, pathname }
    } = this.props;
    const backConfig = {
      border: "2px solid #f63"
    };
    const headerConfig = {
      fontSize: "17px",
      color: "#333"
    };
    return (
      <div>
        <TopBar
          backText="返回"
          headerText="提交订单"
          backConfig={backConfig}
          headerConfig={headerConfig}
        />
        <SubmitHead info={state.name} />
        <SubmitInfo price={state.price} {...this.props} />
        <Board />
        <TicketBtn pathname={pathname} />
        <UserInfo />
        <div className="flag-box">
          <Flag text="支持随时退" />
          <Flag text="支持过期退" />
        </div>
        <SubmitBtn />
        <style jsx global>{`
          body {
            background: #f0f0f0;
          }
        `}</style>
        <style jsx>{`
          .flag-box {
            display: flex;
          }
        `}</style>
      </div>
    );
  }
}

export default Submit;
