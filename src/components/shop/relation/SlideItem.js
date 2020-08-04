import React from "react";
import { Arrow } from "../../common";

class SlideItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    this.setState({
      opened: !this.state.opened
    });
  }
  render() {
    const { opened } = this.state;
    const { text, info, type } = this.props;
    return (
      <div className="row">
        <div className="title" onClick={this._handleClick}>
          {text}
          <Arrow
            direction={opened ? "top" : "bottom"}
            mergeStyles={{ marginRight: "6px" }}
          />
        </div>
        <div className={`list ${!opened ? "hide" : "show"}`}>
          {info &&
            info.map((item, i) => (
              <span key={i}>
                {item}
                {type ? "饮品" : ""}
              </span>
            ))}
        </div>
        <style jsx>{`
          .list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            border-top: 1px solid #f0f0f0;
          }
          .list span {
            display: inline-block;
            box-sizing: border-box;
            width: 50%;
            text-align: center;
            border-right: 1px dashed #eaeaea;
            border-bottom: 1px dashed #eaeaea;
          }
          .hide {
            display: none;
          }
          .show {
            display: flex;
          }
          .title {
            display: flex;
            justify-content: space-between;
            padding: 5px;
          }
        `}</style>
      </div>
    );
  }
}

export default SlideItem;
