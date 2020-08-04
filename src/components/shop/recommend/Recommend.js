import React from "react";
import { RedirectBtn } from "../../common";
import ImageSlide from "./ImageSlide";

class Recommend extends React.PureComponent{
  render(){
    const {recommend}=this.props
    return (
      <div className="recommend">
        <RedirectBtn text="推荐菜" />
        <h3>
          网友推荐(
      {recommend && recommend.recommendNum})
    </h3>
        <ImageSlide info={recommend && recommend.titleRecommend} />
        <div className="content">
          {recommend &&
            recommend.content.map((item, i) => <span key={i} className='item-text'>{item}</span>)}
        </div>
        <style jsx>{`
      .recommend {
        overflow: hidden;
        background: white;
        margin-top: 10px;
      }
      h3{
        text-align: center;
        font-size:15px;
        color: #333;
      }
      .item-text{
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #333;
        line-height: 24px;
      }
    `}</style>
      </div>
    )
  }
}


export default Recommend;
