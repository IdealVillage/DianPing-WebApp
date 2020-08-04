import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import Pagation from "./Pagation";

const style = {
  width: "8px",
  height: "8px",
  borderRadius: "4px",
  backgroundColor: "#ccc",
  marginRight: "6px"
};
const activeStyle = {
  backgroundColor: "#f63"
};

class Category extends React.Component {
  static propTypes = {
    categories: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }
  handleChangeIndex(index) {
    this.setState({
      activeIndex: index
    });
  }
  render() {
    const { categories, history } = this.props;
    return (
      <div>
        <SwipeableViews
          resistance
          onChangeIndex={index => this.handleChangeIndex(index)}
        >
          {categories.map((singlePage, index) => (
            <div className="singleContainer" key={index}>
              {singlePage.map((category, i) => (
                <div
                  className="category"
                  key={i}
                  onClick={
                    category.name === "美食"
                      ? () => history.push("/delicious")
                      : () => {}
                  }
                >
                  <img
                    src={category.src}
                    alt={category.name}
                    className="categoryIcon"
                  />
                  {category.name}
                </div>
              ))}
            </div>
          ))}
        </SwipeableViews>
        <Pagation
          style={style}
          activeStyle={activeStyle}
          num={3}
          activeIndex={this.state.activeIndex}
        />
        <style jsx>{`
          .singleContainer {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
            height: 175px;
            flex-direction: row;
            margin: 0 10px;
          }
          .category {
            width: 20%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 13px;
          }
          .categoryIcon {
            width: 44px;
            height: 44px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(Category);
