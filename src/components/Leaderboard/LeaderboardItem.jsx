import React from "react";
import PropTypes from "prop-types";

const LeaderboardItem = ({ user, score }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center justify-start space-x-3">
        <img
          className="w-12 h-12 rounded-full"
          src={user.avatar}
          alt={user.name}
        />
        <span>{user.name}</span>
      </div>
      <h1 className="flex justify-end items-center">
        <span className="font-bold mr-2">{score}</span>
      </h1>
    </div>
  );
};

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
