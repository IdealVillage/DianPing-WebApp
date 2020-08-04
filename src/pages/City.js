import React from "react";
import PropTypes from "prop-types";
import { HotCities, MoreCity } from "../components/city";
import { SwitchBtn } from "../components/common";
import SearchBar from "../components/searchBar/SearchBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../ducks/city";

@connect(
  state => ({
    cities: state.hotCity
  }),
  dispatch => ({
    getHotCity: bindActionCreators(actions.getHotCity, dispatch),
    changeCity: bindActionCreators(actions.changeCity, dispatch)
  })
)
class City extends React.PureComponent {
  static propTypes = {
    cities: PropTypes.array.isRequired,
    getHotCity: PropTypes.func.isRequired
  };
  static defaultProps = {
    cities: []
  };
  constructor(props) {
    super(props);
    this.init = true;
    this.computeWords = this.computeWords.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }
  componentDidMount() {
    this.props.getHotCity("/api/cities");
  }
  handleChangeCity(cityName) {
    this.props.changeCity(cityName);
    this.props.history.goBack();
  }
  computeWords() {
    let result = [];
    for (let i = 65; i < 91; i++) {
      result.push(String.fromCharCode(i));
    }
    return result;
  }
  render() {
    const { history, cities } = this.props;
    return (
      <div className="container">
        <SwitchBtn mainhead="国内" secondhead="国际/港澳台" />
        <SearchBar
          postion="center"
          text="输入城市名或拼音查询"
          style={{
            width: "90%",
            height: 32,
            background: "#f2f2f2",
            container: "80%",
            opacity: "50%"
          }}
        />
        <HotCities cities={cities} handleChangeCity={this.handleChangeCity} />
        <MoreCity words={this.computeWords()} />
        <style jsx>{`
          body {
            background: #eeeeee;
            height: 2000px;
          }
        `}</style>
      </div>
    );
  }
}

export default City;
