import React from "react";
import { Line } from "../common";

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    this.setState({
      selected: !this.state.selected
    });
  }
  render() {
    return (
      <div>
        <div className="notify">
          抵用券/优惠券/现金券任选一种,支付完成优惠不可退
        </div>
        <span className="head">优惠码</span>
        <div className="container">
          <p>使用优惠码</p>
          <i
            className={`select ${
              this.state.selected ? "selected" : "unselected"
            }`}
            onClick={this._handleClick}
          />
        </div>
        <Line />
        {this.state.selected ? (
          <div className="container">
            <input type="text" placeholder="请使用优惠码" />
            <a className="use_discount">使用</a>
          </div>
        ) : null}
        <style jsx global>{`
          body {
            background: #f0f0f0;
          }
        `}</style>
        <style jsx>{`
          .notify {
            height: 38px;
            font-size: 12px;
            background-color: #fff4da;
            border-bottom: 1px solid #f4d187;
            color: #f2b11e;
            display: flex;
            align-items: center;
            padding-left: 5px;
          }
          .notify::before {
            width: 11px;
            height: 11px;
            content: "";
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAARVBMVEUAAADysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/ysR/HGb7nAAAAF3RSTlMA/rws7XYN3cORiWk0GxkD3yXz12VIQTMGiLgAAACfSURBVBjTdVHbDoUwCKM43H3e/f9PPTk6nIlZn0pDCgW6UYQNYFgKNYweHFPOKTL8qOpg3fBwZ4fKTJjowRTMpY82XPUyz8tFgv37eHf3CiB3v/NEBdVrB/bqikLC1fQAjkpZiCNpD3SfyGSSLg/oyskQMlWsq7KMl7xtTW4mxEzNhKMW50ltpDB9wKJxNLzG6YTvnKp32O8b+k/rvPgHskcFxcV0avYAAAAASUVORK5CYII=);
            background-size: 100%;
          }
          .head {
            display: inline-block;
            padding: 15px 15px 10px 15px;
            color: #999;
            font-size: 14px;
          }
          .select {
            background: url(data:image/png;base64,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)
              no-repeat;
            width: 23px;
            height: 23px;
            background-size: 23px;
          }
          .unselected {
            background-position: center 20%;
          }
          .selected {
            background-position: center 40%;
          }
          .container {
            display: flex;
            justify-content: space-between;
            background: white;
            padding: 10px;
          }
          .use_discount {
            width: 50px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            color: #555;
            border-radius: 4px;
            border: 1px solid #bbb;
          }
          input {
            border: none;
          }
          input:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Ticket;
