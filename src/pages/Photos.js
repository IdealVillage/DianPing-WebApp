import React from "react";
import { TopBar, Line } from "../components/common";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PhotoTitle, PhotoContent } from "../components/shop/shopPhotos";
import { actions } from "../ducks/photos";

@connect(
  null,
  dispatch => ({
    getPhotos: bindActionCreators(actions.getPhotos, dispatch)
  })
)
class Photos extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      curTitle: "all"
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(curName) {
    this.setState({
      curTitle: curName
    });
    this.props.getPhotos(`/api/photos/${curName}`);
  }
  componentDidMount() {
    this.props.getPhotos(`/api/photos/${this.state.curTitle}`);
  }
  render() {
    return (
      <div className="container">
        <TopBar headerText="图片" mergeStyles={{ background: "white" }} />
        <Line />
        <PhotoTitle
          handleClick={this._handleClick}
          status={this.state.curTitle}
        />
        <PhotoContent />
        <style jsx global>{`
          body {
            background: #f0f0f0;
          }
        `}</style>
      </div>
    );
  }
}

export default Photos;
