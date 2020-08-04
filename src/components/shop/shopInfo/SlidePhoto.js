import React from "react";
import noPhoto from "../../../../public/img/noPhoto.png";
import { emptyArray } from "../../../utils";
import { withRouter } from "react-router";

const SlidePhoto = ({ history, location: { pathname } }) => (
  <div className="slide" onClick={() => history.push(pathname + "/photos")}>
    {emptyArray(5).map((item, index) => (
      <img src={noPhoto} key={index} />
    ))}
    <style jsx>{`
      .slide {
        white-space: nowrap;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
      }
      .slide img {
        width: 90px;
        height: 66px;
        margin: 5px;
      }
    `}</style>
  </div>
);

export default withRouter(SlidePhoto);
