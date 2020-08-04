import React from "react";
import {
  DetailHeader,
  DetailShop,
  DetailGroupInfo,
  BuyKnow,
  GroupOther
} from "../components/detail";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions, actionTypes } from "../ducks/detail";
import Footer from "./Footer";

@connect(
  state => ({
    recommend: state.detailInfo.recommend
  }),
  dispatch => ({
    getRecommend: bindActionCreators(actions.getRecommend, dispatch)
  })
)
class Detail extends React.PureComponent {
  componentDidMount() {
    const {
      location: { state },
      getRecommend
    } = this.props;
    getRecommend({
      url: "/api/detail/recommend",
      payload: { curName: state.name }
    });
  }
  render() {
    const {
      location: { state },
      history,
      recommend
    } = this.props;
    let mockPath = state.desc.replace(/[^\d]/g, "");
    let path = {
      pathname: `/submit/${mockPath}`,
      state
    };
    return (
      <div>
        <DetailHeader like={state} path={path} />
        <DetailShop info={state} />
        <DetailGroupInfo />
        <BuyKnow path={path} history={history} />
        <GroupOther recommend={recommend} />
        <Footer />
        <style jsx global>{`
          body {
            background: #f0f0f0;
          }
          .info-icon {
            background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/icon-comm.png)
              center 0 no-repeat;
            background-size: 14px auto;
            height: 14px;
            width: 14px;
            display: inline-block;
          }
        `}</style>
      </div>
    );
  }
}

export default Detail;
