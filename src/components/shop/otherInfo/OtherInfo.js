import React from "react";
import { container } from "../.././styles";
import DownloadWelfare from "./DownloadWelfare";

const OtherInfo = ({history}) => (
  <div className="container">
    <div className="info">商户信息</div>
    <div className="info">
      <span className="key">营业时间:</span>
      周一至周日 10:00-22:00
    </div>
    <DownloadWelfare />
    <style jsx>{container}</style>
    <style jsx>{`
      .info {
        border-bottom: 1px solid #f0f0f0;
        padding: 10px;
        font-size: 15px;
      }
      .info span{
          font-size:14px;
      }
    `}</style>
  </div>
);

export default OtherInfo
