import React from "react";
import { DeliciousHeader, DeliciousNav } from "../components/delicious";
import { Download } from "../components/download";

class Delicous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0
    };
    this._handleNavClick = this._handleNavClick.bind(this);
  }
  _handleNavClick(e, cur) {
    //init
    window.scrollTo(0, e.target.offsetTop);
    //init
    this.setState({ selectIndex: cur });
    if (this.state.selectIndex === cur) {
      this.setState({ selectIndex: "" });
    }
  }
  render() {
    const { selectIndex } = this.state;
    return (
      <div>
        <DeliciousHeader />
        <Download />
        <DeliciousNav   
          selectIndex={selectIndex}
          handleClick={this._handleNavClick}
        />
        <style jsx global>{`
          body {
            background-color: #f0f0f0;
            height: 2000px;
          }
        `}</style>
      </div>
    );
  }
}

export default Delicous;
