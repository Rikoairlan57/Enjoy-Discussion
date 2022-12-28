/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import ThreadItem, { threadItemShape } from "./ThreadItem";

const ThreadsList = ({ threads, upVote, downVote }) => {
  return (
    <div className="mt-5">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          upVote={upVote}
          downVote={downVote}
        />
      ))}
    </div>
  );
};

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadsList;
