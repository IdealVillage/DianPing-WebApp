import React from "react";
import PropTypes from "prop-types";
import { TopBar } from "../../common";
import { connect } from "react-redux";
import ShopItem from "./ShopItem";

@connect(
  state => ({
    destination: state.detailInfo.destination
  }),
  null
)
class Subbranch extends React.PureComponent {
  static propTypes = {
    destination: PropTypes.array.isRequired
  };
  render() {
    const {
      destination,
      location: { state }
    } = this.props;
    return (
      <div>
        <TopBar headerText="适用商户" />
        {destination.map((des, i) => (
          <ShopItem shop={{ name: state, des }} key={i}/>
        ))}
      </div>
    );
  }
}

export default Subbranch;
