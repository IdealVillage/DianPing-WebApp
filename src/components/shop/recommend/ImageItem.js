import React from "react";

const ImageItem = ({ info }) => (
  <div className='container'>
    <div className="item">
      <img src={info.image} />
      <span>
        {info.num}
        人推荐
      </span>
    </div>
    <span>{info.text}</span>
    <style jsx>{`
      .item {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
      }
      .item span {
        text-align: center;
        line-height: 12px;
        margin-top: -12px;
        background-color: rgba(0, 0, 0, 0.4);
        font-size: 12px;
        color: #fff;
      }
      .item+span{
        display: inline-block;
        color: #333;
        font-size: 14px;
        margin-left: 20px;
        margin-top: 10px;
      }
    `}</style>
  </div>
);

export default ImageItem;
