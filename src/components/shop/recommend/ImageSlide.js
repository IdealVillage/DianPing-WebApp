import React from "react";
import ImageItem from "./ImageItem";

class ImageSlide extends React.PureComponent{
  render(){
    const {info}=this.props
    return (
      <div className="scroll">
        {info && info.map((item, i) => (
          <ImageItem info={item} key={i} />
        ))}
        <style jsx>{`
      .scroll {
        white-space: nowrap;
        overflow: scroll;
        display: flex;
        margin-bottom: 10px;
      }
    `}</style>
      </div>
    )
  }
}


export default ImageSlide;
