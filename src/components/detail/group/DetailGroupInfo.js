import React from "react";
import GroupItem from "./GroupItem";
import { RedirectBtn } from "../../common";

const DetailGroupInfo = () => (
  <div className="group-info">
    <GroupItem>
      <h3 className="head">
        团购详情
        <i className="info-icon" style={{ backgroundPositionY: "-38px" }} />
      </h3>
    </GroupItem>
    <GroupItem>
      <div className="ticket">
        <span className="left-tic">代金券</span>
        <span className="right-tic">一张&nbsp;&nbsp;&nbsp;20</span>
      </div>
    </GroupItem>
    <GroupItem>
      <div className="price">
        <span>
          <span className="pre">价值</span>
          &nbsp;&nbsp;&nbsp;
          <span className="pre">20元</span>
        </span>
        <span className="cur">
          <span>团购价</span>
          <span>20元</span>
        </span>
      </div>
    </GroupItem>
    <RedirectBtn text="更多图文详情" mergeStyles={{ color: "#333" }}>
      <p className="warn">(建议wifi环境下打开,土豪请随意)</p>
    </RedirectBtn>
    <style jsx>{`
      .group-info {
        margin-top: 10px;
        background: white;
      }
      .head {
        font-size: 14px;
        line-height: 42px;
        display: flex;
        align-items: center;
      }
      .info-icon {
        margin-left: 8px;
      }
      .ticket {
        display: flex;
        justify-content: space-between;
        margin-right: 30px;
        line-height: 50px;
        font-size: 14px;
      }
      .price {
        display: flex;
        flex-direction: column;
        padding-left: 78%;
      }
      .pre {
        text-decoration: line-through;
        color: #999;
        font-size: 14px;
      }
      .cur {
        color: #f63;
        display: inline-block;
        margin-top: 10px;
      }
      .cur span:nth-child(1) {
        font-size: 14px;
      }
      .cur span:nth-child(2) {
        font-weight: 400;
        font-size: 18px;
        margin-top: 20px;
      }
      .warn {
        color: #999;
        font-size: 10px;
        margin-left: 10px;
      }
    `}</style>
  </div>
);

export default DetailGroupInfo;
