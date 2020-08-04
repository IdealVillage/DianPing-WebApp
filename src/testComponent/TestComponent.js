import React from "react";
import { Line } from "../components/common";

const TestComponent = ({ children }) => (
  <div className="item">
    {children}
    <Line />
    <style jsx>{`
      .item{
        margin-left: 15px;
      }
    `}</style>
  </div>
);

export default TestComponent;
