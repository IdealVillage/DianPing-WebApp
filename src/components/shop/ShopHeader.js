import React from "react";
import { TopBar, SearchIcon } from "../common";
import { Download } from "../download";

const ShopHeader = () => (
  <TopBar headerText="商户详情">
    <SearchIcon config={{ border: "2px solid #676767", marginTop: "10px" }} />
  </TopBar>
);

export default ShopHeader;
