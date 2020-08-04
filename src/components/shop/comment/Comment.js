import React from "react";
import PropTypes from "prop-types";
import { RedirectBtn } from "../../common";
import CommentItem from "./CommentItem";
import { withRouter } from "react-router";

class Comment extends React.PureComponent {
  static defaultProps = {
    recommendNum: 0
  };
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
  };
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    const {
      history,
      location: { pathname },
      commentNum,
      comments
    } = this.props;
    history.push({
      pathname: pathname + "/review_all",
      state: {
        commentNum: commentNum - 3,
        comments: comments.slice(0, 3)
      }
    });
  }
  render() {
    const { comments, commentNum } = this.props;
    return (
      <div className="container">
        <RedirectBtn
          text={`网友点评(${commentNum})`}
          linkTo={this._handleClick}
        />
        {comments.slice(0, 2).map((item, i) => (
          <CommentItem info={item} key={i} />
        ))}
        <style jsx>{`
          .container {
            background: white;
            margin-top: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(Comment);
