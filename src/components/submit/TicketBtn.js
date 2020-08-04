import React from "react";
import { ForwardArrow } from "../common";
import { withRouter } from "react-router-dom";

const Ticket = ({ history, pathname }) => (
  <div className="container">
    <p className="text">现金券/抵用券/优惠码</p>
    <ForwardArrow
      linTo={() => history.push({ pathname:pathname+"/#ticketList" })}
    />
    <style jsx>{`
        .container{
            display: flex;
            align-items: center;
            height: 45px;
            background: white;
        }
        .text{
            color: #999;
        }
    `}</style>
  </div>
);

export default withRouter(Ticket);
