import React from "react";
import { BackArrow, SwitchBtn, SearchIcon } from "../common";

const DeliciousHeader = () => (
  <div className="container">
    <BackArrow
      config={{ height: "12px", width: "12px", border: "1px solid#f63" }}
    />
    <SwitchBtn mainhead="商户" secondhead="闪惠团购" />
    <SearchIcon />
    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f0f0f0;
      }
    `}</style>
  </div>
);

export default DeliciousHeader