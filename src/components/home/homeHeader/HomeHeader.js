import React from "react";
import pureRender from "pure-render-decorator";
import userIcon from "@public/img/usered.png";
import searchIcon from "@public/img/search.png";
import header from "./style";
import SearchBar from "../../searchBar/SearchBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../ducks/login";

@connect(
  null,
  dispatch => ({
    getUsername: bindActionCreators(actions.getUsernameFromCookie, dispatch)
  })
)
@pureRender
class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  static defaultProps = {
    cityName: "北京"
  };
  _handleClick() {
    this.props.getUsername();
    this.props.history.push("/user");
  }
  render() {
    const { cityName, history } = this.props;
    return (
      <div className="headerContainer">
        <a className="city" onClick={() => history.push("/city")}>
          {cityName}
        </a>
        <SearchBar
          postion="left"
          text="输入商户名、地点"
          style={{
            width: "90%",
            height: 30
          }}
          handleClick={() => history.push("/search")}
        />
        <img
          src={userIcon}
          alt="登录"
          className="userIcon"
          onClick={this._handleClick}
        />
        <style jsx>{header}</style>
      </div>
    );
  }
}

export default HomeHeader;
