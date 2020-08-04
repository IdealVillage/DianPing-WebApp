import React from "react";
import Title from "./Title";
import city from "../../ducks/city";

const HotCities = ({ cities, handleChangeCity }) => (
  <div>
    <div className="location">无法获取您的定位</div>
    <Title title="热门城市" />
    <div className="container">
      {cities.map((city, index) => (
        <div
          className="cell"
          key={index}
          onClick={() => handleChangeCity(city.name)}
        >
          {city.name}
        </div>
      ))}
    </div>
    <style jsx>{`
      .location {
        height: 50px;
        background: #fff;
        line-height: 50px;
        text-align: center;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
      }
      .cell {
        width: 33%;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        color: #323232;
        border-bottom: 1px solid #ededed;
        border-right: 1px solid #ededed;
      }
    `}</style>
  </div>
);

export default HotCities;
