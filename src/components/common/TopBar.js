import React from "react";
import BackArrow from "./BackArrow";

class TopBar extends React.Component {
  static defaultProps = {
    backConfig: {
      border: "3px solid #646464",
      height: "12px",
      width: "12px"
    },
    headerConfig: {}
  };
  render() {
    const {
      backText,
      headerText,
      backConfig,
      headerConfig,
      mergeStyles,
      children
    } = this.props;
    return (
      <div className="topBar" style={{ ...mergeStyles }}>
        <BackArrow
          config={
            //merge defaultProps
            backConfig && { ...TopBar.defaultProps.backConfig, ...backConfig }
          }
          text={backText === null ? "" : backText || "返回"}
        />
        <div className="info" style={{ ...headerConfig }}>
          {headerText || "标题"}
        </div>
        {children}
        <style jsx>{`
          .topBar {
            line-height: 45px;
            text-align: center;
            display: flex;
            justify-content: flex-start;
            background: white;
          }
          .info {
            flex: 1;
          }
        `}</style>
      </div>
    );
  }
}

export default TopBar;
