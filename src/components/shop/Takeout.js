import React from "react";
import { RedirectBtn } from "../common";

const Takeout = () => (
  <div>
    <RedirectBtn>
      <i className="takeout-icon" />
      外卖
    </RedirectBtn>
    <style jsx>{`
      div {
        background: white;
        margin-top: 10px;
      }
      .takeout-icon {
        width: 25px;
        height: 25px;
        display: inline-block;
        background: url(//www.dpfile.com/app/app-m-module/static/1690f8356613e0366afca46da9d14da8.png) -1px -178px
          no-repeat;
        background-size: 48px;
      }
    `}</style>
  </div>
);

export default Takeout;
