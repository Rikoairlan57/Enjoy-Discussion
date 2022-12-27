/* eslint-disable react/button-has-type */
/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { postedAt } from "../../utils/index";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <section className="mx-5 sm:mx-10 md:mx-20 lg:mx-40">
      <div className=" my-5 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-xl hover:text-yellow-500"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className=" mb-5 p-5 border-2 rounded-xl">
        <header>
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center justify-start space-x-3">
              <img
                src={owner.avatar}
                alt={owner.name}
                className="w-18 h-18 rounded-full"
              />
              <span className="text-xl font-bold">{owner.name}</span>
            </div>
            <p className="flex justify-end  text-gray-500">
              {postedAt(createdAt)}
            </p>
          </div>

          <span className="px-2 py-1 font-bold bg-yellow-500 text-white rounded-md">
            #{category}
          </span>
          <h2 className="my-3 font-bold text-xl">{title}</h2>
        </header>
        <hr />
        <article className="mb-3 py-3">
          <p dangerouslySetInnerHTML={{ __html: body }} />
        </article>
        <div className="grid grid-cols-2 justify-items-center">
          <div>
            <button type="button" onClick={() => upVoteThread(id)}>
              {isUpVoted ? <AiFillLike fill="#ca8a04" /> : <AiFillLike />}
            </button>
            {upVotesBy.length}
          </div>
          <div>
            <button type="button" onClick={() => downVoteThread(id)}>
              {isDownVoted ? (
                <AiFillDislike fill="#ca8a04" />
              ) : (
                <AiFillDislike />
              )}
            </button>
            {downVotesBy.length}
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
