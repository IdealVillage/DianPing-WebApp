import React from "react";
import { Star } from "../../common";
import { emptyArray } from "../../../utils";

const CommentItem = ({ info }) => (
  <div className="item">
    <div className="user-pic">
      <img src={info.head} />
    </div>
    <div className="comment">
      <span className="head">
        <span>{info.username}</span>
        <img
          src={`https://p1.meituan.net/cippiccenter/54x28-Lv${
            info.level
          }_3x.png`}
        />
      </span>
      <Star percent={info.grade + "%"} />
      <div className="content">{info.content}</div>
      <div className="dish-pic">
        {emptyArray(info.photos.num).map((item, i) => (
          <img src={info.photos.url} key={i} />
        ))}
      </div>
      <span className="seen">
        浏览
        {info.seen}
      </span>
    </div>
    <style jsx>{`
      .item {
        display: flex;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 10px;
      }
      .user-pic {
        width: 56px;
      }
      .user-pic img{
        border-radius: 50%;
        border: 1px solid #e1e1e1;
      }
      .content{
        font-size:14px;
        color: #323232;
      }
      .comment {
        flex: 1;
      }
      .head span {
        color: #333;
        font-size: 14px;
      }
      .head img {
        width: 27px;
        height: 14px;
      }
      .dish-pic img{
        margin-left: 10px;
      }
      .dish-pic img:first-child{
        margin: 0;
      }
      .seen {
        font-size: 12px;
      }
    `}</style>
  </div>
);

export default CommentItem;
