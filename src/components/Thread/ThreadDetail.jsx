/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { postedAt } from "../../utils/index";

function ThreadDetail({
  id,
  authUser,
  title,
  createdAt,
  body,
  owner,
  category,
  upVotesBy,
  downVotesBy,
  upVoteThread,
  downVoteThread,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  return (
    <section>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <header>
          <div>
            <div>
              <img src={owner.avatar} alt={owner.name} />
            </div>
            <div>
              <p>{owner.name}</p>
              <p>{postedAt(createdAt)}</p>
            </div>
          </div>
          <div>
            <p>#{category}</p>
          </div>
        </header>
        <article>
          <p dangerouslySetInnerHTML={{ __html: body }} />
        </article>
        <div>
          <div>
            <p>
              <button type="button" onClick={() => upVoteThread(id)}>
                {isUpVoted ? (
                  <AiFillLike style={{ color: "#46459E" }} />
                ) : (
                  <AiFillLike />
                )}
              </button>
              {upVotesBy.length}
            </p>
          </div>
          <div>
            <p>
              <button type="button" onClick={() => downVoteThread(id)}>
                {isDownVoted ? (
                  <AiFillDislike style={{ color: "red" }} />
                ) : (
                  <AiFillDislike />
                )}
              </button>
              {downVotesBy.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVoteThread: PropTypes.func.isRequired,
  downVoteThread: PropTypes.func.isRequired,
};

export default ThreadDetail;
