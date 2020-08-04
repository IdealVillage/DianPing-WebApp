import React from "react";
import SlideItem from "./SlideItem";

class SlideList extends React.PureComponent {
  render() {
    const { relation } = this.props;
    return (
      <div>
        <SlideItem
          text="相关区域甜品饮品"
          info={relation && relation.relative}
          type='drink'
        />
        <SlideItem
          text="热门甜品饮品推荐"
          info={relation && relation.hot}
        />
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default SlideList;
