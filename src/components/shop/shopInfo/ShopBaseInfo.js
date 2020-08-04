import React from "react";
import { Star, Line } from "../../common";
import SlidePhoto from "./SlidePhoto";
import { RedirectBtn } from "../../common";

const ShopBaseInfo = ({ Info, num }) => (
  <div className="container">
    <h3>{Info.name}</h3>
    <span className="base-info">
      <Star percent="80%" width="66px" height="12px" />
      <span>{num}条</span>
      <span>
        ￥{Info.price}
        /人
      </span>
      <span>友谊南路</span>
    </span>
    <SlidePhoto />
    <span className='grade'>
      <span>口味:8.0</span>
      <span>环境:8.0</span>
      <span>服务:8.0</span>
    </span>
    <Line />
    <RedirectBtn>
      <div className="destination">
        <i className="des-icon" />
        友谊南路111号印象城购物中心4层
      </div>
    </RedirectBtn>
    <RedirectBtn>
      <div className="destination">
        <i className="phone-icon" />
        13612345678
      </div>
    </RedirectBtn>
    <style jsx>{`
      h3 {
        color: #323232;
        font-size: 18px;
        margin-top: 10px;
      }
      .container {
        padding-left: 10px;
        overflow: hidden;
        background: white;
      }
      .des-icon {
        background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/icon-comm.png)
          center 0 no-repeat;
        height: 14px;
        width: 14px;
        display: inline-block;
        background-size: 14px auto;
        background-position-y: -58px;
      }
      .phone-icon {
        height: 15px;
        width: 15px;
        display: inline-block;
        background-image: url(//www.dpfile.com/app/app-m-module/static/1690f8356613e0366afca46da9d14da8.png);
        background-repeat: no-repeat;
        background-position: -1px -388px;
        background-size: 50px;
      }
      .base-info {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
      .base-info span {
        font-size: 12px;
        color: #999;
        margin-left: 5px;
      }
      .destination {
        font-size: 16px;
        line-height: 23px;
        color: #323232;
        padding: 10px;
      }
      .grade{
        display: inline-block;
        margin-bottom: 10px;
      }
      .grade span{
        color: #999;
        font-size:12px;
      }
    `}</style>
  </div>
);

export default ShopBaseInfo;
