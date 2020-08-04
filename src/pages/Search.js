import React from "react";
import pureRender from "pure-render-decorator";
import { bindActionCreators } from "redux";
import { actions } from "../ducks/search";
import { connect } from "react-redux";
import PropTypes from "prop-types";

@connect(
  state => ({
    searchIntro: state.searchIntro
  }),
  dispatch => ({
    getSearchIntro: bindActionCreators(actions.getSearchIcon, dispatch)
  })
)
@pureRender
class Search extends React.Component {
  static propTypes = {
    searchIntro: PropTypes.array.isRequired
  };
  static defaultProps = {
    searchIntro: []
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSearchIntro("/api/searchIntro");
  }
  render() {
    const { history, searchIntro } = this.props;
    return (
      <div>
        <div className="container">
          <input type="text" placeholder="输入商户名、地点" />
          <a onClick={() => history.goBack()}>取消</a>
        </div>
        <div className="outerIntro">
          <div className="innerIntro">
            {searchIntro.map((intro, index) => (
              <a className="intro" key={index}>
                {intro}
              </a>
            ))}
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          input {
            background: #f0f0f0;
            font-size: 14px;
            height: 30px;
            border-radius: 15px;
            width: 80%;
            border: none;
            margin-top: 10px;
            margin-left: 10px;
            padding-left: 10px;
          }
          input:focus {
            outline: none;
          }
          .container a {
            color: #f63;
            font-size: 14px;
            margin-top: 10px;
            margin-right: 8px;
          }
          .outerIntro {
            margin-top: 10px;
            padding: 10px 15px;
            background: #f0f0f0;
            width: 100%;
            box-sizing: border-box;
          }
          .innerIntro {
            display: flex;
            justify-content: space-around;
            align-content: space-around;
            flex-wrap: wrap;
            background: white;
          }
          .intro {
            height: 38px;
            width: 33%;
            line-height: 38px;
            color: #323232;
            text-align: center;
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }
}

export default Search;
