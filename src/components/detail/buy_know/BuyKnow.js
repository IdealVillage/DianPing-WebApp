import React from "react";
import buy_konw_info from "./buy_konw_info";
import Item from "./Item";
import { Line } from "../../common";

const BuyKnow = ({ path,history }) => {
  return (
    <div className="buy-know">
      <h3 className="head">
        购买须知
        <i className="info-icon" style={{ backgroundPositionY: "-19px" }} />
      </h3>
      <Line />
      {Object.keys(buy_konw_info).map((item, index) => (
        <Item head={item} content={buy_konw_info[item]} key={index} />
      ))}
      <div className="btn-container">
        <a className="buy-btn" onClick={() => history.push(path)}>
          立即购买
        </a>
      </div>
      <style jsx>{`
        .buy-know {
          margin-top: 10px;
          background: white;
        }
        .head {
          font-size: 14px;
          line-height: 42px;
          display: flex;
          align-items: center;
          margin-left: 10px;
        }
        .btn-container {
          background: #f0f0f0;
          line-height: 54px;
          padding: 10px 0;
        }
        .buy-btn {
          height: 34px;
          width: 95%;
          color: #fff;
          background-color: #f63;
          border-radius: 5px;
          text-align: center;
          line-height: 35px;
          display: block;
          font-size: 16px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default BuyKnow;
