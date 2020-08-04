import React from "react";
import { Line } from "../../common";

const ShopItem = ({shop}) => (
  <div>
    <div className="business-info">
      <div className="base-info">
        <div className="info-left">
          <h1 className="shop-name">{`${shop.name}(${shop.des})`}</h1>
          <span className="star-bg">
            <i className="star" style={{ width: "80%" }} />
          </span>
          <span className="info">13812345678 周一至周日 10：00-22：00</span>
          <span className="info">{shop.des}</span>
        </div>
      </div>
      <Line align={true} height="70px" />
      <div className="icon">
        <span className="distance">>100km</span>
        <div className="phone-icon" />
      </div>
    </div>
    <Line />
    <style jsx>{`
      .business-info {
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        margin: 10px 0px;
      }
      .base-info {
        display: flex;
        justify-content: space-between;
        flex: 1;
        align-items: center;
      }
      .info-left {
        display: flex;
        flex-direction: column;
      }
      .shop-name {
        font-weight: 700;
        font-size: 18px;
        color: #878787;
        font-family: Helvetica;
      }
      .star-bg {
        background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/detail-star0.png)
          no-repeat;
        width: 66px;
        height: 12px;
        background-size: 100% 100%;
        margin-top: 10px;
      }
      .star {
        background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/detail-star.png)
          no-repeat;
        height: 12px;
        background-size: auto 100%;
        display: inline-block;
        margin-bottom: 10px;
      }
      .distance {
        color: #666;
        font-size: 12px;
      }
      .icon {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .info {
        font-size: 12px;
        color: #666;
      }
      .phone-icon {
        background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/comm.png);
        background-size: 25px auto;
        width: 24px;
        height: 27px;
        display: inline-block;
      }
      .destination {
        font-size: 14px;
        color: #333;
        padding: 10px;
      }
      .des-icon {
        background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/icon-comm.png)
          center 0 no-repeat;
        background-size: 14px auto;
        background-position-y: -58px;
        height: 14px;
        width: 14px;
        display: inline-block;
      }
    `}</style>
  </div>
);

export default ShopItem