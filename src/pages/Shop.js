import React from "react";
import PropTypes from "prop-types";
import {
  ShopHeader,
  ShopBaseInfo,
  Takeout,
  GroupInfo,
  Recommend,
  Comment,
  OtherInfo,
  Ad,
  Relation
} from "../components/shop";
import { Download } from "../components/download";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions, actionTypes } from "../ducks/shop";
import Footer from "./Footer";

@connect(
  state => ({
    comments: state.shopInfo.comments,
    groupInfos: state.shopInfo.groupInfos,
    recommend: state.shopInfo.recommend,
    ads: state.shopInfo.ads,
    relation: state.shopInfo.relation
  }),
  dispatch => ({
    getComment: bindActionCreators(actions.getComment, dispatch),
    getGroupInfo: bindActionCreators(actions.getGroupInfo, dispatch),
    getRecommend: bindActionCreators(actions.getRecommend, dispatch),
    getAd: bindActionCreators(actions.getAd, dispatch),
    getRelation: bindActionCreators(actions.getRelation, dispatch)
  })
)
class Shop extends React.PureComponent {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
  };
  componentDidMount() {
    const {
      getComment,
      getGroupInfo,
      getRecommend,
      getAd,
      getRelation
    } = this.props;
    //评论
    getComment("/api/shop/comment");
    //团购信息
    getGroupInfo("/api/shop/groupInfo");
    //推荐菜
    getRecommend("/api/shop/recommend");
    //广告
    getAd("/api/shop/ad");
    //相关
    getRelation("/api/shop/relation");
  }
  render() {
    const {
      location: { state, pathname },
      comments,
      groupInfos,
      recommend,
      ads,
      relation
    } = this.props;
    return (
      <div>
        <ShopHeader />
        <Download />
        <ShopBaseInfo num={comments.length} Info={state}/>
        <Takeout />
        <GroupInfo groupInfos={groupInfos} />
        <Recommend recommend={recommend} />
        <Comment
          comments={comments}
          commentNum={recommend ? recommend.recommendNum : 0}
        />
        <OtherInfo />
        <Ad ads={ads} />
        <Relation relation={relation} />
        <Footer />
        <style jsx global>{`
          body {
            background: #f0f0f0;
          }
        `}</style>
      </div>
    );
  }
}

export default Shop;
