import React from "react";
import TitleItem from "./TitleItem";

const ShopTitle = ({ handleClick, status }) => (
  <div className="container">
    {["菜_food", "环境_env", "价目表_price", "全部_all"].map((item, i) => {
      item = item.split("_");
      let ch = item[0];
      let en = item[1];
      return (
        <TitleItem
          info={{ ch, en }}
          key={i}
          handleClick={handleClick}
          show={status === en}
        />
      );
    })}
    <style jsx>{`
      .container {
        display: flex;
        text-align: center;
        background: white;
      }
    `}</style>
  </div>
);

export default ShopTitle;
