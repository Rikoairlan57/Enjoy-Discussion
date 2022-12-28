import React from "react";
import PropTypes from "prop-types";

const LeaderboardItem = ({ user, score }) => {
  return (
    <div>
      <div>
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
      </div>
      <p>{score}</p>
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
