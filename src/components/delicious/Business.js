import React from "react";

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curArea: "热门商区",
      curStreet: "全部商区"
    };
    
  }
  _handleClickTab(type,item){
    if (type==="business") {
      this.setState({
        ...this.state,
        curArea: item
      });
    }else if (type==="subway") {
      this.setState({
        ...this.state,
        curStreet: item
      });
    }
  }
  render() {
    const { curArea, curStreet } = this.state;
    const { areas, streets } = this.props;
    return (
      <div className="container">
        <div className="nav">
          <div className="nav-item">商圈</div>
          <div className="nav-item">地铁</div>
        </div>
        <div className="selector">
          <div className="left-selector">
            {areas.map((area, i) => (
              <div
                className={`area ${curArea === area ? "area-on" : ""}`}
                key={i}
                onClick={() => this._handleClickArea(area)}
              >
                {area}
              </div>
            ))}
          </div>
          <div className="right-selector">
            {streets.map((street, i) => (
              <div
                className={`street ${curStreet === street ? "street-on" : ""}`}
                key={i}
                onClick={() => this._handleClickStreet(street)}
              >
                {street}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
