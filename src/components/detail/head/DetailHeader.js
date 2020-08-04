import React from "react";
import { withRouter } from "react-router-dom";
import { TopBar } from "../../common";
import DetailContent from "./DetailContent";

const DetailHeader = ({ history, like ,path}) => (
  <div>
    <TopBar history={history} headerText="商户详情" />
    <DetailContent like={like} path={path} />
  </div>
);

export default withRouter(DetailHeader);
