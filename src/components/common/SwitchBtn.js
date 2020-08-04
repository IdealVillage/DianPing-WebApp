import React from "react";
import PropTypes from "prop-types";
import { actions } from "../../ducks/switch";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BackArrow from "./BackArrow";

@connect(
  state => ({
    switch: state.switchStatus
  }),
  dispatch => ({
    toSecond: bindActionCreators(actions.switchToSecond, dispatch),
    backTOMain: bindActionCreators(actions.switchTOMain, dispatch)
  })
)
class SwitchBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    if (e.target.id === "main" && this.props.switch !== "main") {
      this.props.backTOMain();
      this.setState({ selected: !this.state.selected });
    } else if (e.target.id === "second" && this.props.switch !== "second") {
      this.props.toSecond();
      this.setState({ selected: !this.state.selected });
    }
  }
  render() {
    const { selected } = this.state;
    const { mainhead, secondhead } = this.props;
    return (
      <div className="container">
        <BackArrow
          config={{ width: "12px", height: "12px", border: "1px solid #f63" }}
        />
        <div className="listType">
          <a
            id="main"
            className={"internal" + " " + "box"}
            onClick={this.handleClick}
          >
            {mainhead}
          </a>
          <a
            id="second"
            className={"outer" + " " + "box"}
            onClick={this.handleClick}
          >
            {secondhead}
          </a>
        </div>
        <style jsx>{`
          .container {
            width: 100%;
            height: 45px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .listType {
            margin-left: 80px;
            width: 200px;
            height: 30px;
            display: flex;
            position: absolute;
            margin-left: 50%;
            left: -100px;
          }
          .box {
            border: 1px solid #f63;
            flex: 1;
            text-align: center;
            line-height: 28px;
          }
          .internal {
            background-color: ${selected ? "#f63" : "#fff"};
            color: ${selected ? "#fff" : "#f63"};
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .outer {
            background-color: ${selected ? "#fff" : "#f63"};
            color: ${selected ? "#f63" : "#fff"};
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        `}</style>
      </div>
    );
  }
}

export default SwitchBtn;
