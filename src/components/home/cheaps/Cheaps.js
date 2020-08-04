import React from "react";
import PropTypes from "prop-types";
import CheapHeader from "./CheapHeader";
import Loadable from "react-loadable";

class Cheaps extends React.Component {
  static propTypes = {
    cheaps: PropTypes.array.isRequired
  };
  static defaultProps={
    cheaps:[]
  }
  render() {
    const { cheaps } = this.props;
    return (
      <div>
        <CheapHeader/>
        <div className="container">
          {cheaps.map((cheap, index) => {
            return <div className="cell" key={index}>
              <img src={cheap.src} />
              <span className="name">{cheap.name}</span>
              <span>
                <span className="price">{"￥" + cheap.price}</span>
                <span className="prePrice">{"￥" + cheap.prePrice}</span>
              </span>
            </div>
          })}
        </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
          }
          .cell {
            width: 33%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .cell img{
              height: 80px;
              flex: 1;
          }
          .name{
              color: #333;
              font-size:14px;
          }
          .price{
              color: #f63;
              font-size: 20px;
          }
          .prePrice{
              color: #999;
              text-decoration: line-through;
              font-size:12px;
          }
        `}</style>
      </div>
    );
  }
}

export default Cheaps;
