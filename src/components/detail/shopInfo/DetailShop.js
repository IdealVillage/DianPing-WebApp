import React from "react";
import { Line, Star } from "../../common";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../../ducks/detail";
import { withRouter } from "react-router-dom";
import { RedirectBtn } from "../../common";

@connect(
  state => ({
    destination: state.detailInfo.destination
  }),
  dispatch => ({
    getDestination: bindActionCreators(actions.getDestination, dispatch)
  })
)
class DetailShop extends React.PureComponent {
  constructor(props) {
    super(props);
    this._redirect = this._redirect.bind(this);
  }
  componentDidMount() {
    this.props.getDestination("/api/detail/destination");
  }
  _redirect(pathname, state) {
    return () => {
      const { history } = this.props;
      console.log("pathname is ", pathname);
      history.push({ pathname, state });
    };
  }
  render() {
    const {
      info,
      destination,
      location: { pathname },
      match
    } = this.props;
    const id = match.params.id;
    return (
      <div style={{ background: "white" }}>
        <RedirectBtn
          text={`适用商户(${destination.length})`}
          linkTo={this._redirect(pathname + "/subbranch", info.name)}
        />
        <Line />
        <div
          className="business-info"
          onClick={this._redirect(`/shop/${id}`, info)}
        >
          <div className="base-info">
            <div className="info-left">
              <h1 className="shop-name">{info.name}</h1>
              <Star percent="80%" />
            </div>
            <span className="distance">>100km</span>
          </div>
          <Line align={true} height="70px" />
          <div className="icon">
            <div className="phone-icon" />
          </div>
        </div>
        <Line />
        <div className="destination">
          <i className="info-icon" style={{ backgroundPositionY: "-58px" }} />
          友谊南路111号印象城购物中心4层
        </div>
        <style jsx>{`
          .business-info {
            display: flex;
            justify-content: space-between;
            padding-left: 15px;
            margin: 10px 0px;
          }
          .base-info {
            display: flex;
            justify-content: space-between;
            flex: 1;
            align-items: center;
          }
          .info-left {
            display: flex;
            flex-direction: column;
          }
          .shop-name {
            font-weight: 700;
            font-size: 18px;
            color: #878787;
            font-family: Helvetica;
            margin-bottom: 10px;
          }
          .distance {
            color: #666;
            font-size: 12px;
            margin-top: 40px;
          }
          .icon {
            padding: 25px;
          }
          .phone-icon {
            background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/mobile.png)
              no-repeat;
            width: 25px;
            height: 25px;
            background-size: 25px auto;
          }
          .destination {
            font-size: 14px;
            color: #333;
            padding: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(DetailShop);
