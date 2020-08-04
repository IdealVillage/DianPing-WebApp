import React from "react";
import { connect } from "react-redux";
import { actions } from "../../ducks/button";
import { bindActionCreators } from "redux";

@connect(
  state => ({
    num: state.buttonStatus.num
  }),
  dispatch => ({
    add: bindActionCreators(actions.add, dispatch),
    substract: bindActionCreators(actions.substract, dispatch)
  })
)
class Button extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(type) {
    if (type === "add") {
      this.props.add();
      this.props.callback()
    } else if (type === "substract") {
      if (this.props.num-1>=1) {
        this.props.substract()
        this.props.callback()
      }
    }
  }
  render() {
    const { type, num } = this.props;
    return (
      <span
        className={`btn ${
          type === "add" ? "on" : type === "substract" && num > 1 && "on"
        }`}
        onClick={() => this._handleClick(type)}
      >
        {type === "add" ? "+" : "-"}
        <style jsx>{`
          .btn {
            box-sizing: border-box;
            display: inline-block;
            width: 30px;
            border: 1px solid #bbb;
            color: #bbb;
            text-align: center;
            padding: 4px 0 5px;
            border-radius: 2px;
          }
          .on {
            border: 1px solid #f63;
            color: #f63;
          }
        `}</style>
      </span>
    );
  }
}

export default Button;
