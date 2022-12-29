/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import LeaderboardItem, { leaderboardItemShape } from "./LeaderboardItem";

const LeaderboardList = ({ leaderboards }) => {
  return (
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-40">
      <div className=" mt-5">
        <h2 className="font-bold text-xl mb-5">Top active user</h2>
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
