/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import ThreadCommentItem, { commentItemShape } from "./CommentItem";

function CommentList({ comments, upVote, downVote }) {
  return (
    <div>
      <h3>Comment ({comments.length})</h3>
      {comments.map((comment) => (
        <ThreadCommentItem
          key={comment.id}
          {...comment}
          upVote={upVote}
          downVote={downVote}
        />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default CommentList;
