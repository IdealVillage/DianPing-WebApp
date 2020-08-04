import React from "react";
import { Selector } from "../common";

const DeliciousNav=({handleClick,selectIndex})=>{
  const navList = ["全部商区", "美食", "智能排序"];
  return (
    <div className="container">
      {navList.map((item, i) => (
        <Selector
          text={item}
          key={i}
          handleClick={handleClick}
          selected={selectIndex === i}
          cur={i}
        />
      ))}
      <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
    </div>
  );
}


export default DeliciousNav;
