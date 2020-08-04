import React from "react";
import SingleAd from "./SingleAd";
import {Board} from "../../common";

const Ads = () => (
  <div>
    <Board />
    <div className="container">
      <SingleAd type={0} />
      <SingleAd type={1} />
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
    </div>
    <Board />
  </div>
);

export default Ads;
