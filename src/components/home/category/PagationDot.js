import React from "react";
import PropTypes from "prop-types";

const PagationDot = ({ style, activeStyle, active }) => (
  <span
    style={{
      ...style,
      backgroundColor: active
        ? activeStyle.backgroundColor
        : style.backgroundColor
    }}
  />
);

PagationDot.propTypes = {
  style: PropTypes.object.isRequired,
  activeStyle: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired
};

export default PagationDot;
