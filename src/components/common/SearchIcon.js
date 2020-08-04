import React from "react";

const SearchIcon = ({ config }) => (
  <div className="search">
    <style jsx>{`
      .search {
        width: 12px;
        height: 12px;
        border: ${config ? config.border : "2px solid #f63"};
        border-radius: 50%;
        position: relative;
        margin-right: 20px;
        margin-top: ${config ? config.marginTop : ""};
      }
      .search::after {
        content: "";
        display: block;
        width: 9px;
        height: 2px;
        border-top: ${config ? config.border : "2px solid #f63"};
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        right: -6px;
        bottom: -6px;
      }
    `}</style>
  </div>
);

export default SearchIcon;
