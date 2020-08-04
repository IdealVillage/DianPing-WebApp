import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

@connect(
  state => ({
    photos: state.photos
  }),
  null
)
class PhotoContent extends React.PureComponent {
  static propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object)
  };
  render() {
    const { photos } = this.props;
    return (
      <div className="container">
        {photos.length &&
          photos.map((item, i) => (
            <div className="item">
              <img src={item.image} />
            </div>
          ))}
        <style jsx>{`
          .container {
            display: flex;
            flex-wrap: wrap;
            margin: 10px;
          }
          .item {
            width: 50%;
          }
        `}</style>
      </div>
    );
  }
}

export default PhotoContent;
