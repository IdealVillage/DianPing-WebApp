import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const BackArrow = ({ config, history, text, linkTo }) => (
  <a
    className="back"
    onClick={!linkTo ? () => history.goBack() : () => linkTo()}
  >
    {text}
    <style jsx>{`
      .back {
        padding-left: 16px;
        position: absolute;
        left: 10px;
        color: ${config.color && ""};
        font-size: 14px;
      }
      .back::before {
        border: ${config.border};
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -8px;
        display: block;
        content: "\\20";
        width: ${config.width};
        height: ${config.height};
        border-top: none;
        border-right: none;
        transform: rotate(45deg);
      }
    `}</style>
  </a>
);

BackArrow.propTypes = {
  config: PropTypes.object.isRequired
};

BackArrow.defaultprops = {
  text: ""
};

export default withRouter(BackArrow);
