import React from "react";
import PropTypes from "prop-types";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { postedAt } from "../../utils/index";

function CommentItem({
  id,
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser.id);
  const isDownVoted = downVotesBy.includes(authUser.id);

  const onUpVoteComment = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteComment = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  return (
    <>
      <div>
        <header>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start mt-3 space-x-3">
              <img
                src={owner.avatar}
                alt={owner.name}
                className="w-12 h-12 rounded-full"
              />
              <span>{owner.name}</span>
            </div>
            <p className="flex justify-end">{postedAt(createdAt)}</p>
          </div>
        </header>
        <p>{content}</p>
        <div className="flex space-x-5">
          {upVote && (
            <div>
              <p>
                <button type="button" onClick={onUpVoteComment}>
                  {isUpVoted ? (
                    <AiFillLike style={{ color: "#46459E" }} />
                  ) : (
                    <AiFillLike />
                  )}
                </button>
                {upVotesBy.length}
              </p>
            </div>
          )}
          {downVote && (
            <div>
              <p>
                <button type="button" onClick={onDownVoteComment}>
                  {isDownVoted ? (
                    <AiFillDislike style={{ color: "red" }} />
                  ) : (
                    <AiFillDislike />
                  )}
                </button>
                {downVotesBy.length}
              </p>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
};

CommentItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { commentItemShape };

export default CommentItem;
