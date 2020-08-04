import React from "react";
import PropTypes from "prop-types";
import { container } from "../../styles";
import AdItem from "./AdItem";

class Ad extends React.PureComponent {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.object)
  };
  render() {
    const { ads } = this.props;
    return (
      <div className="container">
        <div className="head">
          小伙伴们还喜欢
          <span>广告</span>
        </div>
        {ads && ads.map((ad, i) => <AdItem info={ad} key={i} />)}
        <style jsx>{`
          .head {
            background: #f0f0f0;
            padding: 10px;
            position: relative;
            color: #999;
            font-size: 14px;
          }
          .head span {
            display: inline-block;
            position: absolute;
            right: 0px;
          }
        `}</style>
      </div>
    );
  }
}

export default Ad;
