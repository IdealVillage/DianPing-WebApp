import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { Arrow } from "../../common";

class GroupInfo extends React.PureComponent {
  static propTypes = {
    groupInfos: PropTypes.arrayOf(PropTypes.object)
  };
  constructor(props) {
    super(props);
    this.state = {
      opend: false
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    this.setState({
      opend: !this.state.opend
    });
  }
  render() {
    const { opend } = this.state;
    const { groupInfos } = this.props;
    return (
      <div className="container">
        {groupInfos && <Item info={groupInfos[0]} />}
        <div className={opend ? "show" : "hide"}>
          {groupInfos &&
            groupInfos.slice(1).map((item, i) => <Item key={i} info={item} last={i===1}/>)}
        </div>
        <div className="slide-btn" onClick={this._handleClick}>
          <span>更多2个团购</span>
          <Arrow direction={opend ? "top" : "bottom"} />
        </div>
        <style jsx>{`
          .container {
            margin-top: 10px;
            background: white;
          }
          .slide-btn {
            text-align: center;
            font-size: 13px;
          }
          .slide-btn span{
            margin-right: 10px;
          }
          .show {
            display: block;
          }
          .hide {
            display: none;
          }
        `}</style>
      </div>
    );
  }
}

export default GroupInfo;
