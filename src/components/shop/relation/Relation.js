import React from "react";
import { container } from "../../styles";
import ShopBtn from "./ShopBtn";
import SlideList from "./SlideList";

class Relation extends React.PureComponent {
  render() {
    const { relation } = this.props;
    return (
      <div className="container">
        <ShopBtn />
        <SlideList relation={relation} />
        <style jsx>{container}</style>
      </div>
    );
  }
}

export default Relation;
