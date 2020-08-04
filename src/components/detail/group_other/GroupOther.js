import React from "react";
import PropTypes from "prop-types";
import { Line } from "../../common";

class GroupOther extends React.PureComponent {
  static propTypes = {
    recommend: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  constructor(props) {
    super(props);
    this._renderSingleItem = this._renderSingleItem.bind(this);
  }
  _renderSingleItem(info, key) {
    return (
      <div key={key}>
        <div className="item">
          <img src={info.thumbnail} />
          <div>
            <span className="shop-name">{info.name}</span>
            <span className="price">
              <span className='pre'>￥{info.price}</span>
              &nbsp;&nbsp;&nbsp;
              <span className='cur'>￥{info.exPrice}</span>
            </span>
          </div>
        </div>
        <Line />
        <style jsx>{`
          h3 {
            font-size: 15px;
            color: #323232;
          }
          .item {
            display: flex;
            padding: 10px;
          }
          .item span {
            display: inline-block;
          }
          .item div {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            margin-top: 10px;
          }
          .item img {
            width: 94px;
            height: 58px;
          }
          .price {
            margin-top: 10px;
          }
          .pre{
            color: #f63;
            font-size: 18px;
          }
          .cur{
            color: #666;
            font-size: 12px;
            text-decoration: line-through;
          }
        `}</style>
      </div>
    );
  }
  render() {
    const { recommend } = this.props;
    return (
      <div className="group-other">
        <h3>看了此团购的人也看了</h3>
        <Line />
        {recommend.map((item, index) => this._renderSingleItem(item, index))}
        <style jsx>{`
          .group-other {
            background: white;
          }
          h3 {
            font-size: 15px;
            color: #323232;
            padding: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default GroupOther;
