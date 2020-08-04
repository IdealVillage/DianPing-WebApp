import React from "react";
import PropTypes from "prop-types";
import searchIcon from "@public/img/search.png";

//默认向左对齐
const SearchBar = ({ text, postion, style, handleClick }) => (
  <div className="container" onClick={handleClick}>
    <div className={postion === "center" ? "searchBarCenter" : "searchBarLeft"}>
      <img src={searchIcon} alt="search" />
      {text}
    </div>
    <style jsx>{`
      .container {
        height: 50px;
        background: ${style.background ? style.background : ""};
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
      .searchBarCenter {
        width: ${style.width};
        height: ${style.height}px;
        background: #fff;
        border: 1px solid #fff;
        border-radius: ${style.height / 2}px;
        display: flex;
        justify-content: center;
        color: #999;
        font-size: 0.9rem;
        line-height: 30px;
      }
      .searchBarLeft {
        width: ${style.width};
        height: ${style.height}px;
        background: #fff;
        border: 1px solid #fff;
        border-radius: ${style.height / 2}px;
        display: flex;
        justify-content: flex-start;
        color: #999;
        font-size: 0.9rem;
        line-height: 30px;
      }
    `}</style>
  </div>
);

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  searchIcon: PropTypes.bool
};

SearchBar.defaultProps = {
  text: "",
  position: "left",
  style: {},
  searchIcon: true
};

export default SearchBar;
