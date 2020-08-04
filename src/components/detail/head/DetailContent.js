import React from "react";
import SwipeableViews from "react-swipeable-views";
import { withRouter } from "react-router-dom";

const DetailContent = ({ like, history,path }) => {
  return <div style={{ background: "white" }}>
      <div className="swipe">
        <SwipeableViews resistance>
          <img src={like.thumbnail} />
        </SwipeableViews>
        <div className="text">
          <div className="name">{like.name}</div>
          <div className="content">{like.desc}</div>
        </div>
        <div />
      </div>
      <div className="buy-box">
        <span className="price">
          <span className="cur">￥{like.price}</span>
          <span className="pre">￥{like.exPrice}</span>
        </span>
        <a className="buy-btn" onClick={() => history.push(path)}>
          立即购买
        </a>
      </div>
      <div className="advantage">
        <div className="adv">
          <i />
          随时可退
        </div>
        <div className="adv">
          <i />
          过期自动退
        </div>
      </div>
      <div className="board" />
      <style jsx>{`
        img {
          width: 100%;
          height: 233px;
        }
        .swipe {
          height: 233px;
          position: relative;
        }
        .text {
          position: absolute;
          left: 0px;
          bottom: 0px;
          background: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.6)));
          width: 100%;
        }
        .text div {
          margin-left: 5px;
        }
        .name {
          font-size: 16px;
          color: #fff;
          font-weight: 400;
          line-height: 18px;
          margin-bottom: 3px;
        }
        .content {
          font-size: 12px;
          line-height: 14px;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 5px;
        }
        .buy-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          line-height: 50px;
          background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.78/css/img/repeat-x.png) repeat-x 0 bottom;
          background-size: auto 10px;
        }
        .buy-btn {
          height: 34px;
          width: 105px;
          color: #fff;
          background-color: #f63;
          border-radius: 5px;
          text-align: center;
          line-height: 35px;
          display: block;
          font-size: 16px;
          margin-right: 10px;
        }
        .cur {
          color: #f63;
          font-size: 30px;
        }
        .pre {
          font-size: 14px;
          color: #8c8c8c;
          text-decoration: line-through;
        }
        .advantage {
          display: flex;
          height: 45px;
          line-height: 45px;
        }
        .adv {
          flex: 1;
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        .adv i {
          background-image: url(//www.dpfile.com/mod/app-m-tuangou/1.3.78/css/img/comm.png);
          background-size: 25px auto;
          background-position: 0 -275px;
          width: 18px;
          height: 18px;
          margin-left: 5px;
        }
        .board {
          height: 20px;
          background-color: #f0f0f0;
        }`}</style>
    </div>;
};

export default withRouter(DetailContent);
