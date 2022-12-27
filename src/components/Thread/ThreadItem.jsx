/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import { AiFillLike, AiFillDislike, AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";
import { postedAt } from "../../utils/index";

function ThreadItem({
  id,
  title,
  body,
  createdAt,
  category,
  upVotesBy,
  downVotesBy,
  totalComments,
  authUser,
  upVote,
  downVote,
  user,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteThread = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteThread = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  return (
    <div
      className="mb-5 p-5 border-2 shadow-[0_6px_6px_0_rgba(0,0,0,0.2)]
       rounded-xl hover:shadow-none hover:border-2"
    >
      <div className="ml-5">
        <div className="text-4xl font-bold cursor-pointer hover:text-yellow-500">
          <Link to={`/threads/${id}`} style={{ textDecoration: "none" }}>
            <h2>{title}</h2>
          </Link>
        </div>
        <div>
          <header>
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <div className="flex items-center justify-start mt-3 space-x-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-18 h-18 rounded-full"
                  />
                  <div>
                    <span>{user.name}</span>
                    <span className="flex justify-start text-gray-500">
                      {postedAt(createdAt)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <p>#{category}</p>
                </div>
              </div>
            </div>
          </header>
          <article>
            <p
              dangerouslySetInnerHTML={{
                __html: `${body.substring(0, 200)}.....`,
              }}
            />
          </article>
          <hr />
          <div>
            {upVote && (
              <div>
                <p>
                  <button type="button" onClick={onUpVoteThread}>
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
                  <button type="button" onClick={onDownVoteThread}>
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

            <p>
              <AiOutlineComment /> {totalComments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
