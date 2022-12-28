/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import LeaderboardItem, { leaderboardItemShape } from "./LeaderboardItem";

const LeaderboardList = ({ leaderboards }) => {
  return (
    <div>
      <div>
        <header>
          <p>Users</p>
          <p>Score</p>
        </header>
        <div>
          {leaderboards.map((leaderboard, index) => (
            <LeaderboardItem key={index} {...leaderboard} />
          ))}
        </div>
      </div>
    </div>
  );
};

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape))
    .isRequired,
};

export default LeaderboardList;
