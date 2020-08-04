import React from "react";

const Selector = ({ selected, text, handleClick, cur }) => (
  <a className="item" onClick={e => handleClick(e, cur)}>
    {text}
    <i className={`drop ${selected && "on"}`} />
    <style jsx>{`
      .item {
        width: 33%;
        font-size: 13px;
        height: 20px;
        line-height: 20px;
        color: #646464;
        text-align: center;
      }
      .drop {
        width: 13px;
        height: 7px;
        background: url(//www.dpfile.com/app/node-mobile-m-isomorphism-web/static/39d9378b2125b3bb394066cab5105738.png) -66px -57px
          no-repeat;
        background-size: 91px auto;
        transition: transform 0.3s;
        display: inline-block;
      }
      .on {
        transform: rotate(180deg);
      }
    `}</style>
  </a>
);

Selector.defaultProps = {
  selected: false,
  text: ""
};

export default Selector;
