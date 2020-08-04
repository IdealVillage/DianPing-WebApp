import React from "react";
import { HomeHeader, Ad, Cheaps, GuessULike } from "../components/home";
import { Download } from "../components/download";
import Category from "../components/home/category/Category";
import { actions } from "../ducks/home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import pureRender from "pure-render-decorator";
import categories from "../Api/categories";
import Footer from "./Footer";

@connect(
  state => ({
    cityName: state.userInfo.cityName,
    cheaps: state.ad,
    guessULike: state.guessULike,
    status: state.reqStatus.status
  }),
  dispatch => ({
    getLocation: bindActionCreators(actions.getUserLocation, dispatch),
    getAd: bindActionCreators(actions.getAd, dispatch),
    getGuessULike: bindActionCreators(actions.getGuessULike, dispatch)
  })
)
@pureRender
class Home extends React.Component {
  static defaultProps = {
    cityName: "北京"
  };
  constructor(props) {
    super(props);
    this.init = true;
  }
  componentDidMount() {
    if (this.props.status === "init") {
      this.props.getLocation("/api/getLocation");
      this.props.getAd("/api/cheaps");
      this.props.getGuessULike("/api/guessULike");
      this.init = false;
    }
  }
  render() {
    const { cityName, history, cheaps, guessULike } = this.props;
    return (
      <div>
        <HomeHeader cityName={cityName} history={history} searc />
        <Download history={history} />
        <Category categories={categories} />
        <Ad />
        <Cheaps cheaps={cheaps} />
        <GuessULike guessULike={guessULike} history={history} />
        <Footer />
      </div>
    );
  }
}

export default Home;
