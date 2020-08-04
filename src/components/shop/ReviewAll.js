import React from "react";
import { TopBar } from "../common";
import { CommentItem } from "./comment";

class ReviewAll extends React.PureComponent {
  render() {
    const {
      location: {
        state: { comments, commentNum }
      }
    } = this.props;
    return (
      <div>
        <TopBar headerText="网友点评" />
        <div className="comments">
          {comments.map((item, i) => (
            <CommentItem info={item} key={i} />
          ))}
        </div>
        <h3>
          还有
          {commentNum}
          条点评,可在大众点评APP查看
        </h3>
        <style jsx global>{`
          body {
            background: #f0f0f0;
          }
        `}</style>
        <style jsx>{`
          .comments {
            margin-top: 10px;
            background: white;
          }
          h3 {
            color: #f63;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default ReviewAll;
