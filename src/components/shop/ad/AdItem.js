import React from "react";
import { Star } from "../../common";
import { price } from "../../styles";

const AdItem = ({ info }) => (
  <div className="item">
    <div className="row-1">
      {info.shopName}
      <span>
        >{info.distance}
        km
      </span>
    </div>
    <div className="row-2">
      <Star percent={info.grade} width="66px" height="12px" />
      <span>
        ￥{info.per_capita}
        /人
      </span>
      <span>{info.address}</span>
      <span>{info.type}</span>
    </div>
    {info.ticket && (
      <div className="ticket">
        <img src={info.ticket.image} />
        <div>
          <span className="text">{info.ticket.text}</span>
          <span className="price">
            <span>￥{info.ticket.exPrice}</span>
            <span>￥{info.ticket.price}</span>
          </span>
        </div>
        <span className="sold">
          已售
          {info.ticket.sold}
        </span>
      </div>
    )}
    <style jsx>{price}</style>
    <style jsx>{`
      .item {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        background: white;
        padding: 10px;
        border-top: 1px solid #f0f0f0;
      }
      .row-1 {
        display: flex;
        flex: 1;
        justify-content: space-between;
        font-size: 15px;
        color: #333;
        margin-bottom: 5px;
      }
      .row-1 span {
        color: #999;
        font-size: 12px;
      }
      .row-2 {
        display: flex;
      }
      .row-2 span {
        margin-left: 10px;
        color: #999;
        font-size: 12px;
      }
      .ticket {
        border-top: 1px solid #f0f0f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .ticket div {
        display: flex;
        flex-direction: column;
        margin-left: -160px;
      }
      .text {
        margin-bottom: 10px;
      }
      .sold {
        color: #999;
        font-size: 14px;
        margin-top: 35px;
      }
    `}</style>
  </div>
);

export default AdItem;
