import React from "react";
import {Board} from "../../common";


const GuessULike = ({ guessULike, history }) => (
  <div>
    <Board />
    <div className="header">猜你喜欢</div>
    {guessULike.map((like, index) => {
      let mockPath=like.desc.replace(/[^\d]/g,'')
      let path = {
        pathname: `/detail/${mockPath}`,
        state: like
      };
      return (
        <div
          className="container"
          key={index}
          onClick={() => history.push(path)}
        >
          <img src={like.thumbnail} />
          <div className="detail">
            <span className="topText">{like.name}</span>
            <span className="centerText">{like.desc}</span>
            <span className="bottomText">
              <span>
                <span className="cur">￥{like.price}</span>
                <span className="pre">￥{like.exPrice}</span>
              </span>
              <span className="sold">已售{like.cell}</span>
            </span>
          </div>
        </div>
      );
    })}
    <style jsx>{`
      .header {
        height: 30px;
        color: #777;
        font-size: 14px;

        line-height: 40px;
        padding-left: 15px;
      }
      .container {
        display: flex;
        justify-content: flex-start;
        margin-left: 15px;
        padding: 11px 10px 11px 0;
      }
      img {
        width: 90px;
        height: 90px;
      }
      .detail {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
      }
      .topText {
        font-size: 17px;
        color: #111;
        font-weight: 700;
      }
      .centerText {
        color: #777;
        font-size: 13px;
      }
      .bottomText {
        display: flex;
        justify-content: space-between;
      }
      .cur {
        color: #f63;
        font-size: 21px;
      }
      .pre {
        color: #777;
        font-size: 13px;
      }
      .sold {
        color: #777;
        font-size: 13px;
      }
    `}</style>
  </div>
);

export default GuessULike;
