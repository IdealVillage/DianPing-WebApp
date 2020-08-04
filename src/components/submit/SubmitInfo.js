import React from "react";
import Button from "./Button";
import { Line } from "../common";

class SubmitInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 1
    };
    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleOnChange(e) {
    e.target.value >= 1 &&
      this.setState({
        inputVal: e.target.value
      });
  }
  _handleClick() {
    this.setState((prevState, props) => ({
      inputVal: props.num
    }));
  }
  render() {
    const { num, price } = this.props;
    return (
      <div className="container">
        <div className="list">
          <span>数量</span>
          <div>
            <Button type="substract" callback={this._handleClick} />
            <input
              type="number"
              value={this.state.inputVal}
              className="input-num"
              onChange={this._handleOnChange}
            />
            <Button type="add" callback={this._handleClick} />
          </div>
        </div>
        <Line width="98%" />
        <div className="list">
          <span>小计</span>
          <span className="final-price">
            ￥{num >= 1 ? (num * price).toFixed(2) : parseInt(price).toFixed(2)}
          </span>
        </div>
        <style jsx>{`
          .container {
            background: white;
          }
          .list {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            color: #999;
          }
          .input-num {
            width: 42px;
            margin: 0 5px 0 5px;
            border: 1px solid #bbb;
            text-align: center;
            font-size: 15px;
            line-height: 28px;
          }
        `}</style>
      </div>
    );
  }
}

export default SubmitInfo;
