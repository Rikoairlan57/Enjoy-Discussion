/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import ThreadCommentItem, { commentItemShape } from "./CommentItem";

function CommentList({ comments, upVote, downVote }) {
  return (
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-40">
      <div className="p-5 mb-5 border-2 rounded-xl">
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
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default CommentList;
