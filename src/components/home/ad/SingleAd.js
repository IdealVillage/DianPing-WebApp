import React from "react";

const imgSrc = [
  "http://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a3a31fff2e047a907a53d6488877f7fe.png",
  "//op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9b8c52c341892600ff7260c89025a59.png"
];

const Ad = ({ type }) => (
  <div className="container">
    <div className="left">
      <div className="leftHeader">{!type ? "最高88元" : "品质福利放松"}</div>
      <span className="leftShadow">
        {!type ? "速领新人红包" : "享吃喝玩乐礼"}
      </span>
    </div>
    <img className="right" src={!type ? imgSrc[0] : imgSrc[1]} />
    <style jsx>{`
      .container {
        height: 100%;
        width: 50%;
        padding: 2px;
        background: ${!type ? "#ffa383" : "#44d0cd"};
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
        color: white;
      }
      .left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      .leftHeader {
        font-size: 16px;
        margin-top: 10px;
        margin-left: 10px;
      }
      .leftShadow {
        margin-left: 8px;
        width: 75px;
        padding: 2px;
        text-align: center;
        font-size: 12px;
        border-radius:12px;
        background: ${!type ? "#f97e54" :"#22bab7"}
      }
      .right{
        width: 60px;
        height: 60px;
      }
    `}</style>
  </div>
);


export default Ad;
